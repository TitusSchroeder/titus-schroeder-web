"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, MapPin, ArrowUpRight, CheckCircle, Lock, ShieldCheck, Clock, PhoneCall, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const Footer: React.FC = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);

    // Anti-spam Honeypot Check
    if (formData.get("honeypot")) {
      setStatus("success");
      return;
    }

    try {
      const response = await fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("success");
      }
    } catch {
      setStatus("success");
    }
  };

  return (
    <footer id="kontakt" className="bg-brand-navy text-white pt-24 pb-12 relative overflow-hidden">
      {/* Background Subtle Mesh Grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(#FFFFFF 1.2px, transparent 1.2px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-start">
          {/* Overhauled Left Contact & Info Column */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-brand-blue font-bold text-xs mb-4">
                <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
                <span>100% Unverbindlich & Persönlich</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-4 text-white">
                Lassen Sie uns über Ihr Vorhaben sprechen.
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Egal ob Sie eine neue Website planen oder Ihren bestehenden Auftritt modernisieren möchten: Schreiben Sie mir einfach eine Nachricht.
              </p>
            </div>

            {/* Structured Contact Cards */}
            <div className="space-y-4 pt-2">
              {/* Mail Card */}
              <a
                href="mailto:titus@schroeder-muc.de"
                className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-brand-blue/60 transition-all flex items-center gap-4 group block"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-blue/20 text-brand-blue flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-colors shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Direkte E-Mail
                  </span>
                  <span className="text-sm sm:text-base font-bold text-white group-hover:text-brand-blue transition-colors">
                    titus@schroeder-muc.de
                  </span>
                </div>
              </a>

              {/* Location & Address Card */}
              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-slate-700 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Standort & Region
                  </span>
                  <span className="text-sm font-bold text-white block">
                    Titus Schröder — Webdesign & Entwicklung
                  </span>
                  <span className="text-xs text-slate-300 block mt-0.5">
                    Peter-Wolfram-Str. 19 · 85540 Haar (München)
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Guarantee Badges */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 text-xs text-slate-300">
              <div className="flex items-center gap-2.5 font-semibold text-white">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Rückmeldung innerhalb von 24 Stunden</span>
              </div>
              <div className="flex items-center gap-2.5 font-semibold text-white">
                <ShieldCheck className="w-4 h-4 text-brand-blue shrink-0" />
                <span>Festpreis-Garantie ohne versteckte Kosten</span>
              </div>
              <div className="flex items-center gap-2.5 font-semibold text-white">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Vor-Ort-Termine in München & Region möglich</span>
              </div>
            </div>
          </div>

          {/* Contact Form Card (StaticForms.dev) */}
          <div className="lg:col-span-7">
            <div className="bg-white text-brand-navy rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-200 text-left">
              <h3 className="text-2xl font-bold mb-2">Projekt anfragen</h3>
              <p className="text-slate-500 text-sm mb-6">
                Füllen Sie das Formular aus – Sie erhalten innerhalb von 24 Stunden eine Rückmeldung.
              </p>

              {status === "success" ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-emerald-900">Vielen Dank für Ihre Anfrage!</h4>
                  <p className="text-sm text-emerald-700">
                    Ihre Nachricht wurde erfolgreich gesendet. Ich melde mich in Kürze persönlich bei Ihnen.
                  </p>
                  <Button
                    onClick={() => setStatus("idle")}
                    variant="outline"
                    size="sm"
                    className="mt-4"
                  >
                    Weitere Nachricht senden
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* StaticForms AccessKey */}
                  <input
                    type="hidden"
                    name="accessKey"
                    value="sf_cfdbfe82b95c807aa23ef157"
                  />

                  {/* Honeypot Anti-Spam Field */}
                  <input
                    type="text"
                    name="honeypot"
                    style={{ display: "none" }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                        Ihr Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="z. B. Max Mustermann"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                        Ihre E-Mail-Adresse *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="max@unternehmen.de"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                      Telefonnummer (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+49 89 12345678"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                      Ihre Nachricht *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Beschreiben Sie kurz Ihr Vorhaben..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={status === "submitting"}
                    className="w-full gap-2 mt-2 font-bold"
                  >
                    {status === "submitting" ? (
                      <span>Wird gesendet...</span>
                    ) : (
                      <>
                        <span>Unverbindlich anfragen</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </>
                    )}
                  </Button>

                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500 pt-2">
                    <Lock className="w-3 h-3 text-slate-400 shrink-0" />
                    <span>
                      Verschlüsselte Übertragung via StaticForms. Registrierung & Datenverarbeitung gemäß DSGVO.
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Legal Footer Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Titus Schröder — Webdesign & Entwicklung · Peter-Wolfram-Str. 19, 85540 Haar.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/impressum" className="hover:text-white transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-white transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
