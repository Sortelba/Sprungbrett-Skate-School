// Diese Seite zeigt die Tutorial-Videos für Anfänger.
// Sie verwendet die wiederverwendbare 'VideoEmbed'-Komponente, um die Videos darzustellen.

import React from 'react';
import { Link } from 'react-router-dom';
import VideoEmbed from '../components/VideoEmbed'; // Import der Video-Komponente

const DojoBeginnerPage: React.FC = () => {
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
        <h1 className="text-3xl font-bold text-white mb-6 text-center">Dojo: <span className="text-brand-green">Beginner</span></h1>
        <p className="text-gray-400 mb-8 text-center max-w-3xl mx-auto">Hier findest du alles, was du für deine ersten Schritte auf dem Skateboard brauchst. Vom sicheren Stand bis zu deinem ersten Trick!</p>
        
        {/* --- VIDEO-GITTER --- */}
        {/* Hier werden die einzelnen Videos angezeigt. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* --- ANLEITUNG: VIDEOS ÄNDERN/HINZUFÜGEN --- */}
          {/* Um ein Video zu ändern, tausche die 'videoId' und den 'title' aus. */}
          {/* Um ein neues Video hinzuzufügen, kopiere eine komplette <VideoEmbed ... /> Zeile. */}
          {/* Die 'videoId' kann die 11-stellige ID, der "Teilen"-Link oder die volle URL aus dem Browser sein. */}
          
          <VideoEmbed videoId="Dg3IAhrwx2Q" title="3 Tricks ohne Ollie!" />
          <VideoEmbed videoId="j9mfBdXk_CA" title="Pushen und Lenken" />
          <VideoEmbed videoId="uG_d-ytr4kE" title="Die ersten Kurven: Tic-Tacs" />
          <VideoEmbed videoId="yL1O2T47yck" title="How-To: Drop-In auf einer Rampe" />
        </div>
      </div>
    </div>
  );
};

export default DojoBeginnerPage;
