import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { FAQ_ITEMS } from "@/data/faq.data";
import { SITE_CONFIG } from "@/config/site.config";
import { Card } from "@/components/ui/Card";
import { StructuredData } from "@/components/seo/StructuredData";
import { ChevronRight, HelpCircle, ArrowRight } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Domande Frequenti (FAQ) sul Gestionale Galenico",
  description: "Risposte a tutte le domande su costi, licenza, funzionamento in locale, requisiti tecnici e conformità alle Norme di Buona Preparazione.",
};

export default function FaqPage() {
  const breadcrumbs = [
    { name: "Home", url: `${SITE_CONFIG.url}` },
    { name: "Assistenza", url: `${SITE_CONFIG.url}/assistenza` },
    { name: "FAQ", url: `${SITE_CONFIG.url}/assistenza/faq` },
  ];

  return (
    <div className="py-12 md:py-16">
      <StructuredData type="faq" faqItems={FAQ_ITEMS} />
      <StructuredData type="breadcrumbs" breadcrumbs={breadcrumbs} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-body-sm text-content-muted">
          <Link href="/" className="hover:text-content-primary transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/assistenza" className="hover:text-content-primary transition-colors">Assistenza</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-content-primary font-medium">FAQ</span>
        </nav>

        {/* Header */}
        <div className="text-center space-y-4">
          <span className="inline-block px-3 py-1 text-body-sm font-semibold text-brand-700 bg-brand-50 border border-brand-200 rounded-full uppercase tracking-wider">
            Domande e Risposte
          </span>
          <h1 className="text-display md:text-[40px] font-extrabold text-content-primary tracking-tight">
            Domande Frequenti
          </h1>
          <p className="text-body-lg text-content-secondary leading-relaxed">
            Tutto ciò che desideri sapere su {SITE_CONFIG.productName}: costi, licenze, funzionamento su computer locale e adempimenti normativi.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {FAQ_ITEMS.map((item, index) => (
            <Card key={index} padding="lg" className="bg-white border-border-subtle space-y-3">
              <h2 className="font-bold text-heading-3 text-content-primary flex items-start gap-2.5">
                <HelpCircle className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                <span>{item.question}</span>
              </h2>
              <p className="text-body-md text-content-secondary leading-relaxed pl-7">
                {item.answer}
              </p>
            </Card>
          ))}
        </div>

        {/* Contact fallback */}
        <div className="bg-slate-50 border border-border-subtle rounded-xl p-8 text-center space-y-4">
          <h3 className="font-bold text-heading-3 text-content-primary">
            Hai una domanda specifica sul tuo laboratorio?
          </h3>
          <p className="text-body-md text-content-secondary max-w-xl mx-auto">
            Siamo a disposizione per rispondere a qualsiasi dubbio operativo o normativo.
          </p>
          <Button href="/contatti" variant="primary" size="md">
            Scrivi al supporto
          </Button>
        </div>

      </div>
    </div>
  );
}
