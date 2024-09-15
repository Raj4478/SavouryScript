/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
fontFamily:{

  amita : "Amita",
  new : "New Amsterdam",
  cin : "Cinzel",
  Fas : "Fascinate Inline",
  Roboto : "Roboto",
  Play : "Playfair Display",
  great:"Great Vibes",
  brush1:"Comforter Brush",
  brush2 : "Alex Brush",
  brush3:"Kolker Brush",
  fat:"Abril Fatface",
  dance:"Dancing Script"
}
,

backgroundImage:{
  "pic1":"url('/src/assets/pic5.jpg')",
  "pic2":"url('/src/assets/pics12.jpg')"
},
colors:{

  var1 : "#FAEDCE",
  var2:"#31363F",
  var3:"#7FC7D9"
}

    },
  },
  plugins: [],
}