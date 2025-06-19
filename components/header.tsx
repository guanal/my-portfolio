"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Palette, Sun, Moon, Zap } from "lucide-react"
import { useTheme } from "./theme-provider"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showThemeSelector, setShowThemeSelector] = useState(false)
  const { theme, setTheme, themes } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ]

  const themeConfig = {
    light: {
      name: "Light",
      bg: "bg-gray-100",
      icon: <Sun className="w-4 h-4" />,
      color: "text-yellow-600",
    },
    dark: {
      name: "Dark",
      bg: "bg-gray-800",
      icon: <Moon className="w-4 h-4" />,
      color: "text-blue-400",
    },
    blue: {
      name: "Ocean",
      bg: "bg-blue-600",
      icon: <div className="w-4 h-4 rounded-full bg-blue-500" />,
      color: "text-blue-600",
    },
    green: {
      name: "Forest",
      bg: "bg-green-600",
      icon: <div className="w-4 h-4 rounded-full bg-green-500" />,
      color: "text-green-600",
    },
    purple: {
      name: "Galaxy",
      bg: "bg-purple-600",
      icon: <div className="w-4 h-4 rounded-full bg-purple-500" />,
      color: "text-purple-600",
    },
    orange: {
      name: "Sunset",
      bg: "bg-orange-600",
      icon: <div className="w-4 h-4 rounded-full bg-orange-500" />,
      color: "text-orange-600",
    },
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
          >
            Yitages Desta
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </motion.a>
            ))}

            {/* Enhanced Theme Selector */}
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowThemeSelector(!showThemeSelector)}
                className={`p-3 rounded-xl border-2 transition-all duration-300 ${
                  showThemeSelector
                    ? "border-primary bg-primary/10 shadow-lg"
                    : "border-border/30 hover:border-primary/50 hover:bg-primary/5"
                }`}
              >
                <motion.div
                  animate={{ rotate: showThemeSelector ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center space-x-2"
                >
                  <Palette className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium hidden lg:block">{themeConfig[theme]?.name || "Theme"}</span>
                </motion.div>
              </Button>

              <AnimatePresence>
                {showThemeSelector && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-14 bg-background/95 backdrop-blur-md border border-border rounded-xl p-3 shadow-xl min-w-48"
                  >
                    <div className="space-y-2">
                      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide px-2 py-1">
                        Choose Theme
                      </div>
                      {themes.map((t, index) => (
                        <motion.button
                          key={t}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          onClick={() => {
                            setTheme(t)
                            setShowThemeSelector(false)
                          }}
                          className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                            theme === t
                              ? "bg-primary/20 text-primary border border-primary/30"
                              : "hover:bg-muted/50 text-foreground/80 hover:text-foreground"
                          }`}
                        >
                          <div className={`p-1.5 rounded-lg ${themeConfig[t]?.bg} flex items-center justify-center`}>
                            <div className="text-white">{themeConfig[t]?.icon}</div>
                          </div>
                          <span className="font-medium">{themeConfig[t]?.name}</span>
                          {theme === t && (
                            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="ml-auto">
                              <Zap className="w-4 h-4 text-primary" />
                            </motion.div>
                          )}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Mobile Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowThemeSelector(!showThemeSelector)}
              className="p-2 rounded-lg border border-border/30 hover:border-primary/50"
            >
              <Palette className="w-5 h-5 text-primary" />
            </Button>

            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
              <motion.div animate={{ rotate: isMenuOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 pb-4 border-t border-border/30 pt-4"
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 px-2 text-foreground/80 hover:text-primary transition-colors duration-200 font-medium rounded-lg hover:bg-primary/5"
                >
                  {item.name}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Theme Selector */}
        <AnimatePresence>
          {showThemeSelector && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute right-4 top-16 bg-background/95 backdrop-blur-md border border-border rounded-xl p-3 shadow-xl min-w-48 z-50"
            >
              <div className="space-y-2">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide px-2 py-1">
                  Choose Theme
                </div>
                {themes.map((t, index) => (
                  <motion.button
                    key={t}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => {
                      setTheme(t)
                      setShowThemeSelector(false)
                    }}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                      theme === t
                        ? "bg-primary/20 text-primary border border-primary/30"
                        : "hover:bg-muted/50 text-foreground/80 hover:text-foreground"
                    }`}
                  >
                    <div className={`p-1.5 rounded-lg ${themeConfig[t]?.bg} flex items-center justify-center`}>
                      <div className="text-white">{themeConfig[t]?.icon}</div>
                    </div>
                    <span className="font-medium">{themeConfig[t]?.name}</span>
                    {theme === t && (
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="ml-auto">
                        <Zap className="w-4 h-4 text-primary" />
                      </motion.div>
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
