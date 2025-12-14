"use client";

// src/components/pricing/guarantee-badge.tsx
import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";

interface GuaranteeBadgeProps {
  title: string;
  description: string;
  className?: string;
}

export function GuaranteeBadge({
  title,
  description,
  className,
}: GuaranteeBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-green-500/20 bg-green-500/5",
        className
      )}
    >
      <div className="flex flex-col md:flex-row items-center gap-6 p-6 md:p-8">
        {/* Shield icon */}
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-green-500/10">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icons.shield className="h-8 w-8 text-green-500" />
          </motion.div>
        </div>

        {/* Content */}
        <div className="flex-1 text-center md:text-left">
          <h4 className="text-lg font-semibold text-green-600 dark:text-green-400">
            {title}
          </h4>
          <p className="mt-1 text-muted-foreground">{description}</p>
        </div>

        {/* Badge */}
        <div className="flex shrink-0 items-center gap-2 rounded-full bg-green-500/10 px-4 py-2">
          <Icons.check className="h-5 w-5 text-green-500" />
          <span className="text-sm font-semibold text-green-600 dark:text-green-400">
            Risk-Free
          </span>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-green-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-green-500/10 blur-2xl" />
    </motion.div>
  );
}