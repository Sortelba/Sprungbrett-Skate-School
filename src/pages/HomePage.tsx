// Diese Komponente stellt die Startseite der Webseite dar.
// Sie enthält die Hauptüberschrift, einen kurzen Werbetext und Links zu den wichtigsten Seiten.

import React from 'react';
// Link wird verwendet, um zwischen den Seiten zu navigieren, ohne die Seite neu zu laden.
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    // Der 'relative' Container ist notwendig für das positionieren des Hintergrundbildes.
    <div className="relative text-center py-16 md:py-32 overflow-hidden">
        
        {/* --- HINTERGRUNDBILD --- */}
        {/* Hier kannst du das Hintergrundbild ändern. Lege das Bild in 'public/images' ab */}
        {/* und ändere den Pfad in 'url(...)'. */}
        <div 
            className="absolute inset-0 bg-cover bg-center opacity-10 animate-background-zoom grayscale blur-[2px]" 
            style={{backgroundImage: "url('/images/homepage-background.jpg')"}}>
        </div>
        
        {/* 'relative' sorgt dafür, dass der Text über dem Hintergrundbild liegt. */}
        <div className="relative">
            {/* --- HAUPTÜBERSCHRIFT --- */}
            {/* Ändere hier den Text der Hauptüberschrift. */}
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase mb-4 animate-fade-in-down">
                Lerne <span className="text-brand-green">Skateboard</span> fahren!
            </h1>
            
            {/* --- UNTERTITEL / SLOGAN --- */}
            {/* Ändere hier den Beschreibungstext. */}
            <p 
                className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in-up"
                style={{ animationDelay: '0.3s', animationFillMode: 'backwards' }}
            >
                Vom ersten Push bis zum Landen komplexer Tricks, Sprungbrett bietet personalisierten Skateboard-Unterricht fuer jedes Alter und jedes Koennen.
                Auch Gruppen bis zu 5 Personen.
                Dein Sprungbrett zum Skaten lernen!
            </p>
            
            {/* --- CALL-TO-ACTION BUTTONS --- */}
            {/* Dies sind die Haupt-Buttons, die den Benutzer zu wichtigen Aktionen leiten. */}
            <div 
                className="flex justify-center space-x-4 animate-fade-in-up"
                style={{ animationDelay: '0.6s', animationFillMode: 'backwards' }}
            >
                <Link to="/contact" className="bg-brand-green text-gray-900 font-bold py-3 px-8 rounded-md hover:bg-white transition-all duration-300 transform hover:scale-105">
                    Stunde buchen
                </Link>
                <Link to="/about" className="bg-gray-700 text-white font-bold py-3 px-8 rounded-md hover:bg-gray-600 transition-all duration-300 transform hover:scale-105">
                    Mehr erfahren
                </Link>
            </div>
        </div>
    </div>
  );
};

export default HomePage;
