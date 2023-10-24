/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {fontFamily: {  
      "google1":['Rubik'],
    }},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0E3C68",

          secondary: "#0f1429",

          accent: "rgb(79 70 229)",

          neutral: "#1c1917",

          "base-100": "#ffffff",

          info: "rgb(30 27 75)",

          success: "#22c55e",

          warning: "#facc15",

          error: "#dc2626",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
