import React, { useState, useEffect } from 'react';
import MemoryCard from '../components/MemoryCard';
import { 
  SkateboardIcon, 
  HelmetIcon, 
  WheelIcon, 
  ShoeIcon, 
  BearingIcon, 
  TruckIcon,
  CardBackIcon,
} from '../constants/icons';

// Definiert die Struktur einer einzelnen Spielkarte
type Card = {
  id: number;
  icon: React.FC<{ className?: string }>;
  key: string; // Eindeutiger Name für das Paar, z.B., 'skateboard'
};

// Die Icons, die für die Paare im Spiel verwendet werden
const cardIcons = [
  { icon: SkateboardIcon, key: 'skateboard' },
  { icon: HelmetIcon, key: 'helmet' },
  { icon: WheelIcon, key: 'wheel' },
  { icon: ShoeIcon, key: 'shoe' },
  { icon: BearingIcon, key: 'bearing' },
  { icon: TruckIcon, key: 'truck' },
];

// Funktion, um den Kartenstapel zu erstellen und zu mischen
const createShuffledDeck = (): Card[] => {
  const deck = [...cardIcons, ...cardIcons]; // Verdoppelt die Icons, um Paare zu erzeugen
  return deck
    .map((card, index) => ({ ...card, id: index })) // Fügt jeder Karte eine eindeutige ID hinzu
    .sort(() => Math.random() - 0.5); // Mischt das Deck zufällig
};

const SkateMemoryGamePage: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [moves, setMoves] = useState(0);
  const [isLocked, setIsLocked] = useState(false); // Sperrt das Spielfeld während der Prüfung eines Paares

  // Funktion zum Starten/Zurücksetzen des Spiels
  const resetGame = () => {
    setCards(createShuffledDeck());
    setFlippedIndices([]);
    setMatchedPairs([]);
    setMoves(0);
    setIsLocked(false);
  };
  
  // Initialisiert das Spiel, wenn die Seite geladen wird
  useEffect(() => {
    resetGame();
  }, []);
  
  // Diese Funktion wird immer dann ausgeführt, wenn zwei Karten aufgedeckt wurden
  useEffect(() => {
    if (flippedIndices.length === 2) {
      setIsLocked(true); // Sperrt das Spielfeld, um weitere Klicks zu verhindern
      const [firstIndex, secondIndex] = flippedIndices;
      const firstCard = cards[firstIndex];
      const secondCard = cards[secondIndex];
      
      if (firstCard.key === secondCard.key) {
        // Es ist ein Paar!
        setMatchedPairs(prev => [...prev, firstCard.key]);
        setFlippedIndices([]);
        setIsLocked(false);
      } else {
        // Kein Paar, Karten nach einer kurzen Verzögerung wieder umdrehen
        setTimeout(() => {
          setFlippedIndices([]);
          setIsLocked(false);
        }, 1200);
      }
      setMoves(prev => prev + 1); // Zählt den Zug
    }
  }, [flippedIndices, cards]);
  
  // Behandelt den Klick auf eine Karte
  const handleCardClick = (index: number) => {
    if (isLocked || flippedIndices.includes(index) || matchedPairs.includes(cards[index].key)) {
      return; // Ignoriert Klicks, wenn das Feld gesperrt ist oder die Karte bereits aufgedeckt/gefunden wurde
    }
    setFlippedIndices(prev => [...prev, index]);
  };
  
  // Prüft, ob das Spiel gewonnen wurde
  const isGameWon = matchedPairs.length === cardIcons.length;

  return (
    <div className="max-w-4xl mx-auto py-12 text-center animate-fade-in-up">
      <h1 className="text-4xl font-black mb-4 tracking-tighter">SKATE <span className="text-brand-green">MEMORY</span></h1>
      
      {/* Spiel-Statistiken & Steuerung */}
      <div className="flex justify-center items-center space-x-8 mb-8 bg-gray-800 p-4 rounded-lg shadow-inner">
        <p className="text-xl font-bold">Züge: <span className="text-brand-green">{moves}</span></p>
        <button 
          onClick={resetGame}
          className="bg-brand-green text-gray-900 font-bold py-2 px-6 rounded-md hover:bg-white transition-all duration-300 transform hover:scale-105"
        >
          Neues Spiel
        </button>
      </div>
      
      {/* Spielfeld */}
      {isGameWon ? (
        // Wird angezeigt, wenn das Spiel gewonnen wurde
        <div className="bg-gray-800 p-12 rounded-lg shadow-2xl">
          <h2 className="text-3xl font-bold text-brand-green mb-4">Gewonnen!</h2>
          <p className="text-lg text-white">Super! Du hast das Spiel in {moves} Zügen geschafft.</p>
        </div>
      ) : (
        // Das eigentliche Spielfeld mit den Karten
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
          {cards.map((card, index) => (
            <MemoryCard 
              key={card.id}
              icon={card.icon}
              isFlipped={flippedIndices.includes(index) || matchedPairs.includes(card.key)}
              isMatched={matchedPairs.includes(card.key)}
              onClick={() => handleCardClick(index)}
              CardBackIcon={CardBackIcon}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SkateMemoryGamePage;
