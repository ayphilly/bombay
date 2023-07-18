/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "720px",
      lg: "960px",
      "lg-max": { max: "960px" },
      xl: "1140px",
      "2xl": "1400px",
      "3xl": "1441px"
    },
    extend: {
      fontFamily: {
        sans: ["Lato", "sans-serif"],
      },
      spacing: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'cream':'#D4B37F',
        'dark':"#070707",
        'darkOne':'#161616',
        'main':{
          '000':'#FCF7F7',
          '100' : '#FFEAE9',
          '200' : '#FFC5C1',
          '300' : '#FFA099',
          '400' : '#FF7B71',
          '500' : '#FF554A',
          '600' : '#EB2C1F',
          '700' : '#C21509',
          '800' : '#990A00',
          '900' : '#700700',
          '901' : '#480500',
          '902' : '#290300',
        },
        'neutral':{
          '100': '#F7F8FA',
          '200': '#EAEBF1',
          '300': '#DDE1E9',
          '400': '#D1D5E0',
          '500': '#B6BBC9',
          '600': '#858CA0',
          '700': '#676D7E',
          '800': '#4C5366',
          '900': '#2A3147',
          '901': '#1B2032',
          '902': '#15171B',
        }           
      },
      container:{
        'box':'xl:pt-[150px] xl:pb-[120px] xl:px-[120px] bg-red-900'
      }
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '2rem',
        xl: '2rem',
        '2xl': '10rem',
      },
    },
    variants: {
      extend: {
          display: ["group-hover"],
      },
    },
  },
  plugins: [],
}