// src/config/features.ts

export const featuresData = {
  badge: "Powerful Features",
  headline: {
    main: "Everything You Need to",
    highlight: "Scale Your Content",
  },
  description:
    "RepurposeAI combines cutting-edge AI with intuitive design to help you create more content in less time. Here's what makes us different.",
  features: [
    {
      id: "multi-platform",
      icon: "globe",
      title: "Multi-Platform Output",
      description:
        "Transform one piece of content into perfectly formatted posts for Twitter, LinkedIn, Instagram, TikTok, YouTube, newsletters, and more.",
      benefits: [
        "10+ platforms supported",
        "Platform-specific optimization",
        "Automatic formatting",
      ],
      color: "blue",
    },
    {
      id: "brand-voice",
      icon: "palette",
      title: "Brand Voice AI",
      description:
        "Train our AI on your existing content to match your unique tone, style, and personality across all generated content.",
      benefits: [
        "Custom voice training",
        "Tone consistency",
        "Style guidelines",
      ],
      color: "purple",
    },
    {
      id: "smart-scheduling",
      icon: "calendar",
      title: "Smart Scheduling",
      description:
        "Automatically schedule your repurposed content at optimal times for maximum engagement on each platform.",
      benefits: [
        "AI-powered timing",
        "Queue management",
        "Cross-platform sync",
      ],
      color: "green",
    },
    {
      id: "analytics",
      icon: "chart",
      title: "Performance Analytics",
      description:
        "Track which content formats and platforms drive the most engagement. Let data guide your content strategy.",
      benefits: [
        "Engagement metrics",
        "Platform comparison",
        "Content insights",
      ],
      color: "orange",
    },
    {
      id: "ai-powered",
      icon: "sparkles",
      title: "Advanced AI Models",
      description:
        "Powered by GPT-4o and Claude 3.5 for superior content quality. Choose the best model for your needs.",
      benefits: [
        "Multiple AI models",
        "Context awareness",
        "Natural language",
      ],
      color: "pink",
    },
    {
      id: "collaboration",
      icon: "users",
      title: "Team Collaboration",
      description:
        "Work together seamlessly with your team. Share templates, review content, and manage approvals in one place.",
      benefits: [
        "Team workspaces",
        "Approval workflows",
        "Shared templates",
      ],
      color: "teal",
    },
  ],
  highlight: {
    title: "Save 10+ Hours Every Week",
    description:
      "Our users report saving an average of 10 hours per week on content creation. That's time you can spend on strategy, engagement, and growing your business.",
    stats: [
      { value: "10+", label: "Hours Saved Weekly" },
      { value: "15x", label: "More Content Output" },
      { value: "3x", label: "Faster Publishing" },
    ],
  },
};

export const featureColors: Record<string, { bg: string; text: string; border: string; gradient: string }> = {
  blue: {
    bg: "bg-blue-500/10",
    text: "text-blue-500",
    border: "border-blue-500/20",
    gradient: "from-blue-500 to-cyan-500",
  },
  purple: {
    bg: "bg-purple-500/10",
    text: "text-purple-500",
    border: "border-purple-500/20",
    gradient: "from-purple-500 to-pink-500",
  },
  green: {
    bg: "bg-green-500/10",
    text: "text-green-500",
    border: "border-green-500/20",
    gradient: "from-green-500 to-emerald-500",
  },
  orange: {
    bg: "bg-orange-500/10",
    text: "text-orange-500",
    border: "border-orange-500/20",
    gradient: "from-orange-500 to-amber-500",
  },
  pink: {
    bg: "bg-pink-500/10",
    text: "text-pink-500",
    border: "border-pink-500/20",
    gradient: "from-pink-500 to-rose-500",
  },
  teal: {
    bg: "bg-teal-500/10",
    text: "text-teal-500",
    border: "border-teal-500/20",
    gradient: "from-teal-500 to-cyan-500",
  },
};