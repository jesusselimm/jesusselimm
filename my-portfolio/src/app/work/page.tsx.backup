"use client"

import '../globals.css';
import { ThemeToggle } from '@/components/theme-toggle';
import { Navbar } from '@/components/ui/navbar';
import { motion } from "framer-motion";
import FlowingMenu from '@/components/ui/flowing-menu';

export default function Work() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-start bg-[var(--background)] px-4 md:px-0"
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
      <section className="w-full text-center mt-40 mb-10 animate-slide-in-right mx-auto px-4">
        <h1 className="font-bold tracking-tighter inline-block mega-text" 
            style={{
              fontFamily: 'var(--font-montserrat)',
              color: 'var(--accent)',
              fontSize: '18rem'
            }}>
          WORK
        </h1>
        <p
          className="w-full text-lg mt-20 md:text-2xl max-w-2xl mx-auto mb-6"
          style={{
            color: 'var(--foreground)',
            opacity: 0.85,
            fontFamily: 'var(--font-montserrat)',
          }}
        >
          Welcome to my digital showcase. Here you&apos;ll find a collection of projects that represent my journey as a front-end developer and designer.
        </p>
      </section>

      <div className="w-full mx-auto px-4 pb-16">
        
        {/* Featured Projects */}
        <section className="pt-20 pb-20 text-center w-full">
          <h2 className="text-3xl mb-16 font-bold text-center"
              style={{
                fontFamily: 'var(--font-libre-baskerville)',
                color: 'var(--accent)',
                fontSize: '2.5rem'
              }}>
            Featured Projects
          </h2>
          <div className="h-[50vh] w-full mx-auto">
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
        <section className="pt-20 pb-40 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-start max-w-4xl mx-auto px-4">
            <div>
              <h3 className="text-2xl mb-6 font-bold"
                  style={{
                    fontFamily: 'var(--font-libre-baskerville)',
                    color: 'var(--accent)'
                  }}>
                Design Philosophy
              </h3>
              <p className="text-lg leading-relaxed"
                 style={{
                   fontFamily: 'var(--font-montserrat)',
                   color: 'var(--foreground)',
                   opacity: '0.8'
                 }}>
                Each project represents a unique challenge and solution, crafted with attention to detail and user experience. I believe in creating meaningful digital experiences that combine functionality with beautiful design.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl mb-6 font-bold"
                  style={{
                    fontFamily: 'var(--font-libre-baskerville)',
                    color: 'var(--accent)'
                  }}>
                Technical Approach
              </h3>
              <p className="text-lg leading-relaxed"
                 style={{
                   fontFamily: 'var(--font-montserrat)',
                   color: 'var(--foreground)',
                   opacity: '0.8'
                 }}>
                From personal portfolio websites to complex web applications, I focus on modern technologies, performance optimization, and scalable architecture. Every line of code is written with purpose and clarity.
              </p>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  </main>
  );
} 