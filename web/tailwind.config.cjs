/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
    "./index.html"
  ],
  theme: {
    extend: {
      backgroundImage: {
        galaxy: "url('/images/background-galaxy.png')",
        "nlw-gradient": "linear-gradient(89.86deg, #9572FC 20%, #43E7AD 74%, #E1D55D 16%)",
         "game-gradient": "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.88%)"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}
