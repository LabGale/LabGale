import React from "react";
import { SITE_CONFIG } from "@/config/site.config";
import { FaqItem } from "@/data/faq.data";

export interface StructuredDataProps {
  type?: "software" | "faq" | "breadcrumbs";
  faqItems?: FaqItem[];
  breadcrumbs?: { name: string; url: string }[];
}

export function StructuredData({ type = "software", faqItems, breadcrumbs }: StructuredDataProps) {
  let schemaData: object = {};

  if (type === "software") {
    schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "SoftwareApplication",
          "name": SITE_CONFIG.productName,
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Windows, macOS, Linux",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "EUR",
            "description": "Software gestionale gratuito per il laboratorio galenico di farmacia."
          },
          "description": SITE_CONFIG.description,
          "url": SITE_CONFIG.url,
          "publisher": {
            "@type": "Organization",
            "name": SITE_CONFIG.company.legalName || SITE_CONFIG.productName,
            "url": SITE_CONFIG.url,
            "contactPoint": {
              "@type": "ContactPoint",
              "email": SITE_CONFIG.contact.email,
              "contactType": "Customer Support"
            }
          }
        },
        {
          "@type": "WebSite",
          "name": `${SITE_CONFIG.productName} - Gestionale Galenico`,
          "url": SITE_CONFIG.url,
          "description": SITE_CONFIG.tagline
        }
      ]
    };
  } else if (type === "faq" && faqItems && faqItems.length > 0) {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqItems.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    };
  } else if (type === "breadcrumbs" && breadcrumbs && breadcrumbs.length > 0) {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((crumb, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "name": crumb.name,
        "item": crumb.url
      }))
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
