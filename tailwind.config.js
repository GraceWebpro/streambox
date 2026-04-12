/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // 🎬 Cinematic Backgrounds
        background: "#020617",     // deep black-blue
        surface: "#0B1220",        // card bg
        surfaceLight: "#111827",   // hover / lighter surface
    
        // 🎨 Brand (Streaming Style)
        primary: "#E50914",        // Netflix red 🔥
        primaryHover: "#B20710",
        secondary: "#1F2937",      // subtle dark gray
    
        // ✨ Accent (minimal use)
        accent: "#FACC15",        // gold (for premium feel)
    
        // 📝 Text
        textPrimary: "#FFFFFF",
        textSecondary: "#9CA3AF",
        textMuted: "#6B7280",
    
        // 🔥 States
        danger: "#EF4444",
        success: "#22C55E",
        warning: "#F59E0B",
      },
    
      // 🌈 Gradients (more cinematic)
      backgroundImage: {
        'gradient-main': 'linear-gradient(to right, #E50914, #B20710)',
        'gradient-hover': 'linear-gradient(to right, #B20710, #7F1D1D)',
        'gradient-subtle': 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))',
      },
    
      // 🔤 Fonts
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    
      // 🧱 Shadows (less glow, more depth)
      boxShadow: {
        glow: '0 0 15px rgba(229, 9, 20, 0.4)',
        soft: '0 8px 25px rgba(0, 0, 0, 0.5)',
        card: '0 10px 30px rgba(0, 0, 0, 0.6)',
      },
    
      // 🔘 Radius (more professional)
      borderRadius: {
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
      },
    
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    
      // 🎞️ Animations (more subtle)
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.8s ease-out forwards',
      },
    
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem"
        }
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lgx: '992px',   // 👈 NEW BREAKPOINT
      lg: '1024px',
      xl: '1280px',
    },
   
  },
  plugins: [],
};

