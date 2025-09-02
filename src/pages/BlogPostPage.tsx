import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { allPosts } from '../data/blog';
import VideoEmbed from '../components/VideoEmbed';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = allPosts.find(p => p.slug === slug);

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

  return (
    <div className="max-w-4xl mx-auto py-12 animate-fade-in-up">
      <div className="mb-8">
        <Link to="/blog" className="text-brand-green hover:underline transition-colors duration-200">
          &larr; Zurück zur Blog-Übersicht
        </Link>
      </div>

      <article className="bg-gray-800 p-8 rounded-lg shadow-2xl">
        {post.imageUrl && (
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-auto max-h-[225px] object-cover rounded-lg mb-8 shadow-lg border-2 border-gray-700"
          />
        )}
        {post.videoId && (
            <div className="mb-8">
                <VideoEmbed videoId={post.videoId} title={post.title} />
            </div>
        )}

        <h1 className="text-4xl font-black text-white tracking-tighter mb-4">{post.title}</h1>
        <p className="text-sm text-gray-500 mb-6">{post.date}</p>
        <div className="text-gray-300 space-y-4 whitespace-pre-wrap text-lg leading-relaxed">
          {post.content}
        </div>
      </article>
    </div>
  );
};

export default BlogPostPage;
