"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background dot-grid border-b border-border py-28 sm:py-36">
      {/* Dynamic backdrop glows and grid mask */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background to-background" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-start">
        {/* Software Engineer Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-neutral-100 dark:bg-neutral-800/80 text-foreground border border-border-secondary mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent dark:bg-accent" />
          Software Engineer
        </motion.div>

        {/* Large typography title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-foreground leading-[1.08] mb-6 max-w-3xl"
        >
          Building scalable <br />
          software products and <br />
          <span className="gradient-text">intelligent systems.</span>
        </motion.h1>

        {/* Description body */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-base sm:text-lg text-muted leading-relaxed mb-8 max-w-2xl font-normal"
        >
          Computer Science Engineer focused on backend systems, full-stack applications, automation, and AI-powered products. Experienced in shipping production-ready features and building systems used by real users.
        </motion.p>

        {/* Action Button Grids */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap items-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-1.5 text-xs font-bold bg-foreground text-background py-3 px-5 rounded-lg hover:opacity-90 transition-opacity"
          >
            View Projects
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-1.5 text-xs font-bold bg-card text-foreground py-3 px-5 rounded-lg border border-border-secondary hover:bg-border/60 transition-colors"
          >
            Download Resume
            <Download className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        {/* Social anchors list */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex items-center gap-6 text-muted border-t border-border-secondary pt-8 w-full"
        >
          <a
            href="https://github.com/Baymax1705"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-bold hover:text-foreground transition-colors group"
          >
            <Github className="w-4 h-4 group-hover:scale-105 transition-transform" />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yash-verma-baymax1705/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-bold hover:text-foreground transition-colors group"
          >
            <Linkedin className="w-4 h-4 text-blue-500 group-hover:scale-105 transition-transform" />
            LinkedIn
          </a>
          <a
            href="mailto:yashverma.off17@gmail.com"
            className="flex items-center gap-2 text-xs font-bold hover:text-foreground transition-colors group"
          >
            <Mail className="w-4 h-4 text-red-500 group-hover:scale-105 transition-transform" />
            Email
          </a>

        </motion.div>
      </div>
    </section>
  );
}
