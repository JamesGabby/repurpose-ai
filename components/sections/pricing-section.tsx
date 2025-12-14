"use client";

// src/components/sections/pricing-section.tsx
import * as React from "react";
import { motion } from "framer-motion";
import { pricingData } from "@/config/pricing";
import { Section, SectionHeader } from "@/components/ui/section";
import { MotionWrapper } from "@/components/ui/motion";
import { PricingToggle } from "@/components/pricing/pricing-toggle";
import { PricingCard } from "@/components/pricing/pricing-card";
import { EnterpriseCard } from "@/components/pricing/enterprise-card";
import { GuaranteeBadge } from "@/components/pricing/guarantee-badge";
import { PricingFAQ } from "@/components/pricing/pricing-faq";
import { FeatureComparison } from "@/components/pricing/feature-comparison";
import { Icons } from "@/components/ui/icons";

export function PricingSection() {
  const [isYearly, setIsYearly] = React.useState(true);

  return (
    <section id="pricing" className="relative overflow-hidden">
      {/* Main Pricing Section */}
      <Section background="muted">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10">
          {/* Section Header */}
          <SectionHeader
            badge={pricingData.badge}
            title={pricingData.headline.main}
            titleHighlight={pricingData.headline.highlight}
            description={pricingData.description}
            align="center"
            className="mb-10"
          />

          {/* Billing Toggle */}
          <MotionWrapper animation="fadeInUp" delay={0.2} className="mb-12">
            <PricingToggle
              isYearly={isYearly}
              onToggle={setIsYearly}
              monthlyLabel={pricingData.billingToggle.monthly}
              yearlyLabel={pricingData.billingToggle.yearly}
              savingsLabel={pricingData.billingToggle.yearlySavings}
            />
          </MotionWrapper>

          {/* Pricing Cards */}
          <div className="grid gap-8 lg:grid-cols-3 lg:gap-6 items-start max-w-6xl mx-auto">
            {pricingData.plans.map((plan, index) => (
              <PricingCard
                key={plan.id}
                plan={plan}
                isYearly={isYearly}
                index={index}
              />
            ))}
          </div>

          {/* Enterprise Card */}
          <MotionWrapper animation="fadeInUp" delay={0.4} className="mt-12">
            <EnterpriseCard
              title={pricingData.enterprise.title}
              description={pricingData.enterprise.description}
              features={pricingData.enterprise.features}
              cta={pricingData.enterprise.cta}
            />
          </MotionWrapper>
        </div>
      </Section>

      {/* Guarantee Section */}
      <Section background="default" padding="sm">
        <GuaranteeBadge
          title={pricingData.guarantee.title}
          description={pricingData.guarantee.description}
          className="max-w-4xl mx-auto"
        />
      </Section>

      {/* Feature Comparison */}
      <Section background="default" padding="default">
        <FeatureComparison />
      </Section>

      {/* Trust Badges */}
      <Section background="muted" padding="sm">
        <MotionWrapper animation="fadeInUp">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {[
              { icon: Icons.shield, label: "Secure Payments" },
              { icon: Icons.zap, label: "Instant Access" },
              { icon: Icons.users, label: "50K+ Users" },
              { icon: Icons.star, label: "4.9/5 Rating" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <item.icon className="h-5 w-5 text-brand-500" />
                <span className="text-sm font-medium">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </MotionWrapper>
      </Section>

      {/* Pricing FAQ */}
      <Section background="default" padding="default">
        <PricingFAQ
          title={pricingData.faq.title}
          questions={pricingData.faq.questions}
        />
      </Section>

      {/* Final CTA */}
      <Section background="muted" padding="default">
        <MotionWrapper animation="fadeInUp">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold">
              Still have questions?
            </h3>
            <p className="mt-3 text-muted-foreground">
              Our team is here to help. Get in touch and we'll respond within 24
              hours.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="mailto:support@repurposeai.com"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 font-semibold hover:bg-muted transition-colors"
              >
                <Icons.mail className="h-5 w-5" />
                Email Support
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-purple-500 px-6 py-3 font-semibold text-white shadow-lg shadow-brand-500/25"
              >
                <Icons.calendar className="h-5 w-5" />
                Book a Demo
              </motion.a>
            </div>
          </div>
        </MotionWrapper>
      </Section>
    </section>
  );
}