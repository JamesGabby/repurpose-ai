"use client";

// src/components/cta/newsletter-cta.tsx
import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";
import { CustomButton } from "@/components/ui/custom-button";

interface NewsletterCtaProps {
  headline: string;
  description: string;
  placeholder: string;
  buttonText: string;
  disclaimer: string;
  className?: string;
}

export function NewsletterCta({
  headline,
  description,
  placeholder,
  buttonText,
  disclaimer,
  className,
}: NewsletterCtaProps) {
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setStatus("success");
    setEmail("");

    // Reset after 3 seconds
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "relative overflow-hidden rounded-3xl border border-border bg-card",
        className
      )}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 p-8 md:p-12">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-500/10 mb-6"
          >
            <Icons.mail className="h-8 w-8 text-brand-500" />
          </motion.div>

          {/* Headline */}
          <h3 className="text-2xl md:text-3xl font-bold">{headline}</h3>
          <p className="mt-3 text-muted-foreground">{description}</p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={placeholder}
                  disabled={status === "loading" || status === "success"}
                  className={cn(
                    "w-full h-12 rounded-xl border border-border bg-background px-4",
                    "placeholder:text-muted-foreground",
                    "focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent",
                    "disabled:opacity-50 disabled:cursor-not-allowed",
                    "transition-all duration-200"
                  )}
                  required
                />
              </div>
              <CustomButton
                type="submit"
                variant="gradient"
                size="lg"
                isLoading={status === "loading"}
                disabled={status === "success"}
                className="shrink-0"
              >
                {status === "success" ? (
                  <>
                    <Icons.check className="h-4 w-4 mr-2" />
                    Subscribed!
                  </>
                ) : (
                  buttonText
                )}
              </CustomButton>
            </div>

            {/* Success message */}
            {status === "success" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-sm text-green-600 dark:text-green-400"
              >
                🎉 Thanks for subscribing! Check your inbox for a confirmation email.
              </motion.p>
            )}

            {/* Disclaimer */}
            <p className="mt-4 text-xs text-muted-foreground">{disclaimer}</p>
          </form>

          {/* Social proof */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "h-8 w-8 rounded-full border-2 border-background",
                    "bg-gradient-to-br",
                    i === 0 && "from-brand-400 to-purple-400",
                    i === 1 && "from-purple-400 to-pink-400",
                    i === 2 && "from-pink-400 to-orange-400",
                    i === 3 && "from-orange-400 to-yellow-400"
                  )}
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Join <span className="font-semibold text-foreground">12,000+</span> subscribers
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}