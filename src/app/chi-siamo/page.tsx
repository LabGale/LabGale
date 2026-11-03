import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site.config";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FlaskConical, AlertTriangle, ShieldCheck } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Chi Siamo | Il Progetto del Gestionale Galenico",
  description: "La missione e la visione dietro allo sviluppo di [NOME PRODOTTO], il software gestionale gratuito per il laboratorio galenico di farmacia.",
};

export default function AboutPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="inline-block px-3 py-1 text-body-sm font-semibold text-brand-700 bg-brand-50 border border-brand-200 rounded-full uppercase tracking-wider">
            Origine del Progetto
          </span>
          <h1 className="text-display md:text-[40px] font-extrabold text-content-primary tracking-tight">
            Chi c'è dietro a {SITE_CONFIG.productName}
          </h1>
          <p className="text-body-lg text-content-secondary leading-relaxed">
            Una risposta concreta alle difficoltà reali incontrate ogni giorno dai farmacisti preparatori italiani.
          </p>
        </div>

        {/* Mission Statement */}
        <Card padding="lg" className="bg-white border-border-subtle space-y-4">
          <h2 className="font-bold text-heading-2 text-content-primary">
            La nostra missione
          </h2>
          <p className="text-body-md text-content-secondary leading-relaxed">
            LabGale nasce dall'esigenza di avere uno strumento gestionale
            moderno, completo e accessibile per il laboratorio galenico
            della farmacia.
          </p>
          <p className="text-body-md text-content-secondary leading-relaxed">
            La gestione delle materie prime, delle procedure di
            preparazione, della documentazione e degli adempimenti
            richiede strumenti affidabili, ma spesso le soluzioni
            disponibili comportano costi e complessità difficili
            da sostenere per le realtà più piccole.
          </p>
          <p className="text-body-md text-content-secondary leading-relaxed">
            Per questo ho deciso di sviluppare LabGale: un software
            indipendente, gratuito e in continua evoluzione, pensato
            per semplificare il lavoro quotidiano del farmacista
            preparatore e lasciare più spazio a ciò che conta davvero:
            la qualità della preparazione galenica.
          </p>
        </Card>


        
        {/* Informazioni sullo sviluppatore */}
        <Card padding="lg" className="bg-white border-border-subtle space-y-5">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-brand-50">
              <ShieldCheck className="w-6 h-6 text-brand-600" />
            </div>
            <div>
              <h2 className="font-bold text-heading-2 text-content-primary">
                Chi sviluppa LabGale
              </h2>
              <p className="text-body-sm text-content-muted">
                Un progetto indipendente
              </p>
            </div>
          </div>

          <div className="space-y-4 text-body-md text-content-secondary leading-relaxed">
            <p>
              LabGale è un progetto ideato, progettato e sviluppato
              da <strong className="text-content-primary">Stefano Perna</strong>.
            </p>

            <p>
              Dalla progettazione dell'architettura software allo sviluppo
              delle funzionalità, dall'interfaccia grafica alla gestione
              degli aggiornamenti, ogni aspetto del programma nasce
              da un lavoro di sviluppo indipendente.
            </p>

            <p>
              L'obiettivo è realizzare uno strumento concreto e accessibile
              per le farmacie che svolgono attività galenica, con particolare
              attenzione alla semplicità di utilizzo, all'affidabilità
              e alle esigenze operative del laboratorio.
            </p>
          </div>

          <div className="border-t border-border-subtle pt-4 space-y-2">
            <p className="text-body-sm font-semibold text-content-primary">
              Contatti
            </p>
            <p className="text-body-sm text-content-secondary">
              Sviluppatore: Stefano Perna
            </p>
            <p className="text-body-sm text-content-secondary">
              Località: {SITE_CONFIG.company.city}, {SITE_CONFIG.company.country}
            </p>
            <a
              href={`mailto:${SITE_CONFIG.contact.email}`}
              className="text-body-sm font-medium text-brand-700 hover:text-brand-800 underline"
            >
              {SITE_CONFIG.contact.email}
            </a>
          </div>
        </Card>


        {/* CTA */}
        <div className="text-center pt-4">
          <Button href={SITE_CONFIG.primaryCta.href} variant="primary" size="lg">
            {SITE_CONFIG.primaryCta.label}
          </Button>
        </div>

      </div>
    </div>
  );
}
