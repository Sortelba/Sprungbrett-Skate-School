
import React from 'react';

const DojoPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 text-center">
      <h1 className="text-4xl font-black mb-10 tracking-tighter">
        SKATE <span className="text-brand-green">DOJO</span>
      </h1>
      <div className="bg-gray-800 p-8 rounded-lg shadow-2xl">
        <p className="text-gray-300 text-lg">
          Willkommen im Dojo! Hier findest du bald kurze Lernvideos und Tutorials für absolute Anfänger.
        </p>
        <p className="text-gray-300 text-lg mt-4">
          Vom richtigen Stehen auf dem Board bis zu deinem ersten Ollie – wir gehen alles Schritt für Schritt durch.
        </p>
      </div>
    </div>
  );
};

export default DojoPage;