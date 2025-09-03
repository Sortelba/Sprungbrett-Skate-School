import React, { useState, useEffect } from 'react';
import MemoryCard from '../components/MemoryCard';
import { 
  SkateboardIcon, HelmetIcon, WheelIcon, ShoeIcon, BearingIcon, TruckIcon,
  RampIcon, RailIcon, TrophyIcon, StarIcon, CameraIcon, ConeIcon,
  GriptapeIcon, BoltIcon, KingpinIcon, BushingIcon, RiserIcon, DeckIcon,
  SkaterIcon, HandIcon, FireIcon, SkullIcon, HeartIcon, LightningIcon,
  CardBackIcon,
} from '../constants/icons';
import { Link } from 'react-router-dom';

// Definiert die Struktur einer einzelnen Spielkarte
type Card = {
  id: number;
  icon: React.FC<{ className?: string }>;
  key: string; // Eindeutiger Name für das Paar, z.B., 'skateboard'
};

// Definiert die Typen für die Schwierigkeitsgrade
type Difficulty = 'easy' | 'medium' | 'hard';

// Konfiguration für die verschiedenen Schwierigkeitsgrade
const difficulties: Record<Difficulty, { pairs: number; label: string; gridClass: string }> = {
  easy: { pairs: 6, label: 'Leicht', gridClass: 'grid-cols-4' },
  medium: { pairs: 12, label: 'Mittel', gridClass: 'grid-cols-6' },
  hard: { pairs: 24, label: 'Schwer', gridClass: 'grid-cols-8' },
};

// Alle verfügbaren Icons für das Spiel
const allCardIcons = [
  { icon: SkateboardIcon, key: 'skateboard' }, { icon: HelmetIcon, key: 'helmet' }, 
  { icon: WheelIcon, key: 'wheel' }, { icon: ShoeIcon, key: 'shoe' }, 
  { icon: BearingIcon, key: 'bearing' }, { icon: TruckIcon, key: 'truck' },
  { icon: RampIcon, key: 'ramp' }, { icon: RailIcon, key: 'rail' },
  { icon: TrophyIcon, key: 'trophy' }, { icon: StarIcon, key: 'star' },
  { icon: CameraIcon, key: 'camera' }, { icon: ConeIcon, key: 'cone' },
  { icon: GriptapeIcon, key: 'griptape' }, { icon: BoltIcon, key: 'bolt' },
  { icon: KingpinIcon, key: 'kingpin' }, { icon: BushingIcon, key: 'bushing' },
  { icon: RiserIcon, key: 'riser' }, { icon: DeckIcon, key: 'deck' },
  { icon: SkaterIcon, key: 'skater' }, { icon: HandIcon, key: 'hand' },
  { icon: FireIcon, key: 'fire' }, { icon: SkullIcon, key: 'skull' },
  { icon: HeartIcon, key: 'heart' }, { icon: LightningIcon, key: 'lightning' },
];

// Funktion, um den Kartenstapel basierend auf dem Schwierigkeitsgrad zu erstellen und zu mischen
const createShuffledDeck = (pairCount: number): Card[] => {
  const selectedIcons = allCardIcons.slice(0, pairCount);
  const deck = [...selectedIcons, ...selectedIcons]; // Verdoppelt die Icons, um Paare zu erzeugen
  return deck
    .map((card, index) => ({ ...card, id: index })) // Fügt jeder Karte eine eindeutige ID hinzu
    .sort(() => Math.random() - 0.5); // Mischt das Deck zufällig
};

const SkateMemoryGamePage: React.FC = () => {
  // Zustände für das Spiel
  const [gameState, setGameState] = useState<'selecting' | 'playing'>('selecting');
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [moves, setMoves] = useState(0);
  const [isLocked, setIsLocked] = useState(false); // Sperrt das Spielfeld während der Prüfung eines Paares

  // Startet das Spiel mit dem gewählten Schwierigkeitsgrad
  const startGame = (level: Difficulty) => {
    setDifficulty(level);
    setCards(createShuffledDeck(difficulties[level].pairs));
    setFlippedIndices([]);
    setMatchedPairs([]);
    setMoves(0);
    setIsLocked(false);
    setGameState('playing');
  };
  
  // Kehrt zur Schwierigkeitsauswahl zurück
  const backToSelection = () => {
    setGameState('selecting');
  };
  
  // Effekt, der die Logik zur Überprüfung von Paaren auslöst
  useEffect(() => {
    if (gameState !== 'playing' || flippedIndices.length < 2) return;

    setIsLocked(true); // Sperrt das Spielfeld
    const [firstIndex, secondIndex] = flippedIndices;
    const firstCard = cards[firstIndex];
    const secondCard = cards[secondIndex];
    
    if (firstCard.key === secondCard.key) {
      // Es ist ein Paar!
      setMatchedPairs(prev => [...prev, firstCard.key]);
      setFlippedIndices([]);
      setIsLocked(false);
    } else {
      // Kein Paar, Karten nach einer Verzögerung wieder umdrehen
      setTimeout(() => {
        setFlippedIndices([]);
        setIsLocked(false);
      }, 1200);
    }
    setMoves(prev => prev + 1); // Zählt den Zug
  }, [flippedIndices, cards, gameState]);
  
  // Behandelt den Klick auf eine Karte
  const handleCardClick = (index: number) => {
    if (isLocked || flippedIndices.length >= 2 || flippedIndices.includes(index) || matchedPairs.includes(cards[index].key)) {
      return;
    }
    setFlippedIndices(prev => [...prev, index]);
  };
  
  // Prüft, ob das Spiel gewonnen wurde
  const isGameWon = gameState === 'playing' && matchedPairs.length === difficulties[difficulty].pairs;

  // --- RENDER-FUNKTIONEN ---

  // Ansicht für die Schwierigkeitsauswahl
  if (gameState === 'selecting') {
    return (
      <div className="max-w-4xl mx-auto py-12 text-center animate-fade-in-up">
        <div className="mb-8">
            <Link to="/minigames" className="text-brand-green hover:underline transition-colors duration-200">
            &larr; Zurück zur Spielauswahl
            </Link>
        </div>
        <h1 className="text-4xl font-black mb-4 tracking-tighter">SKATE <span className="text-brand-green">MEMORY</span></h1>
        <p className="text-lg text-gray-400 mb-8">Wähle einen Schwierigkeitsgrad</p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          {(Object.keys(difficulties) as Difficulty[]).map(level => (
            <button
              key={level}
              onClick={() => startGame(level)}
              className="w-full sm:w-auto bg-gray-700 text-white font-bold py-3 px-10 rounded-md hover:bg-brand-green hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
            >
              {difficulties[level].label} ({difficulties[level].pairs * 2} Karten)
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Ansicht für das laufende Spiel
  return (
    <div className="max-w-6xl mx-auto py-12 text-center animate-fade-in-up">
      <h1 className="text-4xl font-black mb-4 tracking-tighter">SKATE <span className="text-brand-green">MEMORY</span></h1>
      
      <div className="flex justify-center items-center space-x-8 mb-8 bg-gray-800 p-4 rounded-lg shadow-inner">
        <p className="text-xl font-bold">Züge: <span className="text-brand-green">{moves}</span></p>
        <button 
          onClick={backToSelection}
          className="bg-brand-green text-gray-900 font-bold py-2 px-6 rounded-md hover:bg-white transition-all duration-300 transform hover:scale-105"
        >
          Neues Spiel
        </button>
      </div>
      
      {isGameWon ? (
        <div className="bg-gray-800 p-12 rounded-lg shadow-2xl">
          <h2 className="text-3xl font-bold text-brand-green mb-4">Gewonnen!</h2>
          <p className="text-lg text-white">Super! Du hast das Spiel in {moves} Zügen geschafft.</p>
        </div>
      ) : (
        <div className={`grid ${difficulties[difficulty].gridClass} gap-2 sm:gap-4 max-w-4xl mx-auto`}>
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