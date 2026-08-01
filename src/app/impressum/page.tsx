import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ImpressumPage() {
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

        <h1 className="text-3xl font-extrabold tracking-tight mb-6">Impressum</h1>

        <div className="space-y-6 text-slate-600 text-sm leading-relaxed">
          <section>
            <h2 className="text-base font-bold text-brand-navy mb-2">Angaben gemäß § 5 TMG</h2>
            <p>
              Titus Schröder
              <br />
              Webdesign & Entwicklung
              <br />
              Peter-Wolfram-Str. 19
              <br />
              85540 Haar
              <br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-brand-navy mb-2">Kontakt</h2>
            <p>
              E-Mail: titus@schroeder-muc.de
              <br />
              Website: www.titus-schroeder.de
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-brand-navy mb-2">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p>
              Titus Schröder
              <br />
              Peter-Wolfram-Str. 19
              <br />
              85540 Haar
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-brand-navy mb-2">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-brand-navy mb-2">Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-brand-navy mb-2">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
