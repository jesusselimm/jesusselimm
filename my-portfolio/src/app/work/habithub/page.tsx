"use client";

import "../../globals.css";
import Link from "next/link";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";

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

/* ─────────────── Figure (real screenshot, no crop) ─────────────── */
function Figure({ src, caption }: { src: string; caption: string }) {
  return (
    <figure className="cs-figure">
      <img src={src} alt={caption} />
      <figcaption className={fontSans}>{caption}</figcaption>
    </figure>
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
export default function HabitHubCaseStudy() {
  const { cursorRef, followerRef } = useLandingCursor();

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
          Design Case Study
        </motion.div>

        <motion.h1
          className={`cs-title ${fontSerif}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          HabitHub
        </motion.h1>

        <motion.p
          className={`cs-lede ${fontSans}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          A habit-tracking app concept that behaves like a coach — pairing a
          calm, glanceable dashboard with an always-present AI assistant and a
          gamified &ldquo;garden&rdquo; where habits grow the more you show up.
        </motion.p>

        <motion.dl
          className="cs-meta-grid"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          <div className="cs-meta-item">
            <dt>Role</dt>
            <dd>Product &amp; UI Designer</dd>
          </div>
          <div className="cs-meta-item">
            <dt>Stage</dt>
            <dd>Design phase — build in progress</dd>
          </div>
          <div className="cs-meta-item">
            <dt>Tool</dt>
            <dd>Figma</dd>
          </div>
          <div className="cs-meta-item">
            <dt>Scope</dt>
            <dd>Product concept, dashboard, landing, onboarding</dd>
          </div>
        </motion.dl>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
        >
          <div className="cs-note">
            <strong>This is a design case study, not a live product.</strong>{" "}
            HabitHub currently exists as a Figma design — the screens below are
            mockups. Development is in progress; there is no shipped app yet.
          </div>
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
                <strong>HabitHub</strong> is a concept for a habit-tracking app
                that helps people build sustainable routines and actually stay
                motivated while doing it.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p>
                Most habit trackers are glorified checklists. They&apos;re good at
                recording that you missed a day and bad at making you want to come
                back. HabitHub&apos;s premise is that the missing ingredient is{" "}
                <strong>encouragement</strong> — so the design leans on two ideas:
                an <strong>AI coach</strong> that&apos;s always present and speaks
                to your actual progress, and a <strong>growth metaphor</strong>{" "}
                that makes consistency feel like something you&apos;re nurturing
                rather than a number you&apos;re defending.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                The goal of this phase was to define the product&apos;s point of
                view and prove the core dashboard experience in high fidelity, in
                both light and dark themes.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── Dashboard ─── */}
      <section className="cs-section">
        <Reveal>
          <div className={`section-label ${fontSans}`}>The dashboard</div>
        </Reveal>
        <Reveal delay={0.1}>
          <p
            className={`cs-prose ${fontSans}`}
            style={{ maxWidth: 640, marginBottom: "2.5rem" }}
          >
            One home screen holds everything: progress stats, the day&apos;s
            timeline, the habit garden, analytics, a focus timer, and the Habitly
            AI panel — designed so the whole picture is legible at a glance.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="cs-figure-stack">
            <Figure
              src="/projects/habithub/dashboard-light.png"
              caption="Dashboard — light theme"
            />
            <Figure
              src="/projects/habithub/dashboard-dark.png"
              caption="Dashboard — dark theme"
            />
          </div>
        </Reveal>
      </section>

      {/* ─── Design decisions ─── */}
      <section className="cs-section">
        <div className="cs-section-grid">
          <Reveal>
            <h2 className={`cs-section-heading ${fontSerif}`}>
              Key design decisions
            </h2>
          </Reveal>
          <div>
            {decisions.map((d, i) => (
              <Reveal key={d.title} delay={0.1 + i * 0.05}>
                <div className="cs-step">
                  <div className={`cs-step-num ${fontSans}`}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className={fontSans}>{d.title}</h3>
                  <p>{d.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Landing, pricing, sign-up ─── */}
      <section className="cs-section">
        <Reveal>
          <div className={`section-label ${fontSans}`}>
            Landing, pricing &amp; sign-up
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p
            className={`cs-prose ${fontSans}`}
            style={{ maxWidth: 640, marginBottom: "2.5rem" }}
          >
            The marketing and onboarding surfaces carry the same voice as the
            app: a &ldquo;works like a Coach&rdquo; headline, a three-step
            &ldquo;Instant Onboarding&rdquo; story, and a sign-up flow that
            previews the four steps to a personalised setup — including unlocking
            the AI assistant.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="cs-figure-pair">
            <Figure
              src="/projects/habithub/landing-light.png"
              caption="Landing page — light theme"
            />
            <Figure
              src="/projects/habithub/landing-dark.png"
              caption="Landing page — dark theme"
            />
            <Figure
              src="/projects/habithub/pricing.png"
              caption="Pricing — Free, Pro, Enterprise"
            />
            <Figure
              src="/projects/habithub/signup.png"
              caption="Sign-up — four-step onboarding preview"
            />
          </div>
        </Reveal>
      </section>

      {/* ─── Status ─── */}
      <section className="cs-section">
        <div className="cs-section-grid">
          <Reveal>
            <h2 className={`cs-section-heading ${fontSerif}`}>Where it stands</h2>
          </Reveal>
          <div className={`cs-prose ${fontSans}`}>
            <Reveal delay={0.1}>
              <p>
                The design system, the core dashboard and the key marketing and
                onboarding screens are complete in Figma across both themes.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p>
                <strong>Next:</strong> turning the dashboard into a working
                front-end and wiring up the Habitly AI assistant. HabitHub is an
                active work in progress — this page will grow as the build does.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── Closing CTA ─── */}
      <section className="cs-cta">
        <Reveal>
          <h2 className={fontSerif}>More work</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="cs-btn-row">
            <Link
              className={`cs-btn cs-btn--primary ${fontSans}`}
              href="/work/samplify"
            >
              Samplify case study →
            </Link>
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
