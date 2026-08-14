"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "TerraSight",
      emoji: "🛰️",
      tech: ["React", "TypeScript", "FastAPI", "SQLite", "OCR"],
      description:
        "Automated OCR extraction pipeline and location-aware land price estimation engine built on 111K+ government records.",
      problem: "Extracting valuation intelligence from dense, unstructured government documents at scale.",
      metrics: "Processed 111K+ records · Geospatial valuation engine · Sub-second query performance",
      github: "https://github.com/Baymax1705/TerraSight",
      demo: null,
    },
    {
      title: "Online Assessment Platform",
      emoji: "📋",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      description:
        "Role-based assessment system with secure authentication, automated evaluation, and real-time result generation.",
      problem: "Manual friction and scale limitations in test validation workflows.",
      metrics: "Real-time evaluation · Secure role-based access · Automated grading pipeline",
      github: "https://github.com/Baymax1705",
      demo: null,
    },
    {
      title: "Ajrasakha Chatbot",
      emoji: "🤖",
      tech: ["React", "TypeScript", "Node.js", "MongoDB"],
      description:
        "Contributed query history and conversation persistence to the Ajrasakha multilingual chatbot at IIT Ropar.",
      problem: "Session fragmentation and lack of historical search continuity in multilingual workflows.",
      metrics: "Improved search continuity · Seamless cross-session UX · Multilingual persistence",
      github: "https://github.com/Baymax1705",
      demo: null,
    },
  ];

  return (
    <section id="projects" className="py-20 sm:py-28 bg-background border-b border-border">
      <div className="max-w-3xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="section-label mb-3"
        >
          Featured Projects
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground mb-12"
        >
          Things I&apos;ve built
        </motion.h2>

        <div className="space-y-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
              transition={{ type: "spring", stiffness: 80, damping: 16, delay: idx * 0.06 }}
              className="group relative border border-border bg-card p-6 rounded-2xl card-hover overflow-hidden"
            >
              {/* Shimmer layer */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer pointer-events-none rounded-2xl" />

              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl leading-none">{project.emoji}</span>
                  <div>
                    <h3 className="font-bold text-base text-foreground leading-tight">{project.title}</h3>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg border border-transparent hover:border-border hover:bg-background text-muted hover:text-foreground transition-all"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg border border-transparent hover:border-border hover:bg-background text-muted hover:text-foreground transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-muted leading-relaxed mb-4">{project.description}</p>

              {/* Metrics pill */}
              <div className="text-[11px] font-semibold text-accent bg-accent/8 dark:bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-lg inline-block mb-4 leading-relaxed">
                {project.metrics}
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border">
                {project.tech.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
