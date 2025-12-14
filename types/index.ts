// src/types/index.ts

export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
  badge?: string;
}

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating?: number;
}

export interface PricingPlan {
  name: string;
  description: string;
  price: {
    monthly: number;
    yearly: number;
  };
  features: string[];
  highlighted?: boolean;
  badge?: string;
  cta: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Platform {
  name: string;
  icon: React.ReactNode;
  description: string;
  formats: string[];
}

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

export interface IntegrationLogo {
  name: string;
  logo: string | React.ReactNode;
}