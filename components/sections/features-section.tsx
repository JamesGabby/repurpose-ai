"use client";

// src/components/sections/features-section.tsx
import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { featuresData } from "@/config/features";
import { Section, SectionHeader } from "@/components/ui/section";
import { MotionWrapper, MotionContainer, MotionItem } from "@/components/ui/motion";
import { FeatureCard } from "@/components/features/feature-card";
import { FeatureHighlight } from "@/components/features/feature-highlight";
import { BentoFeature } from "@/components/features/bento-feature";
import { PlatformPreview } from "@/components/features/platform-preview";
import { Icons } from "@/components/ui/icons";

export function FeaturesSection() {
  return (
    <section id="features" className="relative overflow-hidden">
      {/* Main Features Grid */}
      <Section background="muted" className="relative">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10">
          {/* Section Header */}
          <SectionHeader
            badge={featuresData.badge}
            title={featuresData.headline.main}
            titleHighlight={featuresData.headline.highlight}
            description={featuresData.description}
            align="center"
            className="mb-16"
          />

          {/* Features Grid */}
          <MotionContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.features.map((feature, index) => (
              <MotionItem key={feature.id}>
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  benefits={feature.benefits}
                  color={feature.color}
                  index={index}
                />
              </MotionItem>
            ))}
          </MotionContainer>
        </div>
      </Section>

      {/* Platform Preview Section */}
      <Section background="default">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <MotionWrapper animation="fadeInUp">
              <span className="inline-flex items-center rounded-full bg-brand-100 dark:bg-brand-900 px-4 py-1.5 text-sm font-medium text-brand-700 dark:text-brand-300 mb-4">
                <Icons.sparkles className="mr-2 h-4 w-4" />
                Platform Optimization
              </span>
            </MotionWrapper>

            <MotionWrapper animation="fadeInUp" delay={0.1}>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
                One Input,{" "}
                <span className="gradient-text">Endless Outputs</span>
              </h3>
            </MotionWrapper>

            <MotionWrapper animation="fadeInUp" delay={0.2}>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Paste your blog post, video transcript, or podcast notes. Our AI
                instantly generates platform-optimized content that matches each
                network's unique style and best practices.
              </p>
            </MotionWrapper>

            <MotionWrapper animation="fadeInUp" delay={0.3}>
              <ul className="mt-6 space-y-3">
                {[
                  "Twitter threads with hooks and engagement tactics",
                  "LinkedIn posts with professional formatting",
                  "Instagram carousels with visual storytelling",
                  "TikTok scripts with trending formats",
                  "Newsletter content with personal touch",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-500/10 mt-0.5">
                      <Icons.check className="h-3.5 w-3.5 text-green-500" />
                    </span>
                    <span className="text-muted-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </MotionWrapper>
          </div>

          {/* Preview */}
          <MotionWrapper animation="fadeInRight" delay={0.2}>
            <PlatformPreview />
          </MotionWrapper>
        </div>
      </Section>

      {/* Bento Grid Section */}
      <Section background="muted">
        <MotionWrapper animation="fadeInUp" className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
            Built for{" "}
            <span className="gradient-text">Modern Content Teams</span>
          </h3>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to scale your content operation without scaling
            your team.
          </p>
        </MotionWrapper>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Large Feature */}
          <BentoFeature
            title="AI-Powered Writing"
            description="Our advanced AI understands context, maintains your brand voice, and creates engaging content that resonates with your audience."
            icon="sparkles"
            size="large"
            gradient="from-brand-500 to-purple-500"
            className="lg:col-span-2 lg:row-span-2"
          >
            <div className="mt-4 rounded-xl bg-muted/50 p-4 border border-border/50">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-medium text-muted-foreground">
                  AI is writing...
                </span>
              </div>
              <div className="space-y-2">
                <div className="h-3 bg-muted rounded w-full animate-pulse" />
                <div className="h-3 bg-muted rounded w-4/5 animate-pulse" />
                <div className="h-3 bg-muted rounded w-3/5 animate-pulse" />
              </div>
            </div>
          </BentoFeature>

          {/* Smaller Features */}
          <BentoFeature
            title="Version History"
            description="Track changes and revert to previous versions anytime."
            icon="refresh"
            gradient="from-green-500 to-emerald-500"
          />

          <BentoFeature
            title="Team Permissions"
            description="Control who can edit, publish, and manage content."
            icon="shield"
            gradient="from-orange-500 to-amber-500"
          />

          <BentoFeature
            title="API Access"
            description="Integrate RepurposeAI into your existing workflow."
            icon="settings"
            gradient="from-pink-500 to-rose-500"
          />

          <BentoFeature
            title="Custom Templates"
            description="Create reusable templates for consistent output."
            icon="fileText"
            gradient="from-blue-500 to-cyan-500"
          />
        </div>
      </Section>

      {/* Highlight Section */}
      <Section background="default">
        <FeatureHighlight
          title={featuresData.highlight.title}
          description={featuresData.highlight.description}
          stats={featuresData.highlight.stats}
        />
      </Section>

      {/* Integration Logos */}
      <Section background="muted" padding="sm">
        <MotionWrapper animation="fadeInUp" className="text-center">
          <p className="text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wider">
            Integrates with your favorite tools
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
            {["Notion", "Slack", "Zapier", "WordPress", "HubSpot", "Webflow"].map(
              (tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-xl font-bold text-muted-foreground/50 hover:text-muted-foreground transition-colors"
                >
                  {tool}
                </motion.div>
              )
            )}
          </div>
        </MotionWrapper>
      </Section>
    </section>
  );
}