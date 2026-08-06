# BNB Smart Money Agent Marketplace

Hackathon: [The Smart Money Era: Build the Era](https://www.bnbchain.org/en/hackathons/smart-money-era?tab=overview)

Live demo: https://bnb-smart-money-agent-marketplace.vercel.app

GitHub repo: https://github.com/7777chu/bnb-smart-money-agent-marketplace

BSC testnet proof wallet: `0xfec7107aced49665c420f71c64023dddd07b7777`

Explorer: https://testnet.bscscan.com/address/0xfec7107aced49665c420f71c64023dddd07b7777

## One-liner

A BNB Chain AI Agent marketplace for discovering, comparing, and safely hiring Smart Money agents across grid trading, LP rebalancing, yield optimization, and lending health-factor protection.

## Core thesis

BNB Chain does not just need more agents; it needs a trusted front door for choosing them. This marketplace turns agents into comparable financial products with visible category, capability, on-chain identity, permission scope, performance, risk, cost, and hire/revoke flow.

## What is live

- Marketplace homepage with four Smart Money agent categories
- Agent profile pages with risk, protocols, cost, metrics, safety controls, and session policy
- Safe hire flow pages with allowlist, spend cap, expiry, and revoke model
- My Hired Agents dashboard with session health, cap usage, expiry, recent actions, and revoke entry
- Agent comparison page for marketplace discovery
- Agent Advantage Report for measuring AI-agent value vs manual DeFi work
- Proof Center with live links, bounty fit, and next on-chain proof roadmap

## Live routes

- Homepage: https://bnb-smart-money-agent-marketplace.vercel.app
- Compare: https://bnb-smart-money-agent-marketplace.vercel.app/compare
- Dashboard: https://bnb-smart-money-agent-marketplace.vercel.app/dashboard
- Advantage Report: https://bnb-smart-money-agent-marketplace.vercel.app/report
- Proof Center: https://bnb-smart-money-agent-marketplace.vercel.app/proof
- Example profile: https://bnb-smart-money-agent-marketplace.vercel.app/agents/grid-alpha
- Example hire flow: https://bnb-smart-money-agent-marketplace.vercel.app/hire/grid-alpha

## Tracks targeted

- Main Track: BNB Agent Studio Marketplace
- Altana: agent wallets, scoped sessions, spend caps, expiry, revoke, on-chain tx proof
- TermiX: Agent Advantage Report with measured time/cost/quality advantage
- PancakeSwap: trader/LP benefit via LP rebalancing, yield discovery, and safe swap execution

## MVP categories

1. Grid Trading Agents
2. LP Rebalancing Agents
3. Yield Optimization Agents
4. Health Factor Monitoring Agents

## Tech stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Static judge-friendly Vercel deployment

## Local development

```bash
cd app
npm install
npm run dev
```

## Verification

```bash
cd app
npm run lint
npm run build
```

Latest local verification passed with the MVP routes prerendered successfully.

## Next proof sprint

The current MVP is honest about what is live and what is next. The next sprint adds concrete testnet proof:

1. Use the public BSC testnet proof wallet listed above.
2. Register or mock an ERC-8004-style agent identity.
3. Attach testnet tx hashes for session creation, simulated hire, revoke, and PancakeSwap-style proof.
4. Run BNB Agent Studio CLI and commit command output/screenshots as proof artifacts.
