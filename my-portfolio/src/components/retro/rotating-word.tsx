"use client";

import { useEffect, useState } from "react";

/**
 * Types and erases through a list of words. Starts on the first word so the
 * server-rendered text is meaningful, and stays static under reduced motion.
 */
export function RotatingWord({ words }: { words: string[] }) {
  const [text, setText] = useState(words[0]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let i = 0;
    let n = words[0].length;
    let erasing = false;
    let timer: ReturnType<typeof setTimeout>;

    const step = () => {
      const word = words[i];
      if (erasing) {
        n -= 1;
        setText(word.slice(0, n));
        if (n <= 0) {
          erasing = false;
          i = (i + 1) % words.length;
        }
        timer = setTimeout(step, 45);
      } else {
        if (n < words[i].length) {
          n += 1;
          setText(words[i].slice(0, n));
          timer = setTimeout(step, 80);
        } else {
          erasing = true;
          timer = setTimeout(step, 2200);
        }
      }
    };

    timer = setTimeout(step, 2200);
    return () => clearTimeout(timer);
  }, [words]);

  return (
    <span>
      {text}
      <span aria-hidden className="ml-[1px] inline-block h-[1em] w-[0.5em] translate-y-[0.15em] animate-pulse bg-[var(--mint)] motion-reduce:animate-none" />
    </span>
  );
}
