export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  content: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "gestione-lotti-scadenze-galenica",
    title: "La gestione dei lotti e delle scadenze in laboratorio galenico: best practice e normativa",
    category: "Normativa e Pratica",
    date: "28 Settembre 2026",
    readTime: "5 min",
    summary: "Come garantire la tracciabilità totale delle materie prime dal Documento di Trasporto fino al contenitore consegnato al paziente.",
    content: "Nelle preparazioni galeniche magistrali e officinali, la tracciabilità delle materie prime costituisce uno dei pilastri fondamentali delle Norme di Buona Preparazione (NBP) della Farmacopea Ufficiale. Tracciare accuratamente il lotto del fornitore, verificare il titolo e la data di scadenza garantisce la sicurezza del preparato e tutela la farmacia in caso di controlli ispettivi...",
  },
  {
    slug: "digitalizzare-laboratorio-galenico-senza-costi",
    title: "Digitalizzare il laboratorio galenico senza gravare sui costi fissi della farmacia",
    category: "Organizzazione",
    date: "15 Settembre 2026",
    readTime: "4 min",
    summary: "Perché l'adozione di un gestionale moderno e gratuito elimina gli errori manuali e migliora la redditività del laboratorio galenico.",
    content: "Molti titolari di farmacia esitano a digitalizzare il proprio laboratorio galenico a causa dei canoni ricorrenti richiesti dai software commerciali storici. Tuttavia, l'uso di registri cartacei e fogli di calcolo sparsi comporta una dispersione di tempo e un elevato rischio di errore umano. Adottare un applicativo desktop dedicato e gratuito consente di avere standard elevati a costo zero...",
  },
  {
    slug: "resoconto-sostanze-dopanti-senza-stress",
    title: "Resoconto annuale delle sostanze dopanti: come prepararsi senza stress a fine anno",
    category: "Adempimenti",
    date: "2 Settembre 2026",
    readTime: "6 min",
    summary: "Indicazioni pratiche per tenere aggiornato il registro delle movimentazioni soggette alla Legge 376/2000.",
    content: "La trasmissione telematica annuale dei dati relativi alle preparazioni magistrali contenenti principi attivi ad azione dopante rappresenta un adempimento delicato. La tenuta ordinata e progressiva del registro consente di arrivare alla scadenza con i dati già pronti ed esportabili in pochi istanti, evitando calcoli affrettati dell'ultimo minuto...",
  },
];
