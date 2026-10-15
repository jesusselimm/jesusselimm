"use client";

import { useEffect, useSyncExternalStore } from "react";
import { getServerSnapshot, getSnapshot, setEnabled, subscribe, unlockAudio } from "@/lib/sound";

/** 16×16 pixel speaker. Off: crossed out. On: sound waves. */
function Speaker({ on }: { on: boolean }) {
  return (
    <svg viewBox="0 0 16 16" width="20" height="20" fill="currentColor" shapeRendering="crispEdges" aria-hidden>
      <rect x="2" y="6" width="3" height="4" />
      <rect x="5" y="5" width="1" height="6" />
      <rect x="6" y="4" width="1" height="8" />
      <rect x="7" y="3" width="1" height="10" />
      {on ? (
        <>
          <rect x="9" y="6" width="1" height="4" />
          <rect x="11" y="4" width="1" height="8" />
          <rect x="13" y="2" width="1" height="12" />
        </>
      ) : (
        <>
          <rect x="9" y="5" width="1" height="1" />
          <rect x="10" y="6" width="1" height="1" />
          <rect x="11" y="7" width="1" height="1" />
          <rect x="12" y="8" width="1" height="1" />
          <rect x="13" y="9" width="1" height="1" />
          <rect x="13" y="5" width="1" height="1" />
          <rect x="12" y="6" width="1" height="1" />
          <rect x="10" y="8" width="1" height="1" />
          <rect x="9" y="9" width="1" height="1" />
        </>
      )}
    </svg>
  );
}

/**
 * Header switch for UI sounds, a square block that pairs with the logo.
 * Off by default; `M` toggles it too.
 */
export function SoundToggle() {
  const on = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() !== "m" || e.metaKey || e.ctrlKey || e.altKey) return;
      const el = e.target as HTMLElement | null;
      if (el && (el.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName))) return;
      setEnabled(!getSnapshot());
    };
    // audio may only start after a gesture; resume on the first click/key
    const unlock = () => unlockAudio();
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", unlock);
    window.addEventListener("keydown", unlock);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={() => setEnabled(!getSnapshot())}
      aria-pressed={on}
      aria-label={on ? "Sound on" : "Sound off"}
      title={`Sound: ${on ? "on" : "off"} (press M)`}
      className={
        "flex h-8 w-8 items-center justify-center rounded-[6px] border-2 border-[var(--frame)] " +
        "transition-colors duration-100 motion-reduce:transition-none " +
        (on
          ? "bg-[var(--mint)] text-[var(--on-mint)]"
          : "bg-[var(--bg)] text-[var(--fg)] hover:bg-[var(--mint-soft)]")
      }
    >
      <Speaker on={on} />
    </button>
  );
}
