export default function Features() {
  const features = [
    {
      title: 'Composed Strategies',
      body: 'Portfolio of battle‑tested protocols with risk caps and real‑time monitoring.'
    },
    {
      title: 'Transparent Yield',
      body: 'Clear sources of return; live APR math; downloadable reports.'
    },
    {
      title: 'Institution‑grade UX',
      body: 'Allowlists, signer policies, audit trail, and exportable transactions.'
    },
    {
      title: 'Cross‑Chain Rails',
      body: 'Bridge to new markets via Plasma/Fusion without leaving the interface.'
    },
  ];

  return (
    <section id="features" className="container py-20">
      <div className="grid gap-6 md:grid-cols-2">
        {features.map((f) => (
          <div key={f.title} className="card p-6">
            <h3 className="text-xl font-semibold">{f.title}</h3>
            <p className="mt-2 opacity-80">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}