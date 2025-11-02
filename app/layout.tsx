import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TridentCash — Multi-Strategy Yield',
  description: 'Flexible vaults • Automated strategies • Cross-chain liquidity',
  openGraph: {
    title: 'TridentCash — Multi-Strategy Yield',
    description: 'Flexible vaults • Automated strategies • Cross-chain liquidity',
    images: ['/og.jpg'],
    url: 'https://trident.cash',
    siteName: 'TridentCash'
  },
  metadataBase: new URL('https://trident.cash')
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="relative">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.15),transparent_60%)]" />
          {children}
        </div>
      </body>
    </html>
  );
}