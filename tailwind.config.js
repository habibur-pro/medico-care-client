/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        "light": {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#54c0ff",
          secondary: "#3ce2ad",
          accent: "#37cdbe",
          neutral: "#3d4451",
          white: '#ffffff',
          "base-100": "#ffffff",
        },
        "dark": {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          primary: "#a991f7",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },

      "light", "dark"
    ]
  },
}

