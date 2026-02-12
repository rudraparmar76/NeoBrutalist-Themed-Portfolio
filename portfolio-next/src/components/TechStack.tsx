"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "REACT", category: "FRONTEND", hoverColor: "hover:bg-white" },
  { name: "TAILWIND", category: "STYLING", hoverColor: "hover:bg-neo-pink" },
  { name: "JavaScript", category: "LANGUAGE", hoverColor: "hover:bg-neo-yellow" },
  { name: "HTML/CSS", category: "CORE", hoverColor: "hover:bg-neo-orange" },
  { name: "Python , Node.js", category: "BACKEND", hoverColor: "hover:bg-neo-blue" },
  { name: "REST APIs", category: "ARCHITECTURE", hoverColor: "hover:bg-neo-green" },
  { name: "AI/ML", category: "LEARNING", hoverColor: "hover:bg-neo-purple" },
  { name: "AUTH", category: "SECURITY", hoverColor: "hover:bg-white" },
  { name: "MongoDB", category: "DATABASE", hoverColor: "hover:bg-neo-green" },
  { name: "SQL", category: "DATABASE", hoverColor: "hover:bg-neo-blue" },
  { name: "FIREBASE", category: "CLOUD", hoverColor: "hover:bg-neo-orange" },
  { name: "RAILWAY", category: "DEPLOY", hoverColor: "hover:bg-neo-purple" },
  { name: "DOCKER", category: "DEVOPS", hoverColor: "hover:bg-neo-blue" },
  { name: "AWS", category: "CLOUD", hoverColor: "hover:bg-neo-yellow" },
  { name: "GIT", category: "VERSION", hoverColor: "hover:bg-white" },
  { name: "LINUX", category: "OS", hoverColor: "hover:bg-neo-pink" },
];

export default function TechStack() {
  return (
    <section id="skills" className="py-20 bg-neo-black text-neo-white border-y-4 border-black relative overflow-hidden">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b-4 border-white pb-4">
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-6xl md:text-8xl font-black uppercase text-white tracking-tighter"
          >
            TECH<span className="text-neo-green">_STACK</span>
          </motion.h2>
          <div className="flex items-center gap-2 mb-2 md:mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            <p className="font-[family-name:var(--font-mono)] text-neo-green text-sm font-bold">/// SYSTEM_OPTIMIZED</p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center md:justify-start">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03, duration: 0.3 }}
              className={`group w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-[12.5%] h-24 border-r-2 border-b-2 border-white/20 bg-neo-black ${skill.hoverColor} transition-all duration-0 hover:z-10 relative cursor-hover flex flex-col items-center justify-center p-2`}
            >
              <div className="text-neo-green group-hover:text-black font-[family-name:var(--font-mono)] text-xs mb-1 opacity-50">
                &gt;_ {skill.category}
              </div>
              <div className="text-white group-hover:text-black font-black text-xl uppercase">
                {skill.name}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t-4 border-white mt-8 pt-4 flex justify-between font-[family-name:var(--font-mono)] text-xs text-gray-500">
          <span>TOTAL_NODES: {skills.length}</span>
          <span>MEMORY_USAGE: 128MB</span>
        </div>
      </div>
    </section>
  );
}
