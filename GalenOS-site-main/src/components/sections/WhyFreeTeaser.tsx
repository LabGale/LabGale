import React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site.config";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ShieldCheck, HardDrive, Sparkles, ArrowRight, HelpCircle } from "@/components/ui/Icons";

export function WhyFreeTeaser() {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-brand-50/60 via-white to-slate-50 border border-brand-200 rounded-xl p-8 md:p-12 lg:p-14 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-body-sm font-semibold text-brand-800 bg-brand-100/70 border border-brand-300">
                <HelpCircle className="w-4 h-4 text-brand-700" />
                Trasparenza & Modello
              </span>
              
              <h2 className="text-heading-1 md:text-display font-bold text-content-primary tracking-tight">
                Perché {SITE_CONFIG.productName} è gratuito?
              </h2>

              <p className="text-body-lg text-content-secondary leading-relaxed">
                Spesso un software professionale gratuito fa sorgere un dubbio legittimo: <em>"Dov'è il trucco?"</em>. 
                Nessun trucco. Crediamo che la sicurezza e l'ordine nel laboratorio galenico debbano essere accessibili a ogni farmacia, senza canoni mensili esorbitanti.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-white border border-brand-200 text-brand-600 shadow-sm shrink-0">
                    <HardDrive className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-body-md text-content-primary">I tuoi dati restano tuoi</h4>
                    <p className="text-body-sm text-content-secondary">Funziona in locale sul tuo computer. Nessun dato clinico o di preparazione viene ceduto o monetizzato.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-white border border-brand-200 text-brand-600 shadow-sm shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-body-md text-content-primary">Nessun costo nascosto</h4>
                    <p className="text-body-sm text-content-secondary">Nessun periodo di prova a scadenza, nessuna funzionalità bloccata, nessun abbonamento obbligatorio.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end">
              <Card padding="md" className="bg-white border-brand-200 shadow-sm w-full space-y-4 text-left">
                <p className="text-body-sm text-content-secondary">
                  Abbiamo dedicato una pagina intera a spiegare in totale trasparenza i nostri principi e la visione a lungo termine del progetto.
                </p>
                <Button
                  href="/perche-gratuito"
                  variant="primary"
                  size="md"
                  className="w-full justify-center"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Leggi la risposta completa
                </Button>
              </Card>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
