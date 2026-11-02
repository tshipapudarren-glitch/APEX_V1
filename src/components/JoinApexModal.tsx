import React, { useState } from 'react';
import {
  Crown,
  CheckCircle2,
  X,
  Zap,
  ShieldCheck,
  Check
} from 'lucide-react';

interface JoinApexModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JoinApexModal: React.FC<JoinApexModalProps> = ({ isOpen, onClose }) => {
  const [selectedPlan, setSelectedPlan] = useState<'desk' | 'signals' | 'algo'>('signals');
  const [isProcessing, setIsProcessing] = useState(false);
  const [activatedSuccess, setActivatedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleActivate = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setActivatedSuccess(true);
      setTimeout(() => {
        setActivatedSuccess(false);
        onClose();
      }, 2200);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div className="bg-[#0e0e0c] border border-[#d4af37]/50 rounded-3xl max-w-3xl w-full p-6 sm:p-8 space-y-6 shadow-[0_0_50px_rgba(212,175,55,0.22)] animate-in fade-in zoom-in-95 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#737169] hover:text-white cursor-pointer text-sm"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-2 max-w-lg mx-auto">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#1b1911] border border-[#d4af37]/40 text-[#f5df9e] text-[10px] font-mono-quant tracking-widest uppercase">
            <Crown className="w-3.5 h-3.5 fill-[#d4af37] text-transparent" />
            <span>APEX TRADING INTELLIGENCE MEMBERSHIP</span>
          </div>

          <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#fae5a7] uppercase">
            CHOOSE YOUR LEVEL OF ACCESS
          </h2>
          <p className="text-xs text-[#96948a]">
            Audited execution, asymmetric risk reward, and institutional machine intelligence.
          </p>
        </div>

        {/* Tier Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          {/* Plan 1: Desk Pass */}
          <div
            onClick={() => setSelectedPlan('desk')}
            className={`rounded-2xl p-5 border cursor-pointer transition-all flex flex-col justify-between ${
              selectedPlan === 'desk'
                ? 'bg-[#181610] border-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.15)]'
                : 'bg-[#12120e] border-[#222019] hover:border-[#383528]'
            }`}
          >
            <div className="space-y-3">
              <span className="text-[10px] font-mono-quant text-[#8e8c81] uppercase tracking-wider block">
                DESK PASS
              </span>
              <div className="flex items-baseline space-x-1">
                <span className="font-mono-quant text-2xl font-bold text-white">$149</span>
                <span className="text-xs font-mono-quant text-[#7d7b72]">/mo</span>
              </div>
              <p className="text-[11px] text-[#8e8c81] leading-relaxed">
                For active self-directed traders tracking global macro regimes and session liquidity.
              </p>
              <div className="space-y-2 pt-2 text-[11px] text-[#dedbd2]">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                  <span>Market Intelligence Terminal</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                  <span>RSI & MACD Momentum</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                  <span>Community Alpha Room</span>
                </div>
              </div>
            </div>
          </div>

          {/* Plan 2: VIP Signals (Featured) */}
          <div
            onClick={() => setSelectedPlan('signals')}
            className={`rounded-2xl p-5 border cursor-pointer transition-all flex flex-col justify-between relative ${
              selectedPlan === 'signals'
                ? 'bg-[#1a1710] border-[#f3ce65] shadow-[0_0_25px_rgba(212,175,55,0.25)]'
                : 'bg-[#12120e] border-[#222019] hover:border-[#383528]'
            }`}
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#d4af37] to-[#fae5a7] text-black text-[9px] font-mono-quant font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow">
              DESK RECOMMENDED
            </div>

            <div className="space-y-3">
              <span className="text-[10px] font-mono-quant text-[#e5c158] uppercase tracking-wider block font-bold">
                VIP SIGNALS LEDGER
              </span>
              <div className="flex items-baseline space-x-1">
                <span className="font-mono-quant text-2xl font-bold text-white">$299</span>
                <span className="text-xs font-mono-quant text-[#7d7b72]">/mo</span>
              </div>
              <p className="text-[11px] text-[#8e8c81] leading-relaxed">
                Direct trade execution feed with entry, TP1-3, and 87.4% historical win-rate audit.
              </p>
              <div className="space-y-2 pt-2 text-[11px] text-[#dedbd2]">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#34d399] shrink-0" />
                  <span>Audited Signal Ledger Access</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#34d399] shrink-0" />
                  <span>APEX Vision 4s AI Chart Scanner</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#34d399] shrink-0" />
                  <span>Real-time Telegram & Discord Alerts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#34d399] shrink-0" />
                  <span>Institutional Risk Guardrails</span>
                </div>
              </div>
            </div>
          </div>

          {/* Plan 3: Algo Desk & Perpetual */}
          <div
            onClick={() => setSelectedPlan('algo')}
            className={`rounded-2xl p-5 border cursor-pointer transition-all flex flex-col justify-between ${
              selectedPlan === 'algo'
                ? 'bg-[#181610] border-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.15)]'
                : 'bg-[#12120e] border-[#222019] hover:border-[#383528]'
            }`}
          >
            <div className="space-y-3">
              <span className="text-[10px] font-mono-quant text-[#8e8c81] uppercase tracking-wider block">
                ALGO MARKETPLACE + DESK
              </span>
              <div className="flex items-baseline space-x-1">
                <span className="font-mono-quant text-2xl font-bold text-white">$599</span>
                <span className="text-xs font-mono-quant text-[#7d7b72]">/mo</span>
              </div>
              <p className="text-[11px] text-[#8e8c81] leading-relaxed">
                Full algorithmic automation. Rent all 9 verified models or connect live API broker keys.
              </p>
              <div className="space-y-2 pt-2 text-[11px] text-[#dedbd2]">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                  <span>Access to all 9 Verified Algos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                  <span>TradeLocker / MT5 Direct Webhook</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                  <span>Monthly Algo Recalibration Desk</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security & Action row */}
        <div className="pt-4 border-t border-[#1c1b16] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2 text-xs text-[#8c8a81] font-mono-quant">
            <ShieldCheck className="w-4 h-4 text-[#34d399]" />
            <span>30-Day Performance Backstop · Instant Access</span>
          </div>

          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="text-xs font-mono-quant text-[#8e8c83] hover:text-white px-4 py-2 cursor-pointer"
            >
              Cancel
            </button>

            <button
              onClick={handleActivate}
              disabled={isProcessing || activatedSuccess}
              className="gold-gradient-btn flex-1 sm:flex-initial px-8 py-3 rounded-xl text-xs font-mono-quant font-bold flex items-center justify-center space-x-2 cursor-pointer shadow-[0_0_20px_rgba(212,175,55,0.3)] disabled:opacity-50"
            >
              {isProcessing ? (
                <>
                  <div className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  <span>Authenticating Operator...</span>
                </>
              ) : activatedSuccess ? (
                <>
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>Membership Activated! Welcome to APEX.</span>
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4 fill-black stroke-none" />
                  <span>Activate APEX Access</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
