/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#2563EB",
          secondary: "#38BDF8",
          accent: "#10B981",
          warning: "#F59E0B",
          danger: "#EF4444",
        },
        surface: {
          bg: "#F9FAFB",
          sidebar: "#1E3A8A",
        },
        text: {
          main: "#111827",
          secondary: "#6B7280",
        },
        neutral: {
          white: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
