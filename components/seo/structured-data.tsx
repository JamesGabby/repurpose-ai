// src/components/seo/structured-data.tsx

interface StructuredDataProps {
  type: "WebSite" | "SoftwareApplication" | "Organization" | "FAQPage";
  data: Record<string, unknown>;
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

// Pre-built structured data for the landing page
export function WebsiteStructuredData() {
  return (
    <StructuredData
      type="WebSite"
      data={{
        name: "RepurposeAI",
        url: "https://repurposeai.com",
        description:
          "AI-powered content repurposing tool that transforms your blog posts, videos, and podcasts into platform-optimized content.",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://repurposeai.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      }}
    />
  );
}

export function SoftwareApplicationStructuredData() {
  return (
    <StructuredData
      type="SoftwareApplication"
      data={{
        name: "RepurposeAI",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          description: "Free trial available",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          ratingCount: "2000",
          bestRating: "5",
          worstRating: "1",
        },
      }}
    />
  );
}

export function OrganizationStructuredData() {
  return (
    <StructuredData
      type="Organization"
      data={{
        name: "RepurposeAI",
        url: "https://repurposeai.com",
        logo: "https://repurposeai.com/logo.png",
        sameAs: [
          "https://twitter.com/repurposeai",
          "https://linkedin.com/company/repurposeai",
          "https://youtube.com/@repurposeai",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          email: "support@repurposeai.com",
          contactType: "Customer Support",
        },
      }}
    />
  );
}