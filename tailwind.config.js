/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-bg': "url(/src/assets/bg-image-1.jpg)",
        'banner-bg-2': "url(/src/assets/bg-image-2.jpg)",
        'banner-bg-3': "url(/src/assets/banner-bg-3.jpg)",
        'banner-bg-4': "url(/src/assets/banner-bg-4.jpg)",
        'banner-bg-5': "url(/src/assets/slides-bg.jpg)",
        'banner-bg-6': "url(/src/assets/bg-6.jpg)",
      }
    },
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
          "base-200": "#f5f5f5"
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

