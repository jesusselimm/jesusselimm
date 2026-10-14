import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  /** File-name style title, e.g. "samplify.exe". */
  title: string;
  children: ReactNode;
  href?: string;
  external?: boolean;
  className?: string;
};

const frame =
  "block border-2 border-[var(--fg)] rounded-[6px] bg-[var(--bg)] shadow-[6px_6px_0_var(--fg)] " +
  "transition-[transform,box-shadow] duration-100 " +
  "hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[8px_8px_0_var(--mint)] " +
  "focus-visible:-translate-x-[2px] focus-visible:-translate-y-[2px] focus-visible:shadow-[8px_8px_0_var(--mint)] " +
  "motion-reduce:transition-none motion-reduce:hover:translate-x-0 motion-reduce:hover:translate-y-0";

function Inner({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <div className="flex items-center justify-between bg-[var(--fg)] px-[10px] py-[6px] font-[family-name:var(--font-code)] text-xs text-[var(--bg)]">
        <span>{title}</span>
        <span aria-hidden className="flex gap-1">
          <i className="block h-2 w-2 bg-[var(--bg)]" />
          <i className="block h-2 w-2 bg-[var(--bg)]" />
        </span>
      </div>
      <div className="p-4">{children}</div>
    </>
  );
}

export function WindowCard({ title, children, href, external, className }: Props) {
  const cls = cn(frame, className);
  if (!href) {
    return (
      <div className={cls}>
        <Inner title={title}>{children}</Inner>
      </div>
    );
  }
  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        <Inner title={title}>{children}</Inner>
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      <Inner title={title}>{children}</Inner>
    </Link>
  );
}
