"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState, useMemo } from "react";

interface BlurTextProps {
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  threshold?: number;
}

export default function BlurText({
  text = "",
  delay = 40,
  className = "",
  animateBy = "words",
  direction = "bottom",
  threshold = 0.1,
}: BlurTextProps) {
  const elements = animateBy === "words" ? text.split(" ") : text.split("");
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current as Element);
        }
      },
      { threshold }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  const defaultFrom = useMemo(
    () => ({
      filter: "blur(8px)",
      opacity: 0,
      y: direction === "top" ? -20 : 20,
    }),
    [direction]
  );

  return (
    <p ref={ref} className={`${className} inline-flex flex-wrap`}>
      {elements.map((segment, index) => (
        <motion.span
          key={index}
          initial={defaultFrom}
          animate={inView ? { filter: "blur(0px)", opacity: 1, y: 0 } : defaultFrom}
          transition={{
            duration: 0.5,
            delay: (index * delay) / 1000,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="inline-block"
        >
          {segment === " " ? "\u00A0" : segment}
          {animateBy === "words" && index < elements.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </p>
  );
}
