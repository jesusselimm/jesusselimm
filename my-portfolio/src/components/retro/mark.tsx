import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * The "pop" highlighter. Use sparingly: only for the one thing on a page the
 * reader should not miss.
 */
export function Mark({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <mark className={cn("bg-[var(--pop)] px-[0.3em] font-medium text-[var(--ink)]", className)}>{children}</mark>
  );
}
