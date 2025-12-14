"use client";

// src/components/layout/layout-wrapper.tsx
import * as React from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { BackToTop } from "./back-to-top";
import { ScrollProgress } from "./scroll-progress";
import { AnnouncementBanner } from "./announcement-banner";

interface LayoutWrapperProps {
  children: React.ReactNode;
  showAnnouncement?: boolean;
  showScrollProgress?: boolean;
}

export function LayoutWrapper({
  children,
  showAnnouncement = true,
  showScrollProgress = true,
}: LayoutWrapperProps) {
  return (
    <>
      {showScrollProgress && <ScrollProgress />}
      
      {showAnnouncement && (
        <AnnouncementBanner
          message="🚀 New: Introducing AI-powered carousel generation!"
          link={{
            text: "Learn more",
            href: "#features",
          }}
        />
      )}
      
      <Header />
      
      <main className="min-h-screen">
        {children}
      </main>
      
      <Footer />
      <BackToTop />
    </>
  );
}