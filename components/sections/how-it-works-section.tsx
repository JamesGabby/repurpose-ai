"use client";

// src/components/sections/how-it-works-section.tsx
import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { howItWorksData } from "@/config/how-it-works";
import { Section, SectionHeader } from "@/components/ui/section";
import { MotionWrapper } from "@/components/ui/motion";
import { CustomButton } from "@/components/ui/custom-button";
import { Icons } from "@/components/ui/icons";
import { StepCard } from "@/components/how-it-works/step-card";
import { StepVisuals } from "@/components/how-it-works/step-visuals";
import { StepProgress } from "@/components/how-it-works/step-progress";

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = React.useState(1);

  // Auto-advance steps
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev >= 3 ? 1 : prev + 1));
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="how-it-works" className="relative overflow-hidden">
      <Section background="default">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-64 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10">
          {/* Section Header */}
          <SectionHeader
            badge={howItWorksData.badge}
            title={howItWorksData.headline.main}
            titleHighlight={howItWorksData.headline.highlight}
            description={howItWorksData.description}
            align="center"
            className="mb-12"
          />

          {/* Step Progress */}
          <MotionWrapper animation="fadeInUp" delay={0.2} className="mb-16">
            <StepProgress
              currentStep={activeStep}
              totalSteps={3}
            />
          </MotionWrapper>

          {/* Main Content */}
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
            {/* Steps List */}
            <div className="space-y-4 order-2 lg:order-1">
              {howItWorksData.steps.map((step, index) => (
                <StepCard
                  key={step.id}
                  step={step}
                  index={index}
                  isActive={activeStep === step.id}
                  onClick={() => setActiveStep(step.id)}
                />
              ))}
            </div>

            {/* Visual */}
            <MotionWrapper
              animation="fadeInRight"
              delay={0.3}
              className="order-1 lg:order-2 lg:sticky lg:top-32"
            >
              <StepVisuals activeStep={activeStep} />
            </MotionWrapper>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="muted" padding="default">
        <MotionWrapper animation="fadeInUp">
          <div className="relative overflow-hidden rounded-3xl">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-600 via-purple-600 to-pink-600" />

            {/* Animated shapes */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -top-1/2 -right-1/2 w-full h-full rounded-full bg-white/5"
              />
              <motion.div
                animate={{
                  rotate: [360, 0],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -bottom-1/2 -left-1/2 w-full h-full rounded-full bg-white/5"
              />
            </div>

            {/* Grid pattern */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />

            {/* Content */}
            <div className="relative z-10 px-6 py-16 md:px-12 md:py-20 lg:px-16 lg:py-24 text-center">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight"
              >
                {howItWorksData.cta.title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-4 text-lg text-white/80 max-w-2xl mx-auto"
              >
                {howItWorksData.cta.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <CustomButton
                  variant="white"
                  size="xl"
                  rightIcon={<Icons.arrowRight className="h-5 w-5" />}
                >
                  {howItWorksData.cta.primaryButton}
                </CustomButton>
                <CustomButton
                  variant="outline"
                  size="xl"
                  className="border-white/30 text-white hover:bg-white/10"
                  leftIcon={<Icons.play className="h-5 w-5" />}
                >
                  {howItWorksData.cta.secondaryButton}
                </CustomButton>
              </motion.div>

              {/* Trust badges */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-white/70"
              >
                <div className="flex items-center gap-2">
                  <Icons.check className="h-4 w-4" />
                  <span>Free 14-day trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icons.check className="h-4 w-4" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icons.check className="h-4 w-4" />
                  <span>Cancel anytime</span>
                </div>
              </motion.div>
            </div>
          </div>
        </MotionWrapper>
      </Section>

      {/* Optional: Comparison Section */}
      <Section background="default" padding="default">
        <MotionWrapper animation="fadeInUp" className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold">
            The Old Way vs. <span className="gradient-text">The RepurposeAI Way</span>
          </h3>
        </MotionWrapper>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Old Way */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/10">
                <Icons.close className="h-5 w-5 text-red-500" />
              </div>
              <h4 className="font-semibold text-red-600 dark:text-red-400">
                Manual Repurposing
              </h4>
            </div>
            <ul className="space-y-3">
              {[
                "Hours spent rewriting for each platform",
                "Inconsistent brand voice",
                "Easy to miss posting schedules",
                "Limited content output",
                "Creative burnout",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Icons.close className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* New Way */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border border-green-500/20 bg-green-500/5 p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10">
                <Icons.check className="h-5 w-5 text-green-500" />
              </div>
              <h4 className="font-semibold text-green-600 dark:text-green-400">
                With RepurposeAI
              </h4>
            </div>
            <ul className="space-y-3">
              {[
                "Generate content in seconds",
                "Consistent brand voice across all platforms",
                "Automated scheduling and publishing",
                "10x more content output",
                "Focus on strategy, not execution",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Icons.check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Section>
    </section>
  );
}