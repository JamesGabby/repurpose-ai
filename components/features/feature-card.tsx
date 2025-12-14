"use client";

// src/components/features/feature-card.tsx
import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";
import { featureColors } from "@/config/features";

type IconName = keyof typeof Icons;

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  benefits: string[];
  color: string;
  index: number;
}

export function FeatureCard({
  icon,
  title,
  description,
  benefits,
  color,
  index,
}: FeatureCardProps) {
  const colors = featureColors[color] || featureColors.blue;
  const IconComponent = Icons[icon as IconName] || Icons.sparkles;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative"
    >
      <div
        className={cn(
          "relative h-full rounded-2xl border bg-card p-6 md:p-8",
          "transition-all duration-300",
          "hover:shadow-xl hover:shadow-brand-500/5",
          colors.border,
          "hover:border-brand-500/30"
        )}
      >
        {/* Gradient overlay on hover */}
        <div
          className={cn(
            "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300",
            `bg-gradient-to-br ${colors.gradient}`,
            "opacity-0 group-hover:opacity-[0.03]"
          )}
        />

        {/* Icon */}
        <div
          className={cn(
            "inline-flex h-12 w-12 items-center justify-center rounded-xl",
            colors.bg,
            "transition-transform duration-300 group-hover:scale-110"
          )}
        >
          <IconComponent className={cn("h-6 w-6", colors.text)} />
        </div>

        {/* Content */}
        <div className="mt-5">
          <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        {/* Benefits List */}
        <ul className="mt-5 space-y-2">
          {benefits.map((benefit, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <span
                className={cn(
                  "flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                  colors.bg
                )}
              >
                <Icons.check className={cn("h-3 w-3", colors.text)} />
              </span>
              {benefit}
            </motion.li>
          ))}
        </ul>

        {/* Decorative corner gradient */}
        <div
          className={cn(
            "absolute -top-px -right-px h-20 w-20 rounded-tr-2xl rounded-bl-full",
            `bg-gradient-to-br ${colors.gradient}`,
            "opacity-10 group-hover:opacity-20 transition-opacity duration-300"
          )}
        />
      </div>
    </motion.div>
  );
}