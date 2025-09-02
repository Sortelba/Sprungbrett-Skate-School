// Diese Seite zeigt eine Übersicht aller verfügbaren Trainer an.
// Sie holt die Daten aus `src/data/trainers.ts` und stellt sie als Kacheln dar.
// Zusätzlich gibt es eine Suchfunktion, um die Liste zu filtern.

import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
// Importiert die Trainerdaten aus der zentralen Datendatei.
import { allTrainers } from '../data/trainers';
import { InstagramIcon } from '../constants/icons';

const TrainersPage: React.FC = () => {
  // 'useState' speichert den aktuellen Text aus dem Suchfeld.
  const [searchTerm, setSearchTerm] = useState('');

  // 'useMemo' ist eine Optimierung. Die Liste der Trainer wird nur dann neu gefiltert,
  // wenn sich der Suchbegriff ('searchTerm') ändert. Das verbessert die Performance.
  const filteredTrainers = useMemo(() => {
    // Wenn das Suchfeld leer ist, gib alle Trainer zurück.
    if (!searchTerm.trim()) {
      return allTrainers;
    }
    const lowercasedFilter = searchTerm.toLowerCase();
    // Filtert die 'allTrainers'-Liste. Ein Trainer bleibt in der Liste,
    // wenn sein Name ODER sein Ort den Suchbegriff enthält.
    return allTrainers.filter(trainer =>
      trainer.name.toLowerCase().includes(lowercasedFilter) ||
      trainer.location.toLowerCase().includes(lowercasedFilter)
    );
  }, [searchTerm]); // Abhängigkeit: Die Funktion wird nur neu ausgeführt, wenn sich 'searchTerm' ändert.

  return (
    <div className="max-w-6xl mx-auto py-12">
      {/* --- SEITENÜBERSCHRIFT & EINLEITUNG --- */}
      {/* Hier kannst du die Texte anpassen. */}
      <h1 className="text-4xl font-black text-center mb-4 tracking-tighter">
        FINDE DEINEN <span className="text-brand-green">TRAINER</span>
      </h1>
      <p className="text-center text-gray-400 mb-10">
        Durchsuche unsere Liste qualifizierter Skateboard-Trainer in deiner Umgebung.
      </p>

      {/* --- SUCHFUNKTION --- */}
      <div className="mb-12 flex justify-center items-center space-x-4">
        <input
          type="text"
          placeholder="Suche nach Name oder Ort..."
          value={searchTerm}
          // Bei jeder Eingabe im Suchfeld wird der 'searchTerm'-Zustand aktualisiert.
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md bg-gray-800 border-2 border-gray-700 rounded-full py-3 px-6 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all duration-300"
          aria-label="Search for trainers by name or location"
        />
        {/* Der Filter-Button hat aktuell keine Funktion, könnte aber für erweiterte Filter (z.B. nach Skill-Level) genutzt werden. */}
        <button className="bg-gray-700 text-white font-bold py-3 px-8 rounded-full hover:bg-brand-green hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
          Filter
        </button>
      </div>

      {/* --- TRAINER-GITTER --- */}
      {/* Hier wird geprüft, ob die gefilterte Liste Trainer enthält. */}
      {filteredTrainers.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Die 'map'-Funktion geht durch jeden Trainer in der 'filteredTrainers'-Liste
              und erstellt für jeden eine Trainer-Karte (<Link>). */}
          {filteredTrainers.map((trainer) => (
            <Link to={`/trainers/${trainer.id}`} key={trainer.id} className="block bg-gray-800 rounded-lg overflow-hidden group transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <div className="relative">
                {/* --- ZERTIFIZIERUNGS-SIEGEL --- */}
                {/* Dieses Siegel wird nur angezeigt, wenn der Trainer `isCertified: true` hat. */}
                {trainer.isCertified && (
                  <div className="absolute top-0 left-0 bg-brand-green text-gray-900 text-xs font-bold px-3 py-1 m-2 rounded-full z-10 flex items-center space-x-1 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Geprüfter Trainer</span>
                  </div>
                )}
                <img
                  src={trainer.imageUrl}
                  alt={trainer.name}
                  className="w-full h-64 object-cover"
                />
                {/* --- INSTAGRAM-ICON --- */}
                {/* Wird nur angezeigt, wenn eine 'instagramUrl' im Trainer-Objekt vorhanden ist. */}
                {trainer.instagramUrl && (
                    <a
                      href={trainer.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()} // Verhindert, dass der Klick auf die Detailseite weiterleitet.
                      className="absolute bottom-4 right-4 bg-gray-900 bg-opacity-70 p-2 rounded-full text-white hover:text-brand-green transform hover:scale-110 transition-all duration-200"
                      aria-label={`${trainer.name}'s Instagram`}
                    >
                      <InstagramIcon className="h-6 w-6" />
                    </a>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{trainer.name}</h3>
                <p className="text-brand-green font-semibold mb-3">{trainer.location}</p>
                <p className="text-gray-400 text-sm">{trainer.bio}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        // --- KEINE ERGEBNISSE ---
        // Dieser Block wird angezeigt, wenn die Suche keine Treffer ergibt.
        <div className="text-center bg-gray-800 p-12 rounded-lg shadow-2xl">
          <h2 className="text-2xl font-bold text-white mb-2">Keine Trainer gefunden</h2>
          <p className="text-gray-400">Deine Suche nach "{searchTerm}" ergab leider keine Treffer. Versuche es mit einem anderen Suchbegriff.</p>
        </div>
      )}
    </div>
  );
};

export default TrainersPage;
