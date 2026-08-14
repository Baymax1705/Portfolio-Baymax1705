"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, BookOpen, Award } from "lucide-react";

export default function Education() {
  const university = {
    institution: "Indian Institute of Information Technology, Manipur",
    short: "IIIT Manipur",
    degree: "B.Tech · Computer Science & Engineering",
    period: "2022 – 2026",
    location: "Imphal, Manipur",
    cgpa: "7.80",
    courses: ["Data Structures & Algorithms", "Operating Systems", "Database Management", "Computer Networks", "Software Engineering", "Machine Learning"],
    highlight: "Graduated B.Tech CSE",
  };

  const schooling = [
    {
      institution: "Lucknow Public School & Colleges",
      level: "HSC · Class XII",
      board: "CISCE Board",
      period: "2021",
      location: "Lucknow, Uttar Pradesh",
    },
    {
      institution: "Lucknow Public School & Colleges",
      level: "SSC · Class X",
      board: "CISCE Board",
      period: "2019",
      location: "Lucknow, Uttar Pradesh",
    },
  ];

  return (
    <section id="education" className="py-20 sm:py-28 bg-background border-b border-border">
      <div className="max-w-3xl mx-auto px-6">

        {/* Section Header */}
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

        {/* ── University Card (Hero-sized, highlighted) ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
          transition={{ type: "spring", stiffness: 75, damping: 16 }}
          className="relative mb-8 rounded-2xl overflow-hidden"
        >
          {/* Gradient border wrapper */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/40 via-purple-500/20 to-transparent p-[1px]" />

          {/* Glow behind the card */}
          <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent blur-2xl pointer-events-none" />

          <div className="relative rounded-2xl bg-card border border-border overflow-hidden">
            {/* Top accent bar */}
            <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500" />

            <div className="p-7 sm:p-8">
              {/* Badge */}
              <div className="flex items-center gap-2 mb-5 flex-wrap">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 px-3 py-1 rounded-full">
                  <GraduationCap className="w-3 h-3" />
                  {university.highlight}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20 px-3 py-1 rounded-full">
                  <Award className="w-3 h-3" />
                  CGPA {university.cgpa}
                </span>
              </div>

              {/* Institution name */}
              <h3 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight mb-1 leading-tight">
                {university.institution}
              </h3>
              <p className="text-sm font-semibold text-muted mb-5">{university.degree}</p>

              {/* Meta row */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-muted mb-7">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {university.period}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  {university.location}
                </span>
              </div>

              {/* Coursework */}
              <div>
                <p className="inline-flex items-center gap-1.5 text-[11px] font-bold section-label mb-3">
                  <BookOpen className="w-3 h-3" />
                  Key Coursework
                </p>
                <div className="flex flex-wrap gap-2">
                  {university.courses.map((course) => (
                    <span
                      key={course}
                      className="text-[11px] font-semibold bg-background border border-border text-muted px-3 py-1 rounded-lg hover:border-border-secondary hover:text-foreground transition-colors"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Schooling Cards ── */}
        <div className="space-y-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="section-label mb-4"
          >
            Schooling
          </motion.p>

          {schooling.map((school, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
              transition={{ type: "spring", stiffness: 85, damping: 16, delay: idx * 0.07 }}
              className="group flex items-start gap-4 border border-border bg-card p-5 rounded-xl card-hover"
            >
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <h3 className="text-sm font-bold text-foreground">{school.institution}</h3>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-muted bg-background border border-border px-2 py-0.5 rounded-md shrink-0">
                    <Calendar className="w-2.5 h-2.5" />
                    {school.period}
                  </span>
                </div>
                <p className="text-xs font-semibold text-accent mb-1">{school.level}</p>
                <div className="flex items-center gap-3 text-[11px] text-muted">
                  <span className="font-medium">{school.board}</span>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-2.5 h-2.5" />
                    {school.location}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
