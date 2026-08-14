"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      company: "ModelSuite.ai",
      role: "Software Engineering Intern",
      period: "Present",
      highlights: [
        "Delivered 30+ production pull requests",
        "Built features across enterprise and AI-powered products",
        "Improved accessibility and workflow automation",
        "Developed dashboard and notification systems",
        "Collaborated through code reviews and modern engineering practices",
      ],
    },
    {
      company: "IIT Ropar (VLED Labs)",
      role: "Project Intern",
      period: "Internship",
      highlights: [
        "Contributed to Ajrasakha multilingual chatbot",
        "Built conversation history and query retrieval functionality",
        "Developed backend APIs",
        "Improved conversation continuity and data workflows",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 sm:py-28 bg-background border-b border-border">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-12"
        >
          Work Experience
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="premium-card group relative border border-border bg-card rounded-xl p-6 sm:p-8 shadow-sm"
            >
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-accent" />
                    {exp.company}
                  </h3>
                  <p className="text-sm font-medium text-muted mt-0.5">{exp.role}</p>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted bg-background border border-border px-3 py-1 rounded-full self-start sm:self-center">
                  <Calendar className="w-3 h-3" />
                  {exp.period}
                </div>
              </div>

              {/* Highlights List */}
              <ul className="space-y-3">
                {exp.highlights.map((highlight, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-3 text-sm text-muted leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-accent/80 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

