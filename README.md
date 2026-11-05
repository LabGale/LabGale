# Sito Web Ufficiale — Software Gestionale per Laboratorio Galenico

Sito web moderno, veloce, accessibile e orientato alla SEO/GEO per la distribuzione e presentazione del software gestionale gratuito dedicato ai laboratori galenici delle farmacie italiane.

---

## 📋 Indice della Guida

1. [Requisiti di Sistema](#1-requisiti-di-sistema)
2. [Installazione delle Dipendenze](#2-installazione-delle-dipendenze)
3. [Avvio in Locale (Ambiente di Sviluppo)](#3-avvio-in-locale-ambiente-di-sviluppo)
4. [Build e Compilazione per la Produzione](#4-build-e-compilazione-per-la-produzione)
5. [Guida al Deploy (Messa Online)](#5-guida-al-deploy-messa-online)
6. [Mappa e Struttura del Progetto](#6-mappa-e-struttura-del-progetto)
7. [Come e Dove Modificare i Contenuti](#7-come-e-dove-modificare-i-contenuti)
8. [Modifica del Tema Visivo e dei Colori](#8-modifica-del-tema-visivo-e-dei-colori)
9. [Come Aggiungere una Nuova Funzionalità](#9-come-aggiungere-una-nuova-funzionalit%C3%A0)
10. [Gestione dei File Scaricabili e delle Release](#10-gestione-dei-file-scaricabili-e-delle-release)
11. [Gestione delle Immagini e degli Screenshot](#11-gestione-delle-immagini-e-degli-screenshot)
12. [Gestione SEO e Metadati](#12-gestione-seo-e-metadati)
13. [Sostituzione del Nome Prodotto e dei Placeholder](#13-sostituzione-del-nome-prodotto-e-dei-placeholder)

---

## 1. Requisiti di Sistema

Per eseguire, modificare e compilare questo sito sul tuo computer sono necessari:
- **Node.js** versione 18.17.0 o successiva (oppure **Deno** 2.0+)
- **npm** (incluso in Node.js) o in alternativa **pnpm** / **yarn**
- Qualsiasi editor di testo moderno (es. VS Code, Antigravity IDE, Cursor)

---

## 2. Installazione delle Dipendenze

Apri il terminale all'interno della cartella del progetto (`sito_gestionale_laboratorio`) ed esegui:

```bash
npm install
```

Tutte le librerie necessarie (Next.js, React, Tailwind CSS, TypeScript) verranno scaricate automaticamente.

---

## 3. Avvio in Locale (Ambiente di Sviluppo)

Per avviare il server locale con ricaricamento in tempo reale delle modifiche (Hot Reload):

```bash
npm run dev
```

Apri il tuo browser preferito e visita l'indirizzo:
👉 **[http://localhost:3000](http://localhost:3000)**

Ogni volta che salvi un file, la pagina nel browser si aggiornerà automaticamente.

---

## 4. Build e Compilazione per la Produzione

Prima di pubblicare il sito, verifica che la compilazione di produzione non contenga errori eseguendo:

```bash
npm run build
```

Questo comando genera la versione ottimizzata, statica e minificata del sito all'interno della cartella nascosta `.next`.

---

## 5. Guida al Deploy (Messa Online)

Il sito è progettato con l'architettura **Next.js App Router** e può essere ospitato gratuitamente o a costi minimi su qualsiasi piattaforma:

### Opzione A: Vercel (Consigliata per semplicità)
1. Crea un account su [Vercel](https://vercel.com).
2. Collega il tuo repository GitHub (`sito_gestionale_laboratorio`).
3. Vercel rileverà automaticamente Next.js e pubblicherà il sito in circa 60 secondi.
4. Nelle impostazioni del progetto su Vercel, collega il tuo dominio ufficiale (es. `www.tuodominio.it`).

### Opzione B: Netlify, Cloudflare Pages o Server Tradizionale
- **Netlify**: importa il repository e imposta il build command `npm run build`.
- **Hosting Linux tradizionale con Node.js**: esegui `npm run build` seguito da `npm run start` (consigliato con `pm2`).

---

## 6. Mappa e Struttura del Progetto

Il codice è organizzato in modo pulito affinché anche chi non è uno sviluppatore professionista possa orientarsi subito:

```text
sito_gestionale_laboratorio/
├── public/                       # File statici serviti direttamente dal web
│   ├── assets/
│   │   └── screenshots/          # Inserisci qui gli screenshot reali dell'app
│   ├── robots.txt                # Istruzioni per i motori di ricerca
│   └── _redirects                # Redirect permanenti per Cloudflare Pages
│
├── src/
│   ├── config/                   # ⚙️ CONFIGURAZIONI GLOBALI (Single Source of Truth)
│   │   ├── site.config.ts        # Nome prodotto, payoff, CTA, email, ragione sociale
│   │   └── navigation.config.ts  # Voci dei menu header e footer
│   │
│   ├── data/                     # 📊 DATI E CONTENUTI STRUTTURATI
│   │   ├── features.data.ts      # Le 8 funzionalità ufficiali (testi, problemi risolti)
│   │   ├── releases.data.ts      # Versioni, link installer (.exe, .dmg), requisiti e SHA-256
│   │   ├── faq.data.ts           # Domande e risposte frequenti
│   │   └── guides.data.ts        # Guide passo-passo per il centro assistenza
│   │
│   ├── components/               # 🧩 COMPONENTI RIUTILIZZABILI
│   │   ├── layout/               # Header, Footer
│   │   ├── ui/                   # Button, Card, Badge, SectionHeading, Icons
│   │   ├── sections/             # Hero, PainPoints, FeaturesGrid, AppMockup, FinalCta
│   │   └── seo/                  # StructuredData (Schema.org JSON-LD)
│   │
│   ├── app/                      # 🌐 PAGINE E ROTTE DEL SITO (Next.js App Router)
│   │   ├── layout.tsx            # Struttura comune (Head, Header, Footer)
│   │   ├── page.tsx              # Homepage
│   │   ├── software/page.tsx     # Pagina "Il Gestionale"
│   │   ├── funzionalita/         # Indice e pagine di dettaglio delle 8 funzioni
│   │   ├── scarica/page.tsx      # Pagina Download
│   │   ├── perche-gratuito/page.tsx # Pagina Trasparenza & Gratuità
│   │   ├── assistenza/           # Guide, Video, FAQ
│   │   ├── chi-siamo/page.tsx    # Origine del progetto
│   │   ├── contatti/page.tsx     # Modulo di contatto
│   │   ├── privacy/page.tsx      # Privacy Policy GDPR
│   │   ├── termini/page.tsx      # Termini di utilizzo
│   │   └── sitemap.ts            # Generatore dinamico di sitemap.xml
│   │
│   └── styles/
│       └── globals.css           # Variabili di colore (Verde Flet) e token Dark Mode
│
├── tailwind.config.ts            # Setup stili Tailwind (Segoe UI, scala 8px)
├── package.json                  # Dipendenze e comandi
└── README.md                     # Questa guida
```

---

## 7. Come e Dove Modificare i Contenuti

Non è necessario modificare il codice HTML delle singole pagine per cambiare testi o informazioni! Quasi tutti i contenuti si trovano in file di dati semplici da leggere:

| Se desideri modificare: | Apri il file: |
| :--- | :--- |
| **Nome del software o payoff** | `src/config/site.config.ts` |
| **Testo dei pulsanti CTA ("Scarica gratis")** | `src/config/site.config.ts` |
| **Email di contatto o Partita IVA** | `src/config/site.config.ts` |
| **Voci del menu o del footer** | `src/config/navigation.config.ts` |
| **Descrizione delle 8 funzionalità** | `src/data/features.data.ts` |
| **Domande frequenti (FAQ)** | `src/data/faq.data.ts` |
| **Guide e istruzioni di installazione** | `src/data/guides.data.ts` |
| **Link e versioni dei file scaricabili** | `src/data/releases.data.ts` |

---

## 8. Modifica del Tema Visivo e dei Colori

Il colore primario dell'applicazione è il **Verde Flet**. Se desideri modificare le tonalità cromatiche, apri:
👉 `src/styles/globals.css`

Troverai le variabili CSS:
```css
:root {
  --brand-600: #0E7052; /* Colore verde primario pulsanti ed evidenziazioni */
  --brand-700: #0A533D; /* Verde scuro per hover e stati attivi */
  --brand-50:  #F0FDF4; /* Verde chiarissimo per sfondi e badge */
}
```
Modificando questi valori esadecimali, l'intero sito assumerà istantaneamente la nuova combinazione di colori.

---

## 9. Come Aggiungere una Nuova Funzionalità

Quando in futuro il **modulo etichette** o un'altra funzione sarà pronta per essere pubblicata sul sito:
1. Apri `src/data/features.data.ts`.
2. Aggiungi un nuovo blocco all'array `FEATURES`:
   ```typescript
   {
     slug: "etichette",
     title: "Stampa Etichette Galeniche",
     shortTitle: "Etichette",
     shortDescription: "Generazione e stampa immediata delle etichette a norma F.U.",
     fullDescription: "Compilazione automatica di data limite di utilizzo, avvertenze...",
     problemSolved: "Elimina la compilazione a mano o con modelli Word...",
     howItWorks: ["...", "..."],
     benefits: ["...", "..."],
     icon: "ClipboardCheck",
     relatedSlugs: ["fogli-lavorazione", "sostanze"]
   }
   ```
3. Il sito creerà in automatico:
   - La card nella home page
   - La voce nella pagina `/funzionalita`
   - La pagina dedicata `/funzionalita/etichette`
   - La riga nella sitemap XML per Google.

---

## 10. Gestione dei File Scaricabili e delle Release

Quando compili una nuova versione del software per Windows, macOS o Linux, apri:
👉 `src/data/releases.data.ts`

Aggiorna la versione e inserisci i link reali dei pacchetti:
```typescript
export const CURRENT_RELEASE = {
  version: "1.0.1",
  releaseDate: "Novembre 2026",
  platforms: [
    {
      os: "windows",
      downloadUrl: "https://tuodominio.it/downloads/gestionale-setup-1.0.1.exe",
      sha256: "hash_generato_dal_tuo_installer",
      isAvailable: true // Imposta a false se la piattaforma non è ancora pronta
    }
  ]
};
```
I pulsanti di download, le dimensioni dei file e i requisiti della pagina `/scarica` si aggiorneranno automaticamente.

---

## 11. Gestione delle Immagini e degli Screenshot

Al momento il sito include un elegante mockup grafico CSS dell'interfaccia (`AppMockup.tsx`). Quando avrai a disposizione gli screenshot definitivi del software:
1. Salva le immagini PNG (ottimizzate a risoluzione standard, es. 1920x1080) nella cartella:
   `public/assets/screenshots/`
2. Esempio di file: `public/assets/screenshots/schermata-principale.png`.
3. Potrai richiamarle direttamente nel componente `AppMockup.tsx` o nelle pagine delle funzionalità usando il tag `<img src="/assets/screenshots/schermata-principale.png" alt="..." />`.

---

## 12. Gestione SEO e Metadati

Il sito include un'infrastruttura SEO e AI Search completa:
- **Metadati dinamici**: configurati in `src/app/layout.tsx`.
- **Dati Strutturati Schema.org**: gestiti tramite `src/components/seo/StructuredData.tsx` (`SoftwareApplication`, `FAQPage`, `BreadcrumbList`).
- **Sitemap Dinamica**: generata automaticamente all'indirizzo `/sitemap.xml`.
- **Robots**: presente in `public/robots.txt`.

Quando acquisti il dominio definitivo, aggiorna semplicemente il campo `url` in `src/config/site.config.ts`.

---

## 13. Sostituzione del Nome Prodotto e dei Placeholder

Nel codice non compare alcun nome provvisorio disperso nelle pagine. Tutte le istanze fanno riferimento a:
👉 `src/config/site.config.ts`

Quando il nome commerciale definitivo sarà stato approvato:
1. Apri `src/config/site.config.ts`.
2. Sostituisci:
   ```typescript
   productName: "[NOME PRODOTTO]", // <-- Inserisci qui il nome ufficiale
   ```
3. Compila anche i dati aziendali mancanti:
   ```typescript
   contact: {
     email: "info@tuonome.it",
   },
   company: {
     legalName: "Farmacia Rossi S.n.c.",
     vatNumber: "12345678901",
     address: "Via Roma 1",
     city: "Milano"
   }
   ```
4. Salva il file: **l'intero sito, dal titolo delle pagine al footer, rifletterà istantaneamente il nuovo nome e i tuoi dati societari.**

---

### Assistenza per lo Sviluppatore / Titolare
In caso di dubbi sulla configurazione o sui comandi di pubblicazione, fai riferimento a questo file o contatta il supporto tecnico dedicato.
