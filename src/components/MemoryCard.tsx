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
        {/* Fügt einen Ring beim Hovern hinzu, um besseres Feedback zu geben. */}
        <div className="absolute w-full h-full [backface-visibility:hidden] flex items-center justify-center rounded-lg shadow-lg bg-gray-700 group-hover:ring-2 ring-brand-green transition-all">
          <CardBackIcon className="w-1/2 h-1/2 text-brand-green opacity-80" />
        </div>
        
        {/* --- KARTENVORDERSEITE --- */}
        {/* Differenzierte Stile für aufgedeckte (aber nicht gefundene) und gefundene Paare. */}
        <div className={`
          absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] 
          flex items-center justify-center rounded-lg shadow-lg transition-all
          ${isMatched 
            ? 'bg-brand-green' // Stil für ein gefundenes Paar
            : 'bg-gray-900 ring-2 ring-brand-green' // Stil für eine aufgedeckte Karte
          }
        `}>
          <Icon className={`w-3/4 h-3/4 ${isMatched ? 'text-gray-900' : 'text-white'}`} />
        </div>
      </div>
    </div>
  );
};

export default MemoryCard;