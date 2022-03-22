module.exports = {
  content: ["./src/**/*.html"], 
  theme: {
    extend: {
      fontFamily:{
        'josefin':['Josefin Sans', 'sans-serif;']
      },
      variants: {
        display: ['responsive', 'group-hover', 'group-focus'],
       },
    },
   
  },
  plugins: [],
}