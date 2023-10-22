/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1e3a8a",

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
