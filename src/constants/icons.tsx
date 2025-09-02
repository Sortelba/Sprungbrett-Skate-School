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