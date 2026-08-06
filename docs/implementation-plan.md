# BNB Smart Money Agent Marketplace Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Build a hackathon-ready BNB Chain Smart Money Agent marketplace that lets users discover, compare, and hire four classes of financial AI agents.

**Architecture:** Start with a fast Next.js demo backed by local mock data, then replace key fields with BSC testnet / 8004scan / Altana / PancakeSwap data. Prioritize a polished end-to-end demo over broad protocol coverage.

**Tech Stack:** Next.js, TypeScript, Tailwind, Node API routes, BNB Agent Studio, BSC testnet, Altana SDK, 8004scan API, PancakeSwap docs/API.

---

## Phase 0: Setup

### Task 1: Create app scaffold

**Objective:** Initialize a Next.js TypeScript app under `app/`.

**Files:**
- Create: `app/`

**Steps:**
1. Run `cd /Users/c777/bnb-smart-money-hackathon && npx create-next-app@latest app --ts --tailwind --eslint --app --src-dir --import-alias '@/*'`.
2. Run `cd app && npm run lint`.
3. Commit: `git add . && git commit -m "chore: scaffold marketplace app"`.

### Task 2: Define agent data model

**Objective:** Create a typed model for marketplace agents.

**Files:**
- Create: `app/src/lib/agents.ts`

**Model fields:**
- id, name, category, summary, protocols, riskLevel, cost, performance, chainIdentity, wallet, sessionPolicy, txs

**Verification:** TypeScript compile passes.

## Phase 1: Marketplace MVP

### Task 3: Build homepage with four categories

**Objective:** Show all four required categories equally.

**Files:**
- Modify: `app/src/app/page.tsx`
- Create: `app/src/components/AgentCard.tsx`

**Verification:** User can see Grid Trading, LP Rebalancing, Yield Optimization, Health Factor Monitoring.

### Task 4: Build agent detail page

**Objective:** Show capability, performance, risk, chain identity, session scope, and hire CTA.

**Files:**
- Create: `app/src/app/agents/[id]/page.tsx`

**Verification:** Every mock agent has a detail URL.

### Task 5: Add compare view

**Objective:** Let users compare agents by category, risk, cost, and performance.

**Files:**
- Create: `app/src/app/compare/page.tsx`

**Verification:** Comparison table includes all four categories.

## Phase 2: Permission / Safety UX

### Task 6: Add session policy panel

**Objective:** Show allowlist, spend cap, expiry, and revoke status.

**Files:**
- Create: `app/src/components/SessionPolicyPanel.tsx`

**Verification:** Agent detail page clearly shows user control and revoke button.

### Task 7: Add hire flow mock

**Objective:** Demonstrate end-to-end hire journey.

**Files:**
- Create: `app/src/app/hire/[id]/page.tsx`

**Verification:** User can select cap, expiry, confirm, and see generated session summary.

## Phase 3: Real Proof Integrations

### Task 8: Install and test BNB Agent Studio

**Objective:** Verify CLI works locally.

**Commands:**
- `python3 -m venv .venv`
- `source .venv/bin/activate`
- `pip install bnbagent-studio`
- `bag --help`

**Verification:** CLI help output saved to `reports/bnb-agent-studio-cli.txt`.

### Task 9: Create BSC testnet wallet and faucet checklist

**Objective:** Prepare testnet transactions.

**Files:**
- Create: `reports/testnet-wallet.md`

**Verification:** Wallet address and faucet tx recorded.

### Task 10: Integrate 8004scan data

**Objective:** Pull agent identity/reputation data where available.

**Files:**
- Create: `app/src/lib/scan8004.ts`

**Verification:** API response saved or fallback mock clearly labeled.

### Task 11: Integrate Altana session proof

**Objective:** Register session key with limits and show explorer proof.

**Files:**
- Create: `reports/altana-proof.md`

**Verification:** Explorer link / tx hash recorded.

### Task 12: Add PancakeSwap use case

**Objective:** Implement LP/trader benefit scenario.

**Files:**
- Create: `reports/pancakeswap-usecase.md`

**Verification:** Product shows one PancakeSwap-specific agent with measurable trader/LP benefit.

## Phase 4: Reports and Submission

### Task 13: Write Agent Advantage Report

**Objective:** Compare agent vs manual execution for 3 tasks.

**Files:**
- Create: `reports/agent-advantage-report.md`

**Required tasks:**
1. Trading/market opportunity scan
2. Yield/LP optimization
3. Risk/security/health-factor monitoring

### Task 14: Create pitch deck outline

**Objective:** Prepare slides for judges.

**Files:**
- Create: `docs/pitch-deck-outline.md`

### Task 15: Record demo script

**Objective:** Prepare a 2-3 minute video script.

**Files:**
- Create: `docs/demo-video-script.md`

### Task 16: Final verification

**Objective:** Verify all submission links and artifacts.

**Commands:**
- `npm run lint`
- `npm run build`
- Check GitHub, demo, video, reports, tx hashes.

**Verification:** Fill `docs/submission-checklist.md` completely.
