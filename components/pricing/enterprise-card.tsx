"use client";

// src/components/pricing/enterprise-card.tsx
import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";
import { CustomButton } from "@/components/ui/custom-button";

interface EnterpriseCardProps {
  title: string;
  description: string;
  features: string[];
  cta: string;
}

export function EnterpriseCard({
  title,
  description,
  features,
  cta,
}: EnterpriseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-2xl border border-border bg-card"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative grid gap-8 p-6 md:p-8 lg:grid-cols-2 lg:gap-12 items-center">
        {/* Content */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-500/10 px-4 py-1.5 text-sm font-medium text-brand-600 dark:text-brand-400 mb-4">
            <Icons.sparkles className="h-4 w-4" />
            {title}
          </div>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
            Need a custom solution?
          </h3>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            {description}
          </p>
          <div className="mt-6">
            <CustomButton
              variant="gradient"
              size="lg"
              rightIcon={<Icons.arrowRight className="h-4 w-4" />}
            >
              {cta}
            </CustomButton>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 rounded-xl bg-muted/50 p-4"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-500/10">
                <Icons.check className="h-4 w-4 text-brand-500" />
              </span>
              <span className="text-sm font-medium">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}