import Link from "next/link";

const liveLinks = [
  ["Live demo", "https://bnb-smart-money-agent-marketplace.vercel.app"],
  ["GitHub repo", "https://github.com/7777chu/bnb-smart-money-agent-marketplace"],
  ["Compare page", "https://bnb-smart-money-agent-marketplace.vercel.app/compare"],
  ["Advantage report", "https://bnb-smart-money-agent-marketplace.vercel.app/report"],
];

const testnetWallet = "0x617f44e176fd0163614761c4a2bb901650aeab66";
const testnetWalletExplorer = `https://testnet.bscscan.com/address/${testnetWallet}`;

const proofTracks = [
  {
    title: "Main Track — BNB Agent Marketplace",
    status: "MVP shipped",
    detail:
      "Marketplace UX is live with four Smart Money categories, comparable agent profiles, risk levels, cost models, permission scope, and hire flows.",
  },
  {
    title: "TermiX — Agent Advantage Report",
    status: "Live report",
    detail:
      "The /report page measures agent value against manual DeFi work across time saved, cost transparency, execution quality, and safety controls.",
  },
  {
    title: "PancakeSwap — Trader and LP use cases",
    status: "Product route live",
    detail:
      "Grid Alpha Agent and LP Range Keeper show PancakeSwap-focused grid trading, LP range monitoring, rebalance logic, and cost/risk limits.",
  },
  {
    title: "Altana / Session Keys",
    status: "Permission model live",
    detail:
      "Hire pages expose allowlist, spend cap, expiry, and revoke controls. Next proof step is wiring these fields to real testnet session authorization.",
  },
];

const nextProofItems = [
  ["BSC testnet wallet", `${testnetWallet} — public address added for proof artifacts.`],
  ["Agent identity", "Register or mock ERC-8004-style identity and link it from each profile."],
  ["Testnet tx hashes", "Attach tx hashes for session creation, simulated hire, revoke, and PancakeSwap-style proof."],
  ["BNB Agent Studio", "Run BNB Agent Studio CLI and commit command output/screenshots as proof artifacts."],
];

export default function ProofPage() {
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
            <Link className="rounded-full border border-white/10 px-4 py-2 text-sm transition hover:bg-white/10" href="/report">
              Report
            </Link>
          </div>
        </nav>

        <header className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-yellow-300">Submission proof center</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight sm:text-7xl">Judge-ready links and proof roadmap.</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
              This page collects the current live artifacts and the next on-chain proof items for BNB Chain Hackathon review.
              The shipped MVP is already usable as a marketplace demo; testnet execution proof is the next sprint.
            </p>
          </div>
          <div className="rounded-3xl border border-yellow-300/20 bg-yellow-300/10 p-6">
            <p className="text-sm text-yellow-100/70">Current status</p>
            <p className="mt-2 text-5xl font-black text-yellow-200">LIVE</p>
            <p className="mt-2 text-zinc-200">GitHub, Vercel demo, compare page, hire flows, and report page are online.</p>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {liveLinks.map(([label, href]) => (
            <a key={href} className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 transition hover:border-yellow-300/40 hover:bg-yellow-300/10" href={href} target="_blank">
              <p className="text-sm text-zinc-500">{label}</p>
              <p className="mt-3 break-words text-sm font-semibold text-yellow-100">{href}</p>
            </a>
          ))}
        </section>

        <section className="rounded-3xl border border-yellow-300/20 bg-yellow-300/10 p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-yellow-100/70">Public testnet wallet</p>
          <h2 className="mt-2 text-3xl font-bold text-yellow-100">BSC testnet proof address</h2>
          <p className="mt-3 break-words font-mono text-sm text-zinc-100">{testnetWallet}</p>
          <p className="mt-3 max-w-3xl text-zinc-300">
            This is a public wallet address only. It is used as the anchor for upcoming BSC testnet proof artifacts;
            no private key, seed phrase, or production fund access is stored in this repository.
          </p>
          <a className="mt-5 inline-flex rounded-2xl border border-yellow-300/40 px-5 py-3 font-bold text-yellow-100 transition hover:bg-yellow-300 hover:text-black" href={testnetWalletExplorer} target="_blank">
            View on BSCScan testnet
          </a>
        </section>

        <section className="rounded-3xl border border-white/10 bg-black/30 p-6">
          <h2 className="text-3xl font-bold">Bounty / track coverage</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {proofTracks.map((track) => (
              <article key={track.title} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="text-xl font-bold text-yellow-100">{track.title}</h3>
                  <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
                    {track.status}
                  </span>
                </div>
                <p className="mt-3 text-zinc-300">{track.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">
            <h2 className="text-3xl font-bold">Next proof sprint</h2>
            <p className="mt-3 text-zinc-300">
              These are explicit placeholders, not fake claims. They tell judges what is live now and what will be connected next.
            </p>
          </div>
          <div className="grid gap-3">
            {nextProofItems.map(([title, body], index) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                <p className="text-sm text-zinc-500">Proof item {index + 1}</p>
                <h3 className="mt-1 text-xl font-bold text-yellow-100">{title}</h3>
                <p className="mt-2 text-zinc-300">{body}</p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
