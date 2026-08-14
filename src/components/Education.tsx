"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export default function Education() {
  const educationList = [
    {
      institution: "Indian Institute of Information Technology, Manipur",
      degree: "Bachelor of Technology in Computer Science and Engineering (CGPA: 7.80)",
      period: "2022 - 2026",
      location: "Imphal, Manipur",
    },
    {
      institution: "Lucknow Public School & Colleges, Lucknow",
      degree: "HSC (Class XII) - Council for the Indian School Certificate Examinations",
      period: "2021",
      location: "Lucknow, Uttar Pradesh",
    },
    {
      institution: "Lucknow Public School & Colleges, Lucknow",
      degree: "SSC (Class X) - Council for the Indian School Certificate Examinations",
      period: "2019",
      location: "Lucknow, Uttar Pradesh",
    },

  ];


  return (
    <section id="education" className="py-20 sm:py-28 bg-background border-b border-border">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-xs font-bold uppercase tracking-widest text-muted mb-12"
        >
          Education
        </motion.h2>

        <div className="space-y-12">
          {educationList.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              transition={{ type: "spring", stiffness: 80, damping: 15, delay: idx * 0.05 }}
              className="group relative border border-border bg-card p-6 rounded-xl shadow-sm hover:border-border-secondary transition-colors"
            >

              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-base font-bold text-foreground flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-accent shrink-0" />
                    {edu.institution}
                  </h3>
                  <p className="text-xs font-semibold text-muted mt-1 leading-relaxed">{edu.degree}</p>
                </div>
                <div className="flex flex-col items-start sm:items-end gap-1.5 shrink-0">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-muted bg-background border border-border px-2 py-0.5 rounded-md">
                    <Calendar className="w-2.5 h-2.5" />
                    {edu.period}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-muted/80">
                    <MapPin className="w-2.5 h-2.5" />
                    {edu.location}
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
