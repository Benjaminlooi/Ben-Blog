module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],  // "content" replaces "purge" in v3
  darkMode: 'media', // or 'class' if you want toggle-based dark mode
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        header: ["Montserrat", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  // "variants" is no longer needed in Tailwind v3
  // as all variants are included by default
}
