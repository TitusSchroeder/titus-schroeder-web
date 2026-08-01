"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import content from "@/data/content.json";
import { Button } from "@/components/ui/Button";
import { InteractiveDotGrid } from "@/components/ui/InteractiveDotGrid";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] pt-32 pb-20 md:pt-40 md:pb-24 flex flex-col justify-center items-center text-center overflow-hidden bg-white">
      {/* Interactive Antigravity Dot Grid (Repulses on Mouse Hover) */}
      <InteractiveDotGrid />

      {/* Soft Ambient Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-5xl">
        {/* Sub-Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100/90 border border-slate-200 text-brand-navy font-bold text-xs sm:text-sm mb-6 shadow-sm"
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
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
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

        {/* Trust Factors Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-semibold text-slate-600 border-t border-slate-100 pt-8"
        >
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-emerald-600" />
            <span>Ladezeit unter 0,5s</span>
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-blue" />
            <span>Direkt-Bearbeitung ohne Backend</span>
          </div>

          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>100% DSGVO & Wartungsfrei</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
