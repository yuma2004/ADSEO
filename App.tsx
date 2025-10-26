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
    <div className="bg-brand-bg-main min-h-screen text-brand-text-main font-sans">
      <Header />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default App;