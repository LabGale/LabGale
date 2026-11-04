import React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site.config";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { AppMockup } from "@/components/sections/AppMockup";
import { Download, ChevronRight, ShieldCheck, HardDrive, Monitor } from "@/components/ui/Icons";

export function HeroSection() {
  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-gradient-to-b from-white via-brand-50/20 to-surface-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Hero Text */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2">
            <Badge variant="brand" size="md" icon={<ShieldCheck className="w-4 h-4 text-brand-600" />}>
              Gestionale galenico • Distribuito gratuitamente
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="text-display md:text-[44px] font-extrabold text-content-primary tracking-tight leading-[1.15]">
            {SITE_CONFIG.tagline}
          </h1>

          {/* Subheadline */}
          <p className="text-body-lg md:text-[18px] text-content-secondary max-w-2xl mx-auto leading-relaxed">
            {SITE_CONFIG.subheadline}
          </p>

          {/* CTA Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Button
              href={SITE_CONFIG.primaryCta.href}
              variant="primary"
              size="lg"
              className="w-full sm:w-auto shadow-md"
              leftIcon={<Download className="w-5 h-5" />}
            >
              Verifica le release
            </Button>
            <Button
              href={SITE_CONFIG.secondaryCta.href}
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
              rightIcon={<ChevronRight className="w-4 h-4" />}
            >
              {SITE_CONFIG.secondaryCta.label}
            </Button>
          </div>

          {/* Reassurance Micro-copy */}
          <div className="pt-1 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-body-sm text-content-muted">
            <span className="flex items-center gap-1.5">
              <HardDrive className="w-4 h-4 text-brand-600" />
              Database locale o remoto, secondo configurazione
            </span>
            <Link href="/scarica" className="flex items-center gap-1.5 hover:text-content-primary">
              <Monitor className="w-4 h-4 text-brand-600" />
              Verifica disponibilità e requisiti
            </Link>
          </div>
        </div>

        {/* App Mockup */}
        <div className="mt-12 md:mt-16">
          <AppMockup />
        </div>

      </div>
    </section>
  );
}
