/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    minHeight: {
      96: "300px",
    },
    extend: {
      width: {
        100: "500px",
      },
    },
  },
  plugins: [],
};
