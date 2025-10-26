import React from 'react';
import type { Post } from '../types';
import { MOCK_POSTS } from '../constants';

interface PostPageProps {
  post: Post;
}

const RelatedPostCard: React.FC<{ post: Post }> = ({ post }) => (
  <a href={`#/post/${post.id}`} className="group no-underline">
    <img src={post.imageUrl} alt={post.title} className="w-full h-40 object-cover rounded-lg mb-4 group-hover:opacity-80 transition-opacity" />
    <h4 className="font-bold font-serif text-lg text-brand-text-main group-hover:text-brand-primary transition-colors">{post.title}</h4>
    <p className="text-sm text-brand-text-subtle font-serif">{post.excerpt.substring(0, 70)}...</p>
  </a>
);

const PostPage: React.FC<PostPageProps> = ({ post }) => {
  const relatedPosts = MOCK_POSTS.filter(p => p.id !== post.id).slice(0, 2);

  return (
    <main className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="mb-8">
        <a href="#/" className="text-brand-primary hover:underline">
          &larr; すべての記事に戻る
        </a>
      </div>
      <article>
        <header className="mb-8 text-center">
            <div className="mb-4">
                {post.tags.map(tag => (
                <span key={tag} className="inline-block bg-brand-bg-surface rounded-full px-3 py-1 text-sm font-semibold text-brand-text-subtle mr-2">#{tag}</span>
                ))}
            </div>
          <h1 className="text-4xl md:text-5xl font-extrabold font-serif text-brand-text-main tracking-tight leading-tight">
            {post.title}
          </h1>
          <div className="mt-6 flex items-center justify-center">
            <img className="w-12 h-12 rounded-full mr-4" src={post.authorAvatar} alt={post.author} />
            <div className="text-lg">
              <p className="text-brand-text-main font-semibold">{post.author}</p>
              <p className="text-brand-text-subtle">{post.date}</p>
            </div>
          </div>
        </header>

        <img className="w-full h-auto max-h-[500px] object-cover rounded-xl shadow-lg mb-8" src={post.imageUrl} alt={post.title} />

        <div 
          className="prose prose-invert lg:prose-xl max-w-none prose-h3:text-brand-primary prose-h3:font-serif prose-p:font-serif prose-p:text-brand-text-subtle"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
      </article>

      <aside className="mt-16 pt-8 border-t border-white/10">
        <h3 className="text-2xl font-bold font-serif text-center mb-8 text-brand-text-main">あなたへのおすすめ</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {relatedPosts.map(p => <RelatedPostCard key={p.id} post={p} />)}
        </div>
      </aside>
    </main>
  );
};

export default PostPage;