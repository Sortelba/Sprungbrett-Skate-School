
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <h1 className="text-4xl font-black text-center mb-10 tracking-tighter">ÜBER <span className="text-brand-green">MICH</span></h1>
      <div className="grid md:grid-cols-3 gap-8 items-center bg-gray-800 p-8 rounded-lg shadow-2xl">
        <div className="md:col-span-1">
          <img 
            src="https://picsum.photos/400/400?random=1" 
            alt="Instructor" 
            className="rounded-full mx-auto w-48 h-48 md:w-full md:h-auto object-cover border-4 border-brand-green"
          />
        </div>
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-2xl font-bold text-white">Steffen</h2>
          <p className="text-gray-300">
            Mein Name ist Steffen, ich wurde 1992 geboren und habe 1999 mein erstes Skateboard bekommen. Seitdem hat mich das Skaten nicht mehr losgelassen. Über die Jahre habe ich unzählige Erfahrungen gesammelt – mit Rückschlägen, Erfolgen und allem, was dazwischen liegt. Skateboarding ist für mich mehr als nur ein Sport: Es ist Leidenschaft, Freiheit und eine Schule fürs Leben. Heute möchte ich meine Sichtweise teilen und allen helfen – egal ob jung oder alt, Anfänger oder Fortgeschrittener –, die mit dem Skaten starten wollen oder gerade nicht weiterkommen.
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