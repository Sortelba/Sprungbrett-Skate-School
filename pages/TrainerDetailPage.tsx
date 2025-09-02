
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { allTrainers } from '../data/trainers';

const TrainerDetailPage: React.FC = () => {
  const { trainerId } = useParams<{ trainerId: string }>();
  const trainer = allTrainers.find(t => t.id === parseInt(trainerId || ''));

  if (!trainer) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold text-white mb-4">Trainer nicht gefunden</h2>
        <p className="text-gray-400 mb-8">Der gesuchte Trainer konnte nicht gefunden werden.</p>
        <Link to="/trainers" className="bg-brand-green text-gray-900 font-bold py-3 px-8 rounded-md hover:bg-white transition-all duration-300">
          Zurück zur Trainerliste
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-12 animate-fade-in-up">
      <div className="mb-8">
        <Link to="/trainers" className="text-brand-green hover:underline transition-colors duration-200">
          &larr; Zurück zur Übersicht
        </Link>
      </div>
      <div className="grid md:grid-cols-3 gap-8 items-start bg-gray-800 p-8 rounded-lg shadow-2xl">
        <div className="md:col-span-1">
          <img 
            src={trainer.imageUrl} 
            alt={trainer.name} 
            className="rounded-lg w-full object-cover border-4 border-gray-700"
          />
        </div>
        <div className="md:col-span-2 space-y-4">
          <h1 className="text-4xl font-black text-white tracking-tighter">{trainer.name}</h1>
          <p className="text-brand-green font-semibold text-lg">{trainer.location}</p>
          <p className="text-gray-300 whitespace-pre-wrap">{trainer.detailedBio}</p>
          <div className="pt-4">
             <Link to="/contact" className="bg-brand-green text-gray-900 font-bold py-3 px-8 rounded-md hover:bg-white transition-all duration-300 transform hover:scale-105 inline-block">
                Stunde buchen
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerDetailPage;
