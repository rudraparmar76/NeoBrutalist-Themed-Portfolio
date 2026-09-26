"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  FiCompass,
  FiUser,
  FiFolder,
  FiBriefcase,
  FiMail,
  FiMoon,
  FiSun,
  FiFileText,
  FiCopy,
  FiExternalLink,
} from "react-icons/fi";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandItem {
  id: string;
  title: string;
  subtitle: string;
  category: "NAVIGATION" | "PROJECTS" | "ACTIONS";
  icon: React.ReactNode;
  action: () => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands: CommandItem[] = [
    // Navigation
    {
      id: "nav-home",
      title: "Go to Home",
      subtitle: "Overview, highlights, and profile header",
      category: "NAVIGATION",
      icon: <FiCompass className="text-base" />,
      action: () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        onClose();
      },
    },
    {
      id: "nav-about",
      title: "Go to About",
      subtitle: "Bio, philosophy, and music player",
      category: "NAVIGATION",
      icon: <FiUser className="text-base" />,
      action: () => {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    {
      id: "nav-contact",
      title: "Go to Contact",
      subtitle: "Social links, email, and transmission form",
      category: "NAVIGATION",
      icon: <FiMail className="text-base" />,
      action: () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    {
      id: "nav-projects",
      title: "Go to Projects",
      subtitle: "Browse all featured projects & live demos",
      category: "NAVIGATION",
      icon: <FiFolder className="text-base" />,
      action: () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    {
      id: "nav-experience",
      title: "Go to Experience",
      subtitle: "Career timeline, foundation, and work logs",
      category: "NAVIGATION",
      icon: <FiBriefcase className="text-base" />,
      action: () => {
        document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    // Projects
    {
      id: "proj-intellifile",
      title: "View IntelliFile",
      subtitle: "Semantic Search for Local Documents with FAISS vector index",
      category: "PROJECTS",
      icon: <FiExternalLink className="text-base" />,
      action: () => {
        window.open("https://intellifile.vercel.app/", "_blank");
        onClose();
      },
    },
    {
      id: "proj-classconnect",
      title: "View ClassConnect",
      subtitle: "Adaptive Learning Platform — National Top 28 at Quasar 4.0",
      category: "PROJECTS",
      icon: <FiExternalLink className="text-base" />,
      action: () => {
        window.open("https://class-connect-web.vercel.app", "_blank");
        onClose();
      },
    },
    {
      id: "proj-drivesafe",
      title: "View Drive-Safe",
      subtitle: "Real-Time AI Driving Analytics Platform with OpenCV",
      category: "PROJECTS",
      icon: <FiExternalLink className="text-base" />,
      action: () => {
        window.open("https://drivesafe-alpha.vercel.app/", "_blank");
        onClose();
      },
    },
    {
      id: "proj-healthhub",
      title: "View HealthHub",
      subtitle: "AI-Powered Healthcare System with real-time ML integration",
      category: "PROJECTS",
      icon: <FiExternalLink className="text-base" />,
      action: () => {
        window.open("https://healthub-web.vercel.app/", "_blank");
        onClose();
      },
    },
    {
      id: "proj-hacktrack",
      title: "View HackTrack",
      subtitle: "AI-powered hackathon command center & workflow manager",
      category: "PROJECTS",
      icon: <FiExternalLink className="text-base" />,
      action: () => {
        window.open("https://www.hack-track.tech/", "_blank");
        onClose();
      },
    },
    {
      id: "proj-kavach",
      title: "View KAVACH",
      subtitle: "AI cybersecurity platform with risk scoring & threat intel",
      category: "PROJECTS",
      icon: <FiExternalLink className="text-base" />,
      action: () => {
        window.open("https://kavach-indianext-hackathon.vercel.app/", "_blank");
        onClose();
      },
    },
    {
      id: "proj-murdermystery",
      title: "View Murder Mystery Generator",
      subtitle: "AI-powered procedural investigation & interrogation game",
      category: "PROJECTS",
      icon: <FiExternalLink className="text-base" />,
      action: () => {
        window.open("https://murder-mystery-generator-one.vercel.app/", "_blank");
        onClose();
      },
    },
    {
      id: "proj-aerix",
      title: "View AERIX",
      subtitle: "Geospatial intelligence & satellite data visualization",
      category: "PROJECTS",
      icon: <FiExternalLink className="text-base" />,
      action: () => {
        window.open("https://sih-algorithm-avengers.vercel.app/", "_blank");
        onClose();
      },
    },
    // Actions
    {
      id: "act-theme",
      title: "Toggle Theme",
      subtitle: "Switch between Dark and Light mode",
      category: "ACTIONS",
      icon: <FiMoon className="text-base" />,
      action: () => {
        const isDark = document.documentElement.classList.contains("dark");
        if (isDark) {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("theme", "light");
        } else {
          document.documentElement.classList.add("dark");
          localStorage.setItem("theme", "dark");
        }
        onClose();
      },
    },
    {
      id: "act-copy-email",
      title: copied ? "Email Copied!" : "Copy Email Address",
      subtitle: "rudraparmar1309@gmail.com",
      category: "ACTIONS",
      icon: <FiCopy className="text-base" />,
      action: () => {
        navigator.clipboard.writeText("rudraparmar1309@gmail.com");
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
          onClose();
        }, 800);
      },
    },
    {
      id: "act-resume",
      title: "Download Resume",
      subtitle: "View Rudra Parmar's curriculum vitae (PDF)",
      category: "ACTIONS",
      icon: <FiFileText className="text-base" />,
      action: () => {
        window.open("/Assets/Resume/Rudra_Resume.pdf", "_blank");
        onClose();
      },
    },
  ];

  const filteredCommands = commands.filter(
    (c) =>
      c.title.toLowerCase().includes(query.toLowerCase()) ||
      c.subtitle.toLowerCase().includes(query.toLowerCase()) ||
      c.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open from parent if handled there
        }
      }

      if (!isOpen) return;

      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredCommands.length || 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev === 0 ? Math.max(0, filteredCommands.length - 1) : prev - 1
        );
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-20 px-4 animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg bg-[var(--card)] border border-[var(--line-strong)] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-[var(--line)] gap-3">
          <FiCompass className="text-[var(--muted)] text-base flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Search pages, projects, or actions..."
            className="w-full bg-transparent text-sm text-[var(--fg)] placeholder:text-[var(--soft)] outline-none font-sans"
          />
          <kbd className="font-code text-[11px] text-[var(--muted)] bg-[var(--chip)] border border-[var(--chip-border)] px-1.5 py-0.5 rounded">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-2 space-y-1">
          {filteredCommands.length === 0 ? (
            <div className="py-8 text-center text-xs font-code text-[var(--muted)]">
              No matching pages or commands found.
            </div>
          ) : (
            filteredCommands.map((cmd, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={cmd.id}
                  onClick={() => cmd.action()}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full text-left px-3 py-2.5 rounded-lg flex items-center justify-between transition-colors ${
                    isSelected
                      ? "bg-[var(--hover)] text-[var(--fg)]"
                      : "text-[var(--fg-secondary)] hover:bg-[var(--hover)]"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="p-1.5 rounded-md bg-[var(--chip)] text-[var(--fg)] border border-[var(--chip-border)]">
                      {cmd.icon}
                    </span>
                    <div className="min-w-0">
                      <div className="text-xs font-medium text-[var(--fg)] truncate">
                        {cmd.title}
                      </div>
                      <div className="text-[11px] text-[var(--muted)] truncate font-mono">
                        {cmd.subtitle}
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-code text-[var(--soft)] uppercase px-1.5 py-0.5 rounded ml-2 flex-shrink-0">
                    {cmd.category}
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-4 py-2 border-t border-[var(--line)] flex items-center justify-between text-[11px] font-code text-[var(--muted)] bg-[var(--card-subtle)]">
          <div className="flex items-center gap-3">
            <span>↑↓ navigate</span>
            <span>↵ select</span>
          </div>
          <span>ESC to close</span>
        </div>
      </div>
    </div>
  );
}
