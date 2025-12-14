"use client";

// src/components/faq/faq-accordion.tsx
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";
import { FAQQuestion } from "@/config/faq";

interface FAQAccordionProps {
  questions: FAQQuestion[];
  className?: string;
}

export function FAQAccordion({ questions, className }: FAQAccordionProps) {
  const [openId, setOpenId] = React.useState<number | null>(
    questions[0]?.id || null
  );

  return (
    <div className={cn("space-y-3", className)}>
      {questions.map((item, index) => (
        <FAQAccordionItem
          key={item.id}
          item={item}
          isOpen={openId === item.id}
          onToggle={() => setOpenId(openId === item.id ? null : item.id)}
          index={index}
        />
      ))}
    </div>
  );
}

interface FAQAccordionItemProps {
  item: FAQQuestion;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

function FAQAccordionItem({
  item,
  isOpen,
  onToggle,
  index,
}: FAQAccordionItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className={cn(
        "rounded-2xl border transition-all duration-300",
        isOpen
          ? "border-brand-500/50 bg-brand-500/5 shadow-lg shadow-brand-500/5"
          : "border-border bg-card hover:border-brand-500/30"
      )}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-4 p-5 md:p-6 text-left"
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-4">
          {/* Number badge */}
          <span
            className={cn(
              "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-semibold transition-colors",
              isOpen
                ? "bg-brand-500 text-white"
                : "bg-muted text-muted-foreground"
            )}
          >
            {item.id}
          </span>
          <span
            className={cn(
              "text-base md:text-lg font-semibold transition-colors pt-0.5",
              isOpen ? "text-brand-600 dark:text-brand-400" : "text-foreground"
            )}
          >
            {item.question}
          </span>
        </div>

        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 mt-1"
        >
          <Icons.chevronDown
            className={cn(
              "h-5 w-5 transition-colors",
              isOpen ? "text-brand-500" : "text-muted-foreground"
            )}
          />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 md:px-6 md:pb-6 pl-[4.5rem] md:pl-[5rem]">
              <p className="text-muted-foreground leading-relaxed">
                {item.answer}
              </p>

              {/* Helpful feedback */}
              <div className="mt-4 flex items-center gap-4 pt-4 border-t border-border/50">
                <span className="text-sm text-muted-foreground">
                  Was this helpful?
                </span>
                <div className="flex items-center gap-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-1 rounded-full px-3 py-1 text-sm text-muted-foreground hover:bg-green-500/10 hover:text-green-600 transition-colors"
                  >
                    <Icons.check className="h-4 w-4" />
                    Yes
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-1 rounded-full px-3 py-1 text-sm text-muted-foreground hover:bg-red-500/10 hover:text-red-600 transition-colors"
                  >
                    <Icons.close className="h-4 w-4" />
                    No
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}