/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      "2xl": { max: "1535px", min: "1279px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px", min: "1023px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px", min: "767px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px", min: "380px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "380px", min: "200px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
