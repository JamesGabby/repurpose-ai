"use client";

// src/components/pricing/pricing-faq.tsx
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";

interface FAQ {
  question: string;
  answer: string;
}

interface PricingFAQProps {
  title: string;
  questions: FAQ[];
  className?: string;
}

export function PricingFAQ({ title, questions, className }: PricingFAQProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <div className={className}>
      <h3 className="text-2xl font-bold text-center mb-8">{title}</h3>

      <div className="max-w-3xl mx-auto space-y-3">
        {questions.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

function FAQItem({ question, answer, isOpen, onToggle, index }: FAQItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={cn(
        "rounded-xl border transition-colors duration-200",
        isOpen ? "border-brand-500/50 bg-brand-500/5" : "border-border bg-card"
      )}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 p-5 text-left"
      >
        <span className="font-semibold">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
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
            <div className="px-5 pb-5 text-muted-foreground leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}