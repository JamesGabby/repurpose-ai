"use client";

// src/components/hero/company-logos.tsx
import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// SVG logos as components for better quality
const VercelLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 116 100" fill="currentColor" className={cn("h-5 w-auto", className)}>
    <path d="M57.5 0L115 100H0L57.5 0z" />
  </svg>
);

const StripeLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 60 25" fill="currentColor" className={cn("h-6 w-auto", className)}>
    <path d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a8.33 8.33 0 0 1-4.56 1.1c-4.01 0-6.83-2.5-6.83-7.48 0-4.19 2.39-7.52 6.3-7.52 3.92 0 5.96 3.28 5.96 7.5 0 .4-.02.96-.06 1.48zm-5.92-5.62c-1.03 0-2.17.73-2.17 2.58h4.25c0-1.85-1.07-2.58-2.08-2.58zM40.95 20.3c-1.44 0-2.32-.6-2.9-1.04l-.02 4.63-4.12.87V5.57h3.76l.08 1.02a4.7 4.7 0 0 1 3.23-1.29c2.9 0 5.62 2.6 5.62 7.4 0 5.23-2.7 7.6-5.65 7.6zM40 9.73c-.95 0-1.54.34-1.97.81l.02 6.12c.4.44.98.78 1.95.78 1.52 0 2.54-1.65 2.54-3.87 0-2.15-1.04-3.84-2.54-3.84zM28.24 5.57h4.13v14.44h-4.13V5.57zm0-5.13L32.37 0v3.77l-4.13.88V.44zm-4.32 9.35v9.79H19.8V5.57h3.7l.12 1.22c1-1.77 3.07-1.41 3.62-1.22v3.79c-.52-.17-2.29-.43-3.32.43zm-8.55 4.72c0 2.43 2.6 1.68 3.12 1.46v3.36c-.55.3-1.54.54-2.89.54a4.15 4.15 0 0 1-4.27-4.24l.01-13.17 4.02-.86v3.54h3.14V9.1h-3.13v5.41zm-4.91.7c0 3.05-2.84 5.22-6.57 5.22-2.24 0-4.6-.87-6.18-2.27l1.87-2.47c1.24.9 2.86 1.57 4.48 1.57 1.18 0 2.09-.44 2.09-1.29 0-2.1-8.1-.5-8.1-5.97C4.05 8.32 6.67 6.1 10.18 6.1c2.05 0 4.12.67 5.65 1.86L14 10.32c-1.23-.72-2.56-1.05-3.76-1.05-1.11 0-1.83.44-1.83 1.2 0 1.94 8.04.3 8.04 5.74z" />
  </svg>
);

const NotionLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="currentColor" className={cn("h-6 w-auto", className)}>
    <path d="M6.017 4.313l55.333-4.087c6.797-.583 8.543-.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277-1.553 6.807-6.99 7.193L24.467 99.967c-4.08.193-6.023-.39-8.16-3.113L3.3 79.94c-2.333-3.113-3.3-5.443-3.3-8.167V11.113c0-3.497 1.553-6.413 6.017-6.8z" />
    <path
      fill="white"
      d="M61.35 1.807l-55.333 4.087C1.553 6.307 0 9.217 0 12.713v61.66c0 2.727.967 5.053 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113l64.257-3.89c5.433-.387 6.99-2.917 6.99-7.193V20.64c0-2.21-.873-2.847-3.443-4.733L75.167 3.31c-4.273-3.107-6.02-3.5-12.817-2.917zM25.92 19.523c-5.247.353-6.437.433-9.417-1.99L8.927 11.507c-.77-.78-.383-1.753 1.557-1.947l53.193-3.887c4.467-.39 6.793 1.167 8.54 2.527l9.123 6.61c.39.197 1.36 1.36.193 1.36l-54.933 3.307-.68.047zM19.803 88.3V30.367c0-2.53.777-3.697 3.103-3.893L86 22.78c2.14-.193 3.107 1.167 3.107 3.693v57.547c0 2.53-.39 4.67-3.883 4.863l-60.377 3.5c-3.493.193-5.043-.97-5.043-4.083zm59.6-54.827c.387 1.75 0 3.5-1.75 3.7l-2.91.577v42.773c-2.527 1.36-4.853 2.137-6.797 2.137-3.107 0-3.883-.973-6.21-3.887l-19.03-29.94v28.967l6.02 1.363s0 3.5-4.857 3.5l-13.39.777c-.39-.78 0-2.723 1.357-3.11l3.497-.97v-38.3L30.48 40.667c-.39-1.75.58-4.277 3.3-4.473l14.367-.967 19.8 30.327v-26.83l-5.047-.58c-.39-2.143 1.163-3.7 3.103-3.89l13.4-.78z"
    />
  </svg>
);

const LinearLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="currentColor" className={cn("h-5 w-auto", className)}>
    <path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5765C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L4.57491 41.4475c-.55186-.5765-1.49117-.2863-1.64813.4782-.46584 2.2686-.77825 4.5932-.92588135 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7946 3.5171-1.6961 5.1855-2.6961.5765-.3451.6703-1.1452.2115-1.6039L5.90729 21.3099c-.45871-.4587-1.25884-.365-1.60392.2115-.99998 1.6684-1.90149 3.3994-2.69244 5.1854ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z" />
  </svg>
);

const FramerLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 14 21" fill="currentColor" className={cn("h-5 w-auto", className)}>
    <path d="M0 0h14v7H7zm0 7h7l7 7H7v7l-7-7z" />
  </svg>
);

const SlackLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 54 54" fill="currentColor" className={cn("h-5 w-auto", className)}>
    <path d="M19.712.133a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386h5.376V5.52A5.381 5.381 0 0 0 19.712.133m0 14.365H5.376A5.381 5.381 0 0 0 0 19.884a5.381 5.381 0 0 0 5.376 5.387h14.336a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386" />
    <path d="M53.76 19.884a5.381 5.381 0 0 0-5.376-5.386 5.381 5.381 0 0 0-5.376 5.386v5.387h5.376a5.381 5.381 0 0 0 5.376-5.387m-14.336 0V5.52A5.381 5.381 0 0 0 34.048.133a5.381 5.381 0 0 0-5.376 5.387v14.364a5.381 5.381 0 0 0 5.376 5.387 5.381 5.381 0 0 0 5.376-5.387" />
    <path d="M34.048 54a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386h-5.376v5.386A5.381 5.381 0 0 0 34.048 54m0-14.365h14.336a5.381 5.381 0 0 0 5.376-5.386 5.381 5.381 0 0 0-5.376-5.387H34.048a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386" />
    <path d="M0 34.249a5.381 5.381 0 0 0 5.376 5.386 5.381 5.381 0 0 0 5.376-5.386v-5.387H5.376A5.381 5.381 0 0 0 0 34.25m14.336-.001v14.364A5.381 5.381 0 0 0 19.712 54a5.381 5.381 0 0 0 5.376-5.387V34.249a5.381 5.381 0 0 0-5.376-5.387 5.381 5.381 0 0 0-5.376 5.387" />
  </svg>
);

const logos = [
  { name: "Vercel", component: VercelLogo },
  { name: "Stripe", component: StripeLogo },
  { name: "Notion", component: NotionLogo },
  { name: "Linear", component: LinearLogo },
  { name: "Framer", component: FramerLogo },
  { name: "Slack", component: SlackLogo },
];

interface CompanyLogosProps {
  className?: string;
  variant?: "default" | "carousel" | "grid";
}

export function CompanyLogos({ className, variant = "default" }: CompanyLogosProps) {
  if (variant === "carousel") {
    return (
      <div className={cn(
        "relative overflow-hidden",
        "py-6 sm:py-8",
        className
      )}>
        {/* Gradient masks - matching hero section */}
        <div className={cn(
          "absolute left-0 top-0 bottom-0 z-10",
          "w-16 sm:w-24 md:w-32 lg:w-40",
          "bg-gradient-to-r from-white via-white/80 to-transparent",
          "dark:from-gray-950 dark:via-gray-950/80 dark:to-transparent"
        )} />
        <div className={cn(
          "absolute right-0 top-0 bottom-0 z-10",
          "w-16 sm:w-24 md:w-32 lg:w-40",
          "bg-gradient-to-l from-white via-white/80 to-transparent",
          "dark:from-gray-950 dark:via-gray-950/80 dark:to-transparent"
        )} />

        <motion.div
          className="flex items-center gap-12 sm:gap-16 md:gap-20"
          animate={{ x: [0, -800] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <motion.div
              key={`${logo.name}-${index}`}
              className={cn(
                "flex items-center shrink-0",
                "px-4 sm:px-6 py-3 sm:py-4",
                "rounded-xl sm:rounded-2xl",
                // Subtle background on hover
                "hover:bg-gray-100/50 dark:hover:bg-gray-800/50",
                "transition-all duration-300 group"
              )}
              whileHover={{ scale: 1.05 }}
              title={logo.name}
            >
              <logo.component className={cn(
                // Default muted state
                "text-gray-400 dark:text-gray-500",
                // Hover state - brand accent
                "group-hover:text-gray-700 dark:group-hover:text-gray-300",
                "transition-colors duration-300",
                // Responsive sizing
                "h-5 sm:h-6 md:h-7"
              )} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  }

  if (variant === "grid") {
    return (
      <div className={cn(
        "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6",
        "p-6 sm:p-8 rounded-2xl sm:rounded-3xl",
        // Container matching hero stats
        "bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm",
        "border border-gray-200/50 dark:border-gray-700/50",
        "shadow-lg shadow-brand-500/5",
        className
      )}>
        {logos.map((logo, index) => (
          <motion.div
            key={logo.name}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              delay: 0.3 + index * 0.1, 
              duration: 0.5,
              type: "spring",
              stiffness: 150
            }}
            whileHover={{ scale: 1.1, y: -4 }}
            className={cn(
              "flex items-center justify-center",
              "p-4 sm:p-6",
              "rounded-xl sm:rounded-2xl",
              // Background
              "bg-white dark:bg-gray-800/50",
              "border border-gray-200/50 dark:border-gray-700/50",
              // Hover effects
              "hover:border-brand-300 dark:hover:border-brand-700",
              "hover:shadow-lg hover:shadow-brand-500/10",
              "transition-all duration-300 group cursor-pointer"
            )}
            title={logo.name}
          >
            {/* Gradient glow on hover */}
            <div className={cn(
              "absolute inset-0 rounded-xl sm:rounded-2xl -z-10 blur-xl",
              "bg-gradient-to-r from-brand-500/10 via-purple-500/10 to-pink-500/10",
              "opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            )} />
            
            <logo.component className={cn(
              "text-gray-400 dark:text-gray-500",
              "group-hover:text-gray-700 dark:group-hover:text-gray-200",
              "transition-colors duration-300",
              "h-6 sm:h-7 md:h-8"
            )} />
          </motion.div>
        ))}
      </div>
    );
  }

  // Default variant
  return (
    <div className={cn(
      "flex flex-wrap items-center justify-center",
      "gap-6 sm:gap-8 md:gap-12 lg:gap-16",
      "py-4 sm:py-6",
      className
    )}>
      {logos.map((logo, index) => (
        <motion.div
          key={logo.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
          whileHover={{ scale: 1.1, y: -2 }}
          className={cn(
            "relative px-3 sm:px-4 py-2 sm:py-3",
            "rounded-lg sm:rounded-xl",
            "hover:bg-gray-100/50 dark:hover:bg-gray-800/30",
            "transition-all duration-300 group"
          )}
          title={logo.name}
        >
          {/* Subtle underline accent on hover */}
          <div className={cn(
            "absolute bottom-0 left-1/2 -translate-x-1/2",
            "w-0 group-hover:w-8 h-0.5",
            "bg-gradient-to-r from-brand-500 via-purple-500 to-pink-500",
            "rounded-full transition-all duration-300"
          )} />
          
          <logo.component className={cn(
            "text-gray-400 dark:text-gray-500",
            "group-hover:text-gray-700 dark:group-hover:text-gray-300",
            "transition-colors duration-300",
            "h-5 sm:h-6 md:h-7"
          )} />
        </motion.div>
      ))}
    </div>
  );
}

// New component: Logos with names
interface CompanyLogosWithNamesProps {
  className?: string;
}

export function CompanyLogosWithNames({ className }: CompanyLogosWithNamesProps) {
  return (
    <div className={cn(
      "flex flex-wrap items-center justify-center",
      "gap-4 sm:gap-6 md:gap-8",
      className
    )}>
      {logos.map((logo, index) => (
        <motion.div
          key={logo.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + index * 0.08, duration: 0.5 }}
          whileHover={{ scale: 1.05, y: -3 }}
          className={cn(
            "flex items-center gap-2 sm:gap-3",
            "px-4 sm:px-5 py-2.5 sm:py-3",
            "rounded-full",
            // Background matching hero social proof
            "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm",
            "border border-gray-200 dark:border-gray-700",
            // Hover effects
            "hover:border-brand-300 dark:hover:border-brand-700",
            "hover:shadow-md hover:shadow-brand-500/10",
            "transition-all duration-300 group"
          )}
        >
          <logo.component className={cn(
            "text-gray-500 dark:text-gray-400",
            "group-hover:text-gray-700 dark:group-hover:text-gray-200",
            "transition-colors duration-300",
            "h-4 sm:h-5"
          )} />
          <span className={cn(
            "text-xs sm:text-sm font-medium",
            "text-gray-600 dark:text-gray-400",
            "group-hover:text-gray-900 dark:group-hover:text-white",
            "transition-colors duration-300"
          )}>
            {logo.name}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

// New component: Featured logos with count
interface FeaturedLogosProps {
  className?: string;
  showCount?: boolean;
  countLabel?: string;
}

export function FeaturedLogos({ 
  className, 
  showCount = true,
  countLabel = "companies trust us"
}: FeaturedLogosProps) {
  return (
    <div className={cn(
      "flex flex-col items-center gap-6 sm:gap-8",
      className
    )}>
      {/* Logos row */}
      <div className="flex items-center gap-6 sm:gap-8 md:gap-10">
        {logos.slice(0, 5).map((logo, index) => (
          <motion.div
            key={logo.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              delay: 0.3 + index * 0.1, 
              type: "spring",
              stiffness: 200 
            }}
            whileHover={{ scale: 1.15 }}
            className={cn(
              "p-2 sm:p-3",
              "rounded-lg sm:rounded-xl",
              "hover:bg-gray-100 dark:hover:bg-gray-800/50",
              "transition-all duration-300 group"
            )}
            title={logo.name}
          >
            <logo.component className={cn(
              "text-gray-400 dark:text-gray-500",
              "group-hover:text-gray-600 dark:group-hover:text-gray-300",
              "transition-colors duration-300",
              "h-5 sm:h-6 md:h-7"
            )} />
          </motion.div>
        ))}
      </div>

      {/* Count badge */}
      {showCount && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className={cn(
            "flex items-center gap-2",
            "px-4 sm:px-5 py-2 sm:py-2.5",
            "rounded-full",
            "bg-gradient-to-r from-brand-50 to-purple-50",
            "dark:from-brand-950/50 dark:to-purple-950/50",
            "border border-brand-200 dark:border-brand-800"
          )}
        >
          <span className={cn(
            "text-lg sm:text-xl font-bold",
            "bg-gradient-to-r from-brand-600 via-purple-600 to-pink-600",
            "dark:from-brand-400 dark:via-purple-400 dark:to-pink-400",
            "bg-clip-text text-transparent"
          )}>
            500+
          </span>
          <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
            {countLabel}
          </span>
        </motion.div>
      )}
    </div>
  );
}

// New component: Animated logo marquee with pause on hover
interface LogoMarqueeProps {
  className?: string;
  speed?: "slow" | "normal" | "fast";
  pauseOnHover?: boolean;
}

export function LogoMarquee({ 
  className, 
  speed = "normal",
  pauseOnHover = true 
}: LogoMarqueeProps) {
  const [isPaused, setIsPaused] = React.useState(false);
  
  const duration = {
    slow: 40,
    normal: 25,
    fast: 15,
  }[speed];

  return (
    <div 
      className={cn(
        "relative overflow-hidden py-6 sm:py-8",
        className
      )}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      {/* Gradient masks */}
      <div className={cn(
        "absolute left-0 top-0 bottom-0 z-10",
        "w-20 sm:w-32 md:w-40",
        "bg-gradient-to-r from-white via-white/90 to-transparent",
        "dark:from-gray-950 dark:via-gray-950/90 dark:to-transparent"
      )} />
      <div className={cn(
        "absolute right-0 top-0 bottom-0 z-10",
        "w-20 sm:w-32 md:w-40",
        "bg-gradient-to-l from-white via-white/90 to-transparent",
        "dark:from-gray-950 dark:via-gray-950/90 dark:to-transparent"
      )} />

      <motion.div
        className="flex items-center gap-10 sm:gap-14 md:gap-20"
        animate={{ x: isPaused ? 0 : [0, -800] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration,
            ease: "linear",
          },
        }}
      >
        {[...logos, ...logos, ...logos].map((logo, index) => (
          <motion.div
            key={`${logo.name}-${index}`}
            className={cn(
              "flex flex-col items-center gap-2 shrink-0",
              "px-4 sm:px-6 py-3 sm:py-4",
              "rounded-xl sm:rounded-2xl",
              "hover:bg-gray-100/70 dark:hover:bg-gray-800/50",
              "transition-all duration-300 group"
            )}
            whileHover={{ scale: 1.08, y: -4 }}
          >
            <logo.component className={cn(
              "text-gray-400 dark:text-gray-500",
              "group-hover:text-gray-700 dark:group-hover:text-gray-200",
              "transition-colors duration-300",
              "h-6 sm:h-7 md:h-8"
            )} />
            <span className={cn(
              "text-[10px] sm:text-xs font-medium",
              "text-gray-400 dark:text-gray-500",
              "group-hover:text-gray-600 dark:group-hover:text-gray-400",
              "opacity-0 group-hover:opacity-100",
              "transition-all duration-300"
            )}>
              {logo.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}