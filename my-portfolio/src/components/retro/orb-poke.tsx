"use client";

import { useEffect, useRef, useState } from "react";
import { DitherOrb } from "./dither-orb";

const lines = ["ouch.", "hey!", "okay, okay.", "that's enough.", "...", "I'm just a sphere.", "rude."];

/** The hero orb, with a speech bubble when poked. */
export function OrbPoke() {
  const [msg, setMsg] = useState("");
  const [tick, setTick] = useState(0);
  const count = useRef(0);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const poke = () => {
    setMsg(lines[count.current % lines.length]);
    setTick((t) => t + 1); // re-key the bubble so the pop animation replays on every poke
    count.current += 1;
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setMsg(""), 1800);
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

      <div role="status" aria-live="polite" className="pointer-events-none absolute right-[2%] top-[2%] z-10">
        {msg && (
          <div
            key={tick}
            className="orb-bubble relative whitespace-nowrap rounded-[4px] border-2 border-[var(--frame)] bg-[var(--bg)] px-3 py-2 font-[family-name:var(--font-code)] text-[13px] shadow-[3px_3px_0_var(--shadow-c)]"
          >
            {msg}
            <span
              aria-hidden
              className="absolute -bottom-[9px] left-4 h-3 w-3 rotate-45 border-b-2 border-r-2 border-[var(--frame)] bg-[var(--bg)]"
            />
          </div>
        )}
      </div>
    </div>
  );
}
