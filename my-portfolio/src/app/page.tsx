"use client"

import './globals.css';
import { ThemeToggle } from '@/components/theme-toggle';
import { Navbar } from '@/components/ui/navbar';
import { motion } from "motion/react";
import Link from 'next/link';
import BlurText from '@/components/ui/blur-text';
import Magnet from '@/components/ui/magnet';
import AuroraBackground from '@/components/ui/aurora-background';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { Code, Server, FileCode, Wind, LayoutGrid, GitBranch, Figma, Activity, Upload, Cloud, Atom, Framer } from 'lucide-react';

export default function Home() {

  return (
    <main className="min-h-screen overflow-x-hidden native-scroll" 
          style={{ backgroundColor: 'var(--background)' }}>
    
    <Navbar active="Home" />
    <ThemeToggle />

    <motion.div 
      className="fixed inset-0 z-0" 
      style={{ willChange: "transform", backfaceVisibility: "hidden", transform: "translateZ(0)" }}
      initial={{ opacity: 0, scale: 1.2, filter: "blur(40px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{ 
        duration: 1.5,
        type: "spring",
        stiffness: 60,
        damping: 25
      }}
    >
      <AuroraBackground />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-center">
          <motion.p 
            className="text-lg md:text-xl font-bold mb-6" 
            style={{
              fontFamily: 'var(--font-montserrat)',
              color: 'var(--accent-dark)',
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.8,
              type: "spring",
              stiffness: 60,
              damping: 20
            }}
          >WELCOME TO MY PORTFOLIO</motion.p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6" 
              style={{
                fontFamily: 'var(--font-libre-baskerville)',
                color: 'var(--foreground)',
              }}
            >
            FRONT-END DEVELOPER
          </h1>
          <h2 className="text-2xl md:text-4xl font-light" 
              style={{
                fontFamily: 'var(--font-libre-baskerville)',
                color: 'var(--foreground)',
              }}>
            AND DESIGNER
          </h2>
        </div>
        <motion.div
          className="flex justify-center items-center mt-8 text-[1rem] tracking-widest"
          style={{
            fontFamily: 'var(--font-montserrat)',
            color: 'var(--foreground)',
            letterSpacing: '0.2em',
            opacity: 0.6,
            animation: 'scrollDownAnim 1.5s infinite alternate'
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 0.6, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.8,
            type: "spring",
            stiffness: 40,
            damping: 15
          }}
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

    <div className="h-[100vh] relative z-10"></div>

    <motion.div 
      className="relative z-50 bg-[var(--background)] -mt-16 rounded-t-2xl shadow-[0_-10px_20px_rgba(0,0,0,0.2)] border-t border-[var(--accent)]/10"
      initial={{ opacity: 0, y: 100, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.3,
        delay: 0.1,
        type: "spring",
        stiffness: 60,
        damping: 20
      }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="pt-24 pb-16 px-4">
    <motion.header 
      className="py-16 overflow-hidden"
      initial={{ opacity: 0, scale: 0.75, y: 60 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        duration: 0.9, 
        delay: 0.2,
        type: "spring",
        stiffness: 50,
        damping: 18
      }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="whitespace-nowrap animate-marquee">
        <h1 className="font-bold tracking-tighter inline-block mega-text" 
            style={{
              fontFamily: 'var(--font-montserrat)',
              color: 'var(--accent-dark)',
              fontSize: '14rem'
            }}>
          JESUSSELIMM&nbsp;&nbsp;&nbsp;&nbsp;JESUSSELIMM&nbsp;&nbsp;&nbsp;&nbsp;JESUSSELIMM&nbsp;&nbsp;&nbsp;&nbsp;JESUSSELIMM&nbsp;&nbsp;&nbsp;&nbsp;
        </h1>
      </div>
    </motion.header>

    <div className="text-center">
      <div className="mb-20 mt-20">
        <BlurText 
          text="Hey, I&apos;m a Front-End Developer & Designer"
          className="scroll-float-title"
          staggerDelay={0.08}
          as="h2"
          style={{
            fontFamily: 'var(--font-libre-baskerville)',
            color: 'var(--accent)',
            fontSize: '3rem'
          }}
        />
      </div>
      
      <div className="max-w-3xl mx-auto px-4">
          <motion.p 
            className="scroll-float-text opacity-90" 
            style={{
              fontFamily: 'var(--font-montserrat)',
              color: 'var(--accent-light)',
              fontSize: '1.2rem'
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 0.9, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.3,
              type: "spring",
              stiffness: 60,
              damping: 20
            }}
            viewport={{ once: true, amount: 0.2 }}
          >I craft <strong>visually appealing</strong>, performant websites with a focus on <strong>user experience</strong>. Explore my work and let&apos;s build something meaningful.</motion.p>
      </div>
    </div>
      </div>

      <div className="py-16 overflow-hidden text-center">
        <div className="mb-20 mt-20">
          <BlurText 
            text="About Me"
            className="scroll-float-title"
            staggerDelay={0.08}
            as="h2"
            style={{
              fontFamily: 'var(--font-libre-baskerville)',
              color: 'var(--accent)',
              fontSize: '3rem'
            }}
          />
        </div>
        
        <div className="max-w-3xl mx-auto px-4">
          <motion.p 
            className="text-lg text-center" 
            style={{
              fontFamily: 'var(--font-montserrat)',
              color: 'var(--accent-light)',
              fontSize: '1.2rem'
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.2,
              type: "spring",
              stiffness: 60,
              damping: 20
            }}
            viewport={{ once: true, amount: 0.2 }}
          >I&apos;m Selim, a front-end developer who believes in the <strong>harmony of structure and emotion</strong>. With a background in engineering and a passion for design, I build thoughtful digital experiences — where clean code meets visual clarity.</motion.p>
        </div>
        
        <Link href="/about">
          <Magnet strength={0.4} scale={1.15}>
            <motion.button 
              className="px-8 py-3 rounded-full font-medium transition-all duration-300 mt-8"
              style={{
                backgroundColor: 'var(--accent-light)',
                color: 'var(--background)',
                fontFamily: 'var(--font-montserrat)'
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.4,
                type: "spring",
                stiffness: 80,
                damping: 20
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              viewport={{ once: true }}
            >
              More about me
            </motion.button>
          </Magnet>
        </Link>
      </div>

      <div className="py-16 overflow-hidden text-center">
        <div className="mb-20 mt-20">
          <BlurText 
            text="Skills"
            className="scroll-float-title"
            staggerDelay={0.08}
            as="h2"
            style={{
              fontFamily: 'var(--font-libre-baskerville)',
              color: 'var(--accent)',
              fontSize: '3rem'
            }}
          />
        </div>
        
        <div className="max-w-3xl mx-auto px-4 mb-12">
          <motion.p 
            className="text-lg text-center" 
            style={{
              fontFamily: 'var(--font-montserrat)',
              color: 'var(--accent-light)',
              fontSize: '1.2rem'
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.2,
              type: "spring",
              stiffness: 60,
              damping: 20
            }}
            viewport={{ once: true, amount: 0.2 }}
          >I specialize in <strong>React, Next.js, TypeScript</strong>, and modern CSS frameworks. I&apos;m passionate about creating <strong>responsive designs</strong>, optimizing performance, and bringing creative visions to life through clean, maintainable code.</motion.p>
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {[
              {
                icon: Atom,
                title: "React",
                description: "Component-based SPA development with modern React patterns and hooks",
                featured: true
              },
              {
                icon: Server,
                title: "Next.js",
                description: "SSR & file-based routing for optimized web applications",
                featured: true
              },
              {
                icon: FileCode,
                title: "TypeScript",
                description: "Typed JavaScript for better development experience and code quality",
                featured: true
              },
              {
                icon: Wind,
                title: "Tailwind CSS",
                description: "Utility-first CSS framework for rapid and responsive design development",
                featured: true
              },
              {
                icon: LayoutGrid,
                title: "ShadCN UI",
                description: "Accessible UI components library for consistent design systems",
                featured: true
              },
              {
                icon: Figma,
                title: "Figma",
                description: "UI/UX prototyping and design collaboration for pixel-perfect implementations",
                featured: true
              },
              {
                icon: Code,
                title: "JavaScript",
                description: "Dynamic logic & DOM control for interactive user experiences",
                featured: false
              },
              {
                icon: GitBranch,
                title: "Git & GitHub",
                description: "Version control & collaboration for efficient team development",
                featured: false
              },
              {
                icon: Activity,
                title: "Zustand",
                description: "State management simplified with lightweight and scalable solutions",
                featured: false
              },
              {
                icon: Upload,
                title: "Vercel",
                description: "Deployment platform for seamless CI/CD and global performance",
                featured: false
              },
              {
                icon: Cloud,
                title: "REST APIs",
                description: "API integration and data management for dynamic applications",
                featured: false
              },
              {
                icon: Framer,
                title: "Framer Motion",
                description: "Animation library for smooth and responsive UI transitions",
                featured: false
              }
            ].map((skill, index) => (
              <motion.div
                key={skill.title}
                className={`relative group ${
                  skill.featured 
                    ? 'md:col-span-2 lg:col-span-2 xl:col-span-2 2xl:col-span-2' 
                    : 'md:col-span-1 lg:col-span-1 xl:col-span-1 2xl:col-span-1'
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.1 * index,
                  type: "spring",
                  stiffness: 60,
                  damping: 20
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="relative">
                  <GlowingEffect 
                    proximity={100}
                    spread={60}
                    disabled={false}
                    borderWidth={1}
                    className="opacity-100 rounded-xl"
                    variant="default"
                  />
                  <div 
                    className={`relative p-6 rounded-xl border-0 transition-all duration-300 backdrop-blur-sm flex flex-col ${
                      skill.featured ? 'h-72' : 'h-60'
                    }`}
                    style={{
                      backgroundColor: 'rgba(13, 27, 42, 0.9)',
                      boxShadow: '0 8px 32px rgba(13, 27, 42, 0.3)'
                    }}
                  >
                    <div className="flex flex-col items-start text-left h-full">
                      <div 
                        className={`rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 ${
                          skill.featured ? 'w-14 h-14' : 'w-10 h-10'
                        }`}
                        style={{ 
                          backgroundColor: 'rgba(52, 73, 94, 0.4)',
                          border: '1px solid rgba(225, 226, 225, 0.1)'
                        }}
                      >
                        <skill.icon 
                          size={skill.featured ? 28 : 20} 
                          style={{ color: '#E1E2E1' }}
                        />
                      </div>
                      <h3 
                        className={`font-semibold mb-3 ${
                          skill.featured ? 'text-xl' : 'text-lg'
                        }`}
                        style={{
                          fontFamily: 'var(--font-montserrat)',
                          color: '#E1E2E1',
                        }}
                      >
                        {skill.title}
                      </h3>
                      <p 
                        className={`leading-relaxed flex-1 ${
                          skill.featured ? 'text-base' : 'text-sm'
                        }`}
                        style={{
                          fontFamily: 'var(--font-montserrat)',
                          color: 'rgba(225, 226, 225, 0.7)',
                        }}
                      >
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </main>
  );
}
