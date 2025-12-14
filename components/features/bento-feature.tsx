"use client";

// src/components/features/bento-feature.tsx
import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";

interface BentoFeatureProps {
  title: string;
  description: string;
  icon: keyof typeof Icons;
  className?: string;
  size?: "default" | "large";
  gradient?: string;
  children?: React.ReactNode;
}

export function BentoFeature({
  title,
  description,
  icon,
  className,
  size = "default",
  gradient = "from-brand-500 to-purple-500",
  children,
}: BentoFeatureProps) {
  const IconComponent = Icons[icon] || Icons.sparkles;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.4 }}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-border/50 bg-card",
        "hover:border-brand-500/30 hover:shadow-xl hover:shadow-brand-500/5",
        "transition-all duration-300",
        size === "large" ? "p-8 md:p-10" : "p-6 md:p-8",
        className
      )}
    >
      {/* Background gradient on hover */}
      <div
        className={cn(
          "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
          `bg-gradient-to-br ${gradient}`,
          "opacity-0 group-hover:opacity-[0.02]"
        )}
      />

      {/* Icon */}
      <div
        className={cn(
          "inline-flex items-center justify-center rounded-2xl",
          `bg-gradient-to-br ${gradient}`,
          "p-3 text-white shadow-lg",
          "transition-transform duration-300 group-hover:scale-110"
        )}
      >
        <IconComponent className={cn(size === "large" ? "h-7 w-7" : "h-6 w-6")} />
      </div>

      {/* Content */}
      <div className="mt-5">
        <h3
          className={cn(
            "font-semibold tracking-tight",
            size === "large" ? "text-2xl" : "text-xl"
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            "mt-2 text-muted-foreground leading-relaxed",
            size === "large" ? "text-base" : "text-sm"
          )}
        >
          {description}
        </p>
      </div>

      {/* Optional children for custom content */}
      {children && <div className="mt-6">{children}</div>}

      {/* Decorative elements */}
      <div
        className={cn(
          "absolute -bottom-2 -right-2 h-24 w-24 rounded-full",
          `bg-gradient-to-br ${gradient}`,
          "opacity-5 blur-2xl group-hover:opacity-10 transition-opacity duration-300"
        )}
      />
    </motion.div>
  );
}