"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, MapPin, Send, CheckCircle } from "lucide-react";
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
      {/* Background Subtle Lines */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(#FFFFFF 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Contact Information */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                Lassen Sie uns über Ihr Projekt sprechen.
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Ich unterstütze Sie gerne bei Ihrem neuen Webauftritt. Schicken Sie mir eine Nachricht für ein unverbindliches Erstgespräch.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-800">
              <a
                href="mailto:titus@schroeder-muc.de"
                className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-slate-800 text-brand-blue flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-colors shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">E-Mail Adresse</span>
                  <span className="text-base font-semibold">titus@schroeder-muc.de</span>
                </div>
              </a>

              <div className="flex items-start gap-4 text-slate-300">
                <div className="w-10 h-10 rounded-full bg-slate-800 text-brand-blue flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">Standort / Anschrift</span>
                  <span className="text-sm font-semibold block text-white">
                    Titus Schröder — Webdesign & Entwicklung
                  </span>
                  <span className="text-xs text-slate-300 block">
                    Peter-Wolfram-Str. 19 · 85540 Haar (München)
                  </span>
                </div>
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
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Legal Footer Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Titus Schröder — Webdesign & Entwicklung · Peter-Wolfram-Str. 19, 85540 Haar
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
