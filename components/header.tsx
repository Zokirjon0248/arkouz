"use client"
import React, { useState, useCallback } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Home, User, Briefcase, MessageSquare, Menu } from "lucide-react"

interface HeaderProps {
  scrollToSection: (sectionId: string) => void
}

export const Header = React.memo(({ scrollToSection }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  const navItems = [
    { name: "Bosh sahifa", href: "#home", icon: Home },
    { name: "Men haqimda", href: "#about", icon: User },
    { name: "Portfolio", href: "#portfolio", icon: Briefcase },
    { name: "Aloqa", href: "#contact", icon: MessageSquare },
  ]

  const handleNavClick = useCallback(
    (href: string) => {
      const sectionId = href.replace("#", "")
      scrollToSection(sectionId)
      setIsMenuOpen(false)
    },
    [scrollToSection],
  )

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev)
  }, [])

  return (
    <motion.header
      initial={{ y: prefersReducedMotion ? 0 : -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: prefersReducedMotion ? 0.1 : 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 border-b border-white/10 will-change-transform"
      style={{ transform: "translate3d(0, 0, 0)" }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
          ARKO
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-200"
            >
              <item.icon className="w-4 h-4" />
              <span>{item.name}</span>
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="sm" className="md:hidden text-white" onClick={toggleMenu}>
          <Menu className="w-6 h-6" />
        </Button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.1 : 0.2 }}
            className="md:hidden bg-black/90 border-t border-white/10"
          >
            <nav className="container mx-auto px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors duration-200 py-2 w-full text-left"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
})

Header.displayName = "Header"
