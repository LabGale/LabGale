import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site.config";
import { Card } from "@/components/ui/Card";
import { Check, ShieldCheck, HardDrive } from "@/components/ui/Icons";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";

export const metadata: Metadata = {
  title: `Perché è Gratuito? | ${SITE_CONFIG.productName}`,
  description:
    `Perché ${SITE_CONFIG.productName} viene distribuito gratuitamente, come nasce il progetto e cosa è verificabile sulla licenza e sulla gestione dei dati.`,
};

export default function WhyFreePage() {
  const productName = SITE_CONFIG.productName;

  return (
    <>
      <div className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <header className="text-center space-y-4">
            <span className="inline-block px-3 py-1 text-body-sm font-semibold text-brand-700 bg-brand-50 border border-brand-200 rounded-full uppercase tracking-wider">
              Filosofia del progetto
            </span>

            <h1 className="text-display md:text-[40px] font-extrabold text-content-primary tracking-tight">
              Perché {productName} è gratuito?
            </h1>

            <p className="text-body-lg text-content-secondary leading-relaxed">
              Un gestionale galenico professionale viene distribuito
              gratuitamente per rendere accessibile alle farmacie uno
              strumento informatico dedicato al laboratorio galenico.
            </p>
          </header>

          <section className="space-y-5">
            <h2 className="text-heading-2 font-bold text-content-primary">
              Perché è gratuito
            </h2>

            <Card
              padding="lg"
              className="bg-white border-border-subtle space-y-4"
            >
              <p className="text-body-md text-content-secondary leading-relaxed">
                {productName} nasce per rispondere alle esigenze delle
                farmacie con laboratorio galenico. L'obiettivo è sviluppare
                uno strumento specializzato e accessibile, per farmacie
                aperte al pubblico e ospedaliere.
              </p>

              <ul className="space-y-2 text-body-md text-content-secondary">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                  <span>Il gestionale è distribuito gratuitamente.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                  <span>Non è previsto un canone obbligatorio per utilizzarlo.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                  <span>
                    Il progetto è dedicato alle attività del laboratorio
                    galenico.
                  </span>
                </li>
              </ul>
            </Card>
          </section>

          <section className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-lg bg-brand-50 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-brand-700" />
              </div>
              <h2 className="text-heading-2 font-bold text-content-primary">
                Codice sorgente e licenza AGPL-3.0
              </h2>
            </div>

            <p className="text-body-md text-content-secondary leading-relaxed">
              Il codice sorgente è pubblicato nel{" "}
              <a
                href="https://github.com/LabGale/LabGale"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand-700 hover:underline"
              >
                repository del progetto
              </a>
              . {productName} è distribuito secondo i termini della GNU Affero
              General Public License versione 3 (AGPL-3.0).
            </p>

            <p className="text-body-md text-content-secondary leading-relaxed">
              La licenza consente di utilizzare, studiare, modificare e
              redistribuire il software nel rispetto delle sue condizioni.
              Prevede inoltre specifici obblighi per le versioni modificate
              rese disponibili attraverso una rete, compresi quelli relativi
              all'accesso al codice sorgente corrispondente.
            </p>

            <a
              href="https://www.gnu.org/licenses/agpl-3.0.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-body-sm font-semibold text-brand-700 hover:underline"
            >
              Consulta il testo ufficiale della GNU AGPL-3.0 →
            </a>
          </section>

          <section className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-lg bg-brand-50 flex items-center justify-center shrink-0">
                <HardDrive className="w-6 h-6 text-brand-700" />
              </div>
              <h2 className="text-heading-2 font-bold text-content-primary">
                Gestione dei dati
              </h2>
            </div>

            <p className="text-body-md text-content-secondary leading-relaxed">
              Il gestionale utilizza MongoDB; la farmacia può scegliere un
              database locale o remoto. La scelta e la gestione
              dell'infrastruttura e dei dati sono responsabilità
              dell'utilizzatore. Per i dettagli sulla configurazione, consulta
              la pagina{" "}
              <Link
                href="/software"
                className="font-semibold text-brand-700 hover:underline"
              >
                Software
              </Link>
              .
            </p>
          </section>

          <section className="bg-white border border-border-subtle rounded-xl p-8 space-y-4">
            <h2 className="text-heading-2 font-bold text-content-primary">
              Sviluppo e sostenibilità
            </h2>

            <p className="text-body-md text-content-secondary leading-relaxed">
              {productName} è un progetto indipendente, ideato, progettato e
              sviluppato da {SITE_CONFIG.company.legalName}. Sviluppo e
              manutenzione richiedono tempo e risorse; la distribuzione
              gratuita e la pubblicazione del codice sorgente riflettono la
              volontà di mantenere accessibile uno strumento specializzato
              per le farmacie.
            </p>

            <p className="text-body-sm text-content-muted leading-relaxed">
              La disponibilità di aggiornamenti e di eventuale assistenza
              futura non è garantita a tempo indeterminato.
            </p>
          </section>
        </div>
      </div>

      <FinalCtaSection />
    </>
  );
}
