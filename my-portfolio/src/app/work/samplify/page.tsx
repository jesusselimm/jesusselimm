import { ButtonLink } from "@/components/retro/button";
import { CaseShot } from "@/components/retro/case-shot";
import {
  CaseClosing,
  CaseHero,
  CaseSection,
  CaseStudyShell,
  Metric,
  Prose,
  Step,
} from "@/components/retro/case-study";
import { Reveal } from "@/components/retro/reveal";
import { Tag } from "@/components/retro/tag";

export default function SamplifyCaseStudy() {
  return (
    <CaseStudyShell>
      <CaseHero
        kicker="~/work/samplify — case study"
        title="Samplify"
        lede={
          <>
            An AI-powered personal style and wardrobe platform that turns a closet full of &ldquo;I have
            nothing to wear&rdquo; into confident daily outfit decisions — designed and built solo, from data model
            to interface.
          </>
        }
        meta={[
          ["Role", "Solo Founder & Product Designer"],
          ["Timeline", "November 2025 – Present"],
          ["Platform", "Web · iOS · Android"],
          ["Scope", "Product design, design system, full-stack build"],
        ]}
        actions={
          <>
            <ButtonLink href="https://thesamplify.com" external>Visit thesamplify.com ↗</ButtonLink>
            <ButtonLink href="/#work" variant="ghost">← All work</ButtonLink>
          </>
        }
      />

      <CaseSection title="Overview">
        <Prose>
          <Reveal delay={0.05}>
            <p className="m-0">
              <strong>Samplify</strong> is an AI-powered personal style and wardrobe management platform. People
              photograph the clothes they already own; Samplify recognises and categorises each piece, understands
              their personal aesthetic, and helps them assemble and evaluate outfits every day.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="m-0">
              The goal isn&apos;t to sell more clothes — it&apos;s to get more value and more confidence out of the
              wardrobe that already exists. Everything in the product is built around one question:{" "}
              <strong>&ldquo;What should I wear today, and why does it work?&rdquo;</strong>
            </p>
          </Reveal>
        </Prose>
      </CaseSection>

      <CaseSection title="The problem">
        <Prose>
          <Reveal delay={0.05}>
            <p className="m-0">
              Most people own more than enough clothing and still feel stuck every morning. The hard part isn&apos;t
              the closet — it&apos;s the <strong>decision</strong>. Which pieces go together? Does this combination
              actually suit me, or does it just &ldquo;fit&rdquo;? Is it right for the weather, the occasion, the way
              I want to be seen today?
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="m-0">
              That uncertainty compounds into <strong>decision fatigue</strong>: outfits get repeated out of safety,
              new purchases go unworn, and getting dressed becomes a small daily source of stress instead of
              self-expression.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="m-0">
              Samplify&apos;s job is to remove that ambiguity — to give people a clear, explainable answer they can
              trust, fast.
            </p>
          </Reveal>
        </Prose>
      </CaseSection>

      <CaseSection title="Design process">
        <div className="space-y-6">
          <Step
            num="01"
            delay={0.05}
            title="A style engine spanning 25 aesthetics"
            tags={["Style taxonomy", "Gender-aware schema", "JSON data model"]}
          >
            Before any UI, I designed the taxonomy the whole product reasons about. I mapped{" "}
            <strong>25 distinct style aesthetics</strong> (from minimalist and old money to streetwear and Y2K) into
            a <strong>gender-aware JSON data structure</strong> — each aesthetic defined by its silhouettes,
            palettes, fabrics, key garments and styling rules, with separate expressions where presentation differs.
            This schema is the single source of truth: onboarding, recognition, scoring and recommendations all read
            from the same style vocabulary, so the product stays coherent as it grows.
          </Step>
          <Step
            num="02"
            delay={0.1}
            title="Outfit scoring as a design decision, not just a formula"
            tags={["5-dimensional scoring", "Explainable output", "Weighting & thresholds"]}
          >
            Outfits are evaluated across <strong>five dimensions</strong> — colour harmony, proportion &amp;
            silhouette, occasion fit, weather suitability, and alignment with the user&apos;s own aesthetic. I
            treated the scoring model as a design surface: deciding what each dimension should <em>mean</em> to a
            user, how to weight them, and — most importantly — how to communicate a score so it reads as helpful
            guidance rather than judgement. Every score comes with a plain-language reason, so people learn{" "}
            <em>why</em> something works and build their own taste over time.
          </Step>
          <Step
            num="03"
            delay={0.15}
            title="Onboarding that earns its length"
            tags={["Progressive disclosure", "Visual preference input", "In-context consent"]}
          >
            A style product is only as good as what it knows about you, but a long quiz kills momentum. I designed
            onboarding as a <strong>progressive, visual flow</strong>: quick visual preference choices instead of
            text questions, immediate feedback so the user sees the product &ldquo;getting&rdquo; them, and a
            deliberate stopping point where they can start building their wardrobe before finishing every step.
            Consent and data collection are woven in transparently at the moment each piece of data is actually
            needed, not front-loaded into a wall of legal text.
          </Step>
        </div>
      </CaseSection>

      <CaseSection title="Visual showcase" wide>
        <Reveal>
          <div className="grid gap-6 sm:grid-cols-2">
            <CaseShot src="/case-studies/samplify/onboarding.png" caption="Onboarding flow — visual style preferences" />
            <CaseShot src="/case-studies/samplify/home.png" caption="Home — wardrobe overview & daily suggestion" />
            <CaseShot src="/case-studies/samplify/scoring-ui.png" caption="5-dimensional outfit scoring interface" />
            <CaseShot src="/case-studies/samplify/outfit-suggestion.png" caption="Outfit suggestion screen" />
            <CaseShot src="/case-studies/samplify/style-taxonomy.png" caption="Style engine — the 25 aesthetics" wide />
          </div>
        </Reveal>
      </CaseSection>

      <CaseSection title="How I made it possible">
        <Prose>
          <Reveal delay={0.05}>
            <p className="m-0">
              As a solo founder, the architecture had to let one person ship a real product across web and mobile
              without drowning in infrastructure. I built the marketing and web app on <strong>Next.js</strong>, and
              the mobile apps with <strong>React Native / Expo</strong> so iOS and Android share a single codebase and
              design system.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="m-0">
              An <strong>Express.js</strong> backend orchestrates the style logic, and <strong>Supabase</strong>{" "}
              handles auth, database and storage — which meant I could stand up a secure, production-grade data layer
              without running my own servers.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="m-0">
              The wardrobe intelligence runs on <strong>Gemini 2.5</strong>: users photograph a garment, and the
              model identifies it, extracts attributes (category, colour, pattern, formality) and maps it into the
              style taxonomy — turning a messy pile of photos into structured, queryable wardrobe data that the
              scoring engine can reason about.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "React Native / Expo", "Express.js", "Supabase", "Gemini 2.5"].map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </Reveal>
        </Prose>
      </CaseSection>

      <CaseSection title="Outcome">
        <Prose>
          <Reveal delay={0.05}>
            <p className="m-0">
              Samplify is live and in active beta while preparing for App Store and Play Store launch.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-2">
              <Metric value="15–30%">
                of sign-ups go on to build a wardrobe — the core activation step — driven by the progressive
                onboarding design.
              </Metric>
              <Metric value="KVKK">
                compliant authentication and consent architecture, with in-context permission requests and explicit,
                revocable data consent.
              </Metric>
            </div>
          </Reveal>
        </Prose>
      </CaseSection>

      <CaseClosing title="See it live">
        <ButtonLink href="https://thesamplify.com" external wink="Go on">Visit thesamplify.com ↗</ButtonLink>
        <ButtonLink href="/#work" variant="ghost">← Back to work</ButtonLink>
      </CaseClosing>
    </CaseStudyShell>
  );
}
