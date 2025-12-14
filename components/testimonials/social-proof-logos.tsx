"use client";

// src/components/testimonials/social-proof-logos.tsx
import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const LogoPlaceholder = ({ name }: { name: string }) => (
  <div className="flex items-center justify-center h-8 px-4">
    <span className="text-lg font-bold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
      {name}
    </span>
  </div>
);

interface SocialProofLogosProps {
  logos: string[];
  className?: string;
  variant?: "static" | "marquee";
}

export function SocialProofLogos({
  logos,
  className,
  variant = "static",
}: SocialProofLogosProps) {
  if (variant === "marquee") {
    const duplicatedLogos = [...logos, ...logos, ...logos];

    return (
      <div className={cn("relative overflow-hidden py-4", className)}>
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

        <motion.div
          className="flex items-center gap-12"
          animate={{ x: [0, -800] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div key={`${logo}-${index}`} className="shrink-0">
              <LogoPlaceholder name={logo} />
            </div>
          ))}
        </motion.div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-8 md:gap-12",
        className
      )}
    >
      {logos.map((logo, index) => (
        <motion.div
          key={logo}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <LogoPlaceholder name={logo} />
        </motion.div>
      ))}
    </div>
  );
}