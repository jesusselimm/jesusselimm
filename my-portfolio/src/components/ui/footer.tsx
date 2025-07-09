"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-[var(--background)] border-t border-[var(--accent-light)]/10 py-6">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Left side - Development info */}
        <div className="text-sm opacity-60"
             style={{
               fontFamily: 'var(--font-montserrat)',
               color: 'var(--foreground)'
             }}>
          develop & design by jesusselimm
        </div>

        {/* Right side - Social links */}
        <div className="flex space-x-6">
          {[
            { name: "Instagram", href: "https://instagram.com/jesusselimm" },
            { name: "LinkedIn", href: "https://linkedin.com/in/selim-kurtulmus" },
            { name: "GitHub", href: "https://github.com/jesusselimm" }
          ].map((item) => (
            <Link 
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm opacity-60 hover:opacity-100 transition-opacity duration-300"
              style={{
                fontFamily: 'var(--font-montserrat)',
                color: 'var(--foreground)'
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
} 