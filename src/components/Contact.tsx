"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ArrowRight, Sparkles } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 sm:py-40 bg-background overflow-hidden">
      {/* Ambient background */}
      <div className="glow-blob w-[700px] h-[500px] bg-blue-500/8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="inline-flex items-center gap-1.5 section-label border border-border bg-card px-3 py-1.5 rounded-full mb-6"
        >
          <Sparkles className="w-3 h-3 text-accent" />
          Get in Touch
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 75, damping: 15, delay: 0.05 }}
          className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-5 leading-tight"
        >
          Let&apos;s build something{" "}
          <span className="gradient-text">impactful.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 75, damping: 15, delay: 0.1 }}
          className="text-sm text-muted max-w-md mx-auto mb-10 leading-relaxed"
        >
          Open to SDE roles at product-focused startups and engineering-driven companies.
          Reach out — I respond quickly.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 75, damping: 15, delay: 0.15 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="mailto:yashverma.off17@gmail.com"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-bold bg-foreground text-background py-3.5 px-7 rounded-xl hover:opacity-85 transition-all hover:gap-3"
          >
            <Mail className="w-3.5 h-3.5" />
            Email Me
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://linkedin.com/in/yash-verma-baymax1705/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-bold bg-card text-foreground py-3.5 px-6 rounded-xl border border-border hover:border-border-secondary transition-all"
          >
            <Linkedin className="w-3.5 h-3.5 text-blue-500" />
            LinkedIn
          </a>
          <a
            href="https://github.com/Baymax1705"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-bold bg-card text-foreground py-3.5 px-6 rounded-xl border border-border hover:border-border-secondary transition-all"
          >
            <Github className="w-3.5 h-3.5" />
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
