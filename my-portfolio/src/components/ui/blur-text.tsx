"use client";

import React from "react";
import { motion } from "framer-motion";

const transition = { duration: 1, ease: [.25,.1,.25,1] as const };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

interface BlurTextProps {
  text: string;
  className?: string;
  staggerDelay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  style?: React.CSSProperties;
}

export default function BlurText({ 
  text, 
  className = "", 
  staggerDelay = 0.04,
  as: Component = 'p',
  style
}: BlurTextProps) {
  const words = text.split(" ");

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: staggerDelay }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <Component className={className} style={style}>
        {words.map((word, index) => (
          <React.Fragment key={index}>
            <motion.span 
              className="inline-block" 
              transition={transition} 
              variants={variants}
            >
              {word}
            </motion.span>
            {index < words.length - 1 && ' '}
          </React.Fragment>
        ))}
      </Component>
    </motion.div>
  );
} 