/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
        mono: ['var(--font-mono)'],
      },
      colors: {
        surface: { DEFAULT: '#050510', raised: '#0c0c20', overlay: '#141430' },
        accent: { DEFAULT: '#3b82f6', dim: '#2563eb', glow: '#60a5fa', violet: '#8b5cf6' },
        text: { primary: '#e4e4ef', secondary: '#8888a8' },
      },
    },
  },
  plugins: [],
};
