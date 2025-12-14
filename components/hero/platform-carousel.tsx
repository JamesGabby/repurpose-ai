"use client";

// src/components/hero/platform-carousel.tsx
import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";

const platforms = [
  { name: "Twitter", icon: Icons.twitter, color: "#1DA1F2" },
  { name: "LinkedIn", icon: Icons.linkedin, color: "#0A66C2" },
  { name: "Instagram", icon: Icons.instagram, color: "#E4405F" },
  { name: "YouTube", icon: Icons.youtube, color: "#FF0000" },
  { name: "TikTok", icon: Icons.tiktok, color: "#000000" },
  { name: "Email", icon: Icons.mail, color: "#6366F1" },
  { name: "Threads", icon: Icons.threads, color: "#000000" },
  { name: "Blog", icon: Icons.fileText, color: "#10B981" },
];

interface PlatformCarouselProps {
  className?: string;
}

export function PlatformCarousel({ className }: PlatformCarouselProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

      {/* Scrolling container */}
      <motion.div
        className="flex gap-4"
        animate={{ x: [0, -1024] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {/* Duplicate platforms for seamless loop */}
        {[...platforms, ...platforms].map((platform, index) => (
          <motion.div
            key={`${platform.name}-${index}`}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-full",
              "bg-muted/50 border border-border/50",
              "whitespace-nowrap shrink-0"
            )}
            whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--muted))" }}
          >
            <platform.icon className="h-4 w-4" style={{ color: platform.color }} />
            <span className="text-sm font-medium text-muted-foreground">
              {platform.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

interface PlatformGridProps {
  className?: string;
}

export function PlatformGrid({ className }: PlatformGridProps) {
  return (
    <div className={cn("flex flex-wrap justify-center gap-3", className)}>
      {platforms.map((platform, index) => (
        <motion.div
          key={platform.name}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05, duration: 0.3 }}
          whileHover={{ scale: 1.1, y: -2 }}
          className={cn(
            "flex items-center gap-2 px-4 py-2 rounded-full",
            "bg-white dark:bg-gray-800 shadow-md",
            "border border-border/50",
            "cursor-default"
          )}
        >
          <platform.icon className="h-4 w-4" style={{ color: platform.color }} />
          <span className="text-sm font-medium">{platform.name}</span>
        </motion.div>
      ))}
    </div>
  );
}