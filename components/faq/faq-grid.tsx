"use client";

// src/components/faq/faq-grid.tsx
import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";
import { FAQQuestion } from "@/config/faq";

interface FAQGridProps {
  questions: FAQQuestion[];
  className?: string;
}

export function FAQGrid({ questions, className }: FAQGridProps) {
  return (
    <div className={cn("grid gap-6 md:grid-cols-2", className)}>
      {questions.map((item, index) => (
        <FAQGridItem key={item.id} item={item} index={index} />
      ))}
    </div>
  );
}

interface FAQGridItemProps {
  item: FAQQuestion;
  index: number;
}

function FAQGridItem({ item, index }: FAQGridItemProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const categoryColors: Record<string, string> = {
    general: "from-blue-500 to-cyan-500",
    features: "from-purple-500 to-pink-500",
    pricing: "from-green-500 to-emerald-500",
    technical: "from-orange-500 to-amber-500",
    support: "from-red-500 to-rose-500",
  };

  const gradient = categoryColors[item.category] || categoryColors.general;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className={cn(
        "group relative rounded-2xl border border-border bg-card p-6 transition-all duration-300",
        "hover:shadow-lg hover:border-brand-500/30",
        isExpanded && "ring-2 ring-brand-500/20"
      )}
    >
      {/* Category indicator */}
      <div
        className={cn(
          "absolute top-0 left-6 right-6 h-1 rounded-b-full bg-gradient-to-r opacity-50 group-hover:opacity-100 transition-opacity",
          gradient
        )}
      />

      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <span className="inline-block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
            {item.category}
          </span>
          <h4 className="font-semibold leading-snug">{item.question}</h4>
        </div>
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={cn(
            "flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors",
            isExpanded
              ? "bg-brand-500 text-white"
              : "bg-muted text-muted-foreground hover:bg-brand-500/10 hover:text-brand-500"
          )}
        >
          <motion.span
            animate={{ rotate: isExpanded ? 45 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <Icons.chevronDown
              className={cn("h-4 w-4", isExpanded && "rotate-180")}
            />
          </motion.span>
        </motion.button>
      </div>

      {/* Answer */}
      <motion.div
        initial={false}
        animate={{
          height: isExpanded ? "auto" : 0,
          opacity: isExpanded ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="mt-4 text-muted-foreground leading-relaxed">
          {item.answer}
        </p>
      </motion.div>

      {/* Preview (when collapsed) */}
      {!isExpanded && (
        <p className="mt-3 text-sm text-muted-foreground line-clamp-2">
          {item.answer}
        </p>
      )}
    </motion.div>
  );
}