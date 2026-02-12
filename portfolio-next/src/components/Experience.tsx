"use client";

import RevealOnScroll from "./RevealOnScroll";

const experiences = [
  {
    title: "Tech Team Member",
    period: "Dec 2025 - PRESENT",
    company: "Google Developer Groups DJSCE",
    companyColor: "text-neo-yellow",
    dotColor: "bg-neo-yellow",
    tasks: [
      "Developed production React dashboards and event platforms using Tailwind CSS",
      "Implemented data management interfaces and collaborated on scalable web workflows",
      "Contributing to developer community initiatives and technical events",
    ],
  },
  {
    title: "Frontend Engineer Intern",
    period: "May 2024 - Jun 2024",
    company: "Techsphere",
    companyColor: "text-neo-blue",
    dotColor: "bg-neo-blue",
    tasks: [
      "Integrated REST APIs and optimized UI performance for client applications",
      "Improved client-server communication efficiency with modern frontend patterns",
      "Collaborated with cross-functional teams on responsive web interfaces",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 max-w-7xl mx-auto">
      <h2 className="text-5xl md:text-8xl font-black uppercase mb-12 tracking-tighter text-center">
        Experience<span className="text-neo-red">_Log</span>
      </h2>

      <div className="relative border-l-4 border-black ml-4 md:ml-10 space-y-12">
        {experiences.map((exp, index) => (
          <RevealOnScroll key={index} className="relative pl-8 md:pl-16" delay={index * 0.1}>
            <div className={`absolute -left-[14px] top-2 w-6 h-6 ${exp.dotColor} border-4 border-black`} />
            <div className="bg-white border-4 border-black p-6 shadow-hard hover:shadow-hard-xl transition-all">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b-2 border-dashed border-gray-300 pb-4 mb-4">
                <h3 className="text-3xl font-black uppercase">{exp.title}</h3>
                <span className="font-[family-name:var(--font-mono)] font-bold bg-neo-black text-white px-2 py-1 mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>
              <p className={`font-[family-name:var(--font-mono)] text-xl mb-2 ${exp.companyColor} font-bold`}>
                @ {exp.company}
              </p>
              <ul className="list-disc list-inside font-[family-name:var(--font-mono)] text-gray-700 space-y-1">
                {exp.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
