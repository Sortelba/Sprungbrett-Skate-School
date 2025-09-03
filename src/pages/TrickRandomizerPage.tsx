import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// --- DATA FOR THE DICE ---
const stances = ['Regular', 'Nollie', 'Fakie', 'Switch', 'Barefoot'];
const rotations = ['Straight', '180', '360', 'Extra Try', 'Nothing'];
const tricks = ['Kickflip', 'Heelflip', 'Pop Shove-it', 'Ollie', 'Varial Flip', 'Tre Flip', 'Hardflip', 'Impossible', "Player's Choice"];

interface TrickResult {
  stance: string;
  rotation: string;
  trick: string;
}

// A reusable component for a single "die" display
const DiceDisplay: React.FC<{ title: string, result: string, isSpinning: boolean }> = ({ title, result, isSpinning }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-inner flex-1 text-center">
    <h3 className="text-lg font-bold text-brand-green uppercase tracking-wider mb-4">{title}</h3>
    <div className="h-24 flex items-center justify-center">
      {isSpinning ? (
        <div className="animate-pulse text-3xl font-black text-gray-500">...</div>
      ) : (
        <p className="text-3xl md:text-4xl font-black text-white">{result}</p>
      )}
    </div>
  </div>
);

const TrickRandomizerPage: React.FC = () => {
  const [result, setResult] = useState<TrickResult>({ stance: '?', rotation: '?', trick: '?' });
  const [isSpinning, setIsSpinning] = useState(false);

  const handleRoll = () => {
    setIsSpinning(true);

    setTimeout(() => {
      const newResult: TrickResult = {
        stance: stances[Math.floor(Math.random() * stances.length)],
        rotation: rotations[Math.floor(Math.random() * rotations.length)],
        trick: tricks[Math.floor(Math.random() * tricks.length)],
      };
      setResult(newResult);
      setIsSpinning(false);
    }, 1500); // Simulate a 1.5 second roll
  };

  return (
    <div className="max-w-4xl mx-auto py-12 flex flex-col items-center animate-fade-in-up">
      <div className="w-full text-left mb-8">
        <Link to="/minigames" className="text-brand-green hover:underline transition-colors duration-200">
          &larr; Zurück zur Spielauswahl
        </Link>
      </div>

      <h1 className="text-4xl font-black mb-4 tracking-tighter">
        TRICK <span className="text-brand-green">RANDOMIZER</span>
      </h1>
      <p className="text-gray-400 mb-8 text-center">Klicke auf "Rollen", um eine zufällige Trick-Kombination zu erhalten!</p>

      {/* Dice Display Area */}
      <div className="w-full flex flex-col md:flex-row gap-4 mb-8">
        <DiceDisplay title="Stance" result={result.stance} isSpinning={isSpinning} />
        <DiceDisplay title="Rotation" result={result.rotation} isSpinning={isSpinning} />
        <DiceDisplay title="Trick" result={result.trick} isSpinning={isSpinning} />
      </div>

      {/* Control Button */}
      <button
        onClick={handleRoll}
        disabled={isSpinning}
        className="w-full max-w-xs bg-brand-green text-gray-900 font-bold py-4 px-10 rounded-md hover:bg-white transition-all duration-300 transform hover:scale-105 disabled:bg-gray-500 disabled:cursor-not-allowed disabled:scale-100"
      >
        {isSpinning ? 'Würfeln...' : 'Rollen!'}
      </button>
    </div>
  );
};

export default TrickRandomizerPage;
