import React from 'react';
import {
  ShieldCheck,
  TrendingUp,
  Cpu,
  Radio,
  Sparkles,
  ArrowRight,
  Lock,
  BarChart3,
  Award
} from 'lucide-react';
import { NavigationTab } from '../types';

interface HomeViewProps {
  onNavigate: (tab: NavigationTab) => void;
  onOpenJoinModal: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onOpenJoinModal }) => {
  return (
    <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Hero Section */}
      <div className="relative rounded-3xl bg-gradient-to-b from-[#12120e] via-[#0c0c0a] to-[#080807] border border-[#26241b] p-8 sm:p-14 overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#d4af37]/8 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="max-w-3xl space-y-6 relative z-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#1c1a13] border border-[#d4af37]/30 text-[#e4be53] text-[11px] font-mono-quant tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-ping" />
            <span>INSTITUTIONAL QUANTITATIVE PROTOCOL</span>
          </div>

          <h1 className="font-serif-luxury text-4xl sm:text-6xl font-extrabold tracking-wide text-[#fae5a7] uppercase leading-[1.1]">
            THE ASYMMETRIC EDGE FOR THE MODERN OPERATOR.
          </h1>

          <p className="text-sm sm:text-base text-[#a8a69b] leading-relaxed max-w-2xl font-light">
            APEX LAB bridges top-tier quantitative algorithmic execution, audited high-expectancy signal ledgers, and AI vision chart scanning — engineered exclusively for serious capital.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('market-intelligence')}
              className="gold-gradient-btn px-6 py-3 rounded-xl font-bold text-xs tracking-wider uppercase font-mono-quant flex items-center space-x-2 shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:scale-102 transition-transform cursor-pointer"
            >
              <span>Launch Market Terminal</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            <button
              onClick={() => onNavigate('vip-signals')}
              className="px-6 py-3 rounded-xl bg-[#171610] hover:bg-[#201e16] border border-[#373426] text-[#dedbd2] font-mono-quant text-xs font-semibold tracking-wider uppercase flex items-center space-x-2 transition-colors cursor-pointer"
            >
              <span>Inspect Audited Ledger</span>
            </button>
          </div>
        </div>

        {/* Live Desk Stats strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-[#1f1d17] relative z-10 font-mono-quant">
          <div>
            <span className="text-2xl sm:text-3xl font-bold text-white block">87.4%</span>
            <span className="text-[10px] text-[#78766e] uppercase tracking-wider">Historical Signal Win-Rate</span>
          </div>
          <div>
            <span className="text-2xl sm:text-3xl font-bold text-[#e5c158] block">+120.4R</span>
            <span className="text-[10px] text-[#78766e] uppercase tracking-wider">Cumulative Realized 2026</span>
          </div>
          <div>
            <span className="text-2xl sm:text-3xl font-bold text-[#34d399] block">9 Models</span>
            <span className="text-[10px] text-[#78766e] uppercase tracking-wider">Live Audited Algorithms</span>
          </div>
          <div>
            <span className="text-2xl sm:text-3xl font-bold text-white block">&lt; 4.0s</span>
            <span className="text-[10px] text-[#78766e] uppercase tracking-wider">AI Chart Confluence Scan</span>
          </div>
        </div>
      </div>

      {/* Feature Pillar Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Pillar 1: Market Intelligence */}
        <div
          onClick={() => onNavigate('market-intelligence')}
          className="bg-[#0c0c0a] border border-[#222019] hover:border-[#d4af37]/50 rounded-2xl p-6 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
        >
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#161510] border border-[#2e2a1d] flex items-center justify-center text-[#d4af37] group-hover:scale-110 transition-transform">
              <BarChart3 className="w-6 h-6" />
            </div>
            <div className="text-[10px] font-mono-quant text-[#c59f27] uppercase tracking-widest">
              MODULE 01 & 04
            </div>
            <h3 className="font-serif-luxury text-xl font-bold text-white group-hover:text-[#fae5a7] transition-colors">
              Market Intelligence & AI Vision
            </h3>
            <p className="text-xs text-[#8f8d83] leading-relaxed">
              Real-time macro regime tracking (DXY, Gold, S&P 500, US 10Y) paired with the APEX Vision 4-second chart structure and liquidity scan.
            </p>
          </div>
          <div className="pt-6 flex items-center text-xs font-mono-quant text-[#d4af37] group-hover:translate-x-1 transition-transform">
            <span>Explore Intelligence Terminal</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </div>
        </div>

        {/* Pillar 2: VIP Signal Ledger */}
        <div
          onClick={() => onNavigate('vip-signals')}
          className="bg-[#0c0c0a] border border-[#222019] hover:border-[#d4af37]/50 rounded-2xl p-6 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
        >
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#161510] border border-[#2e2a1d] flex items-center justify-center text-[#d4af37] group-hover:scale-110 transition-transform">
              <Radio className="w-6 h-6" />
            </div>
            <div className="text-[10px] font-mono-quant text-[#c59f27] uppercase tracking-widest">
              MODULE 02
            </div>
            <h3 className="font-serif-luxury text-xl font-bold text-white group-hover:text-[#fae5a7] transition-colors">
              The Signal Ledger
            </h3>
            <p className="text-xs text-[#8f8d83] leading-relaxed">
              Full unedited transparency. Every trade pre-registered with defined entry, TP1-3, stop loss, and R-multiple outcome audited monthly.
            </p>
          </div>
          <div className="pt-6 flex items-center text-xs font-mono-quant text-[#d4af37] group-hover:translate-x-1 transition-transform">
            <span>Inspect All Ledger Records</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </div>
        </div>

        {/* Pillar 3: Algo Marketplace */}
        <div
          onClick={() => onNavigate('algo-marketplace')}
          className="bg-[#0c0c0a] border border-[#222019] hover:border-[#d4af37]/50 rounded-2xl p-6 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
        >
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#161510] border border-[#2e2a1d] flex items-center justify-center text-[#d4af37] group-hover:scale-110 transition-transform">
              <Cpu className="w-6 h-6" />
            </div>
            <div className="text-[10px] font-mono-quant text-[#c59f27] uppercase tracking-widest">
              MODULE 03
            </div>
            <h3 className="font-serif-luxury text-xl font-bold text-white group-hover:text-[#fae5a7] transition-colors">
              Algo Marketplace
            </h3>
            <p className="text-xs text-[#8f8d83] leading-relaxed">
              Rent verified quantitative bots or purchase perpetual licenses. 90 days live forward-tested with audited Sharpe and drawdown limits.
            </p>
          </div>
          <div className="pt-6 flex items-center text-xs font-mono-quant text-[#d4af37] group-hover:translate-x-1 transition-transform">
            <span>Browse 9 Verified Algos</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </div>
        </div>
      </div>
    </div>
  );
};
