import type { Metadata } from "next";
import { ButtonLink } from "@/components/retro/button";
import { CaseStudyShell } from "@/components/retro/case-study";
import { DitherOrb } from "@/components/retro/dither-orb";

export const metadata: Metadata = { title: "404" };

const pixel = "font-[family-name:var(--font-pixel)]";
const code = "font-[family-name:var(--font-code)]";

export default function NotFound() {
  return (
    <CaseStudyShell>
      <div className="grid items-center gap-10 py-20 md:grid-cols-[1.5fr_1fr] md:py-28">
        <div>
          <p className={`m-0 mb-4 text-[13px] text-[var(--muted)] ${code}`}>~/error — file not found</p>
          <h1 className={`m-0 mb-5 text-[clamp(64px,14vw,120px)] font-bold leading-none ${pixel}`}>
            <span className={code}>404</span>
          </h1>
          <p className="m-0 mb-8 max-w-[40ch] text-[19px] leading-snug">
            This page went out for coffee and didn&apos;t come back.
          </p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/" wink="Take me home">Back to start</ButtonLink>
            <ButtonLink href="/work" variant="ghost">See the work</ButtonLink>
          </div>
        </div>
        <div className="mx-auto aspect-square w-[min(100%,240px)]">
          <DitherOrb />
        </div>
      </div>
    </CaseStudyShell>
  );
}
