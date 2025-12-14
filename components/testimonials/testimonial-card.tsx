"use client";

// src/components/testimonials/testimonial-card.tsx
import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";
import { Testimonial } from "@/config/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
  variant?: "default" | "compact" | "featured";
}

export function TestimonialCard({
  testimonial,
  index = 0,
  variant = "default",
}: TestimonialCardProps) {
  const platformIcons: Record<string, React.ReactNode> = {
    twitter: <Icons.twitter className="h-4 w-4 text-[#1DA1F2]" />,
    linkedin: <Icons.linkedin className="h-4 w-4 text-[#0A66C2]" />,
    instagram: <Icons.instagram className="h-4 w-4 text-[#E4405F]" />,
  };

  const platformColors: Record<string, string> = {
    twitter: "border-[#1DA1F2]/20 hover:border-[#1DA1F2]/40",
    linkedin: "border-[#0A66C2]/20 hover:border-[#0A66C2]/40",
    instagram: "border-[#E4405F]/20 hover:border-[#E4405F]/40",
  };

  if (variant === "compact") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className={cn(
          "rounded-xl border bg-card p-4 transition-all duration-300",
          "hover:shadow-lg hover:-translate-y-1",
          platformColors[testimonial.platform]
        )}
      >
        {/* Quote */}
        <p className="text-sm text-muted-foreground line-clamp-3">
          "{testimonial.quote}"
        </p>

        {/* Author */}
        <div className="mt-4 flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-brand-400 to-purple-400" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold truncate">{testimonial.author}</p>
            <p className="text-xs text-muted-foreground truncate">
              {testimonial.role}
            </p>
          </div>
          {platformIcons[testimonial.platform]}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className={cn(
        "group relative flex flex-col rounded-2xl border bg-card p-6 transition-all duration-300",
        "hover:shadow-xl hover:shadow-brand-500/5",
        platformColors[testimonial.platform]
      )}
    >
      {/* Platform badge */}
      <div className="absolute top-4 right-4">
        {platformIcons[testimonial.platform]}
      </div>

      {/* Quote icon */}
      <div className="mb-4">
        <Icons.quote className="h-8 w-8 text-brand-500/20" />
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Icons.star
            key={i}
            className="h-4 w-4 fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="flex-1">
        <p className="text-foreground leading-relaxed">"{testimonial.quote}"</p>
      </blockquote>

      {/* Author */}
      <div className="mt-6 flex items-center gap-4 pt-6 border-t border-border">
        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-brand-400 to-purple-400 ring-2 ring-background" />
        <div>
          <p className="font-semibold">{testimonial.author}</p>
          <p className="text-sm text-muted-foreground">
            {testimonial.role} at {testimonial.company}
          </p>
        </div>
      </div>

      {/* Hover gradient */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
}