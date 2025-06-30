"use client"

import './globals.css';
import { Oswald, Source_Code_Pro } from 'next/font/google';
import { ThemeToggle } from '@/components/theme-toggle';
import { HeroHighlight, Highlight } from '@/components/ui/hero-highlights';
import { Navbar } from '@/components/ui/navbar';

const oswald = Oswald({ weight: '400', subsets: ['latin'], variable: '--font-oswald' });
const sourceCodePro = Source_Code_Pro({ weight: '400', subsets: ['latin'], variable: '--font-source-code-pro' });

export default function Home() {
  return (
    <main className={`min-h-screen mx-auto ${oswald.variable} ${sourceCodePro.variable}`} 
          style={{
            background: 'var(--background)',
            color: 'var(--foreground)'
          }}>
    
    {/* Navbar */}
    <Navbar />
    
    {/* Theme Toggle Button */}
    <ThemeToggle />

    {/* Large Header Name - Infinite Moving */}
    <header className="py-16 overflow-hidden">
      <div className="whitespace-nowrap animate-marquee">
        <h1 className="font-bold tracking-tighter inline-block mega-text" 
            style={{
              fontFamily: 'var(--font-oswald)',
              color: 'var(--accent)'
            }}>
          JESUSSELIMM&nbsp;&nbsp;&nbsp;&nbsp;JESUSSELIMM&nbsp;&nbsp;&nbsp;&nbsp;JESUSSELIMM&nbsp;&nbsp;&nbsp;&nbsp;JESUSSELIMM&nbsp;&nbsp;&nbsp;&nbsp;
        </h1>
      </div>
    </header>

    {/* Hero Highlights Section */}
    <HeroHighlight>
    <section className="text-center">
      <h1 className="text-7xl mb-4 font-bold" 
          style={{
            fontFamily: 'var(--font-oswald)',
            color: 'var(--accent-light)'
          }}>
        Hey, I'm a Front-End Developer
      </h1>
      <p className="max-w-2xl mx-auto text-xl" 
         style={{
           fontFamily: 'var(--font-source-code-pro)',
           color: 'var(--foreground)',
          //  opacity: '0.8'
         }}>
        I craft visually appealing, performant websites with a focus on user experience. Explore my work and let's build something meaningful.
      </p>
    </section>
    </HeroHighlight>
  </main>
  );
}
