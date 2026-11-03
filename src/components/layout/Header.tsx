"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE_CONFIG } from "@/config/site.config";
import { MAIN_NAV } from "@/config/navigation.config";
import { Button } from "@/components/ui/Button";
import { FlaskConical, Menu, X, Download } from "@/components/ui/Icons";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo / Brand Name Placeholder */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 rounded-md"
            aria-label={`${SITE_CONFIG.productName} - Homepage`}
          >
            <div className="w-9 h-9 rounded-md bg-brand-600 flex items-center justify-center text-white shadow-sm group-hover:bg-brand-700 transition-colors">
              <FlaskConical className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-heading-3 text-content-primary tracking-tight leading-none">
                {SITE_CONFIG.productName}
              </span>
              <span className="text-[11px] text-content-muted font-medium mt-0.5">
                Laboratorio Galenico
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Navigazione principale">
            {MAIN_NAV.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 text-body-md font-medium rounded-md transition-colors ${
                    isActive
                      ? "text-brand-700 bg-brand-50"
                      : "text-content-secondary hover:text-content-primary hover:bg-surface-subtle"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              href={SITE_CONFIG.primaryCta.href}
              variant="primary"
              size="md"
              leftIcon={<Download className="w-4 h-4" />}
            >
              {SITE_CONFIG.primaryCta.label}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="p-2 text-content-secondary hover:text-content-primary hover:bg-surface-subtle rounded-md focus:outline-none focus:ring-2 focus:ring-brand-600"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-border-subtle bg-white px-4 pt-2 pb-6 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-1" aria-label="Navigazione mobile">
            {MAIN_NAV.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`px-3 py-2.5 text-body-md font-medium rounded-md transition-colors ${
                    isActive
                      ? "text-brand-700 bg-brand-50"
                      : "text-content-secondary hover:text-content-primary hover:bg-surface-subtle"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="pt-2 border-t border-border-subtle flex flex-col gap-2">
            <Button
              href={SITE_CONFIG.primaryCta.href}
              variant="primary"
              size="lg"
              className="w-full justify-center"
              onClick={closeMenu}
              leftIcon={<Download className="w-5 h-5" />}
            >
              {SITE_CONFIG.primaryCta.label}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
