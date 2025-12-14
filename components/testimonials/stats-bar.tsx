"use client";

// src/components/testimonials/stats-bar.tsx
import * as React from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

interface StatsBarProps {
  stats: Stat[];
  className?: string;
}

export function StatsBar({ stats, className }: StatsBarProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      className={cn(
        "grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8",
        className
      )}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5 },
            },
          }}
          className="relative text-center p-6 rounded-2xl bg-card border border-border"
        >
          <motion.p
            initial={{ scale: 0.5 }}
            animate={isInView ? { scale: 1 } : { scale: 0.5 }}
            transition={{ delay: 0.2 + index * 0.1, type: "spring" }}
            className="text-3xl md:text-4xl font-bold gradient-text"
          >
            {stat.value}
            {stat.suffix && (
              <span className="text-muted-foreground text-xl">{stat.suffix}</span>
            )}
          </motion.p>
          <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>

          {/* Decorative line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 rounded-full bg-gradient-to-r from-brand-500 to-purple-500" />
        </motion.div>
      ))}
    </motion.div>
  );
}