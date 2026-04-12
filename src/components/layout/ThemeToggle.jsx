import React from "react"

const ThemeToggle = ({ variant = "glass" }) => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") || "light"
  )

  const element = document.documentElement

  React.useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      element.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex h-8 w-16 items-center rounded-full transition-all duration-500"
    >
      {variant === "glass" && <GlassToggle theme={theme} />}
      {variant === "neon" && <NeonToggle theme={theme} />}
      {variant === "3d" && <ThreeDToggle theme={theme} />}
    </button>
  )
}

export default ThemeToggle

// ---------- GLASS TOGGLE ----------
const GlassToggle = ({ theme }) => (
  <>
    <div
      className={`w-full h-full rounded-full backdrop-blur-md border border-white/20 shadow-inner transition ${
        theme === "dark" ? "bg-dark/80" : "bg-white/70"
      }`}
    />

    <div
      className={`absolute w-6 h-6 rounded-full bg-primary shadow-lg transition-transform duration-500 ${
        theme === "dark" ? "translate-x-8" : "translate-x-1"
      }`}
    />
  </>
)

// ---------- NEON TOGGLE ----------
const NeonToggle = ({ theme }) => (
  <>
    <div
      className={`w-full h-full rounded-full transition ${
        theme === "dark"
          ? "bg-dark shadow-[0_0_20px_#F59E0B]"
          : "bg-gray-300"
      }`}
    />

    <div
      className={`absolute w-6 h-6 rounded-full bg-primary transition-transform duration-500 ${
        theme === "dark"
          ? "translate-x-8 shadow-[0_0_25px_#F59E0B]"
          : "translate-x-1"
      }`}
    />
  </>
)

// ---------- 3D TOGGLE ----------
const ThreeDToggle = ({ theme }) => (
  <>
    <div className="w-full h-full rounded-full bg-gradient-to-b from-gray-200 to-gray-400 dark:from-[#1f1835] dark:to-[#151022] shadow-inner" />

    <div
      className={`absolute w-6 h-6 rounded-full bg-gradient-to-b from-white to-gray-300 shadow-lg border border-gray-200 transition-transform duration-500 ${
        theme === "dark" ? "translate-x-8" : "translate-x-1"
      }`}
    />
  </>
)