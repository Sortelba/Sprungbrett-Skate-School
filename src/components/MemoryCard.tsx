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
    // The perspective container. This establishes the 3D space for the animation.
    <div
      className="aspect-square cursor-pointer group perspective"
      onClick={!isFlipped && !isMatched ? onClick : undefined}
    >
      {/* The rotating card element. Its transform is toggled based on the 'isFlipped' prop. */}
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* --- KARTENRÜCKSEITE (Card Back) --- */}
        {/* Always visible by default, hidden when the card is flipped. */}
        <div
          className="absolute w-full h-full backface-hidden flex items-center justify-center rounded-lg shadow-lg bg-gray-700 group-hover:ring-2 ring-brand-green transition-all"
        >
          <CardBackIcon className="w-1/2 h-1/2 text-brand-green opacity-80" />
        </div>

        {/* --- KARTENVORDERSEITE (Card Front) --- */}
        {/* Rotated 180 degrees initially, becomes visible when the parent flips. */}
        <div
          className={`absolute w-full h-full backface-hidden rotate-y-180 flex items-center justify-center rounded-lg shadow-lg transition-all ${
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
