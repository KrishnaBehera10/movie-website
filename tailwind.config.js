/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        hero: "#1b2631",
        icon: "#2c3e50",
        total: "#17202a ",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
