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
  storageKey?: string;
  onVisibilityChange?: (visible: boolean) => void;
}

export function AnnouncementBanner({
  message,
  link,
  dismissible = true,
  variant = "gradient",
  storageKey = "announcement-banner-dismissed",
  onVisibilityChange,
}: AnnouncementBannerProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);

  // Check localStorage on mount
  React.useEffect(() => {
    setIsMounted(true);
    const isDismissed = localStorage.getItem(storageKey);
    const visible = !isDismissed;
    setIsVisible(visible);
    onVisibilityChange?.(visible);
  }, [storageKey, onVisibilityChange]);

  const handleDismiss = () => {
    setIsVisible(false);
    onVisibilityChange?.(false);
    if (storageKey) {
      localStorage.setItem(storageKey, "true");
    }
  };

  const variantClasses = {
    default: "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100",
    gradient:
      "bg-gradient-to-r from-brand-600 via-purple-600 to-pink-600 text-white",
    brand: "bg-brand-600 text-white",
  };

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
          style={{ zIndex: 60 }}
        >
          <div className="container-wide">
            <div
              className={cn(
                "flex items-center justify-center",
                "relative",
                // Responsive padding
                "py-2 sm:py-2.5",
                // Account for dismiss button
                "px-10 sm:px-12 md:px-16"
              )}
            >
              {/* Content wrapper */}
              <div
                className={cn(
                  "flex flex-col sm:flex-row items-center justify-center",
                  "gap-1 sm:gap-x-3",
                  "text-xs sm:text-sm"
                )}
              >
                {/* Message */}
                <span className="flex items-center gap-1.5 sm:gap-2 text-center sm:text-left">
                  <Icons.sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 hidden xs:inline-block" />
                  <span className="font-medium">{message}</span>
                </span>

                {/* Link */}
                {link && (
                  <Link
                    href={link.href}
                    className={cn(
                      "group inline-flex items-center gap-1",
                      "font-semibold",
                      "underline-offset-4 hover:underline",
                      "whitespace-nowrap",
                      "text-xs sm:text-sm"
                    )}
                  >
                    {link.text}
                    <Icons.arrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                )}
              </div>

              {/* Dismiss button */}
              {dismissible && (
                <button
                  type="button"
                  onClick={handleDismiss}
                  className={cn(
                    "absolute top-1/2 -translate-y-1/2",
                    // Responsive positioning
                    "right-2 sm:right-3 md:right-4",
                    // Touch-friendly sizing
                    "p-1.5 sm:p-2",
                    "min-h-[32px] min-w-[32px] sm:min-h-[36px] sm:min-w-[36px]",
                    "flex items-center justify-center",
                    "rounded-full",
                    "transition-colors duration-200",
                    "focus:outline-none focus:ring-2 focus:ring-white/50",
                    variant === "default"
                      ? "hover:bg-gray-200 dark:hover:bg-gray-700"
                      : "hover:bg-white/20"
                  )}
                  aria-label="Dismiss announcement"
                >
                  <Icons.close className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
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

          {/* Subtle bottom border */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-black/10 dark:bg-white/10" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}