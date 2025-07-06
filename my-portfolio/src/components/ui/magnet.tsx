"use client";

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface MagnetProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  scale?: number;
}

const Magnet: React.FC<MagnetProps> = ({ 
  children, 
  className = "",
  strength = 0.3,
  scale = 1.1 
}) => {
  const magnetRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const magnet = magnetRef.current;
    const text = textRef.current;

    if (!magnet || !text) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = magnet.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;

      gsap.to(magnet, {
        x: deltaX,
        y: deltaY,
        duration: 0.3,
        ease: "power2.out"
      });

      gsap.to(text, {
        x: deltaX * 0.5,
        y: deltaY * 0.5,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseEnter = () => {
      gsap.to(magnet, {
        scale: scale,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(magnet, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)"
      });

      gsap.to(text, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)"
      });
    };

    magnet.addEventListener('mousemove', handleMouseMove);
    magnet.addEventListener('mouseenter', handleMouseEnter);
    magnet.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      magnet.removeEventListener('mousemove', handleMouseMove);
      magnet.removeEventListener('mouseenter', handleMouseEnter);
      magnet.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength, scale]);

  return (
    <div ref={magnetRef} className={`inline-block cursor-pointer ${className}`}>
      <div ref={textRef}>
        {children}
      </div>
    </div>
  );
};

export default Magnet; 