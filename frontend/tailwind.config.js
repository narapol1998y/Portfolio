/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"),require("tw-elements/dist/plugin.cjs")],
  daisyui: {
    themes: ["light", "dark", "cupcake", "night", "cmyk","luxury","fantasy","synthwave"],
  },
}

