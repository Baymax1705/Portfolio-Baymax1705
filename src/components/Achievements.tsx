"use client";

import React from "react";
import { Award, ShieldCheck, Flame, GitMerge } from "lucide-react";

export default function Achievements() {
  const achievements = [
    {
      title: "Amazon ML Summer School Shortlisted",
      description: "Selected amongst top engineering applicants for machine learning training cohorts under Amazon researchers.",
      icon: <Flame className="w-4 h-4 text-orange-500" />,
    },
    {
      title: "EROH Coding Contest (2nd & 3rd Place)",
      description: "Ranked in top configurations in sequential programming iterations.",
      icon: <Award className="w-4 h-4 text-blue-500" />,
    },
    {
      title: "NPTEL Certifications",
      description: "Successfully certified in advanced core algorithmic and programming foundations.",
      icon: <ShieldCheck className="w-4 h-4 text-emerald-500" />,
    },
    {
      title: "Open Source Contributions",
      description: "Actively contributing to ecosystem tools, code quality fixes, and documentation pipelines.",
      icon: <GitMerge className="w-4 h-4 text-purple-500" />,
    },
  ];

  return (
    <section id="achievements" className="py-20 sm:py-28 bg-white border-b border-border">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-12">
          Achievements & Recognition
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="border border-border bg-card p-6 rounded-xl hover:border-muted/30 transition-colors flex gap-4"
            >
              <div className="p-2 rounded-lg bg-white border border-border/80 h-fit shadow-sm">
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-sm text-foreground tracking-tight mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
