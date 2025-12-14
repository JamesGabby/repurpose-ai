// src/config/faq.ts

export const faqData = {
  badge: "FAQ",
  headline: {
    main: "Frequently Asked",
    highlight: "Questions",
  },
  description:
    "Everything you need to know about RepurposeAI. Can't find the answer you're looking for? Reach out to our support team.",
  categories: [
    { id: "all", label: "All Questions" },
    { id: "general", label: "General" },
    { id: "features", label: "Features" },
    { id: "pricing", label: "Pricing" },
    { id: "technical", label: "Technical" },
    { id: "support", label: "Support" },
  ],
  questions: [
    {
      id: 1,
      category: "general",
      question: "What is RepurposeAI?",
      answer:
        "RepurposeAI is an AI-powered content repurposing platform that transforms your long-form content (blog posts, videos, podcasts) into platform-optimized content for social media. Our AI understands context, maintains your brand voice, and creates engaging content tailored for each platform like Twitter, LinkedIn, Instagram, TikTok, and more.",
    },
    {
      id: 2,
      category: "general",
      question: "How does RepurposeAI work?",
      answer:
        "Simply paste your content or upload a file, select your target platforms, and let our AI do the rest. Our system analyzes your content, identifies key points, and generates platform-specific content that follows best practices for each network. You can review, edit, and publish directly or schedule for later.",
    },
    {
      id: 3,
      category: "general",
      question: "What types of content can I repurpose?",
      answer:
        "You can repurpose virtually any text-based content including blog posts, articles, video transcripts, podcast transcripts, newsletters, whitepapers, case studies, and more. We also support URL imports for published content and file uploads for documents.",
    },
    {
      id: 4,
      category: "features",
      question: "Which platforms are supported?",
      answer:
        "We currently support Twitter/X (threads and single tweets), LinkedIn (posts and articles), Instagram (captions and carousel scripts), TikTok (video scripts), YouTube (Shorts scripts and descriptions), Facebook, Threads, email newsletters, and blog post summaries. We're constantly adding new platforms based on user feedback.",
    },
    {
      id: 5,
      category: "features",
      question: "What is Brand Voice training?",
      answer:
        "Brand Voice training is our proprietary feature that analyzes your existing content to understand your unique writing style, tone, vocabulary, and personality. Once trained, all generated content matches your brand voice perfectly, ensuring consistency across all platforms and content pieces.",
    },
    {
      id: 6,
      category: "features",
      question: "Can I edit the generated content?",
      answer:
        "Absolutely! While our AI produces high-quality content, you have full control to edit, refine, and customize any generated content before publishing. We provide an intuitive editor with platform-specific previews so you can see exactly how your content will look.",
    },
    {
      id: 7,
      category: "features",
      question: "Does RepurposeAI support multiple languages?",
      answer:
        "Yes! RepurposeAI supports content generation in over 30 languages including English, Spanish, French, German, Portuguese, Italian, Dutch, Japanese, Chinese, Korean, and many more. You can even repurpose content from one language to another.",
    },
    {
      id: 8,
      category: "pricing",
      question: "Is there a free trial?",
      answer:
        "Yes! We offer a 14-day free trial on all paid plans with full access to all features. No credit card is required to start your trial. You can upgrade, downgrade, or cancel at any time.",
    },
    {
      id: 9,
      category: "pricing",
      question: "What counts as a 'repurpose'?",
      answer:
        "A repurpose is counted when you transform one piece of source content into outputs for your selected platforms. For example, if you paste a blog post and generate content for Twitter, LinkedIn, and Instagram, that counts as one repurpose regardless of how many platforms you select.",
    },
    {
      id: 10,
      category: "pricing",
      question: "Can I change my plan later?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. When you upgrade, you'll get immediate access to additional features and the price difference will be prorated. When you downgrade, the change takes effect at the start of your next billing cycle.",
    },
    {
      id: 11,
      category: "pricing",
      question: "Do you offer refunds?",
      answer:
        "Yes, we offer a 30-day money-back guarantee. If you're not completely satisfied with RepurposeAI within the first 30 days of your paid subscription, contact us for a full refund. No questions asked.",
    },
    {
      id: 12,
      category: "technical",
      question: "Which AI models power RepurposeAI?",
      answer:
        "We use a combination of leading AI models including OpenAI's GPT-4o and Anthropic's Claude 3.5 Sonnet. Pro users get access to GPT-4o, while Business and Enterprise users can choose between multiple models based on their needs. We continuously update our models to ensure the best output quality.",
    },
    {
      id: 13,
      category: "technical",
      question: "Is my content secure?",
      answer:
        "Absolutely. We take security seriously. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We never use your content to train our AI models. You retain full ownership of all your content. We're SOC 2 Type II compliant and GDPR compliant.",
    },
    {
      id: 14,
      category: "technical",
      question: "Do you offer an API?",
      answer:
        "Yes, our Business and Enterprise plans include full API access. You can integrate RepurposeAI directly into your existing workflows, CMS, or custom applications. We provide comprehensive documentation, SDKs for popular languages, and dedicated technical support.",
    },
    {
      id: 15,
      category: "technical",
      question: "What integrations do you support?",
      answer:
        "We integrate with popular tools including Notion, WordPress, HubSpot, Zapier, Make (Integromat), Buffer, Hootsuite, and more. Our Zapier integration alone connects you to 5,000+ apps. Enterprise customers can request custom integrations.",
    },
    {
      id: 16,
      category: "support",
      question: "How can I get help?",
      answer:
        "We offer multiple support channels: comprehensive documentation and guides, email support (response within 24 hours for all users, 4 hours for Pro, 1 hour for Business), live chat during business hours, and dedicated account managers for Enterprise customers. We also have an active community Discord.",
    },
    {
      id: 17,
      category: "support",
      question: "Do you offer onboarding assistance?",
      answer:
        "Yes! All paid plans include access to our self-serve onboarding resources including video tutorials, templates, and best practices guides. Business and Enterprise customers get personalized onboarding sessions with our customer success team.",
    },
    {
      id: 18,
      category: "support",
      question: "Can I request new features?",
      answer:
        "Absolutely! We love hearing from our users. You can submit feature requests through our feedback portal, and we regularly implement suggestions from our community. Business and Enterprise customers get priority consideration for feature requests.",
    },
  ],
  contact: {
    title: "Still have questions?",
    description:
      "Can't find the answer you're looking for? Our friendly support team is here to help.",
    options: [
      {
        icon: "mail",
        title: "Email Support",
        description: "Get a response within 24 hours",
        action: "support@repurposeai.com",
        actionLabel: "Send Email",
      },
      {
        icon: "calendar",
        title: "Book a Demo",
        description: "Get a personalized walkthrough",
        action: "/demo",
        actionLabel: "Schedule Call",
      },
    ],
  },
};

export type FAQQuestion = (typeof faqData.questions)[0];
export type FAQCategory = (typeof faqData.categories)[0];