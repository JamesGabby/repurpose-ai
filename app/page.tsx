// src/app/page.tsx
import { LayoutWrapper } from "@/components/layout";
import {
  HeroSection,
  FeaturesSection,
  HowItWorksSection,
} from "@/components/sections";

export default function Home() {
  return (
    <LayoutWrapper showAnnouncement={true}>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />

      {/* Placeholder sections - will be built in next stages */}
      <section id="pricing" className="section-padding bg-muted/30">
        <div className="container-wide">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700 mb-4">
              Coming in Stage 7
            </span>
            <h2 className="text-3xl font-bold">Pricing Section</h2>
            <p className="mt-2 text-muted-foreground">
              Flexible plans for creators of all sizes
            </p>
          </div>
        </div>
      </section>

      <section id="testimonials" className="section-padding">
        <div className="container-wide">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700 mb-4">
              Coming in Stage 8
            </span>
            <h2 className="text-3xl font-bold">Testimonials Section</h2>
            <p className="mt-2 text-muted-foreground">
              See what our customers are saying
            </p>
          </div>
        </div>
      </section>

      <section id="faq" className="section-padding bg-muted/30">
        <div className="container-wide">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700 mb-4">
              Coming in Stage 9
            </span>
            <h2 className="text-3xl font-bold">FAQ Section</h2>
            <p className="mt-2 text-muted-foreground">
              Answers to common questions
            </p>
          </div>
        </div>
      </section>

      <section id="cta" className="section-padding">
        <div className="container-wide">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700 mb-4">
              Coming in Stage 10
            </span>
            <h2 className="text-3xl font-bold">Final CTA Section</h2>
            <p className="mt-2 text-muted-foreground">
              Ready to transform your content?
            </p>
          </div>
        </div>
      </section>
    </LayoutWrapper>
  );
}