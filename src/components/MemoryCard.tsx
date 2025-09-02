import React from 'react';

// Props, die die MemoryCard-Komponente erwartet
interface MemoryCardProps {
  icon: React.FC<{ className?: string }>;      // Das Icon, das auf der Vorderseite angezeigt wird
  isFlipped: boolean;                           // Ist die Karte aktuell aufgedeckt?
  isMatched: boolean;                           // Wurde das Paar dieser Karte bereits gefunden?
  onClick: () => void;                          // Funktion, die bei einem Klick aufgerufen wird
  CardBackIcon: React.FC<{ className?: string }>; // Das Icon für die Rückseite der Karte
}

const MemoryCard: React.FC<MemoryCardProps> = ({ icon: Icon, isFlipped, isMatched, onClick, CardBackIcon }) => {
  return (
    // Der äußere Container fängt Klicks ab und definiert den Platz der Karte im Grid
    <div className="aspect-square cursor-pointer group" onClick={!isFlipped && !isMatched ? onClick : undefined}>
      {/* Dieser Container ist für die 3D-Animation zuständig */}
      <div className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
        
        {/* --- KARTENRÜCKSEITE --- */}
        <div className="absolute w-full h-full [backface-visibility:hidden] flex items-center justify-center rounded-lg shadow-lg bg-gray-700 group-hover:bg-gray-600 transition-colors">
          <CardBackIcon className="w-1/2 h-1/2 text-brand-green opacity-80" />
        </div>
        
        {/* --- KARTENVORDERSEITE --- */}
        <div className={`absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] flex items-center justify-center rounded-lg shadow-lg ${isMatched ? 'bg-brand-green' : 'bg-gray-800'}`}>
          <Icon className={`w-3/4 h-3/4 ${isMatched ? 'text-gray-900' : 'text-white'}`} />
        </div>
      </div>
    </div>
  );
};

export default MemoryCard;