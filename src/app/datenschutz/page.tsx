import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-brand-bg text-brand-navy py-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-3xl border border-brand-border shadow-sm">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Zurück zur Startseite</span>
        </Link>

        <h1 className="text-3xl font-extrabold tracking-tight mb-6">Datenschutzerklärung</h1>

        <div className="space-y-6 text-slate-600 text-sm leading-relaxed">
          <section>
            <h2 className="text-base font-bold text-brand-navy mb-2">1. Datenschutz auf einen Blick</h2>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-brand-navy mb-2">2. Datenerfassung auf dieser Website</h2>
            <p className="font-semibold text-brand-navy">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</p>
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber: Titus Schröder — Mediengestaltung, E-Mail: titus@schroeder-muc.de.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-brand-navy mb-2">3. Hosting & Statische Auslieferung</h2>
            <p>
              Diese Website wird als statisches HTML-Paket betrieben. Es werden keine Datenbank-Logs oder personenbezogene Bewegungsprofile durch Server-Side-Scripts gespeichert.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-brand-navy mb-2">4. Kontaktformular (StaticForms)</h2>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten werden über den Dienst StaticForms (https://www.staticforms.xyz) sicher per SSL verschlüsselt an uns übermittelt.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-brand-navy mb-2">5. Ihre Rechte</h2>
            <p>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
