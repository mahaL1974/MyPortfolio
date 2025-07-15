/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "sci-fi-dark": "#020B17",
        "sci-fi-blue": "#0A1628",
        "neon-blue": "#FF6B35",
      },
      animation: {
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        bounce: "bounce 1s infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        glow: {
          "0%": {
            boxShadow: "0 0 5px #FF6B35, 0 0 10px #FF6B35, 0 0 15px #FF6B35",
          },
          "100%": {
            boxShadow: "0 0 10px #FF6B35, 0 0 20px #FF6B35, 0 0 30px #FF6B35",
          },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      transitionDelay: {
        100: "100ms",
        200: "200ms",
        300: "300ms",
        400: "400ms",
        500: "500ms",
        600: "600ms",
        700: "700ms",
        800: "800ms",
        900: "900ms",
        1000: "1000ms",
      },
    },
  },
  plugins: [],
};
