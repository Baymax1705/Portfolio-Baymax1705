"use client";

import React from "react";
import { Mail, Linkedin, Github, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-4">
          Let's build something impactful.
        </h2>
        <p className="text-base sm:text-lg text-muted max-w-xl mx-auto mb-10 leading-relaxed">
          Open to Software Engineering opportunities, product-focused teams, and challenging technical problems.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <a
            href="mailto:yashverma.work@gmail.com"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-semibold bg-foreground text-background py-3.5 px-8 rounded-lg hover:opacity-95 transition-opacity"
          >
            Email Me
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/yash-verma"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-semibold bg-white text-foreground py-3.5 px-8 rounded-lg border border-border hover:bg-card transition-colors"
          >
            <Linkedin className="w-4 h-4 text-accent" />
            LinkedIn
          </a>
          <a
            href="https://github.com/Baymax1705"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-semibold bg-white text-foreground py-3.5 px-8 rounded-lg border border-border hover:bg-card transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
