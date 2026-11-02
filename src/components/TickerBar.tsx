import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { INITIAL_TICKERS } from '../data/mockData';
import { TickerItem } from '../types';

export const TickerBar: React.FC = () => {
  const [tickers, setTickers] = useState<TickerItem[]>(INITIAL_TICKERS);

  // Subtle live price tick animation to give authentic institutional terminal pulse
  useEffect(() => {
    const interval = setInterval(() => {
      setTickers(prev =>
        prev.map(item => {
          // 25% chance of tick per item every 3s
          if (Math.random() > 0.35) return item;

          if (item.symbol === 'APEX FEED') {
            const currentNum = parseInt(item.price, 10);
            const delta = Math.floor(Math.random() * 3) - 1;
            return { ...item, price: String(Math.max(950, currentNum + delta)) };
          }

          if (item.symbol === 'BTC') {
            const current = 77729 + (Math.floor(Math.random() * 80) - 40);
            return { ...item, price: `$${current.toLocaleString()}` };
          }

          if (item.symbol === 'ETH') {
            const current = 2256 + (Math.floor(Math.random() * 6) - 3);
            return { ...item, price: `$${current.toLocaleString()}` };
          }

          if (item.symbol === 'NAS100') {
            const current = 25114 + (Math.floor(Math.random() * 12) - 6);
            return { ...item, price: current.toLocaleString() };
          }

          return item;
        })
      );
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#050504] border-b border-[#1b1a16] text-[11px] font-mono-quant tracking-tight py-1 px-4 flex items-center justify-between overflow-x-auto whitespace-nowrap scrollbar-none select-none z-40">
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2 text-emerald-400 font-semibold pr-2 border-r border-[#201f1a]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[#a1a19a] tracking-wider text-[10px] uppercase">APEX FEED</span>
          <span className="text-emerald-400">962</span>
          <span className="text-emerald-400 text-[10px] flex items-center">
            <TrendingUp className="w-2.5 h-2.5 ml-0.5" /> +0.20%
          </span>
        </div>

        {tickers.slice(1).map((t) => (
          <div key={t.symbol} className="flex items-center space-x-1.5 transition-colors duration-300">
            <span className="text-[#888880]">{t.symbol}</span>
            <span className="text-[#deded9] font-medium">{t.price}</span>
            <span
              className={`text-[10px] flex items-center ${
                t.isPositive ? 'text-emerald-400' : 'text-rose-400'
              }`}
            >
              {t.isPositive ? (
                <TrendingUp className="w-2.5 h-2.5 mr-0.5 inline" />
              ) : (
                <TrendingDown className="w-2.5 h-2.5 mr-0.5 inline" />
              )}
              {t.change}
            </span>
          </div>
        ))}
      </div>

      <div className="hidden lg:flex items-center space-x-3 text-[10px] text-[#6d6d65] pl-4 border-l border-[#201f1a]">
        <span className="text-[#caa84c]">DESK: LONDON / NY OVERLAP</span>
        <span className="text-[#4e4e47]">|</span>
        <span>LATENCY: 1.2MS</span>
      </div>
    </div>
  );
};
