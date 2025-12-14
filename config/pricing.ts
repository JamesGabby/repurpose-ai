// src/config/pricing.ts

export const pricingData = {
  badge: "Simple Pricing",
  headline: {
    main: "Choose the Perfect Plan for",
    highlight: "Your Needs",
  },
  description:
    "Start free, upgrade when you're ready. All plans include a 14-day free trial with no credit card required.",
  billingToggle: {
    monthly: "Monthly",
    yearly: "Yearly",
    yearlySavings: "Save 20%",
  },
  plans: [
    {
      id: "starter",
      name: "Starter",
      description: "Perfect for individual creators just getting started.",
      price: {
        monthly: 0,
        yearly: 0,
      },
      features: [
        { text: "5 repurposes per month", included: true },
        { text: "3 platforms supported", included: true },
        { text: "Basic AI model", included: true },
        { text: "Email support", included: true },
        { text: "Brand voice training", included: false },
        { text: "Team collaboration", included: false },
        { text: "API access", included: false },
        { text: "Priority support", included: false },
      ],
      cta: "Get Started Free",
      popular: false,
      gradient: "from-gray-500 to-gray-600",
    },
    {
      id: "pro",
      name: "Pro",
      description: "For serious creators who want to scale their content.",
      price: {
        monthly: 29,
        yearly: 23,
      },
      features: [
        { text: "50 repurposes per month", included: true },
        { text: "All platforms supported", included: true },
        { text: "Advanced AI models (GPT-4o)", included: true },
        { text: "Priority email support", included: true },
        { text: "Brand voice training", included: true },
        { text: "Content calendar", included: true },
        { text: "Team collaboration", included: false },
        { text: "API access", included: false },
      ],
      cta: "Start Free Trial",
      popular: true,
      gradient: "from-brand-500 to-purple-500",
    },
    {
      id: "business",
      name: "Business",
      description: "For teams and agencies managing multiple brands.",
      price: {
        monthly: 79,
        yearly: 63,
      },
      features: [
        { text: "Unlimited repurposes", included: true },
        { text: "All platforms supported", included: true },
        { text: "All AI models (GPT-4o & Claude)", included: true },
        { text: "24/7 priority support", included: true },
        { text: "Brand voice training", included: true },
        { text: "Content calendar", included: true },
        { text: "Team collaboration (5 seats)", included: true },
        { text: "API access", included: true },
      ],
      cta: "Start Free Trial",
      popular: false,
      gradient: "from-purple-500 to-pink-500",
    },
  ],
  enterprise: {
    title: "Enterprise",
    description:
      "Need more? Get custom limits, dedicated support, SSO, and more.",
    features: [
      "Unlimited everything",
      "Custom AI model training",
      "Dedicated account manager",
      "SSO & advanced security",
      "Custom integrations",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
  },
  guarantee: {
    title: "30-Day Money-Back Guarantee",
    description:
      "Try RepurposeAI risk-free. If you're not completely satisfied within 30 days, we'll refund your payment. No questions asked.",
  },
  faq: {
    title: "Pricing FAQ",
    questions: [
      {
        question: "What counts as a repurpose?",
        answer:
          "A repurpose is when you transform one piece of content into outputs for your selected platforms. For example, turning a blog post into a Twitter thread, LinkedIn post, and Instagram carousel counts as one repurpose.",
      },
      {
        question: "Can I change plans later?",
        answer:
          "Yes! You can upgrade or downgrade your plan at any time. If you upgrade, you'll be prorated for the remainder of your billing cycle. If you downgrade, the change will take effect at the start of your next billing cycle.",
      },
      {
        question: "What happens when I hit my limit?",
        answer:
          "You'll receive a notification when you're approaching your limit. Once reached, you can upgrade your plan or wait until your next billing cycle. We'll never charge you automatically for overages.",
      },
      {
        question: "Do you offer refunds?",
        answer:
          "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with RepurposeAI for any reason, contact us within 30 days of your purchase for a full refund.",
      },
    ],
  },
};

export type PricingPlan = (typeof pricingData.plans)[0];