"use client";

// src/components/hero/hero-stats.tsx
import * as React from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface Stat {
  value: string;
  suffix?: string;
  label: string;
}

interface HeroStatsProps {
  stats: Stat[];
  className?: string;
}

export function HeroStats({ stats, className }: HeroStatsProps) {
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
            staggerChildren: 0.15,
          },
        },
      }}
      className={cn(
        "grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-12",
        // Container styling matching hero section
        "p-6 sm:p-8 rounded-2xl sm:rounded-3xl",
        "bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm",
        "border border-gray-200/50 dark:border-gray-700/50",
        "shadow-xl shadow-brand-500/5",
        className
      )}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            },
          }}
          className="relative text-center group"
        >
          {/* Background decoration - matches hero ambient glows */}
          <div className={cn(
            "absolute inset-0 rounded-xl",
            "bg-gradient-to-b from-brand-500/5 via-purple-500/5 to-transparent",
            "opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          )} />

          {/* Decorative top accent line */}
          <div className={cn(
            "absolute -top-3 left-1/2 -translate-x-1/2",
            "w-12 h-1 rounded-full",
            "bg-gradient-to-r from-brand-500 via-purple-500 to-pink-500",
            "opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          )} />

          <div className="relative py-2">
            <div className="flex items-baseline justify-center gap-1">
              <AnimatedNumber
                value={parseInt(stat.value)}
                isInView={isInView}
                className={cn(
                  "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight",
                  "text-gray-900 dark:text-white"
                )}
              />
              {stat.suffix && (
                <span className={cn(
                  "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold",
                  // Gradient matching hero headline highlight
                  "bg-gradient-to-r from-brand-600 via-purple-600 to-pink-600",
                  "dark:from-brand-400 dark:via-purple-400 dark:to-pink-400",
                  "bg-clip-text text-transparent"
                )}>
                  {stat.suffix}
                </span>
              )}
            </div>
            <p className={cn(
              "mt-2 text-xs sm:text-sm md:text-base font-medium",
              "text-gray-600 dark:text-gray-400"
            )}>
              {stat.label}
            </p>
          </div>

          {/* Divider between stats - hidden on last item and mobile */}
          {index < stats.length - 1 && (
            <div className={cn(
              "absolute right-0 top-1/2 -translate-y-1/2",
              "hidden sm:block",
              "w-px h-16",
              "bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-600 to-transparent"
            )} />
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}

interface AnimatedNumberProps {
  value: number;
  isInView: boolean;
  className?: string;
}

function AnimatedNumber({ value, isInView, className }: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = React.useState(0);

  React.useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const startTime = performance.now();
    const startValue = 0;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-out-expo)
      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentValue = Math.round(startValue + (value - startValue) * easeOutExpo);

      setDisplayValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value, isInView]);

  return <span className={className}>{displayValue.toLocaleString()}</span>;
}

interface StatCardProps {
  stat: Stat;
  index: number;
  className?: string;
}

export function StatCard({ stat, index, className }: StatCardProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "relative rounded-xl sm:rounded-2xl p-4 sm:p-6",
        // Background matching hero social proof card
        "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm",
        "border border-gray-200 dark:border-gray-700",
        // Hover effects with brand colors
        "hover:border-brand-300 dark:hover:border-brand-700",
        "hover:shadow-lg hover:shadow-brand-500/10",
        "transition-all duration-300 group",
        className
      )}
    >
      {/* Gradient glow on hover - matches hero ambient glows */}
      <div className={cn(
        "absolute inset-0 rounded-xl sm:rounded-2xl -z-10 blur-xl",
        "bg-gradient-to-r from-brand-500/20 via-purple-500/20 to-pink-500/20",
        "opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      )} />

      <div className="flex items-baseline gap-1">
        <AnimatedNumber
          value={parseInt(stat.value)}
          isInView={isInView}
          className={cn(
            "text-3xl sm:text-4xl font-bold",
            "text-gray-900 dark:text-white"
          )}
        />
        {stat.suffix && (
          <span className={cn(
            "text-2xl sm:text-3xl font-bold",
            "bg-gradient-to-r from-brand-600 via-purple-600 to-pink-600",
            "dark:from-brand-400 dark:via-purple-400 dark:to-pink-400",
            "bg-clip-text text-transparent"
          )}>
            {stat.suffix}
          </span>
        )}
      </div>
      <p className={cn(
        "mt-2 text-xs sm:text-sm font-medium",
        "text-gray-600 dark:text-gray-400"
      )}>
        {stat.label}
      </p>

      {/* Decorative top border - matches hero brand accent style */}
      <div className={cn(
        "absolute top-0 left-6 sm:left-8 right-6 sm:right-8 h-px",
        "bg-gradient-to-r from-transparent via-brand-500/50 to-transparent",
        "opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      )} />
    </motion.div>
  );
}