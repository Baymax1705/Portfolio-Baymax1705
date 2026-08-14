"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Layout, Server, Database, Cloud, Wrench } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 className="w-3.5 h-3.5" />,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      items: ["C++", "Python", "JavaScript", "TypeScript"],
    },
    {
      title: "Frontend",
      icon: <Layout className="w-3.5 h-3.5" />,
      color: "text-indigo-500",
      bg: "bg-indigo-500/10",
      items: ["React", "Next.js", "TailwindCSS", "Framer Motion"],
    },
    {
      title: "Backend",
      icon: <Server className="w-3.5 h-3.5" />,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      items: ["Node.js", "Express", "FastAPI", "REST APIs"],
    },
    {
      title: "Databases",
      icon: <Database className="w-3.5 h-3.5" />,
      color: "text-violet-500",
      bg: "bg-violet-500/10",
      items: ["MongoDB", "MySQL", "SQLite"],
    },
    {
      title: "DevOps & Cloud",
      icon: <Cloud className="w-3.5 h-3.5" />,
      color: "text-amber-500",
      bg: "bg-amber-500/10",
      items: ["Docker", "AWS", "CI/CD", "Nginx"],
    },
    {
      title: "Tools",
      icon: <Wrench className="w-3.5 h-3.5" />,
      color: "text-slate-400",
      bg: "bg-slate-500/10",
      items: ["Git", "GitHub", "Linux", "Postman"],
    },
  ];

  return (
    <section id="skills" className="py-20 sm:py-28 bg-background border-b border-border">
      <div className="max-w-3xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="section-label mb-3"
        >
          Technical Skills
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground mb-12"
        >
          My tech stack
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5% 0px -5% 0px" }}
              transition={{ type: "spring", stiffness: 90, damping: 18, delay: idx * 0.05 }}
              className="group border border-border bg-card p-5 rounded-xl card-hover"
            >
              {/* Category header */}
              <div className="flex items-center gap-2.5 mb-4">
                <div className={`w-7 h-7 rounded-lg ${category.bg} ${category.color} flex items-center justify-center`}>
                  {category.icon}
                </div>
                <span className="font-bold text-sm text-foreground">{category.title}</span>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-1.5">
                {category.items.map((skill) => (
                  <span key={skill} className="tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
