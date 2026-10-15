"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { playClick } from "@/lib/sound";
import { cn } from "@/lib/utils";
import { WindowCard } from "./window-card";

export type Photo = { src: string; title: string; width: number; height: number };

const pixel = "font-[family-name:var(--font-pixel)]";
const code = "font-[family-name:var(--font-code)]";

/** Resolutions (px wide) the photo "loads" through, like an old progressive image. */
const STEPS = [6, 12, 24, 48, 96];
const STEP_MS = 65;

/**
 * Retro photo viewer: a window with a progressive pixel-resolve between photos,
 * scanlines, thumbnail strip and a status bar. ←/→, swipe, click and buttons
 * all move through the photos.
 */
export function PhotoViewer({ photos }: { photos: Photo[] }) {
  const [index, setIndex] = useState(0);
  const canvas = useRef<HTMLCanvasElement>(null);
  const first = useRef(true);
  const runId = useRef(0);
  const drag = useRef<{ x: number; moved: boolean } | null>(null);

  const go = useCallback(
    (delta: number) => {
      playClick();
      setIndex((i) => (i + delta + photos.length) % photos.length);
    },
    [photos.length],
  );

  // pixel-resolve overlay each time the photo changes (skipped on first paint)
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    const cv = canvas.current;
    if (!cv || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    const id = ++runId.current;
    const photo = photos[index];
    const img = new window.Image();
    const W = 384;
    const H = Math.round((W * photo.height) / photo.width);
    cv.width = W;
    cv.height = H;
    cv.style.opacity = "1";

    const tmp = document.createElement("canvas");
    const tctx = tmp.getContext("2d");

    img.onload = () => {
      if (id !== runId.current || !tctx) return;
      let step = 0;
      const tick = () => {
        if (id !== runId.current) return;
        if (step >= STEPS.length) {
          cv.style.opacity = "0";
          return;
        }
        const w = STEPS[step];
        const h = Math.max(1, Math.round((w * photo.height) / photo.width));
        tmp.width = w;
        tmp.height = h;
        tctx.drawImage(img, 0, 0, w, h);
        ctx.imageSmoothingEnabled = false;
        ctx.clearRect(0, 0, W, H);
        ctx.drawImage(tmp, 0, 0, w, h, 0, 0, W, H);
        step += 1;
        setTimeout(tick, STEP_MS);
      };
      tick();
    };
    img.src = photo.src;
    return () => {
      runId.current += 1;
    };
  }, [index, photos]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      go(1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(-1);
    }
  };

  const photo = photos[index];
  const n = (i: number) => String(i + 1).padStart(2, "0");

  return (
    <div
      className="grid items-start gap-8 md:grid-cols-[minmax(0,560px)_1fr] md:gap-12"
      onKeyDown={onKeyDown}
    >
      <WindowCard title="gallery.exe">
        <div
          tabIndex={0}
          role="group"
          aria-roledescription="carousel"
          aria-label="Photo gallery"
          className="-mx-4 -mt-4 select-none bg-[var(--bg-2)] p-4 outline-none sm:p-8 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--mint-deep)]"
        >
          <div
            className="relative cursor-pointer touch-pan-y border-2 border-[var(--frame)]"
            onPointerDown={(e) => {
              drag.current = { x: e.clientX, moved: false };
            }}
            onPointerUp={(e) => {
              const d = drag.current;
              drag.current = null;
              if (!d) return;
              const dx = e.clientX - d.x;
              if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
              else go(1);
            }}
            onPointerCancel={() => {
              drag.current = null;
            }}
          >
            <Image
              key={photo.src}
              src={photo.src}
              alt={`Photograph — ${photo.title}`}
              width={photo.width}
              height={photo.height}
              sizes="(min-width: 768px) 520px, 100vw"
              priority={index === 0}
              draggable={false}
              className="block h-auto w-full"
            />
            <canvas
              ref={canvas}
              aria-hidden
              className="pointer-events-none absolute inset-0 h-full w-full opacity-0"
              style={{ imageRendering: "pixelated" }}
            />
            {/* scanlines */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "repeating-linear-gradient(0deg, rgba(20,20,20,0.07) 0, rgba(20,20,20,0.07) 1px, transparent 1px, transparent 3px)",
              }}
            />
          </div>
        </div>

        <div
          className={cn(
            "-mx-4 -mb-4 mt-4 flex items-center justify-between gap-3 border-t-2 border-[var(--frame)] px-4 py-2 text-xs text-[var(--muted)]",
            code,
          )}
        >
          <span className="truncate">{photo.src.replace("/", "")}</span>
          <span className="shrink-0">
            {photo.width}×{photo.height} · {n(index)}/{n(photos.length - 1)}
          </span>
        </div>
      </WindowCard>

      <div>
        <p className={`m-0 mb-2 text-xs text-[var(--muted)] ${code}`}>
          № {n(index)} / {n(photos.length - 1)}
        </p>
        <h3 className={`m-0 mb-2 text-[28px] font-bold leading-tight ${pixel}`}>{photo.title}</h3>
        <p className={`m-0 mb-6 text-xs text-[var(--muted)] ${code}`}>photograph</p>

        <div className="mb-5 flex flex-wrap gap-2" role="tablist" aria-label="Choose a photo">
          {photos.map((p, i) => (
            <button
              key={p.src}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show ${p.title}`}
              onClick={() => {
                if (i === index) return;
                playClick();
                setIndex(i);
              }}
              className={cn(
                "relative h-[60px] w-[45px] overflow-hidden border-2 transition-[transform,box-shadow] duration-100",
                "motion-reduce:transition-none",
                i === index
                  ? "border-[var(--frame)] shadow-[3px_3px_0_var(--mint)] -translate-x-[1px] -translate-y-[1px]"
                  : "border-[var(--frame)] opacity-70 hover:opacity-100",
              )}
            >
              <Image src={p.src} alt="" fill sizes="45px" className="object-cover" />
            </button>
          ))}
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous photo"
            className={cn(
              "border-2 border-[var(--frame)] rounded-[4px] bg-[var(--bg)] px-4 py-2 text-sm text-[var(--fg)]",
              "shadow-[3px_3px_0_var(--shadow-c)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none",
              code,
            )}
          >
            ◀ prev
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next photo"
            className={cn(
              "border-2 border-[var(--frame)] rounded-[4px] bg-[var(--mint)] px-4 py-2 text-sm text-[var(--on-mint)]",
              "shadow-[3px_3px_0_var(--shadow-c)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none",
              code,
            )}
          >
            next ▶
          </button>
        </div>
        <p className={`m-0 mt-4 text-xs text-[var(--muted)] ${code}`}>← → keys, swipe, or just click the photo</p>
      </div>
    </div>
  );
}
