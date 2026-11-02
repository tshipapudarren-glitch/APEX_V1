import React, { useState } from 'react';
import {
  Radio,
  ShieldCheck,
  TrendingUp,
  TrendingDown,
  Clock,
  Search,
  Filter,
  CheckCircle2,
  XCircle,
  ExternalLink,
  ChevronRight,
  Layers
} from 'lucide-react';
import { MONTHLY_SIGNALS_SUMMARY, SIGNALS_LEDGER } from '../data/mockData';
import { SignalItem } from '../types';

export const VipSignalsView: React.FC = () => {
  const [filterStatus, setFilterStatus] = useState<'ALL' | 'WON' | 'STOPPED' | 'OPEN'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSignal, setSelectedSignal] = useState<SignalItem | null>(null);

  const filteredSignals = SIGNALS_LEDGER.filter((item) => {
    const matchesStatus = filterStatus === 'ALL' || item.status === filterStatus;
    const matchesSearch =
      item.pair.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.strategy.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Header section with Module Tag, Headline, and Top Stats */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2">
        <div className="space-y-2">
          <div className="text-[11px] font-mono-quant tracking-[0.22em] text-[#d4af37] uppercase flex items-center space-x-2">
            <Radio className="w-3.5 h-3.5 text-[#d4af37] animate-pulse" />
            <span>MODULE 02 · VIP SIGNALS</span>
          </div>

          <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-wide text-[#fae5a7] uppercase">
            THE SIGNAL LEDGER
          </h1>

          <p className="text-xs sm:text-sm text-[#9c9a8f] max-w-2xl leading-relaxed">
            Every signal we publish — entry, targets, stop, outcome. Audited monthly. Wins and losses, all of them.
          </p>
        </div>

        {/* Top Right Stat Counters */}
        <div className="flex items-center space-x-8 lg:space-x-12 shrink-0">
          <div className="text-right">
            <div className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white tracking-tight">
              87.4%
            </div>
            <div className="text-[10px] font-mono-quant text-[#85847b] tracking-wider uppercase mt-0.5">
              WIN-RATE
            </div>
          </div>

          <div className="text-right">
            <div className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#e5c158] tracking-tight drop-shadow-[0_0_12px_rgba(229,193,88,0.25)]">
              +19.1R
            </div>
            <div className="text-[10px] font-mono-quant text-[#85847b] tracking-wider uppercase mt-0.5">
              LAST 13 SIGNALS
            </div>
          </div>

          <div className="text-right">
            <div className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#e5c158] tracking-tight">
              +1.59R
            </div>
            <div className="text-[10px] font-mono-quant text-[#85847b] tracking-wider uppercase mt-0.5">
              EXPECTANCY / TRADE
            </div>
          </div>
        </div>
      </div>

      {/* Main Visualizations: Cumulative R-Multiple & October Book */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Cumulative R-Multiple Chart Card */}
        <div className="lg:col-span-8 bg-[#0c0c0a] border border-[#222019] rounded-2xl p-5 sm:p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-[#1c1b16]">
            <span className="text-xs font-mono-quant tracking-wider text-[#d4af37] font-semibold uppercase">
              CUMULATIVE R-MULTIPLE — 2026
            </span>
            <span className="text-[10px] font-mono-quant text-[#7c7a72] tracking-wider uppercase">
              1R = RISKED CAPITAL
            </span>
          </div>

          {/* SVG Smooth Trajectory Curve */}
          <div className="relative w-full h-52 my-3">
            <svg
              viewBox="0 0 600 180"
              className="w-full h-full overflow-visible"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="curveGold" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#c59f27" />
                  <stop offset="50%" stopColor="#f7d77b" />
                  <stop offset="100%" stopColor="#fae5a7" />
                </linearGradient>
                <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Grid Horizontal Guidelines */}
              <line x1="40" y1="150" x2="580" y2="150" stroke="#1d1c16" strokeWidth="1" />
              <line x1="40" y1="115" x2="580" y2="115" stroke="#1d1c16" strokeWidth="1" />
              <line x1="40" y1="80" x2="580" y2="80" stroke="#1d1c16" strokeWidth="1" />
              <line x1="40" y1="45" x2="580" y2="45" stroke="#1d1c16" strokeWidth="1" />
              <line x1="40" y1="15" x2="580" y2="15" stroke="#1d1c16" strokeWidth="1" />

              {/* Y Axis Labels */}
              <text x="15" y="153" fill="#626058" fontSize="10" fontFamily="monospace">0</text>
              <text x="15" y="118" fill="#626058" fontSize="10" fontFamily="monospace">30</text>
              <text x="15" y="83" fill="#626058" fontSize="10" fontFamily="monospace">60</text>
              <text x="15" y="48" fill="#626058" fontSize="10" fontFamily="monospace">90</text>
              <text x="10" y="18" fill="#626058" fontSize="10" fontFamily="monospace">120</text>

              {/* Smooth Spline Path */}
              {/* Jun: 24, Jul: 48, Aug: 64, Sep: 102, Oct: 128 */}
              <path
                d="M 60,140 C 130,125 150,110 200,105 C 250,100 280,95 330,88 C 390,75 420,50 460,40 C 510,30 540,24 570,18"
                fill="none"
                stroke="url(#curveGold)"
                strokeWidth="3"
                strokeLinecap="round"
              />

              {/* Glowing Node Points */}
              <circle cx="60" cy="140" r="5" fill="#f7d77b" stroke="#0c0c0a" strokeWidth="2" filter="url(#nodeGlow)" />
              <circle cx="200" cy="105" r="5" fill="#f7d77b" stroke="#0c0c0a" strokeWidth="2" filter="url(#nodeGlow)" />
              <circle cx="330" cy="88" r="5" fill="#f7d77b" stroke="#0c0c0a" strokeWidth="2" filter="url(#nodeGlow)" />
              <circle cx="460" cy="40" r="5" fill="#f7d77b" stroke="#0c0c0a" strokeWidth="2" filter="url(#nodeGlow)" />
              <circle cx="570" cy="18" r="5" fill="#f7d77b" stroke="#0c0c0a" strokeWidth="2" filter="url(#nodeGlow)" />

              {/* X Axis Month Labels */}
              <text x="50" y="172" fill="#7d7b73" fontSize="11" fontFamily="monospace">Jun</text>
              <text x="190" y="172" fill="#7d7b73" fontSize="11" fontFamily="monospace">Jul</text>
              <text x="320" y="172" fill="#7d7b73" fontSize="11" fontFamily="monospace">Aug</text>
              <text x="450" y="172" fill="#7d7b73" fontSize="11" fontFamily="monospace">Sep</text>
              <text x="560" y="172" fill="#7d7b73" fontSize="11" fontFamily="monospace">Oct</text>
            </svg>
          </div>

          {/* Monthly Breakdown Boxes matching Screenshot 3 */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 pt-4 border-t border-[#1c1b16]">
            {MONTHLY_SIGNALS_SUMMARY.map((m) => (
              <div
                key={m.month}
                className="bg-[#12120e] border border-[#23211a] hover:border-[#d4af37]/40 rounded-xl p-3 text-center transition-all"
              >
                <span className="text-[10px] font-mono-quant text-[#85847b] uppercase block">
                  {m.month}
                </span>
                <span className="text-base font-mono-quant font-bold text-white block my-0.5">
                  {m.winRate}
                </span>
                <span className="text-[9px] font-mono-quant text-[#a4a297] block">
                  {m.signals} signals · <strong className="text-emerald-400">{m.rMultiple}</strong>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* October Book — Closed Trades Card */}
        <div className="lg:col-span-4 bg-[#0c0c0a] border border-[#222019] rounded-2xl p-5 sm:p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-[#1c1b16]">
            <span className="text-xs font-mono-quant tracking-wider text-[#d4af37] font-semibold uppercase">
              OCTOBER BOOK — CLOSED TRADES
            </span>
          </div>

          {/* Bar Chart Container */}
          <div className="relative w-full h-52 flex items-end justify-center gap-6 px-4 pb-4">
            {/* Wins Bar (Green, Height 6) */}
            <div className="flex flex-col items-center flex-1 h-full justify-end group">
              <span className="text-[11px] font-mono-quant text-[#34d399] font-bold mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                6 Trades
              </span>
              <div
                style={{ height: '62%' }}
                className="w-full bg-[#34d399] rounded-t-sm shadow-[0_0_15px_rgba(52,211,153,0.3)] transition-all group-hover:brightness-110"
              />
              <span className="text-[11px] font-mono-quant text-[#dedbd2] mt-2 font-medium">
                Wins
              </span>
            </div>

            {/* Losses Bar (Pink/Red, Height 2) */}
            <div className="flex flex-col items-center flex-1 h-full justify-end group">
              <span className="text-[11px] font-mono-quant text-[#f43f5e] font-bold mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                2 Stops
              </span>
              <div
                style={{ height: '24%' }}
                className="w-full bg-[#f43f5e] rounded-t-sm shadow-[0_0_15px_rgba(244,63,94,0.3)] transition-all group-hover:brightness-110"
              />
              <span className="text-[11px] font-mono-quant text-[#dedbd2] mt-2 font-medium">
                Losses
              </span>
            </div>

            {/* Open Bar (Blue, Height 1) */}
            <div className="flex flex-col items-center flex-1 h-full justify-end group">
              <span className="text-[11px] font-mono-quant text-[#38bdf8] font-bold mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                1 Active
              </span>
              <div
                style={{ height: '14%' }}
                className="w-full bg-[#38bdf8] rounded-t-sm shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all group-hover:brightness-110"
              />
              <span className="text-[11px] font-mono-quant text-[#dedbd2] mt-2 font-medium">
                Open
              </span>
            </div>
          </div>

          {/* Bottom Count Metrics */}
          <div className="grid grid-cols-3 gap-2 pt-4 border-t border-[#1c1b16] text-center">
            <div>
              <span className="text-2xl font-mono-quant font-bold text-white block">6</span>
              <span className="text-[10px] font-mono-quant text-[#85847b] uppercase">WINS</span>
            </div>
            <div>
              <span className="text-2xl font-mono-quant font-bold text-white block">2</span>
              <span className="text-[10px] font-mono-quant text-[#85847b] uppercase">STOPS</span>
            </div>
            <div>
              <span className="text-2xl font-mono-quant font-bold text-white block">1</span>
              <span className="text-[10px] font-mono-quant text-[#85847b] uppercase">RUNNING</span>
            </div>
          </div>
        </div>
      </div>

      {/* HOW WE PUBLISH Banner matching screenshot */}
      <div className="bg-[#0c0c0a] border border-[#222019] rounded-xl p-5 space-y-2">
        <div className="text-xs font-mono-quant tracking-wider text-[#d4af37] font-semibold uppercase flex items-center space-x-1.5 mb-2">
          <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
          <span>HOW WE PUBLISH</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-[#b8b5ab]">
          <div className="flex items-start space-x-2">
            <span className="text-[#d4af37] font-bold">✔</span>
            <span>Signals are authored by the desk and pre-registered in the ledger <em>before</em> prices move.</span>
          </div>

          <div className="flex items-start space-x-2">
            <span className="text-[#d4af37] font-bold">✔</span>
            <span>Outcomes are tracked to absolute TP/SL — never "moved the stop".</span>
          </div>

          <div className="flex items-start space-x-2">
            <span className="text-[#d4af37] font-bold">✔</span>
            <span>Monthly audit reconciled against third-party execution logs.</span>
          </div>
        </div>
      </div>

      {/* Signals Ledger Interactive Table */}
      <div className="bg-[#0c0c0a] border border-[#222019] rounded-2xl overflow-hidden">
        {/* Table Filters & Search */}
        <div className="p-4 sm:p-5 border-b border-[#1c1b16] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-2 overflow-x-auto scrollbar-none pb-1 sm:pb-0">
            {(['ALL', 'WON', 'OPEN', 'STOPPED'] as const).map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono-quant font-medium tracking-wide transition-all cursor-pointer ${
                  filterStatus === status
                    ? 'bg-[#1e1c15] border border-[#d4af37]/60 text-[#fae5a7]'
                    : 'text-[#87867d] hover:text-white bg-[#12120e] border border-transparent'
                }`}
              >
                {status}
              </button>
            ))}
          </div>

          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-[#6e6d64] absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search pair, strategy, ID..."
              className="w-full bg-[#12120e] border border-[#222019] focus:border-[#d4af37] rounded-lg pl-9 pr-3 py-1.5 text-xs font-mono-quant text-white placeholder-[#5e5c54] focus:outline-none"
            />
          </div>
        </div>

        {/* Desktop Table View */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs font-mono-quant">
            <thead>
              <tr className="border-b border-[#1c1b16] bg-[#090908] text-[#706e65] text-[10px] uppercase tracking-wider">
                <th className="py-3 px-4">SIGNAL ID</th>
                <th className="py-3 px-4">PAIR</th>
                <th className="py-3 px-4">DIRECTION</th>
                <th className="py-3 px-4">ENTRY</th>
                <th className="py-3 px-4">TARGETS (TP1 / TP2 / TP3)</th>
                <th className="py-3 px-4">INVALIDATION</th>
                <th className="py-3 px-4">R:R</th>
                <th className="py-3 px-4">STATUS</th>
                <th className="py-3 px-4 text-right">OUTCOME</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#171612]">
              {filteredSignals.map((sig) => (
                <tr
                  key={sig.id}
                  onClick={() => setSelectedSignal(sig)}
                  className="hover:bg-[#12120e] transition-colors cursor-pointer group"
                >
                  <td className="py-3.5 px-4 text-[#8f8d83] font-medium">
                    {sig.id}
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-white">
                    {sig.pair}
                    <span className="text-[10px] text-[#6d6b62] block font-normal">
                      {sig.timeframe} · {sig.date}
                    </span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold ${
                        sig.direction === 'LONG'
                          ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-500/30'
                          : 'bg-rose-950/60 text-rose-400 border border-rose-500/30'
                      }`}
                    >
                      {sig.direction === 'LONG' ? (
                        <TrendingUp className="w-3 h-3 mr-1" />
                      ) : (
                        <TrendingDown className="w-3 h-3 mr-1" />
                      )}
                      {sig.direction}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-[#dedbd2]">
                    {sig.entryPrice}
                  </td>
                  <td className="py-3.5 px-4 text-[#9c9a8f]">
                    {sig.tp1} <span className="text-[#4e4d46]">/</span> {sig.tp2} <span className="text-[#4e4d46]">/</span> {sig.tp3}
                  </td>
                  <td className="py-3.5 px-4 text-rose-400/90">
                    {sig.stopLoss}
                  </td>
                  <td className="py-3.5 px-4 text-[#fae5a7]">
                    {sig.riskReward}
                  </td>
                  <td className="py-3.5 px-4">
                    <span
                      className={`inline-flex items-center text-[10px] font-bold px-2 py-0.5 rounded ${
                        sig.status === 'WON'
                          ? 'text-emerald-400 bg-emerald-950/40'
                          : sig.status === 'OPEN'
                          ? 'text-sky-400 bg-sky-950/40'
                          : 'text-rose-400 bg-rose-950/40'
                      }`}
                    >
                      {sig.status === 'WON' && <CheckCircle2 className="w-3 h-3 mr-1" />}
                      {sig.status === 'STOPPED' && <XCircle className="w-3 h-3 mr-1" />}
                      {sig.status === 'OPEN' && <Clock className="w-3 h-3 mr-1" />}
                      {sig.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right font-bold">
                    <span
                      className={`${
                        sig.status === 'WON'
                          ? 'text-emerald-400'
                          : sig.status === 'OPEN'
                          ? 'text-sky-400'
                          : 'text-rose-400'
                      }`}
                    >
                      {sig.outcomeR}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Trade Detail Modal */}
      {selectedSignal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#0f0e0c] border border-[#d4af37]/40 rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-[0_0_30px_rgba(212,175,55,0.15)] animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between pb-3 border-b border-[#222019]">
              <div className="flex items-center space-x-2">
                <span className="font-mono-quant text-xs text-[#d4af37] font-semibold">
                  {selectedSignal.id}
                </span>
                <span className="text-white font-bold">{selectedSignal.pair}</span>
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                    selectedSignal.direction === 'LONG' ? 'bg-emerald-950 text-emerald-400' : 'bg-rose-950 text-rose-400'
                  }`}
                >
                  {selectedSignal.direction}
                </span>
              </div>
              <button
                onClick={() => setSelectedSignal(null)}
                className="text-[#7d7b72] hover:text-white cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs font-mono-quant">
              <div className="bg-[#151410] p-3 rounded-lg border border-[#23211b]">
                <span className="text-[10px] text-[#716f66] uppercase block">Execution Date</span>
                <span className="text-white mt-1 block">{selectedSignal.date} ({selectedSignal.timeframe})</span>
              </div>
              <div className="bg-[#151410] p-3 rounded-lg border border-[#23211b]">
                <span className="text-[10px] text-[#716f66] uppercase block">Realized Outcome</span>
                <span className="text-emerald-400 font-bold mt-1 block">{selectedSignal.outcomeR}</span>
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <span className="text-[10px] font-mono-quant text-[#716f66] uppercase block">Desk Strategy & Setup</span>
              <p className="text-[#dedbd2] font-medium">{selectedSignal.strategy}</p>
              <p className="text-[#969489] text-[11px] leading-relaxed bg-[#151410] p-3 rounded-lg border border-[#23211b]">
                {selectedSignal.notes}
              </p>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedSignal(null)}
                className="px-4 py-2 bg-[#222018] hover:bg-[#2c2a20] text-white rounded-lg text-xs font-mono-quant cursor-pointer"
              >
                Close Audit View
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
