"use client";

import { useEffect, useSyncExternalStore } from "react";
import { getServerSnapshot, getSnapshot, setEnabled, subscribe, unlockAudio } from "@/lib/sound";

/** Header switch for UI sounds. Off by default; `M` toggles it too. */
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
      title="Toggle UI sounds (M)"
      className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-[var(--frame)] px-3 py-1 hover:bg-[var(--mint-soft)]"
    >
      <span aria-hidden>{on ? "♪" : "♪̸"}</span>
      <span>sound: {on ? "on" : "off"}</span>
    </button>
  );
}
