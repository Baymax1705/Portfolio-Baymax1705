"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-28 sm:py-36 border-b border-border">
      {/* Dynamic backdrop glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] -z-10 opacity-30 dark:opacity-40">
        <div className="absolute top-[-10%] left-[20%] w-[350px] h-[350px] rounded-full bg-blue-500/20 blur-[100px]" />
        <div className="absolute top-[-5%] right-[25%] w-[350px] h-[350px] rounded-full bg-purple-500/20 blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 flex flex-col items-start text-left">
        {/* Software Engineer Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/60 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
          Software Engineer
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-7xl font-extrabold tracking-tight text-foreground leading-[1.05] mb-6 max-w-3xl"
        >
          Building scalable <br />
          software products and <br />
          <span className="gradient-text">intelligent systems.</span>
        </motion.h1>

        {/* Supporting description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-muted leading-relaxed mb-10 max-w-2xl font-normal"
        >
          Computer Science Engineer focused on backend systems, full-stack applications, automation, and AI-powered products. Experienced in shipping production-ready features and building systems used by real users.
        </motion.p>

        {/* Action Button Grids */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center gap-4 mb-14"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold bg-foreground text-background py-3.5 px-7 rounded-lg hover:opacity-90 transition-opacity shadow-sm"
          >
            View Projects
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 text-sm font-semibold bg-card text-foreground py-3.5 px-7 rounded-lg border border-border hover:bg-border/30 transition-all hover:-translate-y-0.5"
          >
            Download Resume
            <Download className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Social Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center gap-6 text-muted border-t border-border pt-10 w-full"
        >
          <a
            href="https://github.com/Baymax1705"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold hover:text-foreground transition-colors group"
          >
            <Github className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yash-verma"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold hover:text-foreground transition-colors group"
          >
            <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-200 text-blue-500" />
            LinkedIn
          </a>
          <a
            href="mailto:yashverma.work@gmail.com"
            className="flex items-center gap-2 text-sm font-semibold hover:text-foreground transition-colors group"
          >
            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-200 text-red-400" />
            Email
          </a>
        </motion.div>
      </div>
    </section>
  );
}

