"use client";

// src/components/ui/animated-badge.tsx
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default:
          "bg-brand-100 text-brand-700 dark:bg-brand-900 dark:text-brand-300",
        secondary:
          "bg-secondary text-secondary-foreground",
        success:
          "bg-success-50 text-success-600 dark:bg-success-900 dark:text-success-300",
        outline:
          "border border-brand-300 text-brand-700 dark:border-brand-700 dark:text-brand-300",
        gradient:
          "bg-gradient-to-r from-brand-500 to-purple-500 text-white",
        glow:
          "bg-brand-100 text-brand-700 shadow-lg shadow-brand-500/25 dark:bg-brand-900 dark:text-brand-300",
        new:
          "bg-gradient-to-r from-orange-500 to-pink-500 text-white",
      },
      size: {
        default: "px-3 py-1",
        sm: "px-2 py-0.5 text-[10px]",
        lg: "px-4 py-1.5 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Use Omit to remove conflicting event handlers from HTMLMotionProps
export interface AnimatedBadgeProps
  extends Omit<HTMLMotionProps<"div">, "children">,
    VariantProps<typeof badgeVariants> {
  pulse?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

function AnimatedBadge({
  className,
  variant,
  size,
  pulse = false,
  icon,
  children,
  ...props
}: AnimatedBadgeProps) {
  return (
    <motion.div
      className={cn(badgeVariants({ variant, size }), "relative", className)}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      {...props}
    >
      {pulse && (
        <span className="absolute inset-0 rounded-full animate-ping bg-brand-400 opacity-20" />
      )}
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </motion.div>
  );
}

export { AnimatedBadge, badgeVariants };