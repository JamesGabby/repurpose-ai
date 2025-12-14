"use client";

// src/components/how-it-works/step-card.tsx
import * as React from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";

interface StepCardProps {
  step: {
    id: number;
    title: string;
    description: string;
    features: string[];
    visual: string;
  };
  index: number;
  isActive: boolean;
  onClick: () => void;
}

export function StepCard({ step, index, isActive, onClick }: StepCardProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      onClick={onClick}
      className={cn(
        "relative cursor-pointer rounded-2xl border p-6 transition-all duration-300",
        isActive
          ? "border-brand-500 bg-brand-500/5 shadow-lg shadow-brand-500/10"
          : "border-border hover:border-brand-500/50 hover:bg-muted/50"
      )}
    >
      {/* Step Number */}
      <div className="flex items-start gap-4">
        <motion.div
          animate={isActive ? { scale: 1.1 } : { scale: 1 }}
          className={cn(
            "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-lg font-bold transition-colors duration-300",
            isActive
              ? "bg-brand-500 text-white shadow-lg shadow-brand-500/30"
              : "bg-muted text-muted-foreground"
          )}
        >
          {step.id}
        </motion.div>

        <div className="flex-1">
          <h3
            className={cn(
              "text-xl font-semibold transition-colors duration-300",
              isActive ? "text-brand-600 dark:text-brand-400" : "text-foreground"
            )}
          >
            {step.title}
          </h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            {step.description}
          </p>

          {/* Features - Only show when active */}
          <motion.ul
            initial={false}
            animate={{
              height: isActive ? "auto" : 0,
              opacity: isActive ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-4 space-y-2">
              {step.features.map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-2 text-sm"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-500/10">
                    <Icons.check className="h-3 w-3 text-brand-500" />
                  </span>
                  <span className="text-muted-foreground">{feature}</span>
                </motion.li>
              ))}
            </div>
          </motion.ul>
        </div>
      </div>

      {/* Active indicator line */}
      {isActive && (
        <motion.div
          layoutId="activeStep"
          className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-brand-500"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </motion.div>
  );
}