import React from 'react';
import PostCard from '../components/PostCard';
import { MOCK_POSTS } from '../constants';

const HomePage: React.FC = () => {
  return (
    <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
       <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-4xl font-extrabold font-serif text-brand-text-main tracking-tight sm:text-5xl">今宵の物語</h2>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-brand-text-subtle">
          言葉の愛撫に身を委ね、未知の快感の扉を開けて。
        </p>
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
