"use client"
import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Home, User, Briefcase, MessageSquare, Menu } from "lucide-react"

interface HeaderProps {
  scrollToSection: (sectionId: string) => void
}

export const Header = React.memo(({ scrollToSection }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Bosh sahifa", href: "#home", icon: Home },
    { name: "Men haqimda", href: "#about", icon: User },
    { name: "Portfolio", href: "#portfolio", icon: Briefcase },
    { name: "Aloqa", href: "#contact", icon: MessageSquare },
  ]

  const handleNavClick = (href: string) => {
    const sectionId = href.replace("#", "")
    scrollToSection(sectionId)
    setIsMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent"
        >
          ARKO
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <motion.button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              whileHover={{ scale: 1.1 }}
              className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-300"
            >
              <item.icon className="w-4 h-4" />
              <span>{item.name}</span>
            </motion.button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="sm" className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
            className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10"
          >
            <nav className="container mx-auto px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors duration-300 py-2 w-full text-left"
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
