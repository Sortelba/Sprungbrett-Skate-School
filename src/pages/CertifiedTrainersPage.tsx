
import React, { useState, useMemo } from 'react';
import { allCertifiedTrainers } from '../data/certifiedTrainers';

const CertifiedTrainersPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTrainers = useMemo(() => {
    if (!searchTerm.trim()) {
      return allCertifiedTrainers;
    }
    const lowercasedFilter = searchTerm.toLowerCase();
    return allCertifiedTrainers.filter(trainer =>
      trainer.name.toLowerCase().includes(lowercasedFilter) ||
      trainer.vorname.toLowerCase().includes(lowercasedFilter) ||
      trainer.bundesland.toLowerCase().includes(lowercasedFilter) ||
      trainer.verein.toLowerCase().includes(lowercasedFilter)
    );
  }, [searchTerm]);

  return (
    <div className="max-w-6xl mx-auto py-12 animate-fade-in-up">
      <h1 className="text-4xl font-black text-center mb-4 tracking-tighter">
        GEPRÜFTE <span className="text-brand-green">TRAINER</span>
      </h1>
      <p className="text-center text-gray-400 mb-10">
        Offizielle Liste der vom DOSB lizenzierten Skateboard-Trainer in Deutschland. (Stand: 24.02.2021)
      </p>

      {/* Search Section */}
      <div className="mb-8 flex justify-center">
        <input
          type="text"
          placeholder="Suche nach Name, Verein, Bundesland..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-lg bg-gray-800 border-2 border-gray-700 rounded-full py-3 px-6 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all duration-300"
          aria-label="Search for certified trainers"
        />
      </div>

      {/* Trainers Table */}
      <div className="bg-gray-800 rounded-lg shadow-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm text-gray-300">
            <thead className="bg-gray-900 text-xs text-white uppercase tracking-wider">
              <tr>
                <th scope="col" className="px-6 py-3">Bundesland</th>
                <th scope="col" className="px-6 py-3">Name</th>
                <th scope="col" className="px-6 py-3">Vorname</th>
                <th scope="col" className="px-6 py-3">Mailkontakt</th>
                <th scope="col" className="px-6 py-3">DOSB-Lizenz</th>
                <th scope="col" className="px-6 py-3">Verein</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {filteredTrainers.map((trainer) => (
                <tr key={trainer.id} className="hover:bg-gray-700 transition-colors duration-200">
                  <td className="px-6 py-4 whitespace-nowrap">{trainer.bundesland}</td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-white">{trainer.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{trainer.vorname}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <a href={`mailto:${trainer.mailkontakt}`} className="text-brand-green hover:underline">
                      {trainer.mailkontakt}
                    </a>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{trainer.dosbLizenz}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{trainer.verein}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredTrainers.length === 0 && (
          <div className="text-center p-12">
            <h2 className="text-2xl font-bold text-white mb-2">Keine Trainer gefunden</h2>
            <p className="text-gray-400">Deine Suche nach "{searchTerm}" ergab leider keine Treffer.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CertifiedTrainersPage;
