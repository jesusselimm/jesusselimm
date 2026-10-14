import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost";

const base =
  "group inline-flex items-center justify-center gap-2 border-2 border-[var(--fg)] rounded-[4px] " +
  "px-[18px] py-3 font-[family-name:var(--font-code)] text-sm font-medium leading-none " +
  "shadow-[4px_4px_0_var(--fg)] transition-[transform,box-shadow] duration-100 " +
  "hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_var(--fg)] " +
  "active:translate-x-[4px] active:translate-y-[4px] active:shadow-none " +
  "motion-reduce:transition-none motion-reduce:hover:translate-x-0 motion-reduce:hover:translate-y-0";

const variants: Record<Variant, string> = {
  primary: "bg-[var(--mint)] text-[var(--on-mint)]",
  ghost: "bg-[var(--bg)] text-[var(--fg)]",
};

type Common = {
  children: ReactNode;
  /** Text shown on hover — the small smile. */
  wink?: string;
  variant?: Variant;
  className?: string;
};

function Label({ children, wink }: { children: ReactNode; wink?: string }) {
  if (!wink) return <>{children}</>;
  return (
    <>
      <span className="group-hover:hidden group-focus-visible:hidden">{children}</span>
      <span className="hidden group-hover:inline group-focus-visible:inline" aria-hidden>
        {wink}
      </span>
    </>
  );
}

export function Button({
  children,
  wink,
  variant = "primary",
  className,
  ...rest
}: Common & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className">) {
  return (
    <button className={cn(base, variants[variant], className)} {...rest}>
      <Label wink={wink}>{children}</Label>
    </button>
  );
}

export function ButtonLink({
  children,
  wink,
  variant = "primary",
  className,
  href,
  external,
}: Common & { href: string; external?: boolean }) {
  const cls = cn(base, variants[variant], className);
  if (href.startsWith("mailto:")) {
    return (
      <a href={href} className={cls}>
        <Label wink={wink}>{children}</Label>
      </a>
    );
  }
  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        <Label wink={wink}>{children}</Label>
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      <Label wink={wink}>{children}</Label>
    </Link>
  );
}
