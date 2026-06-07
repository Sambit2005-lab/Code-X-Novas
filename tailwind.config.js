// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shine: {
          "0%": { left: "-150%" },
          "100%": { left: "150%" },
        },
      },
      animation: {
        shine: "shine 0.8s linear forwards",
      },
    },
  },
  plugins: [],
}
