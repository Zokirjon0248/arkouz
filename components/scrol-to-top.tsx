"use client"
import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUp } from "lucide-react"

interface ScrollToTopProps {
  show: boolean
  onClick: () => void
}

export const ScrollToTop = React.memo(({ show, onClick }: ScrollToTopProps) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClick}
          className="fixed bottom-4 md:bottom-8 right-4 md:right-8
              w-12 h-12 md:w-16 md:h-16
              bg-black text-white
              rounded-2xl shadow-2xl
              hover:bg-white hover:text-black
              transition-colors duration-300
              z-40 border border-white/20
              flex items-center justify-center"
        >
          <ArrowUp className="w-6 h-6 md:w-8 md:h-8" />
        </motion.button>
      )}
    </AnimatePresence>
  )
})

ScrollToTop.displayName = "ScrollToTop"
