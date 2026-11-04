import React from "react";
import Link from "next/link";
import { FEATURE_HIGHLIGHTS } from "@/data/features.data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { DynamicIcon, ChevronRight } from "@/components/ui/Icons";

export function FeaturesGrid() {
  return (
    <section className="py-16 md:py-24 bg-surface-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Funzionalità"
          title="Strumenti per il laboratorio galenico"
          subtitle="Dalla gestione delle materie prime ai fogli di lavorazione, il gestionale raccoglie funzioni per organizzare le attività del laboratorio."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURE_HIGHLIGHTS.map((area) => (
            <Card
              key={area.title}
              as="article"
              hoverable
              padding="md"
              className="flex flex-col justify-between group bg-white"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-md bg-brand-50 border border-brand-200 text-brand-600 flex items-center justify-center transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <DynamicIcon name={area.icon} className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-heading-3 text-content-primary group-hover:text-brand-700 transition-colors">
                  {area.title}
                </h3>
                <p className="text-body-sm text-content-secondary leading-relaxed">
                  {area.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-border-subtle">
                <Link
                  href="/funzionalita"
                  aria-label={`Esplora tutte le funzionalità: ${area.categories.join(", ")}`}
                  className="inline-flex items-center text-body-sm font-semibold text-brand-700 hover:text-brand-800 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Tutte le funzionalità</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
