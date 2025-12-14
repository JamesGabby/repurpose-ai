"use client";

// src/components/faq/faq-contact.tsx
import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";

type IconName = keyof typeof Icons;

interface ContactOption {
  icon: string;
  title: string;
  description: string;
  action: string;
  actionLabel: string;
}

interface FAQContactProps {
  title: string;
  description: string;
  options: ContactOption[];
  className?: string;
}

export function FAQContact({
  title,
  description,
  options,
  className,
}: FAQContactProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "relative overflow-hidden rounded-3xl border border-border bg-card",
        className
      )}
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

      <div className="relative p-8 md:p-12">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-500/10 mb-4"
          >
            <Icons.mail className="h-8 w-8 text-brand-500" />
          </motion.div>
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="mt-2 text-muted-foreground max-w-md mx-auto">
            {description}
          </p>
        </div>

        {/* Contact options */}
        <div className="grid gap-4 sm:grid-cols-2 max-w-2xl mx-auto">
          {options.map((option, index) => {
            const IconComponent = Icons[option.icon as IconName] || Icons.mail;
            const isEmail = option.action.includes("@");

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="rounded-2xl border border-border bg-background p-6 text-center hover:shadow-lg hover:border-brand-500/30 transition-all duration-300"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 mb-4">
                  <IconComponent className="h-6 w-6 text-brand-500" />
                </div>
                <h4 className="font-semibold">{option.title}</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  {option.description}
                </p>
                {isEmail ? (
                  <a
                    href={`mailto:${option.action}`}
                    className="mt-4 inline-flex items-center gap-2 rounded-xl bg-brand-500 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-600 transition-colors"
                  >
                    {option.actionLabel}
                    <Icons.arrowRight className="h-4 w-4" />
                  </a>
                ) : (
                  <Link
                    href={option.action}
                    className="mt-4 inline-flex items-center gap-2 rounded-xl bg-brand-500 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-600 transition-colors"
                  >
                    {option.actionLabel}
                    <Icons.arrowRight className="h-4 w-4" />
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Additional help links */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
          <Link
            href="/docs"
            className="flex items-center gap-1.5 hover:text-foreground transition-colors"
          >
            <Icons.fileText className="h-4 w-4" />
            Documentation
          </Link>
          <span className="text-border">•</span>
          <Link
            href="/community"
            className="flex items-center gap-1.5 hover:text-foreground transition-colors"
          >
            <Icons.users className="h-4 w-4" />
            Community
          </Link>
          <span className="text-border">•</span>
          <Link
            href="/status"
            className="flex items-center gap-1.5 hover:text-foreground transition-colors"
          >
            <Icons.zap className="h-4 w-4" />
            System Status
          </Link>
        </div>
      </div>
    </motion.div>
  );
}