"use client";

import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-white py-8">
      <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted">
          &copy; {currentYear} Yash Verma. All rights reserved.
        </p>

        {/* Minimal Social Links */}
        <div className="flex items-center gap-5 text-muted">
          <a
            href="https://github.com/Baymax1705"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4.5 h-4.5" />
          </a>
          <a
            href="https://linkedin.com/in/yash-verma"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4.5 h-4.5" />
          </a>
          <a
            href="mailto:yashverma.work@gmail.com"
            className="hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4.5 h-4.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
