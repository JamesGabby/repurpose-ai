// src/app/page.tsx
import { LayoutWrapper } from "@/components/layout";
import {
  HeroSection,
  FeaturesSection,
  HowItWorksSection,
  PricingSection,
  TestimonialsSection,
  FAQSection,
  CtaSection,
} from "@/components/sections";
import {
  WebsiteStructuredData,
  SoftwareApplicationStructuredData,
  OrganizationStructuredData,
} from "@/components/seo/structured-data";

export default function Home() {
  return (
    <>
      {/* Structured Data for SEO */}
      <WebsiteStructuredData />
      <SoftwareApplicationStructuredData />
      <OrganizationStructuredData />

      <LayoutWrapper showAnnouncement={true}>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <CtaSection />
      </LayoutWrapper>
    </>
  );
}