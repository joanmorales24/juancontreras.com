/**** Tailwind Config ****/
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./404.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#049b9b",
        accent: "#FFA500",
        "background-light": "#F8F9FA",
        "background-dark": "#121212",
        "text-primary": "#212529",
        "text-secondary": "#6C757D",
      },
      fontFamily: {
        display: ["Manrope", "sans-serif"],
        body: ["Lora", "serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ]
};
