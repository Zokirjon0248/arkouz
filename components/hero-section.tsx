"use client"
import React, { useMemo } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Building2, Star, ArrowRight, MessageSquare } from "lucide-react"

export const HeroSection = React.memo(() => {
  const prefersReducedMotion = useReducedMotion()

  const fadeInVariants = useMemo(
    () => ({
      initial: {
        y: prefersReducedMotion ? 0 : 30,
        opacity: 0,
      },
      animate: {
        y: 0,
        opacity: 1,
      },
    }),
    [prefersReducedMotion],
  )

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.h1
          variants={fadeInVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: prefersReducedMotion ? 0.1 : 0.8, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Professional{" "}
          <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
            ARX-DEXIUM jamoasi
          </span>
        </motion.h1>

        <motion.p
          variants={fadeInVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: prefersReducedMotion ? 0.1 : 0.8, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed"
        >
          5+ yillik tajriba bilan zamonaviy va funksional arxitektura yechimlarini yarataman. Turar-joy, tijorat va
          sanoat binolarini loyihalash, ichki dizayn va 3D vizualizatsiya xizmatlarini taqdim etaman.
        </motion.p>

        <motion.div
          variants={fadeInVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: prefersReducedMotion ? 0.1 : 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12"
        >
        
          <Badge className="bg-black/60 text-white border border-white/30 px-4 py-2 text-sm md:text-base rounded-lg hover:bg-white hover:text-black transition-colors duration-200">
            <Star className="w-4 h-4 mr-2" /> 5+ Yil Tajriba
          </Badge>
        </motion.div>

        <motion.div
          variants={fadeInVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: prefersReducedMotion ? 0.1 : 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            asChild
          >
            <a href="#portfolio">
              Portfolio ko'rish
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white/30 text-white hover:bg-white hover:text-black px-8 py-3 rounded-lg font-semibold transition-colors duration-200 bg-black/20"
            asChild
          >
            <a href="#contact">
              Aloqa qilish
              <MessageSquare className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
})

HeroSection.displayName = "HeroSection"
