"use client";

// src/components/layout/announcement-banner.tsx
import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";

interface AnnouncementBannerProps {
  message: string;
  link?: {
    text: string;
    href: string;
  };
  dismissible?: boolean;
  variant?: "default" | "gradient" | "brand";
}

export function AnnouncementBanner({
  message,
  link,
  dismissible = true,
  variant = "gradient",
}: AnnouncementBannerProps) {
  const [isVisible, setIsVisible] = React.useState(true);

  const variantClasses = {
    default: "bg-muted text-foreground",
    gradient: "bg-gradient-to-r from-brand-600 via-purple-600 to-pink-600 text-white",
    brand: "bg-brand-600 text-white",
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "relative z-50 overflow-hidden",
          variantClasses[variant]
        )}
      >
        <div className="container-wide py-2.5">
          <div className="flex items-center justify-center gap-x-3 text-sm">
            <span className="flex items-center gap-2">
              <Icons.sparkles className="h-4 w-4" />
              <span className="font-medium">{message}</span>
            </span>
            {link && (
              <Link
                href={link.href}
                className="group inline-flex items-center gap-1 font-semibold underline-offset-4 hover:underline"
              >
                {link.text}
                <Icons.arrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </Link>
            )}
            {dismissible && (
              <button
                onClick={() => setIsVisible(false)}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 hover:bg-white/10 transition-colors"
              >
                <Icons.close className="h-4 w-4" />
                <span className="sr-only">Dismiss</span>
              </button>
            )}
          </div>
        </div>

        {/* Animated shine effect */}
        {variant === "gradient" && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 5,
              ease: "easeInOut",
            }}
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
}