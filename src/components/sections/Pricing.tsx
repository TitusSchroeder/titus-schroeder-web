"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Star } from "lucide-react";
import content from "@/data/content.json";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const Pricing: React.FC = () => {
  return (
    <section id="preise" className="py-24 bg-brand-bg relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-3">
            Transparente Preise
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mb-4">
            Keine versteckten Gebühren. Kein Abo-Zwang.
          </p>
          <p className="text-slate-600 text-base sm:text-lg">
            Klare Einmalpreise für die Erstellung Ihrer maßgeschneiderten Website in München & Region.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {content.pricing.map((tier) => (
            <Card
              key={tier.name}
              highlighted={tier.highlight}
              className="flex flex-col justify-between relative p-8"
            >
              <div>
                {/* Badge if highlight */}
                {tier.highlight && (
                  <div className="absolute top-4 right-4 bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-white text-white" />
                    <span>Beliebteste Wahl</span>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-brand-navy mb-2">{tier.name}</h3>
                <p className="text-slate-500 text-xs sm:text-sm mb-6 min-h-[40px]">
                  {tier.subtitle}
                </p>

                <div className="mb-8">
                  <span className="text-3xl sm:text-4xl font-black text-brand-navy">
                    {tier.price}
                  </span>
                  {tier.price !== "Auf Anfrage" && (
                    <span className="text-slate-400 text-xs ml-1 font-normal">zzgl. MwSt.</span>
                  )}
                </div>

                <div className="space-y-3.5 mb-8 border-t border-brand-border pt-6 text-left">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-50 text-brand-blue flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm font-medium text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a href="#kontakt" className="w-full mt-auto block">
                <Button
                  variant={tier.highlight ? "primary" : "outline"}
                  size="md"
                  className="w-full gap-2 group"
                >
                  <span>{tier.buttonText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center text-xs text-slate-400">
          * Alle Preise verstehen sich als einmalige Festpreise für die Website-Erstellung.
        </div>
      </div>
    </section>
  );
};
