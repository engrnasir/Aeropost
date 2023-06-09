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
        'darkYellow':'#F6C143',
        'lightYellow':'#FFCD3E'
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
      },
      fontFamily:{
        sofiaPro:'Sofia Pro',
        poppins:'Poppins',
      },
      animation: {
        'slidedown': 'slide .4s linear',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
