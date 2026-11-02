import React from 'react';
import {
  Globe,
  PieChart,
  Layers,
  TrendingUp,
  TrendingDown,
  Calendar,
  AlertCircle
} from 'lucide-react';

export const MarketAnalysisView: React.FC = () => {
  return (
    <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Title */}
      <div className="pb-2 border-b border-[#1c1b16]">
        <div className="text-[11px] font-mono-quant tracking-[0.22em] text-[#d4af37] uppercase flex items-center space-x-2">
          <Globe className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>INSTITUTIONAL POSITIONING & FLOWS</span>
        </div>
        <h1 className="font-serif-luxury text-3xl sm:text-4xl font-bold tracking-wide text-[#fae5a7] uppercase mt-1">
          MACRO ANALYSIS & COT INTELLIGENCE
        </h1>
        <p className="text-xs text-[#9c9a8f] mt-1">
          Deep structural orderflow, Central Bank policy trajectories, and CFTC Commitment of Traders commercial hedging breakdown.
        </p>
      </div>

      {/* Grid: COT Positioning + Central Bank Tracker */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* COT Report Breakdown */}
        <div className="bg-[#0c0c0a] border border-[#222019] rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#1c1b16]">
            <span className="text-xs font-mono-quant tracking-wider text-[#d4af37] font-semibold uppercase">
              COT COMMERCIAL VS SPECULATOR NET POSITIONS
            </span>
            <span className="text-[10px] font-mono-quant text-[#7d7b72]">CFTC WEEKLY RELEASE</span>
          </div>

          <div className="space-y-4 text-xs font-mono-quant">
            {/* Gold */}
            <div className="bg-[#12120e] p-3.5 rounded-xl border border-[#201e18] space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-bold text-white">GOLD (XAU/USD)</span>
                <span className="text-emerald-400 font-bold">+284,120 Contracts (Bullish Bias)</span>
              </div>
              <div className="w-full bg-[#1e1c16] h-2 rounded-full overflow-hidden flex">
                <div style={{ width: '74%' }} className="bg-[#34d399]" />
                <div style={{ width: '26%' }} className="bg-[#f43f5e]" />
              </div>
              <span className="text-[10px] text-[#828076] block">
                Commercial producers covering short hedges; asset managers increasing long allocations by +14.2% week-on-week.
              </span>
            </div>

            {/* S&P 500 E-mini */}
            <div className="bg-[#12120e] p-3.5 rounded-xl border border-[#201e18] space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-bold text-white">E-MINI S&P 500 (ES)</span>
                <span className="text-amber-400 font-bold">-42,800 Contracts (Defensive Hedge)</span>
              </div>
              <div className="w-full bg-[#1e1c16] h-2 rounded-full overflow-hidden flex">
                <div style={{ width: '42%' }} className="bg-[#34d399]" />
                <div style={{ width: '58%' }} className="bg-[#f43f5e]" />
              </div>
              <span className="text-[10px] text-[#828076] block">
                Dealer gamma skew leaning neutral-to-short above 6,850. Option market makers hedging tail downside.
              </span>
            </div>

            {/* US Dollar Index */}
            <div className="bg-[#12120e] p-3.5 rounded-xl border border-[#201e18] space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-bold text-white">US DOLLAR INDEX (DXY)</span>
                <span className="text-emerald-400 font-bold">+16,940 Contracts (Net Long)</span>
              </div>
              <div className="w-full bg-[#1e1c16] h-2 rounded-full overflow-hidden flex">
                <div style={{ width: '64%' }} className="bg-[#34d399]" />
                <div style={{ width: '36%' }} className="bg-[#f43f5e]" />
              </div>
              <span className="text-[10px] text-[#828076] block">
                Hedge funds rotating from EUR into USD cash reserves following European macroeconomic divergence.
              </span>
            </div>
          </div>
        </div>

        {/* Global Sessions & Liquidity Heatmap */}
        <div className="bg-[#0c0c0a] border border-[#222019] rounded-2xl p-6 space-y-4 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-[#1c1b16]">
            <span className="text-xs font-mono-quant tracking-wider text-[#d4af37] font-semibold uppercase">
              SESSION VOLATILITY TIMELINE & LIQUIDITY REGIMES
            </span>
          </div>

          <div className="space-y-3 font-mono-quant text-xs">
            <div className="border border-[#201e18] bg-[#12120e] rounded-xl p-3.5 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-[#716f67] uppercase block">ASIAN SESSION (00:00 - 08:00 GMT)</span>
                <span className="text-white font-bold mt-0.5 block">Tokyo / Singapore Consolidation</span>
                <span className="text-[10px] text-[#8e8c81] block mt-0.5">Mean reversion algos operate with tightest slippage. Range boundaries established.</span>
              </div>
              <span className="px-2 py-1 rounded text-[10px] bg-[#191913] text-[#a4a298] border border-[#2d2b22]">
                LOW VOLATILITY
              </span>
            </div>

            <div className="border border-[#d4af37]/40 bg-[#161510] rounded-xl p-3.5 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-[#d4af37] uppercase block">LONDON OPEN & NY OVERLAP (07:00 - 16:00 GMT)</span>
                <span className="text-[#fae5a7] font-bold mt-0.5 block">Peak Institutional Orderflow</span>
                <span className="text-[10px] text-[#b5b3a8] block mt-0.5">XAUUSD and NAS100 liquidity sweeps. 82% of VIP Signals executed during this window.</span>
              </div>
              <span className="px-2 py-1 rounded text-[10px] bg-[#221d10] text-[#f7d77b] border border-[#d4af37]/60 font-bold">
                ACTIVE NOW
              </span>
            </div>

            <div className="border border-[#201e18] bg-[#12120e] rounded-xl p-3.5 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-[#716f67] uppercase block">NEW YORK CLOSE & LONDON FIX (19:00 - 21:00 GMT)</span>
                <span className="text-white font-bold mt-0.5 block">Rebalancing & MOC Orders</span>
                <span className="text-[10px] text-[#8e8c81] block mt-0.5">Algorithmic gamma hedging into the cash close. Trailing stop-losses tightened.</span>
              </div>
              <span className="px-2 py-1 rounded text-[10px] bg-[#191913] text-[#a4a298] border border-[#2d2b22]">
                MODERATE
              </span>
            </div>
          </div>

          <div className="pt-3 border-t border-[#1c1b16] text-[11px] font-mono-quant text-[#7d7b73] flex items-center space-x-1.5">
            <AlertCircle className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>DESK RULE: Never hold open scalp positions into high-impact FOMC releases.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
