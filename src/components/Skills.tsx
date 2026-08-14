"use client";

import React from "react";
import { Code2, Layout, Server, Database, Settings } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 className="w-4 h-4 text-blue-600" />,
      items: ["C++", "Python", "JavaScript", "TypeScript"],
    },
    {
      title: "Frontend",
      icon: <Layout className="w-4 h-4 text-indigo-600" />,
      items: ["React", "Next.js", "TailwindCSS"],
    },
    {
      title: "Backend",
      icon: <Server className="w-4 h-4 text-emerald-600" />,
      items: ["Node.js", "Express", "FastAPI"],
    },
    {
      title: "Databases",
      icon: <Database className="w-4 h-4 text-purple-600" />,
      items: ["MongoDB", "MySQL", "SQLite"],
    },
    {
      title: "Tools & Infrastructure",
      icon: <Settings className="w-4 h-4 text-slate-600" />,
      items: ["Git", "GitHub", "Linux", "Postman"],
    },
  ];

  return (
    <section id="skills" className="py-20 sm:py-28 bg-white border-b border-border">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-12">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="border border-border bg-card p-6 rounded-xl hover:border-muted/30 transition-colors"
            >
              {/* Category Header */}
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1.5 rounded-lg bg-white border border-border/80 shadow-sm">
                  {category.icon}
                </div>
                <h3 className="font-bold text-sm text-foreground tracking-tight">
                  {category.title}
                </h3>
              </div>

              {/* Items List */}
              <div className="flex flex-wrap gap-1.5">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs bg-white border border-border/80 px-2.5 py-1 rounded-md text-foreground font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
