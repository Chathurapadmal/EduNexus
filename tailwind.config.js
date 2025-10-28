/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#2563EB",     // Royal Blue
          secondary: "#38BDF8",   // Sky Blue
          accent: "#10B981",      // Emerald
          warning: "#F59E0B",     // Amber
          danger: "#EF4444",      // Red
        },
        surface: {
          bg: "#F9FAFB",          // Page background
          sidebar: "#1E3A8A",     // Sidebar/nav
          card: "#FFFFFF",        // ← THIS enables bg-surface-card
        },
        text: {
          main: "#111827",
          secondary: "#6B7280",
        },
      },
      boxShadow: {
        soft: "0 6px 24px rgba(0,0,0,.08)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
