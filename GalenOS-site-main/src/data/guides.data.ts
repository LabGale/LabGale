export interface GuideArticle {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  sections: {
    heading: string;
    content: string;
    tips?: string;
  }[];
}

export const GUIDES: GuideArticle[] = [
  {
    slug: "installazione-windows",
    title: "Guida all'installazione su Windows 10 e 11",
    category: "Installazione",
    readTime: "3 min",
    summary: "Come scaricare, installare ed eseguire il software su personal computer con sistema operativo Windows.",
    sections: [
      {
        heading: "1. Scarica il pacchetto di installazione",
        content: "Accedi alla pagina /scarica del sito ufficiale e fai clic sul pulsante 'Scarica gratis' per Windows. Il file scaricato sarà un programma di installazione (.exe o .msi) di circa 85 MB.",
      },
      {
        heading: "2. Primo avvio e avviso SmartScreen",
        content: "Al primo avvio, Windows Defender SmartScreen potrebbe mostrare una schermata informativa blu indicando 'PC protetto da Windows'. Fai clic su 'Ulteriori informazioni' e successivamente su 'Esegui comunque'. Questo messaggio compare unicamente perché il software è un rilascio recente e indipendente.",
        tips: "L'eseguibile non contiene adware o componenti invasivi. È un applicativo puro per la galenica.",
      },
      {
        heading: "3. Completamento dell'installazione",
        content: "Segui le indicazioni a video confermando la cartella di destinazione prescelta. Al termine, troverai l'icona del gestionale direttamente sul desktop del tuo PC.",
      },
    ],
  },
  {
    slug: "installazione-macos",
    title: "Guida all'installazione su Apple macOS",
    category: "Installazione",
    readTime: "3 min",
    summary: "Procedura per installare l'applicazione su macOS (Apple Silicon e processori Intel).",
    sections: [
      {
        heading: "1. Download del file immagine disco (.dmg)",
        content: "Dalla pagina /scarica, preleva la versione macOS. Verrà scaricato un file con estensione .dmg compatibile sia con processori Apple Silicon che Intel.",
      },
      {
        heading: "2. Trascina l'applicazione in Applicazioni",
        content: "Fai doppio clic sul file .dmg scaricato e trascina l'icona del software all'interno della cartella 'Applicazioni' del Mac.",
      },
      {
        heading: "3. Primo avviso di sicurezza Gatekeeper",
        content: "Al primo avvio, se compare l'avviso di sviluppatore non verificato, apri le 'Impostazioni di Sistema' di macOS, recati nella sezione 'Privacy e Sicurezza', scorri in basso fino a visualizzare l'avviso relativo all'applicazione e fai clic su 'Apri comunque'.",
      },
    ],
  },
  {
    slug: "primi-passi-carico-sostanza",
    title: "Primi Passi: Caricare la prima materia prima e il relativo lotto",
    category: "Operatività",
    readTime: "4 min",
    summary: "Guida all'inserimento di una sostanza nell'anagrafica, impostazione della purezza e caricamento del lotto con data di scadenza.",
    sections: [
      {
        heading: "1. Accesso alla sezione Sostanze",
        content: "Dalla barra laterale del programma, seleziona 'Materie Prime' e fai clic sul pulsante verde '+ Nuova Sostanza'.",
      },
      {
        heading: "2. Inserimento dati chimici e fattore di correzione",
        content: "Compila la denominazione ufficiale secondo Farmacopea Ufficiale (o INCI per preparati cosmetici), la forma fisica e il titolo/purezza. Se il titolo è diverso dal 100%, il software calcolerà automaticamente il fattore di correzione da applicare nei dosaggi.",
      },
      {
        heading: "3. Aggiunta del primo lotto di magazzino",
        content: "All'interno della scheda sostanza, fai clic su 'Aggiungi Lotto'. Specifica il codice lotto del fornitore, la data di arrivo DDT, la quantità caricata in grammi o millilitri e la data di scadenza certificata.",
        tips: "Puoi allegare subito il file PDF del Certificato di Analisi per averlo sempre a portata di mano.",
      },
    ],
  },
  {
    slug: "redazione-foglio-lavorazione",
    title: "Come compilare un Foglio di Lavorazione conforme alle NBP",
    category: "Operatività",
    readTime: "5 min",
    summary: "Passo dopo passo nella creazione della procedura di preparazione, verifica dosaggi e controlli finali di qualità.",
    sections: [
      {
        heading: "1. Selezione forma farmaceutica e ricetta",
        content: "Seleziona 'Fogli di Lavorazione' > 'Nuova Preparazione'. Scegli la forma farmaceutica (es. capsule, soluzione, crema, bustine) e indica gli estremi della ricetta medica o preparazione officinale.",
      },
      {
        heading: "2. Composizione della formula",
        content: "Aggiungi le sostanze necessarie: il programma preleverà automaticamente le quantità dai lotti con data di scadenza più prossima (metodo FEFO), mostrando la disponibilità a magazzino in tempo reale.",
      },
      {
        heading: "3. Esecuzione dei controlli e archiviazione",
        content: "Verifica l'uniformità di massa o i controlli specifici richiesti dalle Norme di Buona Preparazione. Conferma la lavorazione: il magazzino verrà scaricato istantaneamente e il foglio di lavorazione sarà archiviato in modo definitivo e stampabile.",
      },
    ],
  },
];
