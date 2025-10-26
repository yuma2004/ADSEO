import React, { useState } from 'react';
import { generatePostIdea } from '../services/geminiService';
import { Icon } from './Icon';
import Spinner from './Spinner';

interface GenerateIdeaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GenerateIdeaModal: React.FC<GenerateIdeaModalProps> = ({ isOpen, onClose }) => {
  const [topic, setTopic] = useState('');
  const [generatedIdea, setGeneratedIdea] = useState<{title: string, excerpt: string} | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleGenerate = async () => {
    setIsLoading(true);
    setError(null);
    setGeneratedIdea(null);
    try {
      const result = await generatePostIdea(topic);
      setGeneratedIdea(result);
    } catch (err: any) {
      setError(err.message || '不明なエラーが発生しました。');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setTopic('');
    setGeneratedIdea(null);
    setError(null);
    setIsLoading(false);
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4" onClick={handleClose}>
      <div
        className="bg-brand-bg-surface rounded-xl shadow-2xl w-full max-w-lg relative animate-fade-in-up p-8 border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
        >
          <Icon name="close" className="h-6 w-6" />
        </button>

        <div className="text-center">
            <span role="img" aria-label="lightbulb" className="text-4xl">💡</span>
            <h2 className="text-2xl font-bold font-serif text-brand-text-main mt-2">新しい記事の着想を得る</h2>
            <p className="text-brand-text-subtle mt-1">製品名や欲望のテーマを入力し、AIから官能的な言葉を受け取る</p>
        </div>

        <div className="mt-6">
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="例: 'Womanizer' または '二人の秘密'"
            className="w-full px-4 py-3 bg-brand-bg-main border border-white/20 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-brand-text-main placeholder:text-brand-text-subtle/50"
            disabled={isLoading}
          />
          <button
            onClick={handleGenerate}
            disabled={isLoading || !topic}
            className="w-full mt-3 bg-brand-primary text-white font-semibold py-3 rounded-lg hover:bg-fuchsia-700 disabled:bg-fuchsia-900/50 disabled:cursor-not-allowed transition-all duration-300 flex justify-center items-center shadow-lg shadow-brand-primary/30 hover:shadow-glow-primary"
          >
            {isLoading ? <Spinner /> : 'アイデアを生成'}
          </button>
        </div>
        
        {error && <div className="mt-4 text-center text-red-400 bg-red-900/30 p-3 rounded-lg">{error}</div>}

        {generatedIdea && (
          <div className="mt-6 p-4 border-l-4 border-brand-primary bg-brand-bg-main rounded-r-lg animate-fade-in">
            <h3 className="text-xl font-serif font-bold text-brand-text-main">{generatedIdea.title}</h3>
            <p className="mt-2 font-serif text-brand-text-subtle">{generatedIdea.excerpt}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GenerateIdeaModal;