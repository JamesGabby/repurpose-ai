"use client";

// src/components/faq/faq-categories.tsx
import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { FAQCategory } from "@/config/faq";

interface FAQCategoriesProps {
  categories: FAQCategory[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  className?: string;
}

export function FAQCategories({
  categories,
  activeCategory,
  onCategoryChange,
  className,
}: FAQCategoriesProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className={cn("flex flex-wrap justify-center gap-2", className)}
    >
      {categories.map((category) => {
        const isActive = activeCategory === category.id;

        return (
          <motion.button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
              "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
              isActive
                ? "text-white"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            )}
          >
            {isActive && (
              <motion.span
                layoutId="activeCategory"
                className="absolute inset-0 rounded-full bg-brand-500"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">{category.label}</span>
          </motion.button>
        );
      })}
    </motion.div>
  );
}