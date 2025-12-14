"use client";

// src/components/testimonials/featured-testimonial.tsx
import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";

interface Metric {
  value: string;
  label: string;
}

interface FeaturedTestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  metrics?: Metric[];
  className?: string;
}

export function FeaturedTestimonial({
  quote,
  author,
  role,
  company,
  avatar,
  metrics,
  className,
}: FeaturedTestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className={cn("relative overflow-hidden rounded-3xl", className)}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-600 via-purple-600 to-pink-600" />

      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-1/2 -left-1/2 h-full w-full rounded-full bg-white/5 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-1/2 -right-1/2 h-full w-full rounded-full bg-white/5 blur-3xl"
        />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 p-8 md:p-12 lg:p-16">
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-12 items-center">
          {/* Quote Section */}
          <div className="lg:col-span-2 text-white">
            {/* Quote icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Icons.quote className="h-12 w-12 text-white/30 mb-6" />
            </motion.div>

            {/* Quote text */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed"
            >
              "{quote}"
            </motion.blockquote>

            {/* Author */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex items-center gap-4"
            >
              <div className="h-14 w-14 rounded-full bg-gradient-to-br from-white/20 to-white/5 ring-2 ring-white/20 flex items-center justify-center">
                <span className="text-xl font-bold">{author.charAt(0)}</span>
              </div>
              <div>
                <p className="font-semibold text-lg">{author}</p>
                <p className="text-white/70">
                  {role} at {company}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Metrics Section */}
          {metrics && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="space-y-4"
            >
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="rounded-2xl bg-white/10 backdrop-blur-sm p-6 text-center"
                >
                  <p className="text-3xl md:text-4xl font-bold text-white">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-sm text-white/70">{metric.label}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}