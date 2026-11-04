
export interface ReleasePlatform {
  os: "windows" | "macos" | "linux";
  osName: string;
  iconName: string;
  installerType: string;
  architecture: string;
  fileName: string;
  fileSize: string;
  downloadUrl: string;
  sha256: string;
  isAvailable: boolean;
  requirements: string[];
}

export interface SoftwareRelease {
  version: string;
  releaseDate: string;
  isLatest: boolean;
  changelog: string[];
  platforms: ReleasePlatform[];
}

/**
 * CONFIGURAZIONE DELLE RELEASE E DEI DOWNLOAD
 *
 * Aggiorna questo file quando rilasci una nuova versione.
 *
 * Convenzione nomi:
 * Gestionale-Laboratorio-{versione}-{sistema}-{architettura}.{estensione}
 *
 * Prima di rendere disponibile un installer:
 * - Inserire il link effettivo al download.
 * - Inserire il checksum SHA-256 calcolato sul file definitivo.
 * - Impostare isAvailable a true.
 */
export const CURRENT_RELEASE: SoftwareRelease = {
  version: "1.0.0",
  releaseDate: "Ottobre 2026",
  isLatest: true,

  changelog: [
    "Rilascio iniziale del software desktop per il laboratorio galenico, sviluppato con Flet",
    "Architettura database flessibile: MongoDB locale (porta 27017) oppure MongoDB Atlas o altra istanza remota compatibile",
    "Anagrafica completa delle sostanze con purezza, titolo, fattori di correzione, lotti e scadenze",
    "Fogli di lavorazione magistrali e officinali con funzionalità dedicate alla gestione delle preparazioni secondo le Norme di Buona Preparazione",
    "Gestione della documentazione delle materie prime: DDT, Certificati di Analisi (CoA) e Schede di Sicurezza (SDS)",
    "Integrazione con i fornitori per il recupero della documentazione disponibile",
    "Motore di calcolo secondo la Tariffa Nazionale dei Medicinali (D.M. 22/09/2017) e gestione dei preventivi",
    "Modulo di controllo qualità per l'uniformità di massa delle capsule secondo Farmacopea Ufficiale, con calcolo RSD e generazione del verbale PDF",
    "Stampa di etichette galeniche su carta termica (57 × 31 mm), con controlli sui requisiti di compilazione e codici QR",
    "Banca dati dei farmaci AIFA con codici ATC, regimi di dispensazione e informazioni sui medicinali",
    "Riepilogo delle preparazioni contenenti sostanze dopanti per gli adempimenti previsti dalla L. 376/2000",
    "Protezione delle credenziali tramite il portachiavi nativo del sistema operativo",
    "Backup automatici programmabili e funzionalità di ripristino",
  ],

  platforms: [
    {
      os: "windows",
      osName: "Windows",
      iconName: "windows",
      installerType: "Applicazione Desktop Standalone (.exe)",
      architecture: "64-bit (x64)",
      fileName: "Gestionale-Laboratorio-1.0.0-Windows-x64.exe",
      fileSize: "~75 MB",
      downloadUrl: "#download-windows",
      sha256: "",
      isAvailable: false,
      requirements: [
        "Windows 10 o Windows 11 a 64 bit",
        "Processore Intel o AMD a 64 bit",
        "Almeno 4 GB di memoria RAM",
        "Circa 300 MB di spazio libero su disco",
        "Accesso a MongoDB locale (porta 27017) oppure a un database MongoDB remoto compatibile",
      ],
    },

    {
      os: "macos",
      osName: "macOS",
      iconName: "macos",
      installerType: "Applicazione Desktop Standalone (.dmg)",
      architecture: "Apple Silicon (ARM64)",
      fileName: "Gestionale-Laboratorio-1.0.0-macOS-arm64.dmg",
      fileSize: "~70 MB",
      downloadUrl: "#download-macos",
      sha256: "",
      isAvailable: false,
      requirements: [
        "macOS 12 (Monterey) o versione successiva",
        "Mac con processore Apple Silicon: M1, M2, M3, M4 e generazioni successive",
        "Architettura ARM64 nativa; non compatibile con Mac Intel",
        "Almeno 4 GB di memoria RAM",
        "Circa 300 MB di spazio libero su disco",
        "Accesso a MongoDB locale (porta 27017) oppure a un database MongoDB remoto compatibile",
      ],
    },

    {
      os: "linux",
      osName: "Linux",
      iconName: "linux",
      installerType: "Applicazione Desktop Standalone (AppImage)",
      architecture: "64-bit (x86_64)",
      fileName: "Gestionale-Laboratorio-1.0.0-Linux-x86_64.AppImage",
      fileSize: "~65 MB",
      downloadUrl: "#download-linux",
      sha256: "",
      isAvailable: false,
      requirements: [
        "Distribuzione Linux a 64 bit",
        "Ubuntu 22.04+, Debian 12+, Fedora 38+ o distribuzioni compatibili",
        "Architettura x86_64",
        "Librerie grafiche e dipendenze di sistema richieste dall'applicazione",
        "Almeno 4 GB di memoria RAM",
        "Circa 300 MB di spazio libero su disco",
        "Accesso a MongoDB locale (porta 27017) oppure a un database MongoDB remoto compatibile",
      ],
    },
  ],
};
