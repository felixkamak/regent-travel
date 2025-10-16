/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: "var(--brand-ink)",
          ivory: "var(--brand-ivory)",
          sand: "var(--brand-sand)",
          gold: "var(--brand-gold)",
        },
        muted: "var(--muted)",
      },
      borderRadius: {
        xl: "1.25rem",
      },
    },
  },
  plugins: [],
};


