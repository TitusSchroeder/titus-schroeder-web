"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Zap, TrendingUp, Star, Award, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/Card";

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
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* SÄULE 1: SEO */}
          <motion.div variants={itemVariants}>
            <Card className="h-full flex flex-col justify-between p-8 bg-white border border-slate-200 hover:border-brand-blue/40 hover:shadow-lg transition-all">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-brand-blue flex items-center justify-center border border-blue-100 font-bold">
                    <Search className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-brand-blue bg-blue-50 px-3 py-1 rounded-full">
                    Säule 01
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-brand-navy mb-3">
                  Gefunden werden (SEO)
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Schlanker Code und saubere Semantik für Top-Rankings bei lokalen Suchanfragen in München und Umgebung.
                </p>
              </div>

              {/* Visuelles Widget: Google Search Result Mockup */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-4 text-left font-sans">
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
            </Card>
          </motion.div>

          {/* SÄULE 2: SPEED (Modern Light Design) */}
          <motion.div variants={itemVariants}>
            <Card className="h-full flex flex-col justify-between p-8 bg-white border border-slate-200 hover:border-brand-blue/40 hover:shadow-lg transition-all">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100 font-bold">
                    <Zap className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                    Säule 02
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-brand-navy mb-3">
                  Höchste Ladezeit & Speed
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Ladezeiten unter 0,5 Sekunden. Keine trägen Baukästen oder überladenen Datenbanken im Hintergrund.
                </p>
              </div>

              {/* Visuelles Widget: Modern Light PageSpeed Score */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-4 flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-500 font-medium">Google PageSpeed Rating</div>
                  <div className="text-xl font-extrabold text-emerald-600 flex items-center gap-1.5 mt-0.5">
                    <span>99 / 100</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-500 font-medium">Ladezeit</div>
                  <div className="text-sm font-bold text-brand-navy bg-white border border-slate-200 px-3 py-1 rounded-lg mt-0.5 inline-flex items-center gap-1 shadow-sm">
                    <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" /> 0.38 s
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* SÄULE 3: CONVERSION */}
          <motion.div variants={itemVariants}>
            <Card className="h-full flex flex-col justify-between p-8 bg-white border border-slate-200 hover:border-brand-blue/40 hover:shadow-lg transition-all">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100 font-bold">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full">
                    Säule 03
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-brand-navy mb-3">
                  Kunden überzeugen (Conversion)
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Ein modernes Design, das Vertrauen schafft und Ihre Münchner Neukunden ohne Umwege zur Anfrage führt.
                </p>
              </div>

              {/* Visuelles Widget: Lead Request Card */}
              <div className="bg-amber-50/80 border border-amber-200/80 rounded-2xl p-4 mt-4 text-left">
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
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
