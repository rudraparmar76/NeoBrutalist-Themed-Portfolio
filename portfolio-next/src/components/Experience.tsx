"use client";

import React from "react";

const timelinePhases = [
  {
    step: "01",
    title: "The Foundation (Locking In)",
    desc: "Dedicated deep work mastering the modern backend & web ecosystem: Node.js, Express, PostgreSQL, Python, REST APIs, React, and modular architecture.",
  },
  {
    step: "02",
    title: "Architecting the Stack",
    desc: "Scaled to production-grade tools: Next.js, Firebase, Supabase, authentication workflows, and relational database modeling — building optimized platforms.",
  },
  {
    step: "03",
    title: "AI Internals & Vector Search",
    desc: "Deep diving into semantic search, FAISS vector indexing, LLM core architectures, embeddings, and intelligent agent workflows.",
  },
  {
    step: "04",
    title: "Shipping Real-World Systems",
    desc: "Building deployed platforms like ClassConnect (Quasar 4.0 Top 28), HealthHub, and Drive-Safe. Integrating secure backends with responsive interfaces.",
  },
];

const workRoles = [
  {
    title: "Tech Team Member",
    company: "Google Developer Groups DJSCE",
    period: "Dec 2025 – Present",
    tasks: [
      "Developed production React dashboards and event platforms with modern UI workflows",
      "Engineered data management interfaces and collaborated on scalable web architectures",
      "Contributing to developer community technical workshops and hackathons",
    ],
  },
  {
    title: "Frontend Engineer Intern",
    company: "Techsphere",
    period: "May 2024 – Jun 2024",
    tasks: [
      "Integrated secure REST API endpoints and optimized client application performance",
      "Enhanced client-server communication caching and state management pipelines",
      "Collaborated with cross-functional engineering teams on responsive interface releases",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-4 sm:px-6 py-8">
      {/* Title */}
      <h2 className="font-serif-title text-3xl sm:text-4xl text-[var(--fg)] tracking-tight mb-2">
        Experience
      </h2>

      {/* Role Headline */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-[var(--line)] pb-3 mb-5">
        <div className="text-sm font-medium text-[var(--fg)]">
          Full-Stack Developer &amp; Systems Builder <span className="text-[var(--muted)]">· Independent Builder</span>
        </div>
        <span className="font-code text-xs text-[var(--soft)]">2024 – Present</span>
      </div>

      <p className="text-xs sm:text-sm text-[var(--fg-secondary)] leading-relaxed font-sans mb-8">
        A continuous journey of mastering modern web architecture, distributed backends, and AI systems, moving from foundational development to architecting intelligent, scalable systems.
      </p>

      {/* Timeline Journey Nodes */}
      <div className="relative border-l border-[var(--line-strong)] ml-2.5 sm:ml-3 space-y-6 mb-12">
        {timelinePhases.map((phase) => (
          <div key={phase.step} className="relative pl-6 group">
            {/* Circular Node */}
            <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[var(--line-strong)] border-2 border-[var(--bg)] group-hover:bg-[var(--fg)] transition-colors" />

            <div className="font-medium text-xs sm:text-sm text-[var(--fg)] tracking-tight">
              {phase.title}
            </div>
            <p className="text-xs text-[var(--fg-secondary)] mt-1 leading-relaxed font-sans">
              {phase.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Work Roles */}
      <div className="space-y-4">
        <div className="font-code text-[11px] tracking-widest text-[var(--soft)] uppercase">
          ORGANIZATION ROLES
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {workRoles.map((role) => (
            <div
              key={role.title}
              className="p-4 rounded-xl border border-[var(--line)] bg-[var(--card)] hover:border-[var(--line-strong)] transition-colors"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-medium text-sm text-[var(--fg)] tracking-tight">
                    {role.title}
                  </h3>
                  <div className="text-xs text-[var(--muted)] font-code mt-0.5">
                    {role.company}
                  </div>
                </div>
                <span className="font-code text-[10px] text-[var(--soft)] bg-[var(--chip)] border border-[var(--chip-border)] px-1.5 py-0.5 rounded flex-shrink-0">
                  {role.period}
                </span>
              </div>

              <ul className="mt-3 space-y-1.5 text-xs text-[var(--fg-secondary)] font-sans list-disc list-inside">
                {role.tasks.map((task, i) => (
                  <li key={i} className="leading-relaxed">
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
