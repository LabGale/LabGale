"use client";

import React, { useState } from "react";
import { SITE_CONFIG } from "@/config/site.config";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Check, AlertTriangle, Monitor } from "@/components/ui/Icons";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="inline-block px-3 py-1 text-body-sm font-semibold text-brand-700 bg-brand-50 border border-brand-200 rounded-full uppercase tracking-wider">
            Canali Diretti
          </span>
          <h1 className="text-display md:text-[40px] font-extrabold text-content-primary tracking-tight">
            Contatti e Supporto
          </h1>
          <p className="text-body-lg text-content-secondary leading-relaxed">
            Hai domande, suggerimenti sulle funzionalità o necessiti di supporto tecnico per il tuo laboratorio? Scrivici direttamente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Informazioni di Recapito (Placeholder) */}
          <div className="md:col-span-5 space-y-6">
            <Card padding="lg" className="bg-white border-border-subtle space-y-4">
              <h2 className="font-bold text-heading-3 text-content-primary">
                Recapiti Ufficiali
              </h2>
              <div className="space-y-3 text-body-sm text-content-secondary">
                <div>
                  <span className="block font-semibold text-content-primary">Email Supporto:</span>
                  <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-brand-700 hover:underline">
                    {SITE_CONFIG.contact.email}
                  </a>
                </div>
                <div>
                  <span className="block font-semibold text-content-primary">PEC:</span>
                  <span className="text-content-muted">{SITE_CONFIG.contact.pec}</span>
                </div>
                <div>
                  <span className="block font-semibold text-content-primary">Sede / Laboratorio:</span>
                  <span className="text-content-muted">{SITE_CONFIG.company.address}</span>
                  <span className="block text-content-muted">{SITE_CONFIG.company.city} ({SITE_CONFIG.company.country})</span>
                </div>
                <div className="pt-2 border-t border-border-subtle text-[11px] text-content-muted">
                  <p>Partita IVA: {SITE_CONFIG.company.vatNumber}</p>
                  <p className="mt-1">I recapiti definitivi verranno aggiornati all'assegnazione del dominio ufficiale.</p>
                </div>
              </div>
            </Card>

            <div className="p-4 rounded-lg bg-brand-50 border border-brand-200 text-body-sm text-brand-800 space-y-1">
              <p className="font-semibold">Tempi di Risposta:</p>
              <p>Rispondiamo ordinariamente entro 24-48 ore lavorative a tutte le richieste dei farmacisti.</p>
            </div>
          </div>

          {/* Form di Contatto */}
          <div className="md:col-span-7">
            <Card padding="lg" className="bg-white border-border-subtle">
              {submitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-heading-3 text-content-primary">Messaggio inviato</h3>
                  <p className="text-body-md text-content-secondary">
                    Grazie per averci contattato. Ti risponderemo all'indirizzo email indicato nel più breve tempo possibile.
                  </p>
                  <Button variant="outline" size="sm" onClick={() => setSubmitted(false)}>
                    Invia un altro messaggio
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-bold text-heading-3 text-content-primary mb-2">
                    Invia una richiesta
                  </h3>

                  <div>
                    <label htmlFor="name" className="block text-body-sm font-semibold text-content-primary mb-1">
                      Nome e Cognome / Dottore *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Dott. Mario Rossi"
                      className="w-full h-10 px-3 rounded-md border border-border-strong text-body-md focus:border-brand-600 focus:ring-1 focus:ring-brand-600 outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-body-sm font-semibold text-content-primary mb-1">
                        Email di contatto *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="farmacia@esempio.it"
                        className="w-full h-10 px-3 rounded-md border border-border-strong text-body-md focus:border-brand-600 focus:ring-1 focus:ring-brand-600 outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="pharmacy" className="block text-body-sm font-semibold text-content-primary mb-1">
                        Nome Farmacia / Città
                      </label>
                      <input
                        id="pharmacy"
                        type="text"
                        placeholder="Farmacia Centrale - Milano"
                        className="w-full h-10 px-3 rounded-md border border-border-strong text-body-md focus:border-brand-600 focus:ring-1 focus:ring-brand-600 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="topic" className="block text-body-sm font-semibold text-content-primary mb-1">
                      Argomento
                    </label>
                    <select
                      id="topic"
                      className="w-full h-10 px-3 rounded-md border border-border-strong text-body-md focus:border-brand-600 focus:ring-1 focus:ring-brand-600 outline-none bg-white"
                    >
                      <option>Informazioni generali sul gestionale</option>
                      <option>Assistenza per installazione</option>
                      <option>Segnalazione o suggerimento nuova funzione</option>
                      <option>Altro</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-body-sm font-semibold text-content-primary mb-1">
                      Messaggio *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      placeholder="Descrivi brevemente la tua richiesta o il suggerimento per il gestionale..."
                      className="w-full p-3 rounded-md border border-border-strong text-body-md focus:border-brand-600 focus:ring-1 focus:ring-brand-600 outline-none"
                    />
                  </div>

                  <p className="text-[11px] text-content-muted">
                    Inviando il modulo acconsenti al trattamento dei dati per la gestione della richiesta secondo l'informativa Privacy.
                  </p>

                  <Button type="submit" variant="primary" size="md" className="w-full justify-center">
                    Invia messaggio
                  </Button>
                </form>
              )}
            </Card>
          </div>

        </div>

      </div>
    </div>
  );
}
