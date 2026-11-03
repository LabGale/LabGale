import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site.config";
import { Card } from "@/components/ui/Card";
import { AlertTriangle } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Informativa Privacy e Trattamento Dati (GDPR)",
  description: "Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR).",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="space-y-3">
          <h1 className="text-display md:text-[36px] font-extrabold text-content-primary tracking-tight">
            Informativa sulla Privacy
          </h1>
          <p className="text-body-sm text-content-muted">
            Ai sensi degli articoli 13 e 14 del Regolamento (UE) 2016/679 (GDPR). Ultimo aggiornamento: Ottobre 2026.
          </p>
        </div>

        {/* Avviso Placeholder Legale */}
        <div className="p-4 rounded-lg bg-amber-50 border border-amber-200 text-body-sm text-amber-900 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <strong>[AVVISO PER IL PROPRIETARIO DEL SITO]:</strong> Questo testo costituisce una struttura di riferimento pre-impostata. Prima della messa online ufficiale del dominio, i dati del Titolare e le finalità specifiche andranno convalidate con un consulente legale.
          </div>
        </div>

        <Card padding="lg" className="bg-white border-border-subtle space-y-6 text-body-md text-content-secondary leading-relaxed">
          
          <section className="space-y-2">
            <h2 className="text-heading-3 font-bold text-content-primary">
              1. Titolare del Trattamento
            </h2>
            <p>
              Il Titolare del trattamento dei dati raccolti tramite questo sito web è:
            </p>
            <p className="bg-slate-50 p-3 rounded border border-border-subtle font-mono text-body-sm text-content-primary">
              {SITE_CONFIG.company.legalName}<br />
              Sede: {SITE_CONFIG.company.address} — {SITE_CONFIG.company.city} ({SITE_CONFIG.company.country})<br />
              Partita IVA: {SITE_CONFIG.company.vatNumber}<br />
              Email di contatto: {SITE_CONFIG.contact.email}
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-heading-3 font-bold text-content-primary">
              2. Dati trattati dal Software Gestionale Desktop vs Dati del Sito Web
            </h2>
            <div className="p-3 bg-brand-50 rounded border border-brand-200 text-brand-900 text-body-sm">
              <strong>Distinzione Fondamentale:</strong> Il software gestionale {SITE_CONFIG.productName} è un'applicazione desktop che funziona localmente. I dati sanitari, le prescrizioni, le formule galeniche e le anagrafiche dei pazienti caricate all'interno del software NON vengono mai inviate, trasferite o accessibili dai server di questo sito web, rimanendo sotto l'esclusiva custodia della farmacia titolare del trattamento.
            </div>
            <p className="pt-2">
              Tramite il presente sito web vengono trattati esclusivamente:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-body-sm">
              <li>Dati forniti volontariamente tramite il modulo contatti (nome, email, farmacia, testo del messaggio).</li>
              <li>Dati tecnici minimi di navigazione (indirizzo IP anonimizzato e log server tecnici necessari alla trasmissione dei pacchetti).</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-heading-3 font-bold text-content-primary">
              3. Cookie e Tracciamento
            </h2>
            <p>
              Questo sito web non fa uso di cookie di profilazione commerciali né di tracker invasivi di terze parti. L'eventuale misurazione statistica dell'interesse verso il download avviene nel pieno rispetto della privacy senza tracciamento cross-site.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-heading-3 font-bold text-content-primary">
              4. Diritti dell'Interessato
            </h2>
            <p>
              In conformità agli artt. 15-22 del GDPR, l'utente può in qualsiasi momento richiedere la conferma dell'esistenza dei propri dati, l'accesso, la rettifica o la cancellazione scrivendo all'indirizzo email <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-brand-700 underline">{SITE_CONFIG.contact.email}</a>.
            </p>
          </section>

        </Card>

      </div>
    </div>
  );
}
