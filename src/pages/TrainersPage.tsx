
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { allTrainers } from '../data/trainers';
import { InstagramIcon } from '../constants/icons';

const TrainersPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // useMemo will re-calculate the filtered list only when searchTerm or allTrainers change
  const filteredTrainers = useMemo(() => {
    if (!searchTerm.trim()) {
      return allTrainers;
    }
    const lowercasedFilter = searchTerm.toLowerCase();
    return allTrainers.filter(trainer =>
      trainer.name.toLowerCase().includes(lowercasedFilter) ||
      trainer.location.toLowerCase().includes(lowercasedFilter)
    );
  }, [searchTerm]);

  return (
    <div className="max-w-6xl mx-auto py-12">
      <h1 className="text-4xl font-black text-center mb-4 tracking-tighter">
        FINDE DEINEN <span className="text-brand-green">TRAINER</span>
      </h1>
      <p className="text-center text-gray-400 mb-10">
        Durchsuche unsere Liste qualifizierter Skateboard-Trainer in deiner Umgebung.
      </p>

      {/* Certified Trainers Callout */}
      <div className="bg-gray-800 border-l-4 border-brand-green p-6 rounded-lg shadow-lg mb-12">
        <h2 className="text-xl font-bold text-white mb-2">Du suchst nach offiziell lizenzierten Trainern?</h2>
        <p className="text-gray-300 mb-4">
          Wir führen auch eine Liste aller vom DOSB (Deutscher Olympischer Sportbund) ausgebildeten und lizenzierten Skateboard-Trainer in Deutschland.
        </p>
        <Link 
          to="/certified-trainers"
          className="font-bold text-brand-green hover:text-white transition-colors duration-300 inline-block"
        >
          Zur Liste der geprüften Trainer &rarr;
        </Link>
      </div>

      {/* Search Section */}
      <div className="mb-12 flex justify-center items-center space-x-4">
        <input
          type="text"
          placeholder="Suche nach Name oder Ort..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md bg-gray-800 border-2 border-gray-700 rounded-full py-3 px-6 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all duration-300"
          aria-label="Search for trainers by name or location"
        />
        <button className="bg-gray-700 text-white font-bold py-3 px-8 rounded-full hover:bg-brand-green hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
          Filter
        </button>
      </div>

      {/* Trainers Grid */}
      {filteredTrainers.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTrainers.map((trainer) => (
            <Link to={`/trainers/${trainer.id}`} key={trainer.id} className="block bg-gray-800 rounded-lg overflow-hidden group transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <img
                  src={trainer.imageUrl}
                  alt={trainer.name}
                  className="w-full h-64 object-cover"
                />
                {trainer.instagramUrl && (
                    <a
                      href={trainer.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
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
        <div className="text-center bg-gray-800 p-12 rounded-lg shadow-2xl">
          <h2 className="text-2xl font-bold text-white mb-2">Keine Trainer gefunden</h2>
          <p className="text-gray-400">Deine Suche nach "{searchTerm}" ergab leider keine Treffer. Versuche es mit einem anderen Suchbegriff.</p>
        </div>
      )}
    </div>
  );
};

export default TrainersPage;