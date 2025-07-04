"use client";
import { Timeline } from "@/components/ui/timeline";
import { Navbar } from "@/components/ui/navbar";
import { ThemeToggle } from "@/components/theme-toggle";
import { motion } from "framer-motion";

const timelineData = [
  {
    title: "2025",
    content: (
      <ul className="text-lg" style={{
        fontFamily: 'var(--font-montserrat)',
      }}>
        <li>Portfolio Projects and Personal Development.</li>
        <li>I started to focus more on front-end, I started to take a special interest in user experience (UX) and user interface (UI) design, and I started to focus more on design thinking.</li>
        <li>I reinforced what I learned by developing my own portfolio site and various projects. I started to deepen in UI/UX and QA. I started to see design not only as "visual" but also as "meaningful experience".</li>
      </ul>
    ),
  },
  {
    title: "2024",
    content: (
      <ul className="text-lg" style={{
        fontFamily: 'var(--font-montserrat)',
      }}>
        <li>Focus on Front-End Development and UX/UI Design.</li>
        <li>In my software journey, I realized that especially the front-end side is closer to me. I realized that the user interface development process is not just about writing code; it is also the art of balancing design and aesthetics.</li>
        <li>My interest in music, architecture and visual arts has given me a natural sensitivity to typography choice, color palette harmony and user experience. In this way, I care about creating interfaces that not only work, but also feel and guide. For me, design is an invisible journey that leads the user consciously and intuitively to a goal.</li>
      </ul>
    ),
  },
  {
    title: "2023",
    content: (
      <ul className="text-lg" style={{
        fontFamily: 'var(--font-montserrat)',
      }}>
        <li>Workintech Full Stack Training.</li>
        <li>I participated in Workintech&apos;s Full Stack Developer program. I received intensive training on front-end and back-end development. I developed various projects throughout the training.</li>
      </ul>
    ),
  },
  {
    title: "2022",
    content: (
      <ul className="text-lg" style={{
        fontFamily: 'var(--font-montserrat)',
      }}>
        <li>Entered the software world.</li>
        <li>I was introduced to the software world thanks to the map engineering courses. I took my first step with JavaScript, then React completely sucked me in and I started my journey into this world with Front End Career Path at Codecademy.</li>
      </ul>
    ),
  },
  {
    title: "2018",
    content: (
      <ul className="text-lg" style={{
        fontFamily: 'var(--font-montserrat)',
      }}>
        <li>University Enterence.</li>
        <li>I started my undergraduate education at Izmir Katip Çelebi University, Department of Geomatics Engineering. In this process, I gained engineering discipline and problem-solving oriented thinking skills.</li>
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
      <ThemeToggle />
      <motion.div
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 70, damping: 20 }}
        className="w-full flex flex-col items-center"
      >
        <section className="w-full max-w-4xl text-center mt-40 mb-10 animate-slide-in-right">
        <h1 className="font-bold tracking-tighter inline-block mega-text" 
            style={{
              fontFamily: 'var(--font-montserrat)',
              color: 'var(--accent)',
              fontSize: '18rem'
            }}>
          ABOUT
        </h1>
          <p
            className="text-lg mt-20 md:text-2xl max-w-2xl mx-auto mb-6"
            style={{
              color: 'var(--foreground)',
              opacity: 0.85,
              fontFamily: 'var(--font-montserrat)',
            }}
          >
            Hello! I&apos;m Selim. I&apos;m a Front-End Developer. Here&apos;s a brief summary of my software journey:
          </p>
        </section>
        <section className="w-full max-w-5xl">
          <Timeline data={timelineData} />
        </section>
      </motion.div>
    </main>
  );
} 