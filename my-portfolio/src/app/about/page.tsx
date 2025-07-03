"use client";
import { Timeline } from "@/components/ui/timeline";
import { Navbar } from "@/components/ui/navbar";
import { motion } from "framer-motion";

const timelineData = [
  {
    title: "2024",
    content: (
      <ul>
        <li>Portfolio site created with Next.js.</li>
        <li>Follow modern UI/UX trends and produce projects.</li>
      </ul>
    ),
  },
  {
    title: "2023",
    content: (
      <ul>
        <li>Focused on React and TypeScript in the Front-End field.</li>
        <li>Worked on many freelance projects.</li>
      </ul>
    ),
  },
  {
    title: "2022",
    content: (
      <ul>
        <li>Entered the software world.</li>
        <li>Learned the basics of HTML, CSS and JavaScript.</li>
      </ul>
    ),
  },
];

export default function AboutPage() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-start bg-[var(--background)] px-4 md:px-0"
      style={{ fontFamily: 'var(--font-montserrat)' }}
    >
      <Navbar active="About" />
      <motion.div
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 60, damping: 18 }}
        className="w-full flex flex-col items-center"
      >
        <section className="w-full max-w-4xl text-center mt-20 mb-10 animate-slide-in-right">
          <h1
            className="text-4xl md:text-6xl font-bold mb-4 tracking-tight"
            style={{
              color: 'var(--accent)',
              fontFamily: 'var(--font-libre-baskerville)',
            }}
          >
            About
          </h1>
          <p
            className="text-lg md:text-2xl max-w-2xl mx-auto mb-6"
            style={{
              color: 'var(--foreground)',
              opacity: 0.85,
              fontFamily: 'var(--font-montserrat)',
            }}
          >
            Hello! I&apos;m Selim. I&apos;m a Front-End Developer. Here&apos;s a brief summary of my software journey:
          </p>
          <div className="h-[2px] w-24 mx-auto bg-gradient-to-r from-[var(--accent)] via-[var(--accent-light)] to-[var(--accent)] rounded-full mb-8" />
        </section>
        <section className="w-full max-w-5xl">
          <Timeline data={timelineData} />
        </section>
      </motion.div>
    </main>
  );
} 