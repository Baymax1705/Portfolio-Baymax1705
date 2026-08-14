"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32 border-b border-border">
      {/* Background radial highlight */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.blue.50),white)]opacity-40" />

      <div className="max-w-4xl mx-auto px-6 flex flex-col items-start text-left">
        {/* Software Engineer Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-100 mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
          Software Engineer
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6 max-w-3xl"
        >
          Building scalable <br />
          software products and <br />
          <span className="gradient-text">intelligent systems.</span>
        </motion.h1>

        {/* Supporting description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-muted leading-8 mb-8 max-w-2xl font-normal"
        >
          Computer Science Engineer focused on backend systems, full-stack applications, automation, and AI-powered products. Experienced in shipping production-ready features and building systems used by real users.
        </motion.p>

        {/* Action Button Grids */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold bg-foreground text-background py-3 px-6 rounded-lg hover:opacity-95 transition-opacity"
          >
            View Projects
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 text-sm font-semibold bg-white text-foreground py-3 px-6 rounded-lg border border-border hover:bg-card transition-colors"
          >
            Download Resume
            <Download className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Social Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center gap-6 text-muted border-t border-border pt-8 w-full"
        >
          <a
            href="https://github.com/Baymax1705"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium hover:text-foreground transition-colors group"
          >
            <Github className="w-5 h-5 group-hover:scale-105 transition-transform" />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yash-verma"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium hover:text-foreground transition-colors group"
          >
            <Linkedin className="w-5 h-5 group-hover:scale-105 transition-transform" />
            LinkedIn
          </a>
          <a
            href="mailto:yashverma.work@gmail.com"
            className="flex items-center gap-2 text-sm font-medium hover:text-foreground transition-colors group"
          >
            <Mail className="w-5 h-5 group-hover:scale-105 transition-transform" />
            Email
          </a>
        </motion.div>
      </div>
    </section>
  );
}
