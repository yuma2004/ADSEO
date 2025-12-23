import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="py-6 border-b border-white/10 backdrop-blur bg-brand-bg-main/70 sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#/" className="no-underline">
          <div className="inline-flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-brand-primary/70 to-brand-accent/70 shadow-glow-primary flex items-center justify-center text-xl font-serif text-brand-bg-main">
              SR
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold font-serif text-brand-text-main tracking-tight">
                Sensual Reads
              </h1>
              <p className="text-brand-text-subtle text-sm">あなたのための、秘密の書斎</p>
            </div>
          </div>
        </a>
        <div className="hidden md:flex items-center gap-3">
          <span className="px-3 py-1 rounded-full bg-brand-bg-surface/80 border border-white/10 text-sm text-brand-text-subtle">
            curated weekly
          </span>
          <span className="px-3 py-1 rounded-full bg-gradient-to-r from-brand-primary/30 to-brand-accent/30 text-sm text-brand-text-main border border-white/10">
            18+ safe guidance
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
