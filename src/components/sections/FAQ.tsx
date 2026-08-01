"use client";

import React from "react";
import content from "@/data/content.json";
import { AccordionItem } from "@/components/ui/Accordion";

export const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-24 bg-brand-card relative border-t border-b border-brand-border">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-3">
            Häufige Fragen
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            Alles, was Sie vor dem Projektstart wissen möchten
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-brand-border shadow-sm">
          {content.faq.map((item, idx) => (
            <AccordionItem
              key={idx}
              question={item.question}
              answer={item.answer}
              defaultOpen={idx === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
