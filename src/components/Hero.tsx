"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, Download, MapPin } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background dot-grid border-b border-border py-24 sm:py-32">
      {/* Ambient gradient blobs */}
      <div className="glow-blob w-[600px] h-[600px] bg-blue-500/10 dark:bg-blue-500/8 -top-40 -left-40" />
      <div className="glow-blob w-[500px] h-[500px] bg-purple-500/8 dark:bg-purple-500/6 -top-20 -right-20" />

      {/* Fade gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/30 to-background pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-14 md:gap-16">
        {/* Left — Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 90, damping: 18 }}
          className="relative shrink-0 mx-auto md:mx-0"
        >
          {/* Glowing ring behind image */}
          <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-blue-500/30 via-purple-500/20 to-transparent blur-2xl" />
          {/* Outer subtle border ring */}
          <div className="absolute -inset-1 rounded-full border border-border-secondary opacity-60" />
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 rounded-full border-[2px] border-border-secondary overflow-hidden shadow-2xl">
            <Image
              src="/profile.jpg"
              alt="Yash Verma"
              fill
              className="object-cover scale-[1.3] translate-y-[3%]"
              priority
            />
          </div>
          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 120, damping: 18 }}
            className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap inline-flex items-center gap-1.5 bg-background border border-border-secondary shadow-lg px-3.5 py-1.5 rounded-full text-[10px] font-bold text-foreground"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Open to Work
          </motion.div>
        </motion.div>

        {/* Right — Text */}
        <div className="flex-1 flex flex-col items-start">
          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-muted mb-4"
          >
            <MapPin className="w-3 h-3" />
            India · IIIT Manipur
          </motion.div>

          {/* Name + Title */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 90, damping: 16, delay: 0.04 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.06] mb-5"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">Yash Verma</span>
            <br />
            <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-muted/80">
              Software Engineer
            </span>
          </motion.h1>

          {/* Badges row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 18, delay: 0.06 }}
            className="flex flex-wrap gap-2 mb-6"
          >
            <span className="inline-flex items-center text-[10px] font-bold bg-neutral-100 dark:bg-neutral-800 text-foreground border border-border-secondary px-2.5 py-1 rounded-md">
              🎯 GATE CS &apos;26 Qualified
            </span>
            <span className="inline-flex items-center text-[10px] font-bold bg-neutral-100 dark:bg-neutral-800 text-foreground border border-border-secondary px-2.5 py-1 rounded-md">
              ⚡ Amazon ML Summer School &apos;25
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 90, damping: 16, delay: 0.09 }}
            className="text-sm sm:text-base text-muted leading-relaxed mb-8 max-w-xl"
          >
            CS Graduate from IIIT Manipur passionate about building scalable software, solving complex engineering challenges, and creating products that deliver meaningful user experiences.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 90, damping: 16, delay: 0.14 }}
            className="flex flex-wrap items-center gap-3 mb-10"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 text-xs font-bold bg-foreground text-background py-2.5 px-5 rounded-lg hover:opacity-85 transition-all hover:gap-3"
            >
              View Projects
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 text-xs font-bold text-foreground bg-card py-2.5 px-5 rounded-lg border border-border hover:border-border-secondary transition-all"
            >
              Resume
              <Download className="w-3.5 h-3.5 text-muted" />
            </a>
          </motion.div>

          {/* Social row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="flex flex-wrap items-center gap-5 pt-6 border-t border-border w-full text-muted"
          >
            {[
              {
                href: "https://github.com/Baymax1705",
                icon: <Github className="w-4 h-4" />,
                label: "GitHub",
                color: "hover:text-foreground",
              },
              {
                href: "https://linkedin.com/in/yash-verma-baymax1705/",
                icon: <Linkedin className="w-4 h-4" />,
                label: "LinkedIn",
                color: "hover:text-blue-500",
              },
              {
                href: "mailto:yashverma.off17@gmail.com",
                icon: <Mail className="w-4 h-4" />,
                label: "Email",
                color: "hover:text-red-400",
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1.5 text-xs font-semibold transition-colors group ${s.color}`}
              >
                <span className="group-hover:scale-110 transition-transform">{s.icon}</span>
                {s.label}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
