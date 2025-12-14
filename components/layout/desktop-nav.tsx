"use client";

// src/components/layout/desktop-nav.tsx
import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { NavItem } from "@/types";

interface DesktopNavProps {
  items: NavItem[];
  className?: string;
  isScrolled?: boolean;
}

export function DesktopNav({ items, className, isScrolled = false }: DesktopNavProps) {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <nav className={cn("hidden md:flex items-center gap-1", className)}>
      {items.map((item, index) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "relative px-4 py-2 text-sm font-medium transition-colors duration-200",
            isScrolled
              ? "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              : "text-gray-800 dark:text-gray-100 hover:text-gray-900 dark:hover:text-white"
          )}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {hoveredIndex === index && (
            <motion.span
              className={cn(
                "absolute inset-0 rounded-full",
                isScrolled
                  ? "bg-gray-100 dark:bg-gray-800"
                  : "bg-white/30 dark:bg-white/10 backdrop-blur-sm"
              )}
              layoutId="navbar-hover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 30,
              }}
            />
          )}
          <span className="relative z-10">{item.title}</span>
          {item.badge && (
            <span
              className={cn(
                "relative z-10 ml-2 inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
                isScrolled
                  ? "bg-brand-100 dark:bg-brand-900/50 text-brand-700 dark:text-brand-300"
                  : "bg-brand-500 text-white shadow-sm"
              )}
            >
              {item.badge}
            </span>
          )}
        </Link>
      ))}
    </nav>
  );
}