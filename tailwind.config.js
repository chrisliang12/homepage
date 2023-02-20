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
      {
        myLight: {
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
      {
        myDark: {
          primary: "#8d9ddd",
          secondary: "#e597c2",
          accent: "#9ac61f",
          neutral: "#191B1F",
          "base-100": "#272D49",
          info: "#2C5BDD",
          success: "#1AAD83",
          warning: "#8E780B",
          error: "#E84F3B",
        },
      },
    ],
    darkTheme: "myDark",
  },

  plugins: [require("daisyui")],
  darkMode: "class",
};
