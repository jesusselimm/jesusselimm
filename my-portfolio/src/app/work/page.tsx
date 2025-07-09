"use client"

import '../globals.css';
import { ThemeToggle } from '@/components/theme-toggle';
import { Navbar } from '@/components/ui/navbar';
import { motion } from "framer-motion";
import FlowingMenu from '@/components/ui/flowing-menu';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { Code, Server, FileCode, Wind, LayoutGrid, GitBranch, Figma, Activity, Upload, Cloud, Atom, Framer } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Work() {
  const [theme, setTheme] = useState<string>('dark');

  useEffect(() => {
    const checkTheme = () => {
      const dataTheme = document.documentElement.getAttribute('data-theme');
      if (dataTheme) {
        setTheme(dataTheme);
      } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDark ? 'dark' : 'light');
      }
    };

    checkTheme();
    
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', checkTheme);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener('change', checkTheme);
    };
  }, []);

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-start bg-[var(--background)] px-4 sm:px-6 lg:px-8"
      style={{ fontFamily: 'var(--font-montserrat)' }}
    >
    
    <Navbar active="WORK" />
    <ThemeToggle />

    <motion.div
     style={{ willChange: "transform", backfaceVisibility: "hidden", transform: "translateX(0)" }}
     initial={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
     animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
     transition={{ duration: 1, ease: "easeOut" }}
     exit={{ opacity: 0, transition: { duration: 0.3 } }}
     className="w-full"
    >
              <section className="w-full max-w-7xl mx-auto text-center mt-20 sm:mt-32 lg:mt-40 mb-8 sm:mb-12 lg:mb-16 px-2 sm:px-4">
        <h1 className="font-bold tracking-tighter inline-block overflow-hidden" 
            style={{
              fontFamily: 'var(--font-montserrat)',
              color: 'var(--accent)',
              fontSize: 'clamp(4rem, 12vw, 18rem)',
              lineHeight: '0.8'
            }}>
          WORK
        </h1>
        <p
          className="w-full mt-8 sm:mt-12 lg:mt-20 max-w-4xl mx-auto mb-6 sm:mb-8 lg:mb-12 px-2 sm:px-4"
          style={{
            color: 'var(--foreground)',
            opacity: 0.85,
            fontFamily: 'var(--font-montserrat)',
            fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
            lineHeight: '1.6'
          }}
        >
          Welcome to my digital showcase. Here you&apos;ll find a collection of projects that represent my journey as a front-end developer and designer.
        </p>
      </section>

      <div className="w-full mx-auto px-2 sm:px-4 pb-12 sm:pb-16">
        
        {/* Featured Projects */}
        <section className="pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20 text-center w-full">
          <h2 className="mb-12 sm:mb-16 font-bold text-center"
              style={{
                fontFamily: 'var(--font-libre-baskerville)',
                color: 'var(--accent)',
                fontSize: 'clamp(2rem, 4vw, 2.5rem)'
              }}>
            Featured Projects
          </h2>
          <div className="h-[40vh] sm:h-[45vh] lg:h-[50vh] w-full mx-auto">
            <FlowingMenu 
              items={[
                {
                  link: "https://github.com/jesusselimm/habit-hub",
                  text: "HABITHUB",
                },
                {
                  link: "https://github.com/jesusselimm/jesusselimm",
                  text: "PORTFOLIO WEBSITE"
                },
                {
                  link: "https://github.com/jesusselimm/rickandmorty",
                  text: "RICK AND MORTY",
                },  
                {
                  link: "https://github.com/jesusselimm/ebebekclone",
                  text: "EBEBEK CLONE",
                }
              ]}
            />
          </div>
        </section>

        {/* Project Information */}
        <section className="pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20 w-full">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-start max-w-6xl mx-auto px-2 sm:px-4">
            <div>
              <h3 className="mb-4 sm:mb-6 font-bold"
                  style={{
                    fontFamily: 'var(--font-libre-baskerville)',
                    color: 'var(--accent)',
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)'
                  }}>
                Design Philosophy
              </h3>
              <p className="leading-relaxed"
                 style={{
                   fontFamily: 'var(--font-montserrat)',
                   color: 'var(--foreground)',
                   opacity: '0.8',
                   fontSize: 'clamp(1rem, 2vw, 1.125rem)'
                 }}>
                Each project represents a unique challenge and solution, crafted with attention to detail and user experience. I believe in creating meaningful digital experiences that combine functionality with beautiful design.
              </p>
            </div>
            
            <div>
              <h3 className="mb-4 sm:mb-6 font-bold"
                  style={{
                    fontFamily: 'var(--font-libre-baskerville)',
                    color: 'var(--accent)',
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)'
                  }}>
                Technical Approach
              </h3>
              <p className="leading-relaxed"
                 style={{
                   fontFamily: 'var(--font-montserrat)',
                   color: 'var(--foreground)',
                   opacity: '0.8',
                   fontSize: 'clamp(1rem, 2vw, 1.125rem)'
                 }}>
                From personal portfolio websites to complex web applications, I focus on modern technologies, performance optimization, and scalable architecture. Every line of code is written with purpose and clarity.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16 sm:py-20 lg:py-24 overflow-hidden text-center">
          <div className="mb-16 sm:mb-20">
            <h2 className="font-bold text-center"
                style={{
                  fontFamily: 'var(--font-libre-baskerville)',
                  color: 'var(--accent)',
                  fontSize: 'clamp(2.5rem, 6vw, 3rem)'
                }}>
              Technologies & Skills
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto px-4 mb-12">
            <motion.p 
              className="text-center" 
              style={{
                fontFamily: 'var(--font-montserrat)',
                color: 'var(--accent-light)',
                fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                lineHeight: '1.6'
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
            >The tools and technologies I use to bring ideas to life. From modern frameworks to design systems, each skill contributes to creating exceptional digital experiences.</motion.p>
          </div>

          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-6">
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
                      proximity={300}
                      spread={60}
                      disabled={false}
                      borderWidth={1}
                      className="opacity-100 rounded-xl"
                      variant={theme === 'dark' ? 'default' : 'white'}
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
        </section>
      </div>
    </motion.div>
  </main>
  );
}
