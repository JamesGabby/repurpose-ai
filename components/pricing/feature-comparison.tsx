"use client";

// src/components/pricing/feature-comparison.tsx
import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";

interface Feature {
  name: string;
  starter: string | boolean;
  pro: string | boolean;
  business: string | boolean;
}

const comparisonFeatures: Feature[] = [
  { name: "Repurposes per month", starter: "5", pro: "50", business: "Unlimited" },
  { name: "Platforms supported", starter: "3", pro: "All", business: "All" },
  { name: "AI model", starter: "Basic", pro: "GPT-4o", business: "GPT-4o & Claude" },
  { name: "Brand voice training", starter: false, pro: true, business: true },
  { name: "Content calendar", starter: false, pro: true, business: true },
  { name: "Team members", starter: "1", pro: "1", business: "5" },
  { name: "API access", starter: false, pro: false, business: true },
  { name: "Priority support", starter: false, pro: true, business: true },
  { name: "Custom templates", starter: false, pro: true, business: true },
  { name: "Analytics dashboard", starter: "Basic", pro: "Advanced", business: "Advanced" },
  { name: "Export options", starter: "Copy", pro: "All", business: "All" },
  { name: "Integrations", starter: false, pro: "5", business: "Unlimited" },
];

interface FeatureComparisonProps {
  className?: string;
}

export function FeatureComparison({ className }: FeatureComparisonProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const displayedFeatures = isExpanded
    ? comparisonFeatures
    : comparisonFeatures.slice(0, 6);

  return (
    <div className={className}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h3 className="text-2xl font-bold">Compare Plans</h3>
        <p className="mt-2 text-muted-foreground">
          See what's included in each plan
        </p>
      </motion.div>

      <div className="overflow-x-auto">
        <div className="min-w-[640px]">
          {/* Header */}
          <div className="grid grid-cols-4 gap-4 border-b border-border pb-4 mb-4">
            <div className="font-semibold text-muted-foreground">Features</div>
            <div className="text-center font-semibold">Starter</div>
            <div className="text-center font-semibold text-brand-600 dark:text-brand-400">
              Pro
            </div>
            <div className="text-center font-semibold">Business</div>
          </div>

          {/* Features */}
          <div className="space-y-2">
            {displayedFeatures.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={cn(
                  "grid grid-cols-4 gap-4 py-3 px-4 rounded-lg",
                  index % 2 === 0 ? "bg-muted/30" : ""
                )}
              >
                <div className="text-sm font-medium">{feature.name}</div>
                <FeatureValue value={feature.starter} />
                <FeatureValue value={feature.pro} highlight />
                <FeatureValue value={feature.business} />
              </motion.div>
            ))}
          </div>

          {/* Expand/Collapse button */}
          {comparisonFeatures.length > 6 && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-6 mx-auto flex items-center gap-2 text-sm font-medium text-brand-600 dark:text-brand-400 hover:underline"
            >
              {isExpanded ? "Show less" : "Show all features"}
              <motion.span
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <Icons.chevronDown className="h-4 w-4" />
              </motion.span>
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
}

function FeatureValue({
  value,
  highlight = false,
}: {
  value: string | boolean;
  highlight?: boolean;
}) {
  if (typeof value === "boolean") {
    return (
      <div className="flex justify-center">
        {value ? (
          <span
            className={cn(
              "flex h-6 w-6 items-center justify-center rounded-full",
              highlight ? "bg-brand-500/10" : "bg-green-500/10"
            )}
          >
            <Icons.check
              className={cn(
                "h-4 w-4",
                highlight ? "text-brand-500" : "text-green-500"
              )}
            />
          </span>
        ) : (
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-muted">
            <Icons.close className="h-4 w-4 text-muted-foreground" />
          </span>
        )}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "text-center text-sm",
        highlight ? "font-semibold text-brand-600 dark:text-brand-400" : ""
      )}
    >
      {value}
    </div>
  );
}