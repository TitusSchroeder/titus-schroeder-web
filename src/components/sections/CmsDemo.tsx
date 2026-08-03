"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Edit3, Save, RotateCcw, Phone, ArrowUpRight, CheckCircle2 } from "lucide-react";

export const CmsDemo: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [savedState, setSavedState] = useState(false);

  const defaultHeadline = "Obermeier Holzmanufaktur";
  const defaultSubline = "Maßgefertigte Möbel aus Münchner Meisterhand. Seit 1998.";
  const defaultCta = "Angebot anfordern";

  const [headline, setHeadline] = useState(defaultHeadline);
  const [subline, setSubline] = useState(defaultSubline);
  const [cta, setCta] = useState(defaultCta);

  const handleSave = () => {
    setSavedState(true);
    setIsEditing(false);
    setTimeout(() => setSavedState(false), 3000);
  };

  const handleReset = () => {
    setHeadline(defaultHeadline);
    setSubline(defaultSubline);
    setCta(defaultCta);
    setSavedState(false);
  };

  return (
    <section id="cms-demo" className="py-24 bg-white relative overflow-visible">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative overflow-visible">

        {/* Section Header — minimal */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Ihre Website — direkt bearbeitbar
          </h2>
          <p className="text-slate-500 text-base max-w-lg mx-auto">
            Kein Backend, kein Login. Klicken Sie auf{" "}
            <span className="font-semibold text-slate-700">Bearbeiten</span> und tippen Sie einfach los.
          </p>
        </div>
        {/* User SVG Arrow: starts near "direkt bearbeitbar" and points directly to Bearbeiten button */}
        <AnimatePresence>
          {!isEditing && (
            <motion.img
              key="user-svg-arrow"
              src="/images/arrow.svg"
              alt=""
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="absolute hidden lg:block pointer-events-none z-30 select-none"
              style={{
                top: "10px",
                right: "40px",
                width: "220px",
                height: "125px",
                objectFit: "contain",
              }}
            />
          )}
        </AnimatePresence>
        {/* Browser Window */}
        <div className="rounded-2xl shadow-2xl border border-slate-200 overflow-hidden bg-white">

          {/* Browser Chrome */}
          <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center justify-between gap-3 relative">
            {/* Traffic lights + URL */}
            <div className="flex items-center gap-3 min-w-0">
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="w-3 h-3 rounded-full bg-rose-400" />
                <span className="w-3 h-3 rounded-full bg-amber-400" />
                <span className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>
              <span className="text-xs text-slate-400 font-mono truncate hidden sm:block bg-white border border-slate-200 px-3 py-1 rounded-full">
                https://obermeier-holzmanufaktur.de
              </span>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2 ml-auto shrink-0">
              <AnimatePresence>
                {savedState && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Gespeichert
                  </motion.span>
                )}
              </AnimatePresence>

              {isEditing ? (
                <>
                  <button
                    onClick={handleReset}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                    title="Zurücksetzen"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleSave}
                    className="flex items-center gap-1.5 bg-brand-blue text-white text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Save className="w-3.5 h-3.5" />
                    Speichern
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center gap-1.5 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-slate-700 transition-colors"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  Bearbeiten
                </button>
              )}
            </div>
          </div>

          {/* Website Preview */}
          <div className="relative min-h-[420px] sm:min-h-[500px] flex flex-col justify-between bg-slate-950 text-white overflow-hidden">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-50 transition-opacity duration-700"
              style={{ backgroundImage: `url('/images/schreinerei_hero.jpg')` }}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-slate-900/30 pointer-events-none" />

            {/* Nav */}
            <div className="relative z-10 px-6 sm:px-10 py-5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-amber-600 text-white font-bold flex items-center justify-center text-xs shadow">
                  OH
                </span>
                <span className="font-bold text-white text-sm tracking-tight">Obermeier Holzmanufaktur</span>
              </div>
              <div className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-300">
                <span>Leistungen</span>
                <span>Projekte</span>
                <span>Kontakt</span>
              </div>
            </div>

            {/* Hero Content — editable */}
            <div className="relative z-10 px-6 sm:px-10 pb-10 max-w-2xl space-y-4">
              {/* Headline */}
              <div
                contentEditable={isEditing}
                suppressContentEditableWarning
                onBlur={(e) => setHeadline(e.currentTarget.textContent || "")}
                className={`text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight transition-all duration-200 rounded-xl px-2 py-1 -mx-2 outline-none ${
                  isEditing
                    ? "ring-2 ring-brand-blue ring-offset-2 ring-offset-slate-900 bg-slate-800/60 cursor-text"
                    : "cursor-default"
                }`}
              >
                {headline}
              </div>

              {/* Subline */}
              <div
                contentEditable={isEditing}
                suppressContentEditableWarning
                onBlur={(e) => setSubline(e.currentTarget.textContent || "")}
                className={`text-sm sm:text-lg text-slate-300 leading-relaxed transition-all duration-200 rounded-xl px-2 py-1 -mx-2 outline-none ${
                  isEditing
                    ? "ring-2 ring-brand-blue ring-offset-2 ring-offset-slate-900 bg-slate-800/60 cursor-text"
                    : "cursor-default"
                }`}
              >
                {subline}
              </div>

              {/* CTA */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <div
                  contentEditable={isEditing}
                  suppressContentEditableWarning
                  onBlur={(e) => setCta(e.currentTarget.textContent || "")}
                  className={`inline-flex items-center gap-2 font-bold bg-amber-500 text-slate-950 px-5 py-3 rounded-xl shadow-md transition-all duration-200 outline-none ${
                    isEditing
                      ? "ring-2 ring-brand-blue ring-offset-2 ring-offset-slate-900 cursor-text"
                      : "cursor-default"
                  }`}
                >
                  <span>{cta}</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" />
                </div>

                <div className="text-xs text-slate-400 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>+49 89 452 890</span>
                </div>
              </div>
            </div>

            {/* Edit hint overlay — only when editing */}
            <AnimatePresence>
              {isEditing && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute top-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 bg-brand-blue text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg"
                >
                  <Edit3 className="w-3 h-3" />
                  Klicken Sie auf den Text zum Bearbeiten
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
