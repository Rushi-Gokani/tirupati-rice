/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', ...defaultTheme.fontFamily.serif],
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // Neutral stone palette (restored from green override)
        stone: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
          950: '#0c0a09',
        },
        // Brand green (use directly as bg-brand-green or bg-[#005e2a])
        brand: {
          green: '#005e2a',
        },
        // Paddy Field Green Colors (Replacing the old brown theme)
        rice: {
          50: '#f2fcf5',  // Very light green tint
          100: '#e1f8e8', // Lightest green
          200: '#c3efd1', // Light paddy green
          300: '#94dfad', // Soft green
          400: '#5ec882', // Bright paddy field green
          500: '#38ab5f', // Main paddy green
          600: '#278848', // Deep green
          700: '#236b3b', // Darker green
          800: '#205531', // Very dark green
          900: '#1b462a', // Deepest green
        },
        // Richer Gold for contrast against Green
        gold: {
          400: '#eec95e',
          500: '#D4AF37', // Standard Gold
          600: '#bfa586', // Muted Gold (matches rice sack)
          700: '#997b2f',
        }
      }
    },
  },
  plugins: [],
};
