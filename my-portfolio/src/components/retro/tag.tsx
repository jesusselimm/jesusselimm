import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Tag({
  children,
  className,
  ...rest
}: { children: ReactNode } & HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-block rounded-full border-[1.5px] border-[var(--frame)] bg-[var(--mint-soft)] px-[9px] py-[2px]",
        "font-[family-name:var(--font-code)] text-[11px] leading-[1.6] text-[var(--fg)]",
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  );
}
