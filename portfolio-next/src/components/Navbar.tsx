"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";

const navLinks = [
  { href: "#about", label: "/ABOUT" },
  { href: "#skills", label: "/SKILLS" },
  { href: "#experience", label: "/LOGS" },
  { href: "#projects", label: "/WORK" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 px-4 py-4 pointer-events-none">
      <div className="max-w-7xl mx-auto flex justify-between items-center pointer-events-auto">
        <a
          href="#"
          className="bg-neo-white border-2 border-black px-4 py-1 text-2xl font-black shadow-hard hover:bg-neo-yellow transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
        >
          RUDRA.exe
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-4 bg-white border-2 border-black p-2 shadow-hard">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1 font-[family-name:var(--font-mono)] font-bold text-sm hover:bg-black hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-3 py-1 font-[family-name:var(--font-mono)] font-bold text-sm bg-neo-yellow border border-black hover:bg-neo-pink transition-colors"
          >
            HIRE ME
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden bg-white border-2 border-black p-2 shadow-hard hover:bg-neo-yellow transition-all"
        >
          {mobileOpen ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 bg-white border-2 border-black p-4 shadow-hard-lg pointer-events-auto mx-4"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2 font-[family-name:var(--font-mono)] font-bold text-sm hover:bg-black hover:text-white transition-colors border-b border-gray-200"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 font-[family-name:var(--font-mono)] font-bold text-sm bg-neo-yellow border border-black hover:bg-neo-pink transition-colors text-center mt-2"
              >
                HIRE ME
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
