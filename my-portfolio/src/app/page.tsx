"use client"

import './globals.css';
import { Libre_Baskerville, Montserrat, VT323 } from 'next/font/google';
import { ThemeToggle } from '@/components/theme-toggle';
import { Navbar } from '@/components/ui/navbar';
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import AuroraBackground from '@/components/ui/aurora-background';
import Link from 'next/link';
import ScrollFloat from '@/components/ui/scroll-float';

const libreBaskerville = Libre_Baskerville({ 
  weight: ['400', '700'], 
  subsets: ['latin'], 
  variable: '--font-libre-baskerville' 
});

const montserrat = Montserrat({ 
  weight: ['400', '500', '600', '700'], 
  subsets: ['latin'], 
  variable: '--font-montserrat' 
});

const vt323 = VT323({ weight: '400', subsets: ['latin'], variable: '--font-vt323' });

export default function Home() {
  const [showAurora, setShowAurora] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      if (scrolled > windowHeight * 0.4) {
        setShowAurora(false);
      } else {
        setShowAurora(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className={`min-h-screen overflow-x-hidden native-scroll ${libreBaskerville.variable} ${montserrat.variable} ${vt323.variable}`} 
          style={{ backgroundColor: 'var(--background)' }}>
    
    <Navbar active="Home" />
    <ThemeToggle />

    <AnimatePresence>
    {showAurora && (
    <motion.div 
      key="aurora"
      className="fixed inset-0 z-0" 
      style={{ willChange: "transform", backfaceVisibility: "hidden", transform: "translateZ(0)" }}
      initial={{ opacity: 0, scale: 1.1, filter: "blur(30px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 1, ease: "easeOut" }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
            <AuroraBackground />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <p className="text-xl md:text-2xl font-bold mb-6" 
              style={{
                fontFamily: 'var(--font-montserrat)',
                color: 'var(--foreground)',
              }}>WELCOME TO MY PORTFOLIO</p>
          <h1 className="text-6xl md:text-8xl font-bold mb-6" 
              style={{
                fontFamily: 'var(--font-libre-baskerville)',
                color: 'var(--foreground)',
              }}>
            WEB DEVELOPER
          </h1>
          <h2 className="text-4xl md:text-6xl font-light" 
              style={{
                fontFamily: 'var(--font-libre-baskerville)',
                color: 'var(--foreground)',
              }}>
            AND DESIGNER
          </h2>
        </motion.div>
        <motion.div
          className={`${vt323.variable} flex justify-center items-center mt-8 text-[1rem] tracking-widest`}
          style={{
            fontFamily: 'var(--font-montserrat)',
            color: 'var(--foreground)',
            letterSpacing: '0.2em',
            opacity: 0.6,
            animation: 'scrollDownAnim 1.5s infinite alternate'
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.6, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          ( SCROLL DOWN )
          <style jsx>{`
            @keyframes scrollDownAnim {
              0% { transform: translateY(0); opacity: 0.7; }
              100% { transform: translateY(8px); opacity: 1; }
            }
          `}</style>
        </motion.div>
      </div>
    </motion.div>
    )}
    </AnimatePresence>

    <div className="h-[100vh] relative z-10"></div>

    <motion.div 
      className="relative z-50 bg-[var(--background)] -mt-16 rounded-t-2xl shadow-[0_-10px_20px_rgba(0,0,0,0.2)] border-t border-[var(--accent)]/10"
      initial={{ opacity: 0, y: 80, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="pt-24 pb-16 px-4">
    <motion.header 
      className="py-16 overflow-hidden"
      initial={{ opacity: 0, scale: 0.9, y: 40 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="whitespace-nowrap animate-marquee">
        <h1 className="font-bold tracking-tighter inline-block mega-text" 
            style={{
              fontFamily: 'var(--font-montserrat)',
              color: 'var(--accent)',
              fontSize: '18rem'
            }}>
          JESUSSELIMM&nbsp;&nbsp;&nbsp;&nbsp;JESUSSELIMM&nbsp;&nbsp;&nbsp;&nbsp;JESUSSELIMM&nbsp;&nbsp;&nbsp;&nbsp;JESUSSELIMM&nbsp;&nbsp;&nbsp;&nbsp;
        </h1>
      </div>
    </motion.header>

    <div className="text-center">
      <ScrollFloat 
        containerClassName="mb-20 mt-20"
        textClassName="scroll-float-title"
        animationDuration={1.2}
        ease="power2.out"
      >
        Hey, I'm a Front-End Developer
      </ScrollFloat>
      
      <div className="max-w-3xl mx-auto px-4">
        <ScrollFloat 
          textClassName="scroll-float-text opacity-90"
          animationDuration={1}
          ease="power2.out"
          scrollStart="center bottom+=30%"
        >
          I craft visually appealing, performant websites with a focus on user experience. Explore my work and let's build something meaningful.
        </ScrollFloat>
      </div>
    </div>
      </div>
      <motion.div 
        className="pt-40 pb-44 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h1 className="text-5xl mb-4 font-bold text-center" 
            style={{
              fontFamily: 'var(--font-libre-baskerville)',
              color: 'var(--accent-light)'
            }}>
          About Me
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-center mb-8" 
           style={{
             fontFamily: 'var(--font-libre-baskerville)',
             color: 'var(--foreground)',
             opacity: '0.8'
           }}>
          I&apos;m Selim, a front-end developer who believes in the harmony of structure and emotion.
          With a background in engineering and a passion for design, I build thoughtful digital experiences — where clean code meets visual clarity.
        </p>
        <Link href="/about">
          <button 
            className="px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: 'var(--accent)',
              color: 'var(--foreground)',
              fontFamily: 'var(--font-montserrat)'
            }}
          >
            More about me
          </button>
        </Link>
      </motion.div>
    </motion.div>
  </main>
  );
}
