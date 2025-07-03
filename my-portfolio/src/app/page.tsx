"use client"

import './globals.css';
import { Libre_Baskerville, Montserrat, VT323 } from 'next/font/google';
import { ThemeToggle } from '@/components/theme-toggle';
import { HeroHighlight } from '@/components/ui/hero-highlights';
import { Navbar } from '@/components/ui/navbar';

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
  return (
    <main className={`min-h-screen ${libreBaskerville.variable} ${montserrat.variable} ${vt323.variable}`} 
          style={{
            background: 'var(--background)',
            color: 'var(--foreground)'
          }}>
    
    {/* Navbar */}
    <Navbar />
    
    {/* Theme Toggle Button */}
    <ThemeToggle />

    {/* Large Header Name - Infinite Moving */}
    <HeroHighlight>
    <header className="py-16 overflow-hidden">
      <div className="whitespace-nowrap animate-marquee">
        <h1 className="font-bold tracking-tighter inline-block mega-text" 
            style={{
              fontFamily: 'var(--font-montserrat)',
              color: 'var(--accent)'
            }}>
          JESUSSELIMM&nbsp;&nbsp;&nbsp;&nbsp;JESUSSELIMM&nbsp;&nbsp;&nbsp;&nbsp;JESUSSELIMM&nbsp;&nbsp;&nbsp;&nbsp;JESUSSELIMM&nbsp;&nbsp;&nbsp;&nbsp;
        </h1>
      </div>
    </header>

    {/* Hero Highlights Section */}
    <section className="text-center">
      <h1 className="text-7xl mb-4 font-bold" 
          style={{
            fontFamily: 'var(--font-libre-baskerville)',
            color: 'var(--accent-light)'
          }}>
        Hey, I&apos;m a Front-End Developer
      </h1>
      <p className="max-w-2xl mx-auto text-xl" 
         style={{
           fontFamily: 'var(--font-montserrat)',
           color: 'var(--foreground)',
          //  opacity: '0.8'
         }}>
        I craft visually appealing, performant websites with a focus on user experience. Explore my work and let&apos;s build something meaningful.
      </p>
    </section>
    </HeroHighlight>
    <div
      className={`${vt323.variable} flex justify-center items-center mt-8 text-[1rem] tracking-widest`}
      style={{
        fontFamily: 'var(--font-montserrat)',
        color: 'var(--accent-light)',
        letterSpacing: '0.2em',
        opacity: 0.6,
        animation: 'scrollDownAnim 1.5s infinite alternate'
      }}
    >
      ( SCROLL DOWN )
      <style jsx>{`
        @keyframes scrollDownAnim {
          0% { transform: translateY(0); opacity: 0.7; }
          100% { transform: translateY(8px); opacity: 1; }
        }
      `}</style>
    </div>
  </main>
  );
}
