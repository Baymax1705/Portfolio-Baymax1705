import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yash Verma | Software Engineer",
  description: "Computer Science Engineer focused on backend systems, full-stack applications, automation, and AI-powered products.",
  keywords: ["Yash Verma", "Software Engineer", "Backend Developer", "Full Stack Engineer", "IIT Ropar", "ModelSuite.ai"],
  authors: [{ name: "Yash Verma" }],
  openGraph: {
    title: "Yash Verma | Software Engineer",
    description: "Building scalable software products and intelligent systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
