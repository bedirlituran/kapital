/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mavi: "#2C3E50", // Tünd mavi
        mavi2: "#3498DB", // Açıq mavi
        boz: "#95A5A6",  // Boz
        ag: "#ECF0F1", // Ağ
      },
    },
  },
  plugins: [],
}