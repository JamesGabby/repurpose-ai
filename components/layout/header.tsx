"use client";

// src/components/layout/header.tsx
import * as React from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { mainNavItems } from "@/config/navigation";
import { Logo } from "@/components/ui/logo";
import { CustomButton } from "@/components/ui/custom-button";
import { Icons } from "@/components/ui/icons";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 10);
  });

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 shadow-sm"
            : "bg-transparent"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="container-wide">
          <div className="flex h-16 items-center justify-between lg:h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="flex items-center">
                <Logo isScrolled={isScrolled} />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="hidden md:block"
            >
              <DesktopNav items={mainNavItems} isScrolled={isScrolled} />
            </motion.div>

            {/* Desktop CTAs */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:flex items-center gap-3"
            >
              <CustomButton 
                variant="ghost" 
                size="sm"
                className={cn(
                  "transition-colors duration-200",
                  isScrolled
                    ? "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                    : "text-gray-800 dark:text-white hover:text-gray-900 dark:hover:text-white hover:bg-white/20 dark:hover:bg-white/10"
                )}
              >
                Sign In
              </CustomButton>
              <CustomButton
                variant="gradient"
                size="sm"
                rightIcon={<Icons.arrowRight className="h-4 w-4" />}
                className="shadow-lg shadow-brand-500/25"
              >
                Start Free Trial
              </CustomButton>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className={cn(
                "flex md:hidden items-center justify-center rounded-full p-2 transition-colors",
                isScrolled
                  ? "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  : "text-gray-800 dark:text-white hover:bg-white/20 dark:hover:bg-white/10"
              )}
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Icons.menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </motion.button>
          </div>
        </div>

        {/* Gradient border on scroll */}
        {isScrolled && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.header>

      {/* Mobile Navigation */}
      <MobileNav
        items={mainNavItems}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}