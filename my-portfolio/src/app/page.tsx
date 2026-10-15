import type { ReactNode } from "react";
import { ButtonLink } from "@/components/retro/button";
import Image from "next/image";
import { LiveTime } from "@/components/retro/live-time";
import { OrbPoke } from "@/components/retro/orb-poke";
import { RotatingWord } from "@/components/retro/rotating-word";
import { Px } from "@/components/retro/px";
import { Reveal } from "@/components/retro/reveal";
import { SiteFooter } from "@/components/retro/site-footer";
import { SiteNav } from "@/components/retro/site-nav";
import { Tag } from "@/components/retro/tag";
import { Ticker } from "@/components/retro/ticker";
import { WindowCard } from "@/components/retro/window-card";
import { Mark } from "@/components/retro/mark";

const pixel = "font-[family-name:var(--font-pixel)]";
const code = "font-[family-name:var(--font-code)]";

/* Short teaser; the full log lives on /about. */
const journey = [
  {
    year: "Sep 2026",
    title: "Procons Digital Construction — Developer",
    desc: "Turning drone-captured 3D render and mesh data into web-based viewers with CesiumJS.",
    now: true,
  },
  {
    year: "2025",
    title: "UI/UX Focus + Samplify",
    desc: "Realized UI development isn't just about code — it's the art of balancing design and aesthetics. Launched Samplify as a solo founder: an AI-powered wardrobe and personal style platform, now in active beta.",
  },
  {
    year: "2018",
    title: "University — Geomatics Engineering",
    desc: "Started undergraduate at İzmir Katip Çelebi University. Gained engineering discipline, analytical thinking, and a problem-solving mindset that still shapes how I write code.",
  },
];
const aboutTags = [
  "React", "Next.js", "React Native", "TypeScript", "Node.js", "Tailwind CSS",
  "Supabase", "Figma", "Git & GitHub", "Vercel", "UI/UX Design",
  "AI/ML Integration", "System Design", "Motion Design",
  "CesiumJS", "3D GIS", "Spatial Analysis",
];
function Section({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-16 border-t border-dashed border-[var(--line)] py-16 sm:py-20">
      <Reveal>
        <p className={`m-0 mb-2 text-[13px] text-[var(--muted)] ${code}`}>{index}</p>
        <h2 className={`m-0 mb-10 text-[clamp(30px,5vw,44px)] font-bold leading-[1.05] ${pixel}`}>{title}</h2>
      </Reveal>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)] font-[family-name:var(--font-ui)]">
      <SiteNav />

      <main>
        {/* Hero: one screen, one focus. Details live in the corners. */}
        <section className="relative mx-auto flex min-h-[calc(100svh-124px)] max-w-[1200px] flex-col px-4 pb-6 pt-6">
          <p className={`m-0 text-[13px] text-[var(--muted)] ${code}`}>
            ~/selim — <RotatingWord words={["designer + developer", "designer", "developer", "tinkerer"]} />
          </p>

          <div className="flex flex-1 flex-col items-center justify-center py-6">
            {/* only the orb's bottom edge tucks behind the headline */}
            <div className="relative z-0 aspect-square w-[min(60vw,38svh,380px)]">
              <OrbPoke />
            </div>

            <div className="pointer-events-none relative z-10 -mt-[clamp(14px,3.2vw,44px)] text-center">
              <h1 className={`m-0 text-[clamp(44px,9.5vw,112px)] font-bold leading-[1.0] ${pixel}`}>
                I design it.
                <br />
                Then I{" "}
                <em className="bg-[var(--mint)] px-[0.12em] not-italic text-[var(--on-mint)]">build</em> it.
              </h1>
              <p className="m-0 mt-6 text-[clamp(16px,2vw,21px)] leading-snug text-[var(--muted)]">
                From coordinates to pixels.
              </p>
            </div>
          </div>

          <div className={`flex flex-wrap gap-3 ${code}`}>
            <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
              <li>
                <Tag className="px-3 py-[5px] text-xs"><LiveTime /></Tag>
              </li>
              <li>
                <Tag className="px-3 py-[5px] text-xs">now: building Samplify</Tag>
              </li>
            </ul>
          </div>
        </section>

        <Ticker />

        <div className="mx-auto max-w-[980px] px-4">
          {/* Intro: what the hero leaves out */}
          <section className="py-16 sm:py-20">
            <Reveal>
              <p className="m-0 mb-3 max-w-[40ch] text-[clamp(20px,2.4vw,26px)] leading-snug">
                I build interfaces that don&apos;t just work — they feel inevitable.
              </p>
              <p className="m-0 mb-8 max-w-[52ch] text-[17px] leading-relaxed text-[var(--muted)]">
                I used to map the world. Now I build what lives in it. Currently building Samplify solo.
              </p>
              <div className="flex flex-wrap gap-3">
                <ButtonLink href="#work" wink="Okay, scrolling…">See my work</ButtonLink>
                <ButtonLink href="mailto:jesusselimm@gmail.com" variant="ghost" wink="I bite less than my linter">
                  Say hi
                </ButtonLink>
              </div>
              <p className={`m-0 mt-5 text-xs text-[var(--muted)] ${code}`}>
                {"// design first, build second. mostly. we don't talk about the other times."}
              </p>
            </Reveal>
          </section>

          {/* About */}
          <Section id="about" index="01 · about" title="Structure meets emotion">
            <div className="grid gap-10 md:grid-cols-2">
              <div className="space-y-5 text-[17px] leading-relaxed">
                <Reveal>
                  <p className="m-0">
                    I&apos;m <strong>Selim</strong>, a developer and designer with a geomatics background, and a
                    graduate student in software engineering. I believe the best digital products are built at the intersection of{" "}
                    <strong>engineering rigor</strong> and <strong>design sensibility</strong>.
                  </p>
                </Reveal>
                <Reveal delay={0.05}>
                  <p className="m-0">
                    Before software I studied <strong>geomatics engineering</strong> — mapping, spatial analysis and
                    3D data are where I started, and a strength I still lean on. That&apos;s the combination I&apos;m
                    building toward: a design engineer with a <Mark>geospatial</Mark> backbone.
                  </p>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="m-0">
                    My work spans from crafting pixel-perfect interfaces to architecting full-stack products.
                    Currently building <strong>Samplify</strong> — an AI-powered personal style platform — from
                    the ground up as a solo founder.
                  </p>
                </Reveal>
                <Reveal delay={0.15}>
                  <p className="m-0">
                    I care deeply about the details: the weight of a typeface, the timing of an animation, the
                    logic of a component. Every decision is intentional.
                  </p>
                </Reveal>
              </div>
              <Reveal delay={0.1}>
                <WindowCard title="stack.txt">
                  <div className="flex flex-wrap gap-2">
                    {aboutTags.map((t) => (
                      <Tag
                        key={t}
                        className={
                          "cursor-default transition-[transform,box-shadow,background-color] duration-100 " +
                          "hover:-translate-x-[1px] hover:-translate-y-[2px] hover:bg-[var(--mint)] " +
                          "hover:text-[var(--on-mint)] hover:shadow-[2px_2px_0_var(--shadow-c)] " +
                          "motion-reduce:transition-none motion-reduce:hover:translate-x-0 motion-reduce:hover:translate-y-0"
                        }
                      >
                        {t}
                      </Tag>
                    ))}
                  </div>
                </WindowCard>
              </Reveal>
            </div>

            {/* Journey */}
            <Reveal className="mt-16">
              <WindowCard title="journey.log">
                <ol className="m-0 list-none space-y-6 p-0">
                  {journey.map((item) => (
                    <li key={item.year} className="grid gap-1 sm:grid-cols-[176px_1fr] sm:gap-6">
                      <span className={`text-sm ${code} ${item.now ? "text-[var(--mint-deep)]" : "text-[var(--muted)]"}`}>
                        {item.year}
                        {item.now ? <>{" ← "}{item.year === "Sep 2026" ? <Mark>now</Mark> : "now"}</> : ""}
                      </span>
                      <div>
                        <h3 className={`m-0 mb-1 text-xl font-semibold ${pixel}`}>{item.title}</h3>
                        <p className="m-0 text-[15px] leading-relaxed text-[var(--muted)]">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </WindowCard>
              <div className="mt-6">
                <ButtonLink href="/about" variant="ghost" wink="There's more">Full story →</ButtonLink>
              </div>
            </Reveal>

            {/* Beyond the code */}
            <Reveal className="mt-16">
              <p className={`m-0 mb-4 text-[13px] text-[var(--muted)] ${code}`}>~/beyond-the-code</p>
              <p className="m-0 mb-6 max-w-[56ch] text-[17px] leading-relaxed">
                Photography, music, architecture — the things outside the editor that quietly shape how I design.
              </p>
              <ButtonLink href="/about#gallery" variant="ghost" wink="Come in">See the gallery →</ButtonLink>
            </Reveal>
          </Section>

          {/* Work */}
          <Section id="work" index="02 · selected work" title="Things I built">
            <div className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
              <Reveal>
                <WindowCard title="samplify.exe" className="h-full">
                  <p className={`m-0 mb-3 text-xs text-[var(--mint-deep)] ${code}`}>
                    featured · founder · 2025 — present
                  </p>
                  <h3 className={`m-0 mb-3 text-[34px] font-bold leading-none ${pixel}`}>Samplify</h3>
                  <p className="m-0 mb-5 text-[16px] leading-relaxed text-[var(--muted)]">
                    An AI-powered personal style management platform. Wardrobe intelligence, multi-dimensional
                    outfit scoring, style trend analysis across 25 aesthetics — built entirely solo from zero to
                    beta. Currently preparing for App Store &amp; Play Store launch.
                  </p>
                  <dl className="m-0 mb-6 grid grid-cols-3 gap-3">
                    {[
                      ["25", "aesthetics"],
                      ["5", "scoring dimensions"],
                      ["1", "founder, solo"],
                    ].map(([n, label]) => (
                      <div key={label} className="rounded-[4px] border-2 border-[var(--frame)] bg-[var(--mint-soft)] px-3 py-2">
                        <dt className={`text-[28px] font-bold leading-none ${pixel}`}>
                          <Px>{n}</Px>
                        </dt>
                        <dd className={`m-0 mt-1 text-[11px] leading-tight text-[var(--muted)] ${code}`}>{label}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="mb-6 flex flex-wrap gap-2">
                    {["Next.js", "React Native", "TypeScript", "Gemini AI", "Supabase"].map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <ButtonLink href="/work/samplify" wink="Nerd out →">Read case study</ButtonLink>
                    <ButtonLink href="https://thesamplify.com" external variant="ghost">Live site ↗</ButtonLink>
                  </div>
                </WindowCard>
              </Reveal>

              <Reveal delay={0.08}>
                <WindowCard title="habithub.exe" href="/work/habithub" className="h-full">
                  <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-[4px] border-2 border-[var(--frame)]">
                    <Image
                      src="/projects/habithub/dashboard-light.png"
                      alt="HabitHub dashboard"
                      fill
                      sizes="(min-width: 768px) 360px, 100vw"
                      className="object-cover object-top"
                    />
                  </div>
                  <p className={`m-0 mb-3 text-xs text-[var(--muted)] ${code}`}>design case study · 2025</p>
                  <h3 className={`m-0 mb-3 text-[28px] font-bold leading-none ${pixel}`}>HabitHub</h3>
                  <p className="m-0 mb-5 text-[15px] leading-relaxed text-[var(--muted)]">
                    A habit-tracking app concept — a coaching-style dashboard, a &ldquo;Habitly AI&rdquo; assistant
                    and a &ldquo;Your Garden&rdquo; growth metaphor. Designed in Figma, build in progress.
                  </p>
                  <span className={`text-sm text-[var(--mint-deep)] underline decoration-2 underline-offset-[3px] ${code}`}>
                    Read case study →
                  </span>
                </WindowCard>
              </Reveal>

              <Reveal delay={0.12} className="md:col-span-2">
                <WindowCard title="ev-charging-suitability.exe">
                  <p className={`m-0 mb-3 text-xs text-[var(--muted)] ${code}`}>thesis · 2024 · Izmir–Manisa highway</p>
                  <h3 className={`m-0 mb-3 text-[28px] font-bold leading-none ${pixel}`}>
                    EV Charging Station Suitability Mapping
                  </h3>
                  <p className="m-0 mb-5 max-w-[64ch] text-[16px] leading-relaxed text-[var(--muted)]">
                    My graduation project in geomatics engineering: a GIS analysis of where renewable-powered EV
                    charging stations make sense along the Izmir–Manisa highway. Solar potential points to the
                    southern section, wind to the north and northwest.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Tag>QGIS</Tag>
                    <Tag>suitability analysis</Tag>
                    <Tag>solar</Tag>
                    <Tag>wind</Tag>
                    <Tag>geomatics</Tag>
                  </div>
                </WindowCard>
              </Reveal>
            </div>

            <Reveal className="mt-10">
              <ButtonLink href="/work" variant="ghost" wink="Everything">All work &amp; toolbox →</ButtonLink>
            </Reveal>
          </Section>

          {/* Contact */}
          <Section id="contact" index="03 · get in touch" title="Let&apos;s build something remarkable">
            <Reveal>
              <p className="m-0 mb-8 max-w-[46ch] text-[17px] leading-relaxed text-[var(--muted)]">
                Open to collaborations, freelance projects, and good conversations. Coffee is on the{" "}
                <Mark>table</Mark>.
              </p>
              <div className="flex flex-wrap gap-3">
                <ButtonLink href="mailto:jesusselimm@gmail.com" wink="Please do">Email</ButtonLink>
                <ButtonLink href="https://x.com/jesusselimm" external variant="ghost">X</ButtonLink>
                <ButtonLink href="https://linkedin.com/in/selim-kurtulmus" external variant="ghost">LinkedIn</ButtonLink>
                <ButtonLink href="https://github.com/jesusselimm" external variant="ghost">GitHub</ButtonLink>
              </div>
            </Reveal>
          </Section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
