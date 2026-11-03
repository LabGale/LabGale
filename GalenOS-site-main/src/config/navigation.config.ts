export interface NavItem {
  label: string;
  href: string;
  description?: string;
  badge?: string;
  isExternal?: boolean;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export const MAIN_NAV: NavItem[] = [
  {
    label: "Il Gestionale",
    href: "/software",
  },
  {
    label: "Funzionalità",
    href: "/funzionalita",
  },
  {
    label: "Perché è gratuito",
    href: "/perche-gratuito",
  },
  {
    label: "Assistenza",
    href: "/assistenza",
  },
  {
    label: "Risorse",
    href: "/risorse",
  },
];

export const FOOTER_SECTIONS: NavSection[] = [
  {
    title: "Prodotto",
    items: [
      { label: "Panoramica Software", href: "/software" },
      { label: "Tutte le Funzionalità", href: "/funzionalita" },
      { label: "Scarica il gestionale", href: "/scarica" },
      { label: "Perché è gratuito", href: "/perche-gratuito" },
    ],
  },
  {
    title: "Funzionalità Principali",
    items: [
      { label: "Sostanze e Materie Prime", href: "/funzionalita/sostanze" },
      { label: "Fogli di Lavorazione", href: "/funzionalita/fogli-lavorazione" },
      { label: "DDT, Certificati e SDS", href: "/funzionalita/documentazione" },
      { label: "Giacenze e Lotti", href: "/funzionalita/giacenze" },
      { label: "Registro Sostanze e Dopanti", href: "/funzionalita/registro-sostanze" },
    ],
  },
  {
    title: "Supporto & Risorse",
    items: [
      { label: "Centro Assistenza", href: "/assistenza" },
      { label: "Guida all'installazione", href: "/assistenza/guide" },
      { label: "Domande Frequenti (FAQ)", href: "/assistenza/faq" },
      { label: "Normativa e Risorse", href: "/risorse" },
      { label: "Blog di Laboratorio", href: "/blog" },
    ],
  },
  {
    title: "Informazioni",
    items: [
      { label: "Chi siamo", href: "/chi-siamo" },
      { label: "Contatti e Supporto", href: "/contatti" },
      { label: "Informativa Privacy", href: "/privacy" },
      { label: "Termini di Utilizzo", href: "/termini" },
    ],
  },
];
