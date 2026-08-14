"use client";

import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-8">
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
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/yash-verma-baymax1705/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://leetcode.com/u/Baymax_17/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 transition-colors"
            aria-label="LeetCode"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-9.77 9.77a1.375 1.375 0 0 0 0 1.945l1.945 1.945a1.375 1.375 0 0 0 1.945 0l9.77-9.77a1.375 1.375 0 0 0 0-1.945L14.444.414A1.373 1.373 0 0 0 13.483 0zm5.176 5.676a1.375 1.375 0 0 0-.961.414l-9.77 9.77a1.375 1.375 0 0 0 0 1.945l1.945 1.945a1.375 1.375 0 0 0 1.945 0l9.77-9.77a1.375 1.375 0 0 0 0-1.945L19.62 6.09a1.373 1.373 0 0 0-.961-.414zM12 9.086a2.914 2.914 0 1 1 0 5.828A2.914 2.914 0 0 1 12 9.086z"/>
            </svg>
          </a>
          <a
            href="https://www.geeksforgeeks.org/profile/ninjaylwbp"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition-colors"
            aria-label="GeeksforGeeks"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
          </a>
          <a
            href="mailto:yashverma.off17@gmail.com"
            className="hover:text-red-400 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
