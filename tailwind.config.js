/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode support
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#93C5FD',
          DEFAULT: '#3B82F6',
          dark: '#010107',
        },
        secondary: {
          light: '#C4B5FD',
          DEFAULT: '#8B5CF6',
          dark: '#6D28D9',
        },
        neutral: {
          light: '#F3F4F6',
          DEFAULT: '#D1D5DB',
          dark: '#374151',
        },
        background: {
          light: '#FFFFFF',
          dark: '#111827',
        },
        text: {
          light: '#1F2937',
          dark: '#F9FAFB',
        },
        accent: {
          light: '#A78BFA',
          dark: '#7C3AED',
        },
      },
    },
  },
  plugins: [],
}
