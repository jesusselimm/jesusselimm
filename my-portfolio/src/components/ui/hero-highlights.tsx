"use client";
import { cn } from "@/lib/utils";
import { useMotionValue, motion, useMotionTemplate } from "motion/react";
import React from "react";

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return;
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    <div
      className={cn(
        "group relative flex h-[40rem] w-full items-center justify-center",
        containerClassName,
      )}
      style={{
        background: 'var(--background)',
      }}
      onMouseMove={handleMouseMove}
    >
      {/* Dot pattern background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, var(--accent) 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        }}
      />
      
      {/* Interactive hover effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle, var(--accent-light) 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      />

      <div className={cn("relative z-20", className)}>{children}</div>
    </div>
  );
};

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration: 2,
        ease: "linear",
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
        background: 'linear-gradient(90deg, var(--accent-light), var(--accent))',
        color: 'var(--foreground)',
      }}
      className={cn(
        `relative inline-block rounded-lg px-2 pb-1 font-semibold`,
        className,
      )}
    >
      {children}
    </motion.span>
  );
};
