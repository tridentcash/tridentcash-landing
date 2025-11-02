export default function LightpaperPage() {
    const toc = [
        {id: 'overview', title: 'Overview'},
        {id: 'architecture', title: 'Architecture'},
        {id: 'yield', title: 'Yield Sources'},
        {id: 'risk', title: 'Risk & Controls'},
        {id: 'roadmap', title: 'Roadmap'},
        {id: 'disclaimers', title: 'Disclaimers'},
    ];

    return (
        <main className="container py-10 md:py-16">
            <header className="mb-8 rounded-3xl border border-white/10 bg-surface/70 p-8 shadow-glow backdrop-blur">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-4xl font-bold">TridentCash Lightpaper</h1>
                        <p className="mt-2 opacity-80">Version 0.1 • Draft</p>
                    </div>
                    <a
                        href="/"
                        className="btn-outline hidden md:inline-flex"
                    >
                        ← Back to Home
                    </a>
                </div>
                <a
                    href="/"
                    className="mt-4 inline-flex md:hidden text-sm text-trident.accent hover:underline"
                >
                    ← Back to Home
                </a>
            </header>

            <div className="grid gap-8 md:grid-cols-[220px_1fr]">
                {/* Table of contents (sticky) */}
                <aside
                    className="sticky top-20 h-fit rounded-2xl border border-white/10 bg-white/5 p-4 text-sm backdrop-blur">
                    <div className="mb-2 text-xs uppercase tracking-wide opacity-60">On this page</div>
                    <nav className="space-y-1">
                        {toc.map((s) => (
                            <a
                                key={s.id}
                                href={`#${s.id}`}
                                className="block rounded-lg px-3 py-2 opacity-80 hover:bg-white/5 hover:opacity-100"
                            >
                                {s.title}
                            </a>
                        ))}
                    </nav>
                </aside>

                {/* Main content */}
                <article className="prose prose-invert max-w-none">
                    <h2 id="overview">1. Overview</h2>
                    <p>
                        TridentCash is an on-chain treasury vault infrastructure that aggregates stablecoin liquidity
                        and operates through risk-controlled yield strategies.
                    </p>

                    <h2 id="architecture">2. Architecture</h2>
                    <ul>
                        <li>ERC-4626 vaults isolate user funds from strategy logic.</li>
                        <li>Modular strategies (Curve/Uniswap/Aave/Fusion) with position caps and pause mechanisms.</li>
                        <li>Oracle/TWAP NAV reporting and a risk dashboard.</li>
                    </ul>

                    <h2 id="yield">3. Yield Sources</h2>
                    <ul>
                        <li>Trading fees from AMMs (Curve/Uniswap).</li>
                        <li>Lending yield from protocols like Aave.</li>
                        <li>Liquidity mining incentives (subject to market conditions).</li>
                    </ul>

                    <h2 id="risk">4. Risk & Controls</h2>
                    <ul>
                        <li>Position caps per strategy.</li>
                        <li>Emergency pause/unwind and transparent reporting.</li>
                        <li>Scheduled audits and a bug bounty program.</li>
                    </ul>

                    <h2 id="roadmap">5. Roadmap</h2>
                    <ol>
                        <li>v0: Flexible vaults (USDT/USDC).</li>
                        <li>v1: Fixed-term 30-day vaults.</li>
                        <li>v2: Cross-chain rails (Plasma/Fusion).</li>
                    </ol>

                    <h2 id="disclaimers">6. Disclaimers</h2>
                    <p>
                        DeFi involves risk. Users should DYOR (do your own research) and evaluate their risk tolerance
                        before participating.
                    </p>
                </article>
            </div>
        </main>
    );
}