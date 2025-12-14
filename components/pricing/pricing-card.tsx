"use client";

// src/components/pricing/pricing-card.tsx
import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";
import { CustomButton } from "@/components/ui/custom-button";
import { PricingPlan } from "@/config/pricing";

interface PricingCardProps {
  plan: PricingPlan;
  isYearly: boolean;
  index: number;
}

export function PricingCard({ plan, isYearly, index }: PricingCardProps) {
  const price = isYearly ? plan.price.yearly : plan.price.monthly;
  const isFreePlan = price === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: plan.popular ? -8 : -5 }}
      className={cn(
        "relative flex flex-col rounded-2xl border bg-card transition-shadow duration-300",
        plan.popular
          ? "border-brand-500 shadow-xl shadow-brand-500/10 scale-105 z-10"
          : "border-border hover:border-brand-500/50 hover:shadow-lg"
      )}
    >
      {/* Popular badge */}
      {plan.popular && (
        <div className="absolute -top-4 left-0 right-0 flex justify-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-4 py-1.5",
              "bg-gradient-to-r text-white text-sm font-semibold shadow-lg",
              plan.gradient
            )}
          >
            <Icons.star className="h-3.5 w-3.5 fill-current" />
            Most Popular
          </motion.span>
        </div>
      )}

      {/* Card content */}
      <div className="flex flex-col flex-1 p-6 md:p-8">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-xl font-bold">{plan.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>
        </div>

        {/* Price */}
        <div className="mb-6">
          <div className="flex items-baseline gap-1">
            <span className="text-4xl md:text-5xl font-bold tracking-tight">
              {isFreePlan ? "Free" : `$${price}`}
            </span>
            {!isFreePlan && (
              <span className="text-muted-foreground">/month</span>
            )}
          </div>
          {isYearly && !isFreePlan && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-1 text-sm text-muted-foreground"
            >
              ${price * 12} billed yearly
              <span className="ml-2 text-green-600 dark:text-green-400 font-medium">
                (Save ${(plan.price.monthly - plan.price.yearly) * 12})
              </span>
            </motion.p>
          )}
          {isFreePlan && (
            <p className="mt-1 text-sm text-muted-foreground">
              Forever free, no credit card required
            </p>
          )}
        </div>

        {/* CTA Button */}
        <div className="mb-6">
          <CustomButton
            variant={plan.popular ? "gradient" : "outline"}
            size="lg"
            className="w-full"
            rightIcon={<Icons.arrowRight className="h-4 w-4" />}
          >
            {plan.cta}
          </CustomButton>
        </div>

        {/* Features */}
        <div className="flex-1">
          <p className="text-sm font-medium text-muted-foreground mb-4">
            What's included:
          </p>
          <ul className="space-y-3">
            {plan.features.map((feature, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.05 }}
                className="flex items-start gap-3"
              >
                {feature.included ? (
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500/10 mt-0.5">
                    <Icons.check className="h-3 w-3 text-green-500" />
                  </span>
                ) : (
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-muted mt-0.5">
                    <Icons.close className="h-3 w-3 text-muted-foreground" />
                  </span>
                )}
                <span
                  className={cn(
                    "text-sm",
                    feature.included
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {feature.text}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      {/* Gradient border for popular plan */}
      {plan.popular && (
        <div
          className={cn(
            "absolute inset-0 -z-10 rounded-2xl bg-gradient-to-b opacity-10",
            plan.gradient
          )}
        />
      )}
    </motion.div>
  );
}