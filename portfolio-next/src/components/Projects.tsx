"use client";

import Image from "next/image";
import { RiArrowRightUpLine } from "react-icons/ri";
import RevealOnScroll from "./RevealOnScroll";

const projects = [
  {
    title: "ClassConnect",
    description:
      "Adaptive Learning Platform — National Top 28 at Quasar 4.0. Multi-tenant backend with RBAC, real-time progress tracking, analytics pipelines, and adaptive learning insights.",
    image: "/Assets/images/ClassConnect.jpg",
    tags: ["Python","Flutter", "Firebase", "REST APIs", "Authentication", "Database Design"],
    link: "https://github.com/rishivejani15/ClassConnect",
    hoverColor: "group-hover:text-neo-purple",
    offset: false,
  },
  {
    title: "HealthHub",
    description:
      "AI-Powered Healthcare System with secure backend handling medical records, appointments, telemedicine workflows, and real-time ML predictions via production API endpoints.",
    image: "/Assets/images/HealthHub-1.jpg",
    tags: ["Python","Flutter", "Firebase", "REST APIs", "Railway", "ML Integration"],
    link: "https://github.com/dakshgopani/Health-Hub",
    hoverColor: "group-hover:text-neo-blue",
    offset: true,
  },
  {
    title: "Drive-Safe",
    description:
      "Real-Time AI Driving Analytics Platform with mobile sensor data ingestion, driving behavior classification, alert systems, rewards engine, and performance monitoring dashboards.",
    image: "/Assets/images/Drive-Safe-3.jpg",
    tags: ["Python","Flutter", "Firebase", "OpenCV", "REST APIs", "Real-Time Processing"],
    link: "https://github.com/rudraparmar76",
    hoverColor: "group-hover:text-neo-pink",
    offset: false,
  },
  {
    title: "IntelliFile",
    description:
      "Semantic Search for Local Documents. Scans PDF, DOCX & TXT files, chunks text, embeds with SentenceTransformers, and builds a FAISS index for lightning-fast similarity search with a simple CLI.",
    image: "/Assets/images/Intellifile.jpg",
    tags: ["Electron", "Python", "FAISS", "SentenceTransformers", "SQLite", "ML"],
    link: "https://github.com/rudraparmar76",
    hoverColor: "group-hover:text-neo-green",
    offset: true,
    wip: true,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-neo-yellow border-t-4 border-black px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-6xl md:text-9xl font-black mb-16 uppercase tracking-tighter text-white drop-shadow-[4px_4px_0_rgba(0,0,0,1)] text-stroke-black"
        >
          Selected Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <RevealOnScroll
              key={index}
              className={`group bg-white border-4 border-black p-4 shadow-hard ${
                project.offset ? "mt-0 md:mt-20" : ""
              }`}
              delay={index * 0.1}
            >
              <div className="bg-black border-2 border-black aspect-video relative overflow-hidden mb-6 group-hover:shadow-none transition-all">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
                {project.wip && (
                  <div className="absolute top-0 left-0 z-10">
                    <span className="inline-block bg-neo-green text-black font-black font-[family-name:var(--font-mono)] text-xs uppercase px-3 py-1.5 border-b-2 border-r-2 border-black shadow-[2px_2px_0_rgba(0,0,0,1)] tracking-wider animate-pulse">
                      WORK IN PROGRESS
                    </span>
                  </div>
                )}
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3
                    className={`text-4xl font-black uppercase mb-2 ${project.hoverColor} transition-colors glitch-hover`}
                  >
                    {project.title}
                  </h3>
                  <p className="font-[family-name:var(--font-mono)] text-sm mb-4 max-w-xs">{project.description}</p>
                  <div className="flex gap-2 font-[family-name:var(--font-mono)] text-xs font-bold flex-wrap">
                    {project.tags.map((tag) => (
                      <span key={tag} className="bg-neo-black text-white px-2 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border-2 border-black bg-neo-green flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-hover shadow-hard-sm flex-shrink-0"
                >
                  <RiArrowRightUpLine className="text-2xl" />
                </a>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <div className="text-center mt-24">
          <a
            href="https://github.com/rudraparmar76"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-neo-black text-white px-12 py-5 font-bold font-[family-name:var(--font-mono)] text-xl hover:bg-neo-white hover:text-black border-4 border-black transition-all shadow-hard hover:shadow-none"
          >
            VIEW ALL REPOS ON GITHUB
          </a>
        </div>
      </div>
    </section>
  );
}
