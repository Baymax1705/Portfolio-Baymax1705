"use client";

import React from "react";
import { Github, ExternalLink, Code2, Database } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "TerraSight",
      tech: ["React", "TypeScript", "FastAPI", "SQLite", "OCR"],
      description: "Automated OCR extraction pipeline and location-aware land price estimation.",
      problem: "Extracting valuation intelligence from dense unstructured government documents.",
      metrics: "Processed 111K+ government records with geospatial valuation engine.",
      github: "https://github.com/Baymax1705/TerraSight",
      demo: null,
    },
    {
      title: "Online Assessment Platform",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      description: "Role-based assessment platform featuring secure authentication, automated evaluation system, and real-time result generation.",
      problem: "Lack of scale and manual friction in testing assessment validation workflows.",
      metrics: "Real-time evaluation engine with robust secure role validation.",
      github: "https://github.com/Baymax1705",
      demo: null,
    },
    {
      title: "Ajrasakha Chatbot Contribution",
      tech: ["React", "TypeScript", "Node.js", "MongoDB"],
      description: "Query history and conversation persistence integration into the Ajrasakha chatbot system.",
      problem: "Session fragmentation and lack of historical search continuity in multi-lingual workflows.",
      metrics: "Improved search continuity and conversational UX flow.",
      github: "https://github.com/Baymax1705",
      demo: null,
    },
  ];

  return (
    <section id="projects" className="py-20 sm:py-28 bg-white border-b border-border">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-12">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="flex flex-col h-full border border-border bg-card hover:border-muted/30 transition-colors rounded-xl overflow-hidden"
            >
              {/* Card visual mockup / header tag */}
              <div className="p-6 bg-gradient-to-br from-slate-50 to-slate-100/50 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-white border border-border flex items-center justify-center shadow-sm">
                    <Code2 className="w-4 h-4 text-accent" />
                  </div>
                  <span className="font-semibold text-sm tracking-tight text-foreground">
                    {project.title}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 text-muted hover:text-foreground transition-colors"
                    aria-label="GitHub link"
                  >
                    <Github className="w-4.5 h-4.5" />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 text-muted hover:text-foreground transition-colors"
                      aria-label="Live Demo link"
                    >
                      <ExternalLink className="w-4.5 h-4.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-sm text-muted mb-4 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Technical highlights details */}
                <div className="space-y-3 pt-4 border-t border-border/60 mb-5">
                  <div className="text-xs">
                    <span className="font-semibold text-foreground block mb-0.5">Problem Solved:</span>
                    <span className="text-muted leading-relaxed">{project.problem}</span>
                  </div>
                  <div className="text-xs">
                    <span className="font-semibold text-foreground block mb-0.5">Impact:</span>
                    <span className="text-muted leading-relaxed">{project.metrics}</span>
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-semibold bg-white border border-border px-2 py-0.5 rounded text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
