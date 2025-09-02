// Dies ist die Hauptkomponente der Anwendung. Sie baut die grundlegende Seitenstruktur
// (Header, Hauptinhalt, Footer) auf und steuert, welche Seite bei welcher URL angezeigt wird.

import React from 'react';
// HashRouter wird für das "Routing" verwendet, also das Navigieren zwischen den Seiten.
import { HashRouter, Routes, Route } from 'react-router-dom';

// Import der Hauptkomponenten der Seite
import Header from './components/Header';
import Footer from './components/Footer';

// Import der verschiedenen Seiten (Pages)
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TrainersPage from './pages/TrainersPage';
import DojoPage from './pages/DojoPage';
import TrainerDetailPage from './pages/TrainerDetailPage';
import ImpressumPage from './pages/ImpressumPage';
import AGBPage from './pages/AGBPage';
import DojoBeginnerPage from './pages/DojoBeginnerPage';
import DojoAdvancedPage from './pages/DojoAdvancedPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import SkateMemoryGamePage from './pages/SkateMemoryGamePage';

const App: React.FC = () => {
  return (
    // Der HashRouter umschließt die gesamte Anwendung, um das Routing zu ermöglichen.
    <HashRouter>
      <div className="flex flex-col min-h-screen bg-gray-900 font-sans">
        {/* Der Header wird auf jeder Seite angezeigt. */}
        <Header />
        
        {/* Der 'main'-Bereich enthält den Inhalt der jeweils aktiven Seite. */}
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* --- ROUTING DEFINITION --- */}
          {/* Hier wird festgelegt, welche Seiten-Komponente bei welcher URL geladen wird. */}
          {/* Wenn du eine neue Seite hinzufügen möchtest, musst du hier eine neue <Route ... /> Zeile einfügen. */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/trainers" element={<TrainersPage />} />
            {/* Die Route für die Trainer-Detailseite enthält einen dynamischen Teil ':trainerId'. */}
            <Route path="/trainers/:trainerId" element={<TrainerDetailPage />} />
            <Route path="/dojo" element={<DojoPage />} />
            <Route path="/dojo/beginner" element={<DojoBeginnerPage />} />
            <Route path="/dojo/advanced" element={<DojoAdvancedPage />} />
            <Route path="/blog" element={<BlogPage />} />
            {/* Die Route für einen einzelnen Blog-Post enthält den dynamischen 'slug'. */}
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/impressum" element={<ImpressumPage />} />
            <Route path="/agb" element={<AGBPage />} />
            <Route path="/game" element={<SkateMemoryGamePage />} />
          </Routes>
        </main>

        {/* Der Footer wird ebenfalls auf jeder Seite angezeigt. */}
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;