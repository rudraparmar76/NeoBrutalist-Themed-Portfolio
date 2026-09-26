"use client";

import React from "react";

interface SectionDividerProps {
  className?: string;
}

export default function SectionDivider({ className = "" }: SectionDividerProps) {
  return (
    <div className={`relative w-full border-y border-[var(--line)] bg-stripes h-6 my-0 ${className}`}>
      {/* 4 Corner Crosshair / Dot Accents */}
      <div className="absolute -top-[2px] -left-[2px] w-[5px] h-[5px] bg-[var(--fg)] opacity-40" />
      <div className="absolute -top-[2px] -right-[2px] w-[5px] h-[5px] bg-[var(--fg)] opacity-40" />
      <div className="absolute -bottom-[2px] -left-[2px] w-[5px] h-[5px] bg-[var(--fg)] opacity-40" />
      <div className="absolute -bottom-[2px] -right-[2px] w-[5px] h-[5px] bg-[var(--fg)] opacity-40" />
    </div>
  );
}
