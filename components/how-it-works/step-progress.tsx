"use client";

// src/components/how-it-works/step-progress.tsx
import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StepProgressProps {
  currentStep: number;
  totalSteps: number;
  className?: string;
}

export function StepProgress({
  currentStep,
  totalSteps,
  className,
}: StepProgressProps) {
  return (
    <div className={cn("flex items-center justify-center gap-2", className)}>
      {Array.from({ length: totalSteps }).map((_, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === currentStep;
        const isCompleted = stepNumber < currentStep;

        return (
          <React.Fragment key={index}>
            {/* Step Indicator */}
            <motion.div
              animate={{
                scale: isActive ? 1.2 : 1,
                backgroundColor: isActive || isCompleted ? "hsl(var(--primary))" : "hsl(var(--muted))",
              }}
              transition={{ duration: 0.3 }}
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition-colors",
                isActive || isCompleted
                  ? "text-primary-foreground"
                  : "text-muted-foreground"
              )}
            >
              {isCompleted ? (
                <motion.svg
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </motion.svg>
              ) : (
                stepNumber
              )}
            </motion.div>

            {/* Connector Line */}
            {index < totalSteps - 1 && (
              <div className="relative h-1 w-12 md:w-20 rounded-full bg-muted overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{
                    width: isCompleted ? "100%" : isActive ? "50%" : "0%",
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute left-0 top-0 h-full rounded-full bg-primary"
                />
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

interface StepProgressVerticalProps {
  currentStep: number;
  steps: Array<{ id: number; title: string }>;
  className?: string;
  onStepClick?: (step: number) => void;
}

export function StepProgressVertical({
  currentStep,
  steps,
  className,
  onStepClick,
}: StepProgressVerticalProps) {
  return (
    <div className={cn("space-y-0", className)}>
      {steps.map((step, index) => {
        const isActive = step.id === currentStep;
        const isCompleted = step.id < currentStep;
        const isLast = index === steps.length - 1;

        return (
          <div key={step.id} className="flex gap-4">
            {/* Timeline */}
            <div className="flex flex-col items-center">
              {/* Circle */}
              <motion.button
                onClick={() => onStepClick?.(step.id)}
                animate={{
                  scale: isActive ? 1.1 : 1,
                }}
                className={cn(
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 font-semibold transition-colors",
                  isActive
                    ? "border-brand-500 bg-brand-500 text-white"
                    : isCompleted
                    ? "border-brand-500 bg-brand-500/10 text-brand-500"
                    : "border-muted-foreground/30 text-muted-foreground"
                )}
              >
                {isCompleted ? (
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  step.id
                )}
              </motion.button>

              {/* Line */}
              {!isLast && (
                <div className="relative w-0.5 flex-1 min-h-[60px] bg-muted my-2">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{
                      height: isCompleted ? "100%" : "0%",
                    }}
                    transition={{ duration: 0.5 }}
                    className="absolute left-0 top-0 w-full bg-brand-500"
                  />
                </div>
              )}
            </div>

            {/* Content */}
            <div className="pb-8">
              <motion.p
                animate={{
                  color: isActive ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))",
                }}
                className={cn(
                  "font-medium transition-colors cursor-pointer hover:text-foreground",
                  isActive && "text-lg"
                )}
                onClick={() => onStepClick?.(step.id)}
              >
                {step.title}
              </motion.p>
            </div>
          </div>
        );
      })}
    </div>
  );
}