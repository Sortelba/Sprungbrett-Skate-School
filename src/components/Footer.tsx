// Diese Komponente rendert den Footer (Fußzeile) der Webseite.
// Sie enthält Copyright-Informationen, rechtliche Links (Impressum, AGB) und Social-Media-Icons.

import React from 'react';
// Link wird für die interne Navigation zu Seiten wie Impressum und AGB verwendet.
import { Link } from 'react-router-dom';
// Importiert die verschiedenen SVG-Icons aus der zentralen Icon-Datei.
import { TikTokIcon, YouTubeIcon, InstagramIcon, ShopIcon, LBIcon } from '../constants/icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          
          {/* --- LINKER BEREICH: COPYRIGHT & RECHTLICHES --- */}
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
            {/* Das aktuelle Jahr wird automatisch eingefügt. */}
            <p className="text-gray-400">&copy; {new Date().getFullYear()} Sprungbrett.</p>
            <div className="flex space-x-4">
               {/* Links zu den rechtlichen Seiten */}
               <Link to="/impressum" className="text-gray-400 hover:text-brand-green transition-colors duration-200">Impressum</Link>
               <Link to="/game" className="text-gray-400 hover:text-brand-green transition-colors duration-200">Spiel</Link>
               <Link to="/agb" className="text-gray-400 hover:text-brand-green transition-colors duration-200">AGB</Link>
            </div>
          </div>
          
          {/* --- RECHTER BEREICH: SOCIAL MEDIA & EXTERNE LINKS --- */}
          {/* Hier kannst du deine Social-Media-Profile und andere externe Links anpassen. */}
          {/* Ändere einfach den 'href'-Wert in den <a>-Tags. */}
          <div className="flex items-center space-x-6">
            <a href="https://tiktok.com/@sortelba" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-green transition-colors duration-200">
              <TikTokIcon className="h-6 w-6" />
            </a>
            <a href="https://youtube.com/@sortelba" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-green transition-colors duration-200">
              <YouTubeIcon className="h-6 w-6" />
            </a>
            <a href="https://instagram.com/sortelba" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-green transition-colors duration-200">
              <InstagramIcon className="h-6 w-6" />
            </a>
            <a href="https://solide.myspreadshop.de/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-green transition-colors duration-200">
              <ShopIcon className="h-6 w-6" />
            </a>
            <a href="https://www.lifeboy-skateshop.de/?s=lifeboy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-green transition-colors duration-200">
              <LBIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;