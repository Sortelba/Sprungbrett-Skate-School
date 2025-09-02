// Diese Seite zeigt die detaillierten Informationen für einen einzelnen, ausgewählten Trainer an.
// Sie wird aufgerufen, wenn man auf eine Trainer-Karte auf der Übersichtsseite klickt.

import React from 'react';
// 'useParams' liest dynamische Teile aus der URL aus (in diesem Fall die 'trainerId').
// 'Link' wird für die Navigation verwendet.
import { useParams, Link } from 'react-router-dom';
// Importiert die Trainerdaten aus der zentralen Datendatei.
import { allTrainers } from '../data/trainers';
import { InstagramIcon } from '../constants/icons';

const TrainerDetailPage: React.FC = () => {
  // Holt die 'trainerId' aus der URL. Z.B. bei '/trainers/3' wäre trainerId '3'.
  const { trainerId } = useParams<{ trainerId: string }>();
  
  // Sucht in der 'allTrainers'-Liste den Trainer, dessen 'id' mit der aus der URL übereinstimmt.
  // 'parseInt' wandelt den Text aus der URL in eine Zahl um.
  const trainer = allTrainers.find(t => t.id === parseInt(trainerId || ''));

  // --- FALLS KEIN TRAINER GEFUNDEN WURDE ---
  // Wenn die ID aus der URL zu keinem Trainer passt, wird diese Fehlermeldung angezeigt.
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

  // --- WENN EIN TRAINER GEFUNDEN WURDE ---
  // Zeigt die Detailinformationen des gefundenen Trainers an.
  return (
    <div className="max-w-4xl mx-auto py-12 animate-fade-in-up">
      <div className="mb-8">
        <Link to="/trainers" className="text-brand-green hover:underline transition-colors duration-200">
          &larr; Zurück zur Übersicht
        </Link>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 items-start bg-gray-800 p-8 rounded-lg shadow-2xl">
        {/* --- BILDSEKTION --- */}
        <div className="md:col-span-1">
          <img 
            src={trainer.imageUrl} 
            alt={trainer.name} 
            className="rounded-lg w-full object-cover border-4 border-gray-700"
          />
        </div>
        
        {/* --- INFOSEKTION --- */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center space-x-4">
            <h1 className="text-4xl font-black text-white tracking-tighter">{trainer.name}</h1>
            {/* Zeigt das Instagram-Icon nur an, wenn eine URL vorhanden ist. */}
            {trainer.instagramUrl && (
                <a
                  href={trainer.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-brand-green transition-colors duration-200 transform hover:scale-110"
                  aria-label={`${trainer.name}'s Instagram`}
                >
                  <InstagramIcon className="h-8 w-8" />
                </a>
            )}
          </div>
          
          {/* --- ZERTIFIZIERUNGS-SIEGEL --- */}
          {/* Zeigt das Siegel nur an, wenn der Trainer als zertifiziert markiert ist. */}
          {trainer.isCertified && (
            <div className="inline-flex items-center bg-brand-green text-gray-900 text-sm font-bold px-3 py-1 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>DOSB-lizenzierter Trainer</span>
            </div>
          )}
          
          <p className="text-brand-green font-semibold text-lg">{trainer.location}</p>
          {/* Zeigt die detaillierte Biografie an. 'whitespace-pre-wrap' erhält Zeilenumbrüche im Text. */}
          <p className="text-gray-300 whitespace-pre-wrap">{trainer.detailedBio}</p>
          
          {/* --- "BUCHEN"-BUTTON --- */}
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
