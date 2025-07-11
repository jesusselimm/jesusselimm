import React, { useState, useEffect } from "react";
import { gsap } from "gsap";

interface MenuItemProps {
  link: string;
  text: string;
  image?: string;
}

interface FlowingMenuProps {
  items?: MenuItemProps[];
}

const FlowingMenu: React.FC<FlowingMenuProps> = ({ items = [] }) => {
  return (
    <div className="w-full h-full overflow-hidden">
      <nav className="flex flex-col h-full m-0 p-0">
        {items.map((item, idx) => (
          <MenuItem key={idx} {...item} />
        ))}
      </nav>
    </div>
  );
};

const MenuItem: React.FC<MenuItemProps> = ({ link, text }) => {
  const itemRef = React.useRef<HTMLDivElement>(null);
  const marqueeRef = React.useRef<HTMLDivElement>(null);
  const marqueeInnerRef = React.useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [currentColor, setCurrentColor] = useState('');

  const animationDefaults = { duration: 0.8, ease: "expo" };

  // Ensure proper color initialization and theme changes
  useEffect(() => {
    const updateColor = () => {
      const computedStyle = getComputedStyle(document.documentElement);
      const foregroundColor = computedStyle.getPropertyValue('--foreground').trim();
      const accentLightColor = computedStyle.getPropertyValue('--accent-light').trim();
      
      if (foregroundColor && accentLightColor) {
        setCurrentColor(isHovered ? `rgb(${computedStyle.getPropertyValue('--accent').trim()})` : `rgb(${accentLightColor})`);
      }
    };

    // Initial color setup
    updateColor();

    // Listen for theme changes
    const observer = new MutationObserver(updateColor);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme', 'class']
    });

    // Listen for CSS custom property changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', updateColor);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener('change', updateColor);
    };
  }, [isHovered]);

  const findClosestEdge = (
    mouseX: number,
    mouseY: number,
    width: number,
    height: number
  ): "top" | "bottom" => {
    const topEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY, 2);
    const bottomEdgeDist =
      Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY - height, 2);
    return topEdgeDist < bottomEdgeDist ? "top" : "bottom";
  };

  const handleMouseEnter = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    setIsHovered(true);
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current)
      return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );

    const tl = gsap.timeline({ defaults: animationDefaults });
    tl.set(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" })
      .set(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" })
      .to([marqueeRef.current, marqueeInnerRef.current], { y: "0%" });
  };

  const handleMouseLeave = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    setIsHovered(false);
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current)
      return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );

    const tl = gsap.timeline({ defaults: animationDefaults }) as TimelineMax;
    tl.to(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" }).to(
      marqueeInnerRef.current,
      { y: edge === "top" ? "101%" : "-101%" },
    );
  };

  const repeatedMarqueeContent = React.useMemo(() => {
    return Array.from({ length: 4 }).map((_, idx) => (
      <React.Fragment key={idx}>
        <span className="uppercase font-normal text-[4vh] leading-[1.2] p-[1vh_1vw_0]" 
              style={{ color: 'var(--background)' }}>
          {text}
        </span>
      </React.Fragment>
    ));
  }, [text]);

  return (
    <div
      className="flex-1 relative overflow-hidden text-center"
      style={{ boxShadow: `0 -1px 0 0 var(--accent-light)` }}
      ref={itemRef}
    >
      <a
        className="flex items-center justify-center h-full relative cursor-pointer uppercase no-underline font-semibold text-[3vh] transition-colors duration-400"
        style={{ 
          color: isHovered ? 'var(--accent)' : 'var(--accent-light)',
          fontFamily: 'var(--font-montserrat)'
        }}
        href={link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {text}
      </a>
      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none translate-y-[101%]"
        style={{ backgroundColor: 'var(--accent-light)' }}
        ref={marqueeRef}
      >
        <div className="h-full w-[200%] flex" ref={marqueeInnerRef}>
          <div className="flex items-center relative h-full w-[200%] will-change-transform animate-marquee">
            {repeatedMarqueeContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowingMenu;