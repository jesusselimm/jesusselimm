"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { playSweep } from "@/lib/sound";

/**
 * Page transition: the screen is split into ~40 square tiles. On an internal
 * link click the tiles slide up from below and cover the old page, the route
 * changes underneath, then the tiles keep going up and uncover the new page
 * from the bottom. Skipped for reduced motion, new-tab/modified clicks,
 * external links, same-page (#hash) links and browser back/forward.
 */

const TARGET_TILES = 40;
const TILE_MS = 220;
const ROW_STAGGER = 22;
const COL_STAGGER = 9;

type Tile = { el: HTMLDivElement; y: number; row: number; col: number };

/** Never let an animation that doesn't progress (hidden tab, no frames) block navigation. */
const SAFETY_MS = 900;
const withSafety = (p: Promise<unknown>) =>
  Promise.race([p, new Promise((resolve) => setTimeout(resolve, SAFETY_MS))]);

export function PageTransitions() {
  const router = useRouter();
  const pathname = usePathname();
  const host = useRef<HTMLDivElement>(null);
  const tiles = useRef<Tile[]>([]);
  const geometry = useRef({ rows: 0, size: 0, vh: 0 });
  const busy = useRef(false);
  const pending = useRef(false);
  const fallback = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    const el = host.current;
    if (!el) return;

    const build = () => {
      // fall back to sane sizes if the viewport reports 0 (hidden/embedded frames)
      const vw = window.innerWidth || document.documentElement.clientWidth || 1280;
      const vh = window.innerHeight || document.documentElement.clientHeight || 800;
      const cols = Math.max(3, Math.round(Math.sqrt((TARGET_TILES * vw) / vh)));
      const size = Math.ceil(vw / cols);
      const rows = Math.ceil(vh / size);
      geometry.current = { rows, size, vh };
      tiles.current = [];
      el.replaceChildren();
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const t = document.createElement("div");
          t.style.cssText =
            `position:absolute;left:${c * size}px;top:${r * size}px;width:${size + 1}px;height:${size + 1}px;` +
            `background:${Math.random() < 0.18 ? "var(--mint)" : "var(--bar)"};` +
            `transform:translateY(${vh + 40}px);will-change:transform`;
          el.appendChild(t);
          tiles.current.push({ el: t, y: r * size, row: r, col: c });
        }
      }
    };

    const delayFor = (t: Tile) =>
      (geometry.current.rows - 1 - t.row) * ROW_STAGGER + t.col * COL_STAGGER + Math.random() * 18;

    const cover = () =>
      withSafety(
        Promise.all(
        tiles.current.map(
          (t) =>
            t.el.animate(
              [{ transform: `translateY(${geometry.current.vh - t.y + 40}px)` }, { transform: "translateY(0)" }],
              { duration: TILE_MS, delay: delayFor(t), easing: "steps(4, end)", fill: "forwards" },
            ).finished,
        ),
        ),
      );

    const reveal = () => {
      clearTimeout(fallback.current);
      pending.current = false;
      const { size } = geometry.current;
      void withSafety(Promise.all(
        tiles.current.map(
          (t) =>
            t.el.animate(
              [{ transform: "translateY(0)" }, { transform: `translateY(${-(t.y + size + 40)}px)` }],
              { duration: TILE_MS, delay: delayFor(t), easing: "steps(4, end)", fill: "forwards" },
            ).finished,
        ),
      )).then(() => {
        el.replaceChildren();
        tiles.current = [];
        el.style.display = "none";
        busy.current = false;
      });
    };

    const start = async (href: string) => {
      busy.current = true;
      build();
      el.style.display = "block";
      playSweep();
      await cover();
      pending.current = true;
      router.push(href);
      // if the route never changes (failed navigation), don't leave the screen covered
      fallback.current = setTimeout(reveal, 1800);
    };

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a || (a.target && a.target !== "_self") || a.hasAttribute("download")) return;
      if (a.dataset.noTransition !== undefined) return;
      let url: URL;
      try {
        url = new URL(a.href, window.location.href);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname) return; // hash / query only
      e.preventDefault();
      e.stopPropagation();
      if (busy.current) return;
      void start(url.pathname + url.search + url.hash);
    };

    document.addEventListener("click", onClick, true);
    (el as HTMLDivElement & { __reveal?: () => void }).__reveal = reveal;
    return () => {
      document.removeEventListener("click", onClick, true);
      clearTimeout(fallback.current);
    };
  }, [router]);

  // the route committed: uncover the new page
  useEffect(() => {
    if (!pending.current) return;
    const el = host.current as (HTMLDivElement & { __reveal?: () => void }) | null;
    // setTimeout, not rAF: rAF is paused in background tabs and would leave the screen covered
    const id = setTimeout(() => el?.__reveal?.(), 60);
    return () => clearTimeout(id);
  }, [pathname]);

  return <div ref={host} aria-hidden="true" className="fixed inset-0 z-[96] hidden overflow-hidden" />;
}
