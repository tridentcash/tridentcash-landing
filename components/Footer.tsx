export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="opacity-70">© {new Date().getFullYear()} TridentCash</div>
        <div className="flex gap-4 opacity-80">
          <a href="/terms">Terms</a>
          <a href="/privacy">Privacy</a>
          <a href="https://x.com" target="_blank" rel="noreferrer">X</a>
          <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
}