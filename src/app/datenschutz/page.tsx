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

        <div className="space-y-6 text-slate-600 text-sm leading-relaxed text-left">
          <section>
            <h2 className="text-base font-bold text-brand-navy mb-2">1. Datenschutz auf einen Blick</h2>
            <p>
              Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten auf dieser Website auf. Wir setzen weder Cookies noch externe Tracking-Dienste (wie Google Analytics) ein.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-brand-navy mb-2">2. Verantwortliche Stelle</h2>
            <p>
              Titus Schröder — Webdesign & Entwicklung
              <br />
              Peter-Wolfram-Str. 19, 85540 Haar
              <br />
              E-Mail: titus@schroeder-muc.de
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-brand-navy mb-2">3. Hosting auf Netlify (Statisches Hosting)</h2>
            <p>
              Wir hosten diese Website bei <strong>Netlify Inc.</strong> (44 Montgomery Street, Suite 300, San Francisco, CA 94104, USA).
            </p>
            <p className="mt-2">
              Beim Aufruf dieser Website erfasst Netlify automatisch Log-Dateien (z. B. IP-Adresse, Browsertyp, Datum/Uhrzeit des Zugriffs). Dies ist technisch erforderlich, um die Website stabil und sicher bereitzustellen. Netlify verarbeitet Daten im Rahmen einer Auftragsverarbeitung gemäß Art. 28 DSGVO.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-brand-navy mb-2">4. Kontaktformular (StaticForms.dev)</h2>
            <p>
              Wenn Sie uns über das Kontaktformular Anfragen senden, werden Ihre Eingaben (Name, E-Mail, Telefonnummer, Nachricht) zwecks Bearbeitung der Anfrage verarbeitet.
            </p>
            <p className="mt-2">
              Die Übermittlung erfolgt verschlüsselt über den Formulardienst <strong>StaticForms</strong> (https://www.staticforms.xyz). Die Daten werden ausschließlich per SSL-Verschlüsselung an unsere E-Mail-Adresse (titus@schroeder-muc.de) weitergeleitet und nicht an Dritte verkauft oder für Werbezwecke genutzt.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-brand-navy mb-2">5. Keine Cookies & Keine Analytics-Tracker</h2>
            <p>
              Auf dieser Website werden keine Marketing-Cookies, keine Tracking-Pixel und keine externen Analyse-Tools verwendet. Ein Banner für Cookie-Einwilligungen ist daher nicht erforderlich.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-brand-navy mb-2">6. Ihre Rechte (DSGVO)</h2>
            <p>
              Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung oder Einschränkung der Verarbeitung Ihrer gespeicherten personenbezogenen Daten. Wenden Sie sich hierzu einfach per E-Mail an titus@schroeder-muc.de.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
