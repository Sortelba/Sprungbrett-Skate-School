// Diese Seite zeigt die Tutorial-Videos für Fortgeschrittene.
// Sie verwendet die wiederverwendbare 'VideoEmbed'-Komponente, um die Videos darzustellen.

import React from 'react';
import { Link } from 'react-router-dom';
import VideoEmbed from '../components/VideoEmbed'; // Import der Video-Komponente

const DojoAdvancedPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 animate-fade-in-up">
      {/* --- "ZURÜCK"-LINK --- */}
       <div className="mb-8">
        <Link to="/dojo" className="text-brand-green hover:underline transition-colors duration-200">
          &larr; Zurück zur Dojo Übersicht
        </Link>
      </div>

      <div className="bg-gray-800 p-8 rounded-lg shadow-2xl">
        {/* --- SEITENÜBERSCHRIFT & EINLEITUNG --- */}
        {/* Hier kannst du die Texte anpassen. */}
        <h1 className="text-3xl font-bold text-white mb-6 text-center">Dojo: <span className="text-brand-green">Fortgeschritten</span></h1>
        <p className="text-gray-400 mb-8 max-w-3xl mx-auto text-center">Bereit für den nächsten Schritt? Diese Tutorials helfen dir dabei, dein Trick-Repertoire zu erweitern und deinen Style zu verbessern.</p>
        
        {/* --- VIDEO-GITTER --- */}
        {/* Hier werden die einzelnen Videos angezeigt. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* --- ANLEITUNG: VIDEOS ÄNDERN/HINZUFÜGEN --- */}
            {/* Um ein Video zu ändern, tausche die 'videoId' und den 'title' aus. */}
            {/* Um ein neues Video hinzuzufügen, kopiere eine komplette <VideoEmbed ... /> Zeile. */}
            {/* Die 'videoId' kann die 11-stellige ID, der "Teilen"-Link oder die volle URL aus dem Browser sein. */}

            <VideoEmbed videoId="gW12-m3_guE" title="Der Kickflip - Der König der Tricks!" />
            <VideoEmbed videoId="fP5-9z08i_M" title="How-To: Heelflip" />
            <VideoEmbed videoId="YS4aY63A-0A" title="How-To: 360 Flip / Tre Flip" />
            <VideoEmbed videoId="gRKfAMso_bE" title="How-To: Boardslide auf einem Rail" />
        </div>
      </div>
    </div>
  );
};

export default DojoAdvancedPage;
