"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, ShieldCheck, Flame, GitMerge } from "lucide-react";

export default function Achievements() {
  const achievements = [
    {
      title: "Trainee - Amazon ML Summer School",
      description: "Selected for the Aug 2025 cohort. Trained in Machine Learning foundations under Amazon research scientists.",
      icon: <Flame className="w-3.5 h-3.5 text-orange-500" />,
    },
    {
      title: "GATE CS '26 Qualified",
      description: "Successfully cleared and qualified the GATE Computer Science exam.",
      icon: <Award className="w-3.5 h-3.5 text-blue-500" />,
    },
    {
      title: "NPTEL Certifications",
      description: "Successfully certified in advanced core algorithmic and programming foundations.",
      icon: <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />,
    },
    {
      title: "Open Source Contributions",
      description: "Actively contributing to ecosystem tools, code quality fixes, and documentation pipelines.",
      icon: <GitMerge className="w-3.5 h-3.5 text-purple-500" />,
    },
  ];

  return (
    <section id="achievements" className="py-20 sm:py-28 bg-background border-b border-border">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-xs font-bold uppercase tracking-widest text-muted mb-12"
        >
          Achievements & Recognition
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              transition={{ type: "spring", stiffness: 90, damping: 15, delay: idx * 0.05 }}
              className="border border-border bg-card p-5 rounded-xl flex gap-3.5 shadow-sm hover:border-border-secondary transition-colors"
            >
              <div className="p-1.5 rounded bg-background border border-border h-fit shadow-sm">
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-xs text-foreground tracking-tight mb-1">
                  {item.title}
                </h3>
                <p className="text-[11px] text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Coding Profiles Showcase Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ type: "spring", stiffness: 90, damping: 15, delay: 0.2 }}
            className="border border-border bg-card p-5 rounded-xl flex flex-col gap-3 shadow-sm hover:border-border-secondary transition-colors col-span-1 sm:col-span-2"
          >
            <div className="flex items-center gap-2 border-b border-border pb-2">
              <span className="text-xs font-bold text-foreground">Coding Profiles</span>
            </div>
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href="https://leetcode.com/u/Baymax_17/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-muted hover:text-yellow-500 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-9.77 9.77a1.375 1.375 0 0 0 0 1.945l1.945 1.945a1.375 1.375 0 0 0 1.945 0l9.77-9.77a1.375 1.375 0 0 0 0-1.945L14.444.414A1.373 1.373 0 0 0 13.483 0zm5.176 5.676a1.375 1.375 0 0 0-.961.414l-9.77 9.77a1.375 1.375 0 0 0 0 1.945l1.945 1.945a1.375 1.375 0 0 0 1.945 0l9.77-9.77a1.375 1.375 0 0 0 0-1.945L19.62 6.09a1.373 1.373 0 0 0-.961-.414zM12 9.086a2.914 2.914 0 1 1 0 5.828A2.914 2.914 0 0 1 12 9.086z"/>
                </svg>
                LeetCode (Baymax_17)
              </a>
              <span className="text-border-secondary">|</span>
              <a
                href="https://www.geeksforgeeks.org/profile/ninjaylwbp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-muted hover:text-green-500 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
                GeeksforGeeks (ninjaylwbp)
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


