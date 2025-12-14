// src/config/navigation.ts
import { NavItem } from "@/types";

export const mainNavItems: NavItem[] = [
  {
    title: "Features",
    href: "#features",
  },
  {
    title: "How It Works",
    href: "#how-it-works",
  },
  {
    title: "Pricing",
    href: "#pricing",
  },
  {
    title: "Testimonials",
    href: "#testimonials",
  },
  {
    title: "FAQ",
    href: "#faq",
  },
];

export const footerNavItems = {
  product: [
    { title: "Features", href: "#features" },
    { title: "Pricing", href: "#pricing" },
    { title: "Integrations", href: "#integrations" },
    { title: "Changelog", href: "/changelog" },
    { title: "Roadmap", href: "/roadmap" },
  ],
  resources: [
    { title: "Blog", href: "/blog" },
    { title: "Documentation", href: "/docs" },
    { title: "API Reference", href: "/api" },
    { title: "Guides", href: "/guides" },
    { title: "Help Center", href: "/help" },
  ],
  company: [
    { title: "About", href: "/about" },
    { title: "Careers", href: "/careers" },
    { title: "Contact", href: "/contact" },
    { title: "Partners", href: "/partners" },
  ],
  legal: [
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms of Service", href: "/terms" },
    { title: "Cookie Policy", href: "/cookies" },
    { title: "GDPR", href: "/gdpr" },
  ],
};

export const socialLinks = [
  {
    name: "Twitter",
    href: "https://twitter.com/repurposeai",
    icon: "twitter",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/repurposeai",
    icon: "linkedin",
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@repurposeai",
    icon: "youtube",
  },
];