import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { PainPointsSection } from "@/components/sections/PainPointsSection";
import { FeaturesGrid } from "@/components/sections/FeaturesGrid";
import { WhyFreeTeaser } from "@/components/sections/WhyFreeTeaser";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FolderArchive, HardDrive, Monitor, ShieldCheck, Check } from "@/components/ui/Icons";
import { SITE_CONFIG } from "@/config/site.config";
import { CURRENT_RELEASE } from "@/data/releases.data";

export default function HomePage() {
  const availablePlatforms = CURRENT_RELEASE.platforms.filter((p) => p.isAvailable);

  return (
    <div>
      {/* 1. Hero Section con Headline, CTA e Mockup */}
      <HeroSection />

      {/* 2. Sezione Problema / Soluzione */}
      <PainPointsSection />

      {/* 3. Sezione Approfondimento: Semplicità & Multipiattaforma */}
      <section className="py-16 md:py-24 bg-white border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Architettura Flessibile"
            title="Desktop nativo per Windows, macOS e Linux"
            subtitle="Scegli tu come gestire il database: in locale per la totale riservatezza offline, oppure collegando la tua istanza MongoDB Atlas autonoma."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <Card padding="lg" className="border-border-subtle bg-slate-50/50 space-y-3">
              <div className="w-10 h-10 rounded-md bg-brand-50 border border-brand-200 text-brand-600 flex items-center justify-center">
                <HardDrive className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-heading-3 text-content-primary">
                Libertà del Database
              </h3>
              <p className="text-body-md text-content-secondary leading-relaxed">
                Usa MongoDB in locale sul computer del laboratorio per la massima riservatezza, oppure collega in autonomia il tuo database MongoDB Atlas cloud.
              </p>
            </Card>

            <Card padding="lg" className="border-border-subtle bg-slate-50/50 space-y-3">
              <div className="w-10 h-10 rounded-md bg-brand-50 border border-brand-200 text-brand-600 flex items-center justify-center">
                <Monitor className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-heading-3 text-content-primary">
                Multipiattaforma Reale
              </h3>
              <p className="text-body-md text-content-secondary leading-relaxed">
                Sviluppato per integrarsi con l'ecosistema del tuo laboratorio: pacchetti dedicati e ottimizzati per {availablePlatforms.map((p) => p.osName).join(", ")}.
              </p>
            </Card>

            <Card padding="lg" className="border-border-subtle bg-slate-50/50 space-y-3">
              <div className="w-10 h-10 rounded-md bg-brand-50 border border-brand-200 text-brand-600 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-heading-3 text-content-primary">
                Sicurezza & Portachiavi OS
              </h3>
              <p className="text-body-md text-content-secondary leading-relaxed">
                Le credenziali dei fornitori e gli URI di connessione sono protetti dal portachiavi nativo del sistema operativo (Keychain macOS / Credential Manager Windows).
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. Le 8 Funzionalità Ufficiali */}
      <FeaturesGrid />

      {/* 5. Documentazione Organizzata Focus */}
      <section className="py-16 md:py-24 bg-white border-t border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="inline-block px-3 py-1 text-body-sm font-semibold text-brand-700 bg-brand-50 border border-brand-200 rounded-full uppercase tracking-wider">
                Tracciabilità & Normativa
              </span>
              <h2 className="text-heading-1 md:text-display font-bold text-content-primary tracking-tight">
                DDT, Certificati di Analisi e SDS sempre a portata di mano
              </h2>
              <p className="text-body-lg text-content-secondary leading-relaxed">
                Uno dei punti critici durante le ispezioni dell'ASL o dell'Ordine dei Farmacisti è la pronta reperibilità dei Certificati di Analisi delle materie prime impiegate.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded bg-brand-100 text-brand-700 mt-1">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-body-md text-content-primary">Collegamento diretto ai lotti</h4>
                    <p className="text-body-sm text-content-secondary">Ogni file PDF del certificato di analisi è associato in modo permanente al numero di lotto del fornitore.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded bg-brand-100 text-brand-700 mt-1">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-body-md text-content-primary">Visualizzazione istantanea durante la lavorazione</h4>
                    <p className="text-body-sm text-content-secondary">Mentre allestisci la preparazione, puoi aprire il certificato o la SDS con un solo clic senza cambiare finestra.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded bg-brand-100 text-brand-700 mt-1">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-body-md text-content-primary">Zero carta e zero disordine</h4>
                    <p className="text-body-sm text-content-secondary">Riduci drasticamente i faldoni cartacei archiviando i documenti in modo ordinato e sicuro.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Box */}
            <div className="bg-slate-50 border border-border-strong rounded-xl p-6 md:p-8 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-border-subtle">
                <span className="font-bold text-body-md text-content-primary">Esempio di fascicolo sostanza</span>
                <span className="text-body-sm text-brand-700 font-semibold bg-brand-50 px-2 py-0.5 rounded border border-brand-200">Conforme NBP</span>
              </div>
              <div className="space-y-3 text-body-sm">
                <div className="p-3 bg-white rounded border border-border-subtle flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FolderArchive className="w-4 h-4 text-brand-600" />
                    <span className="font-medium text-content-primary">Certificato_Analisi_Lotto_2026.pdf</span>
                  </div>
                  <span className="text-[11px] text-content-muted">PDF • 450 KB</span>
                </div>
                <div className="p-3 bg-white rounded border border-border-subtle flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FolderArchive className="w-4 h-4 text-brand-600" />
                    <span className="font-medium text-content-primary">Scheda_Dati_Sicurezza_SDS.pdf</span>
                  </div>
                  <span className="text-[11px] text-content-muted">PDF • 1.2 MB</span>
                </div>
                <div className="p-3 bg-white rounded border border-border-subtle flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FolderArchive className="w-4 h-4 text-brand-600" />
                    <span className="font-medium text-content-primary">DDT_Fornitore_FarmaGroup_0826.pdf</span>
                  </div>
                  <span className="text-[11px] text-content-muted">PDF • 320 KB</span>
                </div>
              </div>
              <p className="text-[11px] text-content-muted pt-2">
                Tutti i file sono archiviati nella cartella locale del software e non dipendono da collegamenti internet esterni.
              </p>
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
