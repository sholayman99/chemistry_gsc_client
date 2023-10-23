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

          secondary: "#9333ea",

          accent: "#84cc16",

          neutral: "#111827",

          "base-100": "#ffffff",

          info: "#22d3ee",

          success: "#22c55e",

          warning: "#facc15",

          error: "#dc2626",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
