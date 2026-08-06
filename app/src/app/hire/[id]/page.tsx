import Link from "next/link";
import { notFound } from "next/navigation";
import { agents, getAgent } from "@/lib/agents";

export function generateStaticParams() {
  return agents.map((agent) => ({ id: agent.id }));
}

export default async function HireAgent({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const agent = getAgent(id);

  if (!agent) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#080A0F] text-white">
      <section className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-10 sm:px-10 lg:px-12">
        <nav className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
          <Link className="text-sm text-zinc-400 transition hover:text-yellow-200" href={`/agents/${agent.id}`}>
            ← Back to profile
          </Link>
          <Link className="rounded-full border border-white/10 px-4 py-2 text-sm transition hover:bg-white/10" href="/">
            Marketplace
          </Link>
        </nav>

        <header>
          <p className="text-sm uppercase tracking-[0.35em] text-yellow-300">Safe hire flow</p>
          <h1 className="mt-3 text-5xl font-black tracking-tight sm:text-6xl">Hire {agent.name}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
            This is a judge-ready simulation of scoped agent authorization: user chooses permissions, spend cap,
            expiry, and can revoke the session. Real BSC testnet signing is the next integration milestone.
          </p>
        </header>

        <section className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">
            <h2 className="text-2xl font-bold">Agent summary</h2>
            <p className="mt-3 text-zinc-300">{agent.summary}</p>
            <dl className="mt-6 grid gap-4 text-sm">
              <div>
                <dt className="text-zinc-500">Risk</dt>
                <dd className="mt-1 text-zinc-200">{agent.riskLevel}</dd>
              </div>
              <div>
                <dt className="text-zinc-500">Cost</dt>
                <dd className="mt-1 text-zinc-200">{agent.cost}</dd>
              </div>
              <div>
                <dt className="text-zinc-500">Protocols</dt>
                <dd className="mt-1 text-zinc-200">{agent.protocols.join(" · ")}</dd>
              </div>
            </dl>
          </aside>

          <div className="rounded-3xl border border-yellow-300/20 bg-yellow-300/10 p-6">
            <h2 className="text-2xl font-bold text-yellow-100">Permission contract</h2>
            <div className="mt-6 grid gap-5">
              <label className="grid gap-2">
                <span className="text-sm text-yellow-100/70">Allowed actions</span>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-zinc-100">
                  {agent.sessionPolicy.allowlist.join(" · ")}
                </div>
              </label>
              <label className="grid gap-2">
                <span className="text-sm text-yellow-100/70">Spend cap</span>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-zinc-100">
                  {agent.sessionPolicy.spendCap}
                </div>
              </label>
              <label className="grid gap-2">
                <span className="text-sm text-yellow-100/70">Session expiry</span>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-zinc-100">
                  {agent.sessionPolicy.expiry}
                </div>
              </label>
              <label className="grid gap-2">
                <span className="text-sm text-yellow-100/70">Revoke rule</span>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-zinc-100">
                  {agent.sessionPolicy.revoke}
                </div>
              </label>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <button className="rounded-2xl bg-yellow-300 px-4 py-3 font-black text-black transition hover:bg-yellow-200">
                Simulate hire
              </button>
              <button className="rounded-2xl border border-red-300/40 px-4 py-3 font-black text-red-100 transition hover:bg-red-400/10">
                Revoke session
              </button>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-black/30 p-6">
          <h2 className="text-2xl font-bold">Execution proof queue</h2>
          <div className="mt-4 grid gap-3">
            {agent.txs.map((tx) => (
              <div key={tx} className="rounded-2xl bg-white/5 px-4 py-3 text-zinc-300">
                {tx}
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
