import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#05070A',
        foreground: '#F8FAFC',
        trident: {
          primary: '#00E0FF',
          accent: '#38BDF8',
          ring: '#67E8F9'
        }
      },
      boxShadow: {
        glow: '0 0 40px rgba(56,189,248,0.25)'
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config