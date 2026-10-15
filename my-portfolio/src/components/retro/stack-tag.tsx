"use client";

import { playNote } from "@/lib/sound";
import { Tag } from "./tag";

/** A stack tag that lifts on hover and plays a pentatonic note (if sound is on). */
export function StackTag({ label, index }: { label: string; index: number }) {
  return (
    <Tag
      onMouseEnter={() => playNote(index)}
      className={
        "cursor-default transition-[transform,box-shadow,background-color] duration-100 " +
        "hover:-translate-x-[1px] hover:-translate-y-[2px] hover:bg-[var(--mint)] " +
        "hover:text-[var(--on-mint)] hover:shadow-[2px_2px_0_var(--shadow-c)] " +
        "motion-reduce:transition-none motion-reduce:hover:translate-x-0 motion-reduce:hover:translate-y-0"
      }
    >
      {label}
    </Tag>
  );
}
