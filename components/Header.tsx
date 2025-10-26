import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="py-6 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
        <a href="#/" className="text-center cursor-pointer no-underline">
          <h1 className="text-3xl md:text-4xl font-bold font-serif text-brand-text-main tracking-tight">
            Sensual Reads
          </h1>
          <p className="text-brand-text-subtle mt-1">あなたのための、秘密の書斎</p>
        </a>
      </div>
    </header>
  );
};

export default Header;
