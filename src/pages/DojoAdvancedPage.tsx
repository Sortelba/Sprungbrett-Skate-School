import React from 'react';
import { Link } from 'react-router-dom';
import VideoEmbed from '../components/VideoEmbed';

const DojoAdvancedPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 animate-fade-in-up">
       <div className="mb-8">
        <Link to="/dojo" className="text-brand-green hover:underline transition-colors duration-200">
          &larr; Zurück zur Dojo Übersicht
        </Link>
      </div>
      <div className="bg-gray-800 p-8 rounded-lg shadow-2xl">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">Dojo: <span className="text-brand-green">Fortgeschritten</span></h1>
        <p className="text-gray-400 mb-8 max-w-3xl mx-auto text-center">Bereit für den nächsten Schritt? Diese Tutorials helfen dir dabei, dein Trick-Repertoire zu erweitern und deinen Style zu verbessern.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Hier kannst du deine YouTube Videos einbetten */}
            <VideoEmbed videoId="gW12-m3_guE" title="Der Kickflip - Der König der Tricks!" />
            {/* <VideoEmbed videoId="VIDEO_ID_HIER" title="Titel des Videos" /> */}
        </div>
      </div>
    </div>
  );
};

export default DojoAdvancedPage;
