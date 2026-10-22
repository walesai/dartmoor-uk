/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        moor: {
          50: '#f7f8f5',
          100: '#eef1e9',
          600: '#4a5d3f',
          700: '#3d4d34',
          900: '#1f291c',
        }
      }
    },
  },
  plugins: [],
};