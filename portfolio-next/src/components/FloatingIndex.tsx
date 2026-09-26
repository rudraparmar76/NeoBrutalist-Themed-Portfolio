"use client";

import { useEffect, useState } from "react";

const navItems = [
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "github", label: "GitHub" },
];

export default function FloatingIndex() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside className="hidden xl:flex fixed left-[calc(50%+400px)] top-[26vh] z-30 flex-col gap-2.5 font-code text-xs select-none">
      <div className="text-[10px] tracking-widest text-[var(--soft)] uppercase font-medium mb-1">
        INDEX
      </div>
      {navItems.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className={`text-left transition-all duration-200 flex items-center gap-1.5 ${
              isActive
                ? "text-[var(--fg)] font-semibold translate-x-1"
                : "text-[var(--muted)] hover:text-[var(--fg)]"
            }`}
          >
            {isActive && <span className="text-[var(--fg)] font-bold">—</span>}
            <span>{item.label}</span>
          </button>
        );
      })}
    </aside>
  );
}
