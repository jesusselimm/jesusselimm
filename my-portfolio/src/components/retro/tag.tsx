import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-block rounded-full border-[1.5px] border-[var(--fg)] bg-[var(--mint-soft)] px-[9px] py-[2px]",
        "font-[family-name:var(--font-code)] text-[11px] leading-[1.6] text-[var(--fg)]",
        className,
      )}
    >
      {children}
    </span>
  );
}
