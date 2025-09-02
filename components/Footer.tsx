import React from 'react';
import { Link } from 'react-router-dom';
import { TikTokIcon, YouTubeIcon, InstagramIcon, ShopIcon, LBIcon } from '../constants/icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} Sprungbrett.</p>
            <div className="flex space-x-4">
               <Link to="/impressum" className="text-gray-400 hover:text-brand-green transition-colors duration-200">Impressum</Link>
               <Link to="/agb" className="text-gray-400 hover:text-brand-green transition-colors duration-200">AGB</Link>
            </div>
          </div>
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