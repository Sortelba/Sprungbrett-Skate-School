import React from 'react';
import { Link } from 'react-router-dom';

const VideoEmbed: React.FC<{ videoId: string; title: string }> = ({ videoId, title }) => (
  <div>
    <div className="aspect-video w-full rounded-lg overflow-hidden border-2 border-gray-700">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      ></iframe>
    </div>
    <h3 className="text-white text-lg font-semibold mt-4 text-center md:text-left">{title}</h3>
  </div>
);

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
          <VideoEmbed videoId="arV3_I-1l4M" title="Der Ollie - Dein erster Trick!" />
          {/* Beispiel für ein weiteres Video */}
          {/* <VideoEmbed videoId="VIDEO_ID_HIER" title="Titel des Videos" /> */}
        </div>
      </div>
    </div>
  );
};

export default DojoBeginnerPage;