
export interface FaqItem {
  question: string;
  answer: string;
  category: "prodotto" | "installazione" | "normativa" | "costi";
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    category: "costi",
    question: "Il gestionale è gratuito? Sono previsti canoni o costi di licenza?",
    answer:
      "Sì, Gestionale Laboratorio è distribuito gratuitamente. Non è previsto un canone mensile per l'utilizzo del software. Per l'installazione e l'utilizzo possono essere necessari un computer compatibile e un database MongoDB, che la farmacia può gestire secondo la propria configurazione.",
  },
  {
    category: "costi",
    question: "Perché il software viene distribuito gratuitamente?",
    answer:
      "Il progetto nasce con l'obiettivo di mettere a disposizione delle farmacie uno strumento informatico dedicato alla gestione del laboratorio galenico, accessibile anche alle realtà più piccole. Vogliamo offrire un gestionale pratico e in continua evoluzione, senza costi di licenza o canoni periodici.",
  },
  {
    category: "prodotto",
    question: "Come funziona il database? I dati sono salvati in locale o in cloud?",
    answer:
      "Il gestionale utilizza MongoDB e può essere configurato per collegarsi a un database installato localmente oppure a un'istanza remota, ad esempio MongoDB Atlas. La scelta dipende dall'organizzazione della farmacia e dall'infrastruttura disponibile. Una configurazione remota può consentire l'accesso al database da più postazioni, se correttamente predisposta.",
  },
  {
    category: "installazione",
    question: "Quali sistemi operativi sono supportati?",
    answer:
      "Il gestionale è sviluppato come applicazione desktop multipiattaforma, con supporto previsto per Windows, macOS e Linux. La disponibilità degli installer può variare in base alla versione e al sistema operativo: consulta la pagina Download per verificare le release effettivamente disponibili.",
  },
  {
    category: "prodotto",
    question: "Come vengono gestite le credenziali e le password?",
    answer:
      "Il gestionale prevede la gestione degli utenti e delle credenziali necessarie per utilizzare le diverse funzioni. Le modalità di protezione dipendono dal tipo di credenziale e dalla configurazione utilizzata. È comunque importante proteggere il computer, l'accesso al database e le credenziali dei servizi esterni.",
  },
  {
    category: "prodotto",
    question: "È possibile effettuare il backup e il ripristino dei dati?",
    answer:
      "Sì, il gestionale mette a disposizione funzioni per il backup e il ripristino del database. È consigliabile predisporre una strategia di backup regolare, conservare copie in una posizione sicura e verificare periodicamente che i dati possano essere ripristinati correttamente.",
  },
  {
    category: "normativa",
    question: "Il gestionale garantisce la conformità alle Norme di Buona Preparazione (NBP)?",
    answer:
      "Il gestionale include strumenti pensati per supportare l'organizzazione e la documentazione delle attività del laboratorio galenico, tra cui la gestione delle materie prime, delle procedure, dei fogli di lavorazione e dei controlli. Il software non sostituisce le procedure operative della farmacia né la verifica degli obblighi previsti dalla normativa: la corretta applicazione delle NBP resta responsabilità del farmacista.",
  },
  {
    category: "normativa",
    question: "Sono disponibili strumenti per i controlli di qualità delle capsule?",
    answer:
      "Sì, è presente un modulo dedicato al controllo delle capsule rigide. Il modulo consente di registrare le pesate, calcolare i principali parametri statistici, come media, deviazione standard e RSD, e confrontare i risultati con le tolleranze impostate. È inoltre possibile generare un documento PDF con i risultati del controllo. La valutazione finale deve essere effettuata dal farmacista secondo le procedure applicabili.",
  },
  {
    category: "normativa",
    question: "È possibile stampare etichette galeniche con una stampante termica?",
    answer:
      "Sì, il gestionale include una funzione per la stampa di etichette su rotolo termico, con supporto per il formato 57 × 31 mm. Sono disponibili modelli grafici e la possibilità di riportare le informazioni previste dal modello di etichetta. Prima della stampa è importante verificare che i dati inseriti siano completi e corretti e che l'etichetta rispetti le disposizioni applicabili alla preparazione.",
  },
  {
    category: "normativa",
    question: "Il gestionale supporta la gestione delle sostanze soggette alla normativa antidoping?",
    answer:
      "Sì, è disponibile un modulo per supportare l'individuazione e il riepilogo delle sostanze soggette alla normativa antidoping, con strumenti di consultazione e reportistica. Il riepilogo prodotto dal gestionale può essere utilizzato come supporto per gli adempimenti della farmacia, ma i dati devono essere verificati prima della trasmissione agli enti competenti.",
  },
  {
    category: "installazione",
    question: "Durante l'installazione su Windows o macOS compare un avviso di sicurezza: cosa devo fare?",
    answer:
      "Alcuni sistemi operativi possono mostrare avvisi quando si installa o si avvia un'applicazione scaricata da Internet, soprattutto se non dispone di tutte le certificazioni di firma richieste dalla piattaforma. Prima di autorizzare l'esecuzione, verifica sempre che il file provenga dal sito ufficiale e che corrisponda alla versione pubblicata nella pagina Download. Le procedure per autorizzare l'applicazione possono variare in base al sistema operativo.",
  },
  {
    category: "installazione",
    question: "Quali sono i requisiti minimi per utilizzare il gestionale?",
    answer:
      "È necessario un computer compatibile con la versione del gestionale utilizzata e una connessione al database MongoDB configurato per la farmacia. I requisiti possono variare in base al sistema operativo, al numero di postazioni e alla configurazione del database. Consulta le informazioni associate alla release nella pagina Download prima dell'installazione.",
  },
];
