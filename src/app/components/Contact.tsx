"use client";

import { useState } from "react";
import { Check, Copy, Mail, MapPin, Send } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export default function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback if clipboard API fails
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="py-24 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative rounded-3xl border border-neutral-800 bg-gradient-to-b from-neutral-900/60 to-neutral-950 p-8 sm:p-14 overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="max-w-2xl">
            <span className="text-emerald-500 font-mono text-sm tracking-wider uppercase">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-100 mt-2">
              Let&apos;s build something exceptional together.
            </h2>
            <p className="mt-4 text-neutral-400 text-base leading-relaxed">
              I am open to full-time roles, software engineering opportunities, and collaborative initiatives. Whether you have a project in mind or just want to connect, my inbox is always open.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-neutral-100 text-neutral-950 font-semibold text-sm hover:bg-white transition-all shadow-sm active:scale-[0.98]"
              >
                Send an Email
                <Send className="w-4 h-4" />
              </a>

              {/* Copy Email Button */}
              <button
                type="button"
                onClick={copyToClipboard}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-neutral-800 bg-neutral-900/80 text-neutral-300 font-medium text-sm hover:bg-neutral-800 hover:text-white transition-all active:scale-[0.98]"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Copied to clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-neutral-400" />
                    <span>{personal.email}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <footer className="mt-16 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-neutral-500" />
            <span>Designed & Engineered in {personal.location}</span>
          </div>
        </footer>
      </div>
    </section>
  );
}