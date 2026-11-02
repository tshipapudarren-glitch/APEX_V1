import React, { useState } from 'react';
import { NavigationTab } from './types';
import { TickerBar } from './components/TickerBar';
import { Header } from './components/Header';
import { MarketIntelligenceView } from './components/MarketIntelligenceView';
import { VipSignalsView } from './components/VipSignalsView';
import { AlgoMarketplaceView } from './components/AlgoMarketplaceView';
import { HomeView } from './components/HomeView';
import { CommunityView } from './components/CommunityView';
import { MarketAnalysisView } from './components/MarketAnalysisView';
import { JoinApexModal } from './components/JoinApexModal';
import { ShieldAlert } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavigationTab>('market-intelligence');
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#070706] text-[#dedbd2] flex flex-col font-sans selection:bg-[#d4af37]/30 selection:text-white">
      {/* Top Real-time Ticker */}
      <TickerBar />

      {/* Main Navigation Header */}
      <Header
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onOpenJoinModal={() => setIsJoinModalOpen(true)}
      />

      {/* Main View Router */}
      <main className="flex-1 pb-16">
        {activeTab === 'home' && (
          <HomeView
            onNavigate={setActiveTab}
            onOpenJoinModal={() => setIsJoinModalOpen(true)}
          />
        )}

        {activeTab === 'market-intelligence' && (
          <MarketIntelligenceView />
        )}

        {activeTab === 'vip-signals' && (
          <VipSignalsView />
        )}

        {activeTab === 'algo-marketplace' && (
          <AlgoMarketplaceView />
        )}

        {activeTab === 'community' && (
          <CommunityView />
        )}

        {activeTab === 'market-analysis' && (
          <MarketAnalysisView />
        )}
      </main>

      {/* Institutional Footer */}
      <footer className="w-full bg-[#050504] border-t border-[#171612] py-8 text-xs font-mono-quant text-[#6b6961]">
        <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <span className="font-serif-luxury font-bold tracking-widest text-[#d4af37] text-sm">
                APEX LAB
              </span>
              <span className="text-[#3b3a35]">|</span>
              <span className="text-[11px] text-[#8e8c81]">TRADING INTELLIGENCE ARCHITECTURE</span>
            </div>

            <div className="flex items-center space-x-6 text-[11px]">
              <button
                onClick={() => setActiveTab('market-intelligence')}
                className="hover:text-[#dedbd2] cursor-pointer"
              >
                Market Intelligence
              </button>
              <button
                onClick={() => setActiveTab('vip-signals')}
                className="hover:text-[#dedbd2] cursor-pointer"
              >
                Signal Ledger
              </button>
              <button
                onClick={() => setActiveTab('algo-marketplace')}
                className="hover:text-[#dedbd2] cursor-pointer"
              >
                Algo Marketplace
              </button>
              <button
                onClick={() => setIsJoinModalOpen(true)}
                className="text-[#d4af37] hover:underline cursor-pointer"
              >
                Join Desk
              </button>
            </div>
          </div>

          <div className="pt-4 border-t border-[#12120e] flex flex-col md:flex-row items-start md:items-center justify-between gap-2 text-[10px] text-[#58564f] leading-relaxed">
            <div className="flex items-start space-x-1.5 max-w-4xl">
              <ShieldAlert className="w-3.5 h-3.5 text-[#858379] shrink-0 mt-0.5" />
              <span>
                RISK WARNING: Trading foreign exchange, indices, equities, and cryptocurrencies carries significant capital risk. Historical performance and backtested or forward-tested Sharpe ratios are audited but do not guarantee future returns. APEX LAB is a financial technology and quantitative intelligence research desk.
              </span>
            </div>
            <div>
              <span>© {new Date().getFullYear()} APEX LAB TRADING INTELLIGENCE. ALL RIGHTS RESERVED.</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Join APEX Modal */}
      <JoinApexModal
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
      />
    </div>
  );
}
