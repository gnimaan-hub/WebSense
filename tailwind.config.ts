import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#1B2622',
        ink2: '#3F4944',
        ink3: '#6B736E',
        ink4: '#A8AEA9',
        or: '#E8A020',
        or2: '#F2B847',
        orDark: '#B87800',
        green: '#0A5C49',
        greenMid: '#1D9E75',
        greenLt: '#4FD4A5',
      },
      fontFamily: {
        sans: ['var(--font-plus-jakarta)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      animation: {
        blob1: 'blob1 30s ease-in-out infinite',
        blob2: 'blob2 38s ease-in-out infinite',
        blob3: 'blob3 42s ease-in-out infinite',
        ticker: 'ticker 35s linear infinite',
        float: 'float 9s ease-in-out infinite',
        'shimmer': 'shimmer 6s linear infinite',
        'pulse-ring': 'pulse-ring 2s ease-out infinite',
        'star-pop': 'star-pop 0.3s ease-out',
      },
      keyframes: {
        blob1: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '50%': { transform: 'translate(200px,160px) scale(1.15)' },
        },
        blob2: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '50%': { transform: 'translate(-180px,-220px) scale(0.85)' },
        },
        blob3: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(-260px,120px) scale(1.1)' },
          '66%': { transform: 'translate(180px,-160px) scale(0.9)' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.8)', opacity: '0.6' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
        'star-pop': {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
export default config;