"use client"
import React, { useMemo } from "react"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { OptimizedImage } from "./optimized-image"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

interface PortfolioSectionProps {
  openGallery: (images: string[], index: number) => void
}

export const PortfolioSection = React.memo(({ openGallery }: PortfolioSectionProps) => {
  const bgImages = useMemo(
    () => [
      "/grup1.1.jpg",
      "/grup1.2.jpg",
      "/grup1.3.jpg",
      "/grup1.4.jpg",
      "/grup2.1.jpg",
      "/grup2.2.jpg",
      "/grup2.3.jpg",
      "/grup2.4.jpg",
    ],
    [],
  )

  return (
    <section id="portfolio" className="relative py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Mening{" "}
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Yaratgan loyihalarim va amalga oshirgan g'oyalarim
          </p>
        </motion.div>

        <div className="w-full max-w-7xl mx-auto">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            loop
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
              1280: { slidesPerView: 4, spaceBetween: 30 },
            }}
            className="portfolio-swiper"
          >
            {bgImages.map((src, i) => (
              <SwiperSlide key={src}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative group cursor-pointer"
                  onClick={() => openGallery(bgImages, i)}
                >
                  <OptimizedImage
                    src={src}
                    alt={`Portfolio loyihasi ${i + 1}`}
                    className="w-full h-64 md:h-80 rounded-xl shadow-2xl"
                    priority={i < 4}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-lg font-semibold mb-2">Loyiha {i + 1}</h3>
                      <p className="text-sm text-gray-300">Professional arxitektura yechimi</p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}

            {/* Custom prev/next tugmalar */}
            <div
              className="custom-prev absolute top-1/2 left-2 -translate-y-1/2 
                            w-6 h-6 md:w-8 md:h-8 lg:w-11 lg:h-11 
                            bg-black/50 rounded-full flex items-center justify-center text-white cursor-pointer z-10"
            >
              ‹
            </div>
            <div
              className="custom-next absolute top-1/2 right-2 -translate-y-1/2 
                            w-6 h-6 md:w-8 md:h-8 lg:w-11 lg:h-11 
                            bg-black/50 rounded-full flex items-center justify-center text-white cursor-pointer z-10"
            >
              ›
            </div>
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .portfolio-swiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
        }
        .portfolio-swiper .swiper-pagination-bullet-active {
          background: #f59e0b;
        }
        .portfolio-swiper .swiper-button-next,
        .portfolio-swiper .swiper-button-prev {
          color: white;
          background: rgba(0, 0, 0, 0.5);
          border-radius: 50%;
          width: 40px;
          height: 40px;
        }
        .portfolio-swiper .swiper-button-next:after,
        .portfolio-swiper .swiper-button-prev:after {
          font-size: 16px;
        }
      `}</style>
    </section>
  )
})

PortfolioSection.displayName = "PortfolioSection"
