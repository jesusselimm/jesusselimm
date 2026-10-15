import { ButtonLink } from "@/components/retro/button";
import {
  CaseClosing,
  CaseHero,
  CaseSection,
  CaseStudyShell,
  Figure,
  Prose,
  Step,
} from "@/components/retro/case-study";
import { Reveal } from "@/components/retro/reveal";
import { Mark } from "@/components/retro/mark";

const decisions = [
  {
    title: "“Habitly AI” — a coach, not a settings screen",
    body: "A persistent AI panel sits on the right of every screen with a single input: “Ask Habitly AI Anything…”. Instead of burying help in menus, the assistant greets the user by name, references their current streak, and is always one sentence away — reinforcing the product promise: habit tracking that works like a coach.",
  },
  {
    title: "“Your Garden” — habits as living things",
    body: "Each habit is represented as a plant: a 3-day streak is a sprout, a 28-day streak at 85% consistency is a full tree. Progress isn't an abstract percentage — it's something you've grown and don't want to let die. The metaphor turns loss aversion into positive motivation.",
  },
  {
    title: "Analytics & Deep Focus as glanceable widgets",
    body: "The dashboard pairs a weekly Habits Analytics bar chart and a yearly consistency ring with a built-in Deep Focus Pomodoro timer, so planning, reviewing and doing the work all live on one surface — no context switching to a separate timer app.",
  },
  {
    title: "A timeline-based daily view",
    body: "Daily Tasks are laid out on an hour-by-hour rail with a live current-time indicator, so the day reads as a schedule you move through rather than a flat checklist.",
  },
  {
    title: "Light and dark as first-class themes",
    body: "Both themes were designed in parallel from the start — the greeting even shifts from “Good Morning” with a sun to “Good Night” with stars — so the product feels intentional at any hour, not like a dark mode bolted on later.",
  },
];


export default function HabitHubCaseStudy() {
  return (
    <CaseStudyShell>
      <CaseHero
        kicker="~/work/habithub — design case study"
        title="HabitHub"
        lede={
          <>
            A habit-tracking app concept that behaves like a coach — pairing a calm, glanceable dashboard with an
            always-present AI assistant and a gamified &ldquo;garden&rdquo; where habits grow the more you show up.
          </>
        }
        meta={[
          ["Role", "Product & UI Designer"],
          ["Stage", "Design phase — build in progress"],
          ["Tool", "Figma"],
          ["Scope", "Product concept, dashboard, landing, onboarding"],
        ]}
        note={
          <>
            <strong>This is a design case study, <Mark>not a live product</Mark>.</strong> HabitHub currently exists as a Figma
            design — the screens below are mockups. Development is in progress; there is no shipped app yet.
          </>
        }
      />

      <CaseSection title="Overview">
        <Prose>
          <Reveal delay={0.05}>
            <p className="m-0">
              <strong>HabitHub</strong> is a concept for a habit-tracking app that helps people build sustainable
              routines and actually stay motivated while doing it.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="m-0">
              Most habit trackers are glorified checklists. They&apos;re good at recording that you missed a day and
              bad at making you want to come back. HabitHub&apos;s premise is that the missing ingredient is{" "}
              <strong>encouragement</strong> — so the design leans on two ideas: an <strong>AI coach</strong>{" "}
              that&apos;s always present and speaks to your actual progress, and a <strong>growth metaphor</strong>{" "}
              that makes consistency feel like something you&apos;re nurturing rather than a number you&apos;re
              defending.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="m-0">
              The goal of this phase was to define the product&apos;s point of view and prove the core dashboard
              experience in high fidelity, in both light and dark themes.
            </p>
          </Reveal>
        </Prose>
      </CaseSection>

      <CaseSection title="The dashboard" wide>
        <Reveal>
          <p className="m-0 mb-8 max-w-[64ch] text-[17px] leading-relaxed">
            One home screen holds everything: progress stats, the day&apos;s timeline, the habit garden, analytics, a
            focus timer, and the Habitly AI panel — designed so the whole picture is legible at a glance.
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="space-y-8">
            <Figure src="/projects/habithub/dashboard-light.png" alt="Dashboard — light theme" width={1440} height={1024} />
            <Figure src="/projects/habithub/dashboard-dark.png" alt="Dashboard — dark theme" width={1440} height={1024} />
          </div>
        </Reveal>
      </CaseSection>

      <CaseSection title="Key design decisions">
        <div className="space-y-6">
          {decisions.map((d, i) => (
            <Step key={d.title} num={String(i + 1).padStart(2, "0")} title={d.title} delay={0.05 + i * 0.03}>
              {d.body}
            </Step>
          ))}
        </div>
      </CaseSection>

      <CaseSection title="Landing, pricing & sign-up" wide>
        <Reveal>
          <p className="m-0 mb-8 max-w-[64ch] text-[17px] leading-relaxed">
            The marketing and onboarding surfaces carry the same voice as the app: a &ldquo;works like a
            Coach&rdquo; headline, a three-step &ldquo;Instant Onboarding&rdquo; story, and a sign-up flow that
            previews the four steps to a personalised setup — including unlocking the AI assistant.
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="grid gap-8 sm:grid-cols-2">
            <Figure src="/projects/habithub/landing-light.png" alt="Landing page — light theme" width={790} height={2000} />
            <Figure src="/projects/habithub/landing-dark.png" alt="Landing page — dark theme" width={790} height={2000} />
            <Figure src="/projects/habithub/pricing.png" alt="Pricing — Free, Pro, Enterprise" width={1440} height={1024} />
            <Figure src="/projects/habithub/signup.png" alt="Sign-up — four-step onboarding preview" width={1440} height={1024} />
          </div>
        </Reveal>
      </CaseSection>

      <CaseSection title="Where it stands">
        <Prose>
          <Reveal delay={0.05}>
            <p className="m-0">
              The design system, the core dashboard and the key marketing and onboarding screens are complete in
              Figma across both themes.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="m-0">
              <strong>Next:</strong> turning the dashboard into a working front-end and wiring up the Habitly AI
              assistant. HabitHub is an active work in progress — this page will grow as the build does.
            </p>
          </Reveal>
        </Prose>
      </CaseSection>

      <CaseClosing title="More work">
        <ButtonLink href="/work/samplify" wink="Onwards">Samplify case study →</ButtonLink>
        <ButtonLink href="/#work" variant="ghost">← Back to work</ButtonLink>
      </CaseClosing>
    </CaseStudyShell>
  );
}
