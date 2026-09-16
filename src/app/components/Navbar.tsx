"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link 
          href="#hero" 
          className="text-lg font-bold tracking-tight text-neutral-100 hover:text-white transition-colors"
        >
          {portfolioData.personal.name.split(" ")[0]}
          <span className="text-emerald-500">.</span>
        </Link>

        {/* Section Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-neutral-400">
          <Link href="#about" className="hover:text-neutral-100 transition-colors">
            About
          </Link>
          <Link href="#projects" className="hover:text-neutral-100 transition-colors">
            Projects
          </Link>
          {/* <Link href="#skills" className="hover:text-neutral-100 transition-colors">
            Skills
          </Link> */}
          <Link href="#contact" className="hover:text-neutral-100 transition-colors">
            Contact
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-4 text-neutral-400">
          {/* GitHub SVG */}
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-neutral-100 transition-colors"
          >
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
          </a>

          {/* LinkedIn SVG */}
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-neutral-100 transition-colors"
          >
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2m1.4 9.74V9.97H5.06v8.53h2.8z" />
            </svg>
          </a>

          {/* Mail */}
          <a
            href={`mailto:${portfolioData.personal.email}`}
            aria-label="Email"
            className="hover:text-neutral-100 transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </nav>
    </header>
  );
}