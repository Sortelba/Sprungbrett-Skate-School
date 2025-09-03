import React from 'react';

// Props that the MemoryCard component expects
interface MemoryCardProps {
  icon: React.FC<{ className?: string }>;      // The icon to display on the front
  isFlipped: boolean;                           // Is the card currently face-up?
  isMatched: boolean;                           // Has the card's pair been found?
  onClick: () => void;                          // Function to call on click
  CardBackIcon: React.FC<{ className?: string }>; // The icon for the back of the card
}

/**
 * A simple, robust Memory Card component that no longer uses 3D transforms.
 * It relies on conditional rendering and basic Tailwind classes for styling,
 * which is a much more reliable approach than the previous animation attempts.
 */
const MemoryCard: React.FC<MemoryCardProps> = ({ icon: Icon, isFlipped, isMatched, onClick, CardBackIcon }) => {
  
  // Base classes for all cards
  const baseClasses = 'aspect-square w-full h-full flex items-center justify-center rounded-lg shadow-lg transition-all duration-300';

  // Dynamically determine the card's appearance based on its state
  const stateClasses = isMatched
    ? 'bg-brand-green cursor-default' // Style for a successfully matched card
    : isFlipped
      ? 'bg-gray-900 ring-2 ring-brand-green' // Style for a temporarily flipped card
      : 'bg-gray-700 hover:ring-2 ring-brand-green cursor-pointer'; // Style for a default, face-down card

  // Combine all classes into a single string
  const cardClassName = `${baseClasses} ${stateClasses}`;

  return (
    <div
      className={cardClassName}
      onClick={!isFlipped && !isMatched ? onClick : undefined} // The card is only clickable if it's face-down
      aria-pressed={isFlipped}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if ((e.key === 'Enter' || e.key === ' ') && !isFlipped && !isMatched) {
          onClick();
        }
      }}
    >
      {/* Conditionally render the front or back of the card */}
      {isFlipped || isMatched ? (
        // --- Card Front (Icon) ---
        <Icon className={`w-3/4 h-3/4 ${isMatched ? 'text-gray-900' : 'text-white'}`} />
      ) : (
        // --- Card Back (Logo) ---
        <CardBackIcon className="w-1/2 h-1/2 text-brand-green opacity-80" />
      )}
    </div>
  );
};

export default MemoryCard;