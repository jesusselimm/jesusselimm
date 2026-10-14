"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const items = [
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/#contact" },
];

export function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-dashed border-[var(--line)] bg-[var(--bg)]/90 backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-[980px] items-center justify-between gap-3 px-4 py-4 font-[family-name:var(--font-code)] text-[13px]"
      >
        <Link
          href="/"
          className="rounded-[6px] bg-[var(--bar)] px-[10px] py-[6px] font-medium text-[var(--bar-fg)]"
          aria-label="Home"
        >
          S:\
        </Link>
        <ul className="flex items-center gap-1 sm:gap-2">
          {items.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-full border-[1.5px] px-3 py-1 transition-colors",
                    active
                      ? "border-[var(--frame)] bg-[var(--mint)] text-[var(--on-mint)]"
                      : "border-transparent hover:border-[var(--frame)] hover:bg-[var(--mint-soft)]",
                  )}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <span className="hidden text-[var(--muted)] sm:inline">
          press <kbd className="rounded-[4px] border-[1.5px] border-b-[3px] border-[var(--frame)] px-[6px] text-xs">D</kbd> for dark
        </span>
      </nav>
    </header>
  );
}
