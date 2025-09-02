
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TrainersPage from './pages/TrainersPage';
import DojoPage from './pages/DojoPage';
import TrainerDetailPage from './pages/TrainerDetailPage';
import ImpressumPage from './pages/ImpressumPage';
import AGBPage from './pages/AGBPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen bg-gray-900 font-sans">
        <Header />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/trainers" element={<TrainersPage />} />
            <Route path="/trainers/:trainerId" element={<TrainerDetailPage />} />
            <Route path="/dojo" element={<DojoPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/impressum" element={<ImpressumPage />} />
            <Route path="/agb" element={<AGBPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;