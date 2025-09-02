// Diese Datei dient als zentrale Bibliothek für alle SVG-Icons, die in der Anwendung verwendet werden.
// Das macht es einfach, Icons wiederzuverwenden und an einem Ort zu verwalten.
// Um ein neues Icon hinzuzufügen, kopiere eine der bestehenden Komponenten,
// benenne sie um und ersetze den SVG-Code im Inneren.

import React from 'react';

// Ein gemeinsames 'interface' für alle Icons, damit sie die gleichen Props (z.B. 'className') akzeptieren.
interface IconProps {
  className?: string;
}

// --- TIKTOK ICON ---
export const TikTokIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props} // {...props} gibt alle übergebenen Props (wie className) an das SVG-Element weiter.
  >
    <path d="M9 12a4 4 0 1 0 4 4v-12a5 5 0 0 0 5 5" />
  </svg>
);

// --- YOUTUBE ICON ---
export const YouTubeIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.82.42a2.5 2.5 0 0 0-1.76 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81a2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81z"></path>
    <polygon points="9.5 15.5 15.5 12 9.5 8.5"></polygon>
  </svg>
);

// --- INSTAGRAM ICON ---
export const InstagramIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

// --- SHOP ICON (WARENKORB) ---
export const ShopIcon: React.FC<IconProps> = (props) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="9" cy="21" r="1"></circle>
      <circle cx="20" cy="21" r="1"></circle>
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
    </svg>
);

// --- LIFEBOY (LB) ICON (Text-basiertes SVG) ---
export const LBIcon: React.FC<IconProps> = (props) => (
    <svg 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <text 
            x="50%" 
            y="50%" 
            dominantBaseline="middle" 
            textAnchor="middle" 
            fontSize="12" 
            fontWeight="900" 
            fontFamily="Inter, sans-serif"
        >
            LB
        </text>
    </svg>
);

// --- WEBSITE ICON (LINK) ---
export const WebsiteIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72" />
  </svg>
);

// --- USER SEARCH ICON ---
export const UserSearchIcon: React.FC<IconProps> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 18l-4.25-4.25" />
    <circle cx="10" cy="10" r="7" />
    <path d="M10 17a7 7 0 01-5.54-2.83" />
    <path d="M10 3a7 7 0 015.54 2.83" />
  </svg>
);


// --- ICONS FOR MEMORY GAME ---

export const CardBackIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize="12" fontWeight="900" fontFamily="Inter, sans-serif">SB</text>
  </svg>
);

export const SkateboardIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 6l12 4-1 4-12-4 1-4z" />
    <path d="M5 10c-1.1 0-2 .9-2 2s.9 2 2 2" />
    <path d="M19 14c1.1 0 2-.9 2-2s-.9-2-2-2" />
  </svg>
);

export const HelmetIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2 12A10 10 0 0112 2a10 10 0 0110 10c0 4-4 8-10 8S2 16 2 12z" />
    <path d="M4 14h16" />
  </svg>
);

export const WheelIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const ShoeIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M7 17a2 2 0 002 2h8a2 2 0 002-2V9a2 2 0 00-2-2h-3l-4-4-1 3-3 3v8z" />
    <path d="M7 10h10" />
  </svg>
);

export const BearingIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="2" />
    <path d="M12 4v0" /><path d="M12 20v0" /><path d="M4 12h0" /><path d="M20 12h0" />
    <path d="M17 7l0 0" /><path d="M7 17l0 0" /><path d="M7 7l0 0" /><path d="M17 17l0 0" />
  </svg>
);

export const TruckIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2 9h20" />
    <path d="M12 9V5" />
    <path d="M9 13H5" />
    <path d="M19 13h-4" />
    <circle cx="7" cy="17" r="2" />
    <circle cx="17" cy="17" r="2" />
  </svg>
);