// Diese Komponente stellt die "Über Uns"-Seite dar.
// Hier kannst du Informationen über das Projekt "Sprungbrett" und dich selbst präsentieren.

import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12">
      {/* --- SEITENÜBERSCHRIFT --- */}
      <h1 className="text-4xl font-black text-center mb-10 tracking-tighter">ÜBER <span className="text-brand-green">UNS</span></h1>
      
      {/* Container für den Hauptinhalt, der das Layout (Bild links, Text rechts) steuert. */}
      <div className="grid md:grid-cols-3 gap-8 items-center bg-gray-800 p-8 rounded-lg shadow-2xl">
        
        {/* --- BILDSEKTION --- */}
        <div className="md:col-span-1">
          {/* Hier kannst du dein Profilbild ändern. */}
          {/* Lege das Bild im Ordner 'public/images' ab und ändere den 'src'-Pfad entsprechend. */}
          <img 
            src="/images/about.jpeg" 
            alt="Instructor Steffen performing a skateboard trick" 
            className="rounded-lg w-full h-auto object-cover border-4 border-brand-green shadow-lg"
          />
        </div>
        
        {/* --- TEXTSEKTION --- */}
        <div className="md:col-span-2 space-y-4">
          {/* Hier kannst du die Überschrift und die Texte anpassen. */}
          <h2 className="text-2xl font-bold text-white">Was ist Sprungbrett?</h2>
          <p className="text-gray-300">
            Dein Sprungbrett in die Welt des Skateboardens! Mit Sprungbrett bringen wir dich mit aktiven Skatern aus deiner Umgebung zusammen – Leuten, die die Szene kennen, die Leidenschaft fürs Skaten leben und verstehen, was Skateboarding wirklich bedeutet.Hier findest du motivierte Trainer:innen, die dir zeigen, wie du sicher auf dem Board stehst, die ersten Tricks lernst oder deine Skills weiter ausbaust.Ob Anfänger oder Fortgeschrittener – wir unterstützen dich dabei, deinen eigenen Style zu entwickeln und Teil der Skate-Community zu werden. Sprungbrett ist dein direkter Einstieg in die Skateszene – von Skatern, für Skater. Mach den ersten Schritt, finde deinen Coach und starte dein Skate-Abenteuer!
          </p>
          <p className="text-gray-300">
            Skateboarding kennt keine Grenzen – keine Herkunft, kein Alter, kein Status. Auf dem Brett sind wir alle gleich. Es ist egal, woher du kommst oder wer du bist: Wenn du ein Skateboard unter den Füßen hast, gehörst du dazu. Für mich ist Skaten Freiheit, Gemeinschaft und Respekt – eine Sprache, die jeder versteht.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
