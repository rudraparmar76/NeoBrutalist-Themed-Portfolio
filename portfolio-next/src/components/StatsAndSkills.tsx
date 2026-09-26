"use client";

import { useState } from "react";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFlutter,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiPostgresql,
  SiSupabase,
  SiFirebase,
  SiMongodb,
  SiOpencv,
  SiDocker,
  SiGit,
  SiLinux,
  SiVercel,
  SiRailway,
} from "react-icons/si";
import { FiLayers, FiCode, FiCpu, FiDatabase, FiCloud } from "react-icons/fi";
import DecryptedText from "./reactbits/DecryptedText";

interface SkillItem {
  name: string;
  category: "Languages" | "Frontend" | "Backend" | "Databases" | "AI / ML" | "DevOps";
  icon: React.ReactNode;
}

const skillsList: SkillItem[] = [
  // Languages
  { name: "TypeScript", category: "Languages", icon: <SiTypescript className="text-[#3178C6]" /> },
  { name: "JavaScript", category: "Languages", icon: <SiJavascript className="text-[#F7DF1E]" /> },
  { name: "Python", category: "Languages", icon: <SiPython className="text-[#3776AB]" /> },
  { name: "C++", category: "Languages", icon: <SiCplusplus className="text-[#00599C]" /> },

  // Frontend
  { name: "React", category: "Frontend", icon: <SiReact className="text-[#61DAFB]" /> },
  { name: "Next.js", category: "Frontend", icon: <SiNextdotjs /> },
  { name: "Tailwind CSS", category: "Frontend", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: "Flutter", category: "Frontend", icon: <SiFlutter className="text-[#02569B]" /> },

  // Backend
  { name: "Node.js", category: "Backend", icon: <SiNodedotjs className="text-[#339933]" /> },
  { name: "Express.js", category: "Backend", icon: <SiExpress /> },
  { name: "FastAPI", category: "Backend", icon: <SiFastapi className="text-[#009688]" /> },
  { name: "REST APIs", category: "Backend", icon: <FiLayers className="text-amber-500" /> },

  // Databases
  { name: "PostgreSQL", category: "Databases", icon: <SiPostgresql className="text-[#4169E1]" /> },
  { name: "Supabase", category: "Databases", icon: <SiSupabase className="text-[#3ECF8E]" /> },
  { name: "Firebase", category: "Databases", icon: <SiFirebase className="text-[#FFCA28]" /> },
  { name: "MongoDB", category: "Databases", icon: <SiMongodb className="text-[#47A248]" /> },

  // AI / ML
  { name: "SentenceTransformers", category: "AI / ML", icon: <FiCpu className="text-purple-400" /> },
  { name: "FAISS Vector DB", category: "AI / ML", icon: <FiDatabase className="text-indigo-400" /> },
  { name: "OpenCV", category: "AI / ML", icon: <SiOpencv className="text-[#5C3EE8]" /> },
  { name: "Vector Embeddings", category: "AI / ML", icon: <FiCode className="text-emerald-400" /> },

  // DevOps
  { name: "Docker", category: "DevOps", icon: <SiDocker className="text-[#2496ED]" /> },
  { name: "Git", category: "DevOps", icon: <SiGit className="text-[#F05032]" /> },
  { name: "Linux", category: "DevOps", icon: <SiLinux className="text-yellow-400" /> },
  { name: "Vercel", category: "DevOps", icon: <SiVercel /> },
  { name: "Railway", category: "DevOps", icon: <SiRailway className="text-[#800080]" /> },
  { name: "Cloud APIs", category: "DevOps", icon: <FiCloud className="text-sky-400" /> },
];

const categories = ["All", "Languages", "Frontend", "Backend", "Databases", "AI / ML", "DevOps"] as const;

export default function StatsAndSkills() {
  const [selectedCategory, setSelectedCategory] = useState<(typeof categories)[number]>("All");

  const filteredSkills =
    selectedCategory === "All"
      ? skillsList
      : skillsList.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="px-4 sm:px-6 py-8">
      {/* 4-Box Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 border border-[var(--line)] rounded-xl overflow-hidden divide-x divide-y sm:divide-y-0 divide-[var(--line)] bg-[var(--card)] mb-12">
        <div className="p-4 sm:p-5 text-center flex flex-col items-center justify-center">
          <div className="h-9 sm:h-10 flex items-center justify-center text-2xl sm:text-3xl font-semibold text-[var(--fg)] font-code tracking-tight whitespace-nowrap">
            <DecryptedText text="8+" speed={50} animateOn="view" />
          </div>
          <div className="text-[10px] font-code text-[var(--soft)] uppercase tracking-wider mt-1 whitespace-nowrap">
            PROJECTS SHIPPED
          </div>
        </div>

        <div className="p-4 sm:p-5 text-center flex flex-col items-center justify-center">
          <div className="h-9 sm:h-10 flex items-center justify-center text-2xl sm:text-3xl font-semibold text-[var(--fg)] font-code tracking-tight whitespace-nowrap">
            <DecryptedText text="4" speed={60} animateOn="view" />
          </div>
          <div className="text-[10px] font-code text-[var(--soft)] uppercase tracking-wider mt-1 whitespace-nowrap">
            JOURNEY PHASES
          </div>
        </div>

        <div className="p-4 sm:p-5 text-center flex flex-col items-center justify-center">
          <div className="h-9 sm:h-10 flex items-center justify-center text-2xl sm:text-3xl font-semibold text-[var(--fg)] font-code tracking-tight whitespace-nowrap">
            <DecryptedText text="20+" speed={45} animateOn="view" />
          </div>
          <div className="text-[10px] font-code text-[var(--soft)] uppercase tracking-wider mt-1 whitespace-nowrap">
            TECH TOOLS
          </div>
        </div>

        <div className="p-4 sm:p-5 text-center flex flex-col items-center justify-center">
          <div className="h-9 sm:h-10 flex items-center justify-center text-2xl sm:text-3xl font-semibold text-[var(--fg)] font-code tracking-tight whitespace-nowrap">
            <DecryptedText text="1.2k+" speed={45} animateOn="view" />
          </div>
          <div className="text-[10px] font-code text-[var(--soft)] uppercase tracking-wider mt-1 whitespace-nowrap">
            GITHUB COMMITS
          </div>
        </div>
      </div>

      {/* Tech Stack Heading & Filter Instruction */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-4">
        <h2 className="font-serif-title text-3xl sm:text-4xl text-[var(--fg)] tracking-tight">
          Tech Stack
        </h2>
        <span className="font-code text-xs text-[var(--soft)]">
          ( select tab to filter )
        </span>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none mb-4 font-code text-xs">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg border transition-all whitespace-nowrap ${
                isSelected
                  ? "bg-[var(--fg)] text-[var(--bg)] border-[var(--fg)] font-medium"
                  : "bg-[var(--card)] text-[var(--muted)] border-[var(--line)] hover:text-[var(--fg)] hover:border-[var(--line-strong)]"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Skills Grid */}
      <div className="flex flex-wrap gap-2">
        {filteredSkills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[var(--line)] bg-[var(--card)] hover:border-[var(--line-strong)] hover:bg-[var(--hover)] transition-all font-code text-xs text-[var(--fg)]"
          >
            <span className="text-sm">{skill.icon}</span>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
