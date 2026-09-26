"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FiGlobe, FiGithub, FiChevronRight, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import SpotlightCard from "./reactbits/SpotlightCard";

const projects = [
  {
    id: "intellifile",
    title: "IntelliFile",
    year: "2026",
    description:
      "Semantic Search for Local Documents. Scans PDF, DOCX & TXT files, chunks text, embeds with SentenceTransformers, and builds a FAISS index for lightning-fast similarity vector search.",
    image: "/Assets/images/Intellifile.jpg",
    tags: ["Electron", "Python", "FAISS", "SentenceTransformers", "Vector DB"],
    github: "https://github.com/rishivejani15/Intellifile",
    demo: "https://intellifile.vercel.app/",
  },
  {
    id: "classconnect",
    title: "ClassConnect",
    year: "2025",
    description:
      "Adaptive Learning Platform — National Top 28 at Quasar 4.0. Multi-tenant backend with RBAC, real-time progress tracking, analytics pipelines, and adaptive learning insights.",
    image: "/Assets/images/ClassConnect.jpg",
    tags: ["Python", "Flutter", "Firebase", "REST APIs", "RBAC", "PostgreSQL"],
    github: "https://github.com/dakshgopani/ClassConnect",
    demo: "https://class-connect-web.vercel.app",
  },
  {
    id: "drivesafe",
    title: "Drive-Safe",
    year: "2025",
    description:
      "Real-Time AI Driving Analytics Platform with mobile sensor data ingestion, computer vision driver behavior classification, alert systems, and live telematics dashboards.",
    image: "/Assets/images/Drive-Safe-3.jpg",
    tags: ["Python", "OpenCV", "Firebase", "REST APIs", "Real-Time"],
    github: "https://github.com/dakshgopani/Drive-Safe",
    demo: "https://drivesafe-alpha.vercel.app/",
  },
  {
    id: "healthhub",
    title: "HealthHub",
    year: "2025",
    description:
      "AI-Powered Healthcare System with secure backend handling electronic medical records, appointments, telemedicine workflows, and real-time ML predictions via production API endpoints.",
    image: "/Assets/images/HealthHub-1.jpg",
    tags: ["Python", "Flutter", "Firebase", "Railway", "ML Integration", "FastAPI"],
    github: "https://github.com/dakshgopani/Health-Hub",
    demo: "https://healthub-web.vercel.app/",
  },
];

const moreProjects = [
  {
    id: "hacktrack",
    title: "HackTrack",
    year: "2026",
    description:
      "AI-powered hackathon command center for discovering events, extracting hackathon details, managing team workflows, tracking deadlines, and generating project ideas through an integrated dashboard.",
    image: "/Assets/images/Hacktrack.png",
    tags: ["Next.js", "React", "Express", "TypeScript", "Supabase", "Groq AI"],
    github: "https://github.com/rudraparmar76/HackTrack",
    demo: "https://www.hack-track.tech/",
  },
  {
    id: "kavach",
    title: "KAVACH",
    year: "2026",
    description:
      "AI-powered cybersecurity platform combining phishing, malicious URL, prompt injection, steganography, and deepfake analysis with explainable risk scoring and centralized threat intelligence.",
    image: "/Assets/images/Kavach.png",
    tags: ["React", "Vite", "FastAPI", "Python", "Groq AI", "SQLite"],
    github: "https://github.com/rudraparmar76/Kavach",
    demo: "https://kavach-indianext-hackathon.vercel.app/",
  },
  {
    id: "murder-mystery-generator",
    title: "Murder Mystery Generator",
    year: "2026",
    description:
      "AI-powered interactive investigation game that procedurally generates unique murder cases, enables natural-language suspect interrogation, reveals dynamic clues, and guides players through evidence-based accusations.",
    image: "/Assets/images/Murder-Mystery.png",
    tags: ["Next.js", "React", "FastAPI", "Python", "Supabase", "Groq AI"],
    github: "https://github.com/rudraparmar76/Murder-Mystery-Generator",
    demo: "https://murder-mystery-generator-one.vercel.app/",
  },
  {
    id: "aerix",
    title: "AERIX",
    year: "2026",
    description:
      "Geospatial intelligence platform for transforming satellite and geographic data into interactive maps, layered visualizations, location insights, and decision-ready spatial intelligence.",
    image: "/Assets/images/Aerix.png",
    tags: ["React", "TypeScript", "Geospatial", "Maps", "Data Visualization", "AI"],
    github: "https://github.com/rudraparmar76",
    demo: "https://sih-algorithm-avengers.vercel.app/",
  },
];

export default function Projects() {
  const [isOpen, setIsOpen] = useState(false);

  // Close on Escape & lock body scroll when modal is active
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <section id="projects" className="px-4 sm:px-6 py-8">
      {/* Title Bar with "View More Projects" Pill */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-serif-title text-3xl sm:text-4xl text-[var(--fg)] tracking-tight">
          Projects
        </h2>
        <button
          onClick={() => setIsOpen(true)}
          className="font-code text-xs font-bold text-[var(--muted)] hover:text-[var(--fg)] border border-[var(--line)] rounded-full px-3.5 py-1 bg-[var(--card)] hover:bg-[var(--hover)] hover:border-[var(--line-strong)] transition-all flex items-center gap-1.5 group cursor-pointer"
        >
          <span className="font-bold">View More Projects</span>
          <FiChevronRight className="text-xs stroke-[2.5] group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* 2-Column Responsive Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project) => (
          <SpotlightCard
            key={project.id}
            spotlightColor="rgba(255, 255, 255, 0.08)"
            className="p-3.5 sm:p-4 flex flex-col justify-between group border border-[var(--line)] hover:border-[var(--line-strong)]"
          >
            <div>
              {/* Project Preview Image */}
              <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden border border-[var(--line)] bg-neutral-900 mb-3.5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Title & Year */}
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-semibold text-base text-[var(--fg)] tracking-tight">
                  {project.title}
                </h3>
                <span className="font-code text-xs text-[var(--soft)]">
                  {project.year}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs text-[var(--fg-secondary)] mt-2 leading-relaxed font-sans line-clamp-3">
                {project.description}
              </p>
            </div>

            {/* Bottom Row: Tags & Links */}
            <div className="mt-4 pt-3 border-t border-[var(--line)] flex flex-col gap-3">
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-code text-[10px] text-[var(--fg-secondary)] bg-[var(--chip)] border border-[var(--chip-border)] px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center justify-end gap-2 text-[var(--muted)]">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} live demo`}
                    className="p-1.5 rounded-md hover:text-[var(--fg)] hover:bg-[var(--hover)] transition-colors"
                  >
                    <FiGlobe className="text-sm" />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} source code`}
                    className="p-1.5 rounded-md hover:text-[var(--fg)] hover:bg-[var(--hover)] transition-colors"
                  >
                    <FiGithub className="text-sm" />
                  </a>
                )}
              </div>
            </div>
          </SpotlightCard>
        ))}
      </div>


      {/* Modal Dialog for "All Projects" Matching User Design */}
      <AnimatePresence>
        {isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-[#0c0c0c] border border-[#262626] rounded-2xl p-5 sm:p-7 shadow-2xl flex flex-col max-h-[85vh] overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-5 flex-shrink-0">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight font-sans">
                    All Projects
                  </h3>
                  <p className="font-mono text-xs text-[#737373] mt-1">
                    {moreProjects.length} more beyond the featured work
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full bg-[#181818] hover:bg-[#252525] border border-[#2c2c2c] text-[#8e8e8e] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <FiX className="text-base" />
                </button>
              </div>

              {/* Projects List */}
              <div className="overflow-y-auto space-y-3 pr-1 -mr-1">
                {moreProjects.map((project) => (
                  <div
                    key={project.id}
                    className="border border-[#222222] bg-[#121212] rounded-xl p-4 sm:p-5 flex flex-col gap-3 hover:border-[#333333] transition-colors group"
                  >
                    {/* Project Preview Image */}
                    {project.image && (
                      <div className="relative aspect-[16/9] sm:aspect-[2/1] w-full rounded-lg overflow-hidden border border-[#222222] bg-neutral-900">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                      </div>
                    )}

                    {/* Top Row: Title + Year */}
                    <div className="flex items-center justify-between gap-3">
                      <h4 className="text-sm sm:text-base font-semibold text-white tracking-tight">
                        {project.title}
                      </h4>
                      <span className="font-mono text-xs text-[#737373]">
                        {project.year}
                      </span>
                    </div>

                    {/* Middle: Description */}
                    <p className="text-xs sm:text-[13px] text-[#9ca3af] leading-relaxed font-sans">
                      {project.description}
                    </p>

                    {/* Bottom Row: Tags + Links */}
                    <div className="flex items-center justify-between gap-3 pt-1 flex-wrap sm:flex-nowrap">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-[11px] text-[#a3a3a3] bg-[#1a1a1a] border border-[#262626] px-2 py-0.5 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Icons */}
                      <div className="flex items-center gap-3 text-[#737373] flex-shrink-0">
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} live demo`}
                            className="p-1 hover:text-white transition-colors"
                          >
                            <FiGlobe className="text-base" />
                          </a>
                        )}
                        {project.github && project.github !== "YOUR_GITHUB_URL" && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} source code`}
                            className="p-1 hover:text-white transition-colors"
                          >
                            <FiGithub className="text-base" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
