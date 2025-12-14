"use client";

// src/components/layout/back-to-top.tsx
import * as React from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Icons } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

export function BackToTop() {
  const [isVisible, setIsVisible] = React.useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsVisible(latest > 400);
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          className={cn(
            "fixed bottom-8 right-8 z-50",
            "flex h-12 w-12 items-center justify-center",
            "rounded-full bg-brand-600 text-white shadow-lg shadow-brand-500/25",
            "hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-500/30",
            "transition-all duration-200",
            "focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
          )}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Icons.chevronDown className="h-5 w-5 rotate-180" />
          </motion.div>
          <span className="sr-only">Back to top</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}