export default function FAQ() {
    const items = [
        {
            q: 'How does TridentCash generate yield?',
            a: 'We aggregate multiple strategies (Curve, Uniswap, Aave, Fusion rails, etc.) with risk caps and real‑time monitoring. Yield sources and fees are fully transparent.'
        },
        {
            q: 'Which tokens are supported initially?',
            a: 'We start with stablecoins (USDT/USDC) and high‑liquidity pairs, gradually expanding via cross‑chain rails.'
        },
        {
            q: 'What are the main risks?',
            a: 'Smart contract, protocol, and market risks. Each strategy has a cap, emergency pause, and transparent reporting.'
        },
        {
            q: 'Are funds locked?',
            a: 'Flexible vaults allow withdrawal anytime; fixed‑term vaults (e.g., 30‑day) have clear unlock schedules.'
        },
        {
            q: 'Is TridentCash audited?',
            a: 'Regular audits and bug bounty programs are on the roadmap. Details will be published in the Lightpaper and changelog.'
        }
    ];

    return (
        <section id="faq" className="container py-20">
            <h2 className="text-3xl font-semibold">FAQ</h2>
            <div className="mt-6 divide-y divide-white/10 rounded-2xl border border-white/10">
                {items.map((it) => (
                    <details key={it.q} className="group">
                        <summary className="cursor-pointer list-none px-6 py-4 font-medium hover:bg-white/5">
                            {it.q}
                        </summary>
                        <div className="px-6 pb-6 pt-0 text-sm opacity-80">{it.a}</div>
                    </details>
                ))}
            </div>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'FAQPage',
                        mainEntity: items.map((it) => ({
                            '@type': 'Question',
                            name: it.q,
                            acceptedAnswer: {'@type': 'Answer', text: it.a},
                        })),
                    }),
                }}
            />
        </section>
    );
}
