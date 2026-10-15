"use client";

import { useEffect, useRef, useState } from "react";
import { playPop } from "@/lib/sound";
import { DitherOrb } from "./dither-orb";

const lines = ["ouch.", "hey!", "okay, okay.", "that's enough.", "...", "I'm just a sphere.", "rude."];

type Tail = "bottom-left" | "bottom-right" | "bottom-center" | "top-left" | "top-right" | "top-center";

/**
 * Spots around the sphere (percent of its box). The tail always points back
 * toward the sphere, so the bubble reads as "the sphere said it".
 */
const SPOTS: { x: number; y: number; tail: Tail }[] = [
  { x: 76, y: 10, tail: "bottom-left" },
  { x: 24, y: 10, tail: "bottom-right" },
  { x: 50, y: 4, tail: "bottom-center" },
  { x: 84, y: 40, tail: "bottom-left" },
  { x: 16, y: 40, tail: "bottom-right" },
  { x: 80, y: 78, tail: "top-left" },
  { x: 20, y: 78, tail: "top-right" },
  { x: 50, y: 94, tail: "top-center" },
];

const TAIL_CLASS: Record<Tail, string> = {
  "bottom-left": "-bottom-[9px] left-4 border-b-2 border-r-2",
  "bottom-right": "-bottom-[9px] right-4 border-b-2 border-r-2",
  "bottom-center": "-bottom-[9px] left-1/2 -translate-x-1/2 border-b-2 border-r-2",
  "top-left": "-top-[9px] left-4 border-t-2 border-l-2",
  "top-right": "-top-[9px] right-4 border-t-2 border-l-2",
  "top-center": "-top-[9px] left-1/2 -translate-x-1/2 border-t-2 border-l-2",
};

/** The hero orb, with a speech bubble that pops up somewhere new on every poke. */
export function OrbPoke() {
  const [bubble, setBubble] = useState<{ msg: string; x: number; y: number; tail: Tail; key: number } | null>(null);
  const count = useRef(0);
  const lastSpot = useRef(-1);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const poke = () => {
    // never the same spot twice in a row
    let i = Math.floor(Math.random() * SPOTS.length);
    if (i === lastSpot.current) i = (i + 1 + Math.floor(Math.random() * (SPOTS.length - 1))) % SPOTS.length;
    lastSpot.current = i;
    const spot = SPOTS[i];
    const jitter = () => (Math.random() - 0.5) * 6;

    count.current += 1;
    setBubble({
      msg: lines[(count.current - 1) % lines.length],
      x: spot.x + jitter(),
      y: spot.y + jitter(),
      tail: spot.tail,
      key: count.current,
    });
    playPop();

    clearTimeout(timer.current);
    timer.current = setTimeout(() => setBubble(null), 1800);
  };

  return (
    <div className="relative h-full w-full">
      <button
        type="button"
        onClick={(e) => {
          poke();
          // detail > 0 means a pointer click: drop focus so the keyboard ring doesn't
          // appear when the visitor then presses a key (e.g. D). Enter/Space keep focus.
          if (e.detail > 0) e.currentTarget.blur();
        }}
        aria-label="Poke the sphere"
        className="block h-full w-full cursor-pointer rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--mint-deep)]"
      >
        <DitherOrb />
      </button>

      <div role="status" aria-live="polite" className="pointer-events-none absolute inset-0 z-10">
        {bubble && (
          <div
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${bubble.x}%`, top: `${bubble.y}%` }}
          >
            <div
              key={bubble.key}
              className="orb-bubble relative whitespace-nowrap rounded-[4px] border-2 border-[var(--frame)] bg-[var(--bg)] px-3 py-2 font-[family-name:var(--font-code)] text-[13px] shadow-[3px_3px_0_var(--shadow-c)]"
            >
              {bubble.msg}
              <span
                aria-hidden
                className={`absolute h-3 w-3 rotate-45 border-[var(--frame)] bg-[var(--bg)] ${TAIL_CLASS[bubble.tail]}`}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
