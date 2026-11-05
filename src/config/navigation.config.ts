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
    label: "Il software",
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
];

export const FOOTER_SECTIONS: NavSection[] = [
  {
    title: "Il prodotto",
    items: [
      { label: "Panoramica del software", href: "/software" },
      { label: "Tutte le funzionalità", href: "/funzionalita" },
      { label: "Scarica il gestionale", href: "/scarica" },
      { label: "Perché è gratuito", href: "/perche-gratuito" },
    ],
  },
  {
    title: "Funzionalità principali",
    items: [
      { label: "Sostanze e materie prime", href: "/funzionalita/sostanze" },
      { label: "Fogli di lavorazione", href: "/funzionalita/fogli-lavorazione" },
      { label: "DDT, certificati e SDS", href: "/funzionalita/documentazione" },
      { label: "Giacenze e lotti", href: "/funzionalita/giacenze" },
      { label: "Registro sostanze e dopanti", href: "/funzionalita/registro-sostanze" },
    ],
  },
  {
    title: "Assistenza",
    items: [
      { label: "Centro assistenza", href: "/assistenza" },
      { label: "Guida all'installazione", href: "/assistenza/guide" },
      { label: "Domande frequenti", href: "/assistenza/faq" },
    ],
  },
  {
    title: "Informazioni",
    items: [
      { label: "Chi siamo", href: "/chi-siamo" },
      { label: "Contatti", href: "/contatti" },
      { label: "Privacy", href: "/privacy" },
      { label: "Termini di utilizzo", href: "/termini" },
    ],
  },
];