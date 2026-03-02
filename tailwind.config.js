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
        // Enhanced Rice Colors - Warmer Cream/Beige
        rice: {
          50: '#fdfcf8',  // Purest cream
          100: '#f9f6ef', // Off-white
          200: '#f0eadd', // Raw rice color
          300: '#e6dbc4', // Husk color
          400: '#d6c4a3', // Darker husk
          500: '#bfa586', // Sack color
          600: '#a3886b',
          700: '#856b54',
          800: '#6d5847',
          900: '#59493d',
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
