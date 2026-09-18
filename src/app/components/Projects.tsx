"use client";

import { ExternalLink, FolderGit2 } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 max-w-6xl mx-auto px-6">
      <div className="flex flex-col mb-12">
        <span className="text-emerald-500 font-mono text-sm tracking-wider uppercase mb-2">
          Featured Work
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-100">
          Projects & Case Studies
        </h2>
        <p className="text-neutral-400 mt-2 max-w-xl">
          A selection of full-stack applications, distributed services, and business-focused platforms.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative flex flex-col justify-between p-7 rounded-2xl border border-neutral-800/80 bg-neutral-900/40 hover:bg-neutral-900/70 hover:border-neutral-700 transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-2.5 rounded-lg bg-neutral-800/60 border border-neutral-700/50 text-emerald-400">
                  <FolderGit2 className="w-5 h-5" />
                </div>
                <div className="flex items-center space-x-3 text-neutral-400">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Repository"
                      className="p-1.5 hover:text-neutral-100 transition-colors"
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
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live Demo"
                      className="p-1.5 hover:text-neutral-100 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-neutral-100 group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>
              <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-neutral-800/80 text-neutral-300 border border-neutral-700/40"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}