"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Code2 } from "lucide-react";

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
    <section id="projects" className="py-20 sm:py-28 bg-background border-b border-border">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-xs font-bold uppercase tracking-widest text-muted mb-12"
        >
          Featured Projects
        </motion.h2>

        <div className="space-y-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group border border-border bg-card p-6 rounded-xl shadow-sm hover:border-border-secondary transition-colors"
            >
              {/* Header Details */}
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-md bg-background border border-border flex items-center justify-center">
                    <Code2 className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <h3 className="font-bold text-sm text-foreground">
                    {project.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 rounded hover:bg-background border border-transparent hover:border-border text-muted hover:text-foreground transition-all"
                  >
                    <Github className="w-4.5 h-4.5" />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 rounded hover:bg-background border border-transparent hover:border-border text-muted hover:text-foreground transition-all"
                    >
                      <ExternalLink className="w-4.5 h-4.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Main Content */}
              <p className="text-xs text-muted mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Problem/Impact Split Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-border mb-4 text-[11px]">
                <div>
                  <span className="font-bold text-foreground block mb-0.5">Problem:</span>
                  <span className="text-muted leading-relaxed">{project.problem}</span>
                </div>
                <div>
                  <span className="font-bold text-foreground block mb-0.5">Metric & Impact:</span>
                  <span className="text-muted leading-relaxed">{project.metrics}</span>
                </div>
              </div>

              {/* Tech tag list */}
              <div className="flex flex-wrap gap-1">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[9px] font-bold bg-background border border-border px-2 py-0.5 rounded text-muted shadow-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


