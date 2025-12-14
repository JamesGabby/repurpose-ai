"use client";

// src/components/sections/cta-section.tsx
import * as React from "react";
import { ctaData } from "@/config/cta";
import { Section } from "@/components/ui/section";
import { MotionWrapper } from "@/components/ui/motion";
import { PrimaryCta } from "@/components/cta/primary-cta";
import { StepsCta } from "@/components/cta/steps-cta";
import { NewsletterCta } from "@/components/cta/newsletter-cta";
import { FinalCta } from "@/components/cta/final-cta";

export function CtaSection() {
  return (
    <section id="cta" className="relative overflow-hidden">
      {/* Primary CTA */}
      <Section background="default" padding="default">
        <PrimaryCta
          badge={ctaData.primary.badge}
          headline={ctaData.primary.headline}
          description={ctaData.primary.description}
          primaryButton={ctaData.primary.primaryButton}
          secondaryButton={ctaData.primary.secondaryButton}
          features={ctaData.primary.features}
        />
      </Section>

      {/* Steps CTA */}
      <Section background="muted" padding="default">
        <StepsCta
          headline={ctaData.secondary.headline}
          steps={ctaData.secondary.steps}
        />
      </Section>

      {/* Newsletter CTA */}
      <Section background="default" padding="default">
        <div className="max-w-3xl mx-auto">
          <NewsletterCta
            headline={ctaData.newsletter.headline}
            description={ctaData.newsletter.description}
            placeholder={ctaData.newsletter.placeholder}
            buttonText={ctaData.newsletter.buttonText}
            disclaimer={ctaData.newsletter.disclaimer}
          />
        </div>
      </Section>

      {/* Final CTA */}
      <Section background="muted" padding="default">
        <FinalCta
          headline={ctaData.finalCta.headline}
          subheadline={ctaData.finalCta.subheadline}
          buttonText={ctaData.finalCta.buttonText}
        />
      </Section>
    </section>
  );
}