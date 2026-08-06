import Link from "next/link";
import { notFound } from "next/navigation";
import { agents, getAgent } from "@/lib/agents";

const riskColor = {
  Low: "border-emerald-400/40 bg-emerald-400/10 text-emerald-200",
  Medium: "border-yellow-400/40 bg-yellow-400/10 text-yellow-100",
  High: "border-red-400/40 bg-red-400/10 text-red-100",
};

export function generateStaticParams() {
  return agents.map((agent) => ({ id: agent.id }));
}

export default async function AgentProfile({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const agent = getAgent(id);

  if (!agent) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#080A0F] text-white">
      <section className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 sm:px-10 lg:px-12">
        <nav className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
          <Link className="text-sm text-zinc-400 transition hover:text-yellow-200" href="/">
            ← Marketplace
          </Link>
          <div className="flex gap-3">
            <Link className="rounded-full border border-white/10 px-4 py-2 text-sm transition hover:bg-white/10" href="/compare">
              Compare
            </Link>
            <Link className="rounded-full bg-yellow-300 px-4 py-2 text-sm font-bold text-black transition hover:bg-yellow-200" href={`/hire/${agent.id}`}>
              Hire safely
            </Link>
          </div>
        </nav>

        <header className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-yellow-300">{agent.category}</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight sm:text-7xl">{agent.name}</h1>
            <p className="mt-5 max-w-3xl text-xl leading-8 text-zinc-300">{agent.summary}</p>
            <p className="mt-3 text-yellow-100/80">{agent.tagline}</p>
          </div>
          <aside className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <div className="flex items-center justify-between gap-3">
              <span className={`rounded-full border px-3 py-1 text-xs ${riskColor[agent.riskLevel]}`}>
                {agent.riskLevel} risk
              </span>
              <span className="text-sm text-zinc-400">Operator: {agent.operator}</span>
            </div>
            <dl className="mt-6 grid gap-4 text-sm">
              <div>
                <dt className="text-zinc-500">Cost</dt>
                <dd className="mt-1 text-zinc-200">{agent.cost}</dd>
              </div>
              <div>
                <dt className="text-zinc-500">On-chain identity</dt>
                <dd className="mt-1 text-zinc-200">{agent.chainIdentity}</dd>
              </div>
              <div>
                <dt className="text-zinc-500">Protocols</dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {agent.protocols.map((protocol) => (
                    <span key={protocol} className="rounded-full bg-white/10 px-3 py-1 text-xs text-zinc-200">
                      {protocol}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </aside>
        </header>

        <section className="grid gap-5 md:grid-cols-3">
          {agent.metrics.map((metric) => (
            <div key={metric.label} className="rounded-3xl border border-white/10 bg-black/30 p-5">
              <p className="text-sm text-zinc-500">{metric.label}</p>
              <p className="mt-2 text-3xl font-black text-yellow-200">{metric.value}</p>
              <p className="mt-2 text-sm text-zinc-300">{metric.detail}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">
            <h2 className="text-2xl font-bold">Best for</h2>
            <ul className="mt-4 grid gap-3 text-zinc-300">
              {agent.bestFor.map((item) => (
                <li key={item} className="rounded-2xl bg-white/5 px-4 py-3">✓ {item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">
            <h2 className="text-2xl font-bold">Safety controls</h2>
            <ul className="mt-4 grid gap-3 text-zinc-300">
              {agent.safeguards.map((item) => (
                <li key={item} className="rounded-2xl bg-white/5 px-4 py-3">🔒 {item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="rounded-3xl border border-yellow-300/20 bg-yellow-300/10 p-6">
          <h2 className="text-2xl font-bold text-yellow-100">Session policy preview</h2>
          <dl className="mt-5 grid gap-4 md:grid-cols-2">
            <div>
              <dt className="text-sm text-yellow-100/60">Allowlist</dt>
              <dd className="mt-1 text-zinc-100">{agent.sessionPolicy.allowlist.join(" · ")}</dd>
            </div>
            <div>
              <dt className="text-sm text-yellow-100/60">Spend cap</dt>
              <dd className="mt-1 text-zinc-100">{agent.sessionPolicy.spendCap}</dd>
            </div>
            <div>
              <dt className="text-sm text-yellow-100/60">Expiry</dt>
              <dd className="mt-1 text-zinc-100">{agent.sessionPolicy.expiry}</dd>
            </div>
            <div>
              <dt className="text-sm text-yellow-100/60">Revoke</dt>
              <dd className="mt-1 text-zinc-100">{agent.sessionPolicy.revoke}</dd>
            </div>
          </dl>
        </section>
      </section>
    </main>
  );
}
