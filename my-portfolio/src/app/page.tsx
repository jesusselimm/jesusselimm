"use client";

import "./globals.css";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useEffect, useCallback } from "react";

/* ─────────────── Reveal wrapper for scroll animations ─────────────── */
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

/* ─────────────── Font class helpers ─────────────── */
const fontSerif = "font-[family-name:var(--font-instrument-serif)]";
const fontSans = "font-[family-name:var(--font-syne)]";

/* ─────────────── Main page ─────────────── */
export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  /* ── Custom cursor logic ── */
  const mousePos = useRef({ x: 0, y: 0 });
  const followerPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    let rafId: number;
    const animateFollower = () => {
      followerPos.current.x += (mousePos.current.x - followerPos.current.x) * 0.12;
      followerPos.current.y += (mousePos.current.y - followerPos.current.y) * 0.12;
      follower.style.left = `${followerPos.current.x}px`;
      follower.style.top = `${followerPos.current.y}px`;
      rafId = requestAnimationFrame(animateFollower);
    };

    const onEnterHover = () => {
      cursor.classList.add("hover");
      follower.classList.add("hover");
    };
    const onLeaveHover = () => {
      cursor.classList.remove("hover");
      follower.classList.remove("hover");
    };

    document.addEventListener("mousemove", onMouseMove);
    rafId = requestAnimationFrame(animateFollower);

    const hoverTargets = document.querySelectorAll("a, button");
    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", onEnterHover);
      el.addEventListener("mouseleave", onLeaveHover);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", onEnterHover);
        el.removeEventListener("mouseleave", onLeaveHover);
      });
    };
  }, []);

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
      {/* Custom cursor */}
      <div id="cursor" ref={cursorRef} />
      <div id="cursor-follower" ref={followerRef} />

      {/* ─── Nav ─── */}
      <nav className="landing-nav">
        <a href="#" className={`landing-nav-logo ${fontSans}`}>
          SK
        </a>
        <ul className="landing-nav-links">
          <li>
            <a href="#work" className={fontSans}>Work</a>
          </li>
          <li>
            <a href="#about" className={fontSans}>About</a>
          </li>
          <li>
            <a href="#contact" className={fontSans}>Contact</a>
          </li>
        </ul>
      </nav>

      {/* ─── Hero ─── */}
      <motion.section
        id="hero"
        ref={heroRef}
        className="landing-hero"
        style={{ opacity: heroOpacity, y: heroY }}
      >
        <motion.div
          className={`hero-eyebrow ${fontSans}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Istanbul, Turkey — Available for work
        </motion.div>

        <motion.h1
          className={`hero-title ${fontSerif}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Design
          <br />
          <em className={fontSans}>&amp;</em> Engineer
        </motion.h1>

        <motion.div
          className="hero-bottom"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className={`hero-desc ${fontSans}`}>
            I build interfaces that don&apos;t just work — they feel inevitable.
            Front-end development where code and craft converge.
          </p>
          <div className={`hero-scroll ${fontSans}`}>
            <div className="scroll-line" />
            Scroll
          </div>
        </motion.div>
      </motion.section>

      {/* ─── Marquee ─── */}
      <div className="marquee-wrapper">
        <div className="marquee-inner">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="contents">
              <span className={`marquee-item ${fontSerif}`}>Selim Kurtulmuş</span>
              <span className={`marquee-item accent-item ${fontSans}`}>·</span>
              <span className={`marquee-item ${fontSerif}`}>Frontend Developer</span>
              <span className={`marquee-item accent-item ${fontSans}`}>·</span>
              <span className={`marquee-item ${fontSerif}`}>Samplify Founder</span>
              <span className={`marquee-item accent-item ${fontSans}`}>·</span>
              <span className={`marquee-item ${fontSerif}`}>Building with AI</span>
              <span className={`marquee-item accent-item ${fontSans}`}>·</span>
              <span className={`marquee-item ${fontSerif}`}>Istanbul</span>
              <span className={`marquee-item accent-item ${fontSans}`}>·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ─── About ─── */}
      <section id="about" className="landing-section landing-about">
        <Reveal>
          <div className={`section-label ${fontSans}`}>About</div>
        </Reveal>

        <div className="about-grid">
          <Reveal>
            <div className={`about-heading ${fontSerif}`}>
              Structure
              <br />
              <em
                style={{
                  fontStyle: "italic",
                  color: "var(--highlight)",
                }}
              >
                meets
              </em>
              <br />
              Emotion
            </div>
          </Reveal>

          <div className="about-body">
            <Reveal delay={0.1}>
              <p className={fontSans}>
                I&apos;m <strong>Selim</strong>, a front-end developer and
                graduate student in software engineering. I believe the best
                digital products are built at the intersection of{" "}
                <strong>engineering rigor</strong> and{" "}
                <strong>design sensibility</strong>.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className={fontSans}>
                My work spans from crafting pixel-perfect interfaces to
                architecting full-stack products. Currently building{" "}
                <strong>Samplify</strong> — an AI-powered personal style
                platform — from the ground up as a solo founder.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className={fontSans}>
                I care deeply about the details: the weight of a typeface, the
                timing of an animation, the logic of a component. Every decision
                is intentional.
              </p>
            </Reveal>

            <Reveal delay={0.35}>
              <div className="divider" />
            </Reveal>

            <Reveal delay={0.4}>
              <div className="about-tags">
                {[
                  "Next.js",
                  "React Native",
                  "TypeScript",
                  "Node.js",
                  "Figma",
                  "AI/ML Integration",
                  "System Design",
                  "Motion Design",
                ].map((tag) => (
                  <span key={tag} className={`landing-tag ${fontSans}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Timeline */}
        <Reveal>
          <div className="landing-timeline-wrap">
            <div
              className={`section-label ${fontSans}`}
              style={{ marginTop: "5rem", marginBottom: "3rem" }}
            >
              Journey
            </div>
            <div className="landing-timeline">
              {[
                {
                  year: "2026",
                  title: "Graduate Studies + Scaling Samplify",
                  desc: "Pursuing a master's degree in software engineering while continuing to build and grow Samplify. Exploring App Store launch, B2B opportunities, and the intersection of AI and personal style.",
                  active: true,
                },
                {
                  year: "2025",
                  title: "UI/UX Focus + Samplify",
                  desc: "Realized UI development isn't just about code — it's the art of balancing design and aesthetics. Launched Samplify as a solo founder: an AI-powered wardrobe and personal style platform, now in active beta.",
                  highlight: "Samplify",
                  active: false,
                },
                {
                  year: "2023",
                  title: "Workintech — Full Stack Training",
                  desc: "Intensive full-stack program covering front-end and back-end development. Built multiple projects end-to-end and discovered that the front-end was where design and engineering collide — exactly where I wanted to be.",
                  active: false,
                },
                {
                  year: "2018",
                  title: "University — Geomatics Engineering",
                  desc: "Started undergraduate at İzmir Katip Çelebi University. Gained engineering discipline, analytical thinking, and a problem-solving mindset that still shapes how I write code.",
                  active: false,
                },
              ].map((item, i) => (
                <motion.div
                  key={item.year}
                  className="tl-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.1,
                    type: "spring",
                    stiffness: 60,
                    damping: 20,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div className={`tl-year ${fontSans}`}>{item.year}</div>
                  <div
                    className={`tl-dot ${item.active ? "tl-dot--active" : ""}`}
                  />
                  <div className="tl-content">
                    <h4 className={fontSans}>{item.title}</h4>
                    <p className={fontSans}>
                      {item.highlight ? (
                        <>
                          {item.desc.split(item.highlight)[0]}
                          <strong>{item.highlight}</strong>
                          {item.desc.split(item.highlight)[1]}
                        </>
                      ) : (
                        item.desc
                      )}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Beyond the Code */}
        <Reveal>
          <div>
            <div
              className={`section-label ${fontSans}`}
              style={{ marginTop: "5rem", marginBottom: "3rem" }}
            >
              Beyond the Code
            </div>
            <div className="btc-grid">
              {[
                {
                  icon: "◎",
                  title: "Photography",
                  desc: "Creativity starts behind the camera. Chasing light, capturing fleeting moments — photography keeps me inspired and teaches me to see the world differently.",
                },
                {
                  icon: "♩",
                  title: "Music",
                  desc: "Music and architecture share the same logic: structure, rhythm, and emotion. My interest in both gives me a natural sensitivity to timing, composition, and the invisible flow of experience.",
                },
                {
                  icon: "◻",
                  title: "Architecture & Visual Arts",
                  desc: "I see interfaces as architecture — spatial, intentional, lived-in. Drawing from visual arts informs my approach to typography, color harmony, and user experience.",
                },
              ].map((card, i) => (
                <motion.div
                  key={card.title}
                  className="btc-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.12,
                    type: "spring",
                    stiffness: 60,
                    damping: 20,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div className="btc-icon">{card.icon}</div>
                  <h4 className={fontSans}>{card.title}</h4>
                  <p className={fontSans}>{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ─── Work ─── */}
      <section id="work" className="landing-section landing-work">
        <Reveal>
          <div className={`section-label ${fontSans}`}>Selected Work</div>
        </Reveal>

        {/* Featured — Samplify */}
        <Reveal>
          <div className="featured-project">
            <div className={`fp-label ${fontSans}`}>Featured Project</div>
            <div>
              <div className="fp-meta">
                <span className={`fp-num ${fontSans}`}>01</span>
                <span className={`project-tag ${fontSans}`}>Founder · 2024 — Present</span>
              </div>
              <h3 className={`fp-title ${fontSerif}`}>Samplify</h3>
              <p className={`fp-desc ${fontSans}`}>
                An AI-powered personal style management platform. Wardrobe
                intelligence, multi-dimensional outfit scoring, style trend
                analysis across 25 aesthetics — built entirely solo from zero to
                beta. Currently preparing for App Store &amp; Play Store launch.
              </p>
              <div className="fp-stack">
                {["Next.js", "React Native", "TypeScript", "Gemini AI", "Supabase"].map(
                  (tech) => (
                    <span key={tech} className={`stack-tag ${fontSans}`}>
                      {tech}
                    </span>
                  )
                )}
              </div>
              <a
                className={`fp-link ${fontSans}`}
                href="https://thesamplify.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project ↗
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <p
            className={fontSans}
            style={{
              textAlign: "center",
              fontSize: "0.8rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase" as const,
              color: "rgba(255,255,255,0.2)",
              marginTop: "3rem",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              paddingTop: "2rem",
            }}
          >
            More projects coming soon
          </p>
        </Reveal>

        {/* Skills grid */}
        <Reveal>
          <div style={{ marginTop: "6rem" }}>
            <div className={`section-label ${fontSans}`} style={{ marginBottom: "2.5rem" }}>
              Technologies
            </div>
            <div className="skills-grid">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "React Native",
                "Tailwind CSS",
                "Node.js",
                "Supabase",
                "Figma",
                "Git & GitHub",
                "Vercel",
                "AI Integration",
                "UI/UX Design"
              ].map((skill) => (
                <div key={skill} className={`skill-item ${fontSans}`}>
                  <span className="skill-dot" />
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ─── Contact ─── */}
      <section id="contact" className="landing-section landing-contact">
        <Reveal>
          <div
            className={`section-label ${fontSans}`}
            style={{ justifyContent: "center" }}
          >
            Get in touch
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className={`contact-headline ${fontSerif}`}>
            Let&apos;s build
            <br />
            <span>something</span>
            <br />
            remarkable
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className={`contact-sub ${fontSans}`}>
            Open to collaborations, freelance projects, and good conversations.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="contact-links">
            <a
              className={`contact-link ${fontSans}`}
              href="mailto:jesusselimm@gmail.com"
            >
              Email
            </a>
            <a
              className={`contact-link ${fontSans}`}
              href="https://x.com/jesusselimm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter / X
            </a>
            <a
              className={`contact-link ${fontSans}`}
              href="https://linkedin.com/in/selim-kurtulmus"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className={`contact-link ${fontSans}`}
              href="https://github.com/jesusselimm"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </Reveal>
      </section>

      {/* ─── Footer ─── */}
      <footer className={`landing-footer ${fontSans}`}>
        <span>© 2025 Selim Kurtulmuş</span>
        <span>Design &amp; Development — jesusselimm</span>
      </footer>
    </main>
  );
}
