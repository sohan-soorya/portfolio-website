import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header, Footer } from "@/components/portfolio";
import "./globals.css";

const geist = Geist({ subsets: ['latin'], variable: '--font-geist', display: 'swap' });
const mono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono', display: 'swap' });

export const metadata: Metadata = {
  title: { default: "Soorya — Full-stack software engineer", template: "%s — Soorya" },
  description: "Full-stack healthcare software, from interface to infrastructure. Explore Soorya's work in pharmacy management, hospital analytics, and AI systems.",
  openGraph: { title: "Soorya — Full-stack software engineer", description: "Thoughtful interfaces. Connected systems. Explore my work in healthcare software, analytics, and AI.", type: 'website' },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geist.variable} ${mono.variable}`}>
      <body><Header />{children}<Footer /></body>
    </html>
  );
}
