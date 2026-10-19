import Link from "next/link";
import { SoundToggle } from "./sound-toggle";

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
          className="flex items-center rounded-[6px] bg-[var(--bar)] px-[10px] py-[6px] font-medium text-[var(--bar-fg)]"
          aria-label="Home"
        >
          <svg
            viewBox="0 0 181 169"
            fill="none"
            aria-hidden="true"
            className="h-[28px] w-auto"
          >
            <path
              d="M24.6441 62.8449C24.6985 62.8449 25.7819 62.344 31.5356 59.0766C36.2767 56.3842 44.5428 51.293 61.6302 42.3324C78.7177 33.3718 103.588 21.9437 120.769 15.5009C140.769 8.00087 148.501 6.92603 151.76 6.00089C147.794 8.60484 136.089 10.4632 124.276 20.2426C118.129 25.331 112.797 31.9601 100.097 54.113C93.9497 64.8371 89.1065 75.3228 84.498 85.6248M84.498 85.6248C79.5867 96.6037 74.9419 107.374 69.2686 118.001C56.9408 141.093 53.913 143.906 46.7686 150.501C40.2686 156.501 33.2686 159.501 27.7686 161.001C22.2686 162.501 13.7686 163.001 9.26855 159.501C4.7685 156.001 5.96858 154.501 6.76856 150.501C7.56855 146.501 9.26855 139.562 31.5356 123.501C46.1232 112.979 65.41 99.2542 84.498 85.6248ZM84.498 85.6248C94.8609 78.2253 105.165 70.8541 114.627 64.0389C141.518 44.6704 152.709 38.0443 159.388 34.3559C167.71 29.7609 171.506 29.2384 173.836 29.1672C178.372 29.0287 161.057 39.9113 151.76 54.113C146.216 62.5813 148.061 71.461 151.76 77.0009C156.769 84.5009 168.769 89.0009 161.769 98.0009C154.486 107.364 140.313 113.881 136.769 115.001C127.269 118.001 129.269 117.501 122.769 118.001C120.594 118.168 115.269 118.001 113.769 118.001"
              stroke="currentColor"
              strokeWidth="14"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
        <div className="flex items-center gap-4">
          <SoundToggle />
          <span className="hidden text-[var(--muted)] sm:inline">
            press <kbd className="rounded-[4px] border-[1.5px] border-b-[3px] border-[var(--frame)] px-[6px] text-xs">D</kbd> for dark
          </span>
        </div>
      </nav>
    </header>
  );
}
