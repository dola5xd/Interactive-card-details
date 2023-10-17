/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      small: "600px",
      // => @media (min-width: 600px) { ... }

      medium: "768px",
      // => @media (min-width: 768px) { ... }

      Large: "992px",
      // => @media (min-width: 992px) { ... }
      desktop: "1200px",
      // => @media (min-width: 1200px) { ... }
    },
    extend: {
      colors: {
        Lifrom: ["hsl(249, 99%, 64%)"],
        Lito: ["hsl(278, 94%, 30%)"],
        Red: ["hsl(0, 100%, 66%)"],
        Light_violet: ["hsl(270, 3%, 87%)"],
        Dark_violet: ["hsl(279, 6%, 55%)"],
        Very_Dark_violet: ["hsl(278, 68%, 11%)"],
      },
      fontFamily: {
        Space_Grotesk: ["Space Grotesk"],
      },
      backgroundImage: {
        mobile: "url('../images/bg-main-mobile.png')",
        desktop: "url('../images/bg-main-desktop.png')",
        cardBack: "url('../images/bg-card-back.png')",
        cardFront: "url('../images/bg-card-front.png')",
      },
    },
  },
  plugins: [],
};
