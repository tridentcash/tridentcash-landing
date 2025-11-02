export default function Hero() {
  return (
    <section className="container py-20 md:py-28">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-widest text-trident.accent/80">TridentCash</p>
        <h1 className="mt-3 text-5xl font-bold leading-tight md:text-6xl">
          Multi‑Strategy Yield for On‑Chain Treasuries
        </h1>
        <p className="mt-4 text-lg opacity-80">
          Deposit stablecoins, earn programmatic yield from curated strategies (Curve, Uniswap, Aave, and Fusion rails). Simple UX, transparent risk, on Ethereum and beyond.
        </p>
        <div className="mt-8 flex gap-3">
            <a
                className="btn-primary opacity-60 cursor-not-allowed"
                title="Coming soon"
            >
                Launch App (soon)
            </a>
          <a className="btn-outline" href="#features">See Features</a>
        </div>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {[
          { kpi: '$27.5M+', label: 'Total Volume (all time)' },
          { kpi: '4', label: 'Active Strategies' },
          { kpi: '30d', label: 'Fixed‑Term vaults (soon)' },
        ].map((x) => (
          <div key={x.label} className="card p-6 shadow-glow">
            <div className="text-2xl font-semibold">{x.kpi}</div>
            <div className="mt-1 text-sm opacity-70">{x.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}