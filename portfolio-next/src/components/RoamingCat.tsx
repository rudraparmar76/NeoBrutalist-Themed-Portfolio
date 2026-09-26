"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type CatAction = "walk" | "idle" | "play" | "sleep" | "petted";

export default function RoamingCat() {
  const [posX, setPosX] = useState(25); // percentage 5% - 85%
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [action, setAction] = useState<CatAction>("walk");
  const [walkFrame, setWalkFrame] = useState(0);
  const [bubbleText, setBubbleText] = useState<string | null>("🐾");
  const [isHovered, setIsHovered] = useState(false);
  const targetXRef = useRef(70);

  // Autonomous behavior loop
  useEffect(() => {
    let timer: NodeJS.Timeout;

    const chooseNextAction = () => {
      if (isHovered) {
        timer = setTimeout(chooseNextAction, 2000);
        return;
      }

      const roll = Math.random();
      if (roll < 0.45) {
        // Walk to new position
        const newTarget = Math.floor(Math.random() * 75) + 10; // 10% to 85%
        targetXRef.current = newTarget;
        setDirection(newTarget > posX ? "right" : "left");
        setAction("walk");
        setBubbleText(null);
      } else if (roll < 0.7) {
        // Idle & look around
        setAction("idle");
        const greetings = ["mrrp?", "👀", "🐾", null];
        setBubbleText(greetings[Math.floor(Math.random() * greetings.length)]);
      } else if (roll < 0.88) {
        // Play / pounce
        setAction("play");
        setBubbleText("pounce! ✨");
      } else {
        // Catnap
        setAction("sleep");
        setBubbleText("zZZ");
      }

      // Next decision interval between 3.5s and 6.5s
      const delay = Math.floor(Math.random() * 3000) + 3500;
      timer = setTimeout(chooseNextAction, delay);
    };

    timer = setTimeout(chooseNextAction, 2500);
    return () => clearTimeout(timer);
  }, [posX, isHovered]);

  // Walking interval - smooth stepping towards target
  useEffect(() => {
    if (action !== "walk" || isHovered) return;

    const stepInterval = setInterval(() => {
      setPosX((curr) => {
        const target = targetXRef.current;
        const diff = target - curr;

        if (Math.abs(diff) < 2) {
          setAction("idle");
          return curr;
        }

        const step = diff > 0 ? 1.2 : -1.2;
        setWalkFrame((prev) => (prev + 1) % 4);
        return Math.max(8, Math.min(88, curr + step));
      });
    }, 120);

    return () => clearInterval(stepInterval);
  }, [action, isHovered]);

  // Click / Pet interaction
  const handlePet = (e: React.MouseEvent) => {
    e.stopPropagation();
    setAction("petted");
    const happyReplies = ["purr~ ❤️", "meow! ✨", "nyan~ 🐱", "pat pat ❤️"];
    setBubbleText(happyReplies[Math.floor(Math.random() * happyReplies.length)]);

    setTimeout(() => {
      setAction("idle");
      setBubbleText(null);
    }, 2800);
  };

  return (
    <div
      style={{ left: `${posX}%` }}
      onClick={handlePet}
      onMouseEnter={() => {
        setIsHovered(true);
        if (action !== "petted") {
          setAction("idle");
          setBubbleText("meow? 👀");
        }
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        if (action !== "petted") {
          setBubbleText(null);
        }
      }}
      className="absolute bottom-2 z-20 cursor-pointer select-none group transition-all duration-150"
      title="Click to play with me!"
    >
      {/* Speech / Action Bubble */}
      <AnimatePresence>
        {bubbleText && (
          <motion.div
            initial={{ opacity: 0, y: 4, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.8 }}
            className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-black/80 backdrop-blur-sm border border-[var(--line-strong)] text-[10px] font-code text-white whitespace-nowrap shadow-lg pointer-events-none"
          >
            {bubbleText}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cat Avatar Container with Direction & Jump Animation */}
      <motion.div
        animate={
          action === "play"
            ? { y: [0, -12, 0, -6, 0] }
            : action === "petted"
            ? { y: [0, -14, 0], rotate: [0, -8, 8, 0] }
            : action === "walk"
            ? { y: [0, -2, 0] }
            : { y: 0 }
        }
        transition={{
          duration: action === "play" ? 0.7 : action === "petted" ? 0.5 : 0.24,
          repeat: action === "walk" ? Infinity : 0,
        }}
        style={{
          transform: `scaleX(${direction === "left" ? -1 : 1})`,
        }}
        className="w-9 h-8 relative flex items-center justify-center filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
      >
        {/* Pixel Cat Graphic */}
        <svg
          viewBox="0 0 20 20"
          className="w-8 h-8 fill-white dark:fill-[var(--fg)] transition-colors"
          style={{ imageRendering: "pixelated" }}
        >
          {action === "sleep" ? (
            /* Sleeping curled up pose */
            <g>
              {/* Ears */}
              <rect x="4" y="8" width="2" height="2" />
              <rect x="8" y="8" width="2" height="2" />
              {/* Head */}
              <rect x="4" y="10" width="6" height="4" />
              {/* Sleeping eye lines */}
              <rect x="5" y="11" width="1" height="1" fill="#000" />
              <rect x="8" y="11" width="1" height="1" fill="#000" />
              {/* Curled Body */}
              <rect x="8" y="10" width="8" height="5" />
              <rect x="7" y="11" width="10" height="4" />
              {/* Tail wrapped around */}
              <rect x="15" y="9" width="2" height="4" />
              <rect x="14" y="8" width="2" height="1" />
            </g>
          ) : (
            /* Active / Walking / Playing pose */
            <g>
              {/* Ears */}
              <rect x="5" y="3" width="2" height="3" />
              <rect x="10" y="3" width="2" height="3" />
              {/* Inner ears */}
              <rect x="6" y="4" width="1" height="1" fill="#f472b6" />
              <rect x="10" y="4" width="1" height="1" fill="#f472b6" />
              {/* Head */}
              <rect x="4" y="5" width="9" height="5" />
              <rect x="3" y="6" width="11" height="4" />
              {/* Eyes */}
              <rect x="5" y="7" width="2" height="2" fill="#000" />
              <rect x="10" y="7" width="2" height="2" fill="#000" />
              {/* Eye shine */}
              <rect x="5" y="7" width="1" height="1" fill="#fff" />
              <rect x="10" y="7" width="1" height="1" fill="#fff" />
              {/* Nose */}
              <rect x="8" y="9" width="1" height="1" fill="#f472b6" />
              {/* Body */}
              <rect x="5" y="10" width="8" height="5" />
              <rect x="4" y="11" width="9" height="4" />
              {/* Animated Paws / Legs */}
              {action === "walk" ? (
                walkFrame % 2 === 0 ? (
                  <>
                    {/* Frame A */}
                    <rect x="5" y="15" width="2" height="3" />
                    <rect x="10" y="15" width="2" height="3" />
                  </>
                ) : (
                  <>
                    {/* Frame B */}
                    <rect x="4" y="15" width="2" height="3" />
                    <rect x="11" y="15" width="2" height="3" />
                  </>
                )
              ) : (
                /* Standing legs */
                <>
                  <rect x="5" y="15" width="2" height="3" />
                  <rect x="10" y="15" width="2" height="3" />
                </>
              )}
              {/* Tail */}
              <rect x="13" y="9" width="2" height="4" />
              <rect x="14" y="7" width="2" height="3" />
              <rect x="15" y="6" width="2" height="2" />
            </g>
          )}
        </svg>
      </motion.div>
    </div>
  );
}
