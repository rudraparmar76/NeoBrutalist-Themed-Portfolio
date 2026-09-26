"use client";

import { useState, useMemo, useEffect } from "react";
import { FiExternalLink } from "react-icons/fi";
import initialGithubData from "../data/github-contributions.json";

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface GithubData {
  total: Record<string, number>;
  contributions: ContributionDay[];
}

export default function GitHubActivity() {
  const [selectedYear, setSelectedYear] = useState<"2026" | "2025" | "2024" | "2023">("2026");
  const [data, setData] = useState<GithubData>(initialGithubData as unknown as GithubData);
  const [isLoading, setIsLoading] = useState(false);

  const years = ["2026", "2025", "2024", "2023"] as const;

  // Fetch real-time data on client mount to stay fresh
  useEffect(() => {
    let isMounted = true;
    const fetchLatest = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("https://github-contributions-api.jogruber.de/v4/rudraparmar76?y=all");
        if (res.ok) {
          const json = await res.json();
          if (isMounted && json?.total && json?.contributions) {
            setData(json);
          }
        }
      } catch {
        // Silently keep using the bundled real data
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    fetchLatest();
    return () => {
      isMounted = false;
    };
  }, []);

  // Compute 7-day columns (weeks) for the selected year from real contribution data
  const activityData = useMemo(() => {
    const list = (data.contributions || []).filter((c) =>
      c.date.startsWith(selectedYear)
    );
    list.sort((a, b) => a.date.localeCompare(b.date));

    if (list.length === 0) return { weeks: [], total: 0 };

    const weeks: ContributionDay[][] = [];
    let currentWeek: ContributionDay[] = [];

    // Pad beginning of the year so Jan 1 aligns to its day of week (0 = Sun, 6 = Sat)
    const firstDate = new Date(list[0].date + "T00:00:00Z");
    const startDay = firstDate.getUTCDay();
    for (let i = 0; i < startDay; i++) {
      currentWeek.push({ date: "", count: 0, level: -1 });
    }

    for (const day of list) {
      currentWeek.push(day);
      if (currentWeek.length === 7) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
    }

    // Pad trailing days to complete final week
    if (currentWeek.length > 0) {
      while (currentWeek.length < 7) {
        currentWeek.push({ date: "", count: 0, level: -1 });
      }
      weeks.push(currentWeek);
    }

    const total =
      data.total?.[selectedYear] ??
      list.reduce((acc, cur) => acc + (cur.count || 0), 0);

    return { weeks, total };
  }, [selectedYear, data]);

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const getColorClass = (level: number) => {
    switch (level) {
      case 1:
        return "bg-neutral-800 dark:bg-neutral-800 border border-neutral-700/60";
      case 2:
        return "bg-neutral-600 dark:bg-neutral-600 border border-neutral-500/60";
      case 3:
        return "bg-neutral-400 dark:bg-neutral-400 border border-neutral-300/60";
      case 4:
        return "bg-neutral-100 dark:bg-neutral-100 border border-neutral-200";
      case 0:
        return "bg-neutral-200/50 dark:bg-neutral-900/60 border border-neutral-300/50 dark:border-neutral-800/60";
      default:
        return "opacity-0 pointer-events-none";
    }
  };

  return (
    <section id="github" className="px-4 sm:px-6 py-8">
      {/* Title & Link */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-serif-title text-3xl sm:text-4xl text-[var(--fg)] tracking-tight">
          GitHub Activity
        </h2>
        <a
          href="https://github.com/rudraparmar76"
          target="_blank"
          rel="noopener noreferrer"
          className="font-code text-xs text-[var(--muted)] hover:text-[var(--fg)] flex items-center gap-1 group transition-colors"
        >
          <span>@rudraparmar76</span>
          <FiExternalLink className="text-xs group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>

      {/* Year Selector Tabs */}
      <div className="flex justify-end gap-1 mb-4 font-code text-xs">
        {years.map((y) => (
          <button
            key={y}
            onClick={() => setSelectedYear(y)}
            className={`px-2.5 py-1 rounded-md border transition-all cursor-pointer ${
              selectedYear === y
                ? "bg-[var(--fg)] text-[var(--bg)] border-[var(--fg)] font-medium"
                : "bg-[var(--card)] text-[var(--muted)] border-[var(--line)] hover:text-[var(--fg)] hover:border-[var(--line-strong)]"
            }`}
          >
            {y}
          </button>
        ))}
      </div>

      {/* Heatmap Box */}
      <div className="border border-[var(--line)] rounded-xl p-4 sm:p-5 bg-[var(--card)] overflow-x-auto">
        {/* Months Bar */}
        <div className="flex justify-between font-code text-[10px] text-[var(--soft)] mb-2 min-w-[620px] px-1">
          {months.map((m) => (
            <span key={m}>{m}</span>
          ))}
        </div>

        {/* 52+ Columns Grid */}
        <div className="flex gap-[3px] min-w-[620px]">
          {activityData.weeks.map((week, wIdx) => (
            <div key={wIdx} className="flex flex-col gap-[3px]">
              {week.map((day, dIdx) => (
                <div
                  key={dIdx}
                  title={
                    day.date
                      ? `${day.count} ${day.count === 1 ? "contribution" : "contributions"} on ${day.date}`
                      : ""
                  }
                  className={`w-2.5 h-2.5 rounded-[2px] transition-all hover:scale-125 hover:z-10 ${getColorClass(
                    day.level
                  )}`}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Bottom Legend & Total */}
        <div className="flex items-center justify-between font-code text-[11px] text-[var(--muted)] mt-4 pt-3 border-t border-[var(--line)] min-w-[620px]">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[var(--fg)]">
              {activityData.total.toLocaleString()}
            </span>
            <span>contributions in {selectedYear}</span>
            {isLoading && (
              <span className="text-[10px] text-[var(--soft)] animate-pulse">
                (syncing live...)
              </span>
            )}
          </div>
          <div className="flex items-center gap-1.5 text-[10px]">
            <span>Less</span>
            <div className="w-2.5 h-2.5 rounded-[2px] bg-neutral-900 border border-neutral-800" />
            <div className="w-2.5 h-2.5 rounded-[2px] bg-neutral-800 border border-neutral-700/60" />
            <div className="w-2.5 h-2.5 rounded-[2px] bg-neutral-600 border border-neutral-500/60" />
            <div className="w-2.5 h-2.5 rounded-[2px] bg-neutral-400 border border-neutral-300/60" />
            <div className="w-2.5 h-2.5 rounded-[2px] bg-neutral-100 border border-neutral-200" />
            <span>More</span>
          </div>
        </div>
      </div>
    </section>
  );
}
