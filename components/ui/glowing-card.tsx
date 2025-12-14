"use client";

// src/components/ui/glowing-card.tsx
import * as React from "react";
import { motion, useMotionTemplate, useMotionValue, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowingCardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: React.ReactNode;
  glowColor?: string;
  borderRadius?: string;
}

export function GlowingCard({
  children,
  className,
  glowColor = "rgba(99, 102, 241, 0.15)",
  borderRadius = "1rem",
  ...props
}: GlowingCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const { currentTarget, clientX, clientY } = event;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      className={cn(
        "group relative rounded-2xl border border-border/50 bg-card p-px transition-shadow duration-300 hover:shadow-xl",
        className
      )}
      onMouseMove={handleMouseMove}
      style={{ borderRadius }}
      {...props}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          borderRadius,
          background: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              ${glowColor},
              transparent 80%
            )
          `,
        }}
      />
      <div
        className="relative rounded-2xl bg-card"
        style={{ borderRadius: `calc(${borderRadius} - 1px)` }}
      >
        {children}
      </div>
    </motion.div>
  );
}

interface GlowingBorderCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  gradientFrom?: string;
  gradientTo?: string;
}

export function GlowingBorderCard({
  children,
  className,
  gradientFrom = "#6366f1",
  gradientTo = "#a855f7",
  ...props
}: GlowingBorderCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl p-px bg-gradient-to-r",
        className
      )}
      style={{
        backgroundImage: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`,
      }}
      {...props}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-brand-500 to-purple-500 opacity-20 blur-xl" />
      <div className="relative rounded-2xl bg-background p-6">
        {children}
      </div>
    </div>
  );
}