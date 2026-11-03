import type { Metadata } from "next";
import { SITE_CONFIG } from "@/config/site.config";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Informativa sulla Privacy",
  description: `Informativa sul trattamento dei dati personali del sito ${SITE_CONFIG.productName}, ai sensi del Regolamento UE 2016/679 (GDPR).`,
};

export default function PrivacyPolicyPage() {
  const developer = SITE_CONFIG.company.legalName;
  const email = SITE_CONFIG.contact.email;
  const productName = SITE_CONFIG.productName;

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-3">
          <h1 className="text-display md:text-[36px] font-extrabold text-content-primary tracking-tight">
            Informativa sulla Privacy
          </h1>

          <p className="text-body-sm text-content-muted">
            Informativa ai sensi degli articoli 13 e 14 del Regolamento (UE)
            2016/679 (GDPR). Ultimo aggiornamento: 3 novembre 2026.
          </p>
        </div>

        <Card
          padding="lg"
          className="bg-white border-border-subtle space-y-8 text-body-md text-content-secondary leading-relaxed"
        >
          {/* 1. Titolare del trattamento */}
          <section className="space-y-2">
            <h2 className="text-heading-3 font-bold text-content-primary">
              1. Titolare del trattamento
            </h2>

            <p>
              Il titolare del trattamento dei dati personali raccolti
              attraverso questo sito web è:
            </p>

            <div className="bg-slate-50 p-4 rounded-lg border border-border-subtle space-y-1">
              <p className="font-semibold text-content-primary">
                {developer}
              </p>

              {SITE_CONFIG.company.address && (
                <p>{SITE_CONFIG.company.address}</p>
              )}

              <p>
                {SITE_CONFIG.company.city}
                {SITE_CONFIG.company.country
                  ? `, ${SITE_CONFIG.company.country}`
                  : ""}
              </p>

              {SITE_CONFIG.company.vatNumber && (
                <p>
                  Partita IVA: {SITE_CONFIG.company.vatNumber}
                </p>
              )}

              <p>
                Email:{" "}
                <a
                  href={`mailto:${email}`}
                  className="text-primary hover:underline"
                >
                  {email}
                </a>
              </p>
            </div>

            <p>
              Il Titolare tratta i dati personali nel rispetto del
              Regolamento (UE) 2016/679 (GDPR), del D.lgs. 196/2003 e
              successive modifiche, nonché della normativa applicabile in
              materia di protezione dei dati personali.
            </p>
          </section>

          {/* 2. Ambito dell'informativa */}
          <section className="space-y-2">
            <h2 className="text-heading-3 font-bold text-content-primary">
              2. Ambito dell'informativa
            </h2>

            <p>
              La presente informativa riguarda il trattamento dei dati
              personali effettuato attraverso il sito web di {productName},
              comprese le richieste inviate tramite gli eventuali moduli di
              contatto.
            </p>

            <p>
              L'informativa non riguarda i siti web o i servizi di terze
              parti eventualmente raggiungibili attraverso collegamenti
              presenti sul sito, per i quali si invita a consultare le
              rispettive informative privacy.
            </p>

            <p>
              Per una corretta comprensione del trattamento dei dati è
              importante distinguere tra:
            </p>

            <ul className="list-disc pl-6 space-y-1">
              <li>
                i dati personali trattati durante la navigazione e
                l'utilizzo del sito web;
              </li>
              <li>
                i dati inseriti autonomamente dalle farmacie all'interno
                del software gestionale desktop;
              </li>
              <li>
                i dati eventualmente comunicati allo Sviluppatore
                attraverso richieste di assistenza o comunicazioni
                volontarie.
              </li>
            </ul>
          </section>

          {/* 3. Dati trattati dal sito */}
          <section className="space-y-2">
            <h2 className="text-heading-3 font-bold text-content-primary">
              3. Tipologie di dati trattati attraverso il sito
            </h2>

            <h3 className="font-semibold text-content-primary">
              3.1 Dati forniti volontariamente
            </h3>

            <p>
              Quando l'utente utilizza il modulo di contatto o invia una
              comunicazione tramite email, possono essere raccolti i dati
              personali volontariamente forniti, tra cui:
            </p>

            <ul className="list-disc pl-6 space-y-1">
              <li>nome e cognome;</li>
              <li>indirizzo email;</li>
              <li>numero di telefono, se richiesto o comunicato;</li>
              <li>nome della farmacia o dell'organizzazione;</li>
              <li>contenuto del messaggio;</li>
              <li>eventuali ulteriori informazioni comunicate volontariamente.</li>
            </ul>

            <p>
              Il conferimento dei dati è facoltativo. Tuttavia, il mancato
              conferimento delle informazioni necessarie può impedire di
              rispondere correttamente alla richiesta.
            </p>

            <h3 className="font-semibold text-content-primary">
              3.2 Dati tecnici di navigazione
            </h3>

            <p>
              Durante la normale navigazione, i sistemi informatici e le
              procedure software utilizzate per il funzionamento del sito
              possono acquisire alcuni dati tecnici, la cui trasmissione
              è implicita nell'utilizzo dei protocolli di comunicazione
              Internet.
            </p>

            <p>Tra questi possono rientrare:</p>

            <ul className="list-disc pl-6 space-y-1">
              <li>indirizzo IP del dispositivo;</li>
              <li>informazioni sul browser e sul sistema operativo;</li>
              <li>data e ora della richiesta;</li>
              <li>pagine e risorse richieste;</li>
              <li>informazioni tecniche necessarie alla sicurezza e al corretto funzionamento del sito.</li>
            </ul>

            <p>
              Tali informazioni possono essere trattate anche dai fornitori
              dei servizi di hosting, distribuzione dei contenuti e
              protezione dell'infrastruttura, per finalità tecniche,
              diagnostiche e di sicurezza.
            </p>
          </section>

          {/* 4. Finalità e basi giuridiche */}
          <section className="space-y-2">
            <h2 className="text-heading-3 font-bold text-content-primary">
              4. Finalità e basi giuridiche del trattamento
            </h2>

            <p>
              I dati personali raccolti attraverso il sito sono trattati
              per le seguenti finalità:
            </p>

            <div className="space-y-4">
              <div>
                <p className="font-semibold text-content-primary">
                  A. Gestione delle richieste di contatto
                </p>

                <p>
                  Utilizzo dei dati forniti dall'utente per ricevere,
                  gestire e rispondere a richieste di informazioni sul
                  software, sulle sue funzionalità e sul progetto.
                </p>

                <p className="text-body-sm">
                  Base giuridica: esecuzione di misure precontrattuali
                  adottate su richiesta dell'interessato oppure legittimo
                  interesse del Titolare a gestire le comunicazioni
                  ricevute (art. 6, par. 1, lett. b e f GDPR, secondo
                  il caso concreto).
                </p>
              </div>

              <div>
                <p className="font-semibold text-content-primary">
                  B. Funzionamento e sicurezza del sito
                </p>

                <p>
                  Trattamento dei dati tecnici necessari alla navigazione,
                  alla gestione dell'infrastruttura e alla prevenzione
                  di attività fraudolente o accessi non autorizzati.
                </p>

                <p className="text-body-sm">
                  Base giuridica: legittimo interesse del Titolare a
                  garantire il funzionamento e la sicurezza del sito
                  (art. 6, par. 1, lett. f GDPR).
                </p>
              </div>

              <div>
                <p className="font-semibold text-content-primary">
                  C. Adempimento di obblighi di legge
                </p>

                <p>
                  Trattamento dei dati necessario per adempiere a
                  obblighi previsti dalla normativa applicabile o per
                  rispondere a richieste delle autorità competenti.
                </p>

                <p className="text-body-sm">
                  Base giuridica: adempimento di un obbligo legale
                  (art. 6, par. 1, lett. c GDPR).
                </p>
              </div>
            </div>
          </section>

          {/* 5. Web3Forms */}
          <section className="space-y-2">
            <h2 className="text-heading-3 font-bold text-content-primary">
              5. Modulo di contatto e servizi di terze parti
            </h2>

            <p>
              Il modulo di contatto presente sul sito utilizza il servizio
              <strong> Web3Forms</strong> per la trasmissione delle
              comunicazioni inviate dagli utenti.
            </p>

            <p>
              Quando l'utente invia una richiesta, i dati inseriti nel
              modulo vengono trasmessi attraverso l'infrastruttura di
              Web3Forms e successivamente inoltrati all'indirizzo email
              indicato dal Titolare.
            </p>

            <p>
              Nell'ambito di questo servizio, Web3Forms dichiara di
              trattare i dati inviati attraverso i moduli per conto del
              gestore del sito. Il trattamento è disciplinato anche dalle
              condizioni contrattuali e dall'eventuale accordo sul
              trattamento dei dati (Data Processing Agreement) del
              fornitore.
            </p>

            <p>
              Il fornitore dichiara di utilizzare infrastrutture e
              subfornitori, tra cui AWS, Cloudflare e Hetzner, per
              l'erogazione del servizio.
            </p>

            <p>
              L'utilizzo di tali infrastrutture può comportare il
              trattamento dei dati da parte di soggetti situati anche
              al di fuori dello Spazio Economico Europeo. In tali casi,
              il trasferimento deve avvenire nel rispetto delle garanzie
              previste dal GDPR e delle condizioni applicabili al
              servizio utilizzato.
            </p>

            <p>
              Per ulteriori informazioni è possibile consultare:
            </p>

            <ul className="list-disc pl-6 space-y-1">
              <li>
                <a
                  href="https://web3forms.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Informativa Privacy di Web3Forms
                </a>
              </li>
              <li>
                <a
                  href="https://web3forms.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Sito ufficiale Web3Forms
                </a>
              </li>
            </ul>

            <p>
              L'utente è invitato a non inserire nel modulo di contatto
              dati sanitari, prescrizioni mediche, informazioni
              identificative dei pazienti o altre informazioni riservate
              non necessarie alla richiesta.
            </p>
          </section>

          {/* 6. Software desktop */}
          <section className="space-y-2">
            <h2 className="text-heading-3 font-bold text-content-primary">
              6. Dati trattati dal software gestionale desktop
            </h2>

            <div className="p-4 bg-brand-50 rounded-lg border border-brand-200 text-brand-900 text-body-sm space-y-2">
              <p className="font-semibold">
                Distinzione tra sito web e software gestionale
              </p>

              <p>
                {productName} è un'applicazione desktop che utilizza un
                database MongoDB configurabile dall'utilizzatore.
                L'archiviazione può avvenire su un'infrastruttura locale
                oppure su un servizio remoto o cloud scelto autonomamente
                dalla farmacia.
              </p>
            </div>

            <p>
              Lo Sviluppatore non fornisce né gestisce automaticamente
              i database delle farmacie e non dispone di un accesso
              automatico ai dati inseriti nel software.
            </p>

            <p>
              Di conseguenza, i dati inseriti nel gestionale non vengono
              automaticamente trasmessi al sito web o allo Sviluppatore
              per il solo fatto di utilizzare il programma.
            </p>

            <p>
              La scelta e la gestione dell'infrastruttura di archiviazione
              spettano alla farmacia o al soggetto che utilizza il
              software.
            </p>

            <p>
              Qualora la farmacia utilizzi il software per trattare dati
              personali di pazienti, prescrizioni o altre informazioni
              relative alla salute, dovrà individuare autonomamente i
              ruoli privacy applicabili e adottare le misure richieste
              dalla normativa, compresa la scelta di fornitori adeguati
              e la gestione delle autorizzazioni e degli accessi.
            </p>

            <p>
              La farmacia o il soggetto che determina finalità e mezzi
              del trattamento resta responsabile degli adempimenti
              privacy relativi ai dati gestiti attraverso la propria
              infrastruttura, secondo i ruoli effettivamente ricoperti.
            </p>

            <p>
              L'eventuale trasmissione volontaria allo Sviluppatore di
              database, documenti, registrazioni, schermate o file
              contenenti dati personali per richieste di assistenza
              costituisce un trattamento distinto, da valutare in base
              alle circostanze e alle informazioni comunicate.
            </p>
          </section>

          {/* 7. Conservazione */}
          <section className="space-y-2">
            <h2 className="text-heading-3 font-bold text-content-primary">
              7. Periodo di conservazione dei dati
            </h2>

            <p>
              I dati personali vengono conservati per un periodo non
              superiore a quello necessario al conseguimento delle
              finalità per cui sono stati raccolti, nel rispetto degli
              obblighi di legge.
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Richieste di contatto:</strong> i dati vengono
                conservati per il tempo necessario a gestire la richiesta
                e le eventuali comunicazioni successive. Potranno essere
                conservati ulteriormente quando necessario per obblighi
                di legge o per la tutela dei diritti del Titolare.
              </li>

              <li>
                <strong>Email e corrispondenza:</strong> i messaggi
                ricevuti vengono conservati per il tempo necessario
                alla gestione della comunicazione e agli eventuali
                adempimenti connessi.
              </li>

              <li>
                <strong>Dati tecnici e log:</strong> i tempi di
                conservazione dipendono dalle impostazioni e dalle
                politiche dei fornitori dei servizi infrastrutturali,
                nei limiti necessari a garantire sicurezza e
                funzionamento.
              </li>

              <li>
                <strong>Dati trasmessi tramite Web3Forms:</strong> il
                fornitore dichiara nella propria informativa un periodo
                massimo di conservazione delle submission di tre anni,
                salvo condizioni differenti applicabili al servizio
                utilizzato.
              </li>
            </ul>
          </section>

          {/* 8. Destinatari */}
          <section className="space-y-2">
            <h2 className="text-heading-3 font-bold text-content-primary">
              8. Destinatari dei dati personali
            </h2>

            <p>
              I dati personali potranno essere comunicati, nei limiti
              strettamente necessari alle finalità indicate, alle
              seguenti categorie di destinatari:
            </p>

            <ul className="list-disc pl-6 space-y-1">
              <li>
                fornitori di servizi di hosting, infrastruttura e
                distribuzione dei contenuti;
              </li>
              <li>
                fornitori di servizi per la gestione e la trasmissione
                delle richieste di contatto;
              </li>
              <li>
                fornitori di servizi email e comunicazione;
              </li>
              <li>
                consulenti e professionisti incaricati, nei limiti
                delle rispettive competenze;
              </li>
              <li>
                autorità pubbliche e soggetti legittimati, quando
                previsto dalla legge.
              </li>
            </ul>

            <p>
              I soggetti che trattano dati per conto del Titolare
              possono essere designati responsabili del trattamento
              ai sensi dell'art. 28 GDPR, ove applicabile.
            </p>

            <p>
              I dati personali non vengono venduti a terzi né ceduti
              per finalità pubblicitarie.
            </p>
          </section>

          {/* 9. Trasferimenti */}
          <section className="space-y-2">
            <h2 className="text-heading-3 font-bold text-content-primary">
              9. Trasferimento dei dati verso Paesi terzi
            </h2>

            <p>
              Alcuni fornitori di servizi utilizzati per il funzionamento
              del sito potrebbero trattare dati personali in Paesi
              appartenenti o non appartenenti allo Spazio Economico
              Europeo.
            </p>

            <p>
              Qualora si verifichino trasferimenti verso Paesi terzi,
              questi dovranno essere effettuati nel rispetto degli
              articoli 44 e seguenti del GDPR, attraverso gli strumenti
              di garanzia previsti dalla normativa, quali decisioni
              di adeguatezza o clausole contrattuali standard,
              ove applicabili.
            </p>

            <p>
              Per maggiori informazioni sulle modalità di trattamento
              adottate dai singoli fornitori è possibile consultare
              le rispettive informative privacy e documentazioni
              contrattuali.
            </p>
          </section>

          {/* 10. Cookie */}
          <section className="space-y-2">
            <h2 className="text-heading-3 font-bold text-content-primary">
              10. Cookie e strumenti di tracciamento
            </h2>

            <p>
              I cookie sono piccoli file di testo che i siti web possono
              memorizzare sul dispositivo dell'utente durante la
              navigazione.
            </p>

            <p>
              Il sito {productName} non utilizza attualmente Google
              Analytics, Cookiebot o strumenti di profilazione
              pubblicitaria.
            </p>

            <p>
              Possono tuttavia essere presenti cookie tecnici o altri
              strumenti strettamente necessari al funzionamento del
              sito, alla sicurezza, alla gestione delle connessioni
              o all'erogazione dei servizi richiesti dall'utente.
            </p>

            <p>
              Per i cookie tecnici non è richiesto il consenso
              preventivo dell'utente, fermo restando l'obbligo di
              fornire l'informativa prevista dalla normativa.
            </p>

            <p>
              L'eventuale introduzione futura di cookie analitici
              non assimilabili a quelli tecnici, cookie di profilazione
              o altri strumenti di tracciamento soggetti a consenso
              comporterà l'aggiornamento della presente informativa
              e, ove necessario, l'implementazione di un sistema
              di acquisizione del consenso preventivo.
            </p>

            <p>
              L'utente può inoltre gestire le preferenze relative ai
              cookie attraverso le impostazioni del proprio browser.
            </p>
          </section>

          {/* 11. Diritti */}
          <section className="space-y-2">
            <h2 className="text-heading-3 font-bold text-content-primary">
              11. Diritti dell'interessato
            </h2>

            <p>
              In conformità agli articoli 15-22 del GDPR, l'interessato
              può esercitare, nei casi e nei limiti previsti dalla
              normativa, i seguenti diritti:
            </p>

            <ul className="list-disc pl-6 space-y-1">
              <li>
                ottenere conferma dell'esistenza o meno di dati
                personali che lo riguardano;
              </li>
              <li>ottenere l'accesso ai propri dati personali;</li>
              <li>richiedere la rettifica dei dati inesatti;</li>
              <li>richiedere la cancellazione dei dati, ove applicabile;</li>
              <li>richiedere la limitazione del trattamento;</li>
              <li>opporsi al trattamento nei casi previsti dal GDPR;</li>
              <li>
                ricevere i dati in formato strutturato e leggibile
                da dispositivo automatico, nei casi previsti dal
                diritto alla portabilità;
              </li>
              <li>
                revocare il consenso eventualmente prestato, senza
                pregiudicare la liceità del trattamento precedente
                alla revoca.
              </li>
            </ul>

            <p>
              Per esercitare i propri diritti è possibile inviare
              una richiesta all'indirizzo:
            </p>

            <p>
              <a
                href={`mailto:${email}`}
                className="text-primary hover:underline font-semibold"
              >
                {email}
              </a>
            </p>

            <p>
              Il Titolare risponderà nei termini previsti dall'art. 12
              del GDPR.
            </p>
          </section>

          {/* 12. Reclamo */}
          <section className="space-y-2">
            <h2 className="text-heading-3 font-bold text-content-primary">
              12. Diritto di reclamo
            </h2>

            <p>
              Qualora l'interessato ritenga che il trattamento dei
              propri dati personali avvenga in violazione della
              normativa applicabile, ha diritto di proporre reclamo
              al Garante per la protezione dei dati personali,
              secondo quanto previsto dall'art. 77 del GDPR.
            </p>

            <p>
              È possibile consultare il sito ufficiale dell'Autorità:
            </p>

            <p>
              <a
                href="https://www.garanteprivacy.it/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                www.garanteprivacy.it
              </a>
            </p>
          </section>

          {/* 13. Sicurezza */}
          <section className="space-y-2">
            <h2 className="text-heading-3 font-bold text-content-primary">
              13. Sicurezza dei dati
            </h2>

            <p>
              Il Titolare adotta misure tecniche e organizzative
              ragionevoli e adeguate alla natura dei dati trattati
              e alle finalità del trattamento, allo scopo di
              proteggerli da accessi non autorizzati, perdita,
              divulgazione o utilizzo improprio.
            </p>

            <p>
              Anche i fornitori dei servizi utilizzati sono tenuti
              ad adottare misure di sicurezza coerenti con i rispettivi
              obblighi contrattuali e con la normativa applicabile.
            </p>

            <p>
              Nessun sistema di trasmissione o archiviazione
              elettronica può tuttavia garantire una sicurezza
              assoluta.
            </p>
          </section>

          {/* 14. Modifiche */}
          <section className="space-y-2">
            <h2 className="text-heading-3 font-bold text-content-primary">
              14. Modifiche alla presente informativa
            </h2>

            <p>
              Il Titolare si riserva di aggiornare la presente
              informativa per adeguarla a modifiche normative,
              organizzative o tecniche, nonché all'introduzione
              di nuove funzionalità o servizi sul sito.
            </p>

            <p>
              La versione aggiornata sarà pubblicata su questa
              pagina, con indicazione della data dell'ultimo
              aggiornamento.
            </p>
          </section>

          {/* 15. Contatti */}
          <section className="space-y-2">
            <h2 className="text-heading-3 font-bold text-content-primary">
              15. Contatti
            </h2>

            <p>
              Per qualsiasi richiesta relativa al trattamento
              dei dati personali o per esercitare i diritti
              riconosciuti dal GDPR, è possibile contattare:
            </p>

            <div className="p-4 bg-slate-50 rounded-lg border border-border-subtle space-y-1">
              <p className="font-semibold text-content-primary">
                {developer}
              </p>

              <p>
                Email:{" "}
                <a
                  href={`mailto:${email}`}
                  className="text-primary hover:underline"
                >
                  {email}
                </a>
              </p>

              <p>
                Località: {SITE_CONFIG.company.city}
                {SITE_CONFIG.company.country
                  ? `, ${SITE_CONFIG.company.country}`
                  : ""}
              </p>
            </div>
          </section>

          <div className="pt-6 border-t border-border-subtle text-body-sm text-content-muted">
            <p>
              La presente informativa riguarda il sito web {productName}.
              Il trattamento dei dati effettuato dalle singole farmacie
              attraverso il software gestionale è distinto e deve essere
              valutato autonomamente dai soggetti che ne determinano
              finalità e modalità.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}