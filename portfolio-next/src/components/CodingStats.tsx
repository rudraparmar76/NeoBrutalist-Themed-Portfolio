"use client";

import { useEffect, useState } from "react";
import { RiGithubFill, RiTrophyFill, RiGraduationCapFill, RiCodeBoxFill } from "react-icons/ri";
import RevealOnScroll from "./RevealOnScroll";

interface GitHubData {
  public_repos: number;
  followers: number;
  created_at: string;
}

const GITHUB_USERNAME = "rudraparmar76";
const LEETCODE_USERNAME = "Rudraa76";

export default function CodingStats() {
  const [githubData, setGithubData] = useState<GitHubData | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchGitHubStats() {
      try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
          headers: { Accept: "application/vnd.github.v3+json" },
        });
        if (!response.ok) throw new Error("API error");
        const data = await response.json();
        setGithubData(data);
      } catch {
        setError(true);
      }
    }
    fetchGitHubStats();
  }, []);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
  };

  const contribValue = githubData
    ? `${githubData.public_repos * 20 + githubData.followers * 5}+`
    : error
    ? "ERR"
    : "--";

  return (
    <section id="coding-stats" className="py-12 bg-neo-black text-white border-y-4 border-black relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 border-b-2 border-white pb-3">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-white tracking-tight">
            CODING<span className="text-neo-green">_STATS</span>
          </h2>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <p className="font-[family-name:var(--font-mono)] text-neo-green text-xs font-bold">LIVE</p>
          </div>
        </div>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:auto-rows-fr">
          {/* GitHub Column */}
          <RevealOnScroll className="flex flex-col h-full">
            <div className="flex items-center gap-2 mb-4 border-b border-white/20 pb-2">
              <div className="w-8 h-8 bg-neo-green border-2 border-white flex items-center justify-center">
                <RiGithubFill className="text-lg text-black" />
              </div>
              <h3 className="text-2xl font-black uppercase text-white">GITHUB</h3>
            </div>

            <div className="border-4 border-white/20 p-6 bg-black flex-1 flex flex-col shadow-[8px_8px_0_rgba(0,0,0,1)] relative group">
              {/* Profile Header */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <RiGithubFill className="text-3xl text-neo-green" />
                  <div>
                    <h4 className="text-xl font-black text-white leading-tight">{GITHUB_USERNAME}</h4>
                    <p className="text-[10px] font-[family-name:var(--font-mono)] text-neo-green uppercase tracking-widest">
                      Full Stack Architect
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-neo-green tracking-tighter">{contribValue}</div>
                  <p className="text-[8px] font-[family-name:var(--font-mono)] text-gray-500 uppercase">Commits</p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8 uppercase">
                <div className="border-2 border-neo-green/30 bg-neo-black/60 p-4 hover:border-neo-green transition-colors shadow-[4px_4px_0_rgba(51,255,87,0.1)]">
                  <div className="text-[9px] font-[family-name:var(--font-mono)] text-neo-green mb-1 uppercase tracking-widest opacity-70">
                    Repositories
                  </div>
                  <div className="text-white font-black text-3xl tracking-tighter">
                    {githubData?.public_repos ?? (error ? "ERR" : "--")}
                  </div>
                </div>
                <div className="border-2 border-neo-green/30 bg-neo-black/60 p-4 hover:border-neo-green transition-colors shadow-[4px_4px_0_rgba(51,255,87,0.1)]">
                  <div className="text-[9px] font-[family-name:var(--font-mono)] text-neo-green mb-1 uppercase tracking-widest opacity-70">
                    Followers
                  </div>
                  <div className="text-white font-black text-3xl tracking-tighter">
                    {githubData?.followers ?? (error ? "ERR" : "--")}
                  </div>
                </div>
                <div className="border-2 border-neo-green/30 bg-neo-black/60 p-4 hover:border-neo-green transition-colors shadow-[4px_4px_0_rgba(51,255,87,0.1)]">
                  <div className="text-[9px] font-[family-name:var(--font-mono)] text-neo-green mb-1 uppercase tracking-widest opacity-70">
                    Commits
                  </div>
                  <div className="text-white font-black text-3xl tracking-tighter">{contribValue}</div>
                </div>
                <div className="border-2 border-neo-green/30 bg-neo-black/60 p-4 hover:border-neo-green transition-colors shadow-[4px_4px_0_rgba(51,255,87,0.1)]">
                  <div className="text-[9px] font-[family-name:var(--font-mono)] text-neo-green mb-1 uppercase tracking-widest opacity-70">
                    Joined
                  </div>
                  <div className="text-white font-black text-xl tracking-tighter mt-1 leading-none">
                    {githubData ? formatDate(githubData.created_at) : error ? "N/A" : "--"}
                  </div>
                </div>
              </div>

              {/* Activity Graph */}
              <div className="flex-1 flex flex-col justify-center mb-8">
                <div className="bg-black border-2 border-neo-green/30 p-2 overflow-hidden shadow-[4px_4px_0_rgba(51,255,87,0.1)] group hover:border-neo-green transition-colors duration-500 relative">
                  <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-neo-green rounded-full animate-pulse" />
                  <p className="text-[8px] font-[family-name:var(--font-mono)] text-neo-green/50 uppercase tracking-[0.2em] mb-1">
                    Matrix_Output
                  </p>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://ghchart.rshah.org/33FF57/${GITHUB_USERNAME}`}
                    alt="GitHub Contribution Graph"
                    className="w-full h-auto filter brightness-110"
                  />
                </div>
              </div>

              {/* Footer */}
              <div className="mt-auto flex items-center justify-between text-neo-green p-3 border-2 border-white/10 bg-neo-black font-[family-name:var(--font-mono)] text-[11px]">
                <div className="flex items-center gap-2">
                  <span className="text-white/30">$</span>
                  <span className="text-neo-green">gh --stats</span>
                  <span className="animate-pulse">_</span>
                </div>
                <a
                  href={`https://github.com/${GITHUB_USERNAME}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neo-green px-3 py-1 font-black uppercase border border-neo-green hover:bg-neo-green hover:text-black transition-all"
                >
                  VIEW_GH →
                </a>
              </div>
            </div>
          </RevealOnScroll>

          {/* Education & Achievements Column */}
          <RevealOnScroll className="flex flex-col h-full" delay={0.15}>
            <div className="flex items-center gap-2 mb-4 border-b border-white/20 pb-2">
              <div className="w-8 h-8 bg-neo-orange border-2 border-white flex items-center justify-center">
                <RiGraduationCapFill className="text-lg text-black" />
              </div>
              <h3 className="text-2xl font-black uppercase text-white">CREDENTIALS</h3>
            </div>

            <div className="border-4 border-white/20 p-6 bg-black flex-1 flex flex-col shadow-[8px_8px_0_rgba(0,0,0,1)] relative group">
              {/* Education Section */}
              <div className="mb-8 pb-6 border-b border-white/10">
                <div className="flex items-center gap-2 mb-4">
                  <RiGraduationCapFill className="text-2xl text-neo-orange" />
                  <h4 className="text-lg font-black text-white uppercase tracking-wider">Education</h4>
                </div>

                <div className="space-y-6">
                  <div className="border-2 border-neo-orange/30 bg-neo-black/60 p-4 hover:border-neo-orange transition-colors shadow-[4px_4px_0_rgba(255,159,28,0.1)]">
                    <div className="text-[9px] font-[family-name:var(--font-mono)] text-neo-orange mb-1 uppercase tracking-widest opacity-70">
                      2025 – 2028
                    </div>
                    <div className="text-white font-black text-lg leading-tight">
                      B.Tech in Information Technology
                    </div>
                    <div className="text-gray-400 font-[family-name:var(--font-mono)] text-xs mt-1">
                      DJ Sanghvi College of Engineering
                    </div>
                    <div className="mt-2 inline-block bg-neo-green/20 text-neo-green px-2 py-0.5 font-[family-name:var(--font-mono)] text-xs font-bold border border-neo-green/30">
                      SGPA: 9.10
                    </div>
                  </div>

                  <div className="border-2 border-neo-orange/30 bg-neo-black/60 p-4 hover:border-neo-orange transition-colors shadow-[4px_4px_0_rgba(255,159,28,0.1)]">
                    <div className="text-[9px] font-[family-name:var(--font-mono)] text-neo-orange mb-1 uppercase tracking-widest opacity-70">
                      2022 – 2025
                    </div>
                    <div className="text-white font-black text-lg leading-tight">
                      Diploma in Computer Science
                    </div>
                    <div className="text-gray-400 font-[family-name:var(--font-mono)] text-xs mt-1">
                      Bhagubhai Mafatlal Polytechnic
                    </div>
                    <div className="mt-2 inline-block bg-neo-green/20 text-neo-green px-2 py-0.5 font-[family-name:var(--font-mono)] text-xs font-bold border border-neo-green/30">
                      GPA: 9.54
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievements Section */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <RiTrophyFill className="text-2xl text-neo-yellow" />
                  <h4 className="text-lg font-black text-white uppercase tracking-wider">Achievements</h4>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 border-2 border-neo-yellow/20 bg-neo-black/60 p-3 hover:border-neo-yellow transition-colors shadow-[4px_4px_0_rgba(251,255,72,0.05)]">
                    <span className="text-neo-yellow font-black text-lg mt-0.5">🏆</span>
                    <div>
                      <div className="text-white font-bold text-sm leading-tight">
                        National Top 28 — Quasar 4.0 Hackathon
                      </div>
                      <div className="text-gray-500 font-[family-name:var(--font-mono)] text-[10px] mt-1">
                        Scalable full-stack adaptive learning platform
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 border-2 border-neo-yellow/20 bg-neo-black/60 p-3 hover:border-neo-yellow transition-colors shadow-[4px_4px_0_rgba(251,255,72,0.05)]">
                    <span className="text-neo-yellow font-black text-lg mt-0.5">🥇</span>
                    <div>
                      <div className="text-white font-bold text-sm leading-tight">
                        State-Level Hackathon Winner
                      </div>
                      <div className="text-gray-500 font-[family-name:var(--font-mono)] text-[10px] mt-1">
                        Real-time AI driving analytics system
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 border-2 border-neo-yellow/20 bg-neo-black/60 p-3 hover:border-neo-yellow transition-colors shadow-[4px_4px_0_rgba(251,255,72,0.05)]">
                    <span className="text-neo-yellow font-black text-lg mt-0.5">⚡</span>
                    <div>
                      <div className="text-white font-bold text-sm leading-tight">
                        Active Competitive Participant
                      </div>
                      <div className="text-gray-500 font-[family-name:var(--font-mono)] text-[10px] mt-1">
                        4+ hackathon events completed
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-6 flex items-center justify-between text-neo-orange p-3 border-2 border-white/10 bg-neo-black font-[family-name:var(--font-mono)] text-[11px]">
                <div className="flex items-center gap-2">
                  <span className="text-white/30">$</span>
                  <span className="text-neo-orange">credentials --verify</span>
                  <span className="animate-pulse">_</span>
                </div>
                <span className="text-neo-green font-black uppercase">VERIFIED ✓</span>
              </div>
            </div>
          </RevealOnScroll>

          {/* LeetCode Column */}
          <RevealOnScroll className="flex flex-col h-full" delay={0.3}>
            <div className="flex items-center gap-2 mb-4 border-b border-white/20 pb-2">
              <div className="w-8 h-8 bg-neo-yellow border-2 border-white flex items-center justify-center">
                <RiCodeBoxFill className="text-lg text-black" />
              </div>
              <h3 className="text-2xl font-black uppercase text-white">LEETCODE</h3>
            </div>

            <div className="border-4 border-white/20 p-6 bg-black flex-1 flex flex-col shadow-[8px_8px_0_rgba(0,0,0,1)] relative group">
              {/* Profile Header */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <RiCodeBoxFill className="text-3xl text-neo-yellow" />
                  <div>
                    <h4 className="text-xl font-black text-white leading-tight">{LEETCODE_USERNAME}</h4>
                    <p className="text-[10px] font-[family-name:var(--font-mono)] text-neo-yellow uppercase tracking-widest">
                      Problem Solver
                    </p>
                  </div>
                </div>
                {/* <div className="text-right">
                  <div className="text-2xl font-black text-neo-yellow tracking-tighter">#Top</div>
                  <p className="text-[8px] font-[family-name:var(--font-mono)] text-gray-500 uppercase">Ranking</p>
                </div> */}
              </div>

              {/* LeetCode Stats Card */}
              <div className="flex-1 flex flex-col justify-center mb-8">
                <div className="border-2 border-neo-yellow/30 p-2 overflow-hidden bg-black shadow-[4px_4px_0_rgba(251,255,72,0.1)] group hover:border-neo-yellow transition-colors duration-500 relative">
                  <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-neo-yellow rounded-full animate-pulse" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://leetcard.jacoblin.cool/${LEETCODE_USERNAME}?theme=dark&font=Ubuntu&ext=heatmap`}
                    alt="LeetCode Stats"
                    className="w-full h-auto object-contain filter contrast-125"
                  />
                </div>
              </div>

              {/* Footer */}
              <div className="mt-auto flex items-center justify-between text-neo-yellow p-3 border-2 border-white/10 bg-neo-black font-[family-name:var(--font-mono)] text-[11px]">
                <div className="flex items-center gap-2">
                  <span className="text-white/30">$</span>
                  <span className="text-neo-yellow">leetcode --u</span>
                  <span className="animate-pulse">_</span>
                </div>
                <a
                  href={`https://leetcode.com/u/${LEETCODE_USERNAME}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neo-yellow px-3 py-1 font-black uppercase border border-neo-yellow hover:bg-neo-yellow hover:text-black transition-all"
                >
                  VIEW_LC →
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
