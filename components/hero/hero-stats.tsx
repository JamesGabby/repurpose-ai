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
        "grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12",
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
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="relative">
            <div className="flex items-baseline justify-center gap-1">
              <AnimatedNumber
                value={parseInt(stat.value)}
                isInView={isInView}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              />
              {stat.suffix && (
                <span className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text">
                  {stat.suffix}
                </span>
              )}
            </div>
            <p className="mt-2 text-sm md:text-base text-muted-foreground font-medium">
              {stat.label}
            </p>
          </div>
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
        "relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6",
        "hover:border-brand-500/30 hover:shadow-lg hover:shadow-brand-500/5",
        "transition-all duration-300 group",
        className
      )}
    >
      {/* Gradient border on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-brand-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />

      <div className="flex items-baseline gap-1">
        <AnimatedNumber
          value={parseInt(stat.value)}
          isInView={isInView}
          className="text-4xl font-bold"
        />
        {stat.suffix && (
          <span className="text-3xl font-bold gradient-text">{stat.suffix}</span>
        )}
      </div>
      <p className="mt-2 text-sm text-muted-foreground font-medium">{stat.label}</p>

      {/* Decorative top border */}
      <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}