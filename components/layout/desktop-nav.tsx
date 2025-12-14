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
}

export function DesktopNav({ items, className }: DesktopNavProps) {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <nav className={cn("hidden md:flex items-center gap-1", className)}>
      {items.map((item, index) => (
        <Link
          key={item.href}
          href={item.href}
          className="relative px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {hoveredIndex === index && (
            <motion.span
              className="absolute inset-0 rounded-full bg-muted"
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
            <span className="relative z-10 ml-2 inline-flex items-center rounded-full bg-brand-100 px-2 py-0.5 text-xs font-medium text-brand-700">
              {item.badge}
            </span>
          )}
        </Link>
      ))}
    </nav>
  );
}