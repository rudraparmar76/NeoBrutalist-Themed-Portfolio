"use client";

import React, { useState, useEffect, useRef } from "react";
import { FiPlay, FiPause, FiSkipBack, FiSkipForward } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function About() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const totalDuration = 272; // 04:32 in seconds
  const audioCtxRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Play synthesized peaceful melody when toggled
  const togglePlay = () => {
    if (isPlaying) {
      // Pause
      setIsPlaying(false);
      if (intervalRef.current) clearInterval(intervalRef.current);
    } else {
      // Start / Play
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (!audioCtxRef.current) {
          audioCtxRef.current = new AudioCtx();
        }
        if (audioCtxRef.current.state === "suspended") {
          audioCtxRef.current.resume();
        }

        const ctx = audioCtxRef.current;
        const notes = [440, 554.37, 659.25, 830.61, 880, 1108.73];
        let noteIndex = 0;

        const playMelody = () => {
          if (!audioCtxRef.current) return;
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = "sine";
          osc.frequency.setValueAtTime(notes[noteIndex % notes.length], ctx.currentTime);
          noteIndex++;

          gain.gain.setValueAtTime(0.04, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);

          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start();
          osc.stop(ctx.currentTime + 1.3);
        };

        playMelody();
        intervalRef.current = setInterval(() => {
          playMelody();
          setCurrentTime((prev) => (prev >= totalDuration ? 0 : prev + 1));
        }, 1000);

        setIsPlaying(true);
      } catch {
        setIsPlaying(true);
        intervalRef.current = setInterval(() => {
          setCurrentTime((prev) => (prev >= totalDuration ? 0 : prev + 1));
        }, 1000);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const rem = Math.floor(secs % 60);
    return `${mins.toString().padStart(2, "0")}:${rem.toString().padStart(2, "0")}`;
  };

  return (
    <section id="about" className="px-4 sm:px-6 py-8">
      {/* Section Title */}
      <h2 className="font-serif-title text-3xl sm:text-4xl text-[var(--fg)] tracking-tight mb-5">
        About
      </h2>
      {/* Introduction */}
      {/* <p className="mb-6 text-[var(--fg-secondary)] leading-relaxed">
        I am Rudra Parmar, a Full-Stack Developer & Systems Builder passionate about creating high-performance digital products and scalable architectures.
      </p> */}

      {/* Bullet Points */}
      <div className="space-y-3.5 text-xs sm:text-sm text-[var(--fg-secondary)] leading-relaxed font-sans">
        <div className="flex items-start gap-2.5">
          <span className="font-code text-[var(--soft)] select-none text-base leading-none">•</span>
          <p>
            I build polished, high-performance digital products combining full-stack engineering with scalable architectures to ship things that actually matter.
          </p>
        </div>

        <div className="flex items-start gap-2.5">
          <span className="font-code text-[var(--soft)] select-none text-base leading-none">•</span>
          <p>
            Currently deep in the intersection of scalable distributed systems, vector search, and modern web architecture — building production platforms, automating workflows, and learning by shipping.
          </p>
        </div>

        <div className="flex items-start gap-2.5">
          <span className="font-code text-[var(--soft)] select-none text-base leading-none">•</span>
          <p>
            Open to collaborating on ambitious ideas, high-impact software engineering teams, and open-source systems.
          </p>
        </div>
      </div>

      {/* Interactive CD Player ("NOW PLAYING") */}
      <div className="mt-8 pt-6 border-t border-dashed border-[var(--line)] flex flex-col sm:flex-row items-center gap-6">
        {/* CD Player Assembly */}
        <div
          className="relative w-28 h-28 flex-shrink-0 cursor-pointer select-none"
          onClick={togglePlay}
          title={isPlaying ? "Click to pause" : "Click to play"}
        >
          {/* Spinning CD Disc */}
          <motion.div
            animate={{ rotate: isPlaying ? 360 : 0 }}
            transition={
              isPlaying
                ? { duration: 4.5, ease: "linear", repeat: Infinity }
                : { duration: 0 }
            }
            className="w-28 h-28 rounded-full relative flex items-center justify-center"
          >
            {/* CD Disc SVG — inspired by Framer CD player */}
            <svg
              viewBox="0 0 415 415"
              className="w-full h-full"
              style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.4))" }}
            >
              <defs>
                <clipPath id="cdClip">
                  <rect width="415" height="415" rx="200" />
                </clipPath>
                <filter id="cdSheen" x="51.7" y="-95.8" width="311.1" height="633.6" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="36.4" result="blur" />
                </filter>
                <filter id="cdLine1" x="186.5" y="-58" width="41.5" height="531" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="10" result="blur" />
                </filter>
                <filter id="cdLine2" x="194.3" y="-51.2" width="26.9" height="517.4" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="6.6" result="blur" />
                </filter>
              </defs>
              <g clipPath="url(#cdClip)">
                {/* Main disc body */}
                <circle cx="207.5" cy="207.5" r="207.5" fill="#1C1C1E" />
                {/* Light sheen / refraction line */}
                <g filter="url(#cdSheen)">
                  <path d="M290 -23L135.5 -18L206.5 221L124.5 465H290L214 221L290 -23Z" fill="#D9D9D9" fillOpacity="0.37" />
                </g>
                <g filter="url(#cdLine1)">
                  <line x1="207.25" y1="453" x2="207.25" y2="-38" stroke="white" strokeWidth="1.5" />
                </g>
                <g filter="url(#cdLine2)">
                  <line x1="207.75" y1="453" x2="207.75" y2="-38" stroke="white" strokeOpacity="0.52" strokeWidth="0.5" />
                </g>
                {/* Outer rim */}
                <circle cx="207.5" cy="207.5" r="203.5" stroke="black" strokeWidth="8" fill="none" />
                {/* Groove rings */}
                <circle cx="207.5" cy="207.5" r="90.5" stroke="black" strokeWidth="2" fill="none" />
                <circle cx="207.5" cy="207.5" r="113.5" stroke="black" strokeWidth="2" fill="none" />
                <circle cx="207.5" cy="207.5" r="135.5" stroke="black" strokeWidth="2" fill="none" />
                <circle cx="207.5" cy="207.5" r="156.5" stroke="black" strokeWidth="2" fill="none" />
                <circle cx="207.5" cy="207.5" r="180.5" stroke="black" strokeWidth="2" fill="none" />
                {/* Center label — red */}
                <circle cx="207.5" cy="207.5" r="61.5" fill="#C2272D" stroke="black" strokeWidth="10" />
                {/* Center spindle hole */}
                <circle cx="207.5" cy="207.5" r="13.5" fill="white" />
                <circle cx="207.5" cy="207.5" r="11.5" fill="black" />
              </g>
            </svg>
          </motion.div>

          {/* Tonearm */}
          <motion.div
            animate={{ rotate: isPlaying ? 20 : -14 }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
            className="absolute top-1 right-0 w-14 h-[72px] pointer-events-none"
            style={{ transformOrigin: "89% 22%" }}
          >
            <svg
              viewBox="0 0 270 364"
              className="w-full h-full"
              style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.3))" }}
            >
              <defs>
                <filter id="armShadow1" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dx="2" dy="4" />
                  <feGaussianBlur stdDeviation="2.5" />
                  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.29 0" />
                  <feBlend mode="normal" in2="shape" result="effect1" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect2" />
                  <feOffset dx="-3" dy="-4" />
                  <feGaussianBlur stdDeviation="3.75" />
                  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.48 0" />
                  <feBlend mode="normal" in2="effect1" result="effect2" />
                </filter>
              </defs>
              {/* Arm stroke */}
              <g filter="url(#armShadow1)">
                <path
                  d="M248.68 19.29C226.2 88.89 194.47 187.11 179.15 234.53C173.3 252.65 162.1 268.54 146.26 279.09C124.8 293.38 92.22 313.14 62.68 323.29"
                  stroke="white"
                  strokeWidth="17"
                  strokeLinecap="round"
                  fill="none"
                />
              </g>
              {/* Pivot joint */}
              <g filter="url(#armShadow1)">
                <rect x="218.23" y="35.29" width="47" height="88" rx="11" transform="rotate(16.2 218.23 35.29)" fill="white" />
              </g>
              {/* Cartridge / Headshell */}
              <g filter="url(#armShadow1)">
                <path
                  d="M72.79 296.13C78.68 292.58 86.36 295.24 88.77 301.69L96.18 321.46C98.53 327.72 94.8 334.6 88.29 336.06L22.14 350.86C16.84 352.05 11.5 349.04 9.77 343.89C8.18 339.17 10.08 333.99 14.34 331.42L72.79 296.13Z"
                  fill="white"
                />
              </g>
            </svg>
          </motion.div>

          {/* Play/Pause overlay indicator */}
          <AnimatePresence>
            {!isPlaying && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute inset-0 flex items-center justify-center rounded-full bg-black/30 backdrop-blur-[2px]"
              >
                <FiPlay className="text-white text-xl ml-1 drop-shadow-md" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Player Controls & Track Metadata */}
        <div className="w-full flex-1">
          <div className="font-code text-[10px] tracking-widest text-[var(--soft)] uppercase mb-1">
            NOW PLAYING
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium text-[var(--fg)] tracking-tight">
                La Campanella ( 1826 )
              </div>
              <div className="text-xs text-[var(--muted)] font-code mt-0.5">
                Niccolò Paganini
              </div>
            </div>

            {/* Playback Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setCurrentTime((t) => Math.max(0, t - 15))}
                aria-label="Previous track"
                className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors p-1 cursor-pointer"
              >
                <FiSkipBack className="text-sm" />
              </button>

              <button
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause music" : "Play music"}
                className="w-8 h-8 rounded-full border border-[var(--line-strong)] bg-[var(--card)] hover:bg-[var(--hover)] text-[var(--fg)] flex items-center justify-center transition-transform hover:scale-105 cursor-pointer"
              >
                {isPlaying ? <FiPause className="text-xs" /> : <FiPlay className="text-xs ml-0.5" />}
              </button>

              <button
                onClick={() => setCurrentTime((t) => Math.min(totalDuration, t + 15))}
                aria-label="Next track"
                className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors p-1 cursor-pointer"
              >
                <FiSkipForward className="text-sm" />
              </button>
            </div>
          </div>

          {/* Interactive Progress Bar */}
          <div className="mt-3">
            <input
              type="range"
              min="0"
              max={totalDuration}
              value={currentTime}
              onChange={(e) => setCurrentTime(Number(e.target.value))}
              aria-label="Audio progress scrub"
              className="w-full h-1 bg-[var(--line)] rounded-full appearance-none cursor-pointer accent-[var(--fg)]"
            />
            <div className="flex justify-between text-[10px] font-code text-[var(--soft)] mt-1">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(totalDuration)}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
