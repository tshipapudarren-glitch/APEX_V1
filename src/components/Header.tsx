import React, { useState } from 'react';
import { Crown, Menu, X } from 'lucide-react';
import { NavigationTab } from '../types';

interface HeaderProps {
  activeTab: NavigationTab;
  onTabChange: (tab: NavigationTab) => void;
  onOpenJoinModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onTabChange,
  onOpenJoinModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavigationTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'market-intelligence', label: 'Market Intelligence' },
    { id: 'vip-signals', label: 'VIP Signals' },
    { id: 'algo-marketplace', label: 'Algo Marketplace' },
    { id: 'community', label: 'Community' },
    { id: 'market-analysis', label: 'Market Analysis' },
  ];

  return (
    <header className="w-full bg-[#080807]/95 backdrop-blur-md border-b border-[#1b1a16] sticky top-0 z-50">
      <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => onTabChange('home')}
          className="flex items-center space-x-3 group text-left cursor-pointer focus:outline-none"
        >
          <div className="relative w-9 h-9 flex items-center justify-center">
            {/* Geometric stylized apex triangle */}
            <svg
              viewBox="0 0 100 100"
              className="w-8 h-8 fill-none stroke-[#d4af37] stroke-[6] transition-transform duration-300 group-hover:scale-105"
            >
              <polygon points="50,12 88,85 12,85" />
              <polyline points="33,52 50,22 67,52" className="stroke-[#f3d37c] stroke-[5]" />
              <line x1="50" y1="22" x2="50" y2="85" className="stroke-[#c59f27] stroke-[4]" />
            </svg>
            <div className="absolute inset-0 bg-[#d4af37]/10 filter blur-sm rounded-full -z-10" />
          </div>

          <div className="flex flex-col">
            <span className="font-serif-luxury text-base font-bold tracking-[0.16em] text-[#e8c973] uppercase drop-shadow-[0_1px_8px_rgba(212,175,55,0.25)]">
              APEX LAB
            </span>
            <span className="text-[9px] font-mono-quant tracking-[0.28em] text-[#8e8d85] uppercase -mt-0.5">
              TRADING INTELLIGENCE
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1.5 lg:space-x-2">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`px-3.5 py-1.5 rounded-md text-xs font-medium tracking-wide transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#1b1912] border border-[#d4af37]/50 text-[#f5df9e] shadow-[0_0_14px_rgba(212,175,55,0.18)]'
                    : 'text-[#9c9b94] hover:text-[#e4e3dc] hover:bg-[#12120e]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center space-x-3">
          <button
            onClick={onOpenJoinModal}
            className="gold-gradient-btn px-4 py-2 rounded-md font-semibold text-xs tracking-wider flex items-center space-x-1.5 cursor-pointer shadow-[0_0_18px_rgba(212,175,55,0.28)]"
          >
            <Crown className="w-3.5 h-3.5 fill-[#0b0b08] stroke-none" />
            <span>Join APEX</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center space-x-2">
          <button
            onClick={onOpenJoinModal}
            className="gold-gradient-btn px-3 py-1.5 rounded-md font-semibold text-[11px] flex items-center space-x-1"
          >
            <Crown className="w-3 h-3 fill-[#0b0b08]" />
            <span>Join</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#9c9b94] hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d0d0b] border-b border-[#22211b] px-4 pt-2 pb-4 space-y-1">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onTabChange(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-md text-xs font-medium ${
                  isActive
                    ? 'bg-[#1b1912] border border-[#d4af37]/50 text-[#f5df9e]'
                    : 'text-[#9c9b94] hover:text-[#e4e3dc]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
