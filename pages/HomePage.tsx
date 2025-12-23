import React from 'react';
import PostCard from '../components/PostCard';
import { MOCK_POSTS } from '../constants';

const HomePage: React.FC = () => {
  return (
    <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 space-y-12">
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-bg-surface/70 via-brand-bg-main to-brand-bg-surface/60 shadow-glow-primary-lg animate-fade-in">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(224,64,251,0.15),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(255,193,7,0.15),transparent_45%)]" />
        <div className="relative p-10 md:p-14 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-brand-text-subtle">
              <span className="h-2 w-2 rounded-full bg-brand-primary animate-pulse" />
              最新レビューと衛生の知恵をお届け
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold font-serif text-brand-text-main tracking-tight leading-tight">
              今宵の物語で、
              <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent"> 五感を満たす。</span>
            </h2>
            <p className="text-lg text-brand-text-subtle leading-relaxed max-w-2xl">
              信頼できるディテールと、やさしいトーン。自宅で安全に楽しむためのヒントをまとめました。
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#latest"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-brand-primary to-brand-accent text-brand-bg-main font-semibold shadow-glow-primary hover:translate-y-[-1px] transition-transform"
              >
                新着レビューを見る
              </a>
              <span className="px-4 py-3 rounded-full border border-white/10 text-brand-text-subtle bg-brand-bg-surface/70">
                3本の厳選記事・毎週更新
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {MOCK_POSTS.slice(0, 2).map((post) => (
              <div key={post.id} className="bg-brand-bg-surface/70 border border-white/10 rounded-2xl p-4 shadow-glow-primary">
                <p className="text-brand-text-subtle text-xs mb-2 uppercase tracking-[0.2em]">Highlight</p>
                <p className="text-brand-text-main font-serif font-semibold line-clamp-3 leading-snug">{post.title}</p>
                <div className="mt-4 flex items-center gap-2 text-xs text-brand-text-subtle">
                  <span className="h-2 w-2 rounded-full bg-brand-primary" />
                  {post.tags.join(' / ')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="latest" className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-brand-text-subtle uppercase tracking-[0.2em] text-xs">Editorial picks</p>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-brand-text-main">最新のレビュー</h3>
          </div>
          <div className="hidden md:flex items-center gap-3 text-sm text-brand-text-subtle">
            <span className="px-3 py-1 rounded-full border border-white/10 bg-brand-bg-surface/70">安全第一のヒント</span>
            <span className="px-3 py-1 rounded-full border border-white/10 bg-brand-bg-surface/70">実感ベースのレビュー</span>
          </div>
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
      </section>
    </main>
  );
};

export default HomePage;
