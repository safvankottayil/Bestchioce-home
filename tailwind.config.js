/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-gradient': 'linear-gradient(109deg, #AE8625 -47.85%, #F7EF8A 13.59%, #D2AC47 72.15%, #EDC967 136.47%)',
      },
    },
  },
  plugins: [],
}