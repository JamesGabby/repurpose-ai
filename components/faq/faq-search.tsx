"use client";

// src/components/faq/faq-search.tsx
import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";

interface FAQSearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function FAQSearch({
  value,
  onChange,
  placeholder = "Search questions...",
  className,
}: FAQSearchProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);

  // Focus on Cmd/Ctrl + K
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn("relative", className)}
    >
      {/* Search icon */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2">
        <Icons.search className="h-5 w-5 text-muted-foreground" />
      </div>

      {/* Input */}
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={cn(
          "w-full h-14 rounded-2xl border border-border bg-card",
          "pl-12 pr-24 text-base",
          "placeholder:text-muted-foreground",
          "focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent",
          "transition-all duration-200"
        )}
      />

      {/* Keyboard shortcut badge */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-1">
        {value ? (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={() => onChange("")}
            className="p-1.5 rounded-lg hover:bg-muted transition-colors"
          >
            <Icons.close className="h-4 w-4 text-muted-foreground" />
          </motion.button>
        ) : (
          <>
            <kbd className="px-2 py-1 text-xs font-medium text-muted-foreground bg-muted rounded-md border border-border">
              ⌘
            </kbd>
            <kbd className="px-2 py-1 text-xs font-medium text-muted-foreground bg-muted rounded-md border border-border">
              K
            </kbd>
          </>
        )}
      </div>
    </motion.div>
  );
}