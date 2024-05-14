/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Red' : '#e31c4b',
        'Black' : '#1c1917',
        'White' : '#fff'
      },
    },
  },
  plugins: [],
}

