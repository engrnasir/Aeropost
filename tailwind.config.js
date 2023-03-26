/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#0148A4',
        'yellow':'#F6D000'
      },
      backgroundImage: {
        'bgImg': "url('@/assets/images/bg-footer.png')",
      },
      screens:{
        'xl':'1100px',
        'sm':'680px',
        'md':'780px',
      }
    },
  },
  plugins: [],
}
