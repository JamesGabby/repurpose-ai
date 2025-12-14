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
      {/* Glow effects */}
      <div className="absolute -inset-4 bg-gradient-to-r from-brand-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl opacity-60" />
      <div className="absolute -inset-4 bg-gradient-to-tr from-brand-600/10 to-transparent rounded-3xl blur-2xl" />

      {/* Main App Window */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        <div className="relative rounded-2xl border border-border/50 bg-background/95 backdrop-blur-xl shadow-2xl overflow-hidden">
          {/* Window Header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-muted/30">
            <div className="flex items-center gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors" />
              <div className="h-3 w-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors" />
            </div>
            <div className="flex-1 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-muted/50">
                <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-medium text-muted-foreground">
                  RepurposeAI Dashboard
                </span>
              </div>
            </div>
            <div className="w-[52px]" /> {/* Spacer for symmetry */}
          </div>

          {/* App Content */}
          <div className="p-6 space-y-6">
            {/* Input Section */}
            <InputSection />

            {/* Processing Animation */}
            <ProcessingIndicator />

            {/* Output Cards */}
            <OutputSection />
          </div>
        </div>
      </motion.div>

      {/* Floating Elements */}
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
        <label className="text-sm font-medium text-foreground">
          Source Content
        </label>
        <span className="text-xs text-muted-foreground">Blog Post</span>
      </div>
      <div className="relative rounded-xl border border-border bg-muted/30 p-4 min-h-[80px]">
        <AnimatePresence>
          {showContent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-foreground"
            >
              <TypewriterEffect
                text="10 Proven Strategies to Grow Your SaaS Business in 2026: A comprehensive guide covering customer acquisition, retention, pricing optimization..."
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
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white shadow-lg">
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
          className="flex items-center justify-center gap-3 py-4"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <Icons.loader className="h-5 w-5 text-brand-500" />
          </motion.div>
          <span className="text-sm font-medium text-muted-foreground">
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
      content: "🧵 Thread: 10 strategies that helped us grow from $0 to $1M ARR in 18 months...",
      delay: 5.8,
    },
    {
      platform: "LinkedIn Post",
      icon: <Icons.linkedin className="h-4 w-4" />,
      color: "#0A66C2",
      content: "I've spent 5 years building SaaS companies. Here's what actually works in 2026...",
      delay: 6.3,
    },
    {
      platform: "Instagram Carousel",
      icon: <Icons.instagram className="h-4 w-4" />,
      color: "#E4405F",
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
        <label className="text-sm font-medium text-foreground">
          Generated Content
        </label>
        <span className="text-xs text-green-600 font-medium">3 platforms ready</span>
      </motion.div>

      {outputs.map((output, index) => (
        <OutputCard key={output.platform} {...output} />
      ))}
    </div>
  );
}

interface OutputCardProps {
  platform: string;
  icon: React.ReactNode;
  color: string;
  content: string;
  delay: number;
}

function OutputCard({ platform, icon, color, content, delay }: OutputCardProps) {
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
          className="flex items-start gap-3 rounded-xl border border-border/50 bg-card p-3 hover:border-border hover:shadow-md transition-all duration-200"
        >
          <div
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg shadow-sm"
            style={{ backgroundColor: `${color}15` }}
          >
            <span style={{ color }}>{icon}</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-semibold">{platform}</span>
              <div className="flex items-center gap-1">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCopy}
                  className="p-1.5 rounded-md hover:bg-muted transition-colors"
                >
                  {isCopied ? (
                    <Icons.check className="h-3.5 w-3.5 text-green-500" />
                  ) : (
                    <Icons.copy className="h-3.5 w-3.5 text-muted-foreground" />
                  )}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-1.5 rounded-md hover:bg-muted transition-colors"
                >
                  <Icons.arrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
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
          className="inline-block w-0.5 h-4 bg-brand-500 ml-0.5 align-middle"
        />
      )}
    </span>
  );
}

function FloatingElements() {
  const elements = [
    {
      icon: Icons.zap,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      position: "-top-4 -right-4 md:top-4 md:-right-8",
      delay: 0.8,
    },
    {
      icon: Icons.sparkles,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      position: "-bottom-4 -left-4 md:bottom-8 md:-left-8",
      delay: 1.0,
    },
    {
      icon: Icons.trendingUp,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      position: "top-1/4 -left-4 md:-left-12",
      delay: 1.2,
    },
    {
      icon: Icons.clock,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
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
            "h-12 w-12 items-center justify-center rounded-2xl bg-background shadow-lg border border-border/50"
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