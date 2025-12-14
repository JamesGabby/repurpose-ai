"use client";

// src/components/sections/hero-section.tsx
import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { heroData } from "@/config/hero";
import { CustomButton } from "@/components/ui/custom-button";
import { AnimatedBadge } from "@/components/ui/animated-badge";
import { Icons } from "@/components/ui/icons";
import { GradientBackground } from "@/components/ui/gradient-background";
import { AnimatedWords, RotatingText } from "@/components/ui/animated-text";
import { HeroVisual } from "@/components/hero/hero-visual";
import { HeroStats } from "@/components/hero/hero-stats";
import { CompanyLogos } from "@/components/hero/company-logos";
import { MotionWrapper } from "@/components/ui/motion";
import { VideoModal } from "@/components/ui/video-modal";

export function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = React.useState(false);

  return (
    <>
      <section
        id="hero"
        className={cn(
          "relative overflow-hidden",
          // Responsive padding - accounts for header height
          "pt-24 pb-12",
          "sm:pt-28 sm:pb-16",
          "md:pt-32 md:pb-20",
          "lg:pt-36 lg:pb-24",
          "xl:pt-40 xl:pb-28",
          // Minimum height
          "min-h-[100svh] lg:min-h-screen"
        )}
      >
        {/* Background */}
        <GradientBackground variant="hero" />

        {/* Subtle ambient glow - responsive sizing */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 sm:left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-brand-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 sm:right-1/4 w-56 sm:w-72 md:w-80 h-56 sm:h-72 md:h-80 bg-purple-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container-wide relative z-10">
          {/* Main Grid - Stack on mobile, side-by-side on lg+ */}
          <div className={cn(
            "grid items-center gap-8",
            "grid-cols-1",
            "lg:grid-cols-2 lg:gap-12",
            "xl:gap-16 2xl:gap-20"
          )}>
            {/* Left Column - Content */}
            <div className={cn(
              "flex flex-col",
              "items-center text-center",
              "lg:items-start lg:text-left",
              "max-w-2xl mx-auto lg:max-w-none",
              "order-2 lg:order-1" // Content below visual on mobile
            )}>
              {/* Badge */}
              <MotionWrapper animation="fadeInDown">
                <AnimatedBadge
                  variant="glow"
                  pulse
                  icon={<Icons.sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-brand-600 dark:text-brand-400" />}
                  className={cn(
                    "mb-4 sm:mb-6",
                    "border-brand-200 dark:border-brand-800",
                    "bg-brand-50 dark:bg-brand-950/80",
                    "text-xs sm:text-sm"
                  )}
                >
                  <span className="text-brand-700 dark:text-brand-300 font-semibold">
                    {heroData.badge}
                  </span>
                </AnimatedBadge>
              </MotionWrapper>

              {/* Headline - Responsive sizing */}
              <MotionWrapper animation="fadeInUp" delay={0.1}>
                <h1 className={cn(
                  "font-bold tracking-tight",
                  // Responsive text sizes
                  "text-3xl",        // Mobile
                  "sm:text-4xl",     // Small
                  "md:text-5xl",     // Medium
                  "lg:text-5xl",     // Large
                  "xl:text-6xl",     // Extra large
                  "2xl:text-7xl"     // 2XL
                )}>
                  {/* Main headline */}
                  <span className="text-gray-900 dark:text-white block">
                    <AnimatedWords text={heroData.headline.main} delay={0.2} />
                  </span>

                  {/* Highlighted part with gradient */}
                  <span className="relative inline-block mt-1 sm:mt-2">
                    <span className="bg-gradient-to-r from-brand-600 via-purple-600 to-pink-600 dark:from-brand-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                      {heroData.headline.highlight}
                    </span>
                    {/* Decorative underline - hidden on smallest screens */}
                    <motion.svg
                      className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 sm:h-3"
                      viewBox="0 0 200 12"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                    >
                      <motion.path
                        d="M2 8.5C47.5 3.5 154 -1.5 198 8.5"
                        stroke="url(#hero-underline-gradient)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                      />
                      <defs>
                        <linearGradient
                          id="hero-underline-gradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#7c3aed" />
                          <stop offset="50%" stopColor="#a855f7" />
                          <stop offset="100%" stopColor="#ec4899" />
                        </linearGradient>
                      </defs>
                    </motion.svg>
                  </span>
                </h1>
              </MotionWrapper>

              {/* Subheadline - Responsive */}
              <MotionWrapper animation="fadeInUp" delay={0.2}>
                <p className={cn(
                  "mt-4 sm:mt-6",
                  "text-base sm:text-lg md:text-xl",
                  "leading-relaxed",
                  "max-w-lg lg:max-w-xl",
                  "text-gray-600 dark:text-gray-300"
                )}>
                  {heroData.subheadline}
                </p>
              </MotionWrapper>

              {/* Platform Pills - Responsive with fixed width */}
              <MotionWrapper animation="fadeInUp" delay={0.3}>
                <div className={cn(
                  "mt-4 sm:mt-6",
                  "flex flex-wrap items-center justify-center lg:justify-start gap-2",
                  "text-sm sm:text-base"
                )}>
                  <span className="text-gray-600 dark:text-gray-400 font-medium">
                    Create content for
                  </span>
                  <span className={cn(
                    "inline-flex items-center justify-center",
                    "font-bold rounded-full",
                    "bg-brand-100 dark:bg-brand-900/80",
                    "border border-brand-300 dark:border-brand-700",
                    // Fixed width to prevent jumping
                    "w-[110px] sm:w-[130px]",
                    "h-[32px] sm:h-[36px]"
                  )}>
                    <RotatingText
                      texts={heroData.platforms}
                      interval={2000}
                      className="text-brand-700 dark:text-brand-200"
                    />
                  </span>
                </div>
              </MotionWrapper>

              {/* CTAs - Stack on mobile, row on sm+ */}
              <MotionWrapper animation="fadeInUp" delay={0.4}>
                <div className={cn(
                  "mt-6 sm:mt-8",
                  "flex flex-col sm:flex-row",
                  "gap-3 sm:gap-4",
                  "w-full sm:w-auto"
                )}>
                  <Link href={heroData.cta.primary.href} className="w-full sm:w-auto">
                    <CustomButton
                      variant="gradient"
                      size="lg"
                      glowEffect
                      rightIcon={
                        <motion.span
                          animate={{ x: [0, 4, 0] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <Icons.arrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                        </motion.span>
                      }
                      className="w-full sm:w-auto shadow-lg shadow-brand-500/30"
                    >
                      {heroData.cta.primary.text}
                    </CustomButton>
                  </Link>
                  <CustomButton
                    variant="outline"
                    size="lg"
                    onClick={() => setIsVideoOpen(true)}
                    leftIcon={
                      <span className="relative flex items-center justify-center">
                        <span className="absolute inset-0 rounded-full bg-brand-500/20 animate-ping" />
                        <span className={cn(
                          "relative flex items-center justify-center rounded-full",
                          "h-6 w-6 sm:h-8 sm:w-8",
                          "bg-brand-100 dark:bg-brand-900",
                          "border border-brand-300 dark:border-brand-700"
                        )}>
                          <Icons.play className="h-3 w-3 sm:h-4 sm:w-4 text-brand-700 dark:text-brand-300 ml-0.5" />
                        </span>
                      </span>
                    }
                    className={cn(
                      "w-full sm:w-auto",
                      "border-2 border-gray-300 dark:border-gray-600",
                      "hover:border-brand-400 dark:hover:border-brand-500",
                      "text-gray-900 dark:text-white"
                    )}
                  >
                    {heroData.cta.secondary.text}
                  </CustomButton>
                </div>
              </MotionWrapper>

              {/* Trust Signals - Responsive layout */}
              <MotionWrapper animation="fadeInUp" delay={0.5}>
                <div className={cn(
                  "mt-6 sm:mt-8",
                  "flex flex-wrap items-center",
                  "justify-center lg:justify-start",
                  "gap-x-4 sm:gap-x-6 gap-y-2 sm:gap-y-3"
                )}>
                  {[
                    "No credit card required",
                    "14-day free trial",
                    "Cancel anytime",
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex items-center gap-1.5 sm:gap-2"
                    >
                      <span className={cn(
                        "flex items-center justify-center rounded-full",
                        "h-4 w-4 sm:h-5 sm:w-5",
                        "bg-emerald-100 dark:bg-emerald-900/50"
                      )}>
                        <Icons.check className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-emerald-600 dark:text-emerald-400" />
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </MotionWrapper>

              {/* Social Proof - Responsive layout */}
              <MotionWrapper animation="fadeInUp" delay={0.6}>
                <div className={cn(
                  "mt-8 sm:mt-10",
                  "flex flex-col sm:flex-row items-center gap-4 sm:gap-5",
                  "p-3 sm:p-4 rounded-xl sm:rounded-2xl",
                  "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm",
                  "border border-gray-200 dark:border-gray-700 shadow-sm",
                  "w-full sm:w-auto"
                )}>
                  {/* Avatar Stack + Count */}
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2 sm:-space-x-3">
                      {[
                        { gradient: "from-brand-500 to-brand-600", initials: "JD" },
                        { gradient: "from-purple-500 to-purple-600", initials: "SK" },
                        { gradient: "from-pink-500 to-pink-600", initials: "MR" },
                        { gradient: "from-amber-500 to-orange-500", initials: "AL" },
                        // Show fewer avatars on mobile
                      ].slice(0, 4).map((avatar, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0, x: -10 }}
                          animate={{ opacity: 1, scale: 1, x: 0 }}
                          transition={{
                            delay: 0.8 + i * 0.1,
                            type: "spring",
                            stiffness: 200,
                            damping: 15,
                          }}
                          className={cn(
                            "relative rounded-full border-2 border-white dark:border-gray-800 shadow-md",
                            "h-8 w-8 sm:h-10 sm:w-10",
                            `bg-gradient-to-br ${avatar.gradient}`,
                            "flex items-center justify-center"
                          )}
                        >
                          <span className="text-white text-[10px] sm:text-xs font-bold drop-shadow-sm">
                            {avatar.initials}
                          </span>
                        </motion.div>
                      ))}
                      {/* More users indicator */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.3 }}
                        className={cn(
                          "relative rounded-full border-2 border-white dark:border-gray-800",
                          "h-8 w-8 sm:h-10 sm:w-10",
                          "bg-gray-100 dark:bg-gray-800",
                          "flex items-center justify-center shadow-md"
                        )}
                      >
                        <span className="text-[10px] sm:text-xs font-bold text-gray-600 dark:text-gray-300">
                          +2k
                        </span>
                      </motion.div>
                    </div>
                  </div>

                  {/* Divider - vertical on sm+, horizontal on mobile */}
                  <div className="hidden sm:block h-10 w-px bg-gray-300 dark:bg-gray-600" />
                  <div className="sm:hidden w-full h-px bg-gray-300 dark:bg-gray-600" />

                  {/* Rating */}
                  <div className="flex flex-col items-center sm:items-start">
                    <div className="flex items-center gap-1 sm:gap-1.5">
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0, rotate: -180 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{
                              delay: 1 + i * 0.08,
                              type: "spring",
                              stiffness: 200,
                            }}
                          >
                            <Icons.star className="h-4 w-4 sm:h-5 sm:w-5 fill-amber-400 text-amber-400" />
                          </motion.span>
                        ))}
                      </div>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="ml-1 text-base sm:text-lg font-bold text-gray-900 dark:text-white"
                      >
                        4.9
                      </motion.span>
                    </div>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.6 }}
                      className="text-xs sm:text-sm text-gray-600 dark:text-gray-400"
                    >
                      from{" "}
                      <span className="font-semibold text-gray-900 dark:text-white">
                        2,000+
                      </span>{" "}
                      creators
                    </motion.span>
                  </div>
                </div>
              </MotionWrapper>
            </div>

            {/* Right Column - Visual */}
            <div className={cn(
              "relative",
              "order-1 lg:order-2", // Visual above content on mobile
              "lg:pl-4 xl:pl-8",
              // Hide on very small screens, show on sm+
              "hidden sm:block"
            )}>
              <HeroVisual />
            </div>
          </div>

          {/* Stats Section - Responsive spacing */}
          <MotionWrapper
            animation="fadeInUp"
            delay={0.2}
            className="mt-16 sm:mt-20 md:mt-24 lg:mt-28 xl:mt-32"
          >
            <div className="relative">
              {/* Decorative line - hidden on mobile */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-8 sm:h-12 bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-600 to-transparent -mt-8 sm:-mt-12 hidden md:block" />
              <HeroStats stats={heroData.stats} />
            </div>
          </MotionWrapper>

          {/* Trusted By Section - Responsive spacing */}
          {/* <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-28">
            <MotionWrapper animation="fadeInUp">
              <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="h-px flex-1 max-w-[60px] sm:max-w-[100px] bg-gradient-to-r from-transparent to-gray-300 dark:to-gray-600" />
                <p className="text-center text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider sm:tracking-widest">
                  {heroData.trustedBy.label}
                </p>
                <div className="h-px flex-1 max-w-[60px] sm:max-w-[100px] bg-gradient-to-l from-transparent to-gray-300 dark:to-gray-600" />
              </div>
            </MotionWrapper>

            <CompanyLogos variant="carousel" />
          </div> */}
        </div>

        {/* Bottom gradient fade - Responsive height */}
        <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 md:h-40 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
      </section>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="See RepurposeAI in Action"
      />
    </>
  );
}