/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm-custom': '270px', 
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #B068E9 0%, #6463E7 100%)',
      },
    },
  },
  plugins: [],
}

