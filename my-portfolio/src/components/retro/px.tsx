import type { ReactNode } from "react";

/**
 * Pixelify Sans draws "5" like an "S" ("25" reads as "2S"). Inside pixel-font
 * headings, wrap text with this so digit runs use the mono face instead.
 */
export function Px({ children }: { children: ReactNode }) {
  if (typeof children !== "string") return <>{children}</>;
  return (
    <>
      {children.split(/(\d+)/).map((part, i) =>
        /^\d+$/.test(part) ? (
          <span key={i} className="font-[family-name:var(--font-code)] font-medium">
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </>
  );
}
