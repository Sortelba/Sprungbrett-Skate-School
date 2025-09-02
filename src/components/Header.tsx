// Diese Komponente stellt den Header (die Navigationsleiste) der Webseite dar.
// Sie passt sich automatisch an verschiedene Bildschirmgrößen an (Desktop vs. Mobile).

import React, { useState } from 'react';
// NavLink wird von react-router-dom bereitgestellt und hebt den aktiven Link hervor (z.B. die Seite, auf der man sich gerade befindet).
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  // 'useState' wird verwendet, um den Zustand des mobilen Menüs zu speichern (offen oder geschlossen).
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // CSS-Klassen für die Navigationslinks
  const activeLinkClass = 'text-brand-green'; // Stil für den aktiven Link
  const inactiveLinkClass = 'text-gray-300 hover:text-white transition-colors duration-200'; // Stil für inaktive Links
  const mobileLinkClass = 'block w-full py-4 text-center text-xl font-semibold'; // Zusätzlicher Stil für Links im mobilen Menü

  // Funktion, um das mobile Menü zu schließen (wird beim Klick auf einen Link aufgerufen)
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-gray-900 bg-opacity-80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 border-b border-gray-800">
          {/* --- LOGO --- */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-3xl font-black tracking-tighter text-white" onClick={closeMenu}>
              SPRUNG<span className="text-brand-green">BRETT</span>
            </NavLink>
          </div>

          {/* --- DESKTOP NAVIGATION --- */}
          {/* Dieser Bereich wird nur auf mittelgroßen Bildschirmen und größer angezeigt ('hidden md:flex'). */}
          {/* Um einen neuen Menüpunkt hinzuzufügen, kopiere einen der <NavLink>-Blöcke und passe 'to' und den Text an. */}
          <nav className="hidden md:flex md:items-center md:space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass) + ' text-lg font-semibold'}
            >
              Start
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass) + ' text-lg font-semibold'}
            >
              Über Uns
            </NavLink>
            <NavLink
              to="/trainers"
              className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass) + ' text-lg font-semibold'}
            >
              Trainer Finden
            </NavLink>
            <NavLink
              to="/dojo"
              className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass) + ' text-lg font-semibold'}
            >
              Dojo
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass) + ' text-lg font-semibold'}
            >
              Blog
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass) + ' text-lg font-semibold'}
            >
              Kontakt
            </NavLink>
          </nav>

          {/* --- MOBILE MENU BUTTON (Hamburger Icon) --- */}
          {/* Dieser Button wird nur auf kleinen Bildschirmen angezeigt ('md:hidden'). */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)} // Schaltet den Zustand des Menüs um
              className="text-white focus:outline-none p-2"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                // "X"-Icon, wenn das Menü offen ist
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                // "Hamburger"-Icon, wenn das Menü geschlossen ist
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE NAVIGATION MENU --- */}
      {/* Dieses Menü wird nur angezeigt, wenn 'isMenuOpen' true ist. */}
      {/* Füge auch hier einen neuen <NavLink>-Block hinzu, wenn du einen neuen Menüpunkt erstellst. */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-gray-900 bg-opacity-95 border-b-2 border-brand-green animate-fade-in-down">
          <nav className="flex flex-col items-center">
            <NavLink to="/" onClick={closeMenu} className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass) + mobileLinkClass}>
              Start
            </NavLink>
            <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass) + mobileLinkClass}>
              Über Uns
            </NavLink>
            <NavLink to="/trainers" onClick={closeMenu} className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass) + mobileLinkClass}>
              Trainer Finden
            </NavLink>
            <NavLink to="/dojo" onClick={closeMenu} className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass) + mobileLinkClass}>
              Dojo
            </NavLink>
            <NavLink to="/blog" onClick={closeMenu} className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass) + mobileLinkClass}>
              Blog
            </NavLink>
            <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass) + mobileLinkClass}>
              Kontakt
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
