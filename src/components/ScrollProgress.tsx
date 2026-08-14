"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-14 left-0 right-0 h-[2px] bg-gradient-to-r from-accent to-accent-end transform origin-[0%] z-50"
      style={{ scaleX }}
    />
  );
}
