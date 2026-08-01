"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, X, ShieldAlert, Zap, Sparkles } from "lucide-react";

export const Comparison: React.FC = () => {
  const comparisonItems = [
    {
      feature: "Geschwindigkeit",
      legacyTitle: "Träge (3–8 Sekunden)",
      legacyDesc: "Langsame Plugins & Datenbankabfragen.",
      modernTitle: "Blitzschnell (< 0,5 Sek.)",
      modernDesc: "Statische HTML-Auslieferung für Top-Google-Noten.",
    },
    {
      feature: "Sicherheit & Wartung",
      legacyTitle: "Hacking-Risiko & Updates",
      legacyDesc: "Ständige Sicherheitslücken & Plugin-Fehler.",
      modernTitle: "100% Ausfallsicher",
      modernDesc: "Keine angreifbare Datenbank. Wartungsfrei.",
    },
    {
      feature: "Inhaltspflege",
      legacyTitle: "Kompliziertes Backend",
      legacyDesc: "Verschachtelte Menüs & Einarbeitung nötig.",
      modernTitle: "Klick & Tippen auf der Seite",
      modernDesc: "Texte direkt anklicken und ändern.",
    },
    {
      feature: "Google Sichtbarkeit",
      legacyTitle: "Punktabzug bei Google",
      legacyDesc: "Langsame Baukästen verlieren Rankings.",
      modernTitle: "Top-Rankings in München",
      modernDesc: "Perfekte Noten für maximale Neukunden.",
    },
  ];

  return (
    <section id="vergleich" className="py-20 bg-slate-50/60 relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-brand-navy font-bold text-xs uppercase tracking-wider mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
            <span>Klarer Direktvergleich</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mb-2">
            Veraltet vs. Modern
          </h2>
          <p className="text-slate-600 text-base">
            Warum klassische WordPress-Websites Unternehmen heute bremsen.
          </p>
        </div>

        {/* Friendly Light Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Legacy Box (Light Gray Card) */}
          <div className="p-7 sm:p-8 rounded-3xl bg-slate-100 border border-slate-300 text-left">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-300">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold shrink-0">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                  Klassisches WordPress
                </h3>
                <p className="text-xs font-bold text-rose-700">Veraltet & Hoher Aufwand</p>
              </div>
            </div>

            <div className="space-y-6">
              {comparisonItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-rose-200 text-rose-900 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 leading-snug">
                      {item.legacyTitle}
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      {item.legacyDesc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Modern Box (FRIENDLY LIGHT WHITE CARD with Royal Blue Accent Border & Glow) */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="p-7 sm:p-8 rounded-3xl bg-white border-2 border-brand-blue shadow-glow relative overflow-hidden text-left"
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-brand-blue text-white flex items-center justify-center font-bold shrink-0 shadow-md">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-brand-navy">
                  Titus Schröder Web
                </h3>
                <p className="text-xs font-bold text-brand-blue">Schnell & Einfach</p>
              </div>
            </div>

            <div className="space-y-6">
              {comparisonItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs shadow-sm">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-brand-navy leading-snug">
                      {item.modernTitle}
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      {item.modernDesc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
