import Link from "next/link";

/**
 * Minimal header: logo (home) and the dark-mode hint. Navigation lives in the
 * page content (hero, section buttons) instead of a link bar.
 */
export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 bg-[var(--bg)]/90 backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-[1200px] items-center justify-between gap-3 px-4 py-4 font-[family-name:var(--font-code)] text-[13px]"
      >
        <Link
          href="/"
          className="rounded-[6px] bg-[var(--bar)] px-[10px] py-[6px] font-medium text-[var(--bar-fg)]"
          aria-label="Home"
        >
          S:\
        </Link>
        <span className="hidden text-[var(--muted)] sm:inline">
          press <kbd className="rounded-[4px] border-[1.5px] border-b-[3px] border-[var(--frame)] px-[6px] text-xs">D</kbd> for dark
        </span>
      </nav>
    </header>
  );
}
