import React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site.config";
import { FOOTER_SECTIONS } from "@/config/navigation.config";
import { FlaskConical, Monitor } from "@/components/ui/Icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-border-subtle mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              href="/"
              className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 rounded-md inline-flex"
            >
              <div className="w-8 h-8 rounded-md bg-brand-600 flex items-center justify-center text-white shadow-sm">
                <FlaskConical className="w-4 h-4" />
              </div>
              <span className="font-bold text-heading-3 text-content-primary tracking-tight">
                {SITE_CONFIG.productName}
              </span>
            </Link>
            <p className="text-body-md text-content-secondary max-w-sm leading-relaxed">
              Il gestionale professionale per il laboratorio galenico della farmacia. Gratuito, moderno, affidabile e funzionante in locale su Windows, macOS e Linux.
            </p>
            <div className="pt-2 text-body-sm text-content-muted space-y-1">
              <p className="flex items-center gap-2">
                <Monitor className="w-4 h-4 text-brand-600" />
                <span>Applicazione desktop locale • Dati protetti sul tuo computer</span>
              </p>
              <p>Email: <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-content-secondary hover:text-brand-600 underline">{SITE_CONFIG.contact.email}</a></p>
            </div>
          </div>

          {/* Links Columns */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title} className="space-y-3">
              <h3 className="text-body-md font-semibold text-content-primary uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-2 text-body-sm" role="list">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-content-secondary hover:text-brand-700 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Disclaimer & Legal Bottom */}
        <div className="mt-12 pt-8 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-4 text-body-sm text-content-muted">
          <p className="text-center md:text-left">
            © {currentYear} {SITE_CONFIG.productName}. Tutti i diritti riservati. {SITE_CONFIG.company.legalName} — P.IVA {SITE_CONFIG.company.vatNumber}.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-content-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/termini" className="hover:text-content-primary transition-colors">
              Termini di Utilizzo
            </Link>
            <Link href="/contatti" className="hover:text-content-primary transition-colors">
              Contatti
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
