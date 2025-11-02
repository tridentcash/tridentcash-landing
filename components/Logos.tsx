export default function Logos() {
  return (
    <section className="container py-8 opacity-70">
      <div className="flex flex-wrap items-center gap-8">
        <span>Backed by</span>
        <img src="/logo.svg" className="h-6" alt="Trident" />
        <div className="text-sm">Curve • Uniswap • Aave • Fusion</div>
      </div>
    </section>
  );
}