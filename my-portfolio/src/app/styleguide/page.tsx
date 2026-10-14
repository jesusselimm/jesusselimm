import type { Metadata } from "next";
import { DM_Mono, IBM_Plex_Mono, Inter, Space_Grotesk, Space_Mono } from "next/font/google";
import { Button, ButtonLink } from "@/components/retro/button";
import { Tag } from "@/components/retro/tag";
import { WindowCard } from "@/components/retro/window-card";
import { SiteNav } from "@/components/retro/site-nav";
import { SiteFooter } from "@/components/retro/site-footer";

export const metadata: Metadata = { title: "Styleguide — Selim Kurtulmuş", robots: { index: false } };

const cmpInter = Inter({ subsets: ["latin"] });
const cmpGrotesk = Space_Grotesk({ subsets: ["latin"] });
const cmpPlex = IBM_Plex_Mono({ weight: ["400", "500"], subsets: ["latin"] });
const cmpDm = DM_Mono({ weight: ["400", "500"], subsets: ["latin"] });
const cmpSpaceMono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"] });

const bodyFonts = [
  { name: "Space Grotesk — current pick", f: cmpGrotesk, note: "geometric, a little quirky; echoes the pixel shapes" },
  { name: "Inter — previous", f: cmpInter, note: "neutral, safe, a bit generic next to pixels" },
  { name: "IBM Plex Mono", f: cmpPlex, note: "monospace body; very retro, long text gets tiring" },
  { name: "DM Mono", f: cmpDm, note: "softer mono, friendlier than Plex" },
  { name: "Space Mono", f: cmpSpaceMono, note: "most characterful mono; strongest retro feel" },
] as const;

const swatches = [
  ["paper / bg", "var(--bg)"],
  ["paper-2 / bg-2", "var(--bg-2)"],
  ["ink / fg", "var(--fg)"],
  ["muted", "var(--muted)"],
  ["mint", "var(--mint)"],
  ["mint-deep", "var(--mint-deep)"],
  ["mint-soft", "var(--mint-soft)"],
  ["pop", "var(--pop)"],
] as const;

export default function Styleguide() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)] font-[family-name:var(--font-ui)]">
      <SiteNav />
      <main className="mx-auto max-w-[980px] px-4 pb-24">
        <section className="py-14">
          <p className="mb-4 font-[family-name:var(--font-code)] text-[13px] text-[var(--muted)]">~/styleguide — phase 1 foundation</p>
          <h1 className="m-0 mb-5 font-[family-name:var(--font-pixel)] text-[clamp(40px,7vw,72px)] font-bold leading-[1.02]">
            I design it. Then I{" "}
            <em className="bg-[var(--mint)] px-[0.14em] not-italic text-[var(--on-mint)]">build</em> it.
          </h1>
          <p className="mb-7 max-w-[46ch] text-[17px] text-[var(--muted)]">
            Mostly in that order. Occasionally the other way around, and we don&apos;t talk about those.
          </p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/work" wink="Okay, scrolling…">See my work</ButtonLink>
            <Button variant="ghost" wink="I bite less than my linter">Say hi</Button>
          </div>
        </section>

        <section className="border-t border-dashed border-[var(--line)] py-10">
          <h2 className="mb-6 font-[family-name:var(--font-pixel)] text-[28px]">Color</h2>
          <div className="flex flex-wrap gap-3">
            {swatches.map(([name, value]) => (
              <div key={name} className="w-32 overflow-hidden rounded-[6px] border-2 border-[var(--fg)] bg-[var(--bg)] font-[family-name:var(--font-code)] text-xs">
                <div className="h-[72px]" style={{ background: value }} />
                <div className="px-[10px] py-2">{name}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-dashed border-[var(--line)] py-10">
          <h2 className="mb-6 font-[family-name:var(--font-pixel)] text-[28px]">Type</h2>
          <p className="m-0 mb-2 font-[family-name:var(--font-pixel)] text-4xl">Pixelify Sans — display</p>
          <p className="m-0 mb-2 text-lg">Space Grotesk — body text that you actually read for a while.</p>
          <p className="m-0 font-[family-name:var(--font-code)] text-sm text-[var(--muted)]">JetBrains Mono — ~/details/in/mono.txt</p>
        </section>

        <section className="border-t border-dashed border-[var(--line)] py-10">
          <h2 className="mb-2 font-[family-name:var(--font-pixel)] text-[28px]">Body font options</h2>
          <p className="m-0 mb-6 font-[family-name:var(--font-code)] text-xs text-[var(--muted)]">same paragraph, five fonts</p>
          <div className="grid gap-4 md:grid-cols-2">
            {bodyFonts.map(({ name, f, note }) => (
              <div key={name} className="rounded-[6px] border-2 border-[var(--fg)] bg-[var(--bg-2)] p-5">
                <p className="m-0 mb-3 font-[family-name:var(--font-code)] text-xs text-[var(--muted)]">{name} · {note}</p>
                <p className="m-0 mb-3 text-[19px] leading-snug" style={{ fontFamily: f.style.fontFamily }}>
                  I build interfaces that don&apos;t just work — they feel inevitable.
                </p>
                <p className="m-0 text-[16px] leading-relaxed text-[var(--muted)]" style={{ fontFamily: f.style.fontFamily }}>
                  I&apos;m <strong>Selim</strong>, a front-end developer and graduate student in software engineering. I care
                  deeply about the details: the weight of a typeface, the timing of an animation, the logic of a component.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-dashed border-[var(--line)] py-10">
          <h2 className="mb-6 font-[family-name:var(--font-pixel)] text-[28px]">Components</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            <WindowCard title="samplify.exe" href="/work/samplify">
              <h3 className="m-0 mb-1 font-[family-name:var(--font-pixel)] text-[22px]">Samplify</h3>
              <p className="m-0 mb-3 text-sm text-[var(--muted)]">Finding the right sample, minus the 40 open tabs.</p>
              <div className="flex flex-wrap gap-[6px]"><Tag>product design</Tag><Tag>next.js</Tag></div>
            </WindowCard>
            <WindowCard title="habithub.exe" href="/work/habithub">
              <h3 className="m-0 mb-1 font-[family-name:var(--font-pixel)] text-[22px]">HabitHub</h3>
              <p className="m-0 mb-3 text-sm text-[var(--muted)]">Habits that stick, even yours.</p>
              <div className="flex flex-wrap gap-[6px]"><Tag>mobile</Tag><Tag>ux research</Tag></div>
            </WindowCard>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
