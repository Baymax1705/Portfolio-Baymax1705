"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      company: "ModelSuite.ai",
      role: "Software Engineering Intern",
      period: "Jul 2026 – Present",
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
      period: "Jan 2026 – Mar 2026",
      highlights: [
        "Contributed to Ajrasakha multilingual chatbot",
        "Built conversation history and query retrieval functionality",
        "Developed backend APIs",
        "Improved conversation continuity and data workflows",
      ],
    },
    {
      company: "Centre for Development of Advanced Computing (C-DAC)",
      role: "Ethical Hacking and Penetration Testing Intern",
      period: "May 2024 – Jun 2024",
      highlights: [
        "Conducted security research and vulnerability assessment activities",
        "Explored ethical hacking techniques and penetration testing methodologies",
        "Contributed to digital content verification approaches",
      ],
    },
  ];


  return (
    <section id="experience" className="py-20 sm:py-28 bg-background border-b border-border">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-xs font-bold uppercase tracking-widest text-muted mb-12"
        >
          Work Experience
        </motion.h2>

        <div className="relative border-l border-border-secondary pl-6 ml-2 space-y-16">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              transition={{ type: "spring", stiffness: 80, damping: 15, delay: idx * 0.05 }}
              className="relative"
            >

              {/* Timeline circle point */}
              <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-background border-2 border-accent" />

              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 mb-4">
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    {exp.company}
                  </h3>
                  <p className="text-sm font-semibold text-muted mt-0.5">{exp.role}</p>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-muted bg-card border border-border px-2.5 py-1 rounded-md self-start">
                  <Calendar className="w-3 h-3" />
                  {exp.period}
                </div>
              </div>

              {/* Highlights */}
              <ul className="space-y-2.5">
                {exp.highlights.map((highlight, itemIdx) => (
                  <li key={itemIdx} className="text-sm text-muted leading-relaxed list-disc list-inside">
                    <span className="text-muted/80">{highlight}</span>
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


