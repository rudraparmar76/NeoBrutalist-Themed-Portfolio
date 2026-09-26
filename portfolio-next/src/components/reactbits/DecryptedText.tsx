"use client";

import React, { useState, useEffect, useRef } from "react";

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  characters?: string;
  className?: string;
  parentClassName?: string;
  encryptedClassName?: string;
  animateOn?: "hover" | "view";
  revealDirection?: "start" | "end" | "center";
  sequential?: boolean;
}

export default function DecryptedText({
  text,
  speed = 40,
  maxIterations = 10,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+~|}{[]:;?><",
  className = "",
  parentClassName = "",
  encryptedClassName = "opacity-60 font-mono",
  animateOn = "hover",
  revealDirection = "start",
  sequential = true,
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);
  const [revealedIndices, setRevealedIndices] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLSpanElement>(null);

  const scramble = () => {
    if (isScrambling) return;
    setIsScrambling(true);
    setRevealedIndices(new Set());

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText((current) =>
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (revealedIndices.has(i) || iteration > maxIterations) {
              return text[i];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      if (sequential) {
        setRevealedIndices((prev) => {
          const next = new Set(prev);
          if (revealDirection === "start") {
            next.add(iteration);
          } else if (revealDirection === "end") {
            next.add(text.length - 1 - iteration);
          } else {
            const mid = Math.floor(text.length / 2);
            next.add(mid + Math.floor(iteration / 2) * (iteration % 2 === 0 ? 1 : -1));
          }
          return next;
        });
      }

      iteration++;
      if (iteration > text.length + maxIterations) {
        clearInterval(interval);
        setDisplayText(text);
        setIsScrambling(false);
      }
    }, speed);
  };

  useEffect(() => {
    if (animateOn === "view") {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          scramble();
          observer.disconnect();
        }
      });
      if (containerRef.current) observer.observe(containerRef.current);
      return () => observer.disconnect();
    }
  }, [animateOn]);

  return (
    <span
      ref={containerRef}
      className={`inline-block ${parentClassName}`}
      onMouseEnter={animateOn === "hover" ? scramble : undefined}
    >
      <span className={isScrambling ? encryptedClassName : className}>{displayText}</span>
    </span>
  );
}
