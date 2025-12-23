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
      className={`relative bg-brand-bg-surface/80 border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-glow-primary transition-all duration-300 cursor-pointer flex flex-col no-underline group ${className || ''}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="overflow-hidden relative">
        <img className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" src={post.imageUrl} alt={post.title} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent group-hover:from-black/60 transition-colors duration-300" />
        <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 backdrop-blur text-xs text-white/90 border border-white/10">
          <span className="h-2 w-2 rounded-full bg-brand-primary animate-pulse" />
          {post.author}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow space-y-4">
        <div className="flex items-center gap-3 text-sm text-brand-text-subtle">
          <span className="px-3 py-1 rounded-full bg-brand-bg-main/80 border border-white/10">New</span>
          <span className="px-3 py-1 rounded-full bg-brand-bg-main/60 border border-white/10">{post.date}</span>
        </div>
        <div className="flex-grow space-y-2">
          <h3 className="font-bold font-serif text-xl md:text-2xl text-brand-text-main group-hover:text-brand-primary transition-colors leading-tight">
            {post.title}
          </h3>
          <p className="text-brand-text-subtle text-base font-serif leading-relaxed">
            {post.excerpt}
          </p>
        </div>
        <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2 items-center">
          {post.tags.map(tag => (
            <span key={tag} className="inline-flex items-center gap-2 bg-brand-bg-main/80 rounded-full px-3 py-1 text-sm font-semibold text-brand-text-subtle border border-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
              #{tag}
            </span>
          ))}
          <span className="ml-auto text-brand-primary text-sm font-semibold inline-flex items-center gap-1">
            続きを読む
            <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
          </span>
        </div>
      </div>
    </a>
  );
};

export default PostCard;
