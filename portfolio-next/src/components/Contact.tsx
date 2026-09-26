"use client";

import { useState, useRef } from "react";
import {
  RiGithubFill,
  RiLinkedinFill,
  RiTwitterXFill,
  RiMailLine,
  RiCodeSSlashLine,
  RiSendPlaneLine,
  RiFileTextLine,
} from "react-icons/ri";
import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/rudraparmar76",
    icon: RiGithubFill,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/rudra-parmar-089125245/",
    icon: RiLinkedinFill,
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: RiTwitterXFill,
  },
  {
    name: "Mail",
    href: "mailto:rudraparmar1309@gmail.com",
    icon: RiMailLine,
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/Rudraa76/",
    icon: RiCodeSSlashLine,
  },
];

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      if (formRef.current) {
        await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
          publicKey: PUBLIC_KEY,
        });
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
        return;
      }
    } catch {
      // Fallback: mailto
      const subject = `Project Inquiry from ${formData.name}`;
      const body = `${formData.message}\n\nFrom: ${formData.email}`;
      window.location.href = `mailto:rudraparmar1309@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="px-4 sm:px-6 py-8">
      {/* Title */}
      <div className="flex items-center justify-between gap-3 mb-5 flex-wrap">
        <h2 className="font-serif-title text-3xl sm:text-4xl text-[var(--fg)] tracking-tight">
          Contact
        </h2>
        <a
          href="/Assets/Resume/Rudra_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-[var(--line)] bg-[var(--card)] hover:bg-[var(--hover)] hover:border-[var(--line-strong)] text-[var(--fg)] text-xs font-code transition-all group shadow-sm"
        >
          <RiFileTextLine className="text-sm text-[var(--muted)] group-hover:text-[var(--fg)] transition-colors" />
          <span>View Resume</span>
          <span className="text-[var(--soft)] group-hover:text-[var(--fg)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-xs">
            ↗
          </span>
        </a>
      </div>

      {/* Social Links Grid */}
      <div className="border border-[var(--line)] rounded-xl overflow-hidden grid grid-cols-2 sm:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-[var(--line)] bg-[var(--card)]">
        {socials.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:py-3.5 flex items-center justify-between sm:justify-center gap-2 hover:bg-[var(--hover)] transition-colors group text-[var(--fg)] text-xs font-code"
            >
              <div className="flex items-center gap-2">
                <Icon className="text-base text-[var(--muted)] group-hover:text-[var(--fg)] transition-colors" />
                <span>{social.name}</span>
              </div>
              <span className="text-[var(--soft)] group-hover:text-[var(--fg)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-xs">
                ↗
              </span>
            </a>
          );
        })}
      </div>

      {/* Action Row */}
      <div className="mt-4 grid grid-cols-1 gap-3">
        {/* <a
          href="/Assets/Resume/Rudra_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="py-2.5 px-4 rounded-xl border border-[var(--line)] hover:border-[var(--line-strong)] text-[var(--fg)] text-xs font-code transition-colors flex items-center justify-center gap-2 bg-[var(--card)] hover:bg-[var(--hover)] group"
        >
          <RiFileTextLine className="text-sm text-[var(--muted)] group-hover:text-[var(--fg)] transition-colors" />
          <span>View Resume (PDF)</span>
          <span className="text-[var(--soft)] group-hover:text-[var(--fg)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
            ↗
          </span>
        </a> */}

        {!showForm ? (
          <button
            onClick={() => setShowForm(true)}
            className="py-2.5 px-4 rounded-xl border border-dashed border-[var(--line)] hover:border-[var(--line-strong)] text-[var(--muted)] hover:text-[var(--fg)] text-xs font-code transition-colors flex items-center justify-center gap-2 bg-[var(--card-subtle)]"
          >
            <RiSendPlaneLine />
            <span>Send a quick message...</span>
          </button>
        ) : (
          <button
            onClick={() => setShowForm(false)}
            className="py-2.5 px-4 rounded-xl border border-[var(--line)] text-[var(--muted)] hover:text-[var(--fg)] text-xs font-code transition-colors flex items-center justify-center gap-2 bg-[var(--card-subtle)]"
          >
            <span>Close transmission form ×</span>
          </button>
        )}
      </div>

      {/* Direct Transmission Form */}
      {showForm && (
        <div className="mt-3">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="p-4 sm:p-5 rounded-xl border border-[var(--line)] bg-[var(--card)] space-y-3.5 animate-in fade-in duration-200"
          >
            <div className="flex items-center justify-between border-b border-[var(--line)] pb-2 mb-3">
              <span className="font-code text-xs font-medium text-[var(--fg)]">
                Direct Transmission
              </span>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="font-code text-[11px] text-[var(--soft)] hover:text-[var(--fg)]"
              >
                Close ×
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans">
              <div>
                <label className="block font-code text-[10px] uppercase tracking-wider text-[var(--muted)] mb-1">
                  Name / Identifier
                </label>
                <input
                  name="name_company"
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[var(--chip)] border border-[var(--line)] rounded-lg px-3 py-2 text-xs text-[var(--fg)] placeholder:text-[var(--soft)] outline-none focus:border-[var(--fg)] transition-colors"
                />
              </div>

              <div>
                <label className="block font-code text-[10px] uppercase tracking-wider text-[var(--muted)] mb-1">
                  Return Coordinate (Email)
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[var(--chip)] border border-[var(--line)] rounded-lg px-3 py-2 text-xs text-[var(--fg)] placeholder:text-[var(--soft)] outline-none focus:border-[var(--fg)] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block font-code text-[10px] uppercase tracking-wider text-[var(--muted)] mb-1">
                Message Content
              </label>
              <textarea
                name="project_details"
                rows={3}
                required
                placeholder="Share project goals, ideas, or questions..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[var(--chip)] border border-[var(--line)] rounded-lg px-3 py-2 text-xs text-[var(--fg)] placeholder:text-[var(--soft)] outline-none focus:border-[var(--fg)] transition-colors resize-none font-sans"
              />
            </div>

            <div className="flex items-center justify-between pt-1">
              <span className="font-code text-[10px] text-[var(--soft)]">
                Encrypted via EmailJS
              </span>
              <button
                type="submit"
                disabled={status === "sending"}
                className="px-4 py-2 rounded-lg bg-[var(--fg)] text-[var(--bg)] font-code text-xs font-medium hover:opacity-90 transition-opacity flex items-center gap-1.5"
              >
                {status === "sending" ? (
                  "Sending..."
                ) : status === "sent" ? (
                  "✓ Message Sent"
                ) : (
                  <>
                    <span>Transmit</span>
                    <RiSendPlaneLine className="text-xs" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      )}
    </section>
  );
}
