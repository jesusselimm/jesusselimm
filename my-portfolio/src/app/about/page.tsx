"use client";
import { Timeline } from "@/components/ui/timeline";
import { Navbar } from "@/components/ui/navbar";
import { ThemeToggle } from "@/components/theme-toggle";
import { motion } from "framer-motion";
import { Footer } from "@/components/ui/footer";
import { ImagesSlider } from "@/components/ui/images-slider";
import Magnet from "@/components/ui/magnet";

const timelineData = [
  {
    title: "Features",
    content: (
      <ul className="text-base md:text-lg leading-relaxed"
      style={{
        fontFamily: 'var(--font-montserrat)',
        color: 'var(--accent-light)',
        fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
        lineHeight: '1.6'
      }}>
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
      <ul className="text-base md:text-lg leading-relaxed"
      style={{
        fontFamily: 'var(--font-montserrat)',
        color: 'var(--accent-light)',
        fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
        lineHeight: '1.6'
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
      <ul className="text-base md:text-lg leading-relaxed"
      style={{
        fontFamily: 'var(--font-montserrat)',
        color: 'var(--accent-light)',
        fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
        lineHeight: '1.6'
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
      <ul className="text-base md:text-lg leading-relaxed"
      style={{
        fontFamily: 'var(--font-montserrat)',
        color: 'var(--accent-light)',
        fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
        lineHeight: '1.6'
      }}>
        <li>Workintech Full Stack Training.</li>
        <li>I participated in Workintech's Full Stack Developer program. I received intensive training on front-end and back-end development. I developed various projects throughout the training.</li>
      </ul>
    ),
  },
  {
    title: "2022",
    content: (
      <ul className="text-base md:text-lg leading-relaxed"
      style={{
        fontFamily: 'var(--font-montserrat)',
        color: 'var(--accent-light)',
        fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
        lineHeight: '1.6'
      }}>
        <li>Entered the software world.</li>
        <li>I was introduced to the software world thanks to the map engineering courses. I took my first step with JavaScript, then React completely sucked me in and I started my journey into this world with Front End Career Path at Codecademy.</li>
      </ul>
    ),
  },
  {
    title: "2018",
    content: (
      <ul className="text-base md:text-lg leading-relaxed"
      style={{
        fontFamily: 'var(--font-montserrat)',
        color: 'var(--accent-light)',
        fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
        lineHeight: '1.6'
      }}>
        <li>University Entry.</li>
        <li>I started my undergraduate education at Izmir Katip Çelebi University, Department of Geomatics Engineering. In this process, I gained engineering discipline and problem-solving oriented thinking skills.</li>
      </ul>
    ),
  },
];

const sliderImages = [
  "/albayCove.jpeg",
  "/birdsAndSunset.jpeg",
  "/mirror.jpeg",
  "/skyAndUmbrella.jpeg",
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
          <p className="w-full text-base"
          style={{
            fontFamily: 'var(--font-montserrat)',
            color: 'var(--accent-light)',
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            lineHeight: '1.6'
          }}>
            Hello! I&apos;m Selim. I&apos;m a Front-End Developer. Here&apos;s a brief summary of my software journey:
          </p>
        </section>
        <div className="w-full max-w-5xl px-4 mx-auto">
          <Timeline data={timelineData} />
          <div className="h-20 py-16"></div>
          <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] relative rounded-3xl overflow-hidden mb-10 sm:mb-20">
          <h2 className="font-bold mb-6 text-center"
                    style={{
                      fontFamily: 'var(--font-libre-baskerville)',
                      color: 'var(--accent)',
                      fontSize: 'clamp(2.5rem, 6vw, 3rem)'
                    }}>
                    Beyond the Code
                  </h2>
            <ImagesSlider images={sliderImages} autoplay={true}>
              <div className="absolute inset-0 flex flex-col items-center justify-center z-50">
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
                  <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-white opacity-90 mb-8">
                  Creativity starts for me behind the camera. Capturing fleeting moments, <span className="font-bold">chasing light</span>, and <span className="font-bold">framing stories</span>—photography is how I <span className="font-bold">stay inspired</span> and see the world differently, one shot at a time.
                  </p>
                  <Magnet>
                  <a
                    href="https://www.instagram.com/snapshotsofjesus?igsh=MWQ3OHFocm5hcm0wZg%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 rounded-full bg-[var(--accent)] text-white font-semibold shadow-lg hover:bg-[var(--accent-dark)] transition-colors duration-200 text-lg"
                  >
                    for more snapshots
                  </a>
                  </Magnet>
                </div>
              </div>
            </ImagesSlider>
          </div>
          <Footer />
        </div>
      </motion.div>
    </main>
  );
}
