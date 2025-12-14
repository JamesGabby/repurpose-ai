"use client";

// src/components/cta/final-cta.tsx
import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";

interface FinalCtaProps {
  headline: string;
  subheadline: string;
  buttonText: string;
  className?: string;
}

export function FinalCta({
  headline,
  subheadline,
  buttonText,
  className,
}: FinalCtaProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className={cn("relative py-16 md:py-24", className)}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 bg-gradient-to-r from-brand-500/10 via-purple-500/10 to-pink-500/10 bg-[length:200%_100%]"
        />
      </div>

      <div className="relative z-10 text-center">
        {/* Logo mark animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 1 }}
          className="inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-brand-500 to-purple-500 text-white shadow-xl shadow-brand-500/30 mb-8"
        >
          <Icons.sparkles className="h-10 w-10" />
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
        >
          <span className="gradient-text">{headline}</span>
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-xl text-muted-foreground"
        >
          {subheadline}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10"
        >
          <Link href="/signup">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "group relative inline-flex items-center gap-3 rounded-2xl",
                "bg-gradient-to-r from-brand-500 to-purple-500",
                "px-10 py-5 text-lg font-semibold text-white",
                "shadow-xl shadow-brand-500/30",
                "transition-shadow duration-300 hover:shadow-2xl hover:shadow-brand-500/40"
              )}
            >
              {buttonText}
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Icons.arrowRight className="h-5 w-5" />
              </motion.span>

              {/* Shine effect */}
              <motion.span
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
          </Link>
        </motion.div>

        {/* Bottom links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground"
        >
          <Link
            href="/pricing"
            className="flex items-center gap-1.5 hover:text-foreground transition-colors"
          >
            <Icons.zap className="h-4 w-4" />
            View Pricing
          </Link>
          <span className="text-border">•</span>
          <Link
            href="/demo"
            className="flex items-center gap-1.5 hover:text-foreground transition-colors"
          >
            <Icons.play className="h-4 w-4" />
            Watch Demo
          </Link>
          <span className="text-border">•</span>
          <Link
            href="/contact"
            className="flex items-center gap-1.5 hover:text-foreground transition-colors"
          >
            <Icons.mail className="h-4 w-4" />
            Contact Sales
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}