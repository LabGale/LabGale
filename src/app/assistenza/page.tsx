import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site.config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { FileText, PlayCircle, HelpCircle, ChevronRight, Download } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Centro Assistenza e Guide",
  description: "Guide all'installazione, video tutorial e risposte alle domande frequenti per l'utilizzo del gestionale galenico.",
};

export default function SupportHubPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3 py-1 text-body-sm font-semibold text-brand-700 bg-brand-50 border border-brand-200 rounded-full uppercase tracking-wider">
            Knowledge Base
          </span>
          <h1 className="text-display md:text-[40px] font-extrabold text-content-primary tracking-tight">
            Centro Assistenza {SITE_CONFIG.productName}
          </h1>
          <p className="text-body-lg text-content-secondary leading-relaxed">
            Trova guide passo-passo, video tutorial operativi e risposte puntuali a tutte le domande relative all'installazione e all'uso del software.
          </p>
        </div>

        {/* 3 Main Channels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Guide */}
          <Card padding="lg" hoverable className="bg-white border-border-subtle flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-brand-50 border border-brand-200 text-brand-600 flex items-center justify-center">
                <FileText className="w-6 h-6" />
              </div>
              <h2 className="font-bold text-heading-2 text-content-primary">
                Guide all'Installazione e Uso
              </h2>
              <p className="text-body-md text-content-secondary leading-relaxed">
                Istruzioni dettagliate per installare il software su Windows, macOS e Linux e gestire i primi carichi di sostanze.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-border-subtle">
              <Link
                href="/assistenza/guide"
                className="inline-flex items-center text-body-md font-semibold text-brand-700 hover:text-brand-800"
              >
                <span>Esplora le guide</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </Card>

          {/* Video */}
          <Card padding="lg" hoverable className="bg-white border-border-subtle flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-brand-50 border border-brand-200 text-brand-600 flex items-center justify-center">
                <PlayCircle className="w-6 h-6" />
              </div>
              <h2 className="font-bold text-heading-2 text-content-primary">
                Video Tutorial
              </h2>
              <p className="text-body-md text-content-secondary leading-relaxed">
                Brevi dimostrazioni visive per imparare a compilare un foglio di lavorazione o archiviare un certificato in pochi secondi.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-border-subtle">
              <Link
                href="/assistenza/video"
                className="inline-flex items-center text-body-md font-semibold text-brand-700 hover:text-brand-800"
              >
                <span>Guarda i video</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </Card>

          {/* FAQ */}
          <Card padding="lg" hoverable className="bg-white border-border-subtle flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-brand-50 border border-brand-200 text-brand-600 flex items-center justify-center">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h2 className="font-bold text-heading-2 text-content-primary">
                Domande Frequenti (FAQ)
              </h2>
              <p className="text-body-md text-content-secondary leading-relaxed">
                Risposte rapide su gratuità, requisiti di sistema, sicurezza dei dati in locale e conformità alla Farmacopea Ufficiale.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-border-subtle">
              <Link
                href="/assistenza/faq"
                className="inline-flex items-center text-body-md font-semibold text-brand-700 hover:text-brand-800"
              >
                <span>Leggi le FAQ</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </Card>

        </div>

        {/* Direct Contact Banner */}
        <div className="bg-slate-50 border border-border-subtle rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-bold text-heading-3 text-content-primary">
              Non trovi quello che cerchi?
            </h3>
            <p className="text-body-md text-content-secondary mt-1">
              Il nostro team è a disposizione per raccogliere feedback o aiutarti nella configurazione.
            </p>
          </div>
          <Button href="/contatti" variant="secondary" size="md">
            Contatta il supporto
          </Button>
        </div>

      </div>
    </div>
  );
}
