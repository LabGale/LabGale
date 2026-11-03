import type { Metadata } from "next";
import { SITE_CONFIG } from "@/config/site.config";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Termini e Condizioni di Utilizzo",
  description: `Termini e condizioni di utilizzo di ${SITE_CONFIG.productName}, software gestionale open source per laboratori galenici.`,
};

export default function TermsPage() {
  const productName = SITE_CONFIG.productName;
  const developer = SITE_CONFIG.company.legalName;

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-3">
          <h1 className="text-display md:text-[36px] font-extrabold text-content-primary tracking-tight">
            Termini e Condizioni di Utilizzo
          </h1>

          <p className="text-body-sm text-content-muted">
            Condizioni generali di utilizzo del software e del sito web.
            Ultimo aggiornamento: 3 novembre 2026.
          </p>
        </div>

        <Card
          padding="lg"
          className="bg-white border-border-subtle space-y-8 text-body-md text-content-secondary leading-relaxed"
        >
          {/* 1. Titolare del progetto */}
          <section className="space-y-2">
            <h2 className="text-heading-3 font-bold text-content-primary">
              1. Titolare del progetto
            </h2>

            <p>
              {productName} è un progetto software ideato, progettato e
              sviluppato da <strong>{developer}</strong>, di seguito
              denominato "Sviluppatore".
            </p>

            <p>
              Per informazioni, comunicazioni o richieste relative al progetto
              è possibile utilizzare i seguenti recapiti:
            </p>

            <ul className="list-disc pl-6 space-y-1">
              <li>
                Sviluppatore: <strong>{developer}</strong>
              </li>
              <li>Località: Rovereto (TN), Italia</li>
              <li>
                Email:{" "}
                <a
                  href="mailto:info@labgale.it"
                  className="text-primary hover:underline"
                >
                  info@labgale.it
                </a>
              </li>
              <li>
                Sito web:{" "}
                <a
                  href="https://www.labgale.it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  www.labgale.it
                </a>
              </li>
            </ul>
          </section>

          {/* 2. Oggetto */}
          <section className="space-y-2">
            <h2 className="text-heading-3 font-bold text-content-primary">
              2. Oggetto e ambito di applicazione
            </h2>

            <p>
              I presenti Termini e Condizioni disciplinano l'accesso al sito
              web {productName} e le condizioni generali relative alla
              distribuzione e all'utilizzo del software gestionale.
            </p>

            <p>
              {productName} è un'applicazione desktop destinata principalmente
              alle farmacie e agli operatori del settore farmaceutico che
              svolgono attività di laboratorio galenico.
            </p>

            <p>
              Il software è concepito come strumento di supporto alle attività
              organizzative, gestionali e operative del laboratorio. Non
              sostituisce le competenze professionali, le valutazioni
              scientifiche e le responsabilità previste dalla normativa
              vigente.
            </p>
          </section>

          {/* 3. Licenza open source */}
          <section className="space-y-2">
            <h2 className="text-heading-3 font-bold text-content-primary">
              3. Licenza open source e gratuità
            </h2>

            <p>
              {productName} è distribuito gratuitamente secondo i termini
              della licenza{" "}
              <strong>GNU Affero General Public License versione 3</strong>{" "}
              (AGPL-3.0).
            </p>

            <p>
              Nel rispetto delle condizioni previste dalla licenza, gli
              utilizzatori possono:
            </p>

            <ul className="list-disc pl-6 space-y-1">
              <li>utilizzare il software per finalità personali, professionali e commerciali;</li>
              <li>eseguire copie del programma;</li>
              <li>studiare il funzionamento del software;</li>
              <li>modificare il codice sorgente;</li>
              <li>redistribuire il software originale o versioni modificate;</li>
              <li>realizzare e distribuire opere derivate nel rispetto della licenza.</li>
            </ul>

            <p>
              La licenza AGPL-3.0 prevede specifici obblighi relativi alla
              conservazione delle indicazioni di copyright e di licenza e alla
              disponibilità del codice sorgente corrispondente nei casi
              previsti.
            </p>

            <p>
              In particolare, quando una versione modificata del software
              viene resa disponibile agli utenti attraverso una rete, la
              licenza prevede l'obbligo di offrire a tali utenti l'accesso al
              codice sorgente corrispondente, secondo le modalità stabilite
              dalla licenza stessa.
            </p>

            <p>
              L'utilizzo interno o privato di una versione modificata non
              comporta, di per sé, l'obbligo di pubblicarne il codice sorgente.
            </p>

            <p>
              Il testo integrale della licenza è disponibile nel file{" "}
              <code className="px-1 py-0.5 rounded bg-slate-100 text-content-primary text-sm">
                LICENSE
              </code>{" "}
              distribuito insieme al software e sul sito ufficiale GNU:
            </p>

            <p>
              <a
                href="https://www.gnu.org/licenses/agpl-3.0.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline break-all"
              >
                GNU Affero General Public License v3.0
              </a>
            </p>

            <p>
              La distribuzione di {productName} non prevede attualmente canoni
              di licenza, costi di attivazione o abbonamenti obbligatori.
            </p>

            <p>
              La gratuità del software non comprende automaticamente
              eventuali servizi o prodotti di terze parti, quali hosting,
              database cloud, assistenza tecnica, consulenza, personalizzazioni
              o infrastrutture informatiche, che possono comportare costi a
              carico dell'utilizzatore.
            </p>
          </section>

          {/* 4. Responsabilità professionale */}
          <section className="space-y-2">
            <h2 className="text-heading-3 font-bold text-content-primary">
              4. Finalità del software e responsabilità professionale
            </h2>

            <p>
              {productName} è uno strumento informatico di supporto alla
              gestione del laboratorio galenico.
            </p>

            <p>
              Le funzionalità del programma possono comprendere, a titolo
              esemplificativo:
            </p>

            <ul className="list-disc pl-6 space-y-1">
              <li>gestione delle materie prime e dei relativi dati;</li>
              <li>consultazione e gestione delle schede tecniche e delle procedure;</li>
              <li>gestione dei fogli di lavorazione;</li>
              <li>supporto ai calcoli e alla tariffazione delle preparazioni;</li>
              <li>gestione delle registrazioni e della documentazione;</li>
              <li>produzione di documenti e report.</li>
            </ul>

            <p>
              Il software non costituisce uno strumento di validazione
              scientifica, non certifica la correttezza delle preparazioni e
              non sostituisce la consultazione della Farmacopea Ufficiale,
              delle Norme di Buona Preparazione (NBP), della normativa
              applicabile e della documentazione tecnica aggiornata.
            </p>

            <div className="p-4 bg-slate-50 rounded-lg border border-border-subtle text-content-primary">
              <p className="font-semibold mb-2">
                Responsabilità del professionista
              </p>

              <p>
                La responsabilità professionale delle attività svolte in
                farmacia rimane in capo al farmacista e agli altri
                professionisti competenti, secondo i rispettivi ruoli e gli
                obblighi previsti dalla legge.
              </p>
            </div>

            <p>
              Prima di procedere con qualsiasi attività operativa,
              l'utilizzatore è tenuto a verificare autonomamente:
            </p>

            <ul className="list-disc pl-6 space-y-1">
              <li>la correttezza delle formule, dei dosaggi e dei calcoli;</li>
              <li>l'identità, la qualità e l'idoneità delle materie prime;</li>
              <li>la coerenza delle procedure adottate;</li>
              <li>la correttezza delle informazioni riportate nei documenti;</li>
              <li>
                la conformità delle preparazioni e delle attività alla
                normativa vigente.
              </li>
            </ul>

            <p>
              Eventuali valori, dati, avvisi, suggerimenti o risultati generati
              dal software devono essere considerati strumenti di supporto e
              sottoposti alle verifiche professionali necessarie.
            </p>
          </section>

          {/* 5. Database e infrastruttura */}
          <section className="space-y-2">
            <h2 className="text-heading-3 font-bold text-content-primary">
              5. Database, infrastruttura e gestione dei dati
            </h2>

            <p>
              {productName} utilizza un database MongoDB per la gestione delle
              informazioni.
            </p>

            <p>
              L'utilizzatore può configurare autonomamente l'infrastruttura di
              archiviazione, scegliendo in base alle proprie esigenze tra
              soluzioni locali e servizi esterni compatibili, compresi
              eventuali servizi cloud.
            </p>

            <p className="font-semibold text-content-primary">
              Lo Sviluppatore non fornisce né gestisce automaticamente il
              database delle singole farmacie e non ha accesso automatico ai
              dati inseriti nel software.
            </p>

            <p>
              La scelta, la configurazione e la gestione dell'infrastruttura
              informatica utilizzata rimangono a carico dell'utilizzatore,
              che è responsabile, in particolare, di:
            </p>

            <ul className="list-disc pl-6 space-y-1">
              <li>configurare correttamente il database e la relativa connessione;</li>
              <li>proteggere le credenziali di accesso;</li>
              <li>gestire gli utenti e i relativi permessi;</li>
              <li>configurare adeguatamente la sicurezza dell'infrastruttura;</li>
              <li>verificare la disponibilità e l'integrità dei dati;</li>
              <li>effettuare backup periodici e verificarne il ripristino;</li>
              <li>scegliere e valutare i fornitori di servizi esterni eventualmente utilizzati.</li>
            </ul>

            <p>
              Qualora vengano utilizzati servizi di terze parti, quali hosting
              provider o database cloud, il relativo rapporto contrattuale e
              le condizioni di erogazione del servizio sono disciplinati dai
              termini del rispettivo fornitore.
            </p>

            <p>
              Lo Sviluppatore non gestisce i database scelti autonomamente
              dalle farmacie e non risponde dei disservizi imputabili a tali
              fornitori, nei limiti consentiti dalla normativa applicabile.
            </p>
          </section>

          {/* 6. Backup */}
          <section className="space-y-2">
            <h2 className="text-heading-3 font-bold text-content-primary">
              6. Backup e conservazione dei dati
            </h2>

            <p>
              L'utilizzatore è responsabile dell'adozione di una strategia
              adeguata di backup e conservazione dei dati.
            </p>

            <p>Si raccomanda di:</p>

            <ul className="list-disc pl-6 space-y-1">
              <li>effettuare backup regolari del database;</li>
              <li>conservare copie di sicurezza in posizioni separate dall'infrastruttura principale;</li>
              <li>proteggere i backup da accessi non autorizzati;</li>
              <li>verificare periodicamente che le copie siano integre e ripristinabili;</li>
              <li>effettuare un backup prima di aggiornamenti, migrazioni o interventi significativi sul database.</li>
            </ul>

            <p>
              La presenza di eventuali funzionalità di esportazione, backup o
              ripristino all'interno del software non sostituisce la necessità
              di una strategia di sicurezza e conservazione adeguata.
            </p>

            <p>
              Lo Sviluppatore non gestisce le copie di sicurezza dei database
              delle farmacie e non dispone di una copia automatica dei dati
              archiviati dagli utilizzatori.
            </p>
          </section>

          {/* 7. Garanzie e responsabilità */}
          <section className="space-y-2">
            <h2 className="text-heading-3 font-bold text-content-primary">
              7. Garanzie e limitazioni di responsabilità
            </h2>

            <p>
              {productName} viene distribuito secondo i termini della licenza
              AGPL-3.0, che prevede specifiche clausole relative all'assenza
              di garanzia e alla limitazione di responsabilità.
            </p>

            <p>
              Nei limiti consentiti dalla legge, il software viene fornito
              nello stato in cui si trova ("AS IS"), senza garanzia che sia
              privo di errori, che funzioni senza interruzioni o che sia
              compatibile con qualsiasi configurazione hardware, software o
              infrastruttura.
            </p>

            <p>Lo Sviluppatore non garantisce:</p>

            <ul className="list-disc pl-6 space-y-1">
              <li>la disponibilità continuativa del sito web o del software;</li>
              <li>l'assenza di errori o malfunzionamenti;</li>
              <li>la compatibilità con tutte le versioni dei sistemi operativi e dei servizi esterni;</li>
              <li>l'assenza di interruzioni dovute a fattori tecnici o a fornitori terzi;</li>
              <li>la conservazione o il recupero dei dati archiviati nell'infrastruttura scelta dall'utilizzatore.</li>
            </ul>

            <p>
              Nei limiti consentiti dalla legge, lo Sviluppatore non risponde
              dei danni derivanti da:
            </p>

            <ul className="list-disc pl-6 space-y-1">
              <li>utilizzo improprio o non conforme del software;</li>
              <li>configurazioni errate del programma o del database;</li>
              <li>perdita di dati dovuta a mancati backup o a problemi dell'infrastruttura scelta dall'utilizzatore;</li>
              <li>indisponibilità o malfunzionamento di servizi di terze parti;</li>
              <li>modifiche apportate al codice sorgente da soggetti diversi dallo Sviluppatore;</li>
              <li>utilizzo di versioni modificate o non aggiornate del programma;</li>
              <li>decisioni professionali assunte sulla base di risultati non adeguatamente verificati.</li>
            </ul>

            <p>
              Restano in ogni caso ferme le responsabilità che non possono
              essere escluse o limitate ai sensi della normativa applicabile.
            </p>
          </section>

          {/* 8. Proprietà intellettuale */}
          <section className="space-y-2">
            <h2 className="text-heading-3 font-bold text-content-primary">
              8. Proprietà intellettuale e componenti di terze parti
            </h2>

            <p>
              Il codice originale di {productName}, la sua struttura, la
              documentazione e gli elementi sviluppati nell'ambito del
              progetto sono tutelati dalla normativa in materia di diritto
              d'autore.
            </p>

            <p>
              I relativi diritti appartengono ai rispettivi autori e titolari,
              secondo quanto indicato nei file di licenza e nelle attribuzioni
              presenti nel progetto.
            </p>

            <p>
              La distribuzione del software sotto licenza AGPL-3.0 non
              comporta la cessione dei diritti d'autore, ma concede agli
              utilizzatori i diritti di utilizzo, modifica e redistribuzione
              previsti dalla licenza stessa.
            </p>

            <p>
              Il progetto può includere librerie, framework, componenti e
              strumenti sviluppati da terzi, ciascuno disciplinato dalla
              propria licenza. Gli utilizzatori sono tenuti a rispettare le
              condizioni applicabili a tali componenti.
            </p>
          </section>

          {/* 9. Aggiornamenti e assistenza */}
          <section className="space-y-2">
            <h2 className="text-heading-3 font-bold text-content-primary">
              9. Aggiornamenti e assistenza
            </h2>

            <p>
              Lo Sviluppatore può rendere disponibili aggiornamenti,
              correzioni, nuove funzionalità e miglioramenti del software.
            </p>

            <p>
              Non è tuttavia garantita una frequenza prestabilita di rilascio
              degli aggiornamenti né la disponibilità continuativa di
              assistenza tecnica.
            </p>

            <p>
              L'eventuale assistenza, consulenza, personalizzazione o
              intervento tecnico potrà essere concordato separatamente tra le
              parti, con condizioni e costi da definire prima dell'erogazione
              del servizio.
            </p>

            <p>
              L'utilizzatore è responsabile della valutazione e
              dell'installazione degli aggiornamenti, nonché della verifica
              della compatibilità con la propria configurazione e
              dell'esecuzione di backup preventivi.
            </p>
          </section>

          {/* 10. Utilizzo del sito */}
          <section className="space-y-2">
            <h2 className="text-heading-3 font-bold text-content-primary">
              10. Utilizzo del sito web
            </h2>

            <p>
              Il sito web {productName} ha finalità informative e promozionali
              e fornisce informazioni sul progetto, sulle funzionalità del
              software e sulle modalità di contatto.
            </p>

            <p>
              Lo Sviluppatore si impegna a mantenere le informazioni del sito
              ragionevolmente aggiornate, senza tuttavia garantire che ogni
              contenuto sia sempre completo, aggiornato o privo di errori.
            </p>

            <p>
              I contenuti del sito non costituiscono consulenza professionale,
              normativa o informatica.
            </p>

            <p>
              È vietato utilizzare il sito in modo illecito, tentare di
              comprometterne la sicurezza o interferire con il suo normale
              funzionamento.
            </p>
          </section>

          {/* 11. Modifiche */}
          <section className="space-y-2">
            <h2 className="text-heading-3 font-bold text-content-primary">
              11. Modifiche al software e ai Termini e Condizioni
            </h2>

            <p>
              Lo Sviluppatore può modificare, aggiornare, sospendere o
              interrompere lo sviluppo e la distribuzione delle versioni
              ufficiali di {productName}.
            </p>

            <p>
              Tali attività non pregiudicano i diritti già concessi agli
              utilizzatori in relazione alle copie del software distribuite
              sotto licenza AGPL-3.0, che continuano a essere disciplinate dai
              termini della licenza applicabile.
            </p>

            <p>
              I presenti Termini e Condizioni possono essere aggiornati nel
              tempo per adeguarli all'evoluzione del progetto, alle
              funzionalità disponibili o alla normativa applicabile.
            </p>

            <p>
              La versione aggiornata sarà pubblicata su questa pagina, con
              indicazione della data dell'ultimo aggiornamento.
            </p>
          </section>

          {/* 12. Normativa */}
          <section className="space-y-2">
            <h2 className="text-heading-3 font-bold text-content-primary">
              12. Normativa applicabile
            </h2>

            <p>
              I presenti Termini e Condizioni sono disciplinati dalla legge
              italiana, fatti salvi gli eventuali diritti inderogabili
              riconosciuti dalla normativa applicabile.
            </p>

            <p>
              Per eventuali controversie sarà competente il giudice
              individuato secondo le disposizioni di legge applicabili,
              tenendo conto anche delle eventuali norme inderogabili in
              materia di tutela dei consumatori.
            </p>
          </section>

          {/* 13. Contatti */}
          <section className="space-y-2">
            <h2 className="text-heading-3 font-bold text-content-primary">
              13. Contatti
            </h2>

            <p>
              Per segnalazioni, richieste di informazioni o comunicazioni
              relative al software e ai presenti Termini e Condizioni è
              possibile contattare:
            </p>

            <div className="p-4 bg-slate-50 rounded-lg border border-border-subtle">
              <p className="font-semibold text-content-primary">
                {developer}
              </p>

              <p>
                Email:{" "}
                <a
                  href="mailto:info@labgale.it"
                  className="text-primary hover:underline"
                >
                  info@labgale.it
                </a>
              </p>

              <p>
                Sito web:{" "}
                <a
                  href="https://www.labgale.it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  www.labgale.it
                </a>
              </p>
            </div>
          </section>

          <div className="pt-6 border-t border-border-subtle text-body-sm text-content-muted">
            <p>
              {productName} è un progetto software open source distribuito
              secondo i termini della GNU Affero General Public License
              versione 3 (AGPL-3.0).
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}