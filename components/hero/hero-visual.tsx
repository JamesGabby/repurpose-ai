"use client";

// src/components/hero/hero-visual.tsx
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";

interface HeroVisualProps {
  className?: string;
}

export function HeroVisual({ className }: HeroVisualProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Improved glow effects with new colors */}
      <div className="absolute -inset-4 rounded-3xl blur-3xl opacity-60">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-500/30 via-purple-500/25 to-pink-500/20 rounded-3xl" />
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-600/20 via-transparent to-cyan-500/10 rounded-3xl" />
      </div>
      
      {/* Animated glow ring */}
      <motion.div 
        className="absolute -inset-1 rounded-2xl opacity-75"
        animate={{
          background: [
            "linear-gradient(0deg, hsla(252, 91%, 60%, 0.2), hsla(280, 87%, 60%, 0.1), hsla(330, 81%, 60%, 0.2))",
            "linear-gradient(180deg, hsla(252, 91%, 60%, 0.2), hsla(280, 87%, 60%, 0.1), hsla(330, 81%, 60%, 0.2))",
            "linear-gradient(360deg, hsla(252, 91%, 60%, 0.2), hsla(280, 87%, 60%, 0.1), hsla(330, 81%, 60%, 0.2))",
          ],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        style={{ filter: "blur(20px)" }}
      />

      {/* Main App Window */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        <div className="relative rounded-2xl border border-border/50 bg-background/95 backdrop-blur-xl shadow-2xl overflow-hidden">
          {/* Window Header - Improved styling */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-gradient-to-r from-muted/50 to-muted/30">
            <div className="flex items-center gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-400 hover:bg-red-500 transition-colors shadow-sm" />
              <div className="h-3 w-3 rounded-full bg-amber-400 hover:bg-amber-500 transition-colors shadow-sm" />
              <div className="h-3 w-3 rounded-full bg-emerald-400 hover:bg-emerald-500 transition-colors shadow-sm" />
            </div>
            <div className="flex-1 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-background/80 border border-border/50">
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse shadow-sm shadow-emerald-500/50" />
                <span className="text-xs font-medium text-foreground/80">
                  RepurposeAI Dashboard
                </span>
              </div>
            </div>
            <div className="w-[52px]" />
          </div>

          {/* App Content */}
          <div className="p-6 space-y-6">
            <InputSection />
            <ProcessingIndicator />
            <OutputSection />
          </div>
        </div>
      </motion.div>

      {/* Floating Elements with improved colors */}
      <FloatingElements />
    </div>
  );
}

function InputSection() {
  const [showContent, setShowContent] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label className="text-sm font-semibold text-foreground">
          Source Content
        </label>
        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-brand-100 text-brand-700 dark:bg-brand-950 dark:text-brand-300">
          Blog Post
        </span>
      </div>
      <div className="relative rounded-xl border border-border bg-muted/30 p-4 min-h-[80px] transition-all hover:border-brand-300/50">
        <AnimatePresence>
          {showContent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-foreground/90 leading-relaxed"
            >
              <TypewriterEffect
                text="10 Proven Strategies to Grow Your SaaS Business in 2024: A comprehensive guide covering customer acquisition, retention, pricing optimization..."
                speed={25}
              />
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3.5 }}
          className="absolute -right-2 -top-2"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30">
            <Icons.check className="h-3.5 w-3.5" />
          </span>
        </motion.div>
      </div>
    </div>
  );
}

function ProcessingIndicator() {
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [isComplete, setIsComplete] = React.useState(false);

  React.useEffect(() => {
    const processTimer = setTimeout(() => setIsProcessing(true), 3800);
    const completeTimer = setTimeout(() => {
      setIsProcessing(false);
      setIsComplete(true);
    }, 5500);

    return () => {
      clearTimeout(processTimer);
      clearTimeout(completeTimer);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isProcessing && !isComplete && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="flex items-center justify-center gap-3 py-4 px-4 rounded-xl bg-brand-50 dark:bg-brand-950/50 border border-brand-200 dark:border-brand-800"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <Icons.loader className="h-5 w-5 text-brand-600 dark:text-brand-400" />
          </motion.div>
          <span className="text-sm font-medium text-brand-700 dark:text-brand-300">
            AI is generating your content...
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function OutputSection() {
  const outputs = [
    {
      platform: "Twitter Thread",
      icon: <Icons.twitter className="h-4 w-4" />,
      color: "#1DA1F2",
      bgColor: "bg-sky-50 dark:bg-sky-950/30",
      borderColor: "border-sky-200 dark:border-sky-800",
      content: "🧵 Thread: 10 strategies that helped us grow from $0 to $1M ARR in 18 months...",
      delay: 5.8,
    },
    {
      platform: "LinkedIn Post",
      icon: <Icons.linkedin className="h-4 w-4" />,
      color: "#0A66C2",
      bgColor: "bg-blue-50 dark:bg-blue-950/30",
      borderColor: "border-blue-200 dark:border-blue-800",
      content: "I've spent 5 years building SaaS companies. Here's what actually works in 2024...",
      delay: 6.3,
    },
    {
      platform: "Instagram Carousel",
      icon: <Icons.instagram className="h-4 w-4" />,
      color: "#E4405F",
      bgColor: "bg-pink-50 dark:bg-pink-950/30",
      borderColor: "border-pink-200 dark:border-pink-800",
      content: "Swipe → to discover the 10 growth strategies every SaaS founder needs to know...",
      delay: 6.8,
    },
  ];

  return (
    <div className="space-y-3">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5.5 }}
        className="flex items-center justify-between"
      >
        <label className="text-sm font-semibold text-foreground">
          Generated Content
        </label>
        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
          3 platforms ready
        </span>
      </motion.div>

      {outputs.map((output) => (
        <OutputCard key={output.platform} {...output} />
      ))}
    </div>
  );
}

interface OutputCardProps {
  platform: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  borderColor: string;
  content: string;
  delay: number;
}

function OutputCard({ platform, icon, color, bgColor, borderColor, content, delay }: OutputCardProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isCopied, setIsCopied] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -20, height: 0 }}
          animate={{ opacity: 1, x: 0, height: "auto" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={cn(
            "flex items-start gap-3 rounded-xl border p-3",
            "bg-card hover:shadow-lg transition-all duration-200",
            borderColor,
            "hover:border-brand-300 dark:hover:border-brand-700"
          )}
        >
          <div
            className={cn(
              "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg",
              bgColor
            )}
          >
            <span style={{ color }}>{icon}</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-semibold text-foreground">{platform}</span>
              <div className="flex items-center gap-1">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCopy}
                  className="p-1.5 rounded-md hover:bg-muted transition-colors"
                >
                  {isCopied ? (
                    <Icons.check className="h-3.5 w-3.5 text-emerald-500" />
                  ) : (
                    <Icons.copy className="h-3.5 w-3.5 text-muted-foreground hover:text-foreground" />
                  )}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-1.5 rounded-md hover:bg-muted transition-colors"
                >
                  <Icons.arrowUpRight className="h-3.5 w-3.5 text-muted-foreground hover:text-foreground" />
                </motion.button>
              </div>
            </div>
            <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
              {content}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface TypewriterEffectProps {
  text: string;
  speed?: number;
}

function TypewriterEffect({ text, speed = 30 }: TypewriterEffectProps) {
  const [displayText, setDisplayText] = React.useState("");
  const [isComplete, setIsComplete] = React.useState(false);

  React.useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsComplete(true);
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span>
      {displayText}
      {!isComplete && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.4, repeat: Infinity, repeatType: "reverse" }}
          className="inline-block w-0.5 h-4 bg-brand-500 ml-0.5 align-middle rounded-full"
        />
      )}
    </span>
  );
}

function FloatingElements() {
  const elements = [
    {
      icon: Icons.zap,
      color: "text-amber-500",
      bgColor: "bg-amber-100 dark:bg-amber-950/50",
      borderColor: "border-amber-200 dark:border-amber-800",
      position: "-top-4 -right-4 md:top-4 md:-right-8",
      delay: 0.8,
    },
    {
      icon: Icons.sparkles,
      color: "text-purple-500",
      bgColor: "bg-purple-100 dark:bg-purple-950/50",
      borderColor: "border-purple-200 dark:border-purple-800",
      position: "-bottom-4 -left-4 md:bottom-8 md:-left-8",
      delay: 1.0,
    },
    {
      icon: Icons.trendingUp,
      color: "text-emerald-500",
      bgColor: "bg-emerald-100 dark:bg-emerald-950/50",
      borderColor: "border-emerald-200 dark:border-emerald-800",
      position: "top-1/4 -left-4 md:-left-12",
      delay: 1.2,
    },
    {
      icon: Icons.clock,
      color: "text-sky-500",
      bgColor: "bg-sky-100 dark:bg-sky-950/50",
      borderColor: "border-sky-200 dark:border-sky-800",
      position: "top-1/2 -right-4 md:-right-10",
      delay: 1.4,
    },
  ];

  return (
    <>
      {elements.map((el, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: el.delay,
            type: "spring",
            stiffness: 200,
            damping: 15,
          }}
          className={cn(
            "absolute hidden sm:flex",
            el.position,
            "h-12 w-12 items-center justify-center rounded-2xl",
            "bg-background shadow-lg border",
            el.borderColor
          )}
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.3,
            }}
            className={cn("p-2 rounded-xl", el.bgColor)}
          >
            <el.icon className={cn("h-5 w-5", el.color)} />
          </motion.div>
        </motion.div>
      ))}
    </>
  );
}