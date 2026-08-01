"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Edit3, Save, Lock, Unlock, Sparkles, CheckCircle2, RotateCcw, Phone, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const CmsDemo: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [savedState, setSavedState] = useState(false);

  // Default editable content for the authentic Munich Carpentry business
  const defaultHeadline = "Obermeier Holzmanufaktur — Meisterbetrieb München";
  const defaultSubline = "Maßgeschneiderte Möbel & edler Innenausbau aus Münchner Meisterhand. Seit 1998.";
  const defaultCta = "Jetzt Angebot anfordern";

  const [headline, setHeadline] = useState(defaultHeadline);
  const [subline, setSubline] = useState(defaultSubline);
  const [cta, setCta] = useState(defaultCta);

  const handleToggleEdit = () => {
    setIsEditing(!isEditing);
    setSavedState(false);
  };

  const handleSave = () => {
    setSavedState(true);
    setTimeout(() => {
      setSavedState(false);
    }, 4000);
  };

  const handleReset = () => {
    setHeadline(defaultHeadline);
    setSubline(defaultSubline);
    setCta(defaultCta);
    setSavedState(false);
  };

  return (
    <section id="cms-demo" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-3 sm:px-6 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue text-white font-bold text-xs sm:text-sm mb-3 shadow-glow">
            <Sparkles className="w-4 h-4" />
            <span>Direkt-Bearbeitung Live-Demo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
            Probieren Sie es selbst aus
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Klicken Sie oben rechts im Fenster auf <strong>"Editiermodus starten"</strong> und tippen Sie Ihre Änderungen direkt in die Vorschau-Website ein.
          </p>
        </div>

        {/* SINGLE CLEAN BROWSER WINDOW Showcase */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-300 overflow-hidden text-brand-navy relative">
          {/* Top Browser Bar + Integrated Controls */}
          <div className="bg-slate-100 border-b border-slate-200 px-4 py-3 flex flex-wrap items-center justify-between gap-3 relative">
            <div className="flex items-center gap-3 shrink-0">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-400 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
              </div>
              <span className="text-xs text-slate-500 font-mono hidden sm:inline-block bg-white px-3 py-1 rounded-full border border-slate-200 font-semibold">
                https://obermeier-holzmanufaktur.de
              </span>
            </div>

            {/* Hand-Drawn Arrow Callout pointing to the Edit Button */}
            {!isEditing && (
              <div className="hidden lg:flex items-center gap-2 absolute top-1 right-56 -translate-y-8 z-20 pointer-events-none animate-bounce">
                <span className="text-xs font-extrabold text-amber-400 tracking-wide bg-slate-900 px-3 py-1 rounded-full border border-amber-400/40 shadow-lg">
                  👈 Hier klicken zum Testen!
                </span>
                <svg className="w-6 h-6 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            )}

            {/* Action Bar inside Header */}
            <div className="flex items-center gap-3 ml-auto z-10">
              <AnimatePresence>
                {savedState && (
                  <motion.span
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="text-xs font-bold text-emerald-700 bg-emerald-100 border border-emerald-300 px-3 py-1.5 rounded-full flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    ✓ Live aktualisiert!
                  </motion.span>
                )}
              </AnimatePresence>

              {isEditing && (
                <>
                  <Button
                    onClick={handleSave}
                    variant="primary"
                    size="sm"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold shadow-md"
                  >
                    <Save className="w-3.5 h-3.5 mr-1.5" />
                    Speichern
                  </Button>

                  <button
                    onClick={handleReset}
                    className="text-slate-500 hover:text-slate-800 text-xs font-semibold px-2 py-1 flex items-center gap-1"
                    title="Standard zurücksetzen"
                  >
                    <RotateCcw className="w-3 h-3" />
                  </button>
                </>
              )}

              <Button
                onClick={handleToggleEdit}
                variant={isEditing ? "secondary" : "primary"}
                size="sm"
                className={
                  isEditing
                    ? "bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold"
                    : "bg-brand-blue hover:bg-brand-blueHover text-white font-bold shadow-glow"
                }
              >
                {isEditing ? (
                  <>
                    <Unlock className="w-3.5 h-3.5 mr-1.5" />
                    Editiermodus beenden
                  </>
                ) : (
                  <>
                    <Lock className="w-3.5 h-3.5 mr-1.5" />
                    ⚡ Editiermodus starten
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* REAL WEBSITE PREVIEW AREA (Carpentry Munich) */}
          <div className="relative min-h-[480px] sm:min-h-[540px] flex flex-col justify-between bg-slate-900 text-white overflow-hidden">
            {/* KI-Generated Hero Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-700 opacity-60"
              style={{ backgroundImage: `url('/images/schreinerei_hero.jpg')` }}
            />

            {/* Dark Overlay for High Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/70 to-slate-950/50 pointer-events-none" />

            {/* Real Website Header Navigation */}
            <div className="relative z-10 p-6 sm:p-8 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-amber-600 text-white font-bold flex items-center justify-center text-sm shadow-md">
                  OH
                </span>
                <span className="font-extrabold text-white text-base sm:text-lg tracking-tight">
                  Obermeier Holzmanufaktur
                </span>
              </div>
              <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-200">
                <span>Leistungen</span>
                <span>Über uns</span>
                <span>Projekte</span>
                <span className="text-amber-400 font-bold">München</span>
              </div>
            </div>

            {/* Real Website Hero Section (Directly Editable in Place) */}
            <div className="relative z-10 p-6 sm:p-12 my-auto max-w-3xl text-left space-y-4">
              <div className="inline-block bg-amber-500/90 text-slate-950 font-extrabold text-xs uppercase tracking-wider px-3.5 py-1 rounded-md shadow-sm">
                Schreinerei Meisterbetrieb · München Sendling
              </div>

              {/* Directly Editable Headline */}
              <div
                contentEditable={isEditing}
                suppressContentEditableWarning
                onBlur={(e) => setHeadline(e.currentTarget.textContent || "")}
                className={`text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight transition-all rounded-lg p-2 ${
                  isEditing
                    ? "border-2 border-dashed border-brand-blue bg-blue-900/60 outline-none focus:ring-2 focus:ring-brand-blue text-blue-100 cursor-text"
                    : "border border-transparent"
                }`}
              >
                {headline}
              </div>

              {/* Directly Editable Subline */}
              <div
                contentEditable={isEditing}
                suppressContentEditableWarning
                onBlur={(e) => setSubline(e.currentTarget.textContent || "")}
                className={`text-base sm:text-xl text-slate-200 leading-relaxed font-normal transition-all rounded-lg p-2 ${
                  isEditing
                    ? "border-2 border-dashed border-brand-blue bg-blue-900/60 outline-none focus:ring-2 focus:ring-brand-blue text-white cursor-text"
                    : "border border-transparent"
                }`}
              >
                {subline}
              </div>

              {/* Directly Editable CTA Button */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <div
                  contentEditable={isEditing}
                  suppressContentEditableWarning
                  onBlur={(e) => setCta(e.currentTarget.textContent || "")}
                  className={`inline-flex items-center gap-2 font-bold bg-amber-500 text-slate-950 px-6 py-3.5 rounded-xl shadow-lg transition-all ${
                    isEditing
                      ? "border-2 border-dashed border-brand-blue bg-amber-400 outline-none focus:ring-2 focus:ring-brand-blue cursor-text"
                      : "hover:bg-amber-400 cursor-pointer"
                  }`}
                >
                  <span>{cta}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>

                <div className="text-xs text-slate-300 font-semibold flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>+49 89 452 890</span>
                </div>
              </div>
            </div>

            {/* Real Website Bottom Footer Bar */}
            <div className="relative z-10 p-4 sm:p-6 border-t border-white/10 bg-slate-950/60 flex items-center justify-between text-xs text-slate-400 font-medium">
              <span>©Obermeier Holzmanufaktur München · Handwerkskammer München</span>
              {isEditing ? (
                <span className="text-amber-400 font-bold animate-pulse">
                  ✎ Tippen Sie direkt in den Text im Bild oben
                </span>
              ) : (
                <span className="text-slate-300">
                  Echte Live-Vorschau ohne Backend
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
