"use client";

// src/components/testimonials/testimonials-marquee.tsx
import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Testimonial } from "@/config/testimonials";
import { TestimonialCard } from "./testimonial-card";

interface TestimonialsMarqueeProps {
  testimonials: Testimonial[];
  direction?: "left" | "right";
  speed?: number;
  className?: string;
}

export function TestimonialsMarquee({
  testimonials,
  direction = "left",
  speed = 30,
  className,
}: TestimonialsMarqueeProps) {
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-background to-transparent z-10" />

      {/* Marquee */}
      <motion.div
        className="flex gap-6"
        animate={{
          x: direction === "left" ? [0, -50 * testimonials.length * 20] : [-50 * testimonials.length * 20, 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed * testimonials.length,
            ease: "linear",
          },
        }}
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <div
            key={`${testimonial.id}-${index}`}
            className="w-[350px] shrink-0"
          >
            <TestimonialCard
              testimonial={testimonial}
              variant="compact"
              index={0}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}