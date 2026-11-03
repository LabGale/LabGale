export interface FaqItem {
  question: string;
  answer: string;
  category: "prodotto" | "installazione" | "normativa" | "costi";
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    category: "costi",
    question: "Il gestionale è davvero gratuito? Ci sono costi nascosti o limitazioni a tempo?",
    answer: "Sì, il gestionale è gratuito per l'utilizzo in farmacia. Non ci sono costi di licenza, canoni mensili, limiti sul numero di preparazioni inseribili né scadenze temporali di prova. Scarichi l'applicazione, la colleghi al tuo database e la utilizzi liberamente per il tuo laboratorio.",
  },
  {
    category: "costi",
    question: "Perché il software viene distribuito gratuitamente?",
    answer: "Crediamo che la digitalizzazione, la conformità NBP e la sicurezza del laboratorio galenico debbano essere accessibili a ogni farmacia, senza costringere a sostenere canoni elevati per applicativi spesso obsoleti o rigidi. L'obiettivo è offrire uno strumento di lavoro moderno, flessibile ed eccellente.",
  },
  {
    category: "prodotto",
    question: "Come funziona la gestione del database? È in locale o in cloud?",
    answer: "Il software offre piena libertà architetturale: puoi utilizzare MongoDB installato in locale sul computer del laboratorio (ideale per garantire funzionamento offline, massima velocità e totale riservatezza dei dati dei pazienti sul tuo disco), oppure puoi configurare in autonomia una connessione al tuo cluster MongoDB Atlas (in cloud), se desideri sincronizzare più postazioni o gestire il database da remoto.",
  },
  {
    category: "installazione",
    question: "Quali sistemi operativi sono supportati?",
    answer: "L'applicazione è sviluppata con tecnologia desktop multipiattaforma ed è disponibile per Windows (Windows 10 e Windows 11 a 64 bit), macOS (sia per Mac con processori Apple Silicon sia per Mac con processori Intel) e per le principali distribuzioni Linux (Ubuntu, Debian, Fedora, ecc.).",
  },
  {
    category: "prodotto",
    question: "Come vengono protette le credenziali e le password dei fornitori?",
    answer: "La sicurezza è curata nel dettaglio: le credenziali per il download automatico dai portali dei fornitori (ACEF, Fagron, Galeno, Farmalabor, Farmarete, Esperis) e gli URI di connessione a MongoDB non sono salvati in chiaro, ma vengono custoditi nel portachiavi nativo del sistema operativo (Keychain su macOS, Credential Manager su Windows). Le password degli utenti sono protette da hashing crittografico con bcrypt.",
  },
  {
    category: "prodotto",
    question: "Come funziona il backup dei dati per prevenire perdite accidentali?",
    answer: "Il gestionale integra un runtime di backup automatico in background con schedulazione periodica. Inoltre, intercetta l'evento di chiusura dell'applicazione per eseguire un backup di sicurezza prima di uscire dalla finestra, con procedura di ripristino (restore) e audit log integrati.",
  },
  {
    category: "normativa",
    question: "Il software rispetta le Norme di Buona Preparazione (NBP) della Farmacopea Ufficiale?",
    answer: "Assolutamente sì. Tutti i flussi operativi (tracciabilità dei lotti di materie prime, fattori di correzione, fogli di lavorazione magistrali e officinali, conservazione per 6 mesi dei certificati di analisi dopo la chiusura del lotto e controlli obbligatori) sono stati progettati specificamente per aderire ai requisiti rigorosi delle Norme di Buona Preparazione.",
  },
  {
    category: "normativa",
    question: "Include strumenti per i controlli di qualità (ad esempio per le capsule)?",
    answer: "Sì. È presente un modulo dedicato al controllo di uniformità di massa per capsule rigide secondo i criteri della Farmacopea Ufficiale: campiona 20 capsule, calcola media, deviazione standard, RSD (coefficiente di variazione), verifica il rispetto delle tolleranze del ±5% e ±10% ed emette automaticamente il verbale di controllo qualità in formato PDF.",
  },
  {
    category: "normativa",
    question: "È possibile stampare etichette galeniche su stampante termica?",
    answer: "Sì, il gestionale include un modulo dedicato per la stampa su rotolo termico (formato standard 57×31 mm). Il software effettua una validazione preventiva e blocca la stampa se rileva la mancanza di dati obbligatori per legge (avvertenze, data limite di utilizzo, prezzo, posologia), permettendo di scegliere tra diversi template grafici e stampare anche codici QR.",
  },
  {
    category: "normativa",
    question: "È presente il modulo per il resoconto annuale delle sostanze dopanti?",
    answer: "Sì. Il software traccia in automatico tutte le sostanze soggette a disciplina antidoping (Legge 376/2000) impiegate durante l'anno e genera il prospetto riepilogativo per la trasmissione annuale al Ministero della Salute.",
  },
  {
    category: "installazione",
    question: "Durante l'installazione su Windows o macOS appare un avviso di sicurezza: cosa significa?",
    answer: "Trattandosi di un'applicazione indipendente non ancora firmata con costosi certificati commerciali a pagamento, Windows SmartScreen o macOS Gatekeeper potrebbero mostrare un avviso informativo al primo avvio. È sufficiente selezionare 'Ulteriori informazioni' e poi 'Esegui comunque' su Windows, oppure autorizzare l'applicazione dalle impostazioni di 'Privacy e Sicurezza' su macOS.",
  },
  {
    category: "installazione",
    question: "Quali sono i requisiti di sistema minimi consigliati?",
    answer: "Il software è leggero e reattivo. Richiede un normale computer con almeno 4 GB di RAM, un processore a 64 bit, circa 200 MB di spazio su disco fisso e l'accesso a un database MongoDB (installato in locale su porta 27017 o su un'istanza MongoDB Atlas cloud configurabile al primo avvio).",
  },
];
