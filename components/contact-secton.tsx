"use client"
import React from "react"
import { Button } from "@/components/ui/button"
import { FaTelegramPlane, FaInstagram } from "react-icons/fa"

export const ContactSection = React.memo(() => {
  return (
    <section id="contact" className="py-16 md:py-20 lg:py-24 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Loyihangizni Muhokama Qilamiz</h2>
          <p className="text-lg md:text-xl opacity-80 max-w-4xl mx-auto leading-relaxed px-4">
            Arxitektura va dizayn loyihalaringiz uchun professional maslahat va to'liq xizmat. G'oyalaringizni hayotga
            tatbiq etishda yordam beraman. Bepul konsultatsiya olish uchun bog'laning.
          </p>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 px-4">
            <Button
              size="lg"
              className="group relative overflow-hidden bg-white text-black hover:bg-blue-500 hover:text-white hover:scale-105 hover:-translate-y-1 transition-all duration-500 shadow-xl px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-bold rounded-xl border-0 w-full sm:w-auto flex items-center gap-2"
              asChild
            >
              <a href="https://t.me/arko_uz" target="_blank" rel="noopener noreferrer">
                <FaTelegramPlane className="text-xl group-hover:rotate-12 group-hover:scale-125 transition-transform duration-500" />
                <span className="relative z-10">Telegram</span>
              </a>
            </Button>

            <Button
              size="lg"
              className="group relative overflow-hidden bg-white text-black hover:bg-pink-500 hover:text-white hover:scale-105 hover:-translate-y-1 transition-all duration-500 shadow-xl px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-bold rounded-xl border-0 w-full sm:w-auto flex items-center gap-2"
              asChild
            >
              <a
                href="https://www.instagram.com/arko.uz?igsh=NzRrcWpnMHhndnU0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-xl group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500" />
                <span className="relative z-10">Instagram</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
})

ContactSection.displayName = "ContactSection"
