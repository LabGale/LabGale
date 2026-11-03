import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site.config";
import { Card } from "@/components/ui/Card";
import { AlertTriangle } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Termini e Condizioni di Utilizzo del Software",
  description: "Condizioni generali di licenza e utilizzo per il software gestionale per laboratorio galenico [NOME PRODOTTO].",
};

export default function TermsPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="space-y-3">
          <h1 className="text-display md:text-[36px] font-extrabold text-content-primary tracking-tight">
            Termini e Condizioni di Utilizzo
          </h1>
          <p className="text-body-sm text-content-muted">
            Condizioni di licenza e avvertenze operative. Ultimo aggiornamento: Ottobre 2026.
          </p>
        </div>

        {/* Avviso Placeholder Legale */}
        <div className="p-4 rounded-lg bg-amber-50 border border-amber-200 text-body-sm text-amber-900 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <strong>[AVVISO PER IL PROPRIETARIO DEL SITO]:</strong> Questo documento definisce l'ambito di licenza e la clausola di manleva tecnica. Da verificare in sede legale prima del lancio definitivo.
          </div>
        </div>

        <Card padding="lg" className="bg-white border-border-subtle space-y-6 text-body-md text-content-secondary leading-relaxed">
          
          <section className="space-y-2">
            <h2 className="text-heading-3 font-bold text-content-primary">
              1. Concessione della Licenza d'Uso
            </h2>
            <p>
              {SITE_CONFIG.productName} è concesso a titolo gratuito per l'utilizzo da parte di farmacie, farmacisti e operatori di laboratorio. Non sono previsti canoni di attivazione o vincoli di rinnovo periodico per la versione desktop locale.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-heading-3 font-bold text-content-primary">
              2. Responsabilità Scientifica del Farmacista
            </h2>
            <p className="p-3 bg-slate-50 rounded border border-border-subtle text-body-sm text-content-primary">
              Il software costituisce un ausilio tecnologico, gestionale e di calcolo. Resta in ogni caso ferma l'esclusiva responsabilità scientifica, tecnica e deontologica del farmacista preparatore nella verifica della correttezza della ricetta medica, dei dosaggi ponderali, dell'integrità delle materie prime e della conformità del preparato finito alle Norme di Buona Preparazione della Farmacopea Ufficiale.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-heading-3 font-bold text-content-primary">
              3. Garanzie del Software e Backup Dati
            </h2>
            <p>
              Il software viene fornito "così com'è" (as-is), senza garanzie esplicite o implicite di idoneità a scopi specifici. È responsabilità della farmacia effettuare copie periodiche di sicurezza (backup) del database locale su supporti esterni al fine di prevenire perdite accidentali di dati derivanti da guasti hardware del personal computer.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-heading-3 font-bold text-content-primary">
              4. Proprietà Intellettuale
            </h2>
            <p>
              Tutti i diritti di proprietà intellettuale relativi al software, all'interfaccia grafica e alla documentazione rimangono di esclusiva titolarità di {SITE_CONFIG.company.legalName}.
            </p>
          </section>

        </Card>

      </div>
    </div>
  );
}
