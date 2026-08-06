import Link from "next/link";
import { agents } from "@/lib/agents";

const proofMilestones = [
  ["BNB Agent Studio", "Register agent skills and publish marketplace-compatible profiles."],
  ["8004scan / identity", "Attach agent identity and execution history to each card."],
  ["Altana sessions", "Show scoped session keys: allowlist, spend cap, expiry, revoke."],
  ["PancakeSwap", "Prove LP rebalance and grid trading use cases with testnet tx links."],
];

export default function ReportPage() {
  return (
    <main className="min-h-screen bg-[#080A0F] text-white">
      <section className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 sm:px-10 lg:px-12">
        <nav className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
          <Link className="text-sm text-zinc-400 transition hover:text-yellow-200" href="/">
            ← Marketplace
          </Link>
          <Link className="rounded-full border border-white/10 px-4 py-2 text-sm transition hover:bg-white/10" href="/compare">
            Compare agents
          </Link>
          <Link className="rounded-full border border-yellow-300/40 px-4 py-2 text-sm text-yellow-100 transition hover:bg-yellow-300 hover:text-black" href="/proof">
            Proof center
          </Link>
        </nav>

        <header className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-yellow-300">TermiX-ready report</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight sm:text-7xl">Agent Advantage Report</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
              A standardized report for measuring AI-agent value against manual DeFi operations: time saved,
              cost transparency, execution quality, and safety controls.
            </p>
          </div>
          <div className="rounded-3xl border border-yellow-300/20 bg-yellow-300/10 p-6">
            <p className="text-sm text-yellow-100/70">Marketplace scorecard</p>
            <p className="mt-2 text-5xl font-black text-yellow-200">4/4</p>
            <p className="mt-2 text-zinc-200">Core Smart Money categories represented with comparable policy and risk fields.</p>
          </div>
        </header>

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {agents.map((agent) => (
            <article key={agent.id} className="rounded-3xl border border-white/10 bg-white/[0.035] p-5">
              <p className="text-sm text-yellow-200">{agent.category}</p>
              <h2 className="mt-2 text-2xl font-bold">{agent.name}</h2>
              <div className="mt-5 grid gap-3">
                {agent.advantage.map((metric) => (
                  <div key={metric.label} className="rounded-2xl bg-black/30 p-4">
                    <p className="font-semibold text-zinc-100">{metric.label}</p>
                    <div className="mt-3 grid gap-2 text-sm text-zinc-300">
                      <p>Manual: {metric.manual}</p>
                      <p>Agent: {metric.agent}</p>
                      <p className="text-yellow-100">Why it wins: {metric.advantage}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section className="rounded-3xl border border-white/10 bg-black/30 p-6">
          <h2 className="text-3xl font-bold">Proof roadmap</h2>
          <p className="mt-3 max-w-3xl text-zinc-300">
            The current MVP is deployed and judge-accessible. The next implementation sprint adds concrete chain proof
            and protocol integrations without changing the product story.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {proofMilestones.map(([title, body], index) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                <p className="text-sm text-zinc-500">Step {index + 1}</p>
                <h3 className="mt-1 text-xl font-bold text-yellow-100">{title}</h3>
                <p className="mt-2 text-zinc-300">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">
          <h2 className="text-3xl font-bold">Submission narrative</h2>
          <p className="mt-4 leading-8 text-zinc-300">
            BNB Chain does not just need more agents; it needs a trusted front door for choosing them. This product
            makes financial agents comparable and hireable, while keeping user safety visible through permission scope,
            caps, expiry, revoke status, and execution history.
          </p>
        </section>
      </section>
    </main>
  );
}
