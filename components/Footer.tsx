import React from 'react';
import { Icon } from './Icon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-bg-surface/80 text-brand-text-subtle mt-16 border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p>&copy; 2024 Sensual Reads. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors"><Icon name="twitter" /></a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors"><Icon name="instagram" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
