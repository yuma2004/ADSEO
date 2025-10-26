import React from 'react';
import type { Post } from '../types';

interface PostCardProps {
  post: Post;
  style?: React.CSSProperties;
  // FIX: Added className to allow passing custom classes for styling and animations.
  className?: string;
}

const PostCard: React.FC<PostCardProps> = ({ post, style, className }) => {
  return (
    <a 
      href={`#/post/${post.id}`}
      style={style}
      className={`bg-brand-bg-surface rounded-xl overflow-hidden shadow-lg hover:shadow-glow-primary transition-all duration-300 cursor-pointer flex flex-col no-underline group ${className || ''}`}
    >
      <div className="overflow-hidden">
        <img className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" src={post.imageUrl} alt={post.title} />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex-grow">
            <div className="flex items-center mb-4">
              <img className="w-10 h-10 rounded-full mr-4" src={post.authorAvatar} alt={post.author} />
              <div className="text-sm">
                <p className="text-brand-text-main leading-none">{post.author}</p>
                <p className="text-brand-text-subtle">{post.date}</p>
              </div>
            </div>
            <h3 className="font-bold font-serif text-xl mb-2 text-brand-text-main group-hover:text-brand-primary transition-colors">{post.title}</h3>
            <p className="text-brand-text-subtle text-base font-serif">
              {post.excerpt}
            </p>
        </div>
        <div className="mt-4 pt-4 border-t border-white/10">
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span key={tag} className="inline-block bg-brand-bg-main rounded-full px-3 py-1 text-sm font-semibold text-brand-text-subtle">#{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default PostCard;
