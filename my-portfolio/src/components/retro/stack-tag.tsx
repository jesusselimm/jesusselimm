"use client";

import { playNote } from "@/lib/sound";
import { Tag } from "./tag";

/** A quiet stack tag: no fill, only a small lift and a pentatonic note (if sound is on) on hover. */
export function StackTag({ label, index }: { label: string; index: number }) {
  return (
    <Tag
      quiet
      onMouseEnter={() => playNote(index)}
      className={
        "cursor-default " +
        "transition-transform duration-150 hover:-translate-y-[2px] " +
        "motion-reduce:transition-none motion-reduce:hover:translate-y-0"
      }
    >
      {label}
    </Tag>
  );
}
