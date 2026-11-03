import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site.config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { HardDrive, ShieldCheck, Check, Download, AlertTriangle } from "@/components/ui/Icons";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";

export const metadata: Metadata = {
  title: "Perché è Gratuito? Trasparenza e Principi",
  description: "Tutto ciò che c'è da sapere sulla gratuità del gestionale per laboratorio galenico: etica, privacy dei dati locali e trasparenza a lungo termine.",
};

export default function WhyFreePage() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="inline-block px-3 py-1 text-body-sm font-semibold text-brand-700 bg-brand-50 border border-brand-200 rounded-full uppercase tracking-wider">
            Trasparenza Totale
          </span>
          <h1 className="text-display md:text-[40px] font-extrabold text-content-primary tracking-tight">
            Perché {SITE_CONFIG.productName} è gratuito?
          </h1>
          <p className="text-body-lg text-content-secondary leading-relaxed">
            Nel settore farmaceutico e sanitario, un software professionale senza costi di licenza suscita spontaneamente un dubbio: <em>"Dov'è il trucco? Cosa c'è sotto?"</em>. Ecco la nostra risposta chiara, punto per punto.
          </p>
        </div>

        {/* Le 5 Certezze del Prodotto */}
        <div className="space-y-6">
          <h2 className="text-heading-2 font-bold text-content-primary">
            Cosa NON è {SITE_CONFIG.productName}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card padding="md" className="bg-white border-border-subtle">
              <h3 className="font-bold text-body-md text-content-primary flex items-center gap-2">
                <Check className="w-4 h-4 text-brand-600" />
                <span>Non è una prova a tempo</span>
              </h3>
              <p className="text-body-sm text-content-secondary mt-1">
                Nessun blocco dopo 14 o 30 giorni. Scarichi il gestionale e puoi utilizzarlo per sempre per il tuo laboratorio.
              </p>
            </Card>

            <Card padding="md" className="bg-white border-border-subtle">
              <h3 className="font-bold text-body-md text-content-primary flex items-center gap-2">
                <Check className="w-4 h-4 text-brand-600" />
                <span>Non è una versione monca o limitata</span>
              </h3>
              <p className="text-body-sm text-content-secondary mt-1">
                Tutte le funzionalità di base (sostanze, lotti, fogli di lavorazione, certificati) sono completamente sbloccate senza limiti di record.
              </p>
            </Card>

            <Card padding="md" className="bg-white border-border-subtle">
              <h3 className="font-bold text-body-md text-content-primary flex items-center gap-2">
                <Check className="w-4 h-4 text-brand-600" />
                <span>Non monetizziamo i tuoi dati</span>
              </h3>
              <p className="text-body-sm text-content-secondary mt-1">
                Il programma non raccoglie né vende dati a case farmaceutiche, grossisti o terze parti. Il database risiede sul tuo computer.
              </p>
            </Card>

            <Card padding="md" className="bg-white border-border-subtle">
              <h3 className="font-bold text-body-md text-content-primary flex items-center gap-2">
                <Check className="w-4 h-4 text-brand-600" />
                <span>Non è un progetto amatoriale</span>
              </h3>
              <p className="text-body-sm text-content-secondary mt-1">
                L'applicazione è sviluppata con architettura software moderna, design system rigoroso e pieno allineamento alle Norme di Buona Preparazione.
              </p>
            </Card>
          </div>
        </div>

        {/* La Nostra Visione */}
        <div className="bg-white border border-border-subtle rounded-xl p-8 space-y-4">
          <h2 className="text-heading-2 font-bold text-content-primary">
            La nostra visione per la galenica
          </h2>
          <p className="text-body-md text-content-secondary leading-relaxed">
            La galenica rappresenta l'essenza clinica e scientifica della professione del farmacista: personalizzare la cura quando l'industria non offre una risposta idonea al paziente.
          </p>
          <p className="text-body-md text-content-secondary leading-relaxed">
            Tuttavia, negli ultimi anni, gli adempimenti burocratici e i costi elevati dei software gestionali hanno spinto molte farmacie a ridurre o chiudere il proprio laboratorio. Riteniamo che dotare ogni farmacista di uno strumento digitale ordinato, rapido e gratuito sia il modo più concreto per preservare e valorizzare questa eccellenza professionale.
          </p>
        </div>

        {/* Modello di Sostenibilità (Placeholder Dichiarato per il Proprietario) */}
        <div className="bg-amber-50/50 border border-amber-200 rounded-xl p-8 space-y-4">
          <div className="flex items-center gap-2 text-amber-800">
            <AlertTriangle className="w-5 h-5 shrink-0" />
            <h3 className="font-bold text-heading-3">
              Come verrà sostenuto il progetto a lungo termine?
            </h3>
          </div>
          <div className="space-y-3 text-body-md text-amber-950/80 leading-relaxed">
            <p>
              <strong>[SEZIONE IN CORSO DI DEFINIZIONE DA PARTE DEL PROPRIETARIO DEL PROGETTO]</strong>
            </p>
            <p>
              Il software desktop locale rimarrà sempre accessibile e funzionale. La sostenibilità economica a lungo termine del progetto potrà articolarsi su opzioni trasparenti e facoltative, ad esempio:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-body-sm">
              <li>Servizi accessori di supporto e assistenza tecnica dedicata personalizzata</li>
              <li>Corsi di formazione operativa per il personale di laboratorio</li>
              <li>Canali di donazione libera o sponsorizzazioni istituzionali etiche</li>
            </ul>
            <p className="text-body-sm italic pt-2">
              Nessun cambiamento futuro comprometterà o renderà a pagamento i dati già archiviati localmente sul tuo computer.
            </p>
          </div>
        </div>

        {/* Invito al Download */}
        <div className="text-center pt-6 space-y-4">
          <h3 className="text-heading-2 font-bold text-content-primary">
            Vuoi provare {SITE_CONFIG.productName} nel tuo laboratorio?
          </h3>
          <p className="text-body-md text-content-secondary">
            Scarica l'installer per Windows, macOS o Linux e inizia a caricare le tue prime sostanze in pochi minuti.
          </p>
          <div className="pt-2">
            <Button
              href={SITE_CONFIG.primaryCta.href}
              variant="primary"
              size="lg"
              leftIcon={<Download className="w-5 h-5" />}
            >
              {SITE_CONFIG.primaryCta.label}
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
