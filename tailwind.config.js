/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "todo-success":"#11BB11",
        "todo-info":"#2757FF",
        "todo-grey":"#322E2E",
        "todo-dark-grey":"#222222"
      }
    },
  },
  plugins: [],
}