"use client";

import { motion } from "framer-motion";
import { RiDownloadLine } from "react-icons/ri";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 pt-20 relative overflow-hidden border-b-4 border-black">
      {/* Decorative Elements */}
      <div className="absolute top-1/3 left-[10%] w-16 h-16 bg-neo-blue border-4 border-black shadow-hard animate-bounce hidden lg:block rotate-12" />
      <div className="absolute bottom-1/3 right-[10%] w-24 h-24 bg-neo-pink rounded-full border-4 border-black shadow-hard hidden lg:block animate-pulse" />
      <div className="absolute top-20 right-20 text-[150px] opacity-5 font-black select-none pointer-events-none">
        CODE
      </div>

      <div className="relative z-10 text-center max-w-5xl">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-block bg-neo-white border-2 border-black px-4 py-1 mb-6 shadow-hard -rotate-2"
        >
          <span className="font-[family-name:var(--font-mono)] font-bold text-neo-green bg-black px-2 mr-2">●</span>
          <span className="font-[family-name:var(--font-mono)] font-bold">SYSTEM STATUS: ONLINE</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="text-[13vw] md:text-[10vw] leading-[0.8] font-black uppercase tracking-tighter mb-6 mix-blend-darken"
        >
          FULL STACK
          <br />
          <span className="text-white text-stroke-black">DEVELOPER</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="font-[family-name:var(--font-mono)] text-lg md:text-2xl max-w-2xl mx-auto mb-10 bg-neo-yellow border-2 border-black p-4 shadow-hard rotate-1"
        >
          Scalable backends. Secure APIs. Responsive interfaces.
          <br />
          <b>React • Python • Firebase • System Design</b>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col md:flex-row justify-center gap-6"
        >
          <a
            href="#projects"
            className="bg-black text-white border-2 border-black px-10 py-5 mb-4 text-xl font-bold shadow-hard hover:bg-neo-green hover:text-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
          >
            VIEW DATABASE
          </a>
          <a
            href="/Assets/Resume/Rudra_Resume.pdf"
            download
            className="bg-neo-white text-black border-2 border-black px-10 py-5 mb-4 text-xl font-bold shadow-hard hover:bg-neo-pink hover:text-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-2"
          >
            <RiDownloadLine /> DOWNLOAD CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}
