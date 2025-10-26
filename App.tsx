import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import GenerateIdeaModal from './components/GenerateIdeaModal';
import { MOCK_POSTS } from './constants';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#/');
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleGenerateIdeaClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const renderPage = () => {
    if (currentPath.startsWith('#/post/')) {
      const postId = parseInt(currentPath.replace('#/post/', ''), 10);
      const post = MOCK_POSTS.find(p => p.id === postId);
      if (post) {
        return <PostPage post={post} />;
      }
    }
    return <HomePage onGenerateIdeaClick={handleGenerateIdeaClick} />;
  };

  return (
    <div className="bg-brand-bg-main min-h-screen text-brand-text-main font-sans">
      <Header onGenerateIdeaClick={handleGenerateIdeaClick} />
      {renderPage()}
      <Footer />
      <GenerateIdeaModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default App;