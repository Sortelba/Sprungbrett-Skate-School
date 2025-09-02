import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="relative text-center py-16 md:py-32 overflow-hidden">
        <div 
            className="absolute inset-0 bg-cover bg-center opacity-10 animate-background-zoom grayscale blur-[2px]" 
            style={{backgroundImage: "url('/images/homepage-background.jpg')"}}>
        </div>
        <div className="relative">
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase mb-4 animate-fade-in-down">
                Lerne <span className="text-brand-green">Skateboard</span> fahren!
            </h1>
            <p 
                className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in-up"
                style={{ animationDelay: '0.3s', animationFillMode: 'backwards' }}
            >
                Vom ersten Push bis zum Landen komplexer Tricks, Sprungbrett bietet personalisierten Skateboard-Unterricht fuer jedes Alter und jedes Koennen.
                Auch Gruppen bis zu 5 Personen.
            </p>
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