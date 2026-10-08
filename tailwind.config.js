/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Newsreader', 'Georgia', 'serif'],
        sans: ['"IBM Plex Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        paper: {
          DEFAULT: '#F2F0EB',
          elevated: '#FAF9F6',
        },
        ink: {
          DEFAULT: '#12141A',
          muted: '#5C6170',
          faint: '#8A8F9C',
        },
        rule: {
          DEFAULT: '#D4D0C8',
          strong: '#B8B3A8',
        },
        surface: {
          DEFAULT: '#FAF9F6',
          muted: '#EBE8E1',
          card: '#FFFFFF',
        },
        accent: {
          DEFAULT: '#C45C26',
          ink: '#8B3A12',
          soft: 'rgba(196, 92, 38, 0.12)',
        },
        signal: {
          DEFAULT: '#1F6B4A',
          soft: 'rgba(31, 107, 74, 0.12)',
        },
      },
      maxWidth: {
        content: '72rem',
        prose: '40rem',
      },
      animation: {
        'slide-in': 'slideIn 0.3s ease-out',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
