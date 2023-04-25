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
        'yellow':'#F6D000',
        'darkYellow':'#F6C143'
      },
      backgroundImage: {
        'bgImg': "url('@/assets/images/bg-footer.png')",
      },
      screens:{
        '3xl':'1640px',
        '2xl':'1240px',
        'xl':'1100px',
        'md':'840px',
        'sm':'680px',
      }
    },
  },
  plugins: [],
}
