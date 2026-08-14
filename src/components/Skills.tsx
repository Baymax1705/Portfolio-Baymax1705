"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Layout, Server, Database, Settings } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 className="w-3.5 h-3.5 text-blue-600" />,
      items: ["C++", "Python", "JavaScript", "TypeScript"],
    },
    {
      title: "Frontend",
      icon: <Layout className="w-3.5 h-3.5 text-indigo-600" />,
      items: ["React", "Next.js", "TailwindCSS"],
    },
    {
      title: "Backend",
      icon: <Server className="w-3.5 h-3.5 text-emerald-600" />,
      items: ["Node.js", "Express", "FastAPI"],
    },
    {
      title: "Databases",
      icon: <Database className="w-3.5 h-3.5 text-purple-600" />,
      items: ["MongoDB", "MySQL", "SQLite"],
    },
    {
      title: "Tools",
      icon: <Settings className="w-3.5 h-3.5 text-slate-600" />,
      items: ["Git", "GitHub", "Linux", "Postman"],
    },
  ];

  return (
    <section id="skills" className="py-20 sm:py-28 bg-background border-b border-border">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-xs font-bold uppercase tracking-widest text-muted mb-12"
        >
          Technical Skills
        </motion.h2>

        <div className="border border-border bg-card rounded-xl divide-y divide-border overflow-hidden shadow-sm">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-md bg-background border border-border flex items-center justify-center shadow-sm">
                  {category.icon}
                </div>
                <span className="font-bold text-xs text-foreground tracking-tight">
                  {category.title}
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 sm:justify-end">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="text-[10px] font-bold bg-background border border-border/80 px-2.5 py-1 rounded-md text-foreground shadow-sm"
                  >
                    {skill}
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


