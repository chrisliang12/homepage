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
          ...require("daisyui/src/colors/themes")["[data-theme=pastel]"],
          "base-100": "#fffaf4",
          warning: "#ffbe5c",
        },
      },
      {
        myDark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dracula]"],
          primary: "#BC93F9",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
