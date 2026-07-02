/** @type {import('tailwindcss').Config} */
export default {
  // ⚡ CRITICAL FIX: This forces Tailwind to switch modes based on our class button toggle
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}