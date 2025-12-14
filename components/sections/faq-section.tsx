"use client";

// src/components/sections/faq-section.tsx
import * as React from "react";
import { motion } from "framer-motion";
import { faqData, FAQQuestion } from "@/config/faq";
import { Section, SectionHeader } from "@/components/ui/section";
import { MotionWrapper } from "@/components/ui/motion";
import { FAQAccordion } from "@/components/faq/faq-accordion";
import { FAQSearch } from "@/components/faq/faq-search";
import { FAQCategories } from "@/components/faq/faq-categories";
import { FAQContact } from "@/components/faq/faq-contact";
import { FAQGrid } from "@/components/faq/faq-grid";
import { Icons } from "@/components/ui/icons";

export function FAQSection() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [activeCategory, setActiveCategory] = React.useState("all");
  const [viewMode, setViewMode] = React.useState<"accordion" | "grid">("accordion");

  // Filter questions based on search and category
  const filteredQuestions = React.useMemo(() => {
    return faqData.questions.filter((q) => {
      const matchesSearch =
        searchQuery === "" ||
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        activeCategory === "all" || q.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  // Get popular questions (first 4)
  const popularQuestions = faqData.questions.slice(0, 4);

  return (
    <section id="faq" className="relative overflow-hidden">
      {/* Main FAQ Section */}
      <Section background="muted">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-64 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10">
          {/* Section Header */}
          <SectionHeader
            badge={faqData.badge}
            title={faqData.headline.main}
            titleHighlight={faqData.headline.highlight}
            description={faqData.description}
            align="center"
            className="mb-10"
          />

          {/* Search */}
          <div className="max-w-2xl mx-auto mb-8">
            <FAQSearch
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search for answers..."
            />
          </div>

          {/* Categories */}
          <FAQCategories
            categories={faqData.categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            className="mb-8"
          />

          {/* View Toggle */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="text-sm text-muted-foreground mr-2">View:</span>
            <div className="inline-flex items-center rounded-lg border border-border bg-card p-1">
              <button
                onClick={() => setViewMode("accordion")}
                className={cn(
                  "rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                  viewMode === "accordion"
                    ? "bg-brand-500 text-white"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                List
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={cn(
                  "rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                  viewMode === "grid"
                    ? "bg-brand-500 text-white"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                Grid
              </button>
            </div>
          </div>

          {/* Results count */}
          {searchQuery && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-sm text-muted-foreground mb-6"
            >
              Found {filteredQuestions.length} result
              {filteredQuestions.length !== 1 ? "s" : ""} for "{searchQuery}"
            </motion.p>
          )}

          {/* FAQ Content */}
          <div className="max-w-4xl mx-auto">
            {filteredQuestions.length > 0 ? (
              viewMode === "accordion" ? (
                <FAQAccordion questions={filteredQuestions} />
              ) : (
                <FAQGrid questions={filteredQuestions} />
              )
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-muted mb-4">
                  <Icons.search className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold">No results found</h3>
                <p className="mt-2 text-muted-foreground">
                  Try adjusting your search or browse all categories
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("all");
                  }}
                  className="mt-4 text-brand-500 hover:underline"
                >
                  Clear filters
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </Section>

      {/* Popular Questions (Quick Links) */}
      <Section background="default" padding="default">
        <MotionWrapper animation="fadeInUp" className="text-center mb-10">
          <h3 className="text-2xl font-bold">
            <span className="gradient-text">Popular</span> Questions
          </h3>
          <p className="mt-2 text-muted-foreground">
            Quick answers to the most common questions
          </p>
        </MotionWrapper>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
          {popularQuestions.map((q, index) => (
            <motion.a
              key={q.id}
              href={`#faq-${q.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group rounded-2xl border border-border bg-card p-5 hover:shadow-lg hover:border-brand-500/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500/10 text-sm font-semibold text-brand-500">
                  {q.id}
                </span>
                <Icons.arrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
              </div>
              <p className="font-medium text-sm line-clamp-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                {q.question}
              </p>
            </motion.a>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section background="muted" padding="default">
        <FAQContact
          title={faqData.contact.title}
          description={faqData.contact.description}
          options={faqData.contact.options}
          className="max-w-4xl mx-auto"
        />
      </Section>

      {/* Resources Section */}
      <Section background="default" padding="default">
        <MotionWrapper animation="fadeInUp" className="text-center mb-10">
          <h3 className="text-2xl font-bold">
            Helpful <span className="gradient-text">Resources</span>
          </h3>
          <p className="mt-2 text-muted-foreground">
            Explore our guides and tutorials to get the most out of RepurposeAI
          </p>
        </MotionWrapper>

        <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
          {[
            {
              icon: Icons.fileText,
              title: "Getting Started Guide",
              description: "Learn the basics and set up your first repurpose workflow",
              link: "/docs/getting-started",
            },
            {
              icon: Icons.video,
              title: "Video Tutorials",
              description: "Watch step-by-step tutorials for all features",
              link: "/tutorials",
            },
            {
              icon: Icons.palette,
              title: "Best Practices",
              description: "Tips and tricks for maximum content impact",
              link: "/docs/best-practices",
            },
          ].map((resource, index) => (
            <motion.a
              key={index}
              href={resource.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group rounded-2xl border border-border bg-card p-6 hover:shadow-lg hover:border-brand-500/30 transition-all duration-300"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 mb-4 group-hover:bg-brand-500/20 transition-colors">
                <resource.icon className="h-6 w-6 text-brand-500" />
              </div>
              <h4 className="font-semibold group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                {resource.title}
              </h4>
              <p className="mt-2 text-sm text-muted-foreground">
                {resource.description}
              </p>
              <div className="mt-4 flex items-center gap-1 text-sm font-medium text-brand-500">
                Learn more
                <Icons.arrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>
      </Section>
    </section>
  );
}

// Helper function for cn with conditional classes
function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}