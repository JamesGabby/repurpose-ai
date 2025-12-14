"use client";

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
  const [isAnnouncementVisible, setIsAnnouncementVisible] = React.useState(false);

  return (
    <>
      {showScrollProgress && <ScrollProgress />}

      {/* Banner - fixed at very top */}
      {showAnnouncement && (
        <div className="fixed top-0 left-0 right-0 z-[60]">
          <AnnouncementBanner
            message="🚀 New: Introducing AI-powered carousel generation!"
            link={{
              text: "Learn more",
              href: "#features",
            }}
            onVisibilityChange={setIsAnnouncementVisible}
          />
        </div>
      )}

      {/* Header - positioned below banner */}
      <Header announcementVisible={showAnnouncement && isAnnouncementVisible} />

      <main className="min-h-screen">{children}</main>

      <Footer />
      <BackToTop />
    </>
  );
}