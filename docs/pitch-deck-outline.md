# Pitch Deck Outline — Judge Version

## Slide 1 — Title

**BNB Smart Money Agent Marketplace**

Discover, compare, hire, monitor, and revoke BNB Chain financial AI agents safely.

Live demo: https://bnb-smart-money-agent-marketplace.vercel.app

## Slide 2 — Problem

Financial AI agents are becoming useful, but the user experience is still unsafe and fragmented.

Users cannot easily answer:

- Which agent should I use?
- What does it actually do?
- What protocols and assets can it touch?
- How much permission am I giving it?
- Can I revoke it?
- Did the agent outperform manual DeFi work?

## Slide 3 — Solution

A marketplace layer that turns agents into comparable financial products.

Core UX:

1. Discover by Smart Money category.
2. Compare risk, protocol coverage, cost, performance, and permission scope.
3. Inspect the agent profile before hiring.
4. Hire with spend cap, expiry, allowlist, and revoke controls.
5. Monitor active sessions from a user dashboard.
6. Verify proof and bounty fit from a Proof Center.

## Slide 4 — Product Flow

```text
Marketplace
→ Compare
→ Agent Profile
→ Hire safely
→ My Agents Dashboard
→ Revoke / Edit
→ Advantage Report
→ Proof Center
```

The MVP is designed to feel like a real product loop, not a static hackathon landing page.

## Slide 5 — Four Smart Money Agent Categories

1. **Grid Trading** — cost-aware grid strategy for BNB pairs.
2. **LP Rebalancing** — PancakeSwap LP range monitoring and rebalance discipline.
3. **Yield Optimization** — risk-adjusted yield routing across BNB Chain protocols.
4. **Health Factor Monitoring** — lending liquidation protection and defensive action.

Each category has comparable profile data, safety controls, metrics, cost model, and session policy.

## Slide 6 — Safety / Permission Layer

The marketplace does not assume unlimited wallet control.

Safety primitives:

- Action allowlist
- Spend cap
- Expiry
- Revoke button
- Read-only default for lower-risk agents
- Testnet/mainnet separation
- Visible recent action log
- User dashboard for ongoing session control

## Slide 7 — Agent Advantage Report

The TermiX-ready report measures whether agents beat manual work.

Measured dimensions:

- Time saved
- Monitoring quality
- Risk enforcement
- Cost transparency
- Execution readiness

Example: manual grid setup takes 12-20 minutes; the agent flow gets the user to a scoped strategy preview in under 1 minute.

## Slide 8 — Bounty / Partner Fit

- **Main Track:** marketplace for BNB Chain Smart Money agents.
- **TermiX:** Agent Advantage Report with measurable agent-vs-manual comparison.
- **PancakeSwap:** LP rebalancing, grid trading, and yield use cases.
- **Altana / Session Keys:** scoped permission model with allowlist, spend cap, expiry, and revoke.
- **BNB Agent Studio:** agent profile and skill publishing path.

## Slide 9 — What Is Live

Live demo routes:

- `/` Marketplace homepage
- `/compare` Agent comparison
- `/agents/grid-alpha` Agent profile
- `/hire/grid-alpha` Safe hire flow
- `/dashboard` My hired agents dashboard
- `/report` Agent Advantage Report
- `/proof` Proof Center

The app is deployed on Vercel and backed by a public GitHub repo.

## Slide 10 — Roadmap

Next proof sprint:

1. Add BSC testnet wallet address used only for proof.
2. Register or mock ERC-8004-style agent identity.
3. Attach tx hashes for session creation, simulated hire, revoke, and PancakeSwap-style proof.
4. Run BNB Agent Studio CLI and commit proof artifacts.
5. Convert demo data into live read-only protocol data.

## Slide 11 — Business Model

Potential monetization:

- Agent listing fee
- Hire fee
- x402/B402 per-call payment
- Performance fee for financial agents
- Featured marketplace placement
- Pro analytics for agent operators

## Slide 12 — Closing

BNB Chain does not just need more agents. It needs the trusted front door for financial agents.

**BNB Smart Money Agent Marketplace** makes agents discoverable, comparable, hireable, monitorable, and revocable.
