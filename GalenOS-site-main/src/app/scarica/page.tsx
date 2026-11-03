import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site.config";
import { CURRENT_RELEASE } from "@/data/releases.data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Download, Monitor, HardDrive, Check, AlertTriangle, ShieldCheck, ChevronRight } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Scarica Gratis il Gestionale Galenico",
  description: "Download gratuito di [NOME PRODOTTO] per Windows, macOS e Linux. Nessun costo di licenza, installazione locale e massima privacy.",
};

export default function DownloadPage() {
  const availablePlatforms = CURRENT_RELEASE.platforms.filter((p) => p.isAvailable);

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="brand" size="md">
            Versione {CURRENT_RELEASE.version} • {CURRENT_RELEASE.releaseDate}
          </Badge>
          <h1 className="text-display md:text-[40px] font-extrabold text-content-primary tracking-tight">
            Scarica {SITE_CONFIG.productName} gratis
          </h1>
          <p className="text-body-lg text-content-secondary leading-relaxed">
            Scegli il tuo sistema operativo. Il software si installa direttamente sul tuo computer e non richiede registrazione preventiva né carta di credito.
          </p>
        </div>

        {/* Platform Download Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CURRENT_RELEASE.platforms.map((platform) => (
            <Card
              key={platform.os}
              padding="lg"
              className={`flex flex-col justify-between border-2 transition-all ${
                platform.isAvailable
                  ? "bg-white border-border-strong hover:border-brand-600 shadow-sm"
                  : "bg-slate-50 border-border-subtle opacity-75"
              }`}
            >
              <div className="space-y-4">
                
                {/* Platform Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-md bg-brand-50 border border-brand-200 text-brand-600 flex items-center justify-center">
                      <Monitor className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="font-bold text-heading-3 text-content-primary">
                        {platform.osName}
                      </h2>
                      <span className="text-[11px] text-content-muted">
                        {platform.architecture}
                      </span>
                    </div>
                  </div>
                  {platform.isAvailable ? (
                    <Badge variant="brand" size="sm">Disponibile</Badge>
                  ) : (
                    <Badge variant="neutral" size="sm">In arrivo</Badge>
                  )}
                </div>

                {/* File Specs */}
                <div className="bg-slate-50 rounded-md p-3 text-body-sm space-y-1 border border-border-subtle">
                  <div className="flex justify-between text-content-secondary">
                    <span>Formato:</span>
                    <span className="font-semibold text-content-primary">{platform.installerType}</span>
                  </div>
                  <div className="flex justify-between text-content-secondary">
                    <span>Dimensione:</span>
                    <span className="font-semibold text-content-primary">{platform.fileSize}</span>
                  </div>
                  <div className="flex justify-between text-content-secondary">
                    <span>Versione:</span>
                    <span className="font-semibold text-content-primary">{CURRENT_RELEASE.version}</span>
                  </div>
                </div>

                {/* Requirements */}
                <div className="space-y-2">
                  <h4 className="text-body-sm font-semibold text-content-primary">Requisiti minimi:</h4>
                  <ul className="space-y-1 text-body-sm text-content-secondary">
                    {platform.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* SHA256 Hash */}
                <div className="pt-2 text-[11px] text-content-muted">
                  <span className="font-mono block truncate" title={platform.sha256}>
                    SHA-256: {platform.sha256.substring(0, 16)}...
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-border-subtle">
                {platform.isAvailable ? (
                  <Button
                    href={platform.downloadUrl}
                    variant="primary"
                    size="lg"
                    className="w-full justify-center"
                    leftIcon={<Download className="w-5 h-5" />}
                  >
                    Scarica per {platform.osName}
                  </Button>
                ) : (
                  <Button
                    disabled
                    variant="outline"
                    size="lg"
                    className="w-full justify-center"
                  >
                    Prossimamente
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Sezione: Prima di Iniziare (Guida di Sicurezza e Avvio Rapido) */}
        <div className="bg-white border border-border-subtle rounded-xl p-8 md:p-10 shadow-sm space-y-6">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-md bg-amber-50 text-amber-800 border border-amber-200 mt-1 shrink-0">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-heading-3 text-content-primary">
                Prima di iniziare: Avviso informativo al primo avvio
              </h3>
              <p className="text-body-md text-content-secondary leading-relaxed">
                Essendo un software indipendente distribuito gratuitamente e privo di certificati commerciali di terze parti, al primo avvio il sistema operativo potrebbe mostrare un avviso di sicurezza:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-lg bg-slate-50 border border-border-subtle">
                  <h4 className="font-bold text-body-md text-content-primary">Su Windows (SmartScreen)</h4>
                  <p className="text-body-sm text-content-secondary mt-1">
                    Se visualizzi la finestra blu <em>"PC protetto da Windows"</em>, fai clic su <strong>"Ulteriori informazioni"</strong> e poi su <strong>"Esegui comunque"</strong>.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-slate-50 border border-border-subtle">
                  <h4 className="font-bold text-body-md text-content-primary">Su macOS (Gatekeeper)</h4>
                  <p className="text-body-sm text-content-secondary mt-1">
                    Se visualizzi l'avviso di sviluppatore non verificato, recati in <strong>Impostazioni di Sistema &gt; Privacy e Sicurezza</strong> e autorizza l'apertura con <strong>"Apri comunque"</strong>.
                  </p>
                </div>
              </div>
              <div className="pt-2">
                <Link
                  href="/assistenza/guide"
                  className="inline-flex items-center text-body-sm font-semibold text-brand-700 hover:text-brand-800"
                >
                  <span>Consulta la guida passo-passo con screenshot</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Note di Versione (Changelog) */}
        <div className="bg-slate-50 border border-border-subtle rounded-xl p-8 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-border-subtle">
            <h3 className="font-bold text-heading-3 text-content-primary">
              Note di Versione {CURRENT_RELEASE.version}
            </h3>
            <span className="text-body-sm text-content-muted">{CURRENT_RELEASE.releaseDate}</span>
          </div>
          <ul className="space-y-2 text-body-sm text-content-secondary">
            {CURRENT_RELEASE.changelog.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-[12px] text-content-muted pt-2 border-t border-border-subtle">
            L'uso del software è regolato dai <Link href="/termini" className="underline hover:text-content-primary">Termini e Condizioni di Utilizzo</Link>.
          </p>
        </div>

      </div>
    </div>
  );
}
