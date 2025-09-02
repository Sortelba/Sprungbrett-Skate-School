import React from 'react';
import { Link } from 'react-router-dom';
import VideoEmbed from '../components/VideoEmbed';

const DojoBeginnerPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 animate-fade-in-up">
      <div className="mb-8">
        <Link to="/dojo" className="text-brand-green hover:underline transition-colors duration-200">
          &larr; Zurück zur Dojo Übersicht
        </Link>
      </div>
      <div className="bg-gray-800 p-8 rounded-lg shadow-2xl">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">Dojo: <span className="text-brand-green">Beginner</span></h1>
        <p className="text-gray-400 mb-8 text-center max-w-3xl mx-auto">Hier findest du alles, was du für deine ersten Schritte auf dem Skateboard brauchst. Vom sicheren Stand bis zu deinem ersten Trick!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Hier kannst du deine YouTube Videos einbetten */}
          <VideoEmbed videoId="Dg3IAhrwx2Q&list=PLusk6Hg6iGHdgsNlcVT2poqM0irfWyDLc&index=1&ab_channel=sortelba" title="3 Tricks ohne Ollie !" />
          {/* Beispiel für ein weiteres Video */}
          <VideoEmbed videoId="j9mfBdXk_CA&ab_channel=sortelba" title="Pushen und Lenken" />
        </div>
      </div>
    </div>
  );
};

export default DojoBeginnerPage;