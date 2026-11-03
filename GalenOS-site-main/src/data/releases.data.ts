export interface ReleasePlatform {
  os: "windows" | "macos" | "linux";
  osName: string;
  iconName: string;
  installerType: string;
  architecture: string;
  fileName: string;
  fileSize: string;
  downloadUrl: string; // URL al file reale o # se in attesa di upload
  sha256: string;      // Checksum di sicurezza
  isAvailable: boolean;// true: scaricabile; false: etichettato come "In arrivo"
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
 * Aggiorna questo file quando rilasci una nuova versione del software.
 * I badge, la pagina /scarica e i pulsanti rifletteranno automaticamente questi dati.
 */
export const CURRENT_RELEASE: SoftwareRelease = {
  version: "1.0.0",
  releaseDate: "Ottobre 2026",
  isLatest: true,
  changelog: [
    "Rilascio iniziale del software desktop per il laboratorio galenico (interfaccia Flet)",
    "Architettura database flessibile: MongoDB locale (porta 27017) oppure MongoDB Atlas cloud autonomo",
    "Anagrafica completa sostanze con purezza/titolo, fattori di correzione, lotti e scadenze",
    "Fogli di lavorazione magistrali e officinali a norma NBP con calcolo automatico eccipienti e scarico lotti",
    "Triade documentale (DDT, Certificato di Analisi CoA, SDS) con download automatico dai fornitori (ACEF, Fagron, Galeno, Farmalabor, Farmarete, Esperis)",
    "Motore di calcolo secondo la Tariffa Nazionale dei Medicinali (DM 22/09/2017) e preventivi per pazienti",
    "Modulo scientifico di controllo qualità: uniformità di massa capsule (20 unità) secondo Farmacopea Ufficiale con calcolo RSD e verbale PDF",
    "Stampa etichette galeniche su carta termica (57×31 mm) con validazione bloccante dei requisiti di legge e codici QR",
    "Banca dati farmaci AIFA con codici ATC, regimi di dispensazione, monitoraggio carenze e download FI/RCP",
    "Riepilogo e resoconto annuale preparazioni dopanti per la trasmissione al Ministero della Salute (L. 376/2000)",
    "Protezione sicura delle credenziali nel portachiavi nativo del sistema operativo (Keychain macOS / Credential Manager Windows)",
    "Runtime di backup automatico programmato e salvataggio preventivo alla chiusura della finestra con ripristino integrato",
  ],
  platforms: [
    {
      os: "windows",
      osName: "Windows",
      iconName: "windows",
      installerType: "Eseguibile Desktop Standalone (.exe)",
      architecture: "64-bit (x64)",
      fileName: "Gestionale-Laboratorio-1.0.0.exe",
      fileSize: "~75 MB",
      downloadUrl: "#download-windows", // [SOSTITUIRE CON LINK REALE IN FASE DI RILASCIO]
      sha256: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855", // [HASH SHA-256 REALE]
      isAvailable: true,
      requirements: [
        "Windows 10 o Windows 11 (64-bit)",
        "Processore Intel/AMD a 64 bit",
        "Almeno 4 GB di memoria RAM",
        "Circa 300 MB di spazio libero su disco",
        "Accesso a MongoDB locale (porta 27017) o istanza MongoDB Atlas autonoma",
      ],
    },
    {
      os: "macos",
      osName: "macOS",
      iconName: "macos",
      installerType: "Applicazione Desktop Standalone (.app / .dmg)",
      architecture: "Universale (Apple Silicon & Intel)",
      fileName: "Gestionale-Laboratorio-1.0.0.dmg",
      fileSize: "~70 MB",
      downloadUrl: "#download-macos", // [SOSTITUIRE CON LINK REALE IN FASE DI RILASCIO]
      sha256: "7d1b32a1068800eb4d2719a77918a56b6b7a5e8081691361c4701e4a30e844f2", // [HASH SHA-256 REALE]
      isAvailable: true,
      requirements: [
        "macOS 12 (Monterey) o versione successiva",
        "Compatibile nativamente con Apple Silicon e Mac Intel",
        "Almeno 4 GB di memoria RAM",
        "Circa 300 MB di spazio libero su disco",
        "Accesso a MongoDB locale (porta 27017) o istanza MongoDB Atlas autonoma",
      ],
    },
    {
      os: "linux",
      osName: "Linux",
      iconName: "linux",
      installerType: "Pacchetto Desktop Standalone (AppImage / .deb)",
      architecture: "64-bit (x86_64)",
      fileName: "Gestionale-Laboratorio-1.0.0.AppImage",
      fileSize: "~65 MB",
      downloadUrl: "#download-linux", // [SOSTITUIRE CON LINK REALE IN FASE DI RILASCIO]
      sha256: "4b22ca1b6a3e1b7f248e3cfd713c77d54b8a2e1d7f6b9c8e4a3b2c1d0f9e8a7b", // [HASH SHA-256 REALE]
      isAvailable: true,
      requirements: [
        "Distribuzione Linux a 64-bit (Ubuntu 22.04+, Debian 12+, Fedora 38+ o compatibili)",
        "Librerie grafiche GTK3 / glibc standard",
        "Almeno 4 GB di memoria RAM",
        "Circa 300 MB di spazio libero su disco",
        "Accesso a MongoDB locale (porta 27017) o istanza MongoDB Atlas autonoma",
      ],
    },
  ],
};
