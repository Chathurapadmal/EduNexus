// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#2563EB',      
        'secondary-color': '#388DF8',    
        'accent-color': '#108981',       
        'warning-color': '#F59E0B',      
        'danger-color': '#EF4444',       
        'bg-main': '#F9FAFB',           
        'navbar-bg': '#1E3A8A',          
        'text-main': '#111827',          
        'text-secondary': '#687280',     
        'base-white': '#FFFFFF',         
      },
    },
  },
  plugins: [],
}