/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "bg-red-600",
    "bg-blue-600",
    "bg-green-600",
    "hover:bg-amber-100",
    "bg-amber-400",
    "hover:bg-lime-100",
    "bg-lime-400",
    "hover:bg-teal-100",
    "bg-teal-400",
    "hover:bg-indigo-100",
    "bg-indigo-400",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg-fundo": "url('./src/assets/star-wars-montagem.jpg')",
      },
    },
  },
  plugins: [],
};
