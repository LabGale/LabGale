import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { FEATURES_BY_CATEGORY } from "@/data/features.data";
import { SITE_CONFIG } from "@/config/site.config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { DynamicIcon, ChevronRight } from "@/components/ui/Icons";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";

export const metadata: Metadata = {
  title: "Tutte le Funzionalità del Gestionale Galenico",
  description: "Scopri le funzioni del gestionale galenico per materie prime, registrazioni, fogli di lavorazione, preventivi, documenti e strumenti di supporto.",
};

export default function FeaturesIndexPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3 py-1 text-body-sm font-semibold text-brand-700 bg-brand-50 border border-brand-200 rounded-full uppercase tracking-wider">
            Moduli del Software
          </span>
          <h1 className="text-display md:text-[40px] font-extrabold text-content-primary tracking-tight">
            Tutte le funzionalità per il tuo laboratorio
          </h1>
          <p className="text-body-lg text-content-secondary leading-relaxed">
            Un insieme di strumenti per gestire le attività del laboratorio, dalle materie prime alla documentazione delle preparazioni.
          </p>
        </div>

        {/* Features List */}
        <div className="space-y-12">
          {FEATURES_BY_CATEGORY.map(({ category, features }, categoryIndex) => (
            <section key={category} aria-labelledby={`feature-category-${categoryIndex}`}>
              <h2
                id={`feature-category-${categoryIndex}`}
                className="font-bold text-heading-2 text-content-primary mb-6"
              >
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature) => (
                  <Card
                    key={feature.slug}
                    as="article"
                    hoverable
                    padding="lg"
                    className="flex flex-col justify-between bg-white border-border-subtle"
                  >
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-lg bg-brand-50 border border-brand-200 text-brand-600 flex items-center justify-center">
                        <DynamicIcon name={feature.icon} className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-heading-2 text-content-primary">
                        {feature.title}
                      </h3>
                      <p className="text-body-md text-content-secondary leading-relaxed">
                        {feature.shortDescription}
                      </p>
                      <ul className="space-y-1.5 text-body-sm text-content-secondary">
                        {feature.howItWorks.slice(0, 2).map((capability) => (
                          <li key={capability} className="flex items-start gap-2">
                            <span className="text-brand-600" aria-hidden="true">•</span>
                            <span>{capability}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 mt-6 border-t border-border-subtle flex items-center justify-between">
                      <Link
                        href={`/funzionalita/${feature.slug}`}
                        className="inline-flex items-center text-body-md font-semibold text-brand-700 hover:text-brand-800"
                      >
                        <span>Dettaglio funzionalità</span>
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>

      </div>

      <div className="mt-16">
        <FinalCtaSection />
      </div>
    </div>
  );
}
