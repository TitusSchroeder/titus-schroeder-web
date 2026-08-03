"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Zap, TrendingUp, Star, Award, ArrowUpRight, Gauge, MessageSquarePlus, CheckCircle2 } from "lucide-react";

export const Features: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Clean Modern Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-brand-blue font-bold text-xs uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Erfolgsfaktoren für Münchner Betriebe</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Drei Bausteine für Ihren digitalen Erfolg
          </h2>
          <p className="text-slate-500 text-base max-w-2xl mx-auto">
            Gezielt entwickelt für Handwerk, Dienstleister & Mittelstand in München und der Region.
          </p>
        </div>

        {/* Clean Modern Feature Cards (No Pillars) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left items-stretch"
        >
          {/* FEATURE 1: SEO */}
          <motion.div variants={itemVariants} className="flex">
            <div className="rounded-2xl bg-white border border-slate-200/80 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full w-full group hover:border-brand-blue/30">
              <div>
                {/* Icon & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-brand-blue flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Search className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-slate-400 font-mono">01</span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-extrabold text-slate-900 mb-3 tracking-tight">
                  Gefunden werden (SEO)
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Schlanker Code und saubere Semantik für Top-Rankings bei lokalen Suchanfragen in München und Umgebung.
                </p>
              </div>

              {/* Bottom Key Benefit Tag */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-brand-blue">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Optimiert für Google Platz 1</span>
              </div>
            </div>
          </motion.div>

          {/* FEATURE 2: SPEED */}
          <motion.div variants={itemVariants} className="flex">
            <div className="rounded-2xl bg-white border border-slate-200/80 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full w-full group hover:border-emerald-500/30">
              <div>
                {/* Icon & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Gauge className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-slate-400 font-mono">02</span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-extrabold text-slate-900 mb-3 tracking-tight">
                  Minimale Ladezeit & Speed
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Ladezeiten unter 0,5 Sekunden. Keine trägen Baukästen oder überladenen Datenbanken im Hintergrund.
                </p>
              </div>

              {/* Bottom Key Benefit Tag */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-emerald-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>PageSpeed Score &lt; 0,5s</span>
              </div>
            </div>
          </motion.div>

          {/* FEATURE 3: CONVERSION */}
          <motion.div variants={itemVariants} className="flex">
            <div className="rounded-2xl bg-white border border-slate-200/80 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full w-full group hover:border-amber-500/30">
              <div>
                {/* Icon & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 text-amber-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-slate-400 font-mono">03</span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-extrabold text-slate-900 mb-3 tracking-tight">
                  Kunden überzeugen (Conversion)
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Ein modernes Design, das Vertrauen schafft und Ihre Münchner Neukunden ohne Umwege zur Anfrage führt.
                </p>
              </div>

              {/* Bottom Key Benefit Tag */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-amber-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Mehr qualifizierte Anfragen</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
