export type NavigationTab = 
  | 'home' 
  | 'market-intelligence' 
  | 'vip-signals' 
  | 'algo-marketplace' 
  | 'community' 
  | 'market-analysis';

export interface TickerItem {
  symbol: string;
  price: string;
  change: string;
  isPositive: boolean;
  prefix?: string;
}

export interface MacroCard {
  id: string;
  name: string;
  value: string;
  change: string;
  isPositive: boolean;
  note: string;
  iconType: 'trend' | 'dollar' | 'link' | 'curve';
}

export interface AlgoItem {
  id: string;
  name: string;
  verified: boolean;
  author: string;
  assets: string[];
  tag: string;
  return12m: string;
  returnNumeric: number;
  winRate: number;
  sharpe: number;
  subscribers: number;
  maxDrawdown: number;
  rentPrice: number;
  ownPrice: number;
  notes: string;
  description: string;
  strategyType: string;
}

export interface SignalItem {
  id: string;
  pair: string;
  direction: 'LONG' | 'SHORT';
  entryPrice: string;
  tp1: string;
  tp2: string;
  tp3: string;
  stopLoss: string;
  riskReward: string;
  status: 'WON' | 'STOPPED' | 'OPEN';
  outcomeR: string;
  outcomeNumeric: number;
  date: string;
  timeframe: string;
  strategy: string;
  notes: string;
}

export interface ChartAnalysisResult {
  action: 'LONG' | 'SHORT' | 'STAND ASIDE';
  confidence: number;
  pair: string;
  timeframe: string;
  entry: string;
  target1: string;
  target2: string;
  invalidation: string;
  riskReward: string;
  structureVerdict: string;
  liquidityVerdict: string;
  orderBlockVerdict: string;
  momentumVerdict: string;
  riskGuardrail: string;
}

export interface DeskPost {
  id: string;
  author: string;
  role: string;
  avatar: string;
  timeAgo: string;
  title: string;
  content: string;
  likes: number;
  comments: number;
  tags: string[];
  pinned?: boolean;
}
