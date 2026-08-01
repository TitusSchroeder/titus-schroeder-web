"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck, Zap, Star } from "lucide-react";
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

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-5xl">
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

        {/* FRIENDLY, ELEGANT LIGHT SHOWCASE CARDS (With spacious mt-20 margin) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-20 sm:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 text-left"
        >
          <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-slate-300 transition-all flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-brand-blue flex items-center justify-center shrink-0 font-bold">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-brand-navy text-base">Ladezeit unter 0,5s</h4>
              <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                Statischer HTML-Code ohne träge Datenbanken.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-slate-300 transition-all flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-brand-navy text-base">100% Ausfallsicher</h4>
              <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                Keine Sicherheitslücken, Hacking-Risiken oder Updates.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-slate-300 transition-all flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 font-bold">
              <Star className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-brand-navy text-base">Münchner Betriebe</h4>
              <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                Direkter Ansprechpartner ohne Agentur-Wasserkopf.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
