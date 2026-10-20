import type { Metadata } from "next";
import {
  Activity,
  Atom,
  Cloud,
  Code,
  Globe,
  Map,
  FileCode,
  Figma,
  Framer,
  GitBranch,
  LayoutGrid,
  Server,
  Upload,
  Wind,
  type LucideIcon,
} from "lucide-react";
import { ButtonLink } from "@/components/retro/button";
import { CaseStudyShell } from "@/components/retro/case-study";
import { Reveal } from "@/components/retro/reveal";
import { Tag } from "@/components/retro/tag";
import { WindowCard } from "@/components/retro/window-card";
import { Mark } from "@/components/retro/mark";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects and the tools behind them: Samplify, HabitHub, and a geomatics thesis on EV charging.",
};

const pixel = "font-[family-name:var(--font-pixel)]";
const code = "font-[family-name:var(--font-code)]";

type Skill = { icon: LucideIcon; title: string; description: string };

const coreSkills: Skill[] = [
  { icon: Atom, title: "React", description: "Component-based SPA development with modern React patterns and hooks" },
  { icon: Server, title: "Next.js", description: "SSR & file-based routing for optimized web applications" },
  { icon: FileCode, title: "TypeScript", description: "Typed JavaScript for better development experience and code quality" },
  { icon: Wind, title: "Tailwind CSS", description: "Utility-first CSS framework for rapid and responsive design development" },
  { icon: LayoutGrid, title: "Aceternity UI", description: "Accessible UI components library for consistent design systems" },
  { icon: Figma, title: "Figma", description: "UI/UX prototyping and design collaboration for pixel-perfect implementations" },
];

const moreSkills: Skill[] = [
  { icon: Code, title: "JavaScript", description: "Dynamic logic & DOM control for interactive user experiences" },
  { icon: GitBranch, title: "Git & GitHub", description: "Version control & collaboration for efficient team development" },
  { icon: Activity, title: "Zustand", description: "State management simplified with lightweight and scalable solutions" },
  { icon: Upload, title: "Vercel", description: "Deployment platform for seamless CI/CD and global performance" },
  { icon: Cloud, title: "REST APIs", description: "API integration and data management for dynamic applications" },
  { icon: Framer, title: "Framer Motion", description: "Animation library for smooth and responsive UI transitions" },
  { icon: Globe, title: "CesiumJS", description: "Web-based 3D globe and geospatial viewer for streaming and exploring 3D data" },
  { icon: Map, title: "3D GIS & Spatial Analysis", description: "Mapping, spatial analysis and 3D data — the geomatics side of how I build" },
];

function SkillCard({ skill }: { skill: Skill }) {
  const Icon = skill.icon;
  return (
    <WindowCard title={`${skill.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.pkg`} className="h-full">
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-[4px] border-2 border-[var(--frame)] bg-[var(--mint-soft)]">
        <Icon size={20} aria-hidden />
      </div>
      <h3 className={`m-0 mb-2 text-[20px] font-semibold leading-tight ${pixel}`}>{skill.title}</h3>
      <p className="m-0 text-[15px] leading-relaxed text-[var(--muted)]">{skill.description}</p>
    </WindowCard>
  );
}

function BlockHead({ index, title }: { index: string; title: string }) {
  return (
    <>
      <p className={`m-0 mb-2 text-[13px] text-[var(--muted)] ${code}`}>{index}</p>
      <h2 className={`m-0 mb-10 text-[clamp(30px,5vw,44px)] font-bold leading-[1.05] ${pixel}`}>{title}</h2>
    </>
  );
}

export default function Work() {
  return (
    <CaseStudyShell>
      <header className="pb-32 pt-12 sm:pt-16">
        <p className={`m-0 mb-4 text-[13px] text-[var(--muted)] ${code}`}>~/work — the archive</p>
        <h1 className={`m-0 mb-5 text-[clamp(46px,9vw,84px)] font-bold leading-[1.02] ${pixel}`}>
          Things I built
          <span className="ml-1 inline-block h-[0.14em] w-[0.5em] bg-[var(--mint)] align-baseline" aria-hidden />
        </h1>
        <p className="m-0 max-w-[56ch] text-[19px] leading-snug">
          A collection of projects that represent my journey as a developer and designer, and the tools
          behind them.
        </p>
      </header>

      {/* Projects */}
      <section className="border-t border-dashed border-[var(--line)] py-32">
        <Reveal>
          <BlockHead index="01 · projects" title="Featured projects" />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          <Reveal className="md:col-span-2">
            <WindowCard title="samplify.exe">
              <p className={`m-0 mb-3 text-xs text-[var(--mint-deep)] ${code}`}><Mark>featured</Mark> · founder · 2025 — present</p>
              <h3 className={`m-0 mb-3 text-[32px] font-bold leading-none ${pixel}`}>Samplify</h3>
              <p className="m-0 mb-5 max-w-[64ch] text-[16px] leading-relaxed text-[var(--muted)]">
                An AI-powered personal style management platform — wardrobe intelligence, multi-dimensional outfit
                scoring and style analysis, built entirely solo.
              </p>
              <div className="mb-6 flex flex-wrap gap-2">
                {["Next.js", "React Native", "TypeScript", "Gemini AI", "Supabase"].map((t) => (
                  <Tag key={t} quiet>{t}</Tag>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <ButtonLink href="/work/samplify">Read case study</ButtonLink>
                <ButtonLink href="https://thesamplify.com" external variant="ghost">Live site ↗</ButtonLink>
              </div>
            </WindowCard>
          </Reveal>

          <Reveal delay={0.05}>
            <WindowCard title="habithub.exe" className="h-full">
              <p className={`m-0 mb-3 text-xs text-[var(--muted)] ${code}`}>design case study · 2025</p>
              <h3 className={`m-0 mb-3 text-[26px] font-bold leading-none ${pixel}`}>HabitHub</h3>
              <p className="m-0 mb-5 text-[15px] leading-relaxed text-[var(--muted)]">
                A habit-tracking app concept with a coaching-style dashboard and an AI assistant. Designed in Figma,
                build in progress.
              </p>
              <div className="flex flex-wrap gap-3">
                <ButtonLink href="/work/habithub">Case study</ButtonLink>
                <ButtonLink href="https://github.com/jesusselimm/habit-hub" external variant="ghost">GitHub ↗</ButtonLink>
              </div>
            </WindowCard>
          </Reveal>

          <Reveal delay={0.08}>
            <WindowCard title="ev-charging-suitability.exe" className="h-full">
              <p className={`m-0 mb-3 text-xs text-[var(--muted)] ${code}`}>thesis · 2024</p>
              <h3 className={`m-0 mb-3 text-[26px] font-bold leading-none ${pixel}`}>
                EV Charging Station Suitability Mapping
              </h3>
              <p className="m-0 mb-5 text-[15px] leading-relaxed text-[var(--muted)]">
                Graduation project in geomatics engineering: a QGIS analysis of temperature, radiation, cloudiness and
                wind data to find where solar- and wind-powered EV charging stations suit the Izmir–Manisa highway.
              </p>
              <div className="flex flex-wrap gap-2">
                <Tag quiet>QGIS</Tag>
                <Tag quiet>suitability analysis</Tag>
                <Tag quiet>solar</Tag>
                <Tag quiet>wind</Tag>
                <Tag quiet>geomatics</Tag>
              </div>
            </WindowCard>
          </Reveal>
        </div>
      </section>

      {/* Philosophy */}
      <section className="border-t border-dashed border-[var(--line)] py-32">
        <Reveal>
          <BlockHead index="02 · how I work" title="Philosophy & approach" />
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <WindowCard title="philosophy.md" className="h-full">
              <h3 className={`m-0 mb-3 text-[22px] font-semibold ${pixel}`}>Design philosophy</h3>
              <p className="m-0 text-[16px] leading-relaxed text-[var(--muted)]">
                Each project represents a unique challenge and solution, crafted with attention to detail and user
                experience. I believe in creating meaningful digital experiences that combine functionality with
                beautiful design.
              </p>
            </WindowCard>
          </Reveal>
          <Reveal delay={0.05}>
            <WindowCard title="approach.md" className="h-full">
              <h3 className={`m-0 mb-3 text-[22px] font-semibold ${pixel}`}>Technical approach</h3>
              <p className="m-0 text-[16px] leading-relaxed text-[var(--muted)]">
                From personal portfolio websites to complex web applications, I focus on modern technologies,
                performance optimization, and scalable architecture. Every line of code is written with purpose and
                clarity.
              </p>
            </WindowCard>
          </Reveal>
        </div>
      </section>

      {/* Skills */}
      <section className="border-t border-dashed border-[var(--line)] py-32">
        <Reveal>
          <BlockHead index="03 · toolbox" title="Technologies & skills" />
          <p className="m-0 mb-10 max-w-[60ch] text-[17px] leading-relaxed">
            The tools and technologies I use to bring ideas to life. From modern frameworks to design systems, each
            skill contributes to creating exceptional digital experiences.
          </p>
        </Reveal>

        <p className={`m-0 mb-4 text-[13px] text-[var(--muted)] ${code}`}>~/toolbox/core</p>
        <div className="mb-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {coreSkills.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.04}>
              <SkillCard skill={s} />
            </Reveal>
          ))}
        </div>

        <p className={`m-0 mb-4 text-[13px] text-[var(--muted)] ${code}`}>~/toolbox/also</p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {moreSkills.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.04}>
              <SkillCard skill={s} />
            </Reveal>
          ))}
        </div>
      </section>
    </CaseStudyShell>
  );
}
