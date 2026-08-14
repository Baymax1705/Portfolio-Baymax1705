"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, ExternalLink } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      company: "ModelSuite.ai",
      role: "Software Engineering Intern",
      period: "Jul 2026 – Present",
      current: true,
      link: null,
      highlights: [
        "Delivered 30+ production pull requests across enterprise AI-powered products",
        "Built dashboard features, notification systems and workflow automation tools",
        "Improved accessibility compliance and engineering velocity",
        "Collaborated through structured code reviews and modern CI/CD practices",
      ],
    },
    {
      company: "IIT Ropar · VLED Labs",
      role: "Project Intern",
      period: "Jan 2026 – Mar 2026",
      current: false,
      link: null,
      highlights: [
        "Contributed to Ajrasakha — a multilingual conversational AI chatbot",
        "Built query history, conversation persistence and search retrieval APIs",
        "Improved data continuity across multilingual user sessions",
      ],
    },
    {
      company: "Amazon",
      role: "Trainee - Amazon ML Summer School",
      period: "Aug 2025",
      current: false,
      link: null,
      highlights: [
        "Selected for the machine learning cohort under Amazon Research Scientists",
        "Trained on machine learning foundations, deep learning frameworks, and algorithmic systems",
        "Gained hands-on exposure to scalable vector embeddings and model optimizations",
      ],
    },
    {
      company: "C-DAC",
      role: "Ethical Hacking & Penetration Testing Intern",
      period: "May 2024 – Jun 2024",
      current: false,
      link: null,
      highlights: [
        "Conducted vulnerability assessment and security research",
        "Explored ethical hacking techniques and penetration testing methodologies",
        "Contributed to digital content verification research",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 sm:py-28 bg-background border-b border-border">
      <div className="max-w-3xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="section-label mb-3"
        >
          Work Experience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground mb-12"
        >
          Where I&apos;ve worked
        </motion.h2>

        {/* Timeline */}
        <div className="relative pl-6 ml-1 space-y-14 border-l border-border">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
              transition={{ type: "spring", stiffness: 80, damping: 16, delay: idx * 0.06 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div
                className={`absolute -left-[29px] top-1 w-3 h-3 rounded-full border-2 ${
                  exp.current
                    ? "bg-emerald-500 border-emerald-500 shadow-[0_0_8px_2px_rgba(16,185,129,0.4)]"
                    : "bg-background border-border-secondary"
                }`}
              />

              {/* Card */}
              <div className="group border border-border bg-card rounded-xl p-5 card-hover">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-base font-bold text-foreground">{exp.company}</h3>
                      {exp.current && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                          <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                          Current
                        </span>
                      )}
                      {exp.link && (
                        <a href={exp.link} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground">
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                    <p className="text-xs font-semibold text-muted mt-0.5">{exp.role}</p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-muted bg-background border border-border px-2.5 py-1 rounded-md shrink-0 self-start">
                    <Calendar className="w-3 h-3" />
                    {exp.period}
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted leading-relaxed">
                      <span className="mt-2 w-1 h-1 rounded-full bg-muted/60 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
