// Diese Seite zeigt eine Übersicht aller Blog-Beiträge.
// Sie holt die Daten aus `src/data/blog.ts` und stellt jeden Beitrag als eine Art "Karte" dar.

import React from 'react';
import { Link } from 'react-router-dom';
// Importiert die Blog-Beiträge aus der zentralen Datendatei.
import { allPosts } from '../data/blog';
// Importiert Icons für die Social-Media-Links.
import { InstagramIcon, WebsiteIcon } from '../constants/icons';

const BlogPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 animate-fade-in-up">
      {/* --- SEITENÜBERSCHRIFT & EINLEITUNG --- */}
      {/* Hier kannst du die Texte anpassen. */}
      <h1 className="text-4xl font-black text-center mb-4 tracking-tighter">
        SPRUNG<span className="text-brand-green">BRETT</span> BLOG
      </h1>
      <p className="text-center text-gray-400 mb-12">
        Neuigkeiten, Event-Ankündigungen und Tipps rund ums Skaten.
      </p>

      {/* Container für alle Blog-Beiträge */}
      <div className="space-y-12">
        {/* Die 'map'-Funktion geht durch jeden Beitrag in der 'allPosts'-Liste
            und erstellt für jeden eine Beitrags-Karte. */}
        {allPosts.map((post) => (
          <div key={post.id} className="bg-gray-800 p-8 rounded-lg shadow-2xl group">
            
            {/* --- BEITRAGS-TITEL --- */}
            {/* Der Titel ist ein Link zur Detailseite des Beitrags. */}
            <h2 className="text-3xl font-bold text-white mb-2 group-hover:text-brand-green transition-colors duration-300">
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            
            {/* --- DATUM --- */}
            <p className="text-sm text-gray-500 mb-4">{post.date}</p>
            
            {/* --- AUSZUG (EXCERPT) --- */}
            <p className="text-gray-300 mb-6 italic border-l-4 border-gray-700 bg-black/25 p-4 rounded-lg">
              {post.excerpt}
            </p>
            
            <div className="flex justify-between items-center">
              {/* --- "MEHR LESEN"-LINK --- */}
              <Link 
                to={`/blog/${post.slug}`} 
                className="font-bold text-brand-green hover:text-white transition-colors duration-300"
              >
                Mehr lesen &rarr;
              </Link>
              
              {/* --- EXTERNE LINKS (ICONS) --- */}
              <div className="flex items-center space-x-4">
                {/* Website-Icon wird nur angezeigt, wenn eine 'websiteUrl' vorhanden ist. */}
                {post.websiteUrl && (
                  <a href={post.websiteUrl} target="_blank" rel="noopener noreferrer" aria-label="Website" className="text-gray-400 hover:text-brand-green transition-colors duration-200">
                    <WebsiteIcon className="h-6 w-6" />
                  </a>
                )}
                {/* Instagram-Icon wird nur angezeigt, wenn eine 'instagramUrl' vorhanden ist. */}
                {post.instagramUrl && (
                  <a href={post.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-brand-green transition-colors duration-200">
                    <InstagramIcon className="h-6 w-6" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
