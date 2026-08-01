"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, UserCheck, ShieldCheck, Clock, PhoneCall } from "lucide-react";
import content from "@/data/content.json";

export const About: React.FC = () => {
  return (
    <section id="uber-mich" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content Column */}
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-brand-blue font-bold text-xs mb-4">
              <MapPin className="w-3.5 h-3.5" />
              <span>{content.about.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight leading-tight mb-6">
              {content.about.h2}
            </h2>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-8">
              {content.about.text}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <UserCheck className="w-5 h-5 text-brand-blue shrink-0" />
                <span className="text-sm font-bold text-brand-navy">100% Persönlicher Kontakt</span>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <ShieldCheck className="w-5 h-5 text-brand-blue shrink-0" />
                <span className="text-sm font-bold text-brand-navy">Saubere Verlässlichkeit</span>
              </div>
            </div>
          </div>

          {/* Personal Munich Commitment Card */}
          <div className="lg:col-span-5">
            <motion.div
              whileHover={{ y: -4 }}
              className="p-8 rounded-3xl bg-brand-navy text-white shadow-2xl relative border border-slate-800 text-left"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-blue text-white flex items-center justify-center text-xl font-black shrink-0 shadow-md">
                  TS
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-white">Titus Schröder</h3>
                  <p className="text-brand-blue font-bold text-xs mt-0.5">Digital Studio München</p>
                </div>
              </div>

              <div className="space-y-4 text-xs text-slate-300 border-t border-slate-800 pt-6 mb-6">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-bold">1 bis 2 Wochen Lieferzeit</strong>
                    Vom ersten Gespräch bis zur fertigen Online-Website.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-bold">Persönlich in München</strong>
                    Beratung & Abstimmung auf Wunsch direkt vor Ort bei Ihrem Betrieb.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <PhoneCall className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-bold">Direkter Draht</strong>
                    Sie sprechen jederzeit direkt mit mir – ohne Projektleiter-Umwege.
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 text-[11px] font-semibold text-slate-400 flex items-center justify-between">
                <span>München Sendling & Region</span>
                <span className="text-emerald-400 font-bold">✓ Festpreis-Garantie</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
