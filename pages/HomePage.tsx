import React from 'react';
import PostCard from '../components/PostCard';
import { MOCK_POSTS } from '../constants';

interface HomePageProps {
  onGenerateIdeaClick: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onGenerateIdeaClick }) => {
  return (
    <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
       <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-4xl font-extrabold font-serif text-brand-text-main tracking-tight sm:text-5xl">最新の記事</h2>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-brand-text-subtle">
          欲望の深層を照らし出す、最新のレビューと考察。
        </p>
        <button
          onClick={onGenerateIdeaClick}
          className="mt-6 bg-brand-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-fuchsia-700 transition-colors duration-300 shadow-lg shadow-brand-primary/30 hover:shadow-glow-primary md:hidden"
        >
          💡 AIでアイデアを得る
        </button>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {MOCK_POSTS.map((post, index) => (
          <PostCard 
            key={post.id} 
            post={post} 
            style={{ animationDelay: `${index * 100}ms`}}
            className="stagger-fade-in-up"
          />
        ))}
      </div>
    </main>
  );
};

export default HomePage;