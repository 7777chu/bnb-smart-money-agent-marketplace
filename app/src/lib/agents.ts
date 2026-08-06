export type AgentCategory =
  | "Grid Trading"
  | "LP Rebalancing"
  | "Yield Optimization"
  | "Health Factor Monitoring";

export type RiskLevel = "Low" | "Medium" | "High";

export type SmartMoneyAgent = {
  id: string;
  name: string;
  category: AgentCategory;
  summary: string;
  protocols: string[];
  performance: string;
  riskLevel: RiskLevel;
  cost: string;
  chainIdentity: string;
  sessionPolicy: {
    allowlist: string[];
    spendCap: string;
    expiry: string;
    revoke: string;
  };
  txs: string[];
};

export const agents: SmartMoneyAgent[] = [
  {
    id: "grid-alpha",
    name: "Grid Alpha Agent",
    category: "Grid Trading",
    summary:
      "Places and manages automated BNB/USDT grid strategies with cost-aware rebalancing and drawdown limits.",
    protocols: ["PancakeSwap", "BSC Testnet"],
    performance: "Target report: win rate, net PnL after 0.3% cost, max drawdown",
    riskLevel: "High",
    cost: "x402/B402 per run + optional performance fee",
    chainIdentity: "ERC-8004 identity pending testnet registration",
    sessionPolicy: {
      allowlist: ["PancakeSwap swap", "price read", "position rebalance"],
      spendCap: "Testnet only / configurable cap",
      expiry: "24h default session",
      revoke: "One-click revoke in product",
    },
    txs: ["Pending BSC testnet tx"],
  },
  {
    id: "lp-range-keeper",
    name: "LP Range Keeper",
    category: "LP Rebalancing",
    summary:
      "Monitors LP ranges and recommends or executes safer PancakeSwap liquidity repositioning when price moves.",
    protocols: ["PancakeSwap"],
    performance: "Target report: fee APR, impermanent-loss risk, rebalance cost",
    riskLevel: "Medium",
    cost: "Fixed hire fee + per rebalance call",
    chainIdentity: "ERC-8004 identity pending testnet registration",
    sessionPolicy: {
      allowlist: ["liquidity read", "add/remove liquidity", "rebalance"],
      spendCap: "Max liquidity movement set by user",
      expiry: "User selected expiry",
      revoke: "Immediate session revoke",
    },
    txs: ["Pending PancakeSwap testnet proof"],
  },
  {
    id: "yield-router",
    name: "Yield Router Agent",
    category: "Yield Optimization",
    summary:
      "Compares yield opportunities across BNB Chain protocols and routes capital only when net APR beats cost and risk thresholds.",
    protocols: ["Lista", "Venus", "PancakeSwap"],
    performance: "Target report: APR delta, gas/cost impact, risk-adjusted net yield",
    riskLevel: "Medium",
    cost: "Per scan + optional execution call",
    chainIdentity: "ERC-8004 identity pending 8004scan enrichment",
    sessionPolicy: {
      allowlist: ["yield read", "stake", "unstake", "swap if needed"],
      spendCap: "Protocol-specific cap",
      expiry: "12h-7d selectable",
      revoke: "Visible revoke status",
    },
    txs: ["Pending BSC testnet yield route proof"],
  },
  {
    id: "health-factor-guardian",
    name: "Health Factor Guardian",
    category: "Health Factor Monitoring",
    summary:
      "Protects lending positions from liquidation by monitoring health factor and triggering alert or defensive deleverage inside limits.",
    protocols: ["Venus", "Aave V3-style lending"],
    performance: "Target report: alert latency, liquidation-risk reduction, execution cost",
    riskLevel: "Low",
    cost: "Subscription or per alert",
    chainIdentity: "ERC-8004 identity pending testnet registration",
    sessionPolicy: {
      allowlist: ["position read", "repay", "withdraw collateral", "alert"],
      spendCap: "Emergency repayment cap",
      expiry: "User selected monitoring window",
      revoke: "Revoke from dashboard anytime",
    },
    txs: ["Pending lending testnet proof"],
  },
];

export const categories: AgentCategory[] = [
  "Grid Trading",
  "LP Rebalancing",
  "Yield Optimization",
  "Health Factor Monitoring",
];
