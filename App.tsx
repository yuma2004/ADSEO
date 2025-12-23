import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import { MOCK_POSTS } from './constants';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#/');
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    if (currentPath.startsWith('#/post/')) {
      const postId = parseInt(currentPath.replace('#/post/', ''), 10);
      const post = MOCK_POSTS.find(p => p.id === postId);
      if (post) {
        return <PostPage post={post} />;
      }
    }
    return <HomePage />;
  };

  return (
    <div className="bg-brand-bg-main min-h-screen text-brand-text-main font-sans relative">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(224,64,251,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,193,7,0.06),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(18,18,18,0.5))]" />
      <div className="relative">
        <Header />
        {renderPage()}
        <Footer />
      </div>
    </div>
  );
};

export default App;
