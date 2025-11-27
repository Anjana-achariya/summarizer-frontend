/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        card: "var(--color-card)",
        text: "var(--color-text)",
        primary: "var(--color-primary)",
        accent: "var(--color-accent)",
        indigo: "var(--color-indigo)"
      }
    }
  },
  plugins: []
}
