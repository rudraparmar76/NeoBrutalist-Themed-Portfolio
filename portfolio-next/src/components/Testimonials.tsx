"use client";

import { RiStarFill } from "react-icons/ri";

interface Testimonial {
  id: string;
  accentColor: string;
  borderHover: string;
  textColor: string;
  starsColor: string;
  from: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: "001",
    accentColor: "bg-neo-green",
    borderHover: "hover:border-neo-green/50",
    textColor: "text-neo-green",
    starsColor: "text-neo-green/60",
    from: "Teammate @ Quasar 4.0",
    text: "\"Rudra delivered a full-stack adaptive learning platform under insane pressure. National Top 28 — no surprise.\"",
  },
  {
    id: "002",
    accentColor: "bg-neo-blue",
    borderHover: "hover:border-neo-blue/50",
    textColor: "text-neo-blue",
    starsColor: "text-neo-blue/60",
    from: "CEO @ Alpha Consultancy",
    text: "\"Fast, reliable, and actually has good taste in design. A rare combination.\"",
  },
  {
    id: "003",
    accentColor: "bg-neo-pink",
    borderHover: "hover:border-neo-pink/50",
    textColor: "text-neo-pink",
    starsColor: "text-neo-pink/60",
    from: "Peer @ DJ Sanghvi",
    text: "\"Cleanest code I've seen in years. His backend architecture and API design are production-grade.\"",
  },
  {
    id: "004",
    accentColor: "bg-neo-purple",
    borderHover: "hover:border-neo-purple/50",
    textColor: "text-neo-purple",
    starsColor: "text-neo-purple/60",
    from: "Dev @ CreativeChaos",
    text: "\"Creative designing idea and provided a Unique UI experience.\"",
  },
  {
    id: "005",
    accentColor: "bg-neo-orange",
    borderHover: "hover:border-neo-orange/50",
    textColor: "text-neo-orange",
    starsColor: "text-neo-orange/60",
    from: "UX Designer @ TechFlow",
    text: "\"Highly intuitive UX. Delivered exactly what we needed before we even knew we needed it.\"",
  },
];

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div
      className={`flex-shrink-0 w-[450px] bg-neo-black border-4 border-white/10 p-8 shadow-hard ${t.borderHover} hover:-translate-y-2 transition-all duration-500 relative overflow-hidden text-left whitespace-normal`}
    >
      <div className={`absolute top-0 left-0 w-full h-1 ${t.accentColor}`} />
      <div className="absolute -top-4 -right-4 w-12 h-12 bg-white/5 rotate-45" />
      <div className="flex justify-between items-start mb-6">
        <div className={`font-[family-name:var(--font-mono)] ${t.textColor} text-xs font-bold tracking-widest uppercase`}>
          REPORT_{t.id}.log
        </div>
        <div className="text-[10px] font-[family-name:var(--font-mono)] text-gray-500">2025.txt</div>
      </div>
      <div className="font-[family-name:var(--font-mono)] text-gray-400 text-[10px] mb-2 uppercase tracking-tight">
        FROM: {t.from}
      </div>
      <p className="font-bold text-xl leading-snug mb-6 text-white/90">{t.text}</p>
      <div className={`flex ${t.starsColor} gap-1 text-lg`}>
        {[...Array(5)].map((_, i) => (
          <RiStarFill key={i} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="reports" className="py-24 bg-neo-black border-t-4 border-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-2 mb-16 bg-white/5 border-2 border-white/10 p-4 inline-flex shadow-hard shadow-neo-blue/20">
          <div className="flex gap-2">
            <div className="h-3 w-3 bg-red-500 rounded-full border border-black" />
            <div className="h-3 w-3 bg-yellow-500 rounded-full border border-black" />
            <div className="h-3 w-3 bg-green-500 rounded-full border border-black" />
          </div>
          <h2 className="font-[family-name:var(--font-mono)] text-white text-xl font-bold ml-4 tracking-tighter">
            USER_REPORTS.txt
          </h2>
          <div className="ml-8 px-2 bg-neo-blue text-black text-[10px] font-black uppercase">LIVE_FEED</div>
        </div>
      </div>

      <div className="marquee-container cursor-hover">
        <div className="marquee-content flex gap-8 py-12 px-4 select-none">
          {/* First set */}
          {testimonials.map((t, i) => (
            <TestimonialCard key={`a-${i}`} t={t} />
          ))}
          {/* Duplicate set for seamless loop */}
          {testimonials.map((t, i) => (
            <TestimonialCard key={`b-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
