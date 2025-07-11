"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 90%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Responsive height observer
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver(() => {
      const newHeight = containerRef.current?.getBoundingClientRect().height || 0;
      setHeight(newHeight);
    });

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="w-full bg-white dark:bg-[var(--background)] font-libre-baskerville px-4 sm:px-6 md:px-10"
      ref={containerRef}
    >
      <div className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-start pt-10 md:pt-40 gap-4 md:gap-10"
          >
            <div className="relative z-40 flex flex-col md:flex-row items-start md:items-center">
              <div className="h-10 w-10 absolute left-0 top-0 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700" />
              </div>
              <h3 className="hidden md:block text-4xl font-bold text-neutral-500 dark:text-neutral-500 pl-16">
                {item.title}
              </h3>
            </div>

            <div className="relative md:pl-4 pl-12 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        <div
          ref={lineRef}
          className="absolute left-5 top-0 w-[2px] overflow-hidden bg-gradient-to-b from-transparent via-neutral-300 dark:via-neutral-700 to-transparent
          [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
          style={{ height: `${height}px` }}
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
