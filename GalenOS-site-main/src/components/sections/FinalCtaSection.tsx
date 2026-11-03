import React from "react";
import { SITE_CONFIG } from "@/config/site.config";
import { CURRENT_RELEASE } from "@/data/releases.data";
import { Button } from "@/components/ui/Button";
import { Download, Monitor, Check } from "@/components/ui/Icons";

export function FinalCtaSection() {
  const availablePlatforms = CURRENT_RELEASE.platforms.filter((p) => p.isAvailable);

  return (
    <section className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#108a64_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        <span className="inline-block px-3 py-1 text-body-sm font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800 rounded-full uppercase tracking-wider">
          Inizia Oggi Stesso
        </span>

        <h2 className="text-display md:text-[40px] font-extrabold tracking-tight text-white leading-tight">
          Scarica il gestionale per il tuo laboratorio
        </h2>

        <p className="text-body-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Scaricalo e utilizzalo gratuitamente per organizzare le tue materie prime, la documentazione, le lavorazioni e le giacenze.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            href={SITE_CONFIG.primaryCta.href}
            variant="primary"
            size="lg"
            className="w-full sm:w-auto bg-brand-500 hover:bg-brand-600 text-white shadow-lg shadow-brand-900/40"
            leftIcon={<Download className="w-5 h-5" />}
          >
            {SITE_CONFIG.primaryCta.label}
          </Button>
          <Button
            href="/assistenza/guide"
            variant="outline"
            size="lg"
            className="w-full sm:w-auto bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700 hover:text-white"
          >
            Guida all'installazione
          </Button>
        </div>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-body-sm text-slate-400">
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-emerald-400" />
            Nessun canone o licenza
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-emerald-400" />
            Compatibile {availablePlatforms.map((p) => p.osName).join(", ")}
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-emerald-400" />
            Nessuna carta di credito richiesta
          </span>
        </div>

      </div>
    </section>
  );
}
