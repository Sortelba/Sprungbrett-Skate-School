import React from 'react';
import { Link } from 'react-router-dom';
import { HeartIcon, LightningIcon, GameBoardIcon } from '../constants/icons';

const MiniGamePortalPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 text-center animate-fade-in-up">
      <h1 className="text-4xl font-black mb-4 tracking-tighter">
        MINI <span className="text-brand-green">GAMES</span>
      </h1>
      <p className="text-gray-400 mb-12 text-lg">Wähle ein Spiel, um eine Pause einzulegen.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card for Memory Game */}
        <Link
          to="/minigames/memory"
          className="bg-gray-800 p-10 rounded-lg shadow-2xl group transform hover:-translate-y-2 transition-all duration-300 flex flex-col justify-center items-center"
        >
          <div className="mb-4">
            <HeartIcon className="h-12 w-12 text-gray-500 group-hover:text-brand-green transition-colors duration-300" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-brand-green transition-colors duration-300">
            Skate Memory
          </h2>
          <p className="text-gray-400">
            Finde die passenden Paare und trainiere dein Gedächtnis.
          </p>
        </Link>

        {/* Card for Skate Jump Game */}
        <Link
          to="/minigames/jump"
          className="bg-gray-800 p-10 rounded-lg shadow-2xl group transform hover:-translate-y-2 transition-all duration-300 flex flex-col justify-center items-center"
        >
           <div className="mb-4">
             <LightningIcon className="h-12 w-12 text-gray-500 group-hover:text-brand-green transition-colors duration-300" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-brand-green transition-colors duration-300">
            Skate Jump
          </h2>
          <p className="text-gray-400">
            Springe über Hindernisse und erreiche den Highscore!
          </p>
        </Link>
        
        {/* Card for Tic-Tac-Toe Game */}
        <Link
          to="/minigames/tictactoe"
          className="bg-gray-800 p-10 rounded-lg shadow-2xl group transform hover:-translate-y-2 transition-all duration-300 flex flex-col justify-center items-center md:col-span-2 lg:col-span-1"
        >
           <div className="mb-4">
             <GameBoardIcon className="h-12 w-12 text-gray-500 group-hover:text-brand-green transition-colors duration-300" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-brand-green transition-colors duration-300">
            Skate Tic-Tac-Toe
          </h2>
          <p className="text-gray-400">
            Drei in einer Reihe gewinnt. Fordere einen Freund heraus!
          </p>
        </Link>
      </div>
    </div>
  );
};

export default MiniGamePortalPage;