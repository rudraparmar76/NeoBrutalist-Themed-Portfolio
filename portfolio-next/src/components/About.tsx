"use client";

import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

export default function About() {
  return (
    <section id="about" className="py-24 px-4 max-w-7xl mx-auto border-x-4 border-black bg-white my-12 shadow-hard-lg">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Avatar */}
        <RevealOnScroll className="md:col-span-4">
          <div className="aspect-square bg-gray-200 border-4 border-black relative shadow-hard overflow-hidden group">
            <Image
              src="/Assets/images/img3.jpg"
              alt="Rudra Parmar"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <span className="absolute top-2 left-2 bg-neo-red text-white px-2 font-[family-name:var(--font-mono)] text-xs border border-black z-10">
              AVATAR.JPG
            </span>
          </div>
        </RevealOnScroll>

        {/* Info */}
        <RevealOnScroll className="md:col-span-8 flex flex-col justify-center" delay={0.15}>
          <h2 className="text-6xl font-black uppercase mb-6">Who am I?</h2>
          <p className="font-[family-name:var(--font-mono)] text-xl leading-relaxed mb-6">
            I am Rudra Parmar. A full-stack developer who builds{" "}
            <span className="bg-neo-yellow px-1 border border-black">production-ready platforms</span> with scalable
            backends and secure architectures.
          </p>
          <p className="font-[family-name:var(--font-mono)] text-lg mb-8 text-gray-600 border-l-4 border-neo-purple pl-4">
            &gt; Specialized in scalable backend systems &amp; secure API architectures.
            <br />
            &gt; National hackathon finalist (Top 28 — Quasar 4.0).
            <br />
            &gt; 1x Hackathon Winner & 2x Intra-collegiate coding competition winner 
            <br/>
            &gt; B.Tech IT @ DJ Sanghvi | SGPA: 9.10
          </p>

          <div className="flex gap-4 flex-wrap">
            <div className="bg-neo-black text-white px-4 py-2 font-[family-name:var(--font-mono)] text-sm border-2 border-transparent">
              📍 LOCATION: MUMBAI, INDIA
            </div>
            <div className="bg-neo-green text-black px-4 py-2 font-[family-name:var(--font-mono)] text-sm border-2 border-black">
              🟢 STATUS: AVAILABLE
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
