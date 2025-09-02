
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const activeLinkClass = 'text-brand-green';
  const inactiveLinkClass = 'text-gray-300 hover:text-white transition-colors duration-200';

  return (
    <header className="bg-gray-900 bg-opacity-80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 border-b border-gray-800">
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-3xl font-black tracking-tighter text-white">
              SPRUNG<span className="text-brand-green">BRETT</span>
            </NavLink>
          </div>
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
        </div>
      </div>
    </header>
  );
};

export default Header;