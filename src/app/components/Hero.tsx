"use client";

import Link from "next/link";
import { ArrowUpRight, FileDown, MapPin } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section 
      id="hero" 
      className="pt-36 pb-20 md:pt-48 md:pb-28 max-w-6xl mx-auto px-6 flex flex-col items-start"
    >
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/60 text-xs font-medium text-neutral-300 mb-8">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="flex items-center gap-1">
          <MapPin className="w-3.5 h-3.5 text-neutral-400" />
          {personal.location}
        </span>
      </div>

      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-neutral-100 max-w-4xl leading-[1.1]">
        Hi, I&apos;m {personal.name}. <br />
        <span className="text-neutral-400">{personal.role}.</span>
      </h1>

      <p className="mt-6 text-lg sm:text-xl text-neutral-400 max-w-2xl leading-relaxed">
        {personal.tagline}
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <Link
          href="#projects"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-neutral-100 text-neutral-950 font-semibold text-sm hover:bg-white transition-all shadow-sm active:scale-[0.98]"
        >
          View Projects
          <ArrowUpRight className="w-4 h-4" />
        </Link>
        <a
          href="/cv.pdf"
          download="Nqobile_Twala_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-neutral-800 bg-neutral-900/60 text-neutral-200 font-semibold text-sm hover:bg-neutral-800 hover:border-neutral-700 transition-all active:scale-[0.98]"
        >
          Resume / CV
          <FileDown className="w-4 h-4 text-neutral-400" />
        </a>
      </div>
    </section>
  );
}