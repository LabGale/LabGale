/**
 * CONFIGURAZIONE CENTRALE DEL SITO
 * 
 * Questo è il punto unico in cui modificare:
 * - Il nome del software (attualmente placeholder [NOME PRODOTTO])
 * - I testi e percorsi delle Call to Action (CTA)
 * - I dati di contatto e i placeholder legali
 * - I metadati generali del sito
 */

export interface SiteConfig {
  productName: string;
  shortName: string;
  tagline: string;
  subheadline: string;
  description: string;
  url: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  contact: {
    email: string;
    pec: string;
    phone: string;
    supportUrl: string;
  };
  company: {
    legalName: string;
    vatNumber: string;
    address: string;
    city: string;
    country: string;
  };
  positioning: {
    isFree: boolean;
    freeStatement: string;
    desktopNotice: string;
  };
}

export const SITE_CONFIG: SiteConfig = {
  // Sostituire questo valore quando il nome definitivo verrà scelto
  productName: "LabGale",
  shortName: "LabGale",

  tagline: "Il gestionale galenico moderno, completo e senza canoni.",
  subheadline: "Dalle materie prime alla tariffazione, dai certificati dei fornitori ai controlli di qualità: tutto il tuo laboratorio galenico in un software desktop per Windows, macOS e Linux, con database MongoDB in locale o su Atlas.",
  description: "LabGale è un software gestionale gratuito e indipendente per il laboratorio galenico di farmacia, ideato e sviluppato da Stefano Perna.",
  // URL del sito (da aggiornare in fase di deploy con il dominio finale)
  url: "https://www.labgale.it",

  // Call to Action primarie e secondarie configurabili
  primaryCta: {
    label: "Scarica gratis",
    href: "/scarica",
  },
  secondaryCta: {
    label: "Scopri il gestionale",
    href: "/software",
  },

  // Canali di contatto
  contact: {
    email: "info@labgale.it",
    pec: "", // inserire l'indirizzo PEC reale (es. nome@pec.labgale.it) quando è attivo
    phone: "",
    supportUrl: "/assistenza",
  },

  // Informazioni del titolare
  company: {
    legalName: "Stefano Perna",
    vatNumber: "",
    address: "",
    city: "Rovereto",
    country: "Italia",
  },

  // Dichiarazioni di posizionamento verificate
  positioning: {
    isFree: true,
    freeStatement: "Software professionale senza costi di licenza o canoni ricorrenti.",
    desktopNotice: "Applicazione desktop ad alte prestazioni per Windows, macOS e Linux. Massima libertà: puoi usare MongoDB in locale sul tuo computer per la privacy assoluta oppure collegare la tua istanza MongoDB Atlas autonoma.",
  },
};
