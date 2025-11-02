export default function CTA() {
  return (
    <section className="container py-20">
      <div className="card px-8 py-10 text-center shadow-glow">
        <h3 className="text-2xl font-semibold">Ready to deploy idle capital?</h3>
        <p className="mx-auto mt-2 max-w-2xl opacity-80">
          Join our early partners program for treasury managers and DAOs. Get priority support and custom strategy mixes.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <a
              className="btn-primary opacity-60 cursor-not-allowed"
              title="Coming soon"
          >
            Launch App (soon)
          </a>
          <a className="btn-outline" href="mailto:hello@trident.cash">Contact</a>
        </div>
      </div>
    </section>
  );
}