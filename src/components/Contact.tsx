"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-28 sm:py-36 bg-background relative overflow-hidden">
      {/* Background glow element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[300px] -z-10 opacity-30">
        <div className="absolute bottom-[-20%] left-[25%] w-[400px] h-[300px] rounded-full bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-[-15%] right-[25%] w-[400px] h-[300px] rounded-full bg-purple-500/10 blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-6"
        >
          Let's build something impactful.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-base sm:text-lg text-muted max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Open to Software Engineering opportunities, product-focused teams, and challenging technical problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
        >
          <a
            href="mailto:yashverma.work@gmail.com"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-semibold bg-foreground text-background py-3.5 px-8 rounded-lg hover:opacity-90 transition-opacity shadow-sm"
          >
            Email Me
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/yash-verma"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-semibold bg-card text-foreground py-3.5 px-8 rounded-lg border border-border hover:bg-border/30 transition-all hover:-translate-y-0.5"
          >
            <Linkedin className="w-4 h-4 text-accent" />
            LinkedIn
          </a>
          <a
            href="https://github.com/Baymax1705"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-semibold bg-card text-foreground py-3.5 px-8 rounded-lg border border-border hover:bg-border/30 transition-all hover:-translate-y-0.5"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}

