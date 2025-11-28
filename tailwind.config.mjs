/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      minHeight: {
        20.5: "5.5rem",
      },
      inset: {
        11.5: "44.5px",
        34: "9rem",
        51.5: "207px",
      },
      colors: {
        primary: "#009EFF",
        "semi-dark": "#005A94",
        light: "#78C3F2",
        dark: "#003252",
        "full-dark": "#000F18",
        red: "#FF6262",
        "yellow-evos": "#FFC138",
        "green-evos": "#B0F557",
        "yellow-evos": "#FFD74B",
        "blue-evos": "#44B3F8",
        "green-mc": "#64DB4A",
        "orange-gta": "#fb893a",
        "purple-evos": "#B898FB",
        "orange-evos": "#FF7A4B",
      },
      backgroundImage: {
        pattern: 'url("/images/bg.svg")',
      },
      blur: {
        xs: "1.5px",
      },
      fontSize: {
        "big-xl": "16.5rem",
        "md-xl": "13.8rem",
        "4.5xl": "42px",
      },
    },
    fontFamily: {
      jaka: ["Plus Jakarta Sans", "sans-serif"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@khoohaoyit/tailwind-grid-center"),
    require("tailwindcss-animated"),
  ],
};
