/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem', 
          sm: '2rem',
          lg: '4rem',
          xl: '2.5rem',
          '2xl': '6rem',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Set Poppins as the default font
        "poppins": ["Poppins", "sans-serif"],
        "inter": ["Inter", "sans-serif"],
        "roboto": ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
}
