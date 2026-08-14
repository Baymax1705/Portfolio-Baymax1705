import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // <-- ADD THIS LINE
  images: {
    unoptimized: true, // <-- ADD THIS LINE (needed for static images)
  },
};

export default nextConfig;
