// Diese Seite zeigt den vollständigen Inhalt eines einzelnen Blog-Beitrags an.
// Sie wird aufgerufen, wenn man auf der Blog-Übersichtsseite auf einen Titel oder "Mehr lesen" klickt.

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { allPosts } from '../data/blog'; // Importiert alle Blog-Daten
import VideoEmbed from '../components/VideoEmbed'; // Importiert die Video-Komponente
import { InstagramIcon, WebsiteIcon } from '../constants/icons'; // Importiert Icons

const BlogPostPage: React.FC = () => {
  // Holt den 'slug' aus der URL (z.B. bei /blog/mein-erster-beitrag wäre slug 'mein-erster-beitrag').
  const { slug } = useParams<{ slug: string }>();
  // Findet den passenden Beitrag in der 'allPosts'-Liste, dessen 'slug' mit dem aus der URL übereinstimmt.
  const post = allPosts.find(p => p.slug === slug);

  // --- FALLS KEIN BEITRAG GEFUNDEN WURDE ---
  if (!post) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold text-white mb-4">Beitrag nicht gefunden</h2>
        <p className="text-gray-400 mb-8">Dieser Blog-Beitrag konnte nicht gefunden werden.</p>
        <Link to="/blog" className="bg-brand-green text-gray-900 font-bold py-3 px-8 rounded-md hover:bg-white transition-all duration-300">
          Zurück zum Blog
        </Link>
      </div>
    );
  }

  // --- WENN EIN BEITRAG GEFUNDEN WURDE ---
  return (
    <div className="max-w-4xl mx-auto py-12 animate-fade-in-up">
      {/* --- "ZURÜCK"-LINK --- */}
      <div className="mb-8">
        <Link to="/blog" className="text-brand-green hover:underline transition-colors duration-200">
          &larr; Zurück zur Blog-Übersicht
        </Link>
      </div>

      <article className="bg-gray-800 p-8 rounded-lg shadow-2xl">
        {/* --- BILD --- */}
        {/* Das Bild wird nur angezeigt, wenn im Datenobjekt eine 'imageUrl' vorhanden ist. */}
        {post.imageUrl && (
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-auto rounded-lg mb-8 shadow-lg border-2 border-gray-700"
          />
        )}
        
        {/* --- TITEL & DATUM --- */}
        <h1 className="text-4xl font-black text-white tracking-tighter mb-4">{post.title}</h1>
        <p className="text-sm text-gray-500 mb-6">{post.date}</p>

        {/* --- EXTERNE LINKS (BUTTONS) --- */}
        {/* Dieser Bereich wird nur angezeigt, wenn mindestens eine der URLs vorhanden ist. */}
        {(post.websiteUrl || post.instagramUrl) && (
          <div className="flex items-center space-x-4 mb-8">
            {post.websiteUrl && (
              <a href={post.websiteUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-gray-700 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-600 transition-all duration-300">
                <WebsiteIcon className="h-5 w-5" />
                <span>Website</span>
              </a>
            )}
            {post.instagramUrl && (
              <a href={post.instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-gray-700 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-600 transition-all duration-300">
                <InstagramIcon className="h-5 w-5" />
                <span>Instagram</span>
              </a>
            )}
          </div>
        )}

        {/* --- VIDEO --- */}
        {/* Das Video wird nur angezeigt, wenn im Datenobjekt eine 'videoId' vorhanden ist. */}
        {post.videoId && (
            <div className="my-8 max-w-3xl mx-auto">
                <VideoEmbed videoId={post.videoId} title={post.title} />
            </div>
        )}

        {/* --- HAUPTINHALT --- */}
        {/* Zeigt den eigentlichen Text des Blog-Beitrags an. 
            'whitespace-pre-wrap' sorgt dafür, dass Zeilenumbrüche aus der Datendatei korrekt dargestellt werden. */}
        <div className="text-gray-300 space-y-4 whitespace-pre-wrap text-lg leading-relaxed">
          {post.content}
        </div>
      </article>
    </div>
  );
};

export default BlogPostPage;
