"use client";

// src/components/features/platform-preview.tsx
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";

const platforms = [
  {
    id: "twitter",
    name: "Twitter",
    icon: Icons.twitter,
    color: "#1DA1F2",
    preview: {
      type: "thread",
      content: [
        "🧵 Here's what I learned building a $1M SaaS in 18 months:",
        "1/ Start with a problem you've experienced yourself. The best products come from scratching your own itch.",
        "2/ Don't wait for perfect. Ship fast, learn faster. Our first version was embarrassingly basic.",
        "3/ Focus on one channel until it works. We tried everything, but Twitter was our goldmine.",
      ],
    },
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: Icons.linkedin,
    color: "#0A66C2",
    preview: {
      type: "post",
      content:
        "I've spent 5 years building SaaS companies.\n\nHere's the uncomfortable truth nobody talks about:\n\nYour first 100 customers are the hardest.\nNot because of the product.\nBut because of YOU.\n\nYou need to:\n→ Overcome imposter syndrome\n→ Handle rejection daily\n→ Stay motivated without validation\n\nThe product can be perfect.\nBut if you give up at customer 50?\nGame over.\n\nThe secret? Find your tribe early.\n\nWho's your support system?",
    },
  },
  {
    id: "instagram",
    name: "Instagram",
    icon: Icons.instagram,
    color: "#E4405F",
    preview: {
      type: "carousel",
      content: [
        "10 SaaS Growth Strategies",
        "Strategy #1: Content-Led Growth",
        "Strategy #2: Community Building",
        "Strategy #3: Product-Led Growth",
      ],
    },
  },
];

export function PlatformPreview() {
  const [activePlatform, setActivePlatform] = React.useState(platforms[0]);

  return (
    <div className="space-y-6">
      {/* Platform Tabs */}
      <div className="flex items-center justify-center gap-2">
        {platforms.map((platform) => (
          <button
            key={platform.id}
            onClick={() => setActivePlatform(platform)}
            className={cn(
              "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium",
              "transition-all duration-200",
              activePlatform.id === platform.id
                ? "bg-card shadow-md border border-border"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            )}
          >
            <platform.icon
              className="h-4 w-4"
              style={{
                color:
                  activePlatform.id === platform.id
                    ? platform.color
                    : "currentColor",
              }}
            />
            <span>{platform.name}</span>
          </button>
        ))}
      </div>

      {/* Preview Window */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activePlatform.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl border border-border bg-card overflow-hidden shadow-lg"
        >
          {/* Window Header */}
          <div className="flex items-center gap-2 border-b border-border px-4 py-3 bg-muted/30">
            <div className="flex items-center gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-500/60" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
              <div className="h-3 w-3 rounded-full bg-green-500/60" />
            </div>
            <div className="flex-1 text-center">
              <span className="text-xs font-medium text-muted-foreground">
                {activePlatform.name} Preview
              </span>
            </div>
            <div className="w-[52px]" />
          </div>

          {/* Content */}
          <div className="p-6">
            <PreviewContent platform={activePlatform} />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function PreviewContent({ platform }: { platform: (typeof platforms)[0] }) {
  if (platform.preview.type === "thread") {
    return (
      <div className="space-y-4">
        {(platform.preview.content as string[]).map((tweet, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex gap-3"
          >
            <div className="h-10 w-10 shrink-0 rounded-full bg-gradient-to-br from-brand-400 to-purple-400" />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-sm">Your Name</span>
                <span className="text-xs text-muted-foreground">@handle</span>
                <span className="text-xs text-muted-foreground">·</span>
                <span className="text-xs text-muted-foreground">{index + 1}/4</span>
              </div>
              <p className="mt-1 text-sm leading-relaxed">{tweet}</p>
            </div>
          </motion.div>
        ))}
      </div>
    );
  }

  if (platform.preview.type === "post") {
    return (
      <div className="flex gap-3">
        <div className="h-12 w-12 shrink-0 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400" />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-semibold">Your Name</span>
            <span className="text-xs text-muted-foreground">• 1st</span>
          </div>
          <p className="text-xs text-muted-foreground">Founder & CEO at Company</p>
          <p className="mt-3 text-sm whitespace-pre-line leading-relaxed">
            {platform.preview.content as string}
          </p>
        </div>
      </div>
    );
  }

  if (platform.preview.type === "carousel") {
    return (
      <div className="space-y-4">
        <div className="flex gap-3">
          <div className="h-10 w-10 shrink-0 rounded-full bg-gradient-to-br from-pink-400 to-orange-400" />
          <div>
            <span className="font-semibold text-sm">yourhandle</span>
            <p className="text-xs text-muted-foreground">Sponsored</p>
          </div>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {(platform.preview.content as string[]).map((slide, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="shrink-0 w-48 h-48 rounded-lg bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center p-4"
            >
              <span className="text-white font-semibold text-center text-sm">
                {slide}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  return null;
}