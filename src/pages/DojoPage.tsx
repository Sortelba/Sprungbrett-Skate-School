// Diese Seite dient als Eingangsportal für den "Dojo"-Bereich.
// Sie bietet dem Benutzer eine Auswahl zwischen "Beginner"- und "Fortgeschrittenen"-Tutorials.

import React from 'react';
import { Link } from 'react-router-dom';
// FIX: Added UserSearchIcon import
import { UserSearchIcon } from '../constants/icons';

const DojoPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 text-center">
      {/* --- SEITENÜBERSCHRIFT & EINLEITUNG --- */}
      {/* Hier kannst du die Texte anpassen. */}
      <h1 className="text-4xl font-black mb-4 tracking-tighter">
        SKATE <span className="text-brand-green">DOJO</span>
      </h1>
      <p className="text-gray-400 mb-12 text-lg">Wähle deinen Skill-Level, finde einen Trainer oder starte dein Training.</p>

      {/* Grid-Layout für die Auswahlkarten */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* --- KARTE: BEGINNER --- */}
        {/* Dieser 'Link' führt zur Unterseite für Anfänger-Tutorials. */}
        <Link
          to="/dojo/beginner"
          className="bg-gray-800 p-10 rounded-lg shadow-2xl group transform hover:-translate-y-2 transition-all duration-300 flex flex-col justify-center items-center"
        >
          {/* Icon für die Beginner-Karte */}
          <div className="mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-500 group-hover:text-brand-green transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </div>
          {/* Titel und Beschreibung der Karte */}
          <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-brand-green transition-colors duration-300">
            Beginner
          </h2>
          <p className="text-gray-400">
            Perfekt für deine ersten Schritte auf dem Board. Lerne die Grundlagen von Grund auf.
          </p>
        </Link>

        {/* --- KARTE: FORTGESCHRITTEN --- */}
        {/* Dieser 'Link' führt zur Unterseite für Fortgeschrittenen-Tutorials. */}
        <Link
          to="/dojo/advanced"
          className="bg-gray-800 p-10 rounded-lg shadow-2xl group transform hover:-translate-y-2 transition-all duration-300 flex flex-col justify-center items-center"
        >
           {/* Icon für die Fortgeschrittenen-Karte */}
           <div className="mb-4">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-500 group-hover:text-brand-green transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
           {/* Titel und Beschreibung der Karte */}
          <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-brand-green transition-colors duration-300">
            Fortgeschritten
          </h2>
          <p className="text-gray-400">
            Erweitere dein Trick-Repertoire und verbessere deinen Style mit unseren Tutorials.
          </p>
        </Link>
        
        {/* --- KARTE: TRAINER SUCHE --- */}
        {/* Dieser 'Link' führt zur Seite mit der Trainer-Übersicht. */}
        <Link
          to="/trainers"
          className="bg-gray-800 p-10 rounded-lg shadow-2xl group transform hover:-translate-y-2 transition-all duration-300 flex flex-col justify-center items-center md:col-span-2 lg:col-span-1"
        >
           {/* Icon für die Trainer-Suche */}
           <div className="mb-4">
             <UserSearchIcon className="h-12 w-12 text-gray-500 group-hover:text-brand-green transition-colors duration-300" />
          </div>
           {/* Titel und Beschreibung der Karte */}
          <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-brand-green transition-colors duration-300">
            Trainer Suche
          </h2>
          <p className="text-gray-400">
            Finde qualifizierte Skateboard-Trainer und geprüfte Coaches in deiner Umgebung.
          </p>
        </Link>

      </div>
    </div>
  );
};

export default DojoPage;