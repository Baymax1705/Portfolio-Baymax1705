"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, BookOpen, Award, FlaskConical } from "lucide-react";

export default function Education() {
  const educationList = [
    {
      type: "university",
      emoji: "🎓",
      institution: "Indian Institute of Information Technology, Manipur",
      short: "IIIT Manipur",
      degree: "B.Tech · Computer Science & Engineering",
      period: "2022 – 2026",
      location: "Imphal, Manipur",
      cgpa: "7.80",
      highlights: [
        "Graduated with specialization in systems and AI",
        "Active in competitive programming and open-source",
        "Key courses: DSA, OS, DBMS, CN, ML, Software Engineering",
      ],
      badge: "Graduated",
      badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    },
    {
      type: "school",
      emoji: "🏫",
      institution: "Lucknow Public School & Colleges",
      short: "LPS Lucknow",
      degree: "HSC · Class XII",
      board: "CISCE Board",
      period: "2021",
      location: "Lucknow, Uttar Pradesh",
      highlights: [
        "Physics, Chemistry, Mathematics & Computer Science",
        "Council for the Indian School Certificate Examinations",
      ],
      badge: "Class XII",
      badgeColor: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
    },
    {
      type: "school",
      emoji: "📚",
      institution: "Lucknow Public School & Colleges",
      short: "LPS Lucknow",
      degree: "SSC · Class X",
      board: "CISCE Board",
      period: "2019",
      location: "Lucknow, Uttar Pradesh",
      highlights: [
        "Foundation studies in Science, Mathematics & English",
        "Council for the Indian School Certificate Examinations",
      ],
      badge: "Class X",
      badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    },
  ];

  return (
    <section id="education" className="py-20 sm:py-28 bg-background border-b border-border">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section header */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="section-label mb-3"
        >
          Education
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground mb-12"
        >
          Academic background
        </motion.h2>

        <div className="space-y-5">
          {educationList.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
              transition={{ type: "spring", stiffness: 80, damping: 16, delay: idx * 0.07 }}
              className="group relative border border-border bg-card rounded-2xl overflow-hidden card-hover"
            >
              {/* Shimmer on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer pointer-events-none" />

              {/* Top accent line */}
              <div
                className={`h-[3px] w-full ${
                  idx === 0
                    ? "bg-gradient-to-r from-blue-500 to-indigo-500"
                    : idx === 1
                    ? "bg-gradient-to-r from-violet-500 to-purple-500"
                    : "bg-gradient-to-r from-emerald-500 to-teal-500"
                }`}
              />

              <div className="p-6">
                {/* Header row */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-3.5">
                    {/* Emoji icon */}
                    <div className="text-2xl leading-none mt-0.5 shrink-0">{edu.emoji}</div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap mb-0.5">
                        <h3 className="text-base font-bold text-foreground leading-tight">
                          {edu.institution}
                        </h3>
                        <span
                          className={`inline-flex items-center text-[10px] font-bold border px-2 py-0.5 rounded-full ${edu.badgeColor}`}
                        >
                          {edu.badge}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-muted">{edu.degree}</p>
                      {"board" in edu && (
                        <p className="text-[11px] text-muted/70 mt-0.5">{edu.board}</p>
                      )}
                    </div>
                  </div>

                  {/* Right: CGPA or period */}
                  <div className="flex flex-col items-end gap-1.5 shrink-0">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-muted bg-background border border-border px-2.5 py-1 rounded-md">
                      <Calendar className="w-3 h-3" />
                      {edu.period}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] text-muted/70">
                      <MapPin className="w-2.5 h-2.5" />
                      {edu.location}
                    </span>
                  </div>
                </div>

                {/* CGPA badge — only for university */}
                {"cgpa" in edu && (
                  <div className="mb-4">
                    <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-lg">
                      <Award className="w-3.5 h-3.5 text-amber-500" />
                      <span className="text-xs font-bold text-amber-600 dark:text-amber-400">
                        CGPA: {edu.cgpa} / 10
                      </span>
                    </div>
                  </div>
                )}

                {/* Divider */}
                <div className="border-t border-border mb-4" />

                {/* Highlights */}
                <ul className="space-y-1.5">
                  {edu.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-muted leading-relaxed">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-muted/50 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-8 grid grid-cols-3 gap-4"
        >
          {[
            { icon: <GraduationCap className="w-4 h-4 text-accent" />, label: "Graduated", value: "2026" },
            { icon: <BookOpen className="w-4 h-4 text-violet-500" />, label: "Board", value: "CISCE" },
            { icon: <FlaskConical className="w-4 h-4 text-emerald-500" />, label: "Major", value: "CSE" },
          ].map((stat, i) => (
            <div
              key={i}
              className="border border-border bg-card rounded-xl p-4 flex flex-col items-center gap-1.5 text-center card-hover"
            >
              {stat.icon}
              <span className="text-lg font-extrabold text-foreground">{stat.value}</span>
              <span className="text-[10px] font-semibold text-muted uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
