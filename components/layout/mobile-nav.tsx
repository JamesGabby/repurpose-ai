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

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-background shadow-2xl md:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <div className="flex h-full flex-col">
              {/* Header */}
              <div className="flex items-center justify-between border-b px-6 py-4">
                <Logo size="sm" />
                <button
                  onClick={onClose}
                  className="rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                >
                  <Icons.close className="h-5 w-5" />
                  <span className="sr-only">Close menu</span>
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 overflow-y-auto px-6 py-6">
                <motion.ul
                  className="space-y-1"
                  initial="closed"
                  animate="open"
                  variants={{
                    open: {
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.1,
                      },
                    },
                    closed: {},
                  }}
                >
                  {items.map((item, index) => (
                    <motion.li
                      key={item.href}
                      variants={{
                        open: {
                          opacity: 1,
                          x: 0,
                          transition: { duration: 0.3 },
                        },
                        closed: {
                          opacity: 0,
                          x: 20,
                        },
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className={cn(
                          "flex items-center justify-between rounded-xl px-4 py-3 text-lg font-medium transition-colors",
                          "text-muted-foreground hover:bg-muted hover:text-foreground"
                        )}
                      >
                        <span>{item.title}</span>
                        {item.badge && (
                          <span className="inline-flex items-center rounded-full bg-brand-100 px-2.5 py-0.5 text-xs font-medium text-brand-700">
                            {item.badge}
                          </span>
                        )}
                        <Icons.chevronRight className="h-5 w-5 text-muted-foreground/50" />
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </nav>

              {/* Footer CTAs */}
              <div className="border-t px-6 py-6 space-y-3">
                <CustomButton
                  variant="outline"
                  size="lg"
                  className="w-full"
                  onClick={onClose}
                >
                  Sign In
                </CustomButton>
                <CustomButton
                  variant="gradient"
                  size="lg"
                  className="w-full"
                  onClick={onClose}
                  rightIcon={<Icons.arrowRight className="h-4 w-4" />}
                >
                  Start Free Trial
                </CustomButton>
                <p className="text-center text-xs text-muted-foreground">
                  No credit card required • 14-day free trial
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}