import Link from "next/link";
import { agents } from "@/lib/agents";

const hiredSessions = [
  {
    agentId: "grid-alpha",
    status: "Active simulation",
    capUsed: "18%",
    health: "Watching BNB/USDT range",
    nextAction: "Requote grid if volatility expands",
    lastAction: "Cost model refreshed 4 min ago",
  },
  {
    agentId: "lp-range-keeper",
    status: "Guarded",
    capUsed: "0%",
    health: "LP still inside preferred band",
    nextAction: "Alert if price exits range",
    lastAction: "Range checked 9 min ago",
  },
  {
    agentId: "health-factor-guardian",
    status: "Read-only monitor",
    capUsed: "0%",
    health: "Health factor above threshold",
    nextAction: "Notify before defensive repay",
    lastAction: "Risk scan completed 2 min ago",
  },
];

const recentActions = [
  ["Grid Alpha Agent", "Updated BNB/USDT volatility band", "Read-only proof"],
  ["LP Range Keeper", "Checked PancakeSwap LP fee/range state", "No rebalance"],
  ["Health Factor Guardian", "Scanned lending health factor", "Safe"],
  ["Yield Router Agent", "Compared net APR after cost", "Not hired yet"],
];

export default function DashboardPage() {
  const sessions = hiredSessions.map((session) => {
    const agent = agents.find((item) => item.id === session.agentId);

    if (!agent) {
      throw new Error(`Missing agent for dashboard session: ${session.agentId}`);
    }

    return { ...session, agent };
  });

  return (
    <main className="min-h-screen bg-[#080A0F] text-white">
      <section className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 sm:px-10 lg:px-12">
        <nav className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
          <Link className="text-sm text-zinc-400 transition hover:text-yellow-200" href="/">
            ← Marketplace
          </Link>
          <div className="flex flex-wrap gap-3">
            <Link className="rounded-full border border-white/10 px-4 py-2 text-sm transition hover:bg-white/10" href="/compare">
              Compare
            </Link>
            <Link className="rounded-full border border-white/10 px-4 py-2 text-sm transition hover:bg-white/10" href="/proof">
              Proof
            </Link>
          </div>
        </nav>

        <header className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-yellow-300">User control center</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight sm:text-7xl">My hired Smart Money agents.</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
              A product-complete marketplace needs more than discovery. This dashboard shows what a user controls after hiring:
              active sessions, cap usage, expiry, health, recent actions, and one-click revoke.
            </p>
          </div>
          <div className="rounded-3xl border border-yellow-300/20 bg-yellow-300/10 p-6">
            <p className="text-sm text-yellow-100/70">Session safety</p>
            <p className="mt-2 text-5xl font-black text-yellow-200">3</p>
            <p className="mt-2 text-zinc-200">Demo sessions with visible permission scope and no hidden wallet authority.</p>
          </div>
        </header>

        <section className="grid gap-5 xl:grid-cols-3">
          {sessions.map(({ agent, status, capUsed, health, nextAction, lastAction }) => (
            <article key={agent.id} className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-sm text-yellow-200">{agent.category}</p>
                  <h2 className="mt-1 text-2xl font-bold">{agent.name}</h2>
                </div>
                <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
                  {status}
                </span>
              </div>

              <dl className="mt-6 grid gap-4 text-sm text-zinc-300">
                <div className="rounded-2xl bg-black/30 p-4">
                  <dt className="text-zinc-500">Cap used</dt>
                  <dd className="mt-1 text-2xl font-black text-yellow-100">{capUsed}</dd>
                </div>
                <div>
                  <dt className="text-zinc-500">Current health</dt>
                  <dd>{health}</dd>
                </div>
                <div>
                  <dt className="text-zinc-500">Next action</dt>
                  <dd>{nextAction}</dd>
                </div>
                <div>
                  <dt className="text-zinc-500">Last action</dt>
                  <dd>{lastAction}</dd>
                </div>
                <div>
                  <dt className="text-zinc-500">Permission scope</dt>
                  <dd>{agent.sessionPolicy.allowlist.join(" · ")}</dd>
                </div>
                <div>
                  <dt className="text-zinc-500">Expiry / revoke</dt>
                  <dd>
                    {agent.sessionPolicy.expiry} · {agent.sessionPolicy.revoke}
                  </dd>
                </div>
              </dl>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <Link className="rounded-2xl border border-white/15 px-4 py-3 text-center font-bold transition hover:bg-white/10" href={`/agents/${agent.id}`}>
                  Profile
                </Link>
                <Link className="rounded-2xl border border-red-400/40 px-4 py-3 text-center font-bold text-red-100 transition hover:bg-red-400 hover:text-black" href={`/hire/${agent.id}`}>
                  Revoke / edit
                </Link>
              </div>
            </article>
          ))}
        </section>

        <section className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">
            <h2 className="text-3xl font-bold">Why this matters to judges</h2>
            <p className="mt-4 leading-8 text-zinc-300">
              The dashboard closes the loop from marketplace discovery to ongoing user control. It makes agent autonomy legible:
              what the agent can do, how much it has used, when it expires, and where the user can revoke.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-black/30 p-6">
            <h2 className="text-3xl font-bold">Recent action log</h2>
            <div className="mt-5 grid gap-3">
              {recentActions.map(([agent, action, result]) => (
                <div key={`${agent}-${action}`} className="grid gap-2 rounded-2xl border border-white/10 bg-white/[0.035] p-4 md:grid-cols-[0.9fr_1.2fr_0.7fr]">
                  <p className="font-semibold text-yellow-100">{agent}</p>
                  <p className="text-zinc-300">{action}</p>
                  <p className="text-zinc-400">{result}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
