import type { ReactNode } from "react";
import { ButtonLink } from "@/components/retro/button";
import { DitherOrb } from "@/components/retro/dither-orb";
import { Reveal } from "@/components/retro/reveal";
import { SiteFooter } from "@/components/retro/site-footer";
import { SiteNav } from "@/components/retro/site-nav";
import { Tag } from "@/components/retro/tag";
import { Ticker } from "@/components/retro/ticker";
import { WindowCard } from "@/components/retro/window-card";

const pixel = "font-[family-name:var(--font-pixel)]";
const code = "font-[family-name:var(--font-code)]";

const journey = [
  {
    year: "2026",
    title: "Graduate Studies + Scaling Samplify",
    desc: "Pursuing a master's degree in software engineering while continuing to build and grow Samplify. Exploring App Store launch, B2B opportunities, and the intersection of AI and personal style.",
    now: true,
  },
  {
    year: "2025",
    title: "UI/UX Focus + Samplify",
    desc: "Realized UI development isn't just about code — it's the art of balancing design and aesthetics. Launched Samplify as a solo founder: an AI-powered wardrobe and personal style platform, now in active beta.",
  },
  {
    year: "2023",
    title: "Workintech — Full Stack Training",
    desc: "Intensive full-stack program covering front-end and back-end development. Built multiple projects end-to-end and discovered that the front-end was where design and engineering collide — exactly where I wanted to be.",
  },
  {
    year: "2018",
    title: "University — Geomatics Engineering",
    desc: "Started undergraduate at İzmir Katip Çelebi University. Gained engineering discipline, analytical thinking, and a problem-solving mindset that still shapes how I write code.",
  },
];

const beyond = [
  {
    file: "photography.jpg",
    icon: "◎",
    title: "Photography",
    desc: "Creativity starts behind the camera. Chasing light, capturing fleeting moments — photography keeps me inspired and teaches me to see the world differently.",
  },
  {
    file: "music.mp3",
    icon: "♩",
    title: "Music",
    desc: "Music and architecture share the same logic: structure, rhythm, and emotion. My interest in both gives me a natural sensitivity to timing, composition, and the invisible flow of experience.",
  },
  {
    file: "architecture.dwg",
    icon: "◻",
    title: "Architecture & Visual Arts",
    desc: "I see interfaces as architecture — spatial, intentional, lived-in. Drawing from visual arts informs my approach to typography, color harmony, and user experience.",
  },
];

const aboutTags = [
  "Next.js", "React Native", "TypeScript", "Node.js",
  "Figma", "AI/ML Integration", "System Design", "Motion Design",
];

const technologies = [
  "React", "Next.js", "TypeScript", "React Native", "Tailwind CSS", "Node.js",
  "Supabase", "Figma", "Git & GitHub", "Vercel", "AI Integration", "UI/UX Design",
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
        {/* Hero */}
        <div className="mx-auto max-w-[980px] px-4">
          <div className="grid items-center gap-8 pb-20 pt-12 sm:pt-20 md:grid-cols-[1.7fr_1fr]">
            <div>
              <p className={`m-0 mb-4 text-[13px] text-[var(--muted)] ${code}`}>
                ~/selim — Istanbul, Turkey — available for work
              </p>
              <h1 className={`m-0 mb-5 text-[clamp(42px,8vw,56px)] font-bold leading-[1.02] md:text-[60px] ${pixel}`}>
                I design it.
                <br />
                Then I{" "}
                <em className="bg-[var(--mint)] px-[0.14em] not-italic text-[var(--on-mint)]">build</em> it.
              </h1>
              <p className="m-0 mb-8 max-w-[46ch] text-[17px] leading-relaxed text-[var(--muted)]">
                Front-end developer and software-engineering grad student. Mostly in that order.
                Occasionally the other way around, and we don&apos;t talk about those.
              </p>
              <div className="flex flex-wrap gap-3">
                <ButtonLink href="#work" wink="Okay, scrolling…">See my work</ButtonLink>
                <ButtonLink href="mailto:jesusselimm@gmail.com" variant="ghost" wink="I bite less than my linter">
                  Say hi
                </ButtonLink>
              </div>
            </div>
            <div className="mx-auto aspect-square w-[min(100%,300px)] md:w-[min(100%,340px)]">
              <DitherOrb />
            </div>
          </div>
        </div>

        <Ticker />

        <div className="mx-auto max-w-[980px] px-4">
          {/* About */}
          <Section id="about" index="01 · about" title="Structure meets emotion">
            <div className="grid gap-10 md:grid-cols-2">
              <div className="space-y-5 text-[17px] leading-relaxed">
                <Reveal>
                  <p className="m-0">
                    I&apos;m <strong>Selim</strong>, a front-end developer and graduate student in software
                    engineering. I believe the best digital products are built at the intersection of{" "}
                    <strong>engineering rigor</strong> and <strong>design sensibility</strong>.
                  </p>
                </Reveal>
                <Reveal delay={0.05}>
                  <p className="m-0">
                    My work spans from crafting pixel-perfect interfaces to architecting full-stack products.
                    Currently building <strong>Samplify</strong> — an AI-powered personal style platform — from
                    the ground up as a solo founder.
                  </p>
                </Reveal>
                <Reveal delay={0.1}>
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
                      <Tag key={t}>{t}</Tag>
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
                    <li key={item.year} className="grid gap-1 sm:grid-cols-[88px_1fr] sm:gap-6">
                      <span className={`text-sm ${code} ${item.now ? "text-[var(--mint-deep)]" : "text-[var(--muted)]"}`}>
                        {item.year}
                        {item.now ? " ← now" : ""}
                      </span>
                      <div>
                        <h3 className={`m-0 mb-1 text-xl font-semibold ${pixel}`}>{item.title}</h3>
                        <p className="m-0 text-[15px] leading-relaxed text-[var(--muted)]">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </WindowCard>
            </Reveal>

            {/* Beyond the code */}
            <div className="mt-16">
              <Reveal>
                <p className={`m-0 mb-6 text-[13px] text-[var(--muted)] ${code}`}>~/beyond-the-code</p>
              </Reveal>
              <div className="grid gap-5 md:grid-cols-3">
                {beyond.map((card, i) => (
                  <Reveal key={card.title} delay={i * 0.06}>
                    <WindowCard title={card.file} className="h-full">
                      <div aria-hidden className={`mb-3 text-3xl ${pixel}`}>{card.icon}</div>
                      <h3 className={`m-0 mb-2 text-[22px] font-semibold ${pixel}`}>{card.title}</h3>
                      <p className="m-0 text-[15px] leading-relaxed text-[var(--muted)]">{card.desc}</p>
                    </WindowCard>
                  </Reveal>
                ))}
              </div>
            </div>
          </Section>

          {/* Work */}
          <Section id="work" index="02 · selected work" title="Things I built">
            <div className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
              <Reveal>
                <WindowCard title="samplify.exe" className="h-full">
                  <p className={`m-0 mb-3 text-xs text-[var(--mint-deep)] ${code}`}>
                    featured · founder · 2024 — present
                  </p>
                  <h3 className={`m-0 mb-3 text-[34px] font-bold leading-none ${pixel}`}>Samplify</h3>
                  <p className="m-0 mb-5 text-[16px] leading-relaxed text-[var(--muted)]">
                    An AI-powered personal style management platform. Wardrobe intelligence, multi-dimensional
                    outfit scoring, style trend analysis across 25 aesthetics — built entirely solo from zero to
                    beta. Currently preparing for App Store &amp; Play Store launch.
                  </p>
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
            </div>

            <Reveal className="mt-14">
              <p className={`m-0 mb-5 text-[13px] text-[var(--muted)] ${code}`}>~/technologies</p>
              <div className="flex flex-wrap gap-2">
                {technologies.map((t) => (
                  <Tag key={t} className="px-3 py-[5px] text-xs">{t}</Tag>
                ))}
              </div>
            </Reveal>
          </Section>

          {/* Contact */}
          <Section id="contact" index="03 · get in touch" title="Let&apos;s build something remarkable">
            <Reveal>
              <p className="m-0 mb-8 max-w-[46ch] text-[17px] leading-relaxed text-[var(--muted)]">
                Open to collaborations, freelance projects, and good conversations. Coffee is on the{" "}
                <span className="bg-[var(--pop)] px-[0.3em] text-[var(--ink)]">table</span>.
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
