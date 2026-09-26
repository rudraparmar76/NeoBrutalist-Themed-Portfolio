"use client";

import { useState, useEffect } from "react";
import { FiSearch, FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

export default function Navbar({ onOpenCommandPalette }: NavbarProps) {
  const [isDark, setIsDark] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Check saved theme or system preference
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--line)] bg-[var(--bg)]/85 backdrop-blur-md transition-colors duration-200">
      <div className="max-w-[760px] mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Brand / Phonetic Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="font-serif-title text-2xl font-normal tracking-tight text-[var(--fg)] group-hover:opacity-80 transition-opacity">
            Rudra
          </span>
          <span className="font-code text-xs text-[var(--muted)] tracking-wider">
            /rud · ra/
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden sm:flex items-center gap-6 font-code text-xs tracking-wide">
          <a
            href="#"
            className="text-[var(--fg)] hover:text-[var(--fg)] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[var(--fg)] after:scale-x-100 after:transition-transform"
          >
            Home
          </a>
          <a
            href="#projects"
            className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors py-1"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors py-1"
          >
            Experience
          </a>
          <a
            href="#contact"
            className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors py-1"
          >
            Contact
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Command Palette Trigger */}
          <button
            onClick={onOpenCommandPalette}
            aria-label="Search Command Palette"
            className="p-2 rounded-lg text-[var(--muted)] hover:text-[var(--fg)] hover:bg-[var(--hover)] border border-transparent hover:border-[var(--line)] transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <FiSearch className="text-sm" />
            <span className="hidden md:inline-block font-code text-[10px] text-[var(--soft)] border border-[var(--line)] rounded px-1.5 py-0.5">
              ⌘K
            </span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg text-[var(--muted)] hover:text-[var(--fg)] hover:bg-[var(--hover)] border border-transparent hover:border-[var(--line)] transition-colors cursor-pointer"
          >
            {isDark ? <FiSun className="text-sm" /> : <FiMoon className="text-sm" />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="sm:hidden p-2 text-[var(--muted)] hover:text-[var(--fg)]"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <FiX className="text-lg" /> : <FiMenu className="text-lg" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-[var(--line)] bg-[var(--card)] px-4 py-3 space-y-2 font-code text-xs">
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-[var(--fg)]"
          >
            Home
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-[var(--muted)] hover:text-[var(--fg)]"
          >
            Projects
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-[var(--muted)] hover:text-[var(--fg)]"
          >
            Experience
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-[var(--muted)] hover:text-[var(--fg)]"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
