"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.9,
      // Smooth ease-out that fully resolves — no asymptotic freeze at bottom
      easing: (t) => 1 - Math.pow(1 - t, 3),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.1,
      touchMultiplier: 1.8,
      infinite: false,
    });

    let rafHandle: number;

    function raf(time: number) {
      lenis.raf(time);
      rafHandle = requestAnimationFrame(raf);
    }

    rafHandle = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafHandle);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
