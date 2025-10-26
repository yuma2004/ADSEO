import React from 'react';

interface HeaderProps {
  onGenerateIdeaClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onGenerateIdeaClick }) => {
  return (
    <header className="py-6 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="#/" className="text-center md:text-left cursor-pointer no-underline">
          <h1 className="text-3xl md:text-4xl font-bold font-serif text-brand-text-main tracking-tight">
            Sensual Reads
          </h1>
          <p className="text-brand-text-subtle mt-1">あなたのための、秘密の書斎</p>
        </a>
        <button
          onClick={onGenerateIdeaClick}
          className="bg-brand-primary text-white font-semibold py-2 px-4 rounded-lg hover:bg-fuchsia-700 transition-colors duration-300 shadow-lg shadow-brand-primary/30 hover:shadow-glow-primary hidden md:block"
        >
          💡 AIでアイデアを得る
        </button>
      </div>
    </header>
  );
};

export default Header;
