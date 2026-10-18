"use client";

import React from "react";

interface SectionDividerProps {
  className?: string;
}

export default function SectionDivider({ className = "" }: SectionDividerProps) {
  return (
    <div className={`relative w-full h-10 my-0 ${className}`}>
      {/* Full-bleed hairline stripes — extends past the central column into the side gutters */}
      <div
        aria-hidden
        className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-screen bg-stripes border-y border-[var(--line)] pointer-events-none"
      />

      {/* 4 Corner Crosshair / Dot Accents (pinned to the central column edges) */}
      <div className="absolute -top-[2px] -left-[2px] w-[5px] h-[5px] bg-[var(--fg)] opacity-40" />
      <div className="absolute -top-[2px] -right-[2px] w-[5px] h-[5px] bg-[var(--fg)] opacity-40" />
      <div className="absolute -bottom-[2px] -left-[2px] w-[5px] h-[5px] bg-[var(--fg)] opacity-40" />
      <div className="absolute -bottom-[2px] -right-[2px] w-[5px] h-[5px] bg-[var(--fg)] opacity-40" />
    </div>
  );
}
