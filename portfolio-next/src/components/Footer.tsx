"use client";

import { useState, useEffect } from "react";
import PixelPet from "./PixelPet";

export default function Footer() {
  const [timeStr, setTimeStr] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full pt-8 pb-12 px-4 sm:px-6 text-center font-sans">
      {/* Credits */}
      <div className="text-xs text-[var(--muted)]">
        Designed &amp; Developed by{" "}
        <span className="font-semibold text-[var(--fg)]">Rudra Parmar</span>
      </div>

      <div className="text-[11px] text-[var(--soft)] font-code mt-1">
        © 2026 All rights reserved.
      </div>

      {/* Live Mumbai Time Pill with Pulsing Dot */}
      <div className="mt-4 flex items-center justify-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--line)] bg-[var(--card)] font-code text-[11px] text-[var(--muted)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span>Mumbai, India</span>
          <span className="text-[var(--line-strong)]">·</span>
          <span>{timeStr || "Live Local Time"}</span>
        </div>
      </div>

      {/* Pixel Pet */}
      <div className="mt-6 flex justify-center">
        <PixelPet />
      </div>
    </footer>
  );
}
