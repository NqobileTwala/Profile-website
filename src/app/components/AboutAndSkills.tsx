"use client";

import { CheckCircle2, Code2, Database, Layout, Terminal } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export default function AboutAndSkills() {
  const { about, skills } = portfolioData;

  const getCategoryIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case "frontend & web":
        return <Layout className="w-5 h-5 text-emerald-400" />;
      case "backend & systems":
        return <Terminal className="w-5 h-5 text-emerald-400" />;
      case "databases & devops":
        return <Database className="w-5 h-5 text-emerald-400" />;
      default:
        return <Code2 className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="about" className="py-20 max-w-6xl mx-auto px-6">
      <div className="flex flex-col mb-12">
        <span className="text-emerald-500 font-mono text-sm tracking-wider uppercase mb-2">
          Background & Toolkit
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-100">
          About & Technical Capabilities
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 space-y-6 text-neutral-300 leading-relaxed text-base">
          <p className="text-lg text-neutral-200 font-normal leading-relaxed">
            {about}
          </p>
          <p className="text-neutral-400 text-sm leading-relaxed">
            My background combines technical software engineering with business acumen. I focus on how software directly serves operational goals, enhances user workflows, and creates measurable stakeholder impact.
          </p>

          <div className="pt-4 border-t border-neutral-800 flex flex-col gap-3">
            <div className="flex items-center gap-3 text-sm text-neutral-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Industry experience at BBD Software Development</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-neutral-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Web development training with Umuzi Academy</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-neutral-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Agile project execution & stakeholder collaboration</span>
            </div>
          </div>
        </div>

        <div id="skills" className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {skills.map((category, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-neutral-800/80 bg-neutral-900/30 hover:border-neutral-700/80 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-neutral-800/60 border border-neutral-700/40">
                  {getCategoryIcon(category.title)}
                </div>
                <h3 className="text-base font-semibold text-neutral-200">
                  {category.title}
                </h3>
              </div>

              <ul className="space-y-2">
                {category.skills.map((skill, sIdx) => (
                  <li
                    key={sIdx}
                    className="flex items-center text-sm text-neutral-400 hover:text-neutral-200 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/70 mr-2.5"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}