"use client";

import "../../globals.css";
import Link from "next/link";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

/* ─────────────── Reveal wrapper (matches landing page) ─────────────── */
function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay,
        type: "spring",
        stiffness: 60,
        damping: 20,
      }}
      viewport={{ once: true, amount: 0.12 }}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────── Font helpers ─────────────── */
const fontSerif = "font-[family-name:var(--font-instrument-serif)]";
const fontSans = "font-[family-name:var(--font-syne)]";

/* ─────────────── Screenshot slot ─────────────── */
/* Renders the image if it exists at `src`; otherwise a clearly labelled
   placeholder telling Selim exactly which file to drop in. */
function Shot({
  src,
  caption,
  variant = "",
}: {
  src: string;
  caption: string;
  variant?: "" | "wide" | "tall";
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`cs-shot ${
        variant === "wide" ? "cs-shot--wide" : variant === "tall" ? "cs-shot--tall" : ""
      }`}
    >
      <div className="cs-shot-frame">
        {!failed && (
          <img src={src} alt={caption} onError={() => setFailed(true)} />
        )}
        {failed && (
          <div className="cs-shot-ph">
            <div className="cs-shot-ph-icon">◻</div>
            <code>{src}</code>
            <p>Drop image here</p>
          </div>
        )}
      </div>
      <div className={`cs-shot-caption ${fontSans}`}>{caption}</div>
    </div>
  );
}

/* ─────────────── Custom cursor (matches landing page) ─────────────── */
function useLandingCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    const mouse = { x: 0, y: 0 };
    const pos = { x: 0, y: 0 };

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    let rafId: number;
    const loop = () => {
      pos.x += (mouse.x - pos.x) * 0.12;
      pos.y += (mouse.y - pos.y) * 0.12;
      follower.style.left = `${pos.x}px`;
      follower.style.top = `${pos.y}px`;
      rafId = requestAnimationFrame(loop);
    };

    const onEnter = () => {
      cursor.classList.add("hover");
      follower.classList.add("hover");
    };
    const onLeave = () => {
      cursor.classList.remove("hover");
      follower.classList.remove("hover");
    };

    document.addEventListener("mousemove", onMove);
    rafId = requestAnimationFrame(loop);

    const targets = document.querySelectorAll("a, button");
    targets.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return { cursorRef, followerRef };
}

/* ─────────────── Page ─────────────── */
export default function SamplifyCaseStudy() {
  const { cursorRef, followerRef } = useLandingCursor();

  return (
    <main
      className={`landing-page ${fontSans}`}
      style={{
        background: "var(--ink)",
        color: "var(--paper)",
        overflowX: "hidden",
        minHeight: "100vh",
      }}
    >
      <div id="cursor" ref={cursorRef} />
      <div id="cursor-follower" ref={followerRef} />

      {/* ─── Nav ─── */}
      <nav className="cs-nav">
        <Link href="/" className={`cs-nav-logo ${fontSans}`}>
          SK
        </Link>
        <Link href="/#work" className={fontSans}>
          ← Back to work
        </Link>
      </nav>

      {/* ─── Hero ─── */}
      <header className="cs-hero">
        <motion.div
          className={`cs-eyebrow ${fontSans}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Case Study
        </motion.div>

        <motion.h1
          className={`cs-title ${fontSerif}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          Samplify
        </motion.h1>

        <motion.p
          className={`cs-lede ${fontSans}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          An AI-powered personal style and wardrobe platform that turns a closet
          full of &ldquo;I have nothing to wear&rdquo; into confident daily outfit
          decisions — designed and built solo, from data model to interface.
        </motion.p>

        <motion.dl
          className="cs-meta-grid"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          <div className="cs-meta-item">
            <dt>Role</dt>
            <dd>Solo Founder &amp; Product Designer</dd>
          </div>
          <div className="cs-meta-item">
            <dt>Timeline</dt>
            <dd>November 2025 – Present</dd>
          </div>
          <div className="cs-meta-item">
            <dt>Platform</dt>
            <dd>Web · iOS · Android</dd>
          </div>
          <div className="cs-meta-item">
            <dt>Scope</dt>
            <dd>Product design, design system, full-stack build</dd>
          </div>
        </motion.dl>

        <motion.div
          className="cs-btn-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
        >
          <a
            className={`cs-btn cs-btn--primary ${fontSans}`}
            href="https://thesamplify.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit thesamplify.com ↗
          </a>
          <Link className={`cs-btn cs-btn--ghost ${fontSans}`} href="/#work">
            ← All work
          </Link>
        </motion.div>
      </header>

      {/* ─── Overview ─── */}
      <section className="cs-section">
        <div className="cs-section-grid">
          <Reveal>
            <h2 className={`cs-section-heading ${fontSerif}`}>Overview</h2>
          </Reveal>
          <div className={`cs-prose ${fontSans}`}>
            <Reveal delay={0.1}>
              <p>
                <strong>Samplify</strong> is an AI-powered personal style and
                wardrobe management platform. People photograph the clothes they
                already own; Samplify recognises and categorises each piece,
                understands their personal aesthetic, and helps them assemble and
                evaluate outfits every day.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p>
                The goal isn&apos;t to sell more clothes — it&apos;s to get more
                value and more confidence out of the wardrobe that already exists.
                Everything in the product is built around one question:{" "}
                <strong>&ldquo;What should I wear today, and why does it work?&rdquo;</strong>
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── Problem ─── */}
      <section className="cs-section">
        <div className="cs-section-grid">
          <Reveal>
            <h2 className={`cs-section-heading ${fontSerif}`}>The problem</h2>
          </Reveal>
          <div className={`cs-prose ${fontSans}`}>
            <Reveal delay={0.1}>
              <p>
                Most people own more than enough clothing and still feel stuck
                every morning. The hard part isn&apos;t the closet — it&apos;s the{" "}
                <strong>decision</strong>. Which pieces go together? Does this
                combination actually suit me, or does it just &ldquo;fit&rdquo;?
                Is it right for the weather, the occasion, the way I want to be
                seen today?
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p>
                That uncertainty compounds into{" "}
                <strong>decision fatigue</strong>: outfits get repeated out of
                safety, new purchases go unworn, and getting dressed becomes a
                small daily source of stress instead of self-expression.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                Samplify&apos;s job is to remove that ambiguity — to give people a
                clear, explainable answer they can trust, fast.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── Design Process ─── */}
      <section className="cs-section">
        <div className="cs-section-grid">
          <Reveal>
            <h2 className={`cs-section-heading ${fontSerif}`}>Design process</h2>
          </Reveal>
          <div>
            <Reveal delay={0.1}>
              <div className="cs-step">
                <div className={`cs-step-num ${fontSans}`}>Step 01</div>
                <h3 className={fontSans}>
                  A style engine spanning 25 aesthetics
                </h3>
                <p>
                  Before any UI, I designed the taxonomy the whole product reasons
                  about. I mapped <strong>25 distinct style aesthetics</strong>{" "}
                  (from minimalist and old money to streetwear and Y2K) into a{" "}
                  <strong>gender-aware JSON data structure</strong> — each
                  aesthetic defined by its silhouettes, palettes, fabrics, key
                  garments and styling rules, with separate expressions where
                  presentation differs. This schema is the single source of truth:
                  onboarding, recognition, scoring and recommendations all read
                  from the same style vocabulary, so the product stays coherent as
                  it grows.
                </p>
                <div className="cs-taglist">
                  <span>Style taxonomy</span>
                  <span>Gender-aware schema</span>
                  <span>JSON data model</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="cs-step">
                <div className={`cs-step-num ${fontSans}`}>Step 02</div>
                <h3 className={fontSans}>
                  Outfit scoring as a design decision, not just a formula
                </h3>
                <p>
                  Outfits are evaluated across{" "}
                  <strong>five dimensions</strong> — colour harmony, proportion
                  &amp; silhouette, occasion fit, weather suitability, and
                  alignment with the user&apos;s own aesthetic. I treated the
                  scoring model as a design surface: deciding what each dimension
                  should <em>mean</em> to a user, how to weight them, and — most
                  importantly — how to communicate a score so it reads as helpful
                  guidance rather than judgement. Every score comes with a plain-
                  language reason, so people learn <em>why</em> something works and
                  build their own taste over time.
                </p>
                <div className="cs-taglist">
                  <span>5-dimensional scoring</span>
                  <span>Explainable output</span>
                  <span>Weighting &amp; thresholds</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="cs-step">
                <div className={`cs-step-num ${fontSans}`}>Step 03</div>
                <h3 className={fontSans}>Onboarding that earns its length</h3>
                <p>
                  A style product is only as good as what it knows about you, but
                  a long quiz kills momentum. I designed onboarding as a{" "}
                  <strong>progressive, visual flow</strong>: quick visual
                  preference choices instead of text questions, immediate feedback
                  so the user sees the product &ldquo;getting&rdquo; them, and a
                  deliberate stopping point where they can start building their
                  wardrobe before finishing every step. Consent and data
                  collection are woven in transparently at the moment each piece of
                  data is actually needed, not front-loaded into a wall of legal
                  text.
                </p>
                <div className="cs-taglist">
                  <span>Progressive disclosure</span>
                  <span>Visual preference input</span>
                  <span>In-context consent</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── Visual Showcase ─── */}
      <section className="cs-section">
        <Reveal>
          <div className={`section-label ${fontSans}`}>Visual showcase</div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="cs-showcase">
            <Shot
              src="/case-studies/samplify/onboarding.png"
              caption="Onboarding flow — visual style preferences"
            />
            <Shot
              src="/case-studies/samplify/home.png"
              caption="Home — wardrobe overview & daily suggestion"
            />
            <Shot
              src="/case-studies/samplify/scoring-ui.png"
              caption="5-dimensional outfit scoring interface"
            />
            <Shot
              src="/case-studies/samplify/outfit-suggestion.png"
              caption="Outfit suggestion screen"
            />
            <Shot
              src="/case-studies/samplify/style-taxonomy.png"
              caption="Style engine — the 25 aesthetics"
              variant="wide"
            />
          </div>
        </Reveal>
      </section>

      {/* ─── Tech & Architecture ─── */}
      <section className="cs-section">
        <div className="cs-section-grid">
          <Reveal>
            <h2 className={`cs-section-heading ${fontSerif}`}>
              How I made it possible
            </h2>
          </Reveal>
          <div className={`cs-prose ${fontSans}`}>
            <Reveal delay={0.1}>
              <p>
                As a solo founder, the architecture had to let one person ship a
                real product across web and mobile without drowning in
                infrastructure. I built the marketing and web app on{" "}
                <strong>Next.js</strong>, and the mobile apps with{" "}
                <strong>React Native / Expo</strong> so iOS and Android share a
                single codebase and design system.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p>
                An <strong>Express.js</strong> backend orchestrates the style
                logic, and <strong>Supabase</strong> handles auth, database and
                storage — which meant I could stand up a secure, production-grade
                data layer without running my own servers.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                The wardrobe intelligence runs on{" "}
                <strong>Gemini 2.5</strong>: users photograph a garment, and the
                model identifies it, extracts attributes (category, colour,
                pattern, formality) and maps it into the style taxonomy — turning
                a messy pile of photos into structured, queryable wardrobe data
                that the scoring engine can reason about.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="cs-taglist">
                <span>Next.js</span>
                <span>React Native / Expo</span>
                <span>Express.js</span>
                <span>Supabase</span>
                <span>Gemini 2.5</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── Outcome ─── */}
      <section className="cs-section">
        <div className="cs-section-grid">
          <Reveal>
            <h2 className={`cs-section-heading ${fontSerif}`}>Outcome</h2>
          </Reveal>
          <div className={`cs-prose ${fontSans}`}>
            <Reveal delay={0.1}>
              <p>
                Samplify is live and in active beta while preparing for App Store
                and Play Store launch.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="cs-metrics">
                <div className="cs-metric">
                  <div className={`cs-metric-value ${fontSerif}`}>15–30%</div>
                  <div className={`cs-metric-label ${fontSans}`}>
                    of sign-ups go on to build a wardrobe — the core activation
                    step — driven by the progressive onboarding design.
                  </div>
                </div>
                <div className="cs-metric">
                  <div className={`cs-metric-value ${fontSerif}`}>KVKK</div>
                  <div className={`cs-metric-label ${fontSans}`}>
                    compliant authentication and consent architecture, with
                    in-context permission requests and explicit, revocable data
                    consent.
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── Closing CTA ─── */}
      <section className="cs-cta">
        <Reveal>
          <h2 className={fontSerif}>See it live</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="cs-btn-row">
            <a
              className={`cs-btn cs-btn--primary ${fontSans}`}
              href="https://thesamplify.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit thesamplify.com ↗
            </a>
            <Link className={`cs-btn cs-btn--ghost ${fontSans}`} href="/#work">
              ← Back to work
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ─── Footer ─── */}
      <footer className={`cs-footer ${fontSans}`}>
        <span>© 2025 Selim Kurtulmuş</span>
        <Link href="/">Design &amp; Development — jesusselimm</Link>
      </footer>
    </main>
  );
}
