"use client";

// src/components/how-it-works/step-visuals.tsx
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";

interface StepVisualsProps {
  activeStep: number;
}

export function StepVisuals({ activeStep }: StepVisualsProps) {
  return (
    <div className="relative">
      {/* Glow effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-brand-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl opacity-60" />

      {/* Main container */}
      <div className="relative rounded-2xl border border-border/50 bg-background/95 backdrop-blur-xl shadow-2xl overflow-hidden">
        {/* Window Header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-muted/30">
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-500/80" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <div className="h-3 w-3 rounded-full bg-green-500/80" />
          </div>
          <div className="flex-1 text-center">
            <span className="text-xs font-medium text-muted-foreground">
              RepurposeAI
            </span>
          </div>
          <div className="w-[52px]" />
        </div>

        {/* Content */}
        <div className="p-6 min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeStep === 1 && <InputVisual key="input" />}
            {activeStep === 2 && <PlatformsVisual key="platforms" />}
            {activeStep === 3 && <OutputVisual key="output" />}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function InputVisual() {
  const [inputText, setInputText] = React.useState("");
  const fullText =
    "10 Proven Strategies to Grow Your SaaS Business in 2024\n\nIn today's competitive landscape, growing a SaaS business requires a combination of smart strategy, relentless execution, and customer-centric thinking...\n\nStrategy #1: Focus on Customer Success\nThe best marketing is a happy customer. Invest in onboarding, support, and success programs that turn users into advocates.";

  React.useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setInputText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-4"
    >
      {/* Label */}
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium">Paste your content</label>
        <div className="flex items-center gap-2">
          <button className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1">
            <Icons.fileText className="h-3 w-3" />
            Import URL
          </button>
          <button className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1">
            <Icons.download className="h-3 w-3" />
            Upload File
          </button>
        </div>
      </div>

      {/* Text Area */}
      <div className="relative rounded-xl border border-border bg-muted/30 p-4 min-h-[280px]">
        <p className="text-sm whitespace-pre-wrap text-foreground leading-relaxed">
          {inputText}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
            className="inline-block w-0.5 h-4 bg-brand-500 ml-0.5 align-middle"
          />
        </p>
      </div>

      {/* AI Analysis Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="flex items-center gap-3 rounded-lg bg-brand-500/10 p-3"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-500/20">
          <Icons.sparkles className="h-4 w-4 text-brand-500" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium text-brand-600 dark:text-brand-400">
            AI is analyzing your content...
          </p>
          <p className="text-xs text-muted-foreground">
            Detecting tone, key points, and structure
          </p>
        </div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
          <Icons.loader className="h-5 w-5 text-brand-500" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function PlatformsVisual() {
  const platforms = [
    { name: "Twitter", icon: Icons.twitter, color: "#1DA1F2", selected: true },
    { name: "LinkedIn", icon: Icons.linkedin, color: "#0A66C2", selected: true },
    { name: "Instagram", icon: Icons.instagram, color: "#E4405F", selected: true },
    { name: "YouTube", icon: Icons.youtube, color: "#FF0000", selected: false },
    { name: "TikTok", icon: Icons.tiktok, color: "#000000", selected: false },
    { name: "Newsletter", icon: Icons.mail, color: "#6366F1", selected: true },
  ];

  const [selectedPlatforms, setSelectedPlatforms] = React.useState(
    platforms.filter((p) => p.selected).map((p) => p.name)
  );

  const togglePlatform = (name: string) => {
    setSelectedPlatforms((prev) =>
      prev.includes(name)
        ? prev.filter((p) => p !== name)
        : [...prev, name]
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      {/* Label */}
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium">Select platforms</label>
        <span className="text-xs text-muted-foreground">
          {selectedPlatforms.length} selected
        </span>
      </div>

      {/* Platform Grid */}
      <div className="grid grid-cols-2 gap-3">
        {platforms.map((platform, index) => {
          const isSelected = selectedPlatforms.includes(platform.name);
          return (
            <motion.button
              key={platform.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => togglePlatform(platform.name)}
              className={cn(
                "flex items-center gap-3 rounded-xl border p-4 transition-all duration-200",
                isSelected
                  ? "border-brand-500 bg-brand-500/5 shadow-md"
                  : "border-border hover:border-brand-500/50 hover:bg-muted/50"
              )}
            >
              <div
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-lg transition-colors",
                  isSelected ? "bg-white shadow-sm" : "bg-muted"
                )}
              >
                <platform.icon
                  className="h-5 w-5"
                  style={{ color: isSelected ? platform.color : "currentColor" }}
                />
              </div>
              <div className="flex-1 text-left">
                <p className="font-medium text-sm">{platform.name}</p>
                <p className="text-xs text-muted-foreground">
                  {isSelected ? "Selected" : "Click to select"}
                </p>
              </div>
              <div
                className={cn(
                  "flex h-5 w-5 items-center justify-center rounded-full border-2 transition-colors",
                  isSelected
                    ? "border-brand-500 bg-brand-500"
                    : "border-muted-foreground/30"
                )}
              >
                {isSelected && <Icons.check className="h-3 w-3 text-white" />}
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Options */}
      <div className="flex items-center justify-between rounded-lg bg-muted/50 p-4">
        <div className="flex items-center gap-3">
          <Icons.settings className="h-5 w-5 text-muted-foreground" />
          <div>
            <p className="text-sm font-medium">Platform Settings</p>
            <p className="text-xs text-muted-foreground">
              Customize output for each platform
            </p>
          </div>
        </div>
        <Icons.chevronRight className="h-5 w-5 text-muted-foreground" />
      </div>

      {/* Generate Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full rounded-xl bg-gradient-to-r from-brand-500 to-purple-500 py-4 text-center font-semibold text-white shadow-lg shadow-brand-500/25"
      >
        Generate for {selectedPlatforms.length} Platforms
      </motion.button>
    </motion.div>
  );
}

function OutputVisual() {
  const outputs = [
    {
      platform: "Twitter Thread",
      icon: Icons.twitter,
      color: "#1DA1F2",
      status: "ready",
      preview: "🧵 Here's what I learned about SaaS growth in 2024...",
    },
    {
      platform: "LinkedIn Post",
      icon: Icons.linkedin,
      color: "#0A66C2",
      status: "ready",
      preview: "I've spent years building SaaS companies. Here's the truth...",
    },
    {
      platform: "Instagram Carousel",
      icon: Icons.instagram,
      color: "#E4405F",
      status: "ready",
      preview: "10 slides with key insights and actionable tips...",
    },
    {
      platform: "Newsletter",
      icon: Icons.mail,
      color: "#6366F1",
      status: "ready",
      preview: "Weekly digest format with personal commentary...",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-4"
    >
      {/* Success Header */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="flex items-center gap-3 rounded-lg bg-green-500/10 p-4"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20">
          <Icons.check className="h-5 w-5 text-green-500" />
        </div>
        <div className="flex-1">
          <p className="font-semibold text-green-600 dark:text-green-400">
            Content Generated Successfully!
          </p>
          <p className="text-sm text-muted-foreground">
            4 platform-optimized pieces ready
          </p>
        </div>
      </motion.div>

      {/* Output Cards */}
      <div className="space-y-3">
        {outputs.map((output, index) => (
          <motion.div
            key={output.platform}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 hover:shadow-md transition-shadow"
          >
            <div
              className="flex h-10 w-10 items-center justify-center rounded-lg"
              style={{ backgroundColor: `${output.color}15` }}
            >
              <output.icon className="h-5 w-5" style={{ color: output.color }} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="font-medium text-sm">{output.platform}</p>
                <span className="flex items-center gap-1 rounded-full bg-green-500/10 px-2 py-0.5 text-xs font-medium text-green-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  Ready
                </span>
              </div>
              <p className="text-xs text-muted-foreground truncate mt-0.5">
                {output.preview}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg hover:bg-muted transition-colors"
              >
                <Icons.copy className="h-4 w-4 text-muted-foreground" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg hover:bg-muted transition-colors"
              >
                <Icons.arrowUpRight className="h-4 w-4 text-muted-foreground" />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 pt-2">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex-1 rounded-xl bg-gradient-to-r from-brand-500 to-purple-500 py-3 text-center font-semibold text-white shadow-lg shadow-brand-500/25"
        >
          Publish All
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="rounded-xl border border-border bg-card px-6 py-3 font-semibold hover:bg-muted transition-colors"
        >
          Schedule
        </motion.button>
      </div>
    </motion.div>
  );
}