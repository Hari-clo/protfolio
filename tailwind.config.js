/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#070809',
          900: '#0B0D0F', // Main deep charcoal
          850: '#101317',
          800: '#14181C', // Card & elevated surface
          750: '#1A1E24',
          700: '#232830',
          600: '#343B47',
          500: '#4D5666',
          400: '#758092',
          300: '#9CA7B8',
          200: '#CBD3DE',
          100: '#E6EAF0',
          50: '#F5F7FA',
        },
        offwhite: '#F4F5F7',
        accent: {
          blue: '#38BDF8',
          'blue-muted': '#0284C7',
          silver: '#CBD5E1',
          'silver-bright': '#F1F5F9',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'Cambria', 'serif'],
        editorial: ['"Instrument Serif"', '"Newsreader"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Menlo', 'Consolas', 'monospace'],
      },
      letterSpacing: {
        'tightest': '-0.04em',
        'tighter': '-0.02em',
        'widest-editorial': '0.25em',
        'ultra-wide': '0.35em',
      },
      borderWidth: {
        'fine': '1px',
      },
      borderColor: {
        'hairline': 'rgba(255, 255, 255, 0.08)',
        'hairline-bright': 'rgba(255, 255, 255, 0.16)',
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
