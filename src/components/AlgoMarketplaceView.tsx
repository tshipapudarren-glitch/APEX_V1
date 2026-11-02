import React, { useState } from 'react';
import {
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Info,
  Cpu,
  Layers,
  ArrowUpDown,
  Zap,
  Play,
  Sliders,
  Check
} from 'lucide-react';
import { ALGOS_DATA } from '../data/mockData';
import { AlgoItem } from '../types';

export const AlgoMarketplaceView: React.FC = () => {
  const [sortBy, setSortBy] = useState<'return' | 'winRate' | 'sharpe' | 'subscribers' | 'drawdown'>('return');
  const [activeAlgoToDeploy, setActiveAlgoToDeploy] = useState<AlgoItem | null>(null);
  const [deploymentMode, setDeploymentMode] = useState<'paper' | 'live'>('paper');
  const [selectedBroker, setSelectedBroker] = useState('TradeLocker');
  const [riskPerTrade, setRiskPerTrade] = useState(1.0);
  const [isDeploying, setIsDeploying] = useState(false);
  const [deployedSuccess, setDeployedSuccess] = useState(false);

  // Sorting logic
  const sortedAlgos = [...ALGOS_DATA].sort((a, b) => {
    if (sortBy === 'return') return b.returnNumeric - a.returnNumeric;
    if (sortBy === 'winRate') return b.winRate - a.winRate;
    if (sortBy === 'sharpe') return b.sharpe - a.sharpe;
    if (sortBy === 'subscribers') return b.subscribers - a.subscribers;
    if (sortBy === 'drawdown') return Math.abs(a.maxDrawdown) - Math.abs(b.maxDrawdown);
    return 0;
  });

  const handleDeployConfirm = () => {
    setIsDeploying(true);
    setTimeout(() => {
      setIsDeploying(false);
      setDeployedSuccess(true);
      setTimeout(() => {
        setDeployedSuccess(false);
        setActiveAlgoToDeploy(null);
      }, 2000);
    }, 1800);
  };

  return (
    <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Header section with Module Tag, Headline, and Top Stats */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2">
        <div className="space-y-2">
          <div className="text-[11px] font-mono-quant tracking-[0.22em] text-[#d4af37] uppercase flex items-center space-x-2">
            <Cpu className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>MODULE 03 · ALGO MARKETPLACE</span>
          </div>

          <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-wide text-[#fae5a7] uppercase">
            RENT THE DESK.<br />
            OR OWN THE MACHINE.
          </h1>

          <p className="text-xs sm:text-sm text-[#9c9a8f] max-w-2xl leading-relaxed">
            Every algorithm is verified live — 90 days of forward performance, max drawdown and Sharpe, published before you pay a cent.
          </p>
        </div>

        {/* Top Right Stat Counters */}
        <div className="flex items-center space-x-8 lg:space-x-12 shrink-0">
          <div className="text-right">
            <div className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white tracking-tight">
              9
            </div>
            <div className="text-[10px] font-mono-quant text-[#85847b] tracking-wider uppercase mt-0.5">
              VERIFIED ALGOS
            </div>
          </div>

          <div className="text-right">
            <div className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white tracking-tight">
              1352
            </div>
            <div className="text-[10px] font-mono-quant text-[#85847b] tracking-wider uppercase mt-0.5">
              ACTIVE RENTERS
            </div>
          </div>

          <div className="text-right">
            <div className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#e5c158] tracking-tight drop-shadow-[0_0_12px_rgba(229,193,88,0.25)]">
              +49.8%
            </div>
            <div className="text-[10px] font-mono-quant text-[#85847b] tracking-wider uppercase mt-0.5">
              AVG ANNUAL RETURN
            </div>
          </div>

          <div className="text-right">
            <div className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white tracking-tight">
              3.02
            </div>
            <div className="text-[10px] font-mono-quant text-[#85847b] tracking-wider uppercase mt-0.5">
              BEST SHARPE
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Sort Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-2 border-y border-[#1c1b16]">
        <div className="flex items-center space-x-2 text-xs font-mono-quant overflow-x-auto scrollbar-none pb-1 sm:pb-0">
          <span className="text-[#7d7b73] flex items-center mr-1 uppercase tracking-wider text-[11px]">
            <ArrowUpDown className="w-3 h-3 mr-1" /> SORT
          </span>

          <button
            onClick={() => setSortBy('return')}
            className={`px-3 py-1.5 rounded text-xs transition-all cursor-pointer ${
              sortBy === 'return'
                ? 'bg-[#1e1c15] border border-[#d4af37]/60 text-[#fae5a7]'
                : 'text-[#87867d] hover:text-white bg-[#12120e]'
            }`}
          >
            Annual Return ⌄
          </button>

          <button
            onClick={() => setSortBy('winRate')}
            className={`px-3 py-1.5 rounded text-xs transition-all cursor-pointer ${
              sortBy === 'winRate'
                ? 'bg-[#1e1c15] border border-[#d4af37]/60 text-[#fae5a7]'
                : 'text-[#87867d] hover:text-white bg-[#12120e]'
            }`}
          >
            Win Rate
          </button>

          <button
            onClick={() => setSortBy('sharpe')}
            className={`px-3 py-1.5 rounded text-xs transition-all cursor-pointer ${
              sortBy === 'sharpe'
                ? 'bg-[#1e1c15] border border-[#d4af37]/60 text-[#fae5a7]'
                : 'text-[#87867d] hover:text-white bg-[#12120e]'
            }`}
          >
            Sharpe
          </button>

          <button
            onClick={() => setSortBy('subscribers')}
            className={`px-3 py-1.5 rounded text-xs transition-all cursor-pointer ${
              sortBy === 'subscribers'
                ? 'bg-[#1e1c15] border border-[#d4af37]/60 text-[#fae5a7]'
                : 'text-[#87867d] hover:text-white bg-[#12120e]'
            }`}
          >
            Subscribers
          </button>

          <button
            onClick={() => setSortBy('drawdown')}
            className={`px-3 py-1.5 rounded text-xs transition-all cursor-pointer ${
              sortBy === 'drawdown'
                ? 'bg-[#1e1c15] border border-[#d4af37]/60 text-[#fae5a7]'
                : 'text-[#87867d] hover:text-white bg-[#12120e]'
            }`}
          >
            Max Drawdown
          </button>
        </div>

        <div className="flex items-center space-x-1.5 text-[11px] font-mono-quant text-[#34d399] tracking-wide shrink-0">
          <ShieldCheck className="w-3.5 h-3.5 text-[#34d399]" />
          <span>PERFORMANCE VERIFIED · 90-DAY FORWARD TEST</span>
        </div>
      </div>

      {/* 3-Column Grid of Algo Cards matching Screenshot 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {sortedAlgos.map((algo) => (
          <div
            key={algo.id}
            className="bg-[#0c0c0a] border border-[#222019] hover:border-[#d4af37]/45 rounded-2xl p-5 flex flex-col justify-between transition-all duration-200 group relative shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
          >
            {/* Top Row: Title, Verified Icon & Return */}
            <div>
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-1.5">
                    <h3 className="font-mono-quant text-base font-bold text-white tracking-wide group-hover:text-[#fae5a7] transition-colors">
                      {algo.name}
                    </h3>
                    <CheckCircle2 className="w-4 h-4 text-[#34d399] fill-[#34d399]/20" />
                  </div>

                  <span className="text-[11px] font-mono-quant text-[#7d7b73] mt-0.5 block uppercase">
                    BY {algo.author} · {algo.assets.join(' · ')}
                  </span>
                </div>

                <div className="text-right">
                  <div className="font-mono-quant text-xl font-bold text-[#34d399] flex items-center justify-end">
                    <TrendingUp className="w-4 h-4 mr-0.5" />
                    {algo.return12m}
                  </div>
                  <span className="text-[9px] font-mono-quant text-[#7d7b73] uppercase tracking-wider block">
                    12-MO RETURN
                  </span>
                </div>
              </div>

              {/* Tag */}
              <div className="mt-3">
                <span className="inline-block text-[10px] font-mono-quant tracking-wider text-[#d4af37] border border-[#d4af37]/30 bg-[#171610] px-2 py-0.5 rounded">
                  {algo.tag}
                </span>
              </div>

              {/* 4 Metrics Block */}
              <div className="grid grid-cols-4 gap-2 mt-4 bg-[#11110e] border border-[#1e1c16] rounded-xl p-3 text-center">
                <div>
                  <span className="text-base font-mono-quant font-bold text-white block">
                    {algo.winRate}%
                  </span>
                  <span className="text-[9px] font-mono-quant text-[#7d7b73] uppercase block mt-0.5">
                    WIN
                  </span>
                </div>

                <div>
                  <span className="text-base font-mono-quant font-bold text-white block">
                    {algo.sharpe}
                  </span>
                  <span className="text-[9px] font-mono-quant text-[#7d7b73] uppercase block mt-0.5">
                    SHARPE
                  </span>
                </div>

                <div>
                  <span className="text-base font-mono-quant font-bold text-white block">
                    {algo.subscribers}
                  </span>
                  <span className="text-[9px] font-mono-quant text-[#7d7b73] uppercase block mt-0.5">
                    SUBSCRIBERS
                  </span>
                </div>

                <div>
                  <span className="text-base font-mono-quant font-bold text-[#f43f5e] block">
                    {algo.maxDrawdown}%
                  </span>
                  <span className="text-[9px] font-mono-quant text-[#7d7b73] uppercase block mt-0.5">
                    MAX DD
                  </span>
                  {/* Mini Drawdown visual bar */}
                  <div className="w-full h-1 bg-[#251518] rounded-full mt-1 overflow-hidden">
                    <div
                      style={{ width: `${Math.min(Math.abs(algo.maxDrawdown) * 4, 100)}%` }}
                      className="h-full bg-[#f43f5e]"
                    />
                  </div>
                </div>
              </div>

              {/* Audit note line */}
              <div className="flex items-center space-x-1.5 text-[10px] font-mono-quant text-[#727068] mt-3">
                <Info className="w-3 h-3 text-[#5e5c55] shrink-0" />
                <span className="truncate">{algo.notes}</span>
              </div>
            </div>

            {/* Bottom Row: Price & Deploy Button */}
            <div className="pt-5 mt-4 border-t border-[#1c1b16] flex items-center justify-between">
              <div>
                <div className="flex items-baseline space-x-1">
                  <span className="font-mono-quant text-xl font-bold text-[#fae5a7]">
                    ${algo.rentPrice}
                  </span>
                  <span className="text-[11px] font-mono-quant text-[#7d7b73]">/mo</span>
                </div>
                <span className="text-[9px] font-mono-quant text-[#727068] uppercase tracking-wider block">
                  RENT · OR OWN ${algo.ownPrice.toLocaleString()}
                </span>
              </div>

              <button
                onClick={() => setActiveAlgoToDeploy(algo)}
                className="gold-gradient-btn px-4 py-2 rounded-lg text-xs font-mono-quant font-semibold flex items-center space-x-1.5 cursor-pointer shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:scale-102 transition-transform"
              >
                <Zap className="w-3.5 h-3.5 fill-[#0b0b08] stroke-none" />
                <span>Deploy</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Deploy & Execution Modal */}
      {activeAlgoToDeploy && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-[#0f0e0c] border border-[#d4af37]/50 rounded-2xl max-w-lg w-full p-6 space-y-5 shadow-[0_0_40px_rgba(212,175,55,0.2)] animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between pb-3 border-b border-[#222019]">
              <div>
                <span className="text-[10px] font-mono-quant text-[#d4af37] uppercase tracking-widest block">
                  ALGORITHM DEPLOYMENT PROTOCOL
                </span>
                <h3 className="text-lg font-mono-quant font-bold text-white flex items-center space-x-2 mt-0.5">
                  <span>{activeAlgoToDeploy.name}</span>
                  <CheckCircle2 className="w-4 h-4 text-[#34d399]" />
                </h3>
              </div>
              <button
                onClick={() => setActiveAlgoToDeploy(null)}
                className="text-[#7d7b72] hover:text-white cursor-pointer text-sm"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-[#a09e93] leading-relaxed">
              {activeAlgoToDeploy.description}
            </p>

            {/* Execution Mode */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono-quant uppercase text-[#7a786f] block">
                Select Execution Mode
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono-quant">
                <button
                  onClick={() => setDeploymentMode('paper')}
                  className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                    deploymentMode === 'paper'
                      ? 'bg-[#191812] border-[#d4af37] text-[#fae5a7]'
                      : 'bg-[#12120e] border-[#222019] text-[#8e8c83]'
                  }`}
                >
                  <span className="font-bold block text-white">Paper Forward-Run</span>
                  <span className="text-[10px] text-[#7d7b73] block mt-0.5">Zero financial risk · Live tick simulation</span>
                </button>

                <button
                  onClick={() => setDeploymentMode('live')}
                  className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                    deploymentMode === 'live'
                      ? 'bg-[#191812] border-[#d4af37] text-[#fae5a7]'
                      : 'bg-[#12120e] border-[#222019] text-[#8e8c83]'
                  }`}
                >
                  <span className="font-bold block text-white">Broker API Key</span>
                  <span className="text-[10px] text-[#7d7b73] block mt-0.5">Sub-millisecond direct market access</span>
                </button>
              </div>
            </div>

            {/* Broker selection */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono-quant uppercase text-[#7a786f] block">
                Connect Broker Target
              </span>
              <div className="grid grid-cols-3 gap-2 text-xs font-mono-quant">
                {['TradeLocker', 'MetaTrader 5', 'Bybit API'].map((b) => (
                  <button
                    key={b}
                    onClick={() => setSelectedBroker(b)}
                    className={`py-2 px-3 rounded-lg border text-center cursor-pointer transition-all ${
                      selectedBroker === b
                        ? 'bg-[#191812] border-[#d4af37] text-white'
                        : 'bg-[#12120e] border-[#222019] text-[#8e8c83]'
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Risk Slider */}
            <div className="space-y-2 bg-[#12120e] border border-[#222019] p-3 rounded-xl">
              <div className="flex justify-between text-xs font-mono-quant">
                <span className="text-[#8e8c83]">Max Risk Per Trade:</span>
                <span className="text-[#fae5a7] font-bold">{riskPerTrade}% account capital</span>
              </div>
              <input
                type="range"
                min="0.25"
                max="2.5"
                step="0.25"
                value={riskPerTrade}
                onChange={(e) => setRiskPerTrade(parseFloat(e.target.value))}
                className="w-full accent-[#d4af37] cursor-pointer"
              />
              <span className="text-[10px] text-[#716f67] block">
                The APEX Risk Engine automatically halts execution if trailing drawdown hits -4.0%.
              </span>
            </div>

            {/* Action buttons */}
            <div className="pt-2 flex items-center justify-between">
              <button
                onClick={() => setActiveAlgoToDeploy(null)}
                className="text-xs font-mono-quant text-[#8e8c83] hover:text-white cursor-pointer"
              >
                Cancel
              </button>

              <button
                onClick={handleDeployConfirm}
                disabled={isDeploying || deployedSuccess}
                className="gold-gradient-btn px-6 py-2.5 rounded-lg text-xs font-mono-quant font-bold flex items-center space-x-2 cursor-pointer disabled:opacity-50"
              >
                {isDeploying ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    <span>Connecting Webhook...</span>
                  </>
                ) : deployedSuccess ? (
                  <>
                    <Check className="w-4 h-4 stroke-[3]" />
                    <span>Deployed to {selectedBroker}!</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-black stroke-none" />
                    <span>Confirm & Launch Desk</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
