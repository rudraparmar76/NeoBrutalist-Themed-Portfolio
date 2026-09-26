"use client";

import { useState, useEffect } from "react";

export default function PixelPet() {
  const [isAwake, setIsAwake] = useState(false);
  const [mood, setMood] = useState<"sleep" | "happy" | "curious">("sleep");
  const [snoreCount, setSnoreCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSnoreCount((prev) => (prev + 1) % 4);
    }, 900);
    return () => clearInterval(timer);
  }, []);

  const handleClick = () => {
    setIsAwake(true);
    setMood("happy");
    setTimeout(() => {
      setMood("sleep");
      setIsAwake(false);
    }, 4000);
  };

  return (
    <div
      onClick={handleClick}
      onMouseEnter={() => {
        setIsAwake(true);
        setMood("curious");
      }}
      onMouseLeave={() => {
        if (mood !== "happy") {
          setIsAwake(false);
          setMood("sleep");
        }
      }}
      className="inline-flex flex-col items-center cursor-pointer select-none group"
      title="Click to pet!"
    >
      {/* Snore / Meow bubble */}
      <div className="h-4 text-[10px] font-code text-[var(--soft)] transition-opacity duration-300">
        {!isAwake ? (
          <span className="opacity-70 animate-pulse">
            {"z".repeat(snoreCount + 1)}Z
          </span>
        ) : mood === "happy" ? (
          <span className="text-amber-400 font-bold">purr~ ❤️</span>
        ) : (
          <span className="text-[var(--fg)]">meow?</span>
        )}
      </div>

      {/* Pixel Cat SVG / Canvas Graphic */}
      <div className="w-8 h-8 relative flex items-center justify-center transition-transform group-hover:scale-110">
        <svg
          viewBox="0 0 16 16"
          className="w-7 h-7 fill-[var(--fg)] transition-colors"
          style={{ imageRendering: "pixelated" }}
        >
          {/* Ears */}
          <rect x="2" y="2" width="3" height="3" />
          <rect x="11" y="2" width="3" height="3" />
          {/* Head */}
          <rect x="4" y="4" width="8" height="6" />
          <rect x="3" y="5" width="10" height="5" />
          {/* Eyes */}
          {isAwake ? (
            <>
              <rect x="5" y="6" width="2" height="2" fill="var(--bg)" />
              <rect x="9" y="6" width="2" height="2" fill="var(--bg)" />
              <rect x="6" y="7" width="1" height="1" fill="var(--fg)" />
              <rect x="10" y="7" width="1" height="1" fill="var(--fg)" />
            </>
          ) : (
            <>
              {/* Sleeping lines */}
              <rect x="5" y="7" width="2" height="1" fill="var(--bg)" />
              <rect x="9" y="7" width="2" height="1" fill="var(--bg)" />
            </>
          )}
          {/* Nose */}
          <rect x="7" y="8" width="2" height="1" fill="var(--bg)" />
          {/* Body curled */}
          <rect x="2" y="10" width="12" height="5" />
          <rect x="1" y="11" width="14" height="3" />
          {/* Tail */}
          <rect x="14" y="9" width="1" height="3" />
          <rect x="13" y="8" width="2" height="1" />
        </svg>
      </div>
    </div>
  );
}
