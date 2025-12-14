// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Alternative without Cal Sans - update layout.tsx
const calSans = Inter({
  subsets: ["latin"],
  variable: "--font-cal",
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "RepurposeAI - Transform One Piece of Content Into Dozens",
  description:
    "AI-powered content repurposing tool that transforms your blog posts, videos, and podcasts into engaging social media content for every platform. Save 10+ hours per week.",
  keywords: [
    "content repurposing",
    "AI content",
    "social media automation",
    "content marketing",
    "blog to social media",
    "content transformation",
  ],
  authors: [{ name: "RepurposeAI" }],
  creator: "RepurposeAI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://repurpose-ai.com",
    title: "RepurposeAI - Transform One Piece of Content Into Dozens",
    description:
      "AI-powered content repurposing tool that transforms your blog posts, videos, and podcasts into engaging social media content for every platform.",
    siteName: "RepurposeAI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "RepurposeAI - AI Content Repurposing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RepurposeAI - Transform One Piece of Content Into Dozens",
    description:
      "AI-powered content repurposing tool. Save 10+ hours per week on content creation.",
    images: ["/og-image.png"],
    creator: "@repurposeai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          inter.variable,
          calSans.variable,
          "min-h-screen bg-background font-sans antialiased"
        )}
      >
        {children}
      </body>
    </html>
  );
}