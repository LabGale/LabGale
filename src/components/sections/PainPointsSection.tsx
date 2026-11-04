import React from "react";
import { SITE_CONFIG } from "@/config/site.config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { AlertTriangle, Check, FileText, FolderArchive, Boxes, ClipboardCheck } from "@/components/ui/Icons";

export function PainPointsSection() {
  const painPoints = [
    {
      problemTitle: "Documenti e certificati dispersi",
      problemDesc: "Certificati di analisi archiviati in faldoni polverosi o allegati email introvabili al momento del bisogno o di un controllo ispettivo.",
      solutionTitle: "Gestione dei documenti",
      solutionDesc: "La sezione dedicata consente di gestire DDT, certificati di analisi e SDS. Il download dai provider supportati dipende dalla loro disponibilità.",
      icon: <FolderArchive className="w-5 h-5 text-amber-600" />,
    },
    {
      problemTitle: "Calcoli e trascrizioni manuali ripetute",
      problemDesc: "Ricalcolare a mano le quantità per forma farmaceutica o ricopiare gli stessi dati dal DDT al registro e dal registro al foglio di lavorazione.",
      solutionTitle: "Fogli di lavorazione",
      solutionDesc: "Compila fogli magistrali e officinali e usa gli strumenti di calcolo disponibili. I dati e i controlli professionali restano da verificare da parte dell'operatore.",
      icon: <ClipboardCheck className="w-5 h-5 text-amber-600" />,
    },
    {
      problemTitle: "Giacenze e scadenze a vista d'occhio",
      problemDesc: "Rischiare di accorgersi che una sostanza è esaurita o scaduta solo quando il paziente si presenta al banco con una preparazione urgente.",
      solutionTitle: "Consultazione di giacenze e movimenti",
      solutionDesc: "Consulta le quantità e i movimenti registrati nel gestionale; il riscontro delle scorte fisiche resta a carico del laboratorio.",
      icon: <Boxes className="w-5 h-5 text-amber-600" />,
    },
    {
      problemTitle: "Software datati, complicati o con canoni elevati",
      problemDesc: "Gestionali storici con interfacce degli anni '90, contratti vincolanti e costi sproporzionati per le esigenze reali del laboratorio.",
      solutionTitle: "Gestionale desktop dedicato",
      solutionDesc: "Il progetto è distribuito gratuitamente. Consulta la pagina download per verificare la disponibilità e i requisiti delle release.",
      icon: <FileText className="w-5 h-5 text-amber-600" />,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-y border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Dalla complessità all'ordine"
          title="Le sfide quotidiane del laboratorio galenico"
          subtitle="Allestire preparazioni richiede la massima concentrazione scientifica. La gestione burocratica e documentale non dovrebbe essere un ostacolo."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {painPoints.map((item, index) => (
            <Card key={index} padding="lg" className="border-border-subtle bg-slate-50/50 flex flex-col justify-between">
              
              {/* Problem Block */}
              <div className="space-y-3 pb-5 border-b border-border-subtle">
                <div className="flex items-center gap-2.5 text-amber-800">
                  <span className="p-1.5 rounded bg-amber-100/70 inline-flex shrink-0">
                    {item.icon}
                  </span>
                  <h3 className="font-bold text-heading-3 text-content-primary">
                    {item.problemTitle}
                  </h3>
                </div>
                <p className="text-body-md text-content-secondary leading-relaxed pl-9">
                  {item.problemDesc}
                </p>
              </div>

              {/* Solution Block */}
              <div className="pt-4 pl-9 space-y-1.5">
                <div className="flex items-center gap-2 text-brand-700 font-semibold text-body-md">
                  <Check className="w-4 h-4 text-brand-600 shrink-0" />
                  <span>Con {SITE_CONFIG.productName}: {item.solutionTitle}</span>
                </div>
                <p className="text-body-sm text-content-secondary leading-relaxed">
                  {item.solutionDesc}
                </p>
              </div>

            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
