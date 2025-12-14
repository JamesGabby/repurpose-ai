"use client";

// src/components/sections/testimonials-section.tsx
import * as React from "react";
import { motion } from "framer-motion";
import { testimonialsData } from "@/config/testimonials";
import { Section, SectionHeader } from "@/components/ui/section";
import { MotionWrapper } from "@/components/ui/motion";
import { TestimonialCard } from "@/components/testimonials/testimonial-card";
import { FeaturedTestimonial } from "@/components/testimonials/featured-testimonial";
import { TestimonialsCarousel } from "@/components/testimonials/testimonials-carousel";
import { TestimonialsMarquee } from "@/components/testimonials/testimonials-marquee";
import { StatsBar } from "@/components/testimonials/stats-bar";
import { VideoTestimonial } from "@/components/testimonials/video-testimonial";
import { Icons } from "@/components/ui/icons";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative overflow-hidden">
      {/* Stats Section */}
      <Section background="muted" padding="default">
        <MotionWrapper animation="fadeInUp" className="text-center mb-12">
          <span className="inline-flex items-center rounded-full bg-brand-100 dark:bg-brand-900 px-4 py-1.5 text-sm font-medium text-brand-700 dark:text-brand-300 mb-4">
            <Icons.trendingUp className="mr-2 h-4 w-4" />
            Proven Results
          </span>
          <h3 className="text-2xl md:text-3xl font-bold">
            Numbers That Speak for Themselves
          </h3>
        </MotionWrapper>

        <StatsBar stats={testimonialsData.stats} />
      </Section>

      {/* Featured Testimonial */}
      <Section background="default" padding="default">
        <SectionHeader
          badge={testimonialsData.badge}
          title={testimonialsData.headline.main}
          titleHighlight={testimonialsData.headline.highlight}
          description={testimonialsData.description}
          align="center"
          className="mb-12"
        />

        <FeaturedTestimonial
          quote={testimonialsData.featured.quote}
          author={testimonialsData.featured.author}
          role={testimonialsData.featured.role}
          company={testimonialsData.featured.company}
          metrics={testimonialsData.featured.metrics}
        />
      </Section>

      {/* Testimonials Carousel */}
      <Section background="muted" padding="default">
        <MotionWrapper animation="fadeInUp" className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold">
            What Our <span className="gradient-text">Customers Say</span>
          </h3>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what creators, marketers, and
            businesses have to say about RepurposeAI.
          </p>
        </MotionWrapper>

        <TestimonialsCarousel testimonials={testimonialsData.testimonials} />
      </Section>

      {/* Marquee Section */}
      <Section background="default" padding="sm">
        <MotionWrapper animation="fadeInUp" className="text-center mb-8">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            More Success Stories
          </p>
        </MotionWrapper>

        <TestimonialsMarquee
          testimonials={testimonialsData.testimonials.slice(0, 4)}
          direction="left"
          speed={25}
        />

        <div className="mt-6">
          <TestimonialsMarquee
            testimonials={testimonialsData.testimonials.slice(4)}
            direction="right"
            speed={25}
          />
        </div>
      </Section>

      {/* Video Testimonial */}
      <Section background="muted" padding="default">
        <MotionWrapper animation="fadeInUp" className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold">
            See <span className="gradient-text">Real Results</span>
          </h3>
          <p className="mt-3 text-muted-foreground">
            Watch how our customers are transforming their content strategy
          </p>
        </MotionWrapper>

        <div className="max-w-4xl mx-auto">
          <VideoTestimonial
            author="Marcus Johnson"
            role="Creator & Coach"
            company="Growth Mindset"
            quote="I went from posting once a week to every day across 5 platforms. My audience has grown 3x in just 2 months. RepurposeAI has been a game-changer for my business."
          />
        </div>
      </Section>

      {/* Grid of Testimonials */}
      <Section background="default" padding="default">
        <MotionWrapper animation="fadeInUp" className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold">
            Join Thousands of <span className="gradient-text">Happy Creators</span>
          </h3>
        </MotionWrapper>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonialsData.testimonials.slice(0, 6).map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        {/* Load more button */}
        <MotionWrapper animation="fadeInUp" className="text-center mt-10">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 font-semibold hover:bg-muted transition-colors"
          >
            View All Reviews
            <Icons.arrowRight className="h-4 w-4" />
          </motion.button>
        </MotionWrapper>
      </Section>

      {/* CTA Section */}
      <Section background="muted" padding="default">
        <MotionWrapper animation="fadeInUp">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-purple-600 to-pink-600 p-8 md:p-12 lg:p-16 text-center">
            {/* Background pattern */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                Ready to Join Them?
              </h3>
              <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
                Start your free trial today and see why 50,000+ creators trust
                RepurposeAI for their content needs.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-brand-600 shadow-lg hover:bg-white/90 transition-colors"
                >
                  Start Free Trial
                  <Icons.arrowRight className="h-5 w-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 px-8 py-4 font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  <Icons.play className="h-5 w-5" />
                  Watch Demo
                </motion.button>
              </div>

              {/* Trust badges */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/70">
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
              </div>
            </div>
          </div>
        </MotionWrapper>
      </Section>
    </section>
  );
}