'use client';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/70 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <a href="/" className="flex items-center gap-2 font-semibold">
          <img src="/logo.svg" alt="TridentCash" className="h-6" />
          TridentCash
        </a>
        <nav className="hidden gap-6 md:flex">
          <a href="#features" className="opacity-80 hover:opacity-100">Features</a>
          <a href="#faq" className="opacity-80 hover:opacity-100">FAQ</a>
          <a href="/lightpaper" className="opacity-80 hover:opacity-100">Lightpaper</a>
        </nav>
        <div className="hidden md:block">
          <a
              className="btn-primary opacity-60 cursor-not-allowed"
              title="Coming soon"
          >
            Launch App (soon)
          </a>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle Menu">☰</button>
      </div>
      {open && (
        <div className="border-t border-white/10 p-4 md:hidden">
          <div className="container flex flex-col gap-4">
            <a href="#features" onClick={() => setOpen(false)}>Features</a>
            <a href="#faq" onClick={() => setOpen(false)}>FAQ</a>
            <a href="/lightpaper" onClick={() => setOpen(false)}>Lightpaper</a>
            <a
                className="btn-primary opacity-60 cursor-not-allowed"
                title="Coming soon"
            >
              Launch App (soon)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}