
import type { Metadata } from "next";
import { SITE_CONFIG } from "@/config/site.config";
import { CURRENT_RELEASE } from "@/data/releases.data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { AppMockup } from "@/components/sections/AppMockup";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import {
  HardDrive,
  ShieldCheck,
  Check,
} from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: `Il Gestionale Galenico | ${SITE_CONFIG.productName}`,
  description:
    `Scopri ${SITE_CONFIG.productName}, il software desktop per la gestione del laboratorio galenico: funzionalità, architettura del database e sistemi operativi supportati.`,
};

export default function SoftwarePage() {
  const productName = SITE_CONFIG.productName;

  return (
    <>
      <div className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Header */}
          <section className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-block px-3 py-1 text-body-sm font-semibold text-brand-700 bg-brand-50 border border-brand-200 rounded-full uppercase tracking-wider">
              Panoramica del software
            </span>

            <h1 className="text-display md:text-[40px] font-extrabold text-content-primary tracking-tight">
              Un gestionale pensato per la galenica
            </h1>

            <p className="text-body-lg text-content-secondary leading-relaxed">
              {productName} è un software desktop dedicato alla gestione
              del laboratorio galenico. Il gestionale mette a disposizione
              strumenti per organizzare le attività del laboratorio e
              supportare la gestione della documentazione e dei controlli
              previsti dalle procedure della farmacia.
            </p>
          </section>

          {/* I tre pilastri */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <Card
              padding="lg"
              className="border-border-subtle bg-white space-y-3"
            >
              <h2 className="font-bold text-heading-3 text-content-primary">
                Cos'è {productName}
              </h2>

              <p className="text-body-md text-content-secondary leading-relaxed">
                È un'applicazione desktop specializzata per la gestione del
                laboratorio galenico, con strumenti per le materie prime,
                la documentazione e i fogli di lavorazione.
              </p>
            </Card>

            <Card
              padding="lg"
              className="border-border-subtle bg-white space-y-3"
            >
              <h2 className="font-bold text-heading-3 text-content-primary">
                Per chi è pensato
              </h2>

              <p className="text-body-md text-content-secondary leading-relaxed">
                È rivolto alle farmacie aperte al pubblico e alle farmacie
                ospedaliere dotate di un laboratorio galenico.
              </p>
            </Card>

            <Card
              padding="lg"
              className="border-border-subtle bg-white space-y-3"
            >
              <h2 className="font-bold text-heading-3 text-content-primary">
                Come funziona
              </h2>

              <p className="text-body-md text-content-secondary leading-relaxed">
                È un'applicazione desktop che viene installata sul computer
                della farmacia e si collega a un database MongoDB
                configurabile.
              </p>
            </Card>

          </section>

          {/* Anteprima applicazione */}
          <section className="space-y-4">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-heading-2 font-bold text-content-primary">
                Un'interfaccia pensata per il lavoro quotidiano
              </h2>

              <p className="text-body-md text-content-secondary mt-2 leading-relaxed">
                Un ambiente di lavoro organizzato e intuitivo, con
                funzionalità dedicate alla gestione delle attività
                quotidiane del laboratorio galenico.
              </p>
            </div>

            <AppMockup />
          </section>

          {/* Architettura database */}
          <section className="bg-white border border-border-subtle rounded-xl p-8 md:p-12 shadow-sm space-y-8">
            <SectionHeading
              badge="Architettura e gestione dei dati"
              title="Un database, due possibilità di configurazione"
              subtitle="MongoDB può essere installato nell'infrastruttura locale della farmacia oppure configurato su un'infrastruttura remota compatibile."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Database locale */}
              <div className="space-y-4">
                <h3 className="font-bold text-heading-3 text-content-primary flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-brand-600 shrink-0" />
                  <span>MongoDB in locale</span>
                </h3>

                <p className="text-body-md text-content-secondary leading-relaxed">
                  MongoDB può essere installato sui computer o sui server
                  dell'infrastruttura locale della farmacia e configurato
                  per l'uso del gestionale.
                </p>

                <p className="text-body-sm text-content-muted leading-relaxed">
                  Il funzionamento senza Internet dipende dalla
                  configurazione locale, dalla rete e dai servizi necessari:
                  non è garantito in ogni scenario.
                </p>
              </div>

              {/* Database remoto */}
              <div className="space-y-4">
                <h3 className="font-bold text-heading-3 text-content-primary flex items-center gap-2">
                  <HardDrive className="w-5 h-5 text-brand-600 shrink-0" />
                  <span>MongoDB remoto e multi-postazione</span>
                </h3>

                <p className="text-body-md text-content-secondary leading-relaxed">
                  In alternativa, è possibile configurare MongoDB su
                  un'infrastruttura remota, ad esempio MongoDB Atlas o un
                  altro servizio compatibile.
                </p>

                <p className="text-body-sm text-content-muted leading-relaxed">
                  Più postazioni possono collegarsi allo stesso database
                  previa corretta configurazione.
                </p>
              </div>

            </div>

            <div className="border-t border-border-subtle pt-6">
              <p className="text-body-sm text-content-muted leading-relaxed">
                La farmacia è responsabile della gestione
                dell'infrastruttura, degli accessi e dei backup, qualunque
                sia la configurazione scelta.
              </p>
            </div>
          </section>

          
          {/* Sistemi operativi */}
          <section className="space-y-6">
            <SectionHeading
              title="Sistemi operativi supportati"
              subtitle="Il gestionale è sviluppato per Windows, macOS e Linux. Consulta lo stato delle release per verificare le versioni disponibili e i relativi requisiti."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CURRENT_RELEASE.platforms.map((platform) => {
                const hasDownloadUrl =
                  platform.downloadUrl.trim() !== "" &&
                  platform.downloadUrl !== "#";
                const isDownloadable = platform.isAvailable && hasDownloadUrl;
                const availabilityMessage = isDownloadable
                  ? "Release disponibile"
                  : platform.isAvailable
                    ? "Release disponibile, download non configurato"
                    : "Release non disponibile";

                return (
                  <Card
                    key={platform.os}
                    padding="lg"
                    className="border-border-subtle bg-white space-y-4"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-bold text-heading-3 text-content-primary">
                        {platform.osName}
                      </h3>

                      <span
                        className={`text-[11px] font-semibold px-2 py-0.5 rounded border ${
                          isDownloadable
                            ? "text-brand-700 bg-brand-50 border-brand-200"
                            : "text-content-muted bg-slate-100 border-border-subtle"
                        }`}
                      >
                        {availabilityMessage}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <p className="text-body-sm font-semibold text-content-primary">
                        {platform.architecture}
                      </p>
                      <p className="text-body-sm text-content-muted">
                        {isDownloadable ? "Formato" : "Formato previsto"}:{" "}
                        {platform.installerType}
                      </p>
                    </div>

                    <ul className="space-y-2 text-body-sm text-content-secondary">
                      {platform.requirements.map((requirement, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                          <span>{requirement}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="border-t border-border-subtle pt-4 space-y-2">
                      <p className="text-body-sm text-content-muted">
                        Versione {CURRENT_RELEASE.version}
                      </p>

                      {isDownloadable && (
                        <p className="text-body-sm text-content-muted">
                          Dimensione: {platform.fileSize}
                        </p>
                      )}

                      {isDownloadable ? (
                        <a
                          href={platform.downloadUrl}
                          className="flex items-center justify-center w-full rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3 px-4 transition-colors"
                          download
                        >
                          Scarica per {platform.osName}
                        </a>
                      ) : (
                        <span className="flex items-center justify-center w-full rounded-lg bg-slate-100 text-content-muted font-semibold py-3 px-4">
                          {platform.isAvailable
                            ? "Download non configurato"
                            : "Release non disponibile"}
                        </span>
                      )}
                    </div>
                  </Card>
                );
              })}
            </div>
          </section>


        </div>
      </div>

      {/* CTA condivisa */}
      <div className="mt-16">
        <FinalCtaSection />
      </div>
    </>
  );
}
