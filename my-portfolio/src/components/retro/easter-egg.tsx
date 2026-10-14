"use client";

import { useEffect, useRef, useState } from "react";

/** Press "?" and nothing happens, loudly. */
export function EasterEgg() {
  const [open, setOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "?") return;
      const el = e.target as HTMLElement | null;
      if (el && (el.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName))) return;
      setOpen(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setOpen(false), 2800);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      clearTimeout(timer.current);
    };
  }, []);

  return (
    <div
      role="status"
      aria-live="polite"
      className="pointer-events-none fixed bottom-4 left-4 z-[90] font-[family-name:var(--font-code)] text-[13px]"
    >
      {open && (
        <div className="rounded-[4px] border-2 border-[var(--frame)] bg-[var(--bg)] px-3 py-2 shadow-[4px_4px_0_var(--shadow-c)]">
          Nothing here. I did warn you.
        </div>
      )}
    </div>
  );
}
