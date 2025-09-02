
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const activeLinkClass = 'text-brand-green';
  const inactiveLinkClass = 'text-gray-300 hover:text-white transition-colors duration-200';
  const mobileLinkClass = 'block w-full py-4 text-center text-xl font-semibold';

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-gray-900 bg-opacity-80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 border-b border-gray-800">
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-3xl font-black tracking-tighter text-white" onClick={closeMenu}>
              SPRUNG<span className="text-brand-green">BRETT</span>
            </NavLink>
          </div>
          {/* Desktop Navigation */}
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
              Über Mich
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
              to="/contact"
              className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass) + ' text-lg font-semibold'}
            >
              Kontakt
            </NavLink>
          </nav>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none p-2"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-gray-900 bg-opacity-95 border-b-2 border-brand-green animate-fade-in-down">
          <nav className="flex flex-col items-center">
            <NavLink
              to="/"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass) + mobileLinkClass}
            >
              Start
            </NavLink>
            <NavLink
              to="/about"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass) + mobileLinkClass}
            >
              Über Mich
            </NavLink>
            <NavLink
              to="/trainers"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass) + mobileLinkClass}
            >
              Trainer Finden
            </NavLink>
            <NavLink
              to="/dojo"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass) + mobileLinkClass}
            >
              Dojo
            </NavLink>
            <NavLink
              to="/contact"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass) + mobileLinkClass}
            >
              Kontakt
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
