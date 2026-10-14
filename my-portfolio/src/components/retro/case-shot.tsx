"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { WindowCard } from "./window-card";

/**
 * Screenshot slot: renders the image when it exists, otherwise a clearly
 * labelled placeholder naming the file to drop in.
 */
export function CaseShot({
  src,
  caption,
  wide,
}: {
  src: string;
  caption: string;
  wide?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const file = src.split("/").pop() ?? "image.png";

  return (
    <figure className={cn("m-0", wide && "sm:col-span-2")}>
      <WindowCard title={file}>
        <div className="-m-4">
          {failed ? (
            <div
              className={cn(
                "flex flex-col items-center justify-center gap-2 px-4 text-center",
                "bg-[repeating-linear-gradient(45deg,var(--bg-2)_0_8px,var(--bg)_8px_16px)]",
                wide ? "min-h-[220px]" : "min-h-[260px]",
              )}
            >
              <code className="font-[family-name:var(--font-code)] text-xs text-[var(--muted)]">{src}</code>
              <p className="m-0 font-[family-name:var(--font-pixel)] text-lg">Screenshot soon</p>
            </div>
          ) : (
            <img src={src} alt={caption} onError={() => setFailed(true)} className="block h-auto w-full" />
          )}
        </div>
      </WindowCard>
      <figcaption className="mt-3 font-[family-name:var(--font-code)] text-xs text-[var(--muted)]">{caption}</figcaption>
    </figure>
  );
}
