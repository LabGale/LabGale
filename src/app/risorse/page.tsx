import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site.config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FileText, Check, ChevronRight, ShieldCheck } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Risorse e Normativa per il Laboratorio Galenico",
  description: "Checklist ispettive, riferimenti alle Norme di Buona Preparazione (NBP) e strumenti di supporto per la farmacia galenica.",
};

export default function ResourcesPage() {
  const resources = [
    {
      title: "Checklist di conformità Norme di Buona Preparazione (NBP)",
      category: "Normativa",
      description: "Una guida rapida con tutti i controlli documentali, tecnici e ambientali previsti dalla Farmacopea Ufficiale per il laboratorio.",
      format: "Checklist PDF",
    },
    {
      title: "Vademecum per il resoconto annuale sostanze dopanti (L. 376/2000)",
      category: "Adempimenti",
      description: "Riepilogo delle scadenze e delle classi di principi attivi soggetti a trasmissione annuale al Ministero della Salute.",
      format: "Guida Operativa",
    },
    {
      title: "Modello standard per la qualifica dei fornitori di materie prime",
      category: "Qualità",
      description: "Struttura per raccogliere e conservare i dati di certificazione dei distributori e produttori chimici.",
      format: "Modello Documentale",
    },
  ];

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3 py-1 text-body-sm font-semibold text-brand-700 bg-brand-50 border border-brand-200 rounded-full uppercase tracking-wider">
            Documenti & Strumenti
          </span>
          <h1 className="text-display md:text-[40px] font-extrabold text-content-primary tracking-tight">
            Risorse per il laboratorio galenico
          </h1>
          <p className="text-body-lg text-content-secondary leading-relaxed">
            Materiali di consultazione, checklist e riferimenti normativi per supportare il farmacista preparatore nell'attività quotidiana.
          </p>
        </div>

        {/* Resources Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((res, idx) => (
            <Card key={idx} padding="lg" className="bg-white border-border-subtle flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-md bg-brand-50 border border-brand-200 text-brand-600 flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-700 bg-brand-50 px-2 py-0.5 rounded border border-brand-200">
                    {res.category}
                  </span>
                  <h3 className="font-bold text-heading-3 text-content-primary mt-2">
                    {res.title}
                  </h3>
                </div>
                <p className="text-body-sm text-content-secondary leading-relaxed">
                  {res.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-border-subtle flex items-center justify-between text-body-sm">
                <span className="text-content-muted">{res.format}</span>
                <span className="text-brand-700 font-semibold">Incluso con il software</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Integration Callout */}
        <div className="bg-brand-50/60 border border-brand-200 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="font-bold text-heading-3 text-content-primary">
              Tutte queste logiche sono già integrate in {SITE_CONFIG.productName}
            </h3>
            <p className="text-body-md text-content-secondary max-w-2xl">
              Non devi compilare questi moduli a mano: il gestionale li applica in automatico durante l'inserimento delle materie prime e la redazione dei fogli di lavorazione.
            </p>
          </div>
          <Button href={SITE_CONFIG.primaryCta.href} variant="primary" size="md">
            Scarica gratis
          </Button>
        </div>

      </div>
    </div>
  );
}
