/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        canvas: {
          DEFAULT: '#090a0f',
          subtle: '#0c0e15',
        },
        surface: {
          DEFAULT: '#11141d',
          muted: '#0d1017',
          card: '#131722',
          elevated: '#171b28',
          hover: '#1b2030',
        },
        border: {
          DEFAULT: '#1e2333',
          subtle: '#151924',
          bright: '#2d374d',
        },
        accent: {
          DEFAULT: '#00d2df',
          hover: '#26e2ee',
          glow: 'rgba(0, 210, 223, 0.25)',
          muted: '#67e8f9',
        },
        emerald: {
          DEFAULT: '#10b981',
          glow: 'rgba(16, 185, 129, 0.25)',
        },
      },
      animation: {
        'slide-in': 'slideIn 0.3s ease-out',
        'marquee': 'marquee 30s linear infinite',
        'pulse-slow': 'pulseSlow 3s ease-in-out infinite',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
      },
    },
  },
  plugins: [],
}
