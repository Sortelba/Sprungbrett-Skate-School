import React from 'react';
import { Link } from 'react-router-dom';
import { allPosts } from '../data/blog';

const BlogPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 animate-fade-in-up">
      <h1 className="text-4xl font-black text-center mb-4 tracking-tighter">
        SPRUNG<span className="text-brand-green">BRETT</span> BLOG
      </h1>
      <p className="text-center text-gray-400 mb-12">
        Neuigkeiten, Event-Ankündigungen und Tipps rund ums Skaten.
      </p>

      <div className="space-y-12">
        {allPosts.map((post) => (
          <div key={post.id} className="bg-gray-800 p-8 rounded-lg shadow-2xl group">
            <h2 className="text-3xl font-bold text-white mb-2 group-hover:text-brand-green transition-colors duration-300">
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="text-sm text-gray-500 mb-4">{post.date}</p>
            <p className="text-gray-300 mb-6">{post.excerpt}</p>
            <Link 
              to={`/blog/${post.slug}`} 
              className="font-bold text-brand-green hover:text-white transition-colors duration-300"
            >
              Mehr lesen &rarr;
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
