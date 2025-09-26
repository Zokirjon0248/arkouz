"use client"
import React, { useMemo } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Palette, Home, Camera, Layout, PenTool } from "lucide-react"

import "swiper/css"

export const ServicesSection = React.memo(() => {
  const services = useMemo(
    () => [
      {
        name: "Arxitektura Loyihalash",
        icon: Building2,
        description: "Zamonaviy binolarni loyihalashtirish",
        features: ["3D Modellashtirish", "Texnik Chizmalar", "Konstruksiya Hisoblash"],
      },
      {
        name: "Ichki Dizayn",
        icon: Palette,
        description: "Interer va eksterer dizayni yaratish",
        features: ["Rang Palitra", "Mebel Tanlash", "Dekor Elementlari"],
      },
      {
        name: "Peyzaj Arxitekturasi",
        icon: Home,
        description: "Bog' va park zonalarini loyihalash",
        features: ["Landshaft Dizayni", "O'simliklar Tanlash", "Suv Elementlari"],
      },
      {
        name: "3D Vizualizatsiya",
        icon: Camera,
        description: "Fotorealistik 3D render va animatsiya",
        features: ["Render Yaratish", "Virtual Tur", "Animatsiya Video"],
      },
      {
        name: "Loyiha Boshqaruvi",
        icon: Layout,
        description: "Qurilish jarayonini nazorat qilish",
        features: ["Vaqt Rejasi", "Byudjet Nazorat", "Sifat Tekshiruv"],
      },
      {
        name: "Maslahat Xizmatlari",
        icon: PenTool,
        description: "Professional maslahat va yo'l-yo'riq",
        features: ["Texnik Ekspertiza", "Qonun Masalalari", "Investitsiya Tahlil"],
      },
    ],
    [],
  )

  return (
    <section id="services" className="py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Professional Xizmatlarim
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Arxitektura va dizayn sohasida to'liq spektr xizmatlarni taqdim etaman. Loyihaning boshlanishidan
            yakunlanishiga qadar professional yordam.
          </p>
        </div>

        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="max-w-7xl mx-auto"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <SwiperSlide key={index}>
                <Card className="group hover:shadow-2xl transition-all bg-transparent duration-500 hover:-translate-y-3 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-700/10 via-gray-600/10 to-gray-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-6 md:p-8 relative z-10">
                    <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 bg-gradient-to-br from-gray-700 via-gray-600 to-gray-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg">
                      <Icon className="h-8 w-8 md:h-10 md:w-10 text-white" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 text-center">{service.name}</h3>
                    <p className="text-gray-300 mb-4 md:mb-6 text-center leading-relaxed text-sm md:text-base">
                      {service.description}
                    </p>
                    <div className="space-y-2 md:space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-gray-200">
                          <div className="w-2 h-2 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-sm md:text-base">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
})

ServicesSection.displayName = "ServicesSection"
