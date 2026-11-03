import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site.config";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { PlayCircle, ChevronRight, Monitor } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Video Tutorial del Gestionale Galenico",
  description: "Guarda le videoguide sull'uso del gestionale: caricamento sostanze, associazione certificati e compilazione fogli di lavorazione.",
};

export default function VideoTutorialsPage() {
  const videos = [
    {
      title: "Panoramica completa del gestionale in 5 minuti",
      duration: "5:20",
      description: "Un tour guidato delle sezioni principali: anagrafica sostanze, lotti di magazzino e fogli di lavorazione.",
      category: "Introduzione",
    },
    {
      title: "Come inserire una nuova materia prima e allegare il CoA",
      duration: "3:45",
      description: "Dall'inserimento del fattore di correzione al caricamento del PDF del Certificato di Analisi.",
      category: "Materie Prime",
    },
    {
      title: "Compilazione guidata di un foglio di lavorazione (Capsule)",
      duration: "6:10",
      description: "Selezione della formula, calcolo automatico dei volumi di riempimento e scarico dal magazzino lotti.",
      category: "Lavorazioni",
    },
    {
      title: "Generazione del resoconto per le sostanze dopanti",
      duration: "4:15",
      description: "Come estrarre i dati delle preparazioni soggette a Legge 376/2000 per la trasmissione annuale.",
      category: "Adempimenti",
    },
  ];

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-body-sm text-content-muted">
          <Link href="/" className="hover:text-content-primary transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/assistenza" className="hover:text-content-primary transition-colors">Assistenza</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-content-primary font-medium">Video Tutorial</span>
        </nav>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3 py-1 text-body-sm font-semibold text-brand-700 bg-brand-50 border border-brand-200 rounded-full uppercase tracking-wider">
            Dimostrazioni Pratiche
          </span>
          <h1 className="text-display md:text-[40px] font-extrabold text-content-primary tracking-tight">
            Video Tutorial Operativi
          </h1>
          <p className="text-body-lg text-content-secondary leading-relaxed">
            Scopri come utilizzare al meglio {SITE_CONFIG.productName} attraverso videolezioni chiare e incentrate sulle operazioni quotidiane del banco galenico.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((vid, idx) => (
            <Card key={idx} padding="none" className="bg-white border-border-subtle overflow-hidden flex flex-col justify-between">
              
              {/* Video Player Placeholder */}
              <div className="relative aspect-video bg-slate-900 flex flex-col items-center justify-center text-white p-6 text-center select-none group cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-brand-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-105 group-hover:bg-brand-500 transition-all">
                  <PlayCircle className="w-8 h-8" />
                </div>
                <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/70 text-xs font-mono text-white">
                  {vid.duration}
                </span>
                <span className="absolute top-3 left-3 text-[11px] uppercase tracking-wider font-semibold text-slate-300">
                  {vid.category}
                </span>
              </div>

              {/* Video Info */}
              <div className="p-6 space-y-2">
                <h3 className="font-bold text-heading-3 text-content-primary">
                  {vid.title}
                </h3>
                <p className="text-body-sm text-content-secondary leading-relaxed">
                  {vid.description}
                </p>
              </div>

            </Card>
          ))}
        </div>

        {/* Feedback / Suggestions */}
        <div className="bg-slate-50 border border-border-subtle rounded-xl p-8 text-center space-y-3">
          <h3 className="font-bold text-heading-3 text-content-primary">
            Vorresti un tutorial su un argomento specifico?
          </h3>
          <p className="text-body-md text-content-secondary max-w-xl mx-auto">
            Registriamo costantemente nuove guide su richiesta dei farmacisti preparatori. Scrivici quale passaggio vorresti vedere approfondito.
          </p>
          <div className="pt-2">
            <Link
              href="/contatti"
              className="inline-flex items-center text-body-sm font-semibold text-brand-700 hover:text-brand-800"
            >
              <span>Invia un suggerimento</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
