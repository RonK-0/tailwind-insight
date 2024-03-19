/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        bannah: "url('../dist/img/banner-img.png')",
        logo: "url('../dist/img/logo.png')"
      },
      colors:{
        dark: "#2b2b2b",
        light: "#fff",
        grayy: "#959595",
        accent: "#fb4d3c",
        mail: "#e69a11",
        twitter: "#26a6de",
        facebook: "#1779f4",
      },
      fontFamily:{
        
      }
    },
  },
  plugins: [],
}