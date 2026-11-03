"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * Mockup della HomePage di LabGale (tema chiaro, finestra macOS).
 *
 * Ricostruito da: screenshot reale, router.py (HomePage + Drawer),
 * design_system.py e hub_components.py. Le misure sono i valori reali di
 * Spacing / BorderRadius / Typography / Shadows (px logici di Flet).
 *
 * Il mockup è disegnato a larghezza fissa (DESIGN_WIDTH) e poi scalato per
 * adattarsi al contenitore: così proporzioni e a-capo restano identici
 * all'app reale a qualsiasi larghezza.
 *
 * Uso:  <AppMockup />  (il menu laterale si apre cliccando l'icona in alto
 *       a sinistra e si chiude cliccando fuori; <AppMockup showDrawer />
 *       parte con il menu già aperto)
 *
 * COLORI: valori esatti del tema chiaro (LIGHT_SCHEME in theme_manager.py).
 */

const DESIGN_WIDTH = 1500;

const C = {
  // Valori reali di LIGHT_SCHEME (theme_manager.py) -> token del design system
  PRIMARY: "#2E7D32", // gradiente card primaria: PRIMARY -> SUCCESS
  SUCCESS: "#4CAF50",
  ON_PRIMARY: "#FFFFFF",
  SECONDARY: "#0277BD",
  WARNING: "#FF9800",
  ERROR: "#F44336",
  BACKGROUND: "#FAFAFA", // surface
  SURFACE: "#FFFFFF", // surface_container_low
  SURFACE_VARIANT: "#F5F5F5", // surface_container_high
  TEXT_PRIMARY: "#212121", // on_surface
  TEXT_SECONDARY: "#757575", // on_surface_variant
  TEXT_TERTIARY: "#9E9E9E", // outline
  BORDER: "#E0E0E0", // outline_variant
};

const SHADOW_SM = "0 0 4px 1px rgba(0,0,0,.12)";
const SHADOW_MD = "0 0 8px 1px rgba(0,0,0,.12)";

/* ── Icone ──────────────────────────────────────────────────────────────── */

type IconProps = { size?: number; color?: string };

const svgBase = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  className: "shrink-0",
});

const Menu = ({ size = 28, color = C.TEXT_SECONDARY }: IconProps) => (
  <svg {...svgBase(size)} stroke={color} strokeWidth={2}>
    <path d="M4 6.5h16M4 12h16M4 17.5h16" />
  </svg>
);

const Flask = ({ size = 32, color = C.PRIMARY }: IconProps) => (
  <svg {...svgBase(size)} fill={color}>
    <path d="M9 3h6v2h-1v4.6l5.4 9.1A1.6 1.6 0 0 1 18 21.5H6a1.6 1.6 0 0 1-1.4-2.8L10 9.600V5H9z" />
  </svg>
);

const Person = ({ size = 28, color = C.TEXT_PRIMARY }: IconProps) => (
  <svg {...svgBase(size)} stroke={color} strokeWidth={2}>
    <circle cx="12" cy="8" r="3.6" />
    <path d="M4.5 20v-.8c0-2.6 3.3-4.2 7.5-4.2s7.5 1.600 7.500 4.200v.8z" />
  </svg>
);

const AddCircle = ({ size = 32, color = "#fff" }: IconProps) => (
  <svg {...svgBase(size)} stroke={color} strokeWidth={2}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7.500v9M7.500 12h9" />
  </svg>
);

const Search = ({ size = 32, color = C.TEXT_PRIMARY }: IconProps) => (
  <svg {...svgBase(size)} stroke={color} strokeWidth={2.2}>
    <circle cx="10.500" cy="10.500" r="6.200" />
    <path d="M15.200 15.200l5.300 5.300" />
  </svg>
);

const Article = ({ size = 24, color = C.SECONDARY }: IconProps) => (
  <svg {...svgBase(size)} stroke={color} strokeWidth={1.8}>
    <rect x="4" y="4" width="16" height="16" rx="1.500" />
    <path d="M7.500 8.500h9M7.500 12h9M7.500 15.500h5.500" />
  </svg>
);

const Pdf = ({ size = 24 }: IconProps) => (
  <svg {...svgBase(size)}>
    <rect x="7.500" y="2.500" width="14" height="14" rx="2" stroke={C.ERROR} strokeWidth={1.600} />
    <rect x="2.500" y="7.500" width="14" height="14" rx="2" fill={C.ERROR} />
    <text x="9.500" y="16.200" textAnchor="middle" fontSize="5.200" fontWeight="800" fill="#fff" fontFamily="Arial, sans-serif">
      PDF
    </text>
  </svg>
);

const Chevron = ({ size = 24, color = C.TEXT_TERTIARY }: IconProps) => (
  <svg {...svgBase(size)} stroke={color} strokeWidth={2}>
    <path d="M9.500 6l6 6-6 6" />
  </svg>
);

/* Icone del drawer (stile outline, tracciati semplificati) */
const DRAWER_PATHS: Record<string, string> = {
  receipt: "M6 3h12v18l-3-2-3 2-3-2-3 2zM9 8h6M9 12h6",
  article: "M5 4h14v16H5zM8 8.500h8M8 12h8M8 15.500h5",
  assignment: "M8 4h8v3H8zM6 5H5v16h14V5h-1M9 12h6M9 16h6",
  dataset: "M4 6c0-1.500 3.600-3 8-3s8 1.500 8 3-3.600 3-8 3-8-1.500-8-3ZM4 6v12c0 1.500 3.600 3 8 3s8-1.500 8-3V6",
  inventory: "M4 7l8-4 8 4v10l-8 4-8-4zM4 7l8 4 8-4M12 11v10",
  books: "M5 4h4v16H5zM11 4h4v16h-4zM17 6l3 1-3 13-3-1z",
  quote: "M6 3h9l4 4v14H6zM14 3v5h5M9 14h6M12 11v6",
  truck: "M3 6h11v10H3zM14 9h4l3 3v4h-7M7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM17 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
  folder: "M3 6h6l2 2h10v11H3z",
  calc: "M6 3h12v18H6zM9 7h6M9 12h1M12 12h1M9 16h1M12 16h1",
  payments: "M3 6h18v12H3zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
  stock: "M4 4h16v6H4zM4 14h16v6H4z",
  sports: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18",
  history: "M4 12a8 8 0 1 0 3-6.200M4 4v4h4M12 8v4l3 2",
  pill: "M10.500 20.500a5 5 0 0 1-7-7l10-10a5 5 0 0 1 7 7zM8.500 8.500l7 7",
  settings: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM19 12l2-1-2-4-2 .5-1.500-1L15 4h-4l-.5 2.500-1.500 1L7 7l-2 4 2 1v2l-2 1 2 4 2-.5 1.500 1L11 20h4l.5-2.500 1.500-1 2 .5 2-4-2-1z",
  logout: "M10 4H5v16h5M15 8l4 4-4 4M19 12H9",
};

const DrawerIcon = ({ name }: { name: string }) => (
  <svg {...svgBase(24)} stroke={C.TEXT_SECONDARY} strokeWidth={1.700}>
    <path d={DRAWER_PATHS[name]} />
  </svg>
);

/* ── Dati di esempio (stessa forma dei dati reali) ──────────────────────── */

const REGISTRAZIONI = [
  { titolo: "MINOXIDIL", sub: "Interno: 51-D-2026 • Progr: 238-2026" },
  { titolo: "PROGESTERONE PH.EUR.", sub: "Interno: 141-C-2026 • Progr: 237-2026" },
  { titolo: "FINASTERIDE EP", sub: "Interno: 376-E-2026 • Progr: 236-2026" },
  { titolo: "ESTRONE", sub: "Interno: 276-A-2026 • Progr: 235-2026" },
  { titolo: "BOTTIGLIA PL ROT 1000ML", sub: "Interno: 665-A-2026 • Progr: 234-2026" },
];

const SCHEDE = [
  { titolo: "MINOXIDIL, FINASTERIDE, CETIRIZINA", sub: "Codice: 21-STM • Tipo: MAGISTRALE" },
  { titolo: "METRONIDAZOLO SOSPENSIONE", sub: "Codice: 20-STM • Tipo: MAGISTRALE" },
  { titolo: "NALTREXONE CPS", sub: "Codice: 19-STM • Tipo: MAGISTRALE" },
  { titolo: "CITISINA CPS", sub: "Codice: 18-STM • Tipo: MAGISTRALE" },
  { titolo: "BENZILE BENZOATO EMULSIONE", sub: "Codice: 13-STO • Tipo: OFFICINALE" },
  { titolo: "ACIDO BORICO SOLUZIONE", sub: "Codice: 12-STO • Tipo: OFFICINALE" },
];

const FOGLI = [
  { titolo: "NALTREXONE CPS", sub: "336-2026 • M. Bianchi" },
  { titolo: "MINOXIDIL, FINASTERIDE, CETIRIZINA", sub: "335-2026 • M. Bianchi" },
];

/* Voci del drawer = NAVIGATION_SECTIONS (senza "Etichette", non ancora pubblica) */
const DRAWER: { title: string; color: string; items: [string, string][] }[] = [
  {
    title: "OPERAZIONI PRINCIPALI",
    color: C.PRIMARY,
    items: [
      ["receipt", "Registrazione Sostanze"],
      ["article", "Schede Tecniche"],
      ["assignment", "Fogli Lavorazione"],
    ],
  },
  {
    title: "REGISTRI",
    color: C.SECONDARY,
    items: [
      ["dataset", "Banca Dati Sostanze"],
      ["inventory", "Registro Sostanze"],
      ["article", "Registro Fogli"],
      ["books", "Registro Schede Tecniche"],
      ["quote", "Registro Preventivi"],
      ["truck", "Registro Fornitori"],
    ],
  },
  {
    title: "DOCUMENTAZIONE",
    color: C.SECONDARY,
    items: [["folder", "Documenti Sostanze"]],
  },
  {
    title: "STRUMENTI",
    color: C.WARNING,
    items: [
      ["calc", "Preventivo"],
      ["payments", "Tariffazione"],
      ["stock", "Giacenze Laboratorio"],
      ["sports", "Resoconto Dopanti"],
      ["history", "Report Modifiche"],
      ["pill", "Banca Dati AIFA"],
    ],
  },
  {
    title: "SISTEMA",
    color: C.TEXT_SECONDARY,
    items: [
      ["settings", "Impostazioni"],
      ["logout", "Esci"],
    ],
  },
];

/* ── Componenti dell'interfaccia ────────────────────────────────────────── */

/** hub_action_card: 120px di altezza, 200px (primaria) o 100px (secondaria). */
function ActionCard({
  text,
  primary = true,
}: {
  text: string;
  primary?: boolean;
}) {
  const color = primary ? C.ON_PRIMARY : C.TEXT_PRIMARY;
  return (
    <div
      className="flex h-[120px] flex-col items-center justify-center gap-0 rounded-lg p-4 text-center"
      style={{
        width: primary ? 200 : 100,
        background: primary
          ? `linear-gradient(135deg, ${C.PRIMARY}, ${C.SUCCESS})`
          : C.SURFACE_VARIANT,
        boxShadow: SHADOW_MD,
        color,
      }}
    >
      {primary ? <AddCircle color={color} /> : <Search color={color} />}
      <span className="mt-[2px] text-[14px] font-medium leading-[1.3]">{text}</span>
    </div>
  );
}

function ListItem({
  titolo,
  sub,
  leading,
  trailing,
}: {
  titolo: string;
  sub: string;
  leading: React.ReactNode;
  trailing: React.ReactNode;
}) {
  return (
    <div
      className="shrink-0 rounded-lg p-2"
      style={{
        background: C.SURFACE,
        border: `1px solid ${C.BORDER}`,
        boxShadow: SHADOW_SM,
      }}
    >
      <div className="flex min-h-[64px] items-center gap-3 px-4 py-2">
        {leading}
        <div className="min-w-0 flex-1">
          <div
            className="truncate text-[14px] leading-5"
            style={{ color: C.TEXT_PRIMARY }}
          >
            {titolo}
          </div>
          <div className="text-[12px] leading-4" style={{ color: C.TEXT_SECONDARY }}>
            {sub}
          </div>
        </div>
        <div className="flex h-10 w-10 shrink-0 items-center justify-center">
          {trailing}
        </div>
      </div>
    </div>
  );
}

/** Colonna hub: titolo, action cards, hub_section con lista alta 450px. */
function HubColumn({
  title,
  primaryText,
  sectionTitle,
  children,
}: {
  title: string;
  primaryText: string;
  sectionTitle: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className="flex flex-col gap-[10px] rounded-xl p-5"
      style={{ background: C.SURFACE, boxShadow: SHADOW_MD }}
    >
      <h3 className="text-[20px] font-bold" style={{ color: C.TEXT_PRIMARY }}>
        {title}
      </h3>
      <div className="flex flex-col gap-8">
        <div className="flex justify-center gap-4">
          <ActionCard text={primaryText} />
          <ActionCard text="Cerca" primary={false} />
        </div>
        <div className="px-6 py-4">
          <h4 className="text-[20px] font-bold" style={{ color: C.TEXT_PRIMARY }}>
            {sectionTitle}
          </h4>
          <div className="mt-2 flex h-[450px] flex-col gap-2 overflow-hidden">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

function Drawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <>
      <div
        className="absolute inset-0 z-10 transition-opacity duration-200"
        style={{
          background: "rgba(0,0,0,.32)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          cursor: "pointer",
        }}
        onClick={onClose}
        aria-hidden="true"
      />
      <nav
        className="absolute inset-y-0 left-0 z-20 w-[360px] overflow-hidden rounded-r-2xl px-3 pt-4 transition-transform duration-300 ease-out"
        style={{
          background: C.SURFACE,
          boxShadow: "0 0 12px 2px rgba(0,0,0,.16)",
          transform: open ? "translateX(0)" : "translateX(-105%)",
        }}
        aria-hidden={!open}
      >
        {DRAWER.map((section, i) => (
          <div key={section.title}>
            {i > 0 && (
              <div className="mx-4 my-2 h-px" style={{ background: C.BORDER }} />
            )}
            <div
              className="px-4 pb-2 pt-2 text-[11px] font-semibold"
              style={{ color: section.color }}
            >
              {section.title}
            </div>
            {section.items.map(([icon, label]) => (
              <div
                key={label}
                className="flex h-14 items-center gap-3 px-4 text-[14px] font-medium"
                style={{ color: C.TEXT_SECONDARY }}
              >
                <DrawerIcon name={icon} />
                {label}
              </div>
            ))}
          </div>
        ))}
      </nav>
    </>
  );
}

/* ── Finestra completa ──────────────────────────────────────────────────── */

function Window({
  open,
  onOpen,
  onClose,
}: {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  return (
    <div
      className="overflow-hidden rounded-[12px]"
      style={{
        width: DESIGN_WIDTH,
        border: "1px solid rgba(0,0,0,.28)",
        boxShadow: "0 24px 60px rgba(0,0,0,.28)",
        fontFamily: '"Segoe UI", Roboto, system-ui, -apple-system, sans-serif',
        letterSpacing: ".15px",
      }}
    >
      {/* Barra del titolo macOS */}
      <div
        className="relative flex h-[34px] select-none items-center px-4"
        style={{
          background: "linear-gradient(#ECECEC, #DCDCDC)",
          borderBottom: "1px solid #C4C4C4",
        }}
      >
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full" style={{ background: "#FF5F57", border: "0.5px solid #E0443E" }} />
          <span className="h-3 w-3 rounded-full" style={{ background: "#FEBC2E", border: "0.5px solid #DEA123" }} />
          <span className="h-3 w-3 rounded-full" style={{ background: "#28C840", border: "0.5px solid #1AAB29" }} />
        </div>
        <div
          className="absolute inset-x-0 text-center text-[13px] font-semibold"
          style={{ color: "#4D4D4D" }}
        >
          LabGale
        </div>
      </div>

      {/* Contenuto dell'app */}
      <div className="relative" style={{ background: C.BACKGROUND }}>
        {/* Header */}
        <header
          className="flex items-center justify-between p-6"
          style={{ background: C.SURFACE, boxShadow: SHADOW_SM }}
        >
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={onOpen}
              aria-label="Apri il menu"
              className="flex h-12 w-12 items-center justify-center rounded-full transition-colors hover:bg-black/5"
              style={{ cursor: "pointer" }}
            >
              <Menu />
            </button>
            <Flask />
            <span className="text-[24px] font-bold" style={{ color: C.TEXT_PRIMARY }}>
              Laboratorio Galenico
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-end">
              <span className="text-[14px] font-bold" style={{ color: C.TEXT_PRIMARY }}>
                Mario Rossi
              </span>
              <span className="text-[11px]" style={{ color: C.TEXT_SECONDARY }}>
                admin - Farmacia Demo
              </span>
            </div>
            <div className="flex h-12 w-12 items-center justify-center">
              <Person />
            </div>
          </div>
        </header>

        {/* Tre colonne */}
        <div className="grid grid-cols-3 gap-5 p-[30px]">
          <HubColumn
            title="Registro Materie Prime"
            primaryText="Nuova Registrazione"
            sectionTitle="Registrazioni Recenti"
          >
            {REGISTRAZIONI.map((r) => (
              <ListItem
                key={r.sub}
                titolo={r.titolo}
                sub={r.sub}
                leading={<Article color={C.SECONDARY} />}
                trailing={<Pdf />}
              />
            ))}
          </HubColumn>

          <HubColumn
            title="Schede Tecniche"
            primaryText="Nuova Scheda Tecnica"
            sectionTitle="Schede Tecniche Recenti"
          >
            {SCHEDE.map((s) => (
              <ListItem
                key={s.sub}
                titolo={s.titolo}
                sub={s.sub}
                leading={<Article color={C.SECONDARY} />}
                trailing={<Pdf />}
              />
            ))}
          </HubColumn>

          <HubColumn
            title="Fogli di Lavorazione"
            primaryText="Nuovo Foglio Lavorazione"
            sectionTitle="Fogli di Lavorazione Aperti"
          >
            {FOGLI.map((f) => (
              <ListItem
                key={f.sub}
                titolo={f.titolo}
                sub={f.sub}
                leading={<Article color={C.PRIMARY} />}
                trailing={<Chevron />}
              />
            ))}
          </HubColumn>
        </div>

        <Drawer open={open} onClose={onClose} />
      </div>
    </div>
  );
}

/* ── Wrapper che scala la finestra al contenitore ───────────────────────── */

export function AppMockup({ showDrawer = false }: { showDrawer?: boolean }) {
  // Il menu si apre cliccando l'icona in alto a sinistra e si chiude
  // cliccando fuori. `showDrawer` imposta solo lo stato iniziale.
  const [open, setOpen] = useState(showDrawer);
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [innerHeight, setInnerHeight] = useState(0);

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    const measure = () => {
      setScale(Math.min(1, outer.clientWidth / DESIGN_WIDTH));
      setInnerHeight(inner.offsetHeight);
    };
    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(outer);
    ro.observe(inner);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={outerRef}
      className="mx-auto w-full max-w-[1200px]"
      style={{ height: innerHeight ? innerHeight * scale : undefined }}
      role="group"
      aria-label="Anteprima interattiva di LabGale: clicca l'icona del menu per aprirlo"
    >
      <div
        ref={innerRef}
        style={{
          width: DESIGN_WIDTH,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        <Window
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
        />
      </div>
    </div>
  );
}
