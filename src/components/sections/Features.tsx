"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Zap, TrendingUp, Star, Award, CheckCircle2, ArrowUpRight, Gauge, MessageSquarePlus } from "lucide-react";

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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="features" className="py-24 bg-slate-50/70 relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-brand-blue font-bold text-xs uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Erfolgsfaktoren für Münchner Betriebe</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mb-3">
            Drei Säulen, die Ihren Betrieb messbar nach vorne bringen
          </h2>
          <p className="text-slate-600 text-base max-w-2xl mx-auto">
            Gezielt entwickelt für Handwerk, Dienstleister & Mittelstand in München und der Region.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left"
        >
          {/* SÄULE 1: SEO (Clean Light Google Rank Graphic) */}
          <motion.div variants={itemVariants}>
            <div className="rounded-3xl bg-white border border-slate-200/80 shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col h-full">
              {/* Top Light Blue Graphic Box */}
              <div className="bg-sky-50/80 p-6 flex items-center justify-center border-b border-sky-100/80 min-h-[180px]">
                <div className="w-full max-w-[240px] bg-white rounded-2xl p-5 shadow-lg border border-slate-200 text-center font-sans">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-extrabold text-xs mb-3">
                    <Star className="w-3.5 h-3.5 fill-emerald-500 text-emerald-500" />
                    <span>Platz 1 bei Google</span>
                  </div>
                  <div className="text-xl font-black text-brand-navy tracking-tight">
                    München SEO
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full mt-3 overflow-hidden">
                    <div className="h-full bg-brand-blue rounded-full w-full" />
                  </div>
                </div>
              </div>
              {/* Card Content */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                <div>
                  <span className="text-xs font-bold text-brand-blue bg-blue-50 px-3 py-1 rounded-full inline-block mb-3">
                    Säule 01
                  </span>
                  <h3 className="text-xl font-extrabold text-brand-navy mb-2">Gefunden werden (SEO)</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Schlanker Code und saubere Semantik für Top-Rankings bei lokalen Suchanfragen in München und Umgebung.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* SÄULE 2: SPEED (Clean Light Speed Graphic - NO BLACK BACKGROUND) */}
          <motion.div variants={itemVariants}>
            <div className="rounded-3xl bg-white border border-slate-200/80 shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col h-full">
              {/* Top Light Blue Graphic Box */}
              <div className="bg-sky-50/80 p-6 flex items-center justify-center border-b border-sky-100/80 min-h-[180px]">
                <div className="w-full max-w-[240px] bg-white rounded-2xl p-5 shadow-lg border border-slate-200 text-center font-sans">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-brand-blue font-extrabold text-xs mb-2">
                    <Gauge className="w-3.5 h-3.5" />
                    <span>PageSpeed Score 100%</span>
                  </div>
                  <div className="text-3xl font-black text-emerald-600 tracking-tight my-1">
                    0,38s
                  </div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Ladezeit
                  </div>
                </div>
              </div>
              {/* Card Content */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                <div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full inline-block mb-3">
                    Säule 02
                  </span>
                  <h3 className="text-xl font-extrabold text-brand-navy mb-2">Minimale Ladezeit & Speed</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Ladezeiten unter 0,5 Sekunden. Keine trägen Baukästen oder überladenen Datenbanken im Hintergrund.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* SÄULE 3: CONVERSION (Clean Light Lead Graphic) */}
          <motion.div variants={itemVariants}>
            <div className="rounded-3xl bg-white border border-slate-200/80 shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col h-full">
              {/* Top Light Blue Graphic Box */}
              <div className="bg-sky-50/80 p-6 flex items-center justify-center border-b border-sky-100/80 min-h-[180px]">
                <div className="w-full max-w-[240px] bg-white rounded-2xl p-5 shadow-lg border border-slate-200 text-center font-sans">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 font-extrabold text-xs mb-2">
                    <MessageSquarePlus className="w-3.5 h-3.5 text-amber-600" />
                    <span>+45% Mehr Anfragen</span>
                  </div>
                  <div className="text-lg font-black text-brand-navy tracking-tight mt-2 flex items-center justify-center gap-1">
                    <span>Neue Kunden</span>
                    <ArrowUpRight className="w-4 h-4 text-emerald-600" />
                  </div>
                </div>
              </div>
              {/* Card Content */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                <div>
                  <span className="text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full inline-block mb-3">
                    Säule 03
                  </span>
                  <h3 className="text-xl font-extrabold text-brand-navy mb-2">Kunden überzeugen (Conversion)</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Ein modernes Design, das Vertrauen schafft und Ihre Münchner Neukunden ohne Umwege zur Anfrage führt.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
