import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { allPosts } from '../data/blog';
import VideoEmbed from '../components/VideoEmbed';
import { InstagramIcon, WebsiteIcon } from '../constants/icons';

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
            className="w-full h-auto rounded-lg mb-8 shadow-lg border-2 border-gray-700"
          />
        )}
        
        <h1 className="text-4xl font-black text-white tracking-tighter mb-4">{post.title}</h1>
        <p className="text-sm text-gray-500 mb-6">{post.date}</p>

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

        {post.videoId && (
            <div className="my-8 max-w-3xl mx-auto">
                <VideoEmbed videoId={post.videoId} title={post.title} />
            </div>
        )}

        <div className="text-gray-300 space-y-4 whitespace-pre-wrap text-lg leading-relaxed">
          {post.content}
        </div>
      </article>
    </div>
  );
};

export default BlogPostPage;