import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { GUIDES } from "@/data/guides.data";
import { SITE_CONFIG } from "@/config/site.config";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ChevronRight, FileText, Check, AlertTriangle } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Guide all'Installazione e all'Uso",
  description: "Guide passo-passo per installare il software su Windows, macOS e Linux, caricare sostanze e allestire preparazioni galeniche.",
};

export default function GuidesPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-body-sm text-content-muted">
          <Link href="/" className="hover:text-content-primary transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/assistenza" className="hover:text-content-primary transition-colors">Assistenza</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-content-primary font-medium">Guide</span>
        </nav>

        {/* Header */}
        <div className="text-center space-y-4">
          <span className="inline-block px-3 py-1 text-body-sm font-semibold text-brand-700 bg-brand-50 border border-brand-200 rounded-full uppercase tracking-wider">
            Istruzioni Operative
          </span>
          <h1 className="text-display md:text-[40px] font-extrabold text-content-primary tracking-tight">
            Guide pratiche del software
          </h1>
          <p className="text-body-lg text-content-secondary leading-relaxed">
            Istruzioni dettagliate e sequenziali per configurare il software e iniziare a lavorare in laboratorio senza alcuna difficoltà tecnica.
          </p>
        </div>

        {/* Guides List */}
        <div className="space-y-8">
          {GUIDES.map((guide) => (
            <Card key={guide.slug} padding="lg" className="bg-white border-border-subtle space-y-6">
              <div className="flex items-center justify-between">
                <Badge variant="brand" size="sm">{guide.category}</Badge>
                <span className="text-body-sm text-content-muted">{guide.readTime} di lettura</span>
              </div>

              <div>
                <h2 className="text-heading-2 font-bold text-content-primary">
                  {guide.title}
                </h2>
                <p className="text-body-md text-content-secondary mt-1">
                  {guide.summary}
                </p>
              </div>

              {/* Sections / Steps */}
              <div className="space-y-4 pt-2 border-t border-border-subtle">
                {guide.sections.map((section, idx) => (
                  <div key={idx} className="p-4 rounded-lg bg-slate-50 border border-border-subtle space-y-2">
                    <h3 className="font-bold text-body-md text-content-primary">
                      {section.heading}
                    </h3>
                    <p className="text-body-sm text-content-secondary leading-relaxed">
                      {section.content}
                    </p>
                    {section.tips && (
                      <div className="flex items-start gap-2 pt-1 text-body-sm text-brand-800 bg-brand-50 p-2.5 rounded border border-brand-200">
                        <Check className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                        <span><strong>Nota:</strong> {section.tips}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

      </div>
    </div>
  );
}
