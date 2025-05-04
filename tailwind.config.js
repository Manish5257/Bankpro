/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6eefb',
          100: '#ccdcf7',
          200: '#99b9ef',
          300: '#6695e7',
          400: '#3372df',
          500: '#1d5fc4',
          600: '#0A2463', // Main primary color
          700: '#081d4d',
          800: '#051236',
          900: '#030920',
        },
        secondary: {
          50: '#e9f7f7',
          100: '#d4efef',
          200: '#a9dedf',
          300: '#7ecece',
          400: '#53bdbe',
          500: '#3fa6a7',
          600: '#29878a',
          700: '#20696b',
          800: '#184a4c',
          900: '#102c2d',
        },
        accent: {
          50: '#fef8e9',
          100: '#fdf2d4',
          200: '#fbe6a9',
          300: '#f8d97e',
          400: '#f6cd52',
          500: '#E6AF2E', // Main accent color
          600: '#d49616',
          700: '#a97512',
          800: '#7e550d',
          900: '#533709',
        },
        success: {
          50: '#e9f7ea',
          100: '#d3efd4',
          200: '#a7e0aa',
          300: '#7bd07f',
          400: '#4fc055',
          500: '#2E7D32', // Main success color
          700: '#1e521f',
          800: '#163a16',
          900: '#0d220d',
        },
        warning: {
          50: '#fff8e1',
          100: '#ffecb3',
          200: '#ffe082',
          300: '#ffd54f',
          400: '#ffca28',
          500: '#ffb300',
          600: '#ED6C02', // Main warning color
          700: '#fb8c00',
          800: '#f57c00',
          900: '#ef6c00',
        },
        error: {
          50: '#fdecec',
          100: '#fbdada',
          200: '#f7b5b5',
          300: '#f38f8f',
          400: '#ee6a6a',
          500: '#D32F2F', // Main error color
          600: '#c62828',
          700: '#b71c1c',
          800: '#a10a0a',
          900: '#770707',
        },
      }
    },
  },
  plugins: [],
};