"use client";

import React from "react";
import { ThemeProvider } from "next-themes";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SmoothScrollProvider>
        {children}
      </SmoothScrollProvider>
    </ThemeProvider>
  );
}

