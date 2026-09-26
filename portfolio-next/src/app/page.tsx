"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import FloatingIndex from "@/components/FloatingIndex";
import CommandPalette from "@/components/CommandPalette";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import StatsAndSkills from "@/components/StatsAndSkills";
import GitHubActivity from "@/components/GitHubActivity";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
import ClickSpark from "@/components/reactbits/ClickSpark";

export default function Home() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  return (
    <ClickSpark sparkColor="rgba(255, 255, 255, 0.4)" sparkCount={6} sparkRadius={16}>
      <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)] relative selection:bg-[var(--fg)] selection:text-[var(--bg)]">
        {/* Sticky Top Navbar */}
        <Navbar onOpenCommandPalette={() => setIsCommandPaletteOpen(true)} />

        {/* Floating Side Index (xl screens) */}
        <FloatingIndex />

        {/* Command Palette Modal */}
        <CommandPalette
          isOpen={isCommandPaletteOpen}
          onClose={() => setIsCommandPaletteOpen(false)}
        />

        {/* Main Central Column bounded by Dashed Borders */}
        <main className="max-w-[760px] mx-auto border-x border-dashed border-[var(--line)] bg-[var(--bg)] relative">
          {/* Hero Section */}
          <Hero onOpenCommandPalette={() => setIsCommandPaletteOpen(true)} />

          <SectionDivider />

          {/* About Section */}
          <About />

          <SectionDivider />

          {/* Contact Section */}
          <Contact />

          <SectionDivider />

          {/* Projects Section */}
          <Projects />

          <SectionDivider />

          {/* Experience Section */}
          <Experience />

          <SectionDivider />

          {/* Stats & Skills Section */}
          <StatsAndSkills />

          <SectionDivider />

          {/* GitHub Activity Heatmap Section */}
          <GitHubActivity />

          <SectionDivider />

          {/* Footer */}
          <Footer />
        </main>
      </div>
    </ClickSpark>
  );
}
