export const FEATURE_CATEGORIES = [
  "Materie prime e cataloghi",
  "Registrazione e tracciabilità",
  "Procedure e fogli di lavorazione",
  "Tariffazione e preventivi",
  "Documentazione ed etichette",
  "Controlli e strumenti di supporto",
  "Gestione e sicurezza",
] as const;

export type FeatureCategory = (typeof FEATURE_CATEGORIES)[number];

export interface FeatureDetail {
  slug: string;
  title: string;
  shortTitle: string;
  shortDescription: string;
  fullDescription: string;
  problemSolved: string;
  howItWorks: string[];
  benefits: string[];
  icon: string;
  relatedSlugs: string[];
}

export interface CategorizedFeatureDetail extends FeatureDetail {
  category: FeatureCategory;
}

export const FEATURES: CategorizedFeatureDetail[] = [
  {
    slug: "sostanze",
    category: "Materie prime e cataloghi",
    title: "Materie prime e cataloghi",
    shortTitle: "Materie prime",
    shortDescription:
      "Consulta le voci disponibili nel catalogo condiviso e gestisci anagrafiche personali di materie prime, formati e identificativi.",
    fullDescription:
      "La funzione riunisce la ricerca nel catalogo comune e la gestione delle anagrafiche personali. Le voci già utilizzate possono essere disattivate anziché eliminate.",
    problemSolved:
      "Riunisce la ricerca delle materie prime e la gestione dei dati specifici della farmacia.",
    howItWorks: [
      "Ricerca e consultazione dei dati disponibili nel catalogo condiviso.",
      "Creazione e modifica delle anagrafiche personali, con formati e identificativi.",
      "Disattivazione delle voci personali già utilizzate.",
    ],
    benefits: [],
    icon: "FlaskConical",
    relatedSlugs: ["fornitori", "registrazione-acquisti", "schede-tecniche"],
  },
  {
    slug: "fornitori",
    category: "Materie prime e cataloghi",
    title: "Fornitori",
    shortTitle: "Fornitori",
    shortDescription:
      "Gestisci i dati anagrafici dei fornitori e consulta le registrazioni associate.",
    fullDescription:
      "La scheda fornitore raccoglie i riferimenti utili alla gestione degli acquisti di materie prime.",
    problemSolved:
      "Raccoglie in un unico punto i dati dei fornitori utilizzati dalla farmacia.",
    howItWorks: [
      "Gestione dell'anagrafica e dei riferimenti del fornitore.",
      "Consultazione delle registrazioni associate.",
    ],
    benefits: [],
    icon: "Truck",
    relatedSlugs: ["sostanze", "registrazione-acquisti", "documentazione"],
  },
  {
    slug: "registrazione-acquisti",
    category: "Registrazione e tracciabilità",
    title: "Registrazione degli acquisti",
    shortTitle: "Registrazione acquisti",
    shortDescription:
      "Registra materia prima, fornitore, lotto, scadenza, quantità, prezzo e riferimenti d'acquisto.",
    fullDescription:
      "Il flusso assegna il numero interno previsto e gestisce i documenti associati attraverso passaggi distinti. Verifica lo stato della registrazione e completa i passaggi richiesti: le operazioni non costituiscono un'unica transazione atomica.",
    problemSolved:
      "Raccoglie i principali dati dell'acquisto nella registrazione della materia prima.",
    howItWorks: [
      "Inserimento dei dati della materia prima e dell'acquisto.",
      "Associazione di fornitore, lotto, scadenza, quantità e prezzo.",
      "Assegnazione del numero interno e gestione dei documenti nei passaggi previsti.",
      "Verifica dell'esito delle singole fasi della registrazione.",
    ],
    benefits: [],
    icon: "FlaskConical",
    relatedSlugs: [
      "importazione-ddt",
      "registro-sostanze",
      "giacenze",
      "documentazione",
    ],
  },
  {
    slug: "importazione-ddt",
    category: "Registrazione e tracciabilità",
    title: "Importazione assistita dei DDT",
    shortTitle: "Importazione DDT",
    shortDescription:
      "Carica PDF supportati, rivedi i dati riconosciuti e abbina le righe alle voci presenti prima della registrazione.",
    fullDescription:
      "L'importazione precompila le informazioni riconosciute nei documenti supportati e assiste l'abbinamento delle righe. Le registrazioni in blocco avvengono dopo la verifica e la conferma dell'operatore.",
    problemSolved:
      "Supporta la trascrizione dei dati da un DDT senza sostituire la revisione dell'operatore.",
    howItWorks: [
      "Caricamento di un PDF supportato.",
      "Revisione dei dati e delle righe riconosciute.",
      "Abbinamento con le voci di catalogo e conferma prima della registrazione.",
    ],
    benefits: [],
    icon: "FolderArchive",
    relatedSlugs: ["registrazione-acquisti", "sostanze", "fornitori"],
  },
  {
    slug: "registro-sostanze",
    category: "Registrazione e tracciabilità",
    title: "Registro e movimenti",
    shortTitle: "Registro e movimenti",
    shortDescription:
      "Consulta le registrazioni e gestisci i passaggi applicativi legati ai pezzi, dagli utilizzi alle uscite.",
    fullDescription:
      "Il registro raccoglie le operazioni inserite nel gestionale e i relativi movimenti. I dati registrati non attestano operazioni fisiche che non siano state inserite.",
    problemSolved:
      "Permette di consultare le registrazioni e i movimenti associati alle materie prime.",
    howItWorks: [
      "Consultazione delle registrazioni e dei movimenti collegati.",
      "Gestione applicativa di aperture, utilizzi, residui e uscite.",
      "Rettifiche con motivazione.",
    ],
    benefits: [],
    icon: "ClipboardCheck",
    relatedSlugs: ["registrazione-acquisti", "giacenze", "fogli-lavorazione"],
  },
  {
    slug: "giacenze",
    category: "Registrazione e tracciabilità",
    title: "Giacenze e rettifiche",
    shortTitle: "Giacenze",
    shortDescription:
      "Consulta residui e movimenti registrati, inserisci rettifiche motivate ed esporta i dati in CSV.",
    fullDescription:
      "La schermata delle giacenze mostra le quantità e i movimenti registrati nel gestionale. La consultazione non sostituisce la verifica delle scorte fisiche.",
    problemSolved:
      "Rende consultabili le giacenze applicative e i movimenti che le compongono.",
    howItWorks: [
      "Consultazione di giacenze e residui.",
      "Esame del dettaglio dei movimenti registrati.",
      "Rettifica manuale con motivazione ed esportazione CSV.",
    ],
    benefits: [],
    icon: "Boxes",
    relatedSlugs: ["registro-sostanze", "registrazione-acquisti", "fornitori"],
  },
  {
    slug: "schede-tecniche",
    category: "Procedure e fogli di lavorazione",
    title: "Procedure e schede tecniche",
    shortTitle: "Procedure e schede",
    shortDescription:
      "Crea, modifica e consulta schede con dati di preparazione, componenti e istruzioni inseriti dall'utente.",
    fullDescription:
      "Le schede raccolgono le informazioni e le istruzioni inserite dall'utente per materie prime e preparazioni. È possibile produrre un PDF per la consultazione.",
    problemSolved:
      "Raccoglie le informazioni di preparazione e le relative istruzioni in schede consultabili.",
    howItWorks: [
      "Creazione, modifica e consultazione delle schede.",
      "Inserimento di componenti e istruzioni operative.",
      "Generazione di un PDF della scheda.",
    ],
    benefits: [],
    icon: "FileSpreadsheet",
    relatedSlugs: ["sostanze", "fogli-lavorazione"],
  },
  {
    slug: "fogli-lavorazione",
    category: "Procedure e fogli di lavorazione",
    title: "Fogli di lavorazione",
    shortTitle: "Fogli di lavorazione",
    shortDescription:
      "Compila e salva fogli magistrali e officinali collegati a procedure e componenti.",
    fullDescription:
      "Il gestionale mette a disposizione controlli formali e registra i movimenti applicativi collegati al foglio. La compilazione non sostituisce le verifiche professionali sulla formula e sulla preparazione.",
    problemSolved:
      "Organizza i dati del foglio di lavorazione e le informazioni collegate alla preparazione.",
    howItWorks: [
      "Compilazione e salvataggio di fogli magistrali e officinali.",
      "Collegamento a procedure e componenti.",
      "Controlli formali e registrazione applicativa dei movimenti collegati.",
      "Generazione del documento a partire dai dati inseriti.",
    ],
    benefits: [],
    icon: "ClipboardCheck",
    relatedSlugs: [
      "schede-tecniche",
      "registro-sostanze",
      "preventivi",
      "etichette",
      "controllo-capsule",
    ],
  },
  {
    slug: "preventivi",
    category: "Tariffazione e preventivi",
    title: "Tariffazione e preventivi",
    shortTitle: "Tariffazione e preventivi",
    shortDescription:
      "Calcola prezzi e totali e gestisci preventivi con più preparazioni sulla base dei dati e delle opzioni configurate.",
    fullDescription:
      "Il calcolo utilizza prezzi, tabelle e scelte configurate o inserite dall'operatore; non garantisce che i valori coincidano con quelli vigenti. I preventivi possono essere salvati, riaperti e generati in PDF.",
    problemSolved:
      "Raccoglie i dati di prezzo e le scelte effettuate per preparare un calcolo o un preventivo.",
    howItWorks: [
      "Inserimento o selezione dei prezzi e delle opzioni di calcolo.",
      "Calcolo dei totali sulla base dei dati disponibili.",
      "Gestione di preventivi multipreparazione con destinatario e note.",
      "Salvataggio, riapertura e generazione del PDF.",
    ],
    benefits: [],
    icon: "Calculator",
    relatedSlugs: ["fogli-lavorazione", "storico-prezzi"],
  },
  {
    slug: "storico-prezzi",
    category: "Tariffazione e preventivi",
    title: "Storico dei prezzi d'acquisto",
    shortTitle: "Storico prezzi",
    shortDescription:
      "Cerca e confronta i prezzi presenti nelle registrazioni d'acquisto salvate.",
    fullDescription:
      "Lo storico si basa sugli acquisti registrati e permette di consultare i confronti disponibili. Non è un listino esterno o in tempo reale.",
    problemSolved:
      "Aiuta a consultare i prezzi d'acquisto già presenti nel registro.",
    howItWorks: [
      "Ricerca per materia prima, numero interno, ditta o fornitore.",
      "Consultazione e confronto dei prezzi registrati.",
      "Visualizzazione dei dati disponibili nello storico.",
    ],
    benefits: [],
    icon: "Calculator",
    relatedSlugs: ["registrazione-acquisti", "fornitori", "preventivi"],
  },
  {
    slug: "documentazione",
    category: "Documentazione ed etichette",
    title: "Documenti delle materie prime",
    shortTitle: "Documenti",
    shortDescription:
      "Gestisci DDT, certificati di analisi e SDS associati alle registrazioni, con caricamento e consultazione dei documenti.",
    fullDescription:
      "Puoi caricare, aprire, scaricare e gestire DDT, certificati di analisi e SDS. Il download è disponibile per i provider supportati e dipende dall'accesso e dalla disponibilità del servizio.",
    problemSolved:
      "Raccoglie i documenti associati alle registrazioni delle materie prime.",
    howItWorks: [
      "Caricamento e apertura dei documenti disponibili.",
      "Download dai provider supportati, quando il servizio è disponibile.",
      "Filtri per individuare registrazioni con documenti mancanti.",
      "Gestione dei documenti secondo le operazioni disponibili per ciascun tipo.",
    ],
    benefits: [],
    icon: "FolderArchive",
    relatedSlugs: ["registrazione-acquisti", "fornitori", "sostanze"],
  },
  {
    slug: "etichette",
    category: "Documentazione ed etichette",
    title: "Etichette in PDF",
    shortTitle: "Etichette",
    shortDescription:
      "Crea un'anteprima, scegli un modello, modifica le descrizioni e genera etichette singole o in batch dai fogli.",
    fullDescription:
      "La funzione compone etichette in PDF a partire dai fogli di lavorazione. La stampa fisica dipende dalla stampante e dalla configurazione utilizzata.",
    problemSolved:
      "Supporta la preparazione di etichette a partire dai dati presenti nei fogli.",
    howItWorks: [
      "Selezione del foglio e del modello di etichetta.",
      "Anteprima e modifica delle descrizioni.",
      "Generazione del PDF singolo o in batch.",
    ],
    benefits: [],
    icon: "Tag",
    relatedSlugs: ["fogli-lavorazione", "documentazione"],
  },
  {
    slug: "controllo-capsule",
    category: "Controlli e strumenti di supporto",
    title: "Controllo capsule",
    shortTitle: "Controllo capsule",
    shortDescription:
      "Inserisci i pesi rilevati e consulta gli indicatori calcolati dal gestionale, con possibilità di salvataggio e PDF.",
    fullDescription:
      "Il calcolo elabora i valori inseriti dall'operatore e può essere salvato e riportato in un PDF. Il risultato non certifica il metodo o il controllo effettuato.",
    problemSolved:
      "Fornisce un supporto di calcolo per i dati inseriti durante il controllo delle capsule.",
    howItWorks: [
      "Inserimento dei pesi dei campioni.",
      "Calcolo degli indicatori implementati, tra cui media, deviazione standard e RSD.",
      "Salvataggio del controllo e generazione del PDF.",
    ],
    benefits: [],
    icon: "Scale",
    relatedSlugs: ["fogli-lavorazione", "calcoli-conversioni"],
  },
  {
    slug: "calcoli-conversioni",
    category: "Controlli e strumenti di supporto",
    title: "Calcoli e conversioni",
    shortTitle: "Calcoli e conversioni",
    shortDescription:
      "Usa strumenti per quantità, percentuali e conversioni, inclusa la diluizione alcolica, in base ai parametri disponibili.",
    fullDescription:
      "Gli strumenti eseguono ricalcoli aritmetici e conversioni usando i dati forniti o configurati. Non costituiscono una validazione generale della formula o dei dati di partenza.",
    problemSolved:
      "Riunisce calcoli di supporto utilizzabili durante la preparazione dei dati.",
    howItWorks: [
      "Ricalcolo di quantità e percentuali della composizione.",
      "Conversioni basate sui parametri disponibili.",
      "Calcolo della diluizione alcolica con i parametri configurati.",
    ],
    benefits: [],
    icon: "Calculator",
    relatedSlugs: ["fogli-lavorazione", "schede-tecniche", "controllo-capsule"],
  },
  {
    slug: "banca-dati-aifa",
    category: "Controlli e strumenti di supporto",
    title: "Ricerca farmaci online",
    shortTitle: "Ricerca farmaci",
    shortDescription:
      "Cerca online e consulta o esporta le informazioni rese disponibili dal servizio al momento della ricerca.",
    fullDescription:
      "La ricerca online permette di consultare le informazioni disponibili attraverso il servizio collegato. Disponibilità e aggiornamento dipendono dalla fonte online.",
    problemSolved:
      "Offre un punto di accesso per consultare i risultati disponibili della ricerca farmaci.",
    howItWorks: [
      "Ricerca online per farmaco o principio attivo.",
      "Consultazione dei risultati disponibili, inclusi i dettagli mostrati dal servizio.",
      "Esportazione delle informazioni consultabili.",
    ],
    benefits: [],
    icon: "Pill",
    relatedSlugs: ["sostanze", "schede-tecniche", "fogli-lavorazione"],
  },
  {
    slug: "riepilogo-dopanti",
    category: "Controlli e strumenti di supporto",
    title: "Riepilogo preparazioni con sostanze dopanti",
    shortTitle: "Riepilogo dopanti",
    shortDescription:
      "Consulta aggregazioni annuali, anomalie e annotazioni dello stato dichiarato dall'operatore.",
    fullDescription:
      "Il riepilogo raccoglie i dati disponibili e permette di registrare internamente uno stato dichiarato dall'operatore. Non invia comunicazioni alle autorità né verifica i riferimenti inseriti.",
    problemSolved:
      "Aiuta a consultare le informazioni annuali disponibili e le anomalie da verificare.",
    howItWorks: [
      "Consultazione del riepilogo per anno.",
      "Esame delle anomalie evidenziate.",
      "Registrazione interna dello stato dichiarato dall'operatore.",
    ],
    benefits: [],
    icon: "ShieldAlert",
    relatedSlugs: ["registro-sostanze", "fogli-lavorazione"],
  },
  {
    slug: "utenti-configurazioni",
    category: "Gestione e sicurezza",
    title: "Utenti e configurazioni",
    shortTitle: "Utenti e configurazioni",
    shortDescription:
      "Gestisci gli account associati alla farmacia e configura i dati della farmacia e del laboratorio.",
    fullDescription:
      "La gestione comprende account e impostazioni disponibili nell'applicazione. Le funzionalità di accesso dipendono dalla configurazione e non rappresentano una promessa di autorizzazioni granulari per ogni operazione.",
    problemSolved:
      "Raccoglie in un'unica area la gestione degli account e delle impostazioni del laboratorio.",
    howItWorks: [
      "Gestione degli account associati alla farmacia.",
      "Configurazione dei dati della farmacia e dei parametri del laboratorio.",
      "Accesso alle impostazioni disponibili in base alla configurazione.",
    ],
    benefits: [],
    icon: "ShieldAlert",
    relatedSlugs: ["backup-ripristino", "uso-multi-postazione"],
  },
  {
    slug: "backup-ripristino",
    category: "Gestione e sicurezza",
    title: "Backup e ripristino",
    shortTitle: "Backup e ripristino",
    shortDescription:
      "Gestisci backup manuali o programmati e avvia le procedure amministrative di ripristino.",
    fullDescription:
      "Le impostazioni permettono di consultare e verificare gli archivi disponibili. Il ripristino sostituisce i dati inclusi nell'archivio selezionato e richiede una procedura amministrativa.",
    problemSolved:
      "Rende disponibili le operazioni di gestione delle copie e di ripristino dagli archivi.",
    howItWorks: [
      "Avvio manuale o programmazione dei backup.",
      "Consultazione e verifica degli archivi disponibili.",
      "Avvio della procedura amministrativa di ripristino.",
    ],
    benefits: [],
    icon: "FolderArchive",
    relatedSlugs: ["utenti-configurazioni", "uso-multi-postazione"],
  },
  {
    slug: "uso-multi-postazione",
    category: "Gestione e sicurezza",
    title: "Uso da più postazioni",
    shortTitle: "Più postazioni",
    shortDescription:
      "L'uso da più postazioni richiede un database MongoDB condiviso e una configurazione adeguata.",
    fullDescription:
      "Le postazioni possono utilizzare lo stesso ambiente configurato. La funzione non sincronizza automaticamente installazioni indipendenti e non prevede lavoro offline.",
    problemSolved:
      "Descrive i prerequisiti per usare il gestionale da più postazioni collegate allo stesso ambiente.",
    howItWorks: [
      "Configurazione delle postazioni per l'accesso a un database MongoDB condiviso.",
      "Verifica dell'ambiente condiviso prima dell'utilizzo concorrente.",
      "Nessuna sincronizzazione automatica tra installazioni indipendenti o uso offline.",
    ],
    benefits: [],
    icon: "Boxes",
    relatedSlugs: ["utenti-configurazioni", "backup-ripristino"],
  },
  {
    slug: "modifiche-registrate",
    category: "Gestione e sicurezza",
    title: "Modifiche registrate",
    shortTitle: "Modifiche registrate",
    shortDescription:
      "Consulta e filtra gli eventi di modifica registrati dall'applicazione ed esporta il report.",
    fullDescription:
      "La vista mostra gli eventi disponibili nei percorsi applicativi che li registrano. Non equivale a un audit completo di ogni modifica o operazione.",
    problemSolved:
      "Aiuta a consultare gli eventi di modifica raccolti nei report disponibili.",
    howItWorks: [
      "Consultazione paginata e filtrata degli eventi registrati.",
      "Visualizzazione delle statistiche disponibili.",
      "Esportazione del report.",
    ],
    benefits: [],
    icon: "ShieldAlert",
    relatedSlugs: ["utenti-configurazioni"],
  },
];

export const FEATURES_BY_CATEGORY = FEATURE_CATEGORIES.map((category) => ({
  category,
  features: FEATURES.filter((feature) => feature.category === category),
})).filter(({ features }) => features.length > 0);

export const FEATURE_HIGHLIGHTS = [
  {
    title: "Materie prime",
    description:
      "Consulta il catalogo e gestisci anagrafiche personali, formati e fornitori.",
    icon: "FlaskConical",
    categories: [FEATURE_CATEGORIES[0]],
  },
  {
    title: "Registrazione e tracciabilità",
    description:
      "Registra acquisti, lotti e movimenti, e consulta le giacenze del laboratorio.",
    icon: "ClipboardCheck",
    categories: [FEATURE_CATEGORIES[1]],
  },
  {
    title: "Preparazioni galeniche",
    description:
      "Organizza procedure, schede tecniche e fogli di lavorazione magistrali e officinali.",
    icon: "FileSpreadsheet",
    categories: [FEATURE_CATEGORIES[2]],
  },
  {
    title: "Tariffazione e gestione",
    description:
      "Prepara preventivi e consulta strumenti, documenti e impostazioni del gestionale.",
    icon: "Calculator",
    categories: [
      FEATURE_CATEGORIES[3],
      FEATURE_CATEGORIES[4],
      FEATURE_CATEGORIES[5],
      FEATURE_CATEGORIES[6],
    ],
  },
] satisfies {
  title: string;
  description: string;
  icon: string;
  categories: FeatureCategory[];
}[];
