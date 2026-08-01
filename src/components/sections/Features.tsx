"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Zap, TrendingUp, Star, Award, CheckCircle2, ShieldCheck, ArrowUpRight } from "lucide-react";

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
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            Drei Säulen, die Ihren Betrieb messbar nach vorne bringen
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left"
        >
          {/* SÄULE 1: SEO (Google Rank Graphic Card) */}
          <motion.div variants={itemVariants}>
            <div className="rounded-3xl bg-white border border-slate-200/80 shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col h-full">
              {/* Top Light Blue Graphic Box */}
              <div className="bg-sky-50/80 p-6 flex items-center justify-center border-b border-sky-100/80 min-h-[170px]">
                <div className="w-full max-w-[240px] bg-white rounded-2xl p-4 shadow-xl border border-slate-200 font-sans">
                  <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1">
                    <span className="truncate">google.de/search?q=schreinerei+muenchen</span>
                    <span className="text-emerald-700 font-bold flex items-center gap-1">
                      <Star className="w-2.5 h-2.5 fill-emerald-500 text-emerald-500" /> Platz 1
                    </span>
                  </div>
                  <div className="text-sm font-bold text-blue-700 truncate hover:underline cursor-pointer">
                    Schreinerei Obermeier | Meisterbetrieb München
                  </div>
                  <div className="text-xs text-slate-500 mt-1 line-clamp-2">
                    Ihr Experte für maßgeschneiderte Möbel & Ausbau in München. Direkt anfragen...
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

          {/* SÄULE 2: SPEED (Speed Score Graphic Card) */}
          <motion.div variants={itemVariants}>
            <div className="rounded-3xl bg-white border border-slate-200/80 shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col h-full">
              {/* Top Light Blue Graphic Box */}
              <div className="bg-sky-50/80 p-6 flex items-center justify-center border-b border-sky-100/80 min-h-[170px]">
                <div className="w-full max-w-[240px] bg-slate-950 text-white rounded-2xl p-4 shadow-xl border border-slate-800 font-mono text-xs">
                  <div className="flex items-center justify-between text-[10px] text-slate-400 mb-2">
                    <span className="font-bold text-brand-blue">SPEED SCORE</span>
                    <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full font-bold">100 / 100</span>
                  </div>
                  <div className="text-2xl font-black text-white mb-2 tracking-tight">
                    0.38s <span className="text-xs font-sans text-slate-400 font-normal">Ladezeit</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-400 rounded-full w-[99%]" />
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

          {/* SÄULE 3: CONVERSION (Conversion Lead Card) */}
          <motion.div variants={itemVariants}>
            <div className="rounded-3xl bg-white border border-slate-200/80 shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col h-full">
              {/* Top Light Blue Graphic Box */}
              <div className="bg-sky-50/80 p-6 flex items-center justify-center border-b border-sky-100/80 min-h-[170px]">
                <div className="w-full max-w-[240px] bg-white rounded-2xl p-4 shadow-xl border border-slate-200 text-left">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-amber-950">Neue Neukundenanfrage</span>
                    <span className="text-[10px] font-bold bg-amber-200 text-amber-900 px-2 py-0.5 rounded-full">
                      +45% Anfragen
                    </span>
                  </div>
                  <div className="text-xs text-amber-900 font-medium truncate">
                    "Projektangebot für Küchenausbau München..."
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
