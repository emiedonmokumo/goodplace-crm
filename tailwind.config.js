/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {},
      screens: {
        sm: { 'max': '480px' },
        md: { 'min': '481px', 'max': '768px' },
        lg: { 'min': '769px' }
      },
    },
  },
  plugins: [],
};
