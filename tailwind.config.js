/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Palette 1 - Light Mode
        paletteLight: {
          bg: '#F5EFE6',
          card: '#E8DFCA',
          primary: '#6D94C5',
          secondary: '#CBDCEB',
        },
        // Palette 2 - Dark Mode
        paletteDark: {
          accent: '#2F2FE4',
          primary: '#162E93',
          card: '#1A1953',
          bg: '#080616',
        },
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0284c7',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        }
      }
    },
  },
  plugins: [],
};
