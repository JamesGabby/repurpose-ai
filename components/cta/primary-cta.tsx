"use client";

// src/components/cta/primary-cta.tsx
import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";
import { CustomButton } from "@/components/ui/custom-button";

interface PrimaryCtaProps {
  badge?: string;
  headline: {
    main: string;
    highlight: string;
  };
  description: string;
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton: {
    text: string;
    href: string;
  };
  features: string[];
  className?: string;
}

export function PrimaryCta({
  badge,
  headline,
  description,
  primaryButton,
  secondaryButton,
  features,
  className,
}: PrimaryCtaProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className={cn("relative overflow-hidden rounded-3xl", className)}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-600 via-purple-600 to-pink-600" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-1/2 -left-1/2 h-full w-full rounded-full bg-white/5 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-1/2 -right-1/2 h-full w-full rounded-full bg-white/5 blur-3xl"
        />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
            className="absolute rounded-full bg-white/10"
            style={{
              width: 8 + i * 4,
              height: 8 + i * 4,
              left: `${15 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
          />
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 px-6 py-16 md:px-12 md:py-20 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                <Icons.sparkles className="h-4 w-4" />
                {badge}
              </span>
            </motion.div>
          )}

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
          >
            {headline.main}
            <br />
            <span className="relative">
              <span className="relative z-10">{headline.highlight}</span>
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute bottom-2 left-0 h-3 bg-white/20 -z-0"
              />
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg text-white/80 md:text-xl max-w-2xl mx-auto"
          >
            {description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href={primaryButton.href}>
              <CustomButton
                variant="white"
                size="xl"
                glowEffect
                rightIcon={
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Icons.arrowRight className="h-5 w-5" />
                  </motion.span>
                }
                className="w-full sm:w-auto shadow-xl"
              >
                {primaryButton.text}
              </CustomButton>
            </Link>
            <Link href={secondaryButton.href}>
              <CustomButton
                variant="outline"
                size="xl"
                leftIcon={<Icons.play className="h-5 w-5" />}
                className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10"
              >
                {secondaryButton.text}
              </CustomButton>
            </Link>
          </motion.div>

          {/* Features list */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-2 text-sm text-white/80"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
                  <Icons.check className="h-3 w-3 text-white" />
                </span>
                {feature}
              </motion.div>
            ))}
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex items-center justify-center gap-8"
          >
            <div className="flex items-center gap-2 text-white/60">
              <Icons.shield className="h-5 w-5" />
              <span className="text-sm">Secure & Private</span>
            </div>
            <div className="flex items-center gap-2 text-white/60">
              <Icons.zap className="h-5 w-5" />
              <span className="text-sm">Instant Setup</span>
            </div>
            <div className="flex items-center gap-2 text-white/60">
              <Icons.users className="h-5 w-5" />
              <span className="text-sm">50K+ Users</span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}