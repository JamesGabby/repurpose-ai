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
        className="relative min-h-screen overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40"
      >
        {/* Background */}
        <GradientBackground variant="hero" />

        <div className="container-wide relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 xl:gap-16 items-center">
            {/* Left Column - Content */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left max-w-2xl mx-auto lg:max-w-none">
              {/* Badge */}
              <MotionWrapper animation="fadeInDown">
                <AnimatedBadge
                  variant="glow"
                  pulse
                  icon={<Icons.sparkles className="h-3.5 w-3.5 text-brand-500" />}
                  className="mb-6"
                >
                  {heroData.badge}
                </AnimatedBadge>
              </MotionWrapper>

              {/* Headline */}
              <MotionWrapper animation="fadeInUp" delay={0.1}>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
                  <AnimatedWords text={heroData.headline.main} delay={0.2} />
                  <br className="hidden sm:block" />
                  <span className="relative inline-block mt-2">
                    <span className="gradient-text-animated">
                      {heroData.headline.highlight}
                    </span>
                    {/* Decorative underline */}
                    <motion.svg
                      className="absolute -bottom-2 left-0 w-full h-3"
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
                          <stop offset="0%" stopColor="#6366f1" />
                          <stop offset="50%" stopColor="#a855f7" />
                          <stop offset="100%" stopColor="#ec4899" />
                        </linearGradient>
                      </defs>
                    </motion.svg>
                  </span>
                </h1>
              </MotionWrapper>

              {/* Subheadline */}
              <MotionWrapper animation="fadeInUp" delay={0.2}>
                <p className="mt-6 text-lg text-muted-foreground md:text-xl leading-relaxed">
                  {heroData.subheadline}
                </p>
              </MotionWrapper>

              {/* Platform Pills */}
              <MotionWrapper animation="fadeInUp" delay={0.3}>
                <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                  <span>Create content for</span>
                  <span className="font-semibold">
                    <RotatingText
                      texts={heroData.platforms}
                      interval={2000}
                      className="text-brand-600 dark:text-brand-400 min-w-[100px]"
                    />
                  </span>
                </div>
              </MotionWrapper>

              {/* CTAs */}
              <MotionWrapper animation="fadeInUp" delay={0.4}>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row w-full sm:w-auto">
                  <Link href={heroData.cta.primary.href}>
                    <CustomButton
                      variant="gradient"
                      size="xl"
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
                          <Icons.arrowRight className="h-5 w-5" />
                        </motion.span>
                      }
                      className="w-full sm:w-auto"
                    >
                      {heroData.cta.primary.text}
                    </CustomButton>
                  </Link>
                  <CustomButton
                    variant="outline"
                    size="xl"
                    onClick={() => setIsVideoOpen(true)}
                    leftIcon={
                      <span className="relative">
                        <Icons.play className="h-5 w-5" />
                        <span className="absolute inset-0 animate-ping rounded-full bg-brand-500/20" />
                      </span>
                    }
                    className="w-full sm:w-auto"
                  >
                    {heroData.cta.secondary.text}
                  </CustomButton>
                </div>
              </MotionWrapper>

              {/* Trust Signals */}
              <MotionWrapper animation="fadeInUp" delay={0.5}>
                <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500/10">
                      <Icons.check className="h-3 w-3 text-green-500" />
                    </span>
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500/10">
                      <Icons.check className="h-3 w-3 text-green-500" />
                    </span>
                    <span>14-day free trial</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500/10">
                      <Icons.check className="h-3 w-3 text-green-500" />
                    </span>
                    <span>Cancel anytime</span>
                  </div>
                </div>
              </MotionWrapper>

              {/* Social Proof - Avatars & Rating */}
              <MotionWrapper animation="fadeInUp" delay={0.6}>
                <div className="mt-8 flex items-center gap-4">
                  {/* Avatar Stack */}
                  <div className="flex -space-x-3">
                    {[
                      "from-brand-400 to-purple-400",
                      "from-purple-400 to-pink-400",
                      "from-pink-400 to-orange-400",
                      "from-orange-400 to-yellow-400",
                      "from-green-400 to-teal-400",
                    ].map((gradient, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 + i * 0.1 }}
                        className={cn(
                          "h-10 w-10 rounded-full border-2 border-background",
                          `bg-gradient-to-br ${gradient}`
                        )}
                      />
                    ))}
                  </div>

                  {/* Rating */}
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1 + i * 0.05 }}
                        >
                          <Icons.star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        </motion.span>
                      ))}
                      <span className="ml-1 font-bold text-foreground">4.9</span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      from 2,000+ happy creators
                    </span>
                  </div>
                </div>
              </MotionWrapper>
            </div>

            {/* Right Column - Visual */}
            <div className="relative lg:pl-4 xl:pl-8">
              <HeroVisual />
            </div>
          </div>

          {/* Stats Section */}
          <MotionWrapper animation="fadeInUp" delay={0.2} className="mt-20 md:mt-28 lg:mt-32">
            <div className="relative">
              {/* Decorative line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-transparent via-border to-transparent -mt-12 hidden md:block" />
              <HeroStats stats={heroData.stats} />
            </div>
          </MotionWrapper>

          {/* Trusted By Section */}
          <div className="mt-20 md:mt-24 lg:mt-28">
            <MotionWrapper animation="fadeInUp">
              <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wider">
                {heroData.trustedBy.label}
              </p>
            </MotionWrapper>
            <CompanyLogos variant="carousel" />
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
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