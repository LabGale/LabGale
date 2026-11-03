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
            Il progetto nasce dall'osservazione diretta del lavoro al banco galenico: adempimenti normativi stringenti, registri da tenere costantemente aggiornati e software commerciali spesso macchinosi, lenti e con canoni sproporzionati.
          </p>
          <p className="text-body-md text-content-secondary leading-relaxed">
            L'obiettivo è fornire a ogni farmacia uno strumento informatico moderno, rapido e a costo zero di licenza, per preservare l'arte galenica e consentire al preparatore di concentrarsi sulla qualità scientifica del medicinale.
          </p>
        </Card>

        {/* Informazioni Ufficiali sul Titolare / Autore (Placeholder) */}
        <div className="bg-slate-50 border border-border-strong rounded-xl p-8 space-y-4">
          <div className="flex items-center gap-2 text-slate-800">
            <ShieldCheck className="w-5 h-5 text-brand-600" />
            <h3 className="font-bold text-heading-3">
              Informazioni sul Titolare e Sviluppatore
            </h3>
          </div>
          <div className="space-y-3 text-body-md text-content-secondary leading-relaxed">
            <p>
              <strong>[SEZIONE RISERVATA AL PROPRIETARIO DEL PROGETTO]</strong>
            </p>
            <p>
              In questa sezione verranno inserite le informazioni ufficiali relative all'autore, all'eventuale farmacia promotrice o al team di sviluppo del software, non appena confermate in via definitiva:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-body-sm text-content-muted">
              <li>Nome e cognome / Ragione Sociale: <em>{SITE_CONFIG.company.legalName}</em></li>
              <li>Sede: <em>{SITE_CONFIG.company.city} ({SITE_CONFIG.company.country})</em></li>
              <li>Partita IVA / Codice Fiscale: <em>{SITE_CONFIG.company.vatNumber}</em></li>
              <li>Contatto diretto: <em>{SITE_CONFIG.contact.email}</em></li>
            </ul>
          </div>
        </div>

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
