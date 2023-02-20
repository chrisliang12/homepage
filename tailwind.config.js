/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
        160: "40rem",
        176: "44rem",
      },
    },
  },
  daisyui: {
    themes: [
      "dark",
      {
        customLight: {
          primary: "#e8ab76",

          secondary: "#db9d6b",

          accent: "#c614c9",

          neutral: "#131B20",

          "base-100": "#E8E8E8",

          info: "#3E67EF",

          success: "#2EB893",

          warning: "#F5A329",

          error: "#F5517A",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
  darkMode: "class",
};
