import React from "react";
import type { Metadata } from "next";
import { SITE_CONFIG } from "@/config/site.config";
import { CURRENT_RELEASE } from "@/data/releases.data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { AppMockup } from "@/components/sections/AppMockup";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { HardDrive, Monitor, ShieldCheck, Check, Download, ChevronRight } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Il Gestionale Galenico",
  description: "Scopri come funziona il software per il laboratorio galenico di farmacia: architettura locale, piattaforme supportate e vantaggi operativi.",
};

export default function SoftwarePage() {
  const availablePlatforms = CURRENT_RELEASE.platforms.filter((p) => p.isAvailable);

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Intro */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3 py-1 text-body-sm font-semibold text-brand-700 bg-brand-50 border border-brand-200 rounded-full uppercase tracking-wider">
            Panoramica Software
          </span>
          <h1 className="text-display md:text-[40px] font-extrabold text-content-primary tracking-tight">
            Un gestionale pensato esclusivamente per la galenica
          </h1>
          <p className="text-body-lg text-content-secondary leading-relaxed">
            {SITE_CONFIG.productName} è un software desktop creato per liberare il farmacista preparatore dalla burocrazia e dalla frammentazione dei documenti, mantenendo la totale aderenza alle Norme di Buona Preparazione.
          </p>
        </div>

        {/* 3 Pilastri di Prodotto */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card padding="lg" className="border-border-subtle bg-white space-y-3">
            <h3 className="font-bold text-heading-3 text-content-primary">
              Cos'è {SITE_CONFIG.productName}
            </h3>
            <p className="text-body-md text-content-secondary leading-relaxed">
              È un'applicazione informatica specializzata che gestisce in modo integrato le materie prime, le schede tecniche, i fogli di lavorazione, i registri obbligatori e le scadenze del laboratorio farmaceutico.
            </p>
          </Card>

          <Card padding="lg" className="border-border-subtle bg-white space-y-3">
            <h3 className="font-bold text-heading-3 text-content-primary">
              Per chi è pensato
            </h3>
            <p className="text-body-md text-content-secondary leading-relaxed">
              È dedicato alle farmacie aperte al pubblico e alle farmacie ospedaliere che dispongono di un laboratorio galenico (sia con poche preparazioni mensili che con attività quotidiana intensiva).
            </p>
          </Card>

          <Card padding="lg" className="border-border-subtle bg-white space-y-3">
            <h3 className="font-bold text-heading-3 text-content-primary">
              Come funziona
            </h3>
            <p className="text-body-md text-content-secondary leading-relaxed">
              Si installa localmente sul tuo computer in meno di due minuti. Non richiede server dedicati, configurazioni di rete complesse né contratti con fornitori terzi.
            </p>
          </Card>
        </div>

        {/* Mockup dell'applicazione */}
        <div className="space-y-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-heading-2 font-bold text-content-primary">
              Interfaccia pulita e immediata
            </h2>
            <p className="text-body-md text-content-secondary mt-1">
              Nessun menu nascosto, nessun gergo complicato: tutti i comandi sono pensati per essere utilizzati rapidamente tra un allestimento e l'altro.
            </p>
          </div>
          <AppMockup />
        </div>

        {/* Architettura Locale vs Cloud */}
        <div className="bg-white border border-border-subtle rounded-xl p-8 md:p-12 shadow-sm space-y-8">
          <SectionHeading
            badge="Architettura e Sovranità del Dato"
            title="Massima flessibilità: MongoDB in locale oppure in cloud su Atlas"
            subtitle="Abbiamo progettato il gestionale per adattarsi alle esigenze reali della farmacia, lasciando piena libertà nella gestione del database."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-bold text-heading-3 text-content-primary flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-brand-600" />
                <span>MongoDB in locale: privacy assoluta e zero dipendenze</span>
              </h4>
              <p className="text-body-md text-content-secondary leading-relaxed">
                Le preparazioni magistrali contengono prescrizioni mediche e dati sensibili dei pazienti. Utilizzando MongoDB in locale sul computer del laboratorio, i dati non lasciano mai la farmacia, garantendo funzionamento autonomo anche in assenza di connessione internet.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-heading-3 text-content-primary flex items-center gap-2">
                <HardDrive className="w-5 h-5 text-brand-600" />
                <span>MongoDB Atlas autonomo: sincronizzazione multi-postazione</span>
              </h4>
              <p className="text-body-md text-content-secondary leading-relaxed">
                Se hai le competenze o disponi di più postazioni di laboratorio da sincronizzare, puoi collegare in autonomia il tuo cluster dedicato MongoDB Atlas. Le credenziali e gli URI vengono sempre custoditi nel portachiavi protetto del sistema operativo.
              </p>
            </div>
          </div>
        </div>

        {/* Specifiche Piattaforme */}
        <div className="space-y-6">
          <SectionHeading
            title="Sistemi operativi supportati"
            subtitle={`Disponibile per ${availablePlatforms.map((p) => p.osName).join(", ")}. Unica esperienza d'uso su tutte le postazioni.`}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {availablePlatforms.map((platform) => (
              <Card key={platform.os} padding="lg" className="border-border-subtle bg-slate-50/50 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-heading-3 text-content-primary">{platform.osName}</h3>
                  <span className="text-[11px] font-semibold text-brand-700 bg-brand-50 px-2 py-0.5 rounded border border-brand-200">
                    {platform.architecture}
                  </span>
                </div>
                <ul className="space-y-2 text-body-sm text-content-secondary">
                  {platform.requirements.map((req, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-brand-600 shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

      </div>

      <div className="mt-16">
        <FinalCtaSection />
      </div>
    </div>
  );
}
