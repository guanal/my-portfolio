"use client"
import { createContext, useContext, useState, useEffect } from "react"
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes"

type Theme = "light" | "dark" | "blue" | "green" | "purple" | "orange"

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  themes: Theme[]
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

const themeClasses = {
  light: "theme-light",
  dark: "theme-dark",
  blue: "theme-blue",
  green: "theme-green",
  purple: "theme-purple",
  orange: "theme-orange",
}

export default function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>("dark")
  const themes: Theme[] = ["light", "dark", "blue", "green", "purple", "orange"]

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme
    if (savedTheme && themes.includes(savedTheme)) {
      setTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("theme", theme)

    // Remove all theme classes
    Object.values(themeClasses).forEach((className) => {
      document.documentElement.classList.remove(className)
    })

    // Add current theme class
    document.documentElement.classList.add(themeClasses[theme])
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes }}>
      <NextThemesProvider {...props} theme={theme}>
        {children}
      </NextThemesProvider>
    </ThemeContext.Provider>
  )
}
