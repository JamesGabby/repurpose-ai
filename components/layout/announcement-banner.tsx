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
  storageKey?: string; // To remember dismissal
}

export function AnnouncementBanner({
  message,
  link,
  dismissible = true,
  variant = "gradient",
  storageKey = "announcement-banner-dismissed",
}: AnnouncementBannerProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);

  // Check localStorage on mount to see if banner was previously dismissed
  React.useEffect(() => {
    setIsMounted(true);
    const isDismissed = localStorage.getItem(storageKey);
    if (!isDismissed) {
      setIsVisible(true);
    }
  }, [storageKey]);

  const handleDismiss = () => {
    setIsVisible(false);
    if (storageKey) {
      localStorage.setItem(storageKey, "true");
    }
  };

  const variantClasses = {
    default: "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100",
    gradient: "bg-gradient-to-r from-brand-600 via-purple-600 to-pink-600 text-white",
    brand: "bg-brand-600 text-white",
  };

  // Don't render anything on server or if dismissed
  if (!isMounted) return null;

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          key="announcement-banner"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={cn(
            "relative w-full overflow-hidden",
            variantClasses[variant]
          )}
          style={{ zIndex: 60 }} // Higher than navbar (usually z-50)
        >
          <div className="container-wide">
            <div className="flex items-center justify-center py-2.5 px-8 md:px-12">
              <div className="flex items-center justify-center gap-x-3 text-sm">
                <span className="flex items-center gap-2">
                  <Icons.sparkles className="h-4 w-4 shrink-0" />
                  <span className="font-medium">{message}</span>
                </span>
                
                {link && (
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 font-semibold underline-offset-4 hover:underline whitespace-nowrap"
                  >
                    {link.text}
                    <Icons.arrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                )}
              </div>

              {/* Dismiss button - Fixed positioning */}
              {dismissible && (
                <button
                  type="button"
                  onClick={handleDismiss}
                  className={cn(
                    "absolute right-2 sm:right-4 top-1/2 -translate-y-1/2",
                    "rounded-full p-1.5",
                    "transition-colors duration-200",
                    "focus:outline-none focus:ring-2 focus:ring-white/50",
                    variant === "default" 
                      ? "hover:bg-gray-200 dark:hover:bg-gray-700" 
                      : "hover:bg-white/20"
                  )}
                  aria-label="Dismiss announcement"
                >
                  <Icons.close className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          {/* Animated shine effect */}
          {variant === "gradient" && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
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
      )}
    </AnimatePresence>
  );
}