"use client";

// src/components/layout/mobile-nav.tsx
import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { NavItem } from "@/types";
import { Icons } from "@/components/ui/icons";
import { Logo } from "@/components/ui/logo";
import { CustomButton } from "@/components/ui/custom-button";

interface MobileNavProps {
  items: NavItem[];
  isOpen: boolean;
  onClose: () => void;
}

// Define resource links with proper icon references
const resourceLinks = [
  { title: "Help Center", href: "/help", iconName: "helpCircle" as const },
  { title: "Documentation", href: "/docs", iconName: "fileText" as const },
  { title: "Contact Us", href: "/contact", iconName: "mail" as const },
];

// Define social links
const socialLinks = [
  { iconName: "twitter" as const, href: "https://twitter.com", label: "Twitter" },
  { iconName: "linkedin" as const, href: "https://linkedin.com", label: "LinkedIn" },
  { iconName: "github" as const, href: "https://github.com", label: "GitHub" },
];

export function MobileNav({ items, isOpen, onClose }: MobileNavProps) {
  // Prevent body scroll when menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Helper to get icon component
  const getIcon = (iconName: keyof typeof Icons) => {
    const IconComponent = Icons[iconName];
    return IconComponent || null;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with blur */}
          <motion.div
            className="fixed inset-0 z-40 bg-gray-950/60 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Menu Panel */}
          <motion.div
            className={cn(
              "fixed inset-y-0 right-0 z-50 w-full max-w-sm md:hidden",
              "bg-white dark:bg-gray-950",
              "shadow-2xl shadow-gray-900/20 dark:shadow-black/40",
              "border-l border-gray-200 dark:border-gray-800"
            )}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex h-full flex-col">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 px-5 py-4">
                <Logo showText={true} />
                <motion.button
                  onClick={onClose}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    "rounded-full p-2.5 transition-colors",
                    "text-gray-500 dark:text-gray-400",
                    "hover:text-gray-900 dark:hover:text-white",
                    "hover:bg-gray-100 dark:hover:bg-gray-800",
                    "focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 dark:focus:ring-offset-gray-950"
                  )}
                  aria-label="Close menu"
                >
                  <Icons.close className="h-5 w-5" />
                </motion.button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 overflow-y-auto px-4 py-6">
                <motion.ul
                  className="space-y-1"
                  initial="closed"
                  animate="open"
                  variants={{
                    open: {
                      transition: {
                        staggerChildren: 0.07,
                        delayChildren: 0.1,
                      },
                    },
                    closed: {},
                  }}
                >
                  {items.map((item) => (
                    <motion.li
                      key={item.href}
                      variants={{
                        open: {
                          opacity: 1,
                          x: 0,
                          transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 24,
                          },
                        },
                        closed: {
                          opacity: 0,
                          x: 30,
                        },
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className={cn(
                          "group flex items-center justify-between rounded-xl px-4 py-3.5",
                          "text-base font-medium transition-all duration-200",
                          "text-gray-700 dark:text-gray-300",
                          "hover:text-gray-900 dark:hover:text-white",
                          "hover:bg-gray-100 dark:hover:bg-gray-800/80",
                          "active:bg-gray-200 dark:active:bg-gray-800"
                        )}
                      >
                        <span>{item.title}</span>

                        <div className="flex items-center gap-2">
                          {item.badge && (
                            <span className="inline-flex items-center rounded-full bg-brand-100 dark:bg-brand-900/50 px-2.5 py-1 text-xs font-semibold text-brand-700 dark:text-brand-300">
                              {item.badge}
                            </span>
                          )}
                          <Icons.chevronRight className="h-5 w-5 text-gray-400 dark:text-gray-600 group-hover:text-gray-600 dark:group-hover:text-gray-400 group-hover:translate-x-0.5 transition-all" />
                        </div>
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* Divider with label */}
                <div className="my-6 flex items-center gap-3">
                  <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800" />
                  <span className="text-xs font-medium text-gray-400 dark:text-gray-600 uppercase tracking-wider">
                    Resources
                  </span>
                  <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800" />
                </div>

                {/* Additional Links */}
                <motion.ul
                  className="space-y-1"
                  initial="closed"
                  animate="open"
                  variants={{
                    open: {
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.3,
                      },
                    },
                    closed: {},
                  }}
                >
                  {resourceLinks.map((item) => {
                    const IconComponent = getIcon(item.iconName);
                    return (
                      <motion.li
                        key={item.href}
                        variants={{
                          open: { opacity: 1, x: 0 },
                          closed: { opacity: 0, x: 20 },
                        }}
                      >
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className={cn(
                            "flex items-center gap-3 rounded-xl px-4 py-3",
                            "text-sm font-medium transition-colors",
                            "text-gray-600 dark:text-gray-400",
                            "hover:text-gray-900 dark:hover:text-white",
                            "hover:bg-gray-100 dark:hover:bg-gray-800/80"
                          )}
                        >
                          {IconComponent && <IconComponent className="h-4 w-4" />}
                          <span>{item.title}</span>
                        </Link>
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </nav>

              {/* Footer CTAs */}
              <motion.div
                className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 px-5 py-6 space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {/* Sign In / Sign Up buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <Link href="/login" onClick={onClose}>
                    <CustomButton
                      variant="outline"
                      size="lg"
                      className={cn(
                        "w-full",
                        "border-gray-300 dark:border-gray-700",
                        "text-gray-700 dark:text-gray-300",
                        "hover:bg-gray-100 dark:hover:bg-gray-800",
                        "hover:text-gray-900 dark:hover:text-white"
                      )}
                    >
                      Sign In
                    </CustomButton>
                  </Link>
                  <Link href="/signup" onClick={onClose}>
                    <CustomButton
                      variant="gradient"
                      size="lg"
                      className="w-full shadow-lg shadow-brand-500/25"
                    >
                      Sign Up
                    </CustomButton>
                  </Link>
                </div>

                {/* Full width CTA */}
                <Link href="/signup" onClick={onClose} className="block">
                  <CustomButton
                    variant="gradient"
                    size="lg"
                    className="w-full shadow-lg shadow-brand-500/25"
                    rightIcon={<Icons.arrowRight className="h-4 w-4" />}
                  >
                    Start Free Trial
                  </CustomButton>
                </Link>

                {/* Trust signals */}
                <div className="flex items-center justify-center gap-4 pt-2">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                    <Icons.check className="h-3.5 w-3.5 text-emerald-500" />
                    <span>No credit card</span>
                  </div>
                  <div className="h-3 w-px bg-gray-300 dark:bg-gray-700" />
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                    <Icons.check className="h-3.5 w-3.5 text-emerald-500" />
                    <span>14-day free trial</span>
                  </div>
                </div>

                {/* Social links */}
                <div className="flex items-center justify-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-800 mt-4">
                  {socialLinks.map((social) => {
                    const IconComponent = getIcon(social.iconName);
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "flex h-10 w-10 items-center justify-center rounded-full transition-colors",
                          "text-gray-500 dark:text-gray-400",
                          "hover:text-gray-900 dark:hover:text-white",
                          "hover:bg-gray-100 dark:hover:bg-gray-800"
                        )}
                        aria-label={social.label}
                      >
                        {IconComponent && <IconComponent className="h-5 w-5" />}
                      </a>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}