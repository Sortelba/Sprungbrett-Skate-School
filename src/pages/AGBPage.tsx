// Diese Seite zeigt die Allgemeinen Geschäftsbedingungen (AGB).
// Sie regeln die vertraglichen Beziehungen zwischen dir und deinen Kunden.

import React from 'react';

const AGBPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 animate-fade-in-up">
      <h1 className="text-4xl font-black text-center mb-10 tracking-tighter">
        ALLGEMEINE <span className="text-brand-green">GESCHÄFTSBEDINGUNGEN</span>
      </h1>
      <div className="bg-gray-800 p-8 rounded-lg shadow-2xl space-y-8 text-gray-300">
        
        {/* --- HINWEIS --- */}
        {/* Dies sind Beispiel-AGB. Es ist sehr wichtig, dass du diese Texte an dein Geschäftsmodell anpasst */}
        {/* und sie idealerweise von einem Anwalt prüfen lässt, um rechtlich auf der sicheren Seite zu sein. */}
        {/* Ersetze die Platzhalter in eckigen Klammern. */}

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">§ 1 Geltungsbereich</h2>
          <p>
            Für alle Buchungen von Skateboard-Unterricht über Sprungbrett durch Verbraucher (§ 13 BGB) gelten die nachfolgenden AGB. Verbraucher ist jede natürliche Person, die ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer selbständigen beruflichen Tätigkeit zugerechnet werden können.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">§ 2 Vertragspartner, Vertragsabschluss</h2>
          <p>
            Der Vertrag kommt zustande mit [Dein Name/Firmenname]. Die Anfrage über das Kontaktformular stellt noch kein verbindliches Angebot dar. Der Vertragsschluss erfolgt durch eine individuelle Bestätigung per E-Mail nach der Anfrage.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">§ 3 Leistungen und Preise</h2>
          <p>
            Die konkret angebotenen Leistungen (Einzelunterricht, Gruppenkurse, etc.) und die jeweiligen Preise werden individuell vereinbart. Alle Preise sind Endpreise. Gemäß § 19 UStG wird keine Umsatzsteuer erhoben und folglich auch nicht ausgewiesen (Kleinunternehmerregelung).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">§ 4 Zahlung</h2>
          <p>
            Die Zahlung erfolgt in der Regel in bar vor Beginn der Unterrichtsstunde oder nach individueller Vereinbarung.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">§ 5 Stornierung und Ausfall</h2>
          <p>
            Eine gebuchte Stunde kann bis zu 24 Stunden vor dem vereinbarten Termin kostenfrei storniert werden. Bei späteren Absagen oder Nichterscheinen wird der volle Betrag fällig. Bei schlechtem Wetter (Regen, Schnee) wird ein Ersatztermin vereinbart. Fällt eine Stunde vonseiten des Trainers aus, wird ebenfalls ein Ersatztermin angeboten.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">§ 6 Haftung</h2>
          <p>
            Die Teilnahme am Skateboard-Unterricht erfolgt auf eigene Gefahr. Eine Haftung für Personen- und Sachschäden wird ausgeschlossen, soweit dies gesetzlich zulässig ist. Das Tragen von Schutzausrüstung (Helm, Schoner) wird dringend empfohlen. Für Minderjährige liegt die Aufsichtspflicht bei den Erziehungsberechtigten.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">§ 7 Schlussbestimmungen</h2>
          <p>
            Sollten einzelne Bestimmungen dieses Vertrages unwirksam sein oder werden, so wird hierdurch der übrige Inhalt dieses Vertrages nicht berührt. Als Gerichtsstand wird, soweit zulässig, [Deine Stadt] vereinbart.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AGBPage;
