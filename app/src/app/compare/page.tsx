import Link from "next/link";
import { agents } from "@/lib/agents";

const riskRank = { Low: 1, Medium: 2, High: 3 };

export default function ComparePage() {
  const sortedAgents = [...agents].sort((a, b) => riskRank[a.riskLevel] - riskRank[b.riskLevel]);

  return (
    <main className="min-h-screen bg-[#080A0F] text-white">
      <section className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 sm:px-10 lg:px-12">
        <nav className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
          <Link className="text-sm text-zinc-400 transition hover:text-yellow-200" href="/">
            ← Marketplace
          </Link>
          <Link className="rounded-full bg-yellow-300 px-4 py-2 text-sm font-bold text-black transition hover:bg-yellow-200" href="/report">
            Advantage report
          </Link>
        </nav>

        <header>
          <p className="text-sm uppercase tracking-[0.35em] text-yellow-300">Agent comparison</p>
          <h1 className="mt-3 text-5xl font-black tracking-tight sm:text-7xl">Compare before you hire.</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
            The marketplace makes each agent legible: category, risk, protocol coverage, cost model,
            permissions, and expected performance. This is the core UX for BNB Chain agent discovery.
          </p>
        </header>

        <section className="grid gap-5 lg:grid-cols-4">
          {sortedAgents.map((agent) => (
            <article key={agent.id} className="rounded-3xl border border-white/10 bg-white/[0.035] p-5">
              <p className="text-sm text-yellow-200">{agent.category}</p>
              <h2 className="mt-2 text-2xl font-bold">{agent.name}</h2>
              <p className="mt-3 min-h-20 text-sm text-zinc-300">{agent.tagline}</p>
              <dl className="mt-5 grid gap-3 text-sm">
                <div>
                  <dt className="text-zinc-500">Risk</dt>
                  <dd className="mt-1 text-zinc-100">{agent.riskLevel}</dd>
                </div>
                <div>
                  <dt className="text-zinc-500">Cost</dt>
                  <dd className="mt-1 text-zinc-100">{agent.cost}</dd>
                </div>
                <div>
                  <dt className="text-zinc-500">Protocols</dt>
                  <dd className="mt-1 text-zinc-100">{agent.protocols.join(" · ")}</dd>
                </div>
                <div>
                  <dt className="text-zinc-500">Spend cap</dt>
                  <dd className="mt-1 text-zinc-100">{agent.sessionPolicy.spendCap}</dd>
                </div>
              </dl>
              <div className="mt-5 grid gap-2">
                <Link className="rounded-2xl border border-white/15 px-4 py-3 text-center font-bold transition hover:bg-white/10" href={`/agents/${agent.id}`}>
                  Profile
                </Link>
                <Link className="rounded-2xl bg-yellow-300 px-4 py-3 text-center font-bold text-black transition hover:bg-yellow-200" href={`/hire/${agent.id}`}>
                  Hire flow
                </Link>
              </div>
            </article>
          ))}
        </section>

        <section className="overflow-hidden rounded-3xl border border-white/10 bg-black/30">
          <div className="grid grid-cols-5 gap-px bg-white/10 text-sm">
            {[
              "Agent",
              "Manual pain",
              "Agent advantage",
              "Permission model",
              "Bounty fit",
            ].map((heading) => (
              <div key={heading} className="bg-[#11141d] p-4 font-bold text-yellow-100">
                {heading}
              </div>
            ))}
            {agents.map((agent) => (
              <div key={agent.id} className="contents">
                <div className="bg-[#0c0f16] p-4 font-semibold">{agent.name}</div>
                <div className="bg-[#0c0f16] p-4 text-zinc-300">{agent.advantage[0].manual}</div>
                <div className="bg-[#0c0f16] p-4 text-zinc-300">{agent.advantage[0].agent}</div>
                <div className="bg-[#0c0f16] p-4 text-zinc-300">{agent.sessionPolicy.expiry} · revoke anytime</div>
                <div className="bg-[#0c0f16] p-4 text-zinc-300">{agent.protocols.includes("PancakeSwap") ? "PancakeSwap" : "Main Track"}</div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
