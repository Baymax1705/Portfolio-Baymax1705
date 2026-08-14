"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-28 sm:py-36 bg-background relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-4"
        >
          Let's build something impactful.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="text-xs sm:text-sm text-muted max-w-lg mx-auto mb-10 leading-relaxed"
        >
          Open to Software Engineering opportunities, product-focused teams, and challenging technical problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto"
        >
          <a
            href="mailto:yashverma.work@gmail.com"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-xs font-bold bg-foreground text-background py-3.5 px-6 rounded-lg hover:opacity-90 transition-opacity"
          >
            Email Me
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://linkedin.com/in/yash-verma"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-xs font-bold bg-card text-foreground py-3.5 px-6 rounded-lg border border-border-secondary hover:bg-border/60 transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5 text-blue-500" />
            LinkedIn
          </a>
          <a
            href="https://github.com/Baymax1705"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-xs font-bold bg-card text-foreground py-3.5 px-6 rounded-lg border border-border-secondary hover:bg-border/60 transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}


