"use client";

import Image from "next/image";
import { FiStar } from "react-icons/fi";
import ShinyText from "./reactbits/ShinyText";
import RoamingCat from "./RoamingCat";

interface HeroProps {
  onOpenCommandPalette: () => void;
}

export default function Hero({ onOpenCommandPalette }: HeroProps) {
  return (
    <section className="px-4 sm:px-6 pt-6 pb-8">
      {/* Vintage Computer Lab Banner */}
      <div className="relative w-full h-36 sm:h-48 rounded-xl border border-[var(--line)] overflow-hidden bg-neutral-900 group">
        <Image
          src="/Assets/images/hero.jpg"
          alt="Hero image"
          fill
          priority
          className="object-cover grayscale contrast-110 opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        {/* Subtle scanline overlay & vignette */}
        <div className="absolute inset-0 scanlines opacity-40 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/40 via-transparent to-transparent pointer-events-none" />

        {/* Roaming & Playing Pixel Cat */}
        <RoamingCat />
      </div>

      {/* Profile Header Details */}
      <div className="mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          {/* Avatar with sleek neo border */}
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl border border-[var(--line-strong)] overflow-hidden bg-[var(--chip)] flex-shrink-0 group">
            <Image
              src="/Assets/images/img3.jpg"
              alt="Rudra Parmar"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
            />
          </div>

          {/* Name & Titles */}
          <div>
            <h1 className="font-serif-title text-3xl sm:text-4xl text-[var(--fg)] leading-none tracking-tight">
              <ShinyText
                text="Rudra Parmar"
                speed={3.5}
                color="var(--fg)"
                shineColor="#a1a1aa"
              />
            </h1>
            <p className="font-code text-xs sm:text-sm text-[var(--fg-secondary)] mt-1.5 font-medium">
              Full-Stack Developer &amp; Systems Builder
            </p>
            <p className="font-code text-[11px] text-[var(--muted)] mt-1 flex items-center gap-1.5">
              <span>📍</span> Mumbai, India
            </p>
          </div>
        </div>

        {/* Quick Action Buttons on Right */}
        <div className="flex items-center gap-2 self-start sm:self-center">
          <a
            href="https://github.com/rudraparmar76"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Star on GitHub"
            className="p-2 sm:px-3 sm:py-2 rounded-lg border border-[var(--line)] bg-[var(--card)] hover:bg-[var(--hover)] text-[var(--fg)] text-xs font-code transition-colors flex items-center gap-1.5"
          >
            <FiStar className="text-sm text-amber-400 fill-amber-400/20" />
            <span className="hidden sm:inline">Star</span>
          </a>

          <button
            onClick={onOpenCommandPalette}
            className="px-3 py-2 rounded-lg border border-[var(--line)] bg-[var(--card)] hover:bg-[var(--hover)] text-[var(--fg)] text-xs font-code transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span>⌘K</span>
          </button>
        </div>
      </div>
    </section>
  );
}
