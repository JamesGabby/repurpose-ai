"use client";

// src/components/ui/section.tsx
import * as React from "react";
import { cn } from "@/lib/utils";
import { MotionWrapper } from "./motion";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  container?: "default" | "tight" | "wide" | "full";
  padding?: "default" | "sm" | "lg" | "none";
  background?: "default" | "muted" | "gradient" | "none";
}

export function Section({
  children,
  className,
  container = "default",
  padding = "default",
  background = "none",
  ...props
}: SectionProps) {
  const containerClasses = {
    default: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
    tight: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
    wide: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
    full: "w-full px-4 sm:px-6 lg:px-8",
  };

  const paddingClasses = {
    default: "py-16 md:py-24 lg:py-32",
    sm: "py-12 md:py-16 lg:py-20",
    lg: "py-20 md:py-32 lg:py-40",
    none: "",
  };

  const backgroundClasses = {
    default: "bg-background",
    muted: "bg-muted/50",
    gradient: "bg-gradient-to-b from-muted/50 to-background",
    none: "",
  };

  return (
    <section
      className={cn(
        paddingClasses[padding],
        backgroundClasses[background],
        "relative",
        className
      )}
      {...props}
    >
      <div className={containerClasses[container]}>{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  titleHighlight,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  const alignClasses = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={cn("max-w-3xl", alignClasses, className)}>
      <MotionWrapper animation="fadeInUp">
        {badge && (
          <span className="inline-flex items-center rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700 dark:bg-brand-900 dark:text-brand-300 mb-4">
            {badge}
          </span>
        )}
      </MotionWrapper>

      <MotionWrapper animation="fadeInUp" delay={0.1}>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          {title}{" "}
          {titleHighlight && (
            <span className="gradient-text">{titleHighlight}</span>
          )}
        </h2>
      </MotionWrapper>

      {description && (
        <MotionWrapper animation="fadeInUp" delay={0.2}>
          <p className="mt-4 text-lg text-muted-foreground lg:text-xl">
            {description}
          </p>
        </MotionWrapper>
      )}
    </div>
  );
}