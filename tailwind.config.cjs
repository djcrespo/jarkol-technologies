/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "components/**/*.{vue,js,ts}",
    "layouts/**/*.vue",
    "pages/**/*.vue",
    "composables/**/*.{js,ts}",
    "plugins/**/*.{js,ts}",
    "App.{js,ts,vue}",
    "app.{js,ts,vue}",
    "Error.{js,ts,vue}",
    "error.{js,ts,vue}",
    "content/**/*.md",
    './node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
    './node_modules/flowbite/**/*.{js,jsx,ts,tsx}',
    "./node_modules/tw-elements/js/**/*.js"
  ],
  plugins: [
    require('flowbite/plugin'),
    require("tw-elements/plugin.cjs"),
    require('tailwindcss-animated')
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        body: "rgb(var(--color-bg))",
        "box-bg": "rgb(var(--color-box))",
        "box-shadow": "rgb(var(--box-sd))",
        "box-border": "rgb(var(--box-border))",
        primary: "#3B408C",
        secondary: "#169ED0",
        "body-color": "#462C64",
        "gray-color": "",
        "jarkolOne": "#169ED0",
        "jarkolTwo": "#3B408C"
      },
      zIndex: {
        60: "60",
        70: "70",
      },
      screens: {
        xs: "400px",
      },
    },
  }
};
