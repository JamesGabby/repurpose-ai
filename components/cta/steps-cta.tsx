"use client";

// src/components/cta/steps-cta.tsx
import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";

interface Step {
  number: string;
  title: string;
  description: string;
}

interface StepsCtaProps {
  headline: string;
  steps: Step[];
  className?: string;
}

export function StepsCta({ headline, steps, className }: StepsCtaProps) {
  return (
    <div className={cn("text-center", className)}>
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-bold mb-12"
      >
        {headline}
      </motion.h3>

      <div className="relative">
        {/* Connection line */}
        <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-500/30 to-transparent hidden md:block" />

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative"
            >
              {/* Step number */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-purple-500 text-2xl font-bold text-white shadow-lg shadow-brand-500/30"
              >
                {step.number}

                {/* Pulse effect */}
                <span className="absolute inset-0 rounded-2xl bg-brand-500 animate-ping opacity-20" />
              </motion.div>

              {/* Arrow connector (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="absolute top-8 left-[calc(50%+3rem)] hidden md:block">
                  <Icons.arrowRight className="h-5 w-5 text-brand-500/50" />
                </div>
              )}

              {/* Content */}
              <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}