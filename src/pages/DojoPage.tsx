
import React, { useState } from 'react';

type Tab = 'beginner' | 'advanced';

const DojoPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('beginner');

  const VideoEmbed: React.FC<{ videoId: string; title: string }> = ({ videoId, title }) => (
    <div>
      <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden border-2 border-gray-700">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
      <h3 className="text-white text-lg font-semibold mt-4">{title}</h3>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto py-12">
      <h1 className="text-4xl font-black text-center mb-10 tracking-tighter">
        SKATE <span className="text-brand-green">DOJO</span>
      </h1>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8 space-x-4">
        <button
          onClick={() => setActiveTab('beginner')}
          className={`font-bold py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105 ${
            activeTab === 'beginner'
              ? 'bg-brand-green text-gray-900'
              : 'bg-gray-700 text-white hover:bg-gray-600'
          }`}
        >
          Beginner
        </button>
        <button
          onClick={() => setActiveTab('advanced')}
          className={`font-bold py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105 ${
            activeTab === 'advanced'
              ? 'bg-brand-green text-gray-900'
              : 'bg-gray-700 text-white hover:bg-gray-600'
          }`}
        >
          Fortgeschritten
        </button>
      </div>

      {/* Content Area */}
      <div className="bg-gray-800 p-8 rounded-lg shadow-2xl animate-fade-in-up">
        {activeTab === 'beginner' && (
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Basics für den Start</h2>
            <p className="text-gray-400 mb-8">Hier findest du alles, was du für deine ersten Schritte auf dem Skateboard brauchst. Vom sicheren Stand bis zu deinem ersten Trick!</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Hier kannst du deine YouTube Videos einbetten */}
              <VideoEmbed videoId="arV3_I-1l4M" title="Der Ollie - Dein erster Trick!" />
              {/* Beispiel für ein weiteres Video */}
              {/* <VideoEmbed videoId="VIDEO_ID_HIER" title="Titel des Videos" /> */}
            </div>
          </div>
        )}

        {activeTab === 'advanced' && (
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Tricks für Fortgeschrittene</h2>
            <p className="text-gray-400 mb-8">Bereit für den nächsten Schritt? Diese Tutorials helfen dir dabei, dein Trick-Repertoire zu erweitern und deinen Style zu verbessern.</p>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <p className="text-gray-500 italic">Hier kommen bald Videos für Fortgeschrittene...</p>
                {/* Hier kannst du deine YouTube Videos einbetten */}
                {/* <VideoEmbed videoId="VIDEO_ID_HIER" title="Titel des Videos" /> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DojoPage;
