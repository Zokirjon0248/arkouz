"use client"
import React from "react"
import { Badge } from "@/components/ui/badge"
import { Building2, Star } from "lucide-react"

export const AboutSection = React.memo(() => {
  return (
    <section id="about" className="relative container mx-auto h-screen w-full overflow-hidden">
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Professional{" "}
          <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
            Arko jamoasi
          </span>
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
          5+ yillik tajriba bilan zamonaviy va funksional arxitektura yechimlarini yarataman. Turar-joy, tijorat va
          sanoat binolarini loyihalash, ichki dizayn va 3D vizualizatsiya xizmatlarini taqdim etaman.
        </p>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12 px-4">
          <Badge className="bg-black text-white border border-white/30 px-3 md:px-4 py-1 md:py-2 text-sm md:text-base rounded-lg hover:bg-white hover:text-black transition-colors duration-300">
            <Building2 className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" /> Litsenziyali Arxitektor
          </Badge>
          <Badge className="bg-black text-white border border-white/30 px-3 md:px-4 py-1 md:py-2 text-sm md:text-base rounded-lg hover:bg-white hover:text-black transition-colors duration-300">
            <Star className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" /> 5+ Yil Tajriba
          </Badge>
        </div>
      </div>
    </section>
  )
})

AboutSection.displayName = "AboutSection"
