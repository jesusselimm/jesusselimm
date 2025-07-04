"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import React from "react";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
];

export function Navbar({ active }: { active?: string }) {
  const [activeItem, setActiveItem] = useState(active || "Home");

  useEffect(() => {
    if (active) setActiveItem(active);
  }, [active]);

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div 
        className="flex items-center gap-2 px-3 py-3 rounded-full"
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={() => setActiveItem(item.name)}
            className={cn(
              "relative px-8 py-3 rounded-full text-base font-medium transition-all duration-300 hover:scale-105",
              activeItem === item.name
                ? "text-white"
                : "hover:opacity-70"
            )}
            style={{
              color: activeItem === item.name ? 'var(--background)' : 'var(--foreground)',
              fontFamily: 'var(--font-montserrat)',
            }}
          >
            {activeItem === item.name && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'var(--accent-light)',
                }}
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
              />
            )}
            <span className="relative z-10">{item.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
} 