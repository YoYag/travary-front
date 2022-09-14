module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
