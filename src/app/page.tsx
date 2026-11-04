import React from "react";
import Link from "next/link";
import { HeroSection } from "@/components/sections/HeroSection";
import { PainPointsSection } from "@/components/sections/PainPointsSection";
import { FeaturesGrid } from "@/components/sections/FeaturesGrid";
import { WhyFreeTeaser } from "@/components/sections/WhyFreeTeaser";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FolderArchive, HardDrive, Monitor, Download, Check } from "@/components/ui/Icons";

export default function HomePage() {
  return (
    <div>
      {/* 1. Hero Section con Headline, CTA e Mockup */}
      <HeroSection />

      {/* 2. Sezione Problema / Soluzione */}
      <PainPointsSection />

      {/* 3. Sezione Approfondimento: Database e release */}
      <section className="py-16 md:py-24 bg-white border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Configurazione"
            title="Gestionale desktop con database configurabile"
            subtitle="Il gestionale utilizza MongoDB, configurabile in locale oppure su un server remoto, in base alle esigenze organizzative della farmacia."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <Card padding="lg" className="border-border-subtle bg-slate-50/50 space-y-3">
              <div className="w-10 h-10 rounded-md bg-brand-50 border border-brand-200 text-brand-600 flex items-center justify-center">
                <HardDrive className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-heading-3 text-content-primary">
                Database locale o remoto
              </h3>
              <p className="text-body-md text-content-secondary leading-relaxed">
                Il gestionale può collegarsi a un database MongoDB locale o a un'istanza remota compatibile. La disponibilità dipende dalla configurazione e dall'infrastruttura utilizzata.
              </p>
            </Card>

            <Card padding="lg" className="border-border-subtle bg-slate-50/50 space-y-3">
              <div className="w-10 h-10 rounded-md bg-brand-50 border border-brand-200 text-brand-600 flex items-center justify-center">
                <Monitor className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-heading-3 text-content-primary">
                Versioni e sistemi supportati
              </h3>
              <p className="text-body-md text-content-secondary leading-relaxed">
                Consulta la pagina download per conoscere le versioni disponibili e i sistemi operativi supportati.
              </p>
              <Link href="/scarica" className="inline-flex items-center text-body-sm font-semibold text-brand-700 hover:text-brand-800">
                Verifica le release
              </Link>
            </Card>

            <Card padding="lg" className="border-border-subtle bg-slate-50/50 space-y-3">
              <div className="w-10 h-10 rounded-md bg-brand-50 border border-brand-200 text-brand-600 flex items-center justify-center">
                <Download className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-heading-3 text-content-primary">
                Collegamenti a servizi esterni
              </h3>
              <p className="text-body-md text-content-secondary leading-relaxed">
                Il download dai provider e la consultazione di fonti online dipendono dalla connessione e dalla disponibilità dei servizi esterni.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. Aree principali delle funzionalità */}
      <FeaturesGrid />

      {/* 5. Documentazione Organizzata Focus */}
      <section className="py-16 md:py-24 bg-white border-t border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="inline-block px-3 py-1 text-body-sm font-semibold text-brand-700 bg-brand-50 border border-brand-200 rounded-full uppercase tracking-wider">
                Documentazione delle materie prime
              </span>
              <h2 className="text-heading-1 md:text-display font-bold text-content-primary tracking-tight">
                Gestione di DDT, certificati di analisi e SDS
              </h2>
              <p className="text-body-lg text-content-secondary leading-relaxed">
                La sezione dedicata consente di gestire i documenti delle materie prime associati alle registrazioni, con operazioni che variano in base al tipo di documento.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded bg-brand-100 text-brand-700 mt-1">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-body-md text-content-primary">Documenti associati alle registrazioni</h4>
                    <p className="text-body-sm text-content-secondary">DDT, certificati di analisi e SDS possono essere gestiti in relazione alle registrazioni disponibili nel gestionale.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded bg-brand-100 text-brand-700 mt-1">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-body-md text-content-primary">Caricamento e consultazione</h4>
                    <p className="text-body-sm text-content-secondary">Le funzioni disponibili comprendono il caricamento e l'apertura dei documenti dalla sezione dedicata.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded bg-brand-100 text-brand-700 mt-1">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-body-md text-content-primary">Download dai provider supportati</h4>
                    <p className="text-body-sm text-content-secondary">Il download dipende dalla connessione e dalla disponibilità del provider.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Box */}
            <div className="bg-slate-50 border border-border-strong rounded-xl p-6 md:p-8 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-border-subtle">
                <span className="font-bold text-body-md text-content-primary">Tipi di documenti</span>
                <span className="text-body-sm text-brand-700 font-semibold bg-brand-50 px-2 py-0.5 rounded border border-brand-200">DDT · CoA · SDS</span>
              </div>
              <div className="space-y-3 text-body-sm">
                <div className="p-3 bg-white rounded border border-border-subtle flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FolderArchive className="w-4 h-4 text-brand-600" />
                    <span className="font-medium text-content-primary">Documento di trasporto (DDT)</span>
                  </div>
                </div>
                <div className="p-3 bg-white rounded border border-border-subtle flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FolderArchive className="w-4 h-4 text-brand-600" />
                    <span className="font-medium text-content-primary">Certificato di analisi (CoA)</span>
                  </div>
                </div>
                <div className="p-3 bg-white rounded border border-border-subtle flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FolderArchive className="w-4 h-4 text-brand-600" />
                    <span className="font-medium text-content-primary">Scheda di sicurezza (SDS)</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Perché è gratuito? Teaser */}
      <WhyFreeTeaser />

      {/* 7. Call To Action Finale di Download */}
      <FinalCtaSection />
    </div>
  );
}
