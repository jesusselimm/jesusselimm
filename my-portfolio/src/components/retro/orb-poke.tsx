"use client";

import { useEffect, useRef, useState } from "react";
import { DitherOrb } from "./dither-orb";

const lines = ["ouch.", "hey!", "okay, okay.", "that's enough.", "...", "I'm just a sphere.", "rude."];

/** The hero orb, with a small reaction when poked. */
export function OrbPoke() {
  const [msg, setMsg] = useState("");
  const count = useRef(0);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const poke = () => {
    setMsg(lines[count.current % lines.length]);
    count.current += 1;
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setMsg(""), 1600);
  };

  return (
    <div className="relative h-full w-full">
      <button
        type="button"
        onClick={poke}
        aria-label="Poke the sphere"
        className="block h-full w-full cursor-pointer rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--mint-deep)]"
      >
        <DitherOrb />
      </button>
      <p
        role="status"
        aria-live="polite"
        className="pointer-events-none absolute inset-x-0 -bottom-2 m-0 text-center font-[family-name:var(--font-code)] text-xs text-[var(--muted)]"
      >
        {msg}
      </p>
    </div>
  );
}
