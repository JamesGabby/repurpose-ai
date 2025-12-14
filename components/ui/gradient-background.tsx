"use client";

// src/components/ui/gradient-background.tsx
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradientBackgroundProps {
  className?: string;
  variant?: "default" | "hero" | "subtle" | "mesh";
  animated?: boolean;
}

export function GradientBackground({
  className,
  variant = "default",
  animated = true,
}: GradientBackgroundProps) {
  if (variant === "hero") {
    return (
      <div className={cn("absolute inset-0 overflow-hidden", className)}>
        {/* Main gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-brand-950" />
        
        {/* Animated orbs */}
        {animated && (
          <>
            <motion.div
              className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-brand-400/30 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute top-1/2 -left-40 h-96 w-96 rounded-full bg-purple-400/20 blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-40 right-1/3 h-96 w-96 rounded-full bg-pink-400/20 blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </>
        )}
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 grid-pattern opacity-50" />
      </div>
    );
  }

  if (variant === "mesh") {
    return (
      <div className={cn("absolute inset-0 overflow-hidden", className)}>
        <div className="absolute inset-0 bg-background" />
        <svg
          className="absolute inset-0 h-full w-full opacity-30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="mesh-pattern"
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 32V0h32"
                fill="none"
                stroke="currentColor"
                strokeOpacity="0.1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mesh-pattern)" />
        </svg>
        {animated && (
          <motion.div
            className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-brand-500/10 to-purple-500/10 blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}
      </div>
    );
  }

  if (variant === "subtle") {
    return (
      <div className={cn("absolute inset-0 overflow-hidden", className)}>
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background" />
        <div className="absolute inset-0 dot-pattern opacity-30" />
      </div>
    );
  }

  // Default variant
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50 to-white dark:from-gray-900 dark:to-gray-950" />
    </div>
  );
}

export function NoiseOverlay({ opacity = 0.02 }: { opacity?: number }) {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        opacity,
      }}
    />
  );
}