"use client"
import type React from "react"
import { useState, useEffect, useRef, useMemo, useCallback } from "react"
import { FaTelegramPlane, FaInstagram } from "react-icons/fa"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"

import { motion, AnimatePresence } from "framer-motion"

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
  User,
  Briefcase,
  MessageSquare,
  ArrowRight,
} from "lucide-react"

const OptimizedImage = ({
  src,
  alt,
  className,
  onClick,
  priority = false,
}: {
  src: string
  alt: string
  className: string
  onClick?: (e: React.MouseEvent) => void
  priority?: boolean
}) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (priority && imgRef.current) {
      imgRef.current.loading = "eager"
    }
  }, [priority])

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
        </div>
      )}
      <img
        ref={imgRef}
        src={imageError ? "/placeholder.svg?height=400&width=600&query=architecture placeholder" : src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageError(true)}
        onClick={onClick}
      />
    </div>
  )
}

const BackgroundVideo = ({
  videoSrc,
  isActive,
  onLoad,
  onError,
}: {
  videoSrc: string
  isActive: boolean
  onLoad: () => void
  onError: () => void
}) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (videoRef.current && isActive) {
      videoRef.current.play().catch(() => {
        onError()
      })
    }
  }, [isActive, onError])

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
      onLoadedData={onLoad}
      onError={onError}
      onPlay={() => setIsPlaying(true)}
      onPause={() => setIsPlaying(false)}
      style={{
        transform: "scale(1.02)", // Slight scale to avoid edge artifacts
      }}
    >
      <source src={videoSrc} type="video/mp4" />
    </video>
  )
}

export default function OptimizedArchitecturePortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [activeSection, setActiveSection] = useState("about")
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const [mp4Error, setMp4Error] = useState(false)

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [currentImages, setCurrentImages] = useState<string[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)

  const backgroundVideos = [
    "/placeholder.mp4?query=modern architecture building construction",
    "/placeholder.mp4?query=luxury interior design showcase",
    "/placeholder.mp4?query=architectural blueprint and planning",
  ]

  const bgImages = [
    "/grup1.1.jpg",
    "/grup1.2.jpg",
    "/grup1.3.jpg",
    "/grup1.4.jpg",
    "/grup2.1.jpg",
    "/grup2.2.jpg",
    "/grup2.3.jpg",
    "/grup2.4.jpg",
  ]

  const handleScroll = useCallback((event?: Event) => {
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % backgroundVideos.length)
      setVideoLoaded(false)
    }, 15000) // Change video every 15 seconds

    return () => clearInterval(interval)
  }, [backgroundVideos.length])

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

  const openGallery = (images: string[], index: number) => {
    setCurrentImages(images)
    setCurrentIndex(index)
    setIsGalleryOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeGallery = () => {
    setIsGalleryOpen(false)
    document.body.style.overflow = "unset"
  }

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % currentImages.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length)
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="fixed inset-0 w-full h-full -z-10">
        {!videoLoaded && !videoError && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center">
            <div className="w-12 h-12 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
          </div>
        )}

        {!videoError && (
          <BackgroundVideo
            videoSrc={backgroundVideos[currentVideoIndex]}
            isActive={!videoError}
            onLoad={() => setVideoLoaded(true)}
            onError={() => setVideoError(true)}
          />
        )}

        {videoError && <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />}

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

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
            {[
              { name: "Bosh sahifa", href: "#home", icon: Home },
              { name: "Men haqimda", href: "#about", icon: User },
              { name: "Portfolio", href: "#portfolio", icon: Briefcase },
              { name: "Aloqa", href: "#contact", icon: MessageSquare },
            ].map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.1 }}
                className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-300"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </motion.a>
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
                {[
                  { name: "Bosh sahifa", href: "#home", icon: Home },
                  { name: "Men haqimda", href: "#about", icon: User },
                  { name: "Portfolio", href: "#portfolio", icon: Briefcase },
                  { name: "Aloqa", href: "#contact", icon: MessageSquare },
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors duration-300 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <section id="home" className="relative min-h-screen flex items-center justify-center">
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Professional{" "}
            <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Arko jamoasi
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed"
          >
            5+ yillik tajriba bilan zamonaviy va funksional arxitektura yechimlarini yarataman. Turar-joy, tijorat va
            sanoat binolarini loyihalash, ichki dizayn va 3D vizualizatsiya xizmatlarini taqdim etaman.
          </motion.p>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12"
          >
            <Badge className="bg-black/50 text-white border border-white/30 px-4 py-2 text-sm md:text-base rounded-lg hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm">
              <Building2 className="w-4 h-4 mr-2" /> Litsenziyali Arxitektor
            </Badge>
            <Badge className="bg-black/50 text-white border border-white/30 px-4 py-2 text-sm md:text-base rounded-lg hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm">
              <Star className="w-4 h-4 mr-2" /> 5+ Yil Tajriba
            </Badge>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
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
              className="border-white/30 text-white hover:bg-white hover:text-black px-8 py-3 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm bg-transparent"
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

      <section id="portfolio" className="relative py-20 bg-black/80 backdrop-blur-sm">
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
              navigation
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
                      priority={i < 4} // Prioritize first 4 images
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
            </Swiper>
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
                      <OptimizedImage
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-xl shadow-lg group-hover:scale-[1.02] transition-transform duration-500"
                        onClick={() => openGallery(project.images, 0)}
                        priority={index < 2}
                      />

                      {project.images.length > 1 && (
                        <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                          {project.images.slice(1).map((img, imgIndex) => (
                            <OptimizedImage
                              key={imgIndex}
                              src={img || "/placeholder.svg"}
                              alt={`${project.title} ${imgIndex + 2}`}
                              className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform flex-shrink-0"
                              onClick={() => openGallery(project.images, imgIndex + 1)}
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

      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
            onClick={closeGallery}
          >
            <div className="relative w-full h-full flex items-center justify-center p-4">
              {/* Close button */}
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
                onClick={closeGallery}
              >
                <X className="w-6 h-6" />
              </Button>

              {/* Navigation buttons */}
              <Button
                variant="ghost"
                size="sm"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
                onClick={(e) => {
                  e.stopPropagation()
                  prevImage()
                }}
              >
                <ChevronLeft className="w-8 h-8" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
                onClick={(e) => {
                  e.stopPropagation()
                  nextImage()
                }}
              >
                <ChevronRight className="w-8 h-8" />
              </Button>

              {/* Main image */}
              <motion.div
                key={currentIndex}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-full max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <OptimizedImage
                  src={currentImages[currentIndex]}
                  alt={`Gallery image ${currentIndex + 1}`}
                  className="max-w-full max-h-[90vh] object-contain rounded-lg"
                  priority={true}
                />
              </motion.div>

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-lg backdrop-blur-sm">
                {currentIndex + 1} / {currentImages.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
    </div>
  )
}
