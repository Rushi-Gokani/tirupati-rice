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
        // Overriding 'stone' with a Premium Forest Green palette
        stone: {
          50: '#f2f7f4',  // Very light minty white
          100: '#e1ece5', // Pale green mist
          200: '#c3dacd', // Soft sage
          300: '#98c0ad', // Muted green
          400: '#6b9f88', // Leaf green
          500: '#4d826a', // Medium plant green
          600: '#3a6652', // Deep leaf
          700: '#315243', // Shadow green
          800: '#2a4238', // Dark text green (Primary Text)
          900: '#1a2e26', // Deep Forest Green (Primary Backgrounds)
          950: '#0d1a15', // Almost black green
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
