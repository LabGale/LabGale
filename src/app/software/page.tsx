
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
    "Scopri LabGale, il software desktop per la gestione del laboratorio galenico: funzionalità, architettura del database e sistemi operativi supportati.",
};

export default function SoftwarePage() {
  const productName = SITE_CONFIG.productName;

  const availablePlatforms = CURRENT_RELEASE.platforms.filter(
    (platform) => platform.isAvailable
  );

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
              del laboratorio galenico. Aiuta il farmacista a organizzare
              materie prime, schede tecniche, fogli di lavorazione, registri
              e documentazione, supportando le attività previste dalle
              Norme di Buona Preparazione.
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
                È un'applicazione informatica specializzata che permette
                di gestire in modo integrato le materie prime, le schede
                tecniche, i fogli di lavorazione, i registri e la
                documentazione del laboratorio galenico.
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
                ospedaliere che dispongono di un laboratorio galenico,
                indipendentemente dal volume di preparazioni effettuate.
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
                della farmacia. Utilizza un database MongoDB configurabile
                localmente oppure su un'infrastruttura remota compatibile.
                Non richiede un servizio cloud gestito da {productName}{" "}
                né un abbonamento obbligatorio.
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
              title="MongoDB locale oppure database remoto"
              subtitle="La farmacia può scegliere autonomamente dove archiviare le proprie informazioni, in base alla propria organizzazione e alle esigenze operative."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Database locale */}
              <div className="space-y-4">
                <h3 className="font-bold text-heading-3 text-content-primary flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-brand-600 shrink-0" />
                  <span>MongoDB in locale</span>
                </h3>

                <p className="text-body-md text-content-secondary leading-relaxed">
                  Installando MongoDB sull'infrastruttura della farmacia,
                  le informazioni possono essere conservate localmente.
                  Questa configurazione consente di lavorare anche senza
                  una connessione Internet, purché il database e i servizi
                  necessari siano disponibili sul computer o sulla rete
                  locale.
                </p>

                <p className="text-body-sm text-content-muted leading-relaxed">
                  La farmacia mantiene la responsabilità della sicurezza
                  del sistema, della gestione degli accessi e della
                  realizzazione dei backup.
                </p>
              </div>

              {/* Database remoto */}
              <div className="space-y-4">
                <h3 className="font-bold text-heading-3 text-content-primary flex items-center gap-2">
                  <HardDrive className="w-5 h-5 text-brand-600 shrink-0" />
                  <span>MongoDB remoto e multi-postazione</span>
                </h3>

                <p className="text-body-md text-content-secondary leading-relaxed">
                  Per le farmacie che utilizzano più postazioni di lavoro,
                  è possibile configurare un database MongoDB remoto,
                  ad esempio attraverso MongoDB Atlas o un'altra
                  infrastruttura compatibile.
                </p>

                <p className="text-body-sm text-content-muted leading-relaxed">
                  Le diverse installazioni possono collegarsi allo stesso
                  database, consentendo di condividere le informazioni
                  tra le postazioni. La configurazione, la protezione
                  delle credenziali e la gestione del servizio remoto
                  rimangono a carico della farmacia.
                </p>
              </div>

            </div>

            <div className="border-t border-border-subtle pt-6">
              <p className="text-body-sm text-content-muted leading-relaxed">
                {productName} non gestisce automaticamente i database
                delle farmacie e non dispone di accesso automatico
                alle informazioni archiviate. La farmacia mantiene
                il controllo sulla propria infrastruttura e sulle
                modalità di conservazione dei dati.
              </p>
            </div>
          </section>

          
          {/* Sistemi operativi */}
          <section className="space-y-6">
            <SectionHeading
              title="Sistemi operativi supportati"
              subtitle="Scegli la versione compatibile con il tuo computer. I pacchetti disponibili possono essere scaricati direttamente da questa pagina."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CURRENT_RELEASE.platforms.map((platform) => {
                const isMac = platform.os === "macos";
                const isDownloadable =
                  platform.isAvailable &&
                  platform.downloadUrl !== "#" &&
                  platform.downloadUrl.trim() !== "";

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
                        {isDownloadable ? "Disponibile" : "In arrivo"}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <p className="text-body-sm font-semibold text-content-primary">
                        {platform.architecture}
                      </p>
                      <p className="text-body-sm text-content-muted">
                        {platform.installerType}
                      </p>
                    </div>

                    {isMac && (
                      <p className="text-body-sm text-content-secondary">
                        Compatibile esclusivamente con Mac dotati di processore
                        Apple Silicon (M1 e successivi). Non supporta Mac Intel.
                      </p>
                    )}

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

                      <p className="text-body-sm text-content-muted">
                        Dimensione: {platform.fileSize}
                      </p>

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
                          Disponibile prossimamente
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
