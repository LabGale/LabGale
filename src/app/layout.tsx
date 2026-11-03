import type { Metadata } from "next";
import { SITE_CONFIG } from "@/config/site.config";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StructuredData } from "@/components/seo/StructuredData";
import "@/styles/globals.css";

function getMetadataBase(): URL {
  try {
    return new URL(SITE_CONFIG.url);
  } catch {
    return new URL("http://localhost:3000");
  }
}

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: `${SITE_CONFIG.productName} | ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.productName}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "gestionale galenico gratuito",
    "software laboratorio galenico",
    "fogli di lavorazione galenica",
    "materie prime farmacia",
    "registro sostanze galeniche",
    "software farmacia galenica windows mac linux",
    "norme buona preparazione NBP",
  ],
  authors: [{ name: SITE_CONFIG.productName }],
  creator: SITE_CONFIG.productName,
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: SITE_CONFIG.url,
    title: `${SITE_CONFIG.productName} — Gestionale Galenico Semplice e Gratuito`,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.productName,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.productName} — Gestionale Galenico`,
    description: SITE_CONFIG.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <head>
        <StructuredData type="software" />
      </head>
      <body className="min-h-screen flex flex-col bg-surface-page text-content-primary antialiased">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
