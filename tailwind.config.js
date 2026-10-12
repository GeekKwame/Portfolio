/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Newsreader Variable"', 'Georgia', 'serif'],
        sans: ['"IBM Plex Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        paper: {
          DEFAULT: '#F2F0EB',
          raised: '#FAF9F6',
          sunk: '#E9E6DF',
        },
        ink: {
          DEFAULT: '#12141A',
          soft: '#2E313A',
          muted: '#575C69',
          // Decorative glyphs only — fails AA as text on paper.
          faint: '#8A8F9C',
        },
        rule: {
          DEFAULT: '#D6D2C9',
          strong: '#B9B4A9',
          dark: '#2E313A',
        },
        accent: {
          DEFAULT: '#A8481A',
          strong: '#8B3A12',
          soft: 'rgba(168, 72, 26, 0.10)',
          // For text and focus rings on ink backgrounds.
          light: '#E58A57',
        },
        signal: {
          DEFAULT: '#1F6B4A',
        },
      },
      maxWidth: {
        content: '76rem',
        prose: '40rem',
      },
      fontSize: {
        meta: ['0.8125rem', { lineHeight: '1.4' }],
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'slide-in': 'slideIn 0.3s ease-out',
      },
    },
  },
  plugins: [],
}
