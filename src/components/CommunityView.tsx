import React, { useState } from 'react';
import {
  MessageSquare,
  ThumbsUp,
  Pin,
  Send,
  Users,
  Award,
  Flame,
  CheckCircle2,
  TrendingUp
} from 'lucide-react';
import { DESK_POSTS } from '../data/mockData';
import { DeskPost } from '../types';

export const CommunityView: React.FC = () => {
  const [posts, setPosts] = useState<DeskPost[]>(DESK_POSTS);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newTag, setNewTag] = useState('ALPHA');
  const [showNewPostForm, setShowNewPostForm] = useState(false);
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});

  const handleLike = (id: string) => {
    setLikedPosts((prev) => ({ ...prev, [id]: !prev[id] }));
    setPosts((prev) =>
      prev.map((p) => {
        if (p.id === id) {
          const isLiked = likedPosts[id];
          return { ...p, likes: isLiked ? p.likes - 1 : p.likes + 1 };
        }
        return p;
      })
    );
  };

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) return;

    const created: DeskPost = {
      id: `POST-${Date.now()}`,
      author: 'Private Desk Member',
      role: 'VIP TRADER',
      avatar: 'D',
      timeAgo: 'Just now',
      pinned: false,
      title: newTitle,
      content: newContent,
      likes: 1,
      comments: 0,
      tags: [newTag.toUpperCase(), 'COMMUNITY']
    };

    setPosts([created, ...posts]);
    setNewTitle('');
    setNewContent('');
    setShowNewPostForm(false);
  };

  return (
    <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-[#1c1b16]">
        <div>
          <div className="text-[11px] font-mono-quant tracking-[0.22em] text-[#d4af37] uppercase flex items-center space-x-2">
            <Users className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>VIP TRADING ROOM & COMMUNITY</span>
          </div>
          <h1 className="font-serif-luxury text-3xl sm:text-4xl font-bold tracking-wide text-[#fae5a7] uppercase mt-1">
            DESK ALPHA & DISCUSSIONS
          </h1>
          <p className="text-xs text-[#9c9a8f] mt-1">
            Direct institutional commentary from desk leads, quantitative model updates, and verified trader trade ideas.
          </p>
        </div>

        <button
          onClick={() => setShowNewPostForm(!showNewPostForm)}
          className="gold-gradient-btn px-4 py-2 rounded-lg text-xs font-mono-quant font-bold flex items-center space-x-1.5 cursor-pointer self-start sm:self-auto"
        >
          <MessageSquare className="w-3.5 h-3.5 fill-black stroke-none" />
          <span>{showNewPostForm ? 'Close Form' : 'Submit Desk Idea'}</span>
        </button>
      </div>

      {/* New Post Form */}
      {showNewPostForm && (
        <form
          onSubmit={handleCreatePost}
          className="bg-[#0f0e0c] border border-[#d4af37]/40 rounded-2xl p-5 space-y-3 animate-in fade-in"
        >
          <span className="text-[11px] font-mono-quant text-[#d4af37] uppercase tracking-wider block">
            Publish Trade Idea / Question to Desk
          </span>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Idea Headline (e.g. BTC CME gap fill before 80k expansion)"
            className="w-full bg-[#151410] border border-[#26241c] focus:border-[#d4af37] rounded-lg px-3 py-2 text-xs font-mono-quant text-white placeholder-[#636259] focus:outline-none"
            required
          />
          <textarea
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
            rows={3}
            placeholder="Detailed rationale, liquidity pool, entry/invalidation levels..."
            className="w-full bg-[#151410] border border-[#26241c] focus:border-[#d4af37] rounded-lg px-3 py-2 text-xs text-white placeholder-[#636259] focus:outline-none"
            required
          />
          <div className="flex items-center justify-between pt-1">
            <select
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              className="bg-[#151410] border border-[#26241c] text-[#dedbd2] text-xs font-mono-quant rounded px-2 py-1.5 focus:outline-none"
            >
              <option value="ALPHA">TAG: ALPHA</option>
              <option value="XAUUSD">TAG: XAUUSD</option>
              <option value="CRYPTO">TAG: CRYPTO</option>
              <option value="INDICES">TAG: INDICES</option>
            </select>

            <button
              type="submit"
              className="gold-gradient-btn px-4 py-1.5 rounded text-xs font-mono-quant font-semibold flex items-center space-x-1 cursor-pointer"
            >
              <Send className="w-3 h-3 fill-black stroke-none" />
              <span>Broadcast Idea</span>
            </button>
          </div>
        </form>
      )}

      {/* Feed Posts */}
      <div className="space-y-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className={`bg-[#0c0c0a] border rounded-2xl p-5 sm:p-6 transition-all ${
              post.pinned ? 'border-[#d4af37]/45 shadow-[0_0_20px_rgba(212,175,55,0.08)]' : 'border-[#222019]'
            }`}
          >
            {/* Author row */}
            <div className="flex items-center justify-between pb-3 border-b border-[#1a1914]">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-[#1a1913] border border-[#d4af37]/40 flex items-center justify-center font-mono-quant font-bold text-xs text-[#fae5a7]">
                  {post.avatar}
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono-quant font-semibold text-white">
                      {post.author}
                    </span>
                    <span className="text-[9px] font-mono-quant bg-[#1c1a12] text-[#d4af37] border border-[#d4af37]/30 px-1.5 py-0.2 rounded font-medium">
                      {post.role}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono-quant text-[#6e6c64]">
                    {post.timeAgo}
                  </span>
                </div>
              </div>

              {post.pinned && (
                <div className="flex items-center space-x-1 text-[10px] font-mono-quant text-[#fae5a7]">
                  <Pin className="w-3 h-3 text-[#fae5a7]" />
                  <span>PINNED DESK BRIEF</span>
                </div>
              )}
            </div>

            {/* Post content */}
            <div className="py-3 space-y-2">
              <h3 className="font-mono-quant text-base font-bold text-[#dedbd2]">
                {post.title}
              </h3>
              <p className="text-xs text-[#a09e93] leading-relaxed">
                {post.content}
              </p>
            </div>

            {/* Tags and actions */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center space-x-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] font-mono-quant text-[#8a887e] bg-[#141410] border border-[#222019] px-2 py-0.5 rounded"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center space-x-4 text-xs font-mono-quant text-[#8a887e]">
                <button
                  onClick={() => handleLike(post.id)}
                  className={`flex items-center space-x-1 cursor-pointer transition-colors ${
                    likedPosts[post.id] ? 'text-[#fae5a7]' : 'hover:text-white'
                  }`}
                >
                  <ThumbsUp className={`w-3.5 h-3.5 ${likedPosts[post.id] ? 'fill-[#fae5a7]' : ''}`} />
                  <span>{post.likes}</span>
                </button>

                <div className="flex items-center space-x-1">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>{post.comments} comments</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
