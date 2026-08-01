"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Star, ShieldCheck } from "lucide-react";
import content from "@/data/content.json";
import { Button } from "@/components/ui/Button";

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 500], [0, 80]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.5]);

  return (
    <section className="relative min-h-[90vh] pt-32 pb-24 md:pt-40 md:pb-32 flex flex-col justify-center items-center text-center overflow-hidden bg-white">
      {/* Subtle Background Mesh Grid */}
      <motion.div
        style={{ y: yBg, opacity }}
        className="absolute inset-0 pointer-events-none z-0"
      >
        <div
          className="w-full h-full opacity-[0.18]"
          style={{
            backgroundImage: `radial-gradient(#0A192F 1.2px, transparent 1.2px)`,
            backgroundSize: "28px 28px",
          }}
        />
        {/* Soft Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        {/* Sub-Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100/80 border border-slate-200 text-brand-navy font-bold text-xs sm:text-sm mb-6 shadow-sm"
        >
          <Sparkles className="w-4 h-4 text-brand-blue" />
          <span className="tracking-wide">{content.hero.badge}</span>
        </motion.div>

        {/* H1 Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-brand-navy tracking-tight leading-[1.12] mb-6 max-w-4xl mx-auto"
        >
          Schnelle, moderne Websites, die in München{" "}
          <span className="text-brand-blue underline decoration-brand-blue/30 underline-offset-8">
            gefunden werden
          </span>{" "}
          – und Kunden überzeugen.
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-700 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-10 font-normal"
        >
          {content.hero.subline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#kontakt" className="w-full sm:w-auto">
            <Button variant="primary" size="lg" className="w-full sm:w-auto gap-2.5 font-bold shadow-glow group">
              <span>{content.hero.ctaPrimary}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>

          <a href="#cms-demo" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full sm:w-auto font-bold border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white">
              <span>{content.hero.ctaSecondary}</span>
            </Button>
          </a>
        </motion.div>

        {/* GRAPHIC FEATURE CARDS BELOW HERO (Matching Screenshot Design) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-20 sm:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-left"
        >
          {/* Card 1: Custom Code Speed */}
          <div className="rounded-3xl bg-white border border-slate-200/80 shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col">
            {/* Top Light Blue Graphic Box */}
            <div className="bg-sky-50/80 p-6 flex items-center justify-center border-b border-sky-100/80 min-h-[170px]">
              <div className="w-full max-w-[240px] bg-slate-950 text-white rounded-2xl p-4 shadow-xl border border-slate-800 font-mono text-xs">
                <div className="flex items-center justify-between text-[10px] text-slate-400 mb-2">
                  <span className="font-bold text-brand-blue">NEXT.JS 14</span>
                  <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full font-bold">100 / 100</span>
                </div>
                <div className="text-2xl font-black text-white mb-2 tracking-tight">
                  0.35s <span className="text-xs font-sans text-slate-400 font-normal">Load Time</span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-400 rounded-full w-[98%]" />
                </div>
              </div>
            </div>
            {/* Card Content */}
            <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
              <div>
                <h4 className="text-lg font-extrabold text-brand-navy mb-2">Custom Code Speed</h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Programmiert mit Next.js & TypeScript. Keine trägen WordPress-Plugins – lädt extrem schnell in Bruchteilen einer Sekunde.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Lokales SEO München */}
          <div className="rounded-3xl bg-white border border-slate-200/80 shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col">
            {/* Top Light Blue Graphic Box */}
            <div className="bg-sky-50/80 p-6 flex items-center justify-center border-b border-sky-100/80 min-h-[170px]">
              <div className="w-full max-w-[240px] bg-white rounded-2xl p-4 shadow-xl border border-slate-200 text-left font-sans">
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-600 mb-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>#1 Google Rank München</span>
                </div>
                <div className="text-sm font-bold text-blue-700 truncate">titus-schroeder.de</div>
                <div className="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-tight">
                  Webdesign & Entwicklung München. SEO-optimiert...
                </div>
              </div>
            </div>
            {/* Card Content */}
            <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
              <div>
                <h4 className="text-lg font-extrabold text-brand-navy mb-2">Lokales SEO München</h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Damit Ihre Zielgruppe Sie auf Google findet. Sauber strukturierter Code, Meta-Tags & Schema.org Auszeichnung inklusive.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: 100% Ausfallsicher & Wartungsfrei */}
          <div className="rounded-3xl bg-white border border-slate-200/80 shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col">
            {/* Top Light Blue Graphic Box */}
            <div className="bg-sky-50/80 p-6 flex items-center justify-center border-b border-sky-100/80 min-h-[170px]">
              <div className="w-full max-w-[240px] bg-white rounded-2xl p-4 shadow-xl border border-slate-200 text-left">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Sicherheit & Status</span>
                  <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                    100% Online
                  </span>
                </div>
                <div className="text-xs font-bold text-brand-navy flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>0% Angriffsfläche</span>
                </div>
                <div className="text-[11px] text-slate-500 mt-1">
                  Keine Datenbank, keine Hacking-Risiken.
                </div>
              </div>
            </div>
            {/* Card Content */}
            <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
              <div>
                <h4 className="text-lg font-extrabold text-brand-navy mb-2">Ausfallsicher & Wartungsfrei</h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Bei unserer schlanken Architektur gibt es keine angreifbaren Datenbanken im Hintergrund. Ihre Seite läuft extrem stabil.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
