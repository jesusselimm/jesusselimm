"use client";

import { useEffect, useRef } from "react";

const BAYER = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5];

function hexToRgb(hex: string, fallback: [number, number, number]): [number, number, number] {
  let h = hex.trim().replace("#", "");
  if (h.length === 3) h = h.split("").map((c) => c + c).join("");
  if (!/^[0-9a-fA-F]{6}$/.test(h)) return fallback;
  const n = parseInt(h, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, (n >> 0) & 255];
}

/**
 * Low-res sphere with ordered (Bayer) dithering, drawn on a plain 2D canvas and
 * scaled up with pixelated rendering. Pauses off-screen and under reduced motion.
 */
export function DitherOrb({ size = 96, className }: { size?: number; className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current;
    const ctx = cv?.getContext("2d");
    if (!cv || !ctx) return;

    const N = size;
    const img = ctx.createImageData(N, N);
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let lit: [number, number, number] = [47, 212, 166];
    let dark: [number, number, number] = [20, 20, 20];
    const readColors = () => {
      const cs = getComputedStyle(root);
      lit = hexToRgb(cs.getPropertyValue("--mint"), lit);
      dark = hexToRgb(cs.getPropertyValue("--frame"), dark);
    };
    readColors();

    // Pointer steers the light; after a pause it drifts back to the idle orbit.
    let px = 0;
    let py = 0;
    let lastMove = -1e9;
    let mix = 0;
    let sx = 0;
    let sy = 0;
    const clamp = (v: number) => Math.max(-1, Math.min(1, v));
    const onMove = (e: PointerEvent) => {
      const r = cv.getBoundingClientRect();
      const span = Math.max(r.width, 260);
      px = clamp(((e.clientX - (r.left + r.width / 2)) / span) * 1.8);
      py = clamp(((e.clientY - (r.top + r.height / 2)) / span) * 1.8);
      lastMove = performance.now();
    };

    const draw = (t: number, steer = false) => {
      const d = img.data;
      const h = N / 2;
      if (steer) {
        const active = performance.now() - lastMove < 2500 ? 1 : 0;
        mix += (active - mix) * 0.08;
        sx += (px - sx) * 0.15;
        sy += (py - sy) * 0.15;
      }
      let lx = Math.cos(t) * 0.8 * (1 - mix) + sx * mix;
      let ly = -0.45 * (1 - mix) + sy * mix;
      let lz = (0.55 + 0.35 * Math.sin(t)) * (1 - mix) + 0.6 * mix;
      const ll = Math.hypot(lx, ly, lz);
      lx /= ll; ly /= ll; lz /= ll;
      for (let y = 0; y < N; y++) {
        for (let x = 0; x < N; x++) {
          const nx = (x - h + 0.5) / (h * 0.9);
          const ny = (y - h + 0.5) / (h * 0.9);
          const r2 = nx * nx + ny * ny;
          const i = (y * N + x) * 4;
          if (r2 > 1) { d[i + 3] = 0; continue; }
          const nz = Math.sqrt(1 - r2);
          const lum = 0.12 + 0.88 * Math.max(0, nx * lx + ny * ly + nz * lz);
          const th = (BAYER[(y & 3) * 4 + (x & 3)] + 0.5) / 16;
          const c = lum > th ? lit : dark;
          d[i] = c[0]; d[i + 1] = c[1]; d[i + 2] = c[2]; d[i + 3] = 255;
        }
      }
      ctx.putImageData(img, 0, 0);
    };

    let raf = 0;
    let visible = true;
    const loop = (ms: number) => {
      draw(ms / 1400, true);
      raf = requestAnimationFrame(loop);
    };
    const start = () => { if (!raf && !reduce && visible) raf = requestAnimationFrame(loop); };
    const stop = () => { if (raf) { cancelAnimationFrame(raf); raf = 0; } };

    draw(0.8);
    start();

    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible) start();
      else stop();
    });
    io.observe(cv);
    if (!reduce) window.addEventListener("pointermove", onMove, { passive: true });

    const mo = new MutationObserver(() => { readColors(); if (reduce) draw(0.8); });
    mo.observe(root, { attributes: true, attributeFilter: ["data-theme"] });

    return () => {
      stop();
      io.disconnect();
      mo.disconnect();
      window.removeEventListener("pointermove", onMove);
    };
  }, [size]);

  return (
    <canvas
      ref={ref}
      width={size}
      height={size}
      aria-hidden
      className={className}
      style={{ imageRendering: "pixelated", width: "100%", height: "100%", display: "block" }}
    />
  );
}
