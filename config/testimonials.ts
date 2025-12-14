// src/config/testimonials.ts

export const testimonialsData = {
  badge: "Loved by Creators",
  headline: {
    main: "Trusted by",
    highlight: "50,000+ Creators",
  },
  description:
    "Join thousands of content creators, marketers, and businesses who are scaling their content with RepurposeAI.",
  featured: {
    quote:
      "RepurposeAI has completely transformed how we approach content. What used to take our team an entire day now happens in minutes. We've increased our content output by 10x while maintaining quality and brand consistency. It's not just a tool—it's like having an extra team member.",
    author: "Sarah Chen",
    role: "Head of Content",
    company: "TechFlow",
    avatar: "/avatars/sarah.jpg",
    logo: "techflow",
    metrics: [
      { value: "10x", label: "Content Output" },
      { value: "15hrs", label: "Saved Weekly" },
      { value: "300%", label: "Engagement Up" },
    ],
  },
  testimonials: [
    {
      id: 1,
      quote:
        "I went from posting once a week to every day across 5 platforms. My audience has grown 3x in just 2 months.",
      author: "Marcus Johnson",
      role: "Creator & Coach",
      company: "Growth Mindset",
      avatar: "/avatars/marcus.jpg",
      rating: 5,
      platform: "twitter",
    },
    {
      id: 2,
      quote:
        "The brand voice feature is incredible. Every piece of content sounds exactly like me, even though AI wrote it.",
      author: "Emily Rodriguez",
      role: "Founder",
      company: "Wellness Daily",
      avatar: "/avatars/emily.jpg",
      rating: 5,
      platform: "linkedin",
    },
    {
      id: 3,
      quote:
        "We manage content for 12 clients. RepurposeAI cut our production time by 80%. Game changer for agencies.",
      author: "David Park",
      role: "Agency Owner",
      company: "ContentScale",
      avatar: "/avatars/david.jpg",
      rating: 5,
      platform: "instagram",
    },
    {
      id: 4,
      quote:
        "Finally, a tool that understands LinkedIn's professional tone. My posts are getting 5x more engagement now.",
      author: "Jennifer Smith",
      role: "B2B Marketing Lead",
      company: "SalesForce Pro",
      avatar: "/avatars/jennifer.jpg",
      rating: 5,
      platform: "linkedin",
    },
    {
      id: 5,
      quote:
        "I was skeptical about AI content, but the quality blew me away. It captures nuances I didn't think possible.",
      author: "Alex Thompson",
      role: "Newsletter Writer",
      company: "The Weekly Insight",
      avatar: "/avatars/alex.jpg",
      rating: 5,
      platform: "twitter",
    },
    {
      id: 6,
      quote:
        "The ROI is insane. $29/month to save 10+ hours of work? Best investment I've made for my business.",
      author: "Rachel Kim",
      role: "Solo Entrepreneur",
      company: "Digital Nomad Life",
      avatar: "/avatars/rachel.jpg",
      rating: 5,
      platform: "instagram",
    },
    {
      id: 7,
      quote:
        "From podcast to Twitter threads to LinkedIn posts in one click. This is the future of content creation.",
      author: "Michael Chen",
      role: "Podcast Host",
      company: "StartupTalk",
      avatar: "/avatars/michael.jpg",
      rating: 5,
      platform: "twitter",
    },
    {
      id: 8,
      quote:
        "Our team collaboration features make reviewing and approving content so seamless. Worth every penny.",
      author: "Lisa Wang",
      role: "Marketing Director",
      company: "InnovateTech",
      avatar: "/avatars/lisa.jpg",
      rating: 5,
      platform: "linkedin",
    },
  ],
  stats: [
    { value: "50K+", label: "Active Users" },
    { value: "2M+", label: "Content Pieces Created" },
    { value: "4.9", label: "Average Rating", suffix: "/5" },
    { value: "10hrs", label: "Avg. Time Saved/Week" },
  ],
  logos: [
    "vercel",
    "stripe",
    "notion",
    "linear",
    "framer",
    "webflow",
    "hubspot",
    "zapier",
  ],
};

export type Testimonial = (typeof testimonialsData.testimonials)[0];