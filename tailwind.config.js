/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sf-pro': ['SF Pro Display', 'sans-serif'], // Custom font
      },
      fontSize: {
        'main-heading': '44px', // Main heading size
        'main-heading2':'28px',
        'main-heading3':'26px',
       'main-heading4':'22px',

        'sub-heading': '18px',  // Subheading size
        'sub-heading2': '16px',
        'auth-heading': '28px', // Subheading2 size
        'input-size':"36px",
        'smallHead':'12px'

      },
      colors: {
        customBlack:"#171717",
        customGreen: '#022213', // Custom green color
        liteGreen: '#72A10F',   // Lite green color
        customGray:'#999999',
        semiLiteGreen:"#CCCC31",
        customeGray2:"#757575"
      },
      fontWeight: {
        customBold: 600,
        customBold2:400,
        customBold3:500,
        heavyBold:700

        
         // Font weight of 600
      },
      screens: {
        'xs': '500px', 
        'xxs': '420px',
        'xxss': '360px',
        'xls':'979px',
        'xlx':'1400px',
        'xlss':'1500px',
        'xlxs':'1800px',

        'inputWidth':'405px',
        'inputWidthCompany':'456px',
        'h-sm': { 'raw': '(min-height: 900px)' },  // Apply styles if height >= 600px
        'h-md': { 'raw': '(min-height: 1024px)' },  // Apply styles if height >= 600px
        'h-lg': { 'raw': '(min-height: 1124px)' },  // Apply styles if height >= 600px

      },
      
    },
  },
  plugins: [],
}
