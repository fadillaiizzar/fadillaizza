/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], 
      },

      backgroundImage: {
        'cream-gradient': 'radial-gradient(ellipse at top, #fff8e7 0%, #f9e1b3 40%, #f0d197 70%, #d8b973 100%)',
      },
    },
  },
  plugins: [],
}

