import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FEATURES, FeatureDetail } from "@/data/features.data";
import { SITE_CONFIG } from "@/config/site.config";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { StructuredData } from "@/components/seo/StructuredData";
import { DynamicIcon, Check, ChevronRight, Download, ArrowRight, FolderArchive, ShieldAlert } from "@/components/ui/Icons";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";

export function generateStaticParams() {
  return FEATURES.map((f) => ({
    slug: f.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const feature = FEATURES.find((f) => f.slug === params.slug);
  if (!feature) {
    return { title: "Funzionalità non trovata" };
  }
  return {
    title: `${feature.title} | ${SITE_CONFIG.productName}`,
    description: feature.shortDescription,
  };
}

export default function FeatureDetailPage({ params }: { params: { slug: string } }) {
  const feature = FEATURES.find((f) => f.slug === params.slug);

  if (!feature) {
    notFound();
  }

  const relatedFeatures = FEATURES.filter((f) =>
    feature.relatedSlugs.includes(f.slug)
  );

  const breadcrumbs = [
    { name: "Home", url: `${SITE_CONFIG.url}` },
    { name: "Funzionalità", url: `${SITE_CONFIG.url}/funzionalita` },
    { name: feature.title, url: `${SITE_CONFIG.url}/funzionalita/${feature.slug}` },
  ];

  return (
    <div className="py-12 md:py-16">
      <StructuredData type="breadcrumbs" breadcrumbs={breadcrumbs} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-body-sm text-content-muted">
          <Link href="/" className="hover:text-content-primary transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/funzionalita" className="hover:text-content-primary transition-colors">Funzionalità</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-content-primary font-medium">{feature.title}</span>
        </nav>

        {/* Feature Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-5">
            <div className="inline-flex items-center gap-2 text-brand-700 font-semibold text-body-sm bg-brand-50 border border-brand-200 px-3 py-1 rounded-full">
              <DynamicIcon name={feature.icon} className="w-4 h-4" />
              <span>Modulo Ufficiale del Software</span>
            </div>

            <h1 className="text-display md:text-[40px] font-extrabold text-content-primary tracking-tight leading-tight">
              {feature.title}
            </h1>

            <p className="text-body-lg text-content-secondary leading-relaxed">
              {feature.fullDescription}
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Button
                href={SITE_CONFIG.primaryCta.href}
                variant="primary"
                size="lg"
                leftIcon={<Download className="w-5 h-5" />}
              >
                {SITE_CONFIG.primaryCta.label}
              </Button>
              <Button
                href="/funzionalita"
                variant="outline"
                size="lg"
              >
                Tutti i moduli
              </Button>
            </div>
          </div>

          {/* Quick Summary Card */}
          <div className="lg:col-span-4">
            <Card padding="lg" className="bg-slate-50/80 border-border-strong space-y-4">
              <h3 className="font-bold text-heading-3 text-content-primary">
                In breve
              </h3>
              <ul className="space-y-3 text-body-sm text-content-secondary">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-brand-600 mt-0.5 shrink-0" />
                  <span>Incluso gratuitamente nella versione 1.0.0</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-brand-600 mt-0.5 shrink-0" />
                  <span>Nessun limite di record o preparazioni</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-brand-600 mt-0.5 shrink-0" />
                  <span>Dati salvati in locale sul tuo computer</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-brand-600 mt-0.5 shrink-0" />
                  <span>Conforme alle Norme di Buona Preparazione (NBP)</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Problema Risolto & Come Funziona */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
          <Card padding="lg" className="border-border-subtle bg-white space-y-4">
            <div className="inline-block p-2 rounded-md bg-amber-50 text-amber-800 border border-amber-200">
              <span className="font-semibold text-body-sm">Il problema risolto</span>
            </div>
            <h2 className="font-bold text-heading-2 text-content-primary">
              Cosa cambia rispetto ai metodi tradizionali
            </h2>
            <p className="text-body-md text-content-secondary leading-relaxed">
              {feature.problemSolved}
            </p>
          </Card>

          <Card padding="lg" className="border-border-subtle bg-white space-y-4">
            <div className="inline-block p-2 rounded-md bg-brand-50 text-brand-800 border border-brand-200">
              <span className="font-semibold text-body-sm">Come funziona</span>
            </div>
            <h2 className="font-bold text-heading-2 text-content-primary">
              Il flusso operativo all'interno dell'applicazione
            </h2>
            <ul className="space-y-2.5 text-body-sm text-content-secondary">
              {feature.howItWorks.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-brand-100 text-brand-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Vantaggi Operativi */}
        <div className="bg-white border border-border-subtle rounded-xl p-8 md:p-10 shadow-sm space-y-6">
          <h2 className="font-bold text-heading-2 text-content-primary">
            I vantaggi pratici per il farmacista
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {feature.benefits.map((benefit, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-slate-50 border border-border-subtle flex items-start gap-3">
                <Check className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                <p className="text-body-md text-content-primary font-medium leading-snug">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Moduli Correlati */}
        {relatedFeatures.length > 0 && (
          <div className="space-y-6 pt-4">
            <h2 className="font-bold text-heading-2 text-content-primary">
              Moduli collegati a {feature.shortTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedFeatures.map((rel) => (
                <Card key={rel.slug} padding="md" hoverable className="bg-white border-border-subtle flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="font-bold text-heading-3 text-content-primary">{rel.title}</h3>
                    <p className="text-body-sm text-content-secondary">{rel.shortDescription}</p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-border-subtle">
                    <Link
                      href={`/funzionalita/${rel.slug}`}
                      className="inline-flex items-center text-body-sm font-semibold text-brand-700 hover:text-brand-800"
                    >
                      <span>Vedi dettagli</span>
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

      </div>

      <div className="mt-16">
        <FinalCtaSection />
      </div>
    </div>
  );
}
