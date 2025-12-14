"use client";

// src/components/hero/platform-carousel.tsx
import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";

const platforms = [
  { name: "Twitter", icon: Icons.twitter, color: "#1DA1F2", hoverBg: "hover:bg-[#1DA1F2]/10" },
  { name: "LinkedIn", icon: Icons.linkedin, color: "#0A66C2", hoverBg: "hover:bg-[#0A66C2]/10" },
  { name: "Instagram", icon: Icons.instagram, color: "#E4405F", hoverBg: "hover:bg-[#E4405F]/10" },
  { name: "YouTube", icon: Icons.youtube, color: "#FF0000", hoverBg: "hover:bg-[#FF0000]/10" },
  { name: "TikTok", icon: Icons.tiktok, color: "#000000", hoverBg: "hover:bg-gray-500/10" },
  { name: "Email", icon: Icons.mail, color: "#6366F1", hoverBg: "hover:bg-[#6366F1]/10" },
  { name: "Threads", icon: Icons.threads, color: "#000000", hoverBg: "hover:bg-gray-500/10" },
  { name: "Blog", icon: Icons.fileText, color: "#10B981", hoverBg: "hover:bg-[#10B981]/10" },
];

interface PlatformCarouselProps {
  className?: string;
}

export function PlatformCarousel({ className }: PlatformCarouselProps) {
  return (
    <div className={cn(
      "relative overflow-hidden",
      "py-4 sm:py-6",
      className
    )}>
      {/* Gradient masks - matching hero section gradients */}
      <div className={cn(
        "absolute left-0 top-0 bottom-0 z-10",
        "w-16 sm:w-24 md:w-32",
        "bg-gradient-to-r from-white via-white/80 to-transparent",
        "dark:from-gray-950 dark:via-gray-950/80 dark:to-transparent"
      )} />
      <div className={cn(
        "absolute right-0 top-0 bottom-0 z-10",
        "w-16 sm:w-24 md:w-32",
        "bg-gradient-to-l from-white via-white/80 to-transparent",
        "dark:from-gray-950 dark:via-gray-950/80 dark:to-transparent"
      )} />

      {/* Scrolling container */}
      <motion.div
        className="flex gap-3 sm:gap-4"
        animate={{ x: [0, -1024] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          },
        }}
      >
        {/* Duplicate platforms for seamless loop */}
        {[...platforms, ...platforms].map((platform, index) => (
          <motion.div
            key={`${platform.name}-${index}`}
            className={cn(
              "flex items-center gap-2 sm:gap-2.5",
              "px-3 sm:px-4 py-2 sm:py-2.5",
              "rounded-full",
              // Background matching hero section cards
              "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm",
              // Border matching hero section
              "border border-gray-200 dark:border-gray-700",
              // Hover effects
              "hover:border-brand-300 dark:hover:border-brand-700",
              "hover:shadow-md hover:shadow-brand-500/10",
              "whitespace-nowrap shrink-0",
              "transition-all duration-300",
              "cursor-default group"
            )}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            {/* Icon with platform color */}
            <span className={cn(
              "flex items-center justify-center",
              "h-5 w-5 sm:h-6 sm:w-6",
              "rounded-full",
              "bg-gray-100 dark:bg-gray-800",
              "group-hover:scale-110 transition-transform duration-300"
            )}>
              <platform.icon 
                className="h-3 w-3 sm:h-3.5 sm:w-3.5" 
                style={{ color: platform.color }} 
              />
            </span>
            <span className={cn(
              "text-xs sm:text-sm font-medium",
              "text-gray-700 dark:text-gray-300",
              "group-hover:text-gray-900 dark:group-hover:text-white",
              "transition-colors duration-300"
            )}>
              {platform.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

interface PlatformGridProps {
  className?: string;
}

export function PlatformGrid({ className }: PlatformGridProps) {
  return (
    <div className={cn(
      "flex flex-wrap justify-center",
      "gap-2 sm:gap-3",
      "p-4 sm:p-6 rounded-2xl sm:rounded-3xl",
      // Container matching hero stats
      "bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm",
      "border border-gray-200/50 dark:border-gray-700/50",
      "shadow-lg shadow-brand-500/5",
      className
    )}>
      {platforms.map((platform, index) => (
        <motion.div
          key={platform.name}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05, duration: 0.3 }}
          whileHover={{ scale: 1.08, y: -3 }}
          className={cn(
            "relative flex items-center gap-2 sm:gap-2.5",
            "px-3 sm:px-4 py-2 sm:py-2.5",
            "rounded-full",
            // Background matching hero section
            "bg-white dark:bg-gray-800/80",
            // Border and shadow
            "border border-gray-200 dark:border-gray-700",
            "shadow-sm",
            // Hover effects with brand colors
            "hover:border-brand-300 dark:hover:border-brand-600",
            "hover:shadow-md hover:shadow-brand-500/15",
            "cursor-default group",
            "transition-all duration-300"
          )}
        >
          {/* Gradient glow on hover */}
          <div className={cn(
            "absolute inset-0 rounded-full -z-10 blur-md",
            "bg-gradient-to-r from-brand-500/20 via-purple-500/20 to-pink-500/20",
            "opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          )} />

          {/* Icon container */}
          <span className={cn(
            "flex items-center justify-center",
            "h-6 w-6 sm:h-7 sm:w-7",
            "rounded-full",
            "bg-gray-100 dark:bg-gray-700",
            "group-hover:scale-110 transition-transform duration-300"
          )}>
            <platform.icon 
              className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-300" 
              style={{ color: platform.color }} 
            />
          </span>

          {/* Platform name */}
          <span className={cn(
            "text-xs sm:text-sm font-medium",
            "text-gray-700 dark:text-gray-300",
            "group-hover:text-gray-900 dark:group-hover:text-white",
            "transition-colors duration-300"
          )}>
            {platform.name}
          </span>

          {/* Decorative dot on hover */}
          <span className={cn(
            "absolute -top-0.5 -right-0.5",
            "h-2 w-2 rounded-full",
            "bg-gradient-to-r from-brand-500 to-purple-500",
            "opacity-0 group-hover:opacity-100",
            "scale-0 group-hover:scale-100",
            "transition-all duration-300"
          )} />
        </motion.div>
      ))}
    </div>
  );
}

// New component: Animated platform icons for visual interest
interface PlatformIconsFloatingProps {
  className?: string;
}

export function PlatformIconsFloating({ className }: PlatformIconsFloatingProps) {
  return (
    <div className={cn(
      "relative h-32 sm:h-40 overflow-hidden",
      className
    )}>
      {platforms.map((platform, index) => (
        <motion.div
          key={platform.name}
          initial={{ 
            opacity: 0,
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
          }}
          animate={{ 
            opacity: [0.4, 0.8, 0.4],
            y: [0, -20, 0],
            x: [0, index % 2 === 0 ? 10 : -10, 0],
          }}
          transition={{
            duration: 3 + index * 0.5,
            repeat: Infinity,
            delay: index * 0.2,
            ease: "easeInOut",
          }}
          className={cn(
            "absolute",
            "flex items-center justify-center",
            "h-10 w-10 sm:h-12 sm:w-12",
            "rounded-xl sm:rounded-2xl",
            "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm",
            "border border-gray-200/50 dark:border-gray-700/50",
            "shadow-lg shadow-brand-500/10"
          )}
          style={{
            left: `${10 + (index * 11)}%`,
            top: `${20 + (index % 3) * 25}%`,
          }}
        >
          <platform.icon 
            className="h-5 w-5 sm:h-6 sm:w-6" 
            style={{ color: platform.color }} 
          />
        </motion.div>
      ))}
    </div>
  );
}

// New component: Compact platform badges
interface PlatformBadgesProps {
  className?: string;
  limit?: number;
}

export function PlatformBadges({ className, limit = 5 }: PlatformBadgesProps) {
  const displayPlatforms = platforms.slice(0, limit);
  const remaining = platforms.length - limit;

  return (
    <div className={cn(
      "flex items-center gap-1.5 sm:gap-2",
      className
    )}>
      {displayPlatforms.map((platform, index) => (
        <motion.div
          key={platform.name}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
          className={cn(
            "flex items-center justify-center",
            "h-8 w-8 sm:h-9 sm:w-9",
            "rounded-full",
            "bg-white dark:bg-gray-800",
            "border border-gray-200 dark:border-gray-700",
            "shadow-sm",
            "hover:scale-110 hover:shadow-md hover:shadow-brand-500/10",
            "hover:border-brand-300 dark:hover:border-brand-600",
            "transition-all duration-300"
          )}
          title={platform.name}
        >
          <platform.icon 
            className="h-4 w-4 sm:h-4.5 sm:w-4.5" 
            style={{ color: platform.color }} 
          />
        </motion.div>
      ))}
      
      {remaining > 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: limit * 0.1, type: "spring", stiffness: 200 }}
          className={cn(
            "flex items-center justify-center",
            "h-8 w-8 sm:h-9 sm:w-9",
            "rounded-full",
            "bg-gradient-to-br from-brand-100 to-purple-100",
            "dark:from-brand-900/50 dark:to-purple-900/50",
            "border border-brand-200 dark:border-brand-800",
            "shadow-sm"
          )}
        >
          <span className={cn(
            "text-xs font-bold",
            "bg-gradient-to-r from-brand-600 to-purple-600",
            "dark:from-brand-400 dark:to-purple-400",
            "bg-clip-text text-transparent"
          )}>
            +{remaining}
          </span>
        </motion.div>
      )}
    </div>
  );
}