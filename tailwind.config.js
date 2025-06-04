/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center : true, 
      padding : '16px', 
    },
    extend: {
      colors : {
        "primary" : "#fda4af", //warna Utama
        "dark" : "#020617", //Warna Hitam
        "secondary" : "#94a3b8", //Warna Abu"
      }
    },
  },
  plugins: [],
}

