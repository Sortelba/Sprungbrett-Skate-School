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
  // --- Inline Styles for 3D Transform ---
  // We use inline styles here to ensure the 3D flip effect works reliably,
  // as some transform utility classes might not be available in all Tailwind setups (e.g., Play CDN).
  const cardStyles: React.CSSProperties = {
    transformStyle: 'preserve-3d',
    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
  };

  const faceStyles: React.CSSProperties = {
    backfaceVisibility: 'hidden',
    WebkitBackfaceVisibility: 'hidden', // Vendor prefix for Safari compatibility
  };

  const frontFaceStyles: React.CSSProperties = {
    ...faceStyles,
    transform: 'rotateY(180deg)',
  };

  return (
    // Der äußere Container fängt Klicks ab und definiert den Platz der Karte im Grid
    <div className="aspect-square cursor-pointer group" onClick={!isFlipped && !isMatched ? onClick : undefined}>
      {/* Dieser Container ist für die 3D-Animation zuständig */}
      <div 
        className="relative w-full h-full transition-transform duration-500 transform-gpu"
        style={cardStyles}
      >
        
        {/* --- KARTENRÜCKSEITE --- */}
        <div 
          className="absolute w-full h-full flex items-center justify-center rounded-lg shadow-lg bg-gray-700 group-hover:ring-2 ring-brand-green transition-all"
          style={faceStyles}
        >
          <CardBackIcon className="w-1/2 h-1/2 text-brand-green opacity-80" />
        </div>
        
        {/* --- KARTENVORDERSEITE --- */}
        <div 
          className={`
            absolute w-full h-full
            flex items-center justify-center rounded-lg shadow-lg transition-all
            ${isMatched 
              ? 'bg-brand-green' // Stil für ein gefundenes Paar
              : 'bg-gray-900 ring-2 ring-brand-green' // Stil für eine aufgedeckte Karte
            }
          `}
          style={frontFaceStyles}
        >
          <Icon className={`w-3/4 h-3/4 ${isMatched ? 'text-gray-900' : 'text-white'}`} />
        </div>
      </div>
    </div>
  );
};

export default MemoryCard;
