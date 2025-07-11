"use client";
import { Timeline } from "@/components/ui/timeline";
import { Navbar } from "@/components/ui/navbar";
import { ThemeToggle } from "@/components/theme-toggle";
import { motion } from "framer-motion";
import { Footer } from "@/components/ui/footer";

const timelineData = [
  {
    title: "Features",
    content: (
      <ul className="text-base md:text-lg leading-relaxed">
        <li>
          I am currently working on <span className="text-[var(--accent)] font-bold underline">HabitHub</span>, an AI-powered personal productivity and habit tracking app. With this project, I aim to provide a simple yet functional experience where users can easily manage their daily tasks and habits.
          I am also developing my portfolio site and trying to gain real world experience through freelance projects and open source contributions.
        </li>
      </ul>
    ),
  },
  {
    title: "2025",
    content: (
      <ul className="text-base md:text-lg leading-relaxed">
        <li>Portfolio Projects and Personal Development.</li>
        <li>I started to focus more on front-end, I started to take a special interest in user experience (UX) and user interface (UI) design, and I started to focus more on design thinking.</li>
        <li>I reinforced what I learned by developing my own portfolio site and various projects. I started to deepen in UI/UX and QA. I started to see design not only as "visual" but also as "meaningful experience".</li>
      </ul>
    ),
  },
  {
    title: "2024",
    content: (
      <ul className="text-base md:text-lg leading-relaxed">
        <li>Focus on Front-End Development and UX/UI Design.</li>
        <li>In my software journey, I realized that especially the front-end side is closer to me. I realized that the user interface development process is not just about writing code; it is also the art of balancing design and aesthetics.</li>
        <li>My interest in music, architecture and visual arts has given me a natural sensitivity to typography choice, color palette harmony and user experience. In this way, I care about creating interfaces that not only work, but also feel and guide. For me, design is an invisible journey that leads the user consciously and intuitively to a goal.</li>
      </ul>
    ),
  },
  {
    title: "2023",
    content: (
      <ul className="text-base md:text-lg leading-relaxed">
        <li>Workintech Full Stack Training.</li>
        <li>I participated in Workintech's Full Stack Developer program. I received intensive training on front-end and back-end development. I developed various projects throughout the training.</li>
      </ul>
    ),
  },
  {
    title: "2022",
    content: (
      <ul className="text-base md:text-lg leading-relaxed">
        <li>Entered the software world.</li>
        <li>I was introduced to the software world thanks to the map engineering courses. I took my first step with JavaScript, then React completely sucked me in and I started my journey into this world with Front End Career Path at Codecademy.</li>
      </ul>
    ),
  },
  {
    title: "2018",
    content: (
      <ul className="text-base md:text-lg leading-relaxed">
        <li>University Entry.</li>
        <li>I started my undergraduate education at Izmir Katip Çelebi University, Department of Geomatics Engineering. In this process, I gained engineering discipline and problem-solving oriented thinking skills.</li>
      </ul>
    ),
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-[var(--background)] px-4 sm:px-6 lg:px-8">
      <Navbar active="About" />
      <ThemeToggle />
      <motion.div
        className="w-full"
        style={{ willChange: "transform" }}
        initial={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1, ease: "easeOut" }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
      >
        <section className="w-full text-center mt-20 sm:mt-28 lg:mt-32 mb-8 sm:mb-12 lg:mb-16 px-2 sm:px-4">
          <h1 className="font-bold tracking-tighter text-[5rem] sm:text-[8rem] md:text-[10rem] lg:text-[14rem] xl:text-[18rem] text-[var(--accent)]">
            ABOUT
          </h1>
          <p className="w-full text-base sm:text-lg md:text-xl mt-8 md:mt-12 max-w-3xl mx-auto text-[var(--foreground)] opacity-85">
            Hello! I'm Selim. I'm a Front-End Developer. Here's a brief summary of my software journey:
          </p>
        </section>
        <div className="w-full max-w-5xl px-4 mx-auto">
          <Timeline data={timelineData} />
          <div className="h-20"></div>
          <Footer />
        </div>
      </motion.div>
    </main>
  );
}
