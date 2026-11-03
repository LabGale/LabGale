import type { Metadata } from "next";
import { SITE_CONFIG } from "@/config/site.config";
import { Card } from "@/components/ui/Card";
import { Check, ShieldCheck, HardDrive } from "@/components/ui/Icons";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";

export const metadata: Metadata = {
  title: `Perché è Gratuito? | ${SITE_CONFIG.productName}`,
  description:
    "Scopri perché LabGale è gratuito e open source, come funziona la licenza AGPL-3.0 e come vengono gestiti i dati del laboratorio galenico.",
};

export default function WhyFreePage() {
  const productName = SITE_CONFIG.productName;

  return (
    <>
      <div className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Header */}
          <div className="text-center space-y-4">
            <span className="inline-block px-3 py-1 text-body-sm font-semibold text-brand-700 bg-brand-50 border border-brand-200 rounded-full uppercase tracking-wider">
              Trasparenza e filosofia open source
            </span>

            <h1 className="text-display md:text-[40px] font-extrabold text-content-primary tracking-tight">
              Perché {productName} è gratuito?
            </h1>

            <p className="text-body-lg text-content-secondary leading-relaxed">
              Un gestionale professionale per il laboratorio galenico,
              disponibile gratuitamente e con codice sorgente aperto.
              Nessun abbonamento obbligatorio, nessun costo di attivazione
              e nessun vincolo legato a un servizio cloud gestito
              dallo sviluppatore.
            </p>
          </div>

          {/* Cosa offre */}
          <section className="space-y-6">
            <h2 className="text-heading-2 font-bold text-content-primary">
              Cosa significa utilizzare {productName}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <Card padding="md" className="bg-white border-border-subtle">
                <h3 className="font-bold text-body-md text-content-primary flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-600" />
                  <span>Nessun abbonamento obbligatorio</span>
                </h3>

                <p className="text-body-sm text-content-secondary mt-2">
                  Il software viene distribuito gratuitamente. Non sono
                  previsti canoni di attivazione, rinnovi periodici o
                  abbonamenti obbligatori per utilizzare la versione
                  ufficiale disponibile.
                </p>
              </Card>

              <Card padding="md" className="bg-white border-border-subtle">
                <h3 className="font-bold text-body-md text-content-primary flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-600" />
                  <span>Codice sorgente aperto</span>
                </h3>

                <p className="text-body-sm text-content-secondary mt-2">
                  {productName} è distribuito con licenza GNU AGPL-3.0.
                  Il codice può essere consultato, modificato e
                  redistribuito nel rispetto delle condizioni della
                  licenza.
                </p>
              </Card>

              <Card padding="md" className="bg-white border-border-subtle">
                <h3 className="font-bold text-body-md text-content-primary flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-600" />
                  <span>I dati restano sotto il tuo controllo</span>
                </h3>

                <p className="text-body-sm text-content-secondary mt-2">
                  La farmacia sceglie autonomamente dove archiviare
                  le proprie informazioni: su un database MongoDB
                  locale oppure su un'infrastruttura remota o cloud
                  compatibile.
                </p>
              </Card>

              <Card padding="md" className="bg-white border-border-subtle">
                <h3 className="font-bold text-body-md text-content-primary flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-600" />
                  <span>Nessuna dipendenza da un cloud proprietario</span>
                </h3>

                <p className="text-body-sm text-content-secondary mt-2">
                  Il programma è un'applicazione desktop. Non richiede
                  un account presso un servizio cloud gestito da
                  {` ${productName}`} per funzionare. L'infrastruttura
                  del database viene scelta e gestita autonomamente
                  dall'utilizzatore.
                </p>
              </Card>

            </div>
          </section>

          {/* Visione */}
          <section className="bg-white border border-border-subtle rounded-xl p-8 space-y-4">
            <h2 className="text-heading-2 font-bold text-content-primary">
              Una visione per la galenica
            </h2>

            <p className="text-body-md text-content-secondary leading-relaxed">
              La galenica rappresenta una componente fondamentale
              della professione del farmacista: permette di realizzare
              preparazioni personalizzate quando le specialità
              medicinali disponibili non rispondono alle specifiche
              esigenze del paziente.
            </p>

            <p className="text-body-md text-content-secondary leading-relaxed">
              La gestione di un laboratorio comporta però numerosi
              adempimenti organizzativi, documentali e operativi.
              Disporre di strumenti informatici adeguati può contribuire
              a rendere queste attività più ordinate ed efficienti.
            </p>

            <p className="text-body-md text-content-secondary leading-relaxed">
              {productName} nasce con questa idea: mettere a disposizione
              delle farmacie uno strumento digitale dedicato alla gestione
              del laboratorio galenico, senza introdurre un ulteriore
              costo obbligatorio per l'utilizzo del software.
            </p>
          </section>

          {/* Perché open source */}
          <section className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-lg bg-brand-50 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-brand-700" />
              </div>

              <div>
                <h2 className="text-heading-2 font-bold text-content-primary">
                  Perché la licenza AGPL-3.0?
                </h2>

                <p className="text-body-sm text-content-muted">
                  Libertà di utilizzo e trasparenza del codice
                </p>
              </div>
            </div>

            <p className="text-body-md text-content-secondary leading-relaxed">
              La scelta della licenza GNU Affero General Public License
              versione 3 (AGPL-3.0) riflette la volontà di mantenere
              {` ${productName}`} un progetto open source anche nella sua
              evoluzione.
            </p>

            <p className="text-body-md text-content-secondary leading-relaxed">
              La licenza consente a chiunque di utilizzare, studiare,
              modificare e redistribuire il software, anche per finalità
              commerciali, nel rispetto delle condizioni previste.
            </p>

            <p className="text-body-md text-content-secondary leading-relaxed">
              In particolare, la AGPL-3.0 tutela la disponibilità del
              codice sorgente anche quando una versione modificata
              viene resa accessibile attraverso una rete, prevedendo
              specifici obblighi di messa a disposizione del sorgente
              corrispondente.
            </p>

            <div className="p-4 rounded-lg bg-brand-50 border border-brand-200 space-y-2">
              <p className="font-semibold text-brand-900">
                Il codice non è una scatola chiusa
              </p>

              <p className="text-body-sm text-brand-900">
                La licenza permette di verificare il funzionamento
                del programma, contribuire al suo sviluppo e realizzare
                versioni modificate nel rispetto delle regole open source.
              </p>

              <a
                href="https://www.gnu.org/licenses/agpl-3.0.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-body-sm font-semibold text-brand-700 hover:underline"
              >
                Consulta il testo integrale della licenza AGPL-3.0 →
              </a>
            </div>
          </section>

          {/* Gestione dati */}
          <section className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-lg bg-brand-50 flex items-center justify-center shrink-0">
                <HardDrive className="w-6 h-6 text-brand-700" />
              </div>

              <div>
                <h2 className="text-heading-2 font-bold text-content-primary">
                  I dati e la libertà di scelta
                </h2>

                <p className="text-body-sm text-content-muted">
                  La farmacia decide dove archiviare le proprie informazioni
                </p>
              </div>
            </div>

            <p className="text-body-md text-content-secondary leading-relaxed">
              {productName} utilizza MongoDB come sistema di archiviazione.
              La farmacia può scegliere se utilizzare un database
              installato sulla propria infrastruttura oppure un servizio
              remoto compatibile.
            </p>

            <p className="text-body-md text-content-secondary leading-relaxed">
              Lo sviluppatore non gestisce automaticamente i database
              delle singole farmacie e non ha accesso automatico alle
              informazioni inserite nel gestionale.
            </p>

            <p className="text-body-md text-content-secondary leading-relaxed">
              La configurazione dell'infrastruttura, la protezione
              delle credenziali, la gestione degli accessi e i backup
              rimangono responsabilità dell'utilizzatore.
            </p>

            <p className="text-body-md text-content-secondary leading-relaxed">
              Questa architettura permette alla farmacia di mantenere
              il controllo sulla propria infrastruttura senza dipendere
              da un servizio di archiviazione centralizzato gestito
              dal progetto.
            </p>
          </section>

          {/* Sostenibilità */}
          <section className="bg-white border border-border-subtle rounded-xl p-8 space-y-4">
            <h2 className="text-heading-2 font-bold text-content-primary">
              Come viene sostenuto il progetto?
            </h2>

            <p className="text-body-md text-content-secondary leading-relaxed">
              {productName} è un progetto indipendente ideato, progettato
              e sviluppato da {SITE_CONFIG.company.legalName}.
            </p>

            <p className="text-body-md text-content-secondary leading-relaxed">
              Lo sviluppo e la manutenzione richiedono tempo e risorse.
              La scelta di distribuire il software gratuitamente nasce
              dalla volontà di rendere accessibile uno strumento dedicato
              alla galenica, mantenendo aperto il codice sorgente.
            </p>

            <p className="text-body-md text-content-secondary leading-relaxed">
              Eventuali servizi aggiuntivi, come assistenza tecnica,
              formazione, consulenza o personalizzazioni, potranno
              essere proposti separatamente e su base facoltativa.
              Tali servizi non costituiscono un requisito per utilizzare
              la versione open source del programma.
            </p>

            <p className="text-body-sm text-content-muted">
              La disponibilità di aggiornamenti, nuove funzionalità
              e assistenza non è garantita a tempo indeterminato.
              Il software già distribuito continua comunque a essere
              disciplinato dalla licenza AGPL-3.0 applicabile.
            </p>
          </section>

        </div>
      </div>

      {/* CTA condivisa */}
      <FinalCtaSection />
    </>
  );
}
