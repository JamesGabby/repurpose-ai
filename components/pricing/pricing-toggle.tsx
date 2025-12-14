"use client";

// src/components/pricing/pricing-toggle.tsx
import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PricingToggleProps {
  isYearly: boolean;
  onToggle: (isYearly: boolean) => void;
  monthlyLabel?: string;
  yearlyLabel?: string;
  savingsLabel?: string;
}

export function PricingToggle({
  isYearly,
  onToggle,
  monthlyLabel = "Monthly",
  yearlyLabel = "Yearly",
  savingsLabel = "Save 20%",
}: PricingToggleProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative inline-flex items-center rounded-full border border-border bg-muted/50 p-1">
        {/* Background slider */}
        <motion.div
          className="absolute h-[calc(100%-8px)] rounded-full bg-background shadow-md"
          initial={false}
          animate={{
            x: isYearly ? "100%" : "0%",
            width: isYearly ? "calc(50% + 4px)" : "calc(50% - 4px)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={{ left: 4, top: 4 }}
        />

        {/* Monthly button */}
        <button
          onClick={() => onToggle(false)}
          className={cn(
            "relative z-10 rounded-full px-6 py-2 text-sm font-medium transition-colors",
            !isYearly ? "text-foreground" : "text-muted-foreground"
          )}
        >
          {monthlyLabel}
        </button>

        {/* Yearly button */}
        <button
          onClick={() => onToggle(true)}
          className={cn(
            "relative z-10 rounded-full px-6 py-2 text-sm font-medium transition-colors",
            isYearly ? "text-foreground" : "text-muted-foreground"
          )}
        >
          {yearlyLabel}
        </button>
      </div>

      {/* Savings badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isYearly ? 1 : 0, y: isYearly ? 0 : -10 }}
        transition={{ duration: 0.2 }}
        className="flex items-center gap-1.5"
      >
        <span className="inline-flex items-center rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-600 dark:text-green-400">
          {savingsLabel}
        </span>
        <span className="text-xs text-muted-foreground">when billed yearly</span>
      </motion.div>
    </div>
  );
}