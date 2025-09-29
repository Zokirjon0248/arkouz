"use client"
import React from "react"

export const Footer = React.memo(() => {
  return (
    <footer className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-6 h-6 md:w-10 md:h-10 object-contain rounded-2xl"
                loading="lazy"
              />
            </div>

            <div>
              <span className="text-lg md:text-xl font-bold tracking-wide">ARX-DEXIUM</span>
              <p className="text-xs md:text-sm text-stone-400">Professional Arxitektor</p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-stone-300 text-base md:text-lg">© 2025 Professional Arxitektor Portfolio</p>
            <p className="text-stone-500 text-xs md:text-sm mt-1">
              5+ yillik tajriba bilan professional arxitektura xizmatlari
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
})

Footer.displayName = "Footer"
