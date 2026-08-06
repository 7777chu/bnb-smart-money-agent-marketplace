import Link from "next/link";
import { agents, categories } from "@/lib/agents";

const riskColor = {
  Low: "border-emerald-400/40 bg-emerald-400/10 text-emerald-200",
  Medium: "border-yellow-400/40 bg-yellow-400/10 text-yellow-100",
  High: "border-red-400/40 bg-red-400/10 text-red-100",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080A0F] text-white">
      <section className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-10 sm:px-10 lg:px-12">
        <nav className="flex items-center justify-between border-b border-white/10 pb-5">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-yellow-300">BNB Chain Hackathon</p>
            <h1 className="mt-2 text-2xl font-semibold">Smart Money Agent Marketplace</h1>
          </div>
          <div className="flex items-center gap-3">
            <Link className="hidden rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-200 transition hover:bg-white/10 sm:inline-flex" href="/compare">
              Compare
            </Link>
            <Link className="hidden rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-200 transition hover:bg-white/10 sm:inline-flex" href="/dashboard">
              Dashboard
            </Link>
            <Link className="hidden rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-200 transition hover:bg-white/10 sm:inline-flex" href="/proof">
              Proof
            </Link>
            <a
              className="rounded-full border border-yellow-300/50 px-4 py-2 text-sm text-yellow-100 transition hover:bg-yellow-300 hover:text-black"
              href="https://www.bnbchain.org/en/hackathons/smart-money-era?tab=overview"
              target="_blank"
            >
              Build the Era
            </a>
          </div>
        </nav>

        <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
              Discover · Compare · Hire · Revoke
            </p>
            <h2 className="max-w-4xl text-5xl font-black leading-tight tracking-tight sm:text-7xl">
              The front door for financial AI agents on BNB Chain.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              Users should not hire black boxes. This marketplace ranks Smart Money agents by category,
              on-chain identity, permission scope, cost, risk, and real execution history.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {categories.map((category) => (
                <span key={category} className="rounded-full bg-yellow-300 px-4 py-2 text-sm font-semibold text-black">
                  {category}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="rounded-2xl bg-yellow-300 px-5 py-3 font-bold text-black transition hover:bg-yellow-200" href="/compare">
                Compare agents
              </Link>
              <Link className="rounded-2xl border border-white/15 px-5 py-3 font-bold text-white transition hover:bg-white/10" href="/report">
                Advantage report
              </Link>
              <Link className="rounded-2xl border border-white/15 px-5 py-3 font-bold text-white transition hover:bg-white/10" href="/dashboard">
                My agents dashboard
              </Link>
              <Link className="rounded-2xl border border-yellow-300/40 px-5 py-3 font-bold text-yellow-100 transition hover:bg-yellow-300 hover:text-black" href="/proof">
                Proof center
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-yellow-500/10">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">Judge-ready proof</p>
            <div className="mt-6 grid gap-4">
              {[
                ["Main Track", "Four equally deep agent categories"],
                ["Altana", "Scoped sessions: allowlist, cap, expiry, revoke"],
                ["TermiX", "Agent Advantage Report: time, cost, quality"],
                ["PancakeSwap", "LP/trader benefit with risk controls"],
              ].map(([title, body]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <div className="font-semibold text-yellow-200">{title}</div>
                  <div className="mt-1 text-sm text-zinc-300">{body}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">Marketplace</p>
              <h3 className="mt-2 text-3xl font-bold">Featured Smart Money Agents</h3>
            </div>
            <p className="max-w-md text-right text-sm text-zinc-400">
              MVP uses demo data first. Testnet identities, 8004scan data, and Altana proof are wired next.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {agents.map((agent) => (
              <article key={agent.id} className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-sm text-yellow-200">{agent.category}</p>
                    <h4 className="mt-1 text-2xl font-bold">{agent.name}</h4>
                  </div>
                  <span className={`rounded-full border px-3 py-1 text-xs ${riskColor[agent.riskLevel]}`}>
                    {agent.riskLevel} risk
                  </span>
                </div>
                <p className="mt-4 text-zinc-300">{agent.summary}</p>
                <p className="mt-2 text-sm text-yellow-100/80">{agent.tagline}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {agent.protocols.map((protocol) => (
                    <span key={protocol} className="rounded-full bg-white/10 px-3 py-1 text-xs text-zinc-200">
                      {protocol}
                    </span>
                  ))}
                </div>
                <dl className="mt-6 grid gap-3 text-sm text-zinc-300">
                  <div>
                    <dt className="text-zinc-500">Performance</dt>
                    <dd>{agent.performance}</dd>
                  </div>
                  <div>
                    <dt className="text-zinc-500">Session scope</dt>
                    <dd>{agent.sessionPolicy.allowlist.join(" · ")}</dd>
                  </div>
                  <div>
                    <dt className="text-zinc-500">Spend cap / expiry</dt>
                    <dd>
                      {agent.sessionPolicy.spendCap} · {agent.sessionPolicy.expiry}
                    </dd>
                  </div>
                </dl>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <Link className="rounded-2xl border border-white/15 px-4 py-3 text-center font-bold text-white transition hover:bg-white/10" href={`/agents/${agent.id}`}>
                    View profile
                  </Link>
                  <Link className="rounded-2xl bg-yellow-300 px-4 py-3 text-center font-bold text-black transition hover:bg-yellow-200" href={`/hire/${agent.id}`}>
                    Hire safely
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
