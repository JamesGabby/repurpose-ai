"use client";

// src/components/layout/footer.tsx
import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { footerNavItems, socialLinks } from "@/config/navigation";
import { Logo } from "@/components/ui/logo";
import { Icons } from "@/components/ui/icons";
import { CustomButton } from "@/components/ui/custom-button";
import { MotionWrapper, MotionContainer, MotionItem } from "@/components/ui/motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const iconMap: Record<string, React.ReactNode> = {
    twitter: <Icons.twitter className="h-5 w-5" />,
    linkedin: <Icons.linkedin className="h-5 w-5" />,
    youtube: <Icons.youtube className="h-5 w-5" />,
  };

  return (
    <footer className="relative border-t bg-muted/30">
      {/* Newsletter Section */}
      <div className="border-b">
        <div className="container-wide py-12 md:py-16">
          <MotionWrapper animation="fadeInUp">
            <div className="mx-auto max-w-2xl text-center">
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Stay updated with{" "}
                <span className="gradient-text">RepurposeAI</span>
              </h3>
              <p className="mt-3 text-muted-foreground">
                Get the latest tips on content repurposing, AI updates, and exclusive offers.
              </p>
              <form className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={cn(
                    "h-12 w-full max-w-sm rounded-xl border bg-background px-4",
                    "placeholder:text-muted-foreground",
                    "focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent",
                    "transition-all duration-200"
                  )}
                  required
                />
                <CustomButton
                  type="submit"
                  variant="gradient"
                  size="lg"
                  rightIcon={<Icons.arrowRight className="h-4 w-4" />}
                >
                  Subscribe
                </CustomButton>
              </form>
              <p className="mt-3 text-xs text-muted-foreground">
                No spam, unsubscribe at any time. Read our{" "}
                <Link href="/privacy" className="underline hover:text-foreground">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </MotionWrapper>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-wide py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <MotionWrapper animation="fadeInUp">
              <Logo className="mb-4" />
              <p className="text-muted-foreground max-w-xs">
                Transform your content into dozens of platform-optimized pieces with the power of AI.
              </p>
              {/* Social Links */}
              <div className="mt-6 flex items-center gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-full",
                      "bg-muted text-muted-foreground",
                      "hover:bg-brand-100 hover:text-brand-600",
                      "dark:hover:bg-brand-900 dark:hover:text-brand-400",
                      "transition-colors duration-200"
                    )}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {iconMap[social.icon]}
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </MotionWrapper>
          </div>

          {/* Navigation Columns */}
          <MotionContainer className="lg:col-span-4 grid grid-cols-2 gap-8 sm:grid-cols-4">
            <MotionItem>
              <FooterColumn title="Product" links={footerNavItems.product} />
            </MotionItem>
            <MotionItem>
              <FooterColumn title="Resources" links={footerNavItems.resources} />
            </MotionItem>
            <MotionItem>
              <FooterColumn title="Company" links={footerNavItems.company} />
            </MotionItem>
            <MotionItem>
              <FooterColumn title="Legal" links={footerNavItems.legal} />
            </MotionItem>
          </MotionContainer>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t">
        <div className="container-wide py-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © {currentYear} RepurposeAI. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                All systems operational
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 right-0 h-80 w-80 rounded-full bg-brand-500/5 blur-3xl" />
        <div className="absolute -bottom-40 left-0 h-80 w-80 rounded-full bg-purple-500/5 blur-3xl" />
      </div>
    </footer>
  );
}

interface FooterColumnProps {
  title: string;
  links: Array<{ title: string; href: string }>;
}

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-foreground">{title}</h4>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}