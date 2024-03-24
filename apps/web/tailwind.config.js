/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "woovi-green": "#3af18f",
      "woovi-logo-green": "#03d69d",
      "woovi-text-color": "#494949",
      "woovi-purple": "#003366",
      "woovi-border": "#ededed",
      "woovi-border-dark": "#c6c6c6",
      "woovi-shadow": "#f0fbf8",
    }
  },
  plugins: [],
}