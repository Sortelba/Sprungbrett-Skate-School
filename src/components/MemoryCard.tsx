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
  
  const cardContainerStyle: React.CSSProperties = {
    perspective: '1000px',
  };

  const cardInnerStyle: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '100%',
    transition: 'transform 0.5s',
    transformStyle: 'preserve-3d',
    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
  };

  const faceStyle: React.CSSProperties = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    WebkitBackfaceVisibility: 'hidden', // For Safari
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0.5rem', // Tailwind's rounded-lg
    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)', // Tailwind's shadow-lg
  };
  
  const backFaceStyle: React.CSSProperties = {
    ...faceStyle,
  };

  const frontFaceStyle: React.CSSProperties = {
    ...faceStyle,
    transform: 'rotateY(180deg)',
  };

  return (
    // The perspective container.
    <div
      style={cardContainerStyle}
      className="aspect-square cursor-pointer group"
      onClick={!isFlipped && !isMatched ? onClick : undefined}
    >
      {/* The rotating card element */}
      <div
        style={cardInnerStyle}
      >
        {/* --- KARTENRÜCKSEITE (Card Back) --- */}
        <div
          style={backFaceStyle}
          className="bg-gray-700 group-hover:ring-2 ring-brand-green transition-all"
        >
          <CardBackIcon className="w-1/2 h-1/2 text-brand-green opacity-80" />
        </div>

        {/* --- KARTENVORDERSEITE (Card Front) --- */}
        <div
          style={frontFaceStyle}
          className={`transition-all ${
            isMatched
              ? 'bg-brand-green' // Style for a matched pair
              : 'bg-gray-900 ring-2 ring-brand-green' // Style for a flipped card
          }`}
        >
          <Icon className={`w-3/4 h-3/4 ${isMatched ? 'text-gray-900' : 'text-white'}`} />
        </div>
      </div>
    </div>
  );
};

export default MemoryCard;
