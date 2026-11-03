import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blog.data";
import { SITE_CONFIG } from "@/config/site.config";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ChevronRight, FileText } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Blog & Notizie per il Laboratorio Galenico",
  description: "Articoli, approfondimenti e novità su gestione del laboratorio galenico, tracciabilità delle materie prime e adempimenti di farmacia.",
};

export default function BlogPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="inline-block px-3 py-1 text-body-sm font-semibold text-brand-700 bg-brand-50 border border-brand-200 rounded-full uppercase tracking-wider">
            Approfondimenti & Pratica
          </span>
          <h1 className="text-display md:text-[40px] font-extrabold text-content-primary tracking-tight">
            Il Blog del Laboratorio Galenico
          </h1>
          <p className="text-body-lg text-content-secondary leading-relaxed">
            Consigli pratici, analisi normative e guide operative per migliorare l'organizzazione e la qualità delle preparazioni in farmacia.
          </p>
        </div>

        {/* Articles List */}
        <div className="space-y-8">
          {BLOG_POSTS.map((post) => (
            <Card key={post.slug} as="article" padding="lg" className="bg-white border-border-subtle space-y-4">
              <div className="flex items-center justify-between text-body-sm">
                <Badge variant="brand" size="sm">{post.category}</Badge>
                <div className="flex items-center gap-3 text-content-muted">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime} di lettura</span>
                </div>
              </div>

              <div>
                <h2 className="text-heading-2 font-bold text-content-primary hover:text-brand-700 transition-colors">
                  {post.title}
                </h2>
                <p className="text-body-md text-content-secondary mt-2 leading-relaxed">
                  {post.summary}
                </p>
              </div>

              <div className="p-4 rounded-lg bg-slate-50 border border-border-subtle text-body-sm text-content-secondary leading-relaxed">
                <p>{post.content}</p>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </div>
  );
}
