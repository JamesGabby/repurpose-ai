// src/app/page.tsx
import { LayoutWrapper } from "@/components/layout";

export default function Home() {
  return (
    <LayoutWrapper>
      {/* Temporary placeholder content */}
      <div className="pt-32 pb-20">
        <div className="container-wide">
          <h1 className="text-4xl font-bold text-center">
            Landing Page Coming Soon
          </h1>
          <p className="mt-4 text-center text-muted-foreground">
            Navigation and layout components are ready!
          </p>
          
          {/* Test scroll */}
          <div className="mt-20 space-y-96">
            <section id="features" className="py-20">
              <h2 className="text-2xl font-bold">Features Section</h2>
            </section>
            <section id="how-it-works" className="py-20">
              <h2 className="text-2xl font-bold">How It Works Section</h2>
            </section>
            <section id="pricing" className="py-20">
              <h2 className="text-2xl font-bold">Pricing Section</h2>
            </section>
            <section id="testimonials" className="py-20">
              <h2 className="text-2xl font-bold">Testimonials Section</h2>
            </section>
            <section id="faq" className="py-20">
              <h2 className="text-2xl font-bold">FAQ Section</h2>
            </section>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
}