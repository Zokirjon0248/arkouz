"use client"
import { FaTelegramPlane, FaInstagram } from "react-icons/fa"
import type React from "react"

import "swiper/css"
import "swiper/css/navigation"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css/navigation"

import { motion, AnimatePresence } from "framer-motion"

import { useState, useEffect, useMemo, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  PenTool,
  Home,
  Building2,
  X,
  Menu,
  Star,
  ArrowUp,
  Palette,
  Layout,
  Camera,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

export default function OptimizedArchitecturePortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [activeSection, setActiveSection] = useState("about")
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const [mp4Error, setMp4Error] = useState(false)

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY
    setScrollY(currentScrollY)
    setShowScrollTop(currentScrollY > 500)

    const sections = ["about", "services", "experience", "projects", "contact"]
    const currentSection = sections.find((section) => {
      const element = document.getElementById(section)
      if (element) {
        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      }
      return false
    })
    if (currentSection) setActiveSection(currentSection)
  }, [])

  useEffect(() => {
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", throttledScroll, { passive: true })
    return () => window.removeEventListener("scroll", throttledScroll)
  }, [handleScroll])

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

  const projects = useMemo(
    () => [
      {
        title: "Zamonaviy Turar-joy Majmuasi",
        description:
          "120 xonadonlik ko'p qavatli turar-joy binosi. Ekologik toza materiallar va aqlli uy texnologiyalari.",
        category: "Turar-joy Arxitekturasi",
        area: "15,000 m²",
        year: "2024",
        client: "DevCorp Construction",
        tech: ["AutoCAD", "3ds Max", "SketchUp", "Lumion"],
        image: "/grup1.1.jpg",
        featured: true,
        stats: { xonalar: "120", qavatlar: "12", maydon: "15k m²" },
        images: ["/grup1.1.jpg", "/grup1.2.jpg", "/grup1.3.jpg", "/grup1.4.jpg", "/grup1.5.jpg"],
      },
      {
        title: "Biznes Markaz Loyihasi",
        description: "Zamonaviy ofis binosi va savdo majmuasi. Shisha fasad va barqaror dizayn yondashuv.",
        category: "Tijorat Arxitekturasi",
        area: "8,500 m²",
        year: "2023",
        client: "Business Plaza LLC",
        tech: ["Revit", "Rhino", "V-Ray", "Photoshop"],
        image: "/grup2.1.jpg",
        featured: true,
        stats: { ofislar: "50+", dokonlar: "25", parking: "200" },
        images: ["/grup2.1.jpg", "/grup2.2.jpg", "/grup2.3.jpg", "/grup2.4.jpg"],
      },
      {
        title: "Villa Interer Dizayni",
        description:
          "Hashamatli villa uchun to'liq ichki dizayn. Zamonaviy va klassik uslublarning uyg'un kombinatsiyasi.",
        category: "Ichki Dizayn",
        area: "450 m²",
        year: "2023",
        client: "Shaxsiy Mijoz",
        tech: ["3ds Max", "Corona Renderer", "Photoshop", "AutoCAD"],
        image: "/grup3.1.jpg",
        featured: false,
        stats: { xonalar: "8", hammomlar: "4", uslub: "Zamonaviy" },
        images: ["/grup3.1.jpg", "/grup3.2.jpg"],
      },
      {
        title: "Shahar Parki Loyihasi",
        description: "10 gektar maydondagi shahar parki. Yashil zonalar, sport maydonlari va dam olish hududlari.",
        category: "Peyzaj Arxitekturasi",
        area: "10 gektar",
        year: "2022",
        client: "Toshkent Hokimligi",
        tech: ["SketchUp", "Lumion", "AutoCAD", "GIS"],
        image: "/grup4.1.jpg",
        featured: false,
        stats: { daraxtlar: "500+", yolaklar: "2km", hududlar: "15" },
        images: ["/grup4.1.jpg", "/grup4.2.jpg", "/grup4.3.jpg", "/grup4.4.jpg"],
      },
      {
        title: "Shahar Parki Loyihasi",
        description: "10 gektar maydondagi shahar parki. Yashil zonalar, sport maydonlari va dam olish hududlari.",
        category: "Peyzaj Arxitekturasi",
        area: "10 gektar",
        year: "2022",
        client: "Toshkent Hokimligi",
        tech: ["SketchUp", "Lumion", "AutoCAD", "GIS"],
        image: "/grup5.1.jpg",
        featured: false,
        stats: { daraxtlar: "500+", yolaklar: "2km", hududlar: "15" },
        images: ["/grup5.1.jpg", "/grup5.2.jpg", "/grup5.3.jpg", "/grup5.4.jpg", "/grup5.5.jpg"],
      },
      {
        title: "Shahar Parki Loyihasi",
        description: "10 gektar maydondagi shahar parki. Yashil zonalar, sport maydonlari va dam olish hududlari.",
        category: "Peyzaj Arxitekturasi",
        area: "10 gektar",
        year: "2022",
        client: "Toshkent Hokimligi",
        tech: ["SketchUp", "Lumion", "AutoCAD", "GIS"],
        image: "/grup6.1.jpg",
        featured: false,
        stats: { daraxtlar: "500+", yolaklar: "2km", hududlar: "15" },
        images: ["/grup6.1.jpg", "/grup6.2.jpg", "/grup6.3.jpg", "/grup6.4.jpg", "/grup6.5.jpg", "/grup6.6.jpg"],
      },
    ],
    [],
  )

  type Project = {
    title: string
    description: string
    category: string
    area: string
    year: string
    client: string
    tech: string[]
    image: string
    featured: boolean
    stats: Record<string, string | undefined>
    images: string[]
  }

  const experience = useMemo(
    () => [
      {
        id: 1,
        title: "Katta Arxitektor",
        company: "ArchStudio Pro",
        period: "2022 - Hozir",
        description:
          "Yirik turar-joy va tijorat loyihalarini boshqarish. Jamoani yo'naltirish va mijozlar bilan ishlash.",
        achievements: [
          "25+ loyihani muvaffaqiyatli yakunlash",
          "Yangi dizayn standartlarini joriy etish",
          "Yosh arxitektorlarni o'qitish",
        ],
        color: "from-blue-500 to-cyan-500",
        bgColor: "bg-blue-50",
        textColor: "text-blue-900",
      },
      {
        id: 2,
        title: "Arxitektor",
        company: "Design Solutions",
        period: "2020 - 2022",
        description:
          "Turli xil arxitektura loyihalarida ishtirok etish. 3D vizualizatsiya va texnik hujjatlar tayyorlash.",
        achievements: [
          "30+ villa loyihasini yaratish",
          "3D rendering bo'yicha malaka oshirish",
          "Mijozlar bilan to'g'ridan-to'g'ri ishlash",
        ],
        color: "from-purple-500 to-pink-500",
        bgColor: "bg-purple-50",
        textColor: "text-purple-900",
      },
      {
        id: 3,
        title: "Yosh Arxitektor",
        company: "Creative Arch",
        period: "2019 - 2020",
        description: "Boshlang'ich darajada loyihalash va katta arxitektorlarga yordam berish.",
        achievements: [
          "CAD dasturlarini mukammal o'zlashtirish",
          "Loyiha hujjatlarini tayyorlash",
          "Qurilish maydonlarida tajriba",
        ],
        color: "from-green-500 to-emerald-500",
        bgColor: "bg-green-50",
        textColor: "text-green-900",
      },
    ],
    [],
  )

  const scrollToSection = useCallback((sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }, [])

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const bgImages = useMemo(
    () => [
      "/grup1.1.jpg",
      "/grup1.2.jpg",
      "/grup1.3.jpg",
      "/grup1.4.jpg",
      "/grup1.5.jpg",
      "/grup2.1.jpg",
      "/grup2.2.jpg",
      "/grup2.3.jpg",
      "/grup2.4.jpg",
      "/grup3.1.jpg",
      "/grup3.2.jpg",
      "/grup4.1.jpg",
      "/grup4.2.jpg",
      "/grup4.3.jpg",
      "/grup4.4.jpg",
      "/grup5.1.jpg",
      "/grup5.2.jpg",
      "/grup5.3.jpg",
      "/grup5.4.jpg",
      "/grup5.5.jpg",
      "/grup6.1.jpg",
      "/grup6.2.jpg",
      "/grup6.3.jpg",
      "/grup6.4.jpg",
      "/grup6.5.jpg",
      "/grup6.6.jpg",
    ],
    [],
  )

  const [isModalOpen, setModalOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentImages, setCurrentImages] = useState<string[]>([])
  const [galleryMode, setGalleryMode] = useState<"all" | "project">("all")

  const changeSlide = useCallback(
    (direction: number) => {
      setCurrentIndex((prev) => (prev + direction + currentImages.length) % currentImages.length)
    },
    [currentImages.length],
  )

  const openAllImagesGallery = useCallback(() => {
    setCurrentImages(bgImages)
    setCurrentIndex(0)
    setGalleryMode("all")
    setModalOpen(true)
  }, [bgImages])

  const openProjectGallery = useCallback((project: Project, startIndex = 0) => {
    setCurrentImages(project.images)
    setCurrentIndex(startIndex)
    setGalleryMode("project")
    setModalOpen(true)
  }, [])

  const [isOpen, setIsOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalOpen(false)
      if (e.key === "ArrowLeft") changeSlide(-1)
      if (e.key === "ArrowRight") changeSlide(1)
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [changeSlide])

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }
  }, [isModalOpen])

  const backgroundVideos = useMemo(
    () => [
      "https://www.youtube.com/embed/khVfTDZQ7FY?autoplay=1&mute=1&loop=1&playlist=khVfTDZQ7FY&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1",
    ],
    [],
  )

  const mp4Videos = useMemo(() => ["/background-video.mp4", "/architecture-bg.mp4", "/building-video.mp4"], [])

  const [currentVideoIndex] = useState(() => Math.floor(Math.random() * backgroundVideos.length))
  const [currentMp4Index] = useState(() => Math.floor(Math.random() * mp4Videos.length))

  const ImageWithSkeleton = ({
    src,
    alt,
    className,
    onClick,
    loading = "lazy",
  }: {
    src: string
    alt: string
    className: string
    onClick?: (e: React.MouseEvent) => void
    loading?: "lazy" | "eager"
  }) => {
    const [imageError, setImageError] = useState(false)

    return (
      <img
        src={imageError ? "/placeholder.svg?height=400&width=600&query=architecture placeholder" : src}
        alt={alt}
        loading={loading}
        className={className}
        onError={() => setImageError(true)}
        onClick={onClick}
        style={{ aspectRatio: "16/9" }}
      />
    )
  }

  return (
    <div className="min-h-screen relative text-white pt-20">
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        {!videoLoaded && !videoError && !mp4Error && (
          <div className="absolute inset-0 bg-black flex items-center justify-center">
            <div className="w-12 h-12 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
          </div>
        )}

        {!videoError && !mp4Error && (
          <iframe
            src={backgroundVideos[currentVideoIndex]}
            className={`w-full h-full object-cover transition-opacity duration-1000 ${
              videoLoaded ? "opacity-100" : "opacity-0"
            }`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            onLoad={() => setVideoLoaded(true)}
            onError={() => {
              console.log("[v0] YouTube video failed, trying MP4 fallback")
              setVideoError(true)
              setVideoLoaded(true)
            }}
            style={{
              pointerEvents: "none",
              transform: "scale(1.5)",
              transformOrigin: "center center",
            }}
          />
        )}

        {videoError && !mp4Error && (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            onError={() => {
              console.log("[v0] MP4 video failed, using black background")
              setMp4Error(true)
            }}
            onLoadedData={() => {
              console.log("[v0] MP4 video loaded successfully")
              setVideoLoaded(true)
            }}
          >
            <source src={mp4Videos[currentMp4Index]} type="video/mp4" />
          </video>
        )}

        {videoError && mp4Error && (
          <div className="w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-800" />
        )}
      </div>

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`backdrop-blur-sm fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? "shadow-lg py-2" : "py-3 md:py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between relative">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex items-center space-x-2 md:space-x-3"
            >
              <img
                src="/IMG_0184.png"
                alt="Logo"
                className="w-6 h-6 md:w-10 md:h-10 object-contain rounded-2xl"
                loading="eager"
              />
              <div>
                <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r text-white bg-clip-text">Arko.uz</h1>
                <p className="text-xs text-white hidden sm:block">Professional Arxitektor</p>
              </div>
            </motion.div>

            {/* Desktop navigation */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden lg:flex items-center gap-6 xl:gap-8"
            >
              {["about", "services", "experience", "projects", "contact"].map((item, index) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className={`capitalize transition-all duration-300 hover:text-white relative py-2 text-sm xl:text-base ${
                    activeSection === item ? "text-white font-medium" : "text-stone-400"
                  }`}
                >
                  {item === "about"
                    ? "Men haqimda"
                    : item === "services"
                      ? "Xizmatlar"
                      : item === "experience"
                        ? "Tajriba"
                        : item === "projects"
                          ? "Loyihalar"
                          : "Aloqa"}
                  {activeSection === item && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-white to-white rounded-full"></div>
                  )}
                </motion.button>
              ))}
            </motion.div>

            {/* Mobile button */}
            <motion.button
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 md:p-3 rounded-xl hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 transition-all duration-300 border border-transparent hover:border-amber-200 hover:shadow-md"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 md:w-6 md:h-6 text-white" />
              ) : (
                <Menu className="w-5 h-5 md:w-6 md:h-6 text-white" />
              )}
            </motion.button>

            {/* Mobile menu */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="lg:hidden absolute top-full left-0 w-full bg-stone-900/95 backdrop-blur-xl border-t border-stone-700 mt-2 rounded-b-2xl shadow-lg"
                >
                  <div className="flex flex-col space-y-1 px-6 py-6">
                    {["about", "services", "experience", "projects", "contact"].map((item) => (
                      <button
                        key={item}
                        onClick={() => {
                          scrollToSection(item)
                          setIsMenuOpen(false)
                        }}
                        className="text-left py-3 px-3 rounded-xl hover:bg-stone-800 transition-all duration-300 text-base font-medium text-white"
                      >
                        {item === "about"
                          ? "Men haqimda"
                          : item === "services"
                            ? "Xizmatlar"
                            : item === "experience"
                              ? "Tajriba"
                              : item === "projects"
                                ? "Loyihalar"
                                : "Aloqa"}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>
        </div>
      </motion.header>

      <section id="about" className="relative container mx-auto h-screen w-full overflow-hidden">
        {/* Kontent qismi */}
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
                      <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 text-center">
                        {service.name}
                      </h3>
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

      <section id="experience" className="py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 md:mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6"
            >
              Professional Tajribam
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4"
            >
              5 yillik professional faoliyat davomida turli xil loyihalarda ishladim
            </motion.p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-white/20 via-white/60 to-white/20"></div>

              <div className="space-y-12 md:space-y-16">
                {experience.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.2,
                      ease: "easeOut",
                    }}
                    className="relative flex items-center"
                  >
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 md:w-6 md:h-6 bg-white rounded-full border-2 md:border-4 border-gray-900 shadow-lg transform -translate-x-1/2 z-10">
                      <div
                        className={`absolute inset-1 rounded-full bg-gradient-to-r ${exp.color} animate-pulse`}
                      ></div>
                    </div>

                    <div
                      className={`ml-16 md:ml-0 ${
                        index % 2 === 0 ? "md:mr-auto md:w-5/12" : "md:ml-auto md:w-5/12"
                      } group`}
                    >
                      <Card className="border-0 bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] transform-gpu">
                        <CardHeader className="pb-4">
                          <div className="flex flex-col gap-2">
                            <CardTitle className="text-lg md:text-xl text-white font-bold">{exp.title}</CardTitle>
                            <Badge
                              className={`bg-gradient-to-r ${exp.color} text-white font-medium w-fit text-xs md:text-sm border-0 shadow-md`}
                            >
                              {exp.period}
                            </Badge>
                          </div>
                          <CardDescription className="text-white/90 font-semibold text-sm md:text-base">
                            {exp.company}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <p className="text-white/80 leading-relaxed text-sm md:text-base">{exp.description}</p>

                          <div className="space-y-3">
                            <h4 className="font-semibold text-white text-sm md:text-base flex items-center">
                              <Star className="w-4 h-4 mr-2 text-yellow-400" />
                              Asosiy yutuqlar:
                            </h4>
                            <div className="grid gap-2">
                              {exp.achievements.map((achievement, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                                  className="flex items-start text-xs md:text-sm text-white/90 bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors duration-200"
                                >
                                  <div
                                    className={`w-2 h-2 bg-gradient-to-r ${exp.color} rounded-full mr-3 mt-1.5 flex-shrink-0`}
                                  ></div>
                                  <span className="leading-relaxed">{achievement}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
              Eng Yaxshi Loyihalarim
            </h2>
            <p className="text-lg md:text-xl text-stone-400 max-w-3xl mx-auto px-4">
              Professional faoliyatim davomida yaratgan eng muvaffaqiyatli loyihalar
            </p>
          </div>

          <div className="w-full max-w-5xl mx-auto py-6 mb-16">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={10}
              slidesPerView={1}
              loop
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              onClick={openAllImagesGallery}
              className="cursor-pointer"
            >
              {bgImages.map((src, i) => (
                <SwiperSlide key={src}>
                  <ImageWithSkeleton
                    src={src || "/placeholder.svg"}
                    alt={`rasm-${i}`}
                    className="w-full h-64 object-cover rounded-xl shadow-lg cursor-pointer transition-transform hover:scale-105"
                    onClick={(e) => {
                      e.stopPropagation()
                      setCurrentImages(bgImages)
                      setCurrentIndex(i)
                      setGalleryMode("all")
                      setModalOpen(true)
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <AnimatePresence>
              {isModalOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/95 flex items-center justify-center z-50"
                >
                  <button
                    onClick={() => setModalOpen(false)}
                    className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors z-10 flex items-center gap-2"
                  >
                    <X className="w-4 h-4" />
                    Yopish
                  </button>

                  <button
                    onClick={() => changeSlide(-1)}
                    className="absolute left-6 text-white p-3 rounded-full bg-black/60 hover:bg-black/80 transition-colors z-10 flex items-center justify-center"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </button>

                  <div className="flex flex-col items-center max-w-[90vw] max-h-[90vh]">
                    <motion.div
                      key={currentIndex}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="max-w-full max-h-[80vh]"
                    >
                      <ImageWithSkeleton
                        src={currentImages[currentIndex] || "/placeholder.svg"}
                        alt={`rasm-${currentIndex}`}
                        className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                        loading="eager"
                      />
                    </motion.div>

                    <div className="mt-4 text-white text-center">
                      <p className="text-lg font-medium">
                        {currentIndex + 1} / {currentImages.length}
                      </p>
                      <p className="text-sm text-gray-300 mt-1">
                        {galleryMode === "all" ? "Barcha rasmlar" : "Loyiha rasmlari"}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => changeSlide(1)}
                    className="absolute right-6 text-white p-3 rounded-full bg-black/60 hover:bg-black/80 transition-colors z-10 flex items-center justify-center"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="space-y-16 md:space-y-20 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="relative group">
                    <div className="absolute -inset-1 md:-inset-2 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
                    <div className="relative cursor-pointer p-1 md:p-2 rounded-2xl shadow-xl">
                      <ImageWithSkeleton
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-xl shadow-lg group-hover:scale-[1.02] transition-transform duration-500"
                        onClick={() => openProjectGallery(project, 0)}
                      />

                      {project.images.length > 1 && (
                        <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                          {project.images.slice(1).map((img, imgIndex) => (
                            <ImageWithSkeleton
                              key={imgIndex}
                              src={img || "/placeholder.svg"}
                              alt={`${project.title} ${imgIndex + 2}`}
                              className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform flex-shrink-0"
                              onClick={() => openProjectGallery(project, imgIndex + 1)}
                            />
                          ))}
                        </div>
                      )}

                      {project.featured && (
                        <Badge className="absolute top-4 md:top-6 left-4 md:left-6 bg-white text-black shadow-lg text-xs md:text-sm">
                          <Star className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                          Tanlangan
                        </Badge>
                      )}
                      <div className="absolute top-4 md:top-6 right-4 md:right-6 bg-white/90 backdrop-blur-sm px-2 md:px-3 py-1 rounded-full">
                        <span className="text-xs md:text-sm font-medium text-stone-700">{project.year}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
                  <div>
                    <Badge className="bg-amber-100 text-amber-800 mb-3 md:mb-4 text-xs md:text-sm">
                      {project.category}
                    </Badge>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-stone-200 mb-3 md:mb-4">
                      {project.title}
                    </h3>
                    <p className="text-base md:text-lg lg:text-xl text-stone-400 mb-4 md:mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                      <div>
                        <h4 className="font-semibold text-stone-400 mb-1 text-sm md:text-base">Mijoz</h4>
                        <p className="text-stone-200 text-sm md:text-base">{project.client}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-stone-400 mb-1 text-sm md:text-base">Maydon</h4>
                        <p className="text-stone-200 text-sm md:text-base">{project.area}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="border-amber-200 text-amber-700 hover:bg-amber-50 px-2 md:px-3 py-1 text-xs md:text-sm"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {project.stats && (
                    <div className="flex flex-wrap gap-4 md:gap-6 lg:gap-8 py-4 md:py-6 border-t border-stone-200">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-xl md:text-2xl lg:text-3xl font-bold text-stone-100">{value}</div>
                          <div className="text-xs md:text-sm text-stone-200 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
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

      <footer className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden">
                <img
                  src="/IMG_0184.png"
                  alt="Logo"
                  className="w-6 h-6 md:w-10 md:h-10 object-contain rounded-2xl"
                  loading="lazy"
                />
              </div>

              <div>
                <span className="text-lg md:text-xl font-bold tracking-wide">Arko.uz</span>
                <p className="text-xs md:text-sm text-stone-400">Professional Arxitektor</p>
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-stone-300 text-base md:text-lg">© 2024 Professional Arxitektor Portfolio</p>
              <p className="text-stone-500 text-xs md:text-sm mt-1">
                5+ yillik tajriba bilan professional arxitektura xizmatlari
              </p>
            </div>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
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
    </div>
  )
}
