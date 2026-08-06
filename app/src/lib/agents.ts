export type AgentCategory =
  | "Grid Trading"
  | "LP Rebalancing"
  | "Yield Optimization"
  | "Health Factor Monitoring";

export type RiskLevel = "Low" | "Medium" | "High";

export type Metric = {
  label: string;
  value: string;
  detail: string;
};

export type AdvantageMetric = {
  label: string;
  manual: string;
  agent: string;
  advantage: string;
};

export type SmartMoneyAgent = {
  id: string;
  name: string;
  category: AgentCategory;
  tagline: string;
  summary: string;
  operator: string;
  protocols: string[];
  performance: string;
  riskLevel: RiskLevel;
  cost: string;
  chainIdentity: string;
  bestFor: string[];
  safeguards: string[];
  metrics: Metric[];
  advantage: AdvantageMetric[];
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
    tagline: "Cost-aware grid execution for volatile BNB pairs.",
    summary:
      "Places and manages automated BNB/USDT grid strategies with cost-aware rebalancing, drawdown limits, and post-trade reporting.",
    operator: "Chuqi Labs",
    protocols: ["PancakeSwap", "BSC Testnet"],
    performance: "Target report: win rate, net PnL after 0.3% cost, max drawdown",
    riskLevel: "High",
    cost: "x402/B402 per run + optional performance fee",
    chainIdentity: "ERC-8004 identity pending testnet registration",
    bestFor: ["BNB/USDT ranges", "sideways volatility", "cost-aware execution"],
    safeguards: ["max drawdown stop", "per-session spend cap", "execution allowlist", "manual revoke"],
    metrics: [
      { label: "Target win rate", value: "55%+", detail: "net of fee/slippage model" },
      { label: "Max drawdown", value: "8% cap", detail: "stop grid when breached" },
      { label: "Decision time", value: "<30s", detail: "quote, range, and risk check" },
    ],
    advantage: [
      { label: "Setup time", manual: "12-20 min", agent: "<1 min", advantage: "range + cost rules prefilled" },
      { label: "Monitoring", manual: "manual refresh", agent: "24/7 loop", advantage: "reacts to range breaks" },
      { label: "Risk control", manual: "easy to forget", agent: "enforced", advantage: "hard spend and loss caps" },
    ],
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
    tagline: "Protect PancakeSwap LPs from drifting out of range.",
    summary:
      "Monitors LP ranges and recommends or executes safer PancakeSwap liquidity repositioning when price moves beyond user-defined bands.",
    operator: "Chuqi Labs",
    protocols: ["PancakeSwap"],
    performance: "Target report: fee APR, impermanent-loss risk, rebalance cost",
    riskLevel: "Medium",
    cost: "Fixed hire fee + per rebalance call",
    chainIdentity: "ERC-8004 identity pending testnet registration",
    bestFor: ["active LPs", "range alerts", "rebalance discipline"],
    safeguards: ["rebalance threshold", "max movement cap", "IL warning", "cooldown between calls"],
    metrics: [
      { label: "APR lift target", value: "+3-8%", detail: "when range utilization improves" },
      { label: "IL warning", value: "before move", detail: "show risk before execution" },
      { label: "Cooldown", value: "6h", detail: "avoid over-trading liquidity" },
    ],
    advantage: [
      { label: "Range check", manual: "multiple screens", agent: "single card", advantage: "price + fee state in one view" },
      { label: "Rebalance timing", manual: "late/manual", agent: "threshold based", advantage: "acts only when rule triggers" },
      { label: "Cost visibility", manual: "estimated after", agent: "before hire", advantage: "fee and gas budget shown" },
    ],
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
    tagline: "Route capital only when net APR beats risk and cost.",
    summary:
      "Compares yield opportunities across BNB Chain protocols and routes capital only when net APR beats cost, liquidity, and risk thresholds.",
    operator: "Chuqi Labs",
    protocols: ["Lista", "Venus", "PancakeSwap"],
    performance: "Target report: APR delta, gas/cost impact, risk-adjusted net yield",
    riskLevel: "Medium",
    cost: "Per scan + optional execution call",
    chainIdentity: "ERC-8004 identity pending 8004scan enrichment",
    bestFor: ["stablecoin yield", "APR comparison", "capital rotation"],
    safeguards: ["minimum APR delta", "protocol allowlist", "liquidity floor", "gas-aware routing"],
    metrics: [
      { label: "APR delta", value: "+2.4%", detail: "demo target over current route" },
      { label: "Risk score", value: "B", detail: "protocol + liquidity weighted" },
      { label: "Scan cost", value: "<$0.01", detail: "read-only until user hires" },
    ],
    advantage: [
      { label: "Protocol scan", manual: "20+ min", agent: "45 sec", advantage: "standardized APR + risk table" },
      { label: "Net yield math", manual: "spreadsheet", agent: "automatic", advantage: "subtracts cost and slippage" },
      { label: "Execution", manual: "multi-step", agent: "scoped", advantage: "only allowlisted calls" },
    ],
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
    tagline: "Liquidation protection for lending positions.",
    summary:
      "Protects lending positions from liquidation by monitoring health factor and triggering alerts or defensive deleverage inside user limits.",
    operator: "Chuqi Labs",
    protocols: ["Venus", "Aave V3-style lending"],
    performance: "Target report: alert latency, liquidation-risk reduction, execution cost",
    riskLevel: "Low",
    cost: "Subscription or per alert",
    chainIdentity: "ERC-8004 identity pending testnet registration",
    bestFor: ["lending users", "liquidation alerts", "defensive repay"],
    safeguards: ["read-only default", "repay cap", "health factor threshold", "alert before action"],
    metrics: [
      { label: "Alert latency", value: "<20s", detail: "target monitoring interval" },
      { label: "HF threshold", value: "1.35", detail: "user configurable" },
      { label: "Default mode", value: "read-only", detail: "execution requires explicit hire" },
    ],
    advantage: [
      { label: "Monitoring", manual: "missed overnight", agent: "24/7", advantage: "alerts before danger zone" },
      { label: "Decision", manual: "panic repay", agent: "rules", advantage: "threshold-based defensive action" },
      { label: "Permission", manual: "broad wallet", agent: "scoped", advantage: "repay-only cap by default" },
    ],
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

export function getAgent(id: string) {
  return agents.find((agent) => agent.id === id);
}
