"use client";

import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "HOME", href: "/" },
  { name: "WORK", href: "/work" },
  { name: "ABOUT", href: "/about" },
];

export function Navbar({ active }: { active?: string }) {
  const [activeItem, setActiveItem] = useState(active || "Home");
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    if (active) setActiveItem(active);
  }, [active]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      if (pathname === "/work" || pathname === "/about") {
        setIsVisible(scrollY < 100);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <nav className={cn(
      "fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300",
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
    )}>
      <div 
        className="flex items-center gap-2 px-3 py-3 rounded-full"
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={() => setActiveItem(item.name)}
            className={cn(
              "relative px-8 py-3 text-base font-medium transition-all duration-300 hover:scale-105",
              activeItem === item.name
                ? ""
                : "hover:opacity-70"
            )}
            style={{
              color: activeItem === item.name ? 'var(--accent-dark)' : 'var(--accent-light)',
              fontFamily: 'var(--font-montserrat)',
            }}
          >
            <span className="relative z-10">{item.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
} 