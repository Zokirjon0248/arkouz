"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { Autoplay } from "swiper/modules"
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

import { motion, AnimatePresence } from "framer-motion";

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  ExternalLink,
  PenTool,
  Home,
  Building2,
  Instagram,
  MessageCircle,
  Menu,
  X,
  ChevronDown,
  Star,
  Award,
  Users,
  Coffee,
  ArrowUp,
  Palette,
  Layout,
  Camera,
} from "lucide-react"
import { Project } from "next/dist/build/swc"

export default function ArchitecturePortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      setShowScrollTop(window.scrollY > 500)

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
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const services = [
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
  ]



  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);


  const projects = [
    {
      title: "Zamonaviy Turar-joy Majmuasi",
      description:
        "120 xonadonlik ko'p qavatli turar-joy binosi. Ekologik toza materiallar va aqlli uy texnologiyalari.",
      category: "Turar-joy Arxitekturasi",
      area: "15,000 m²",
      year: "2024",
      client: "DevCorp Construction",
      tech: ["AutoCAD", "3ds Max", "SketchUp", "Lumion"],
      image: "/modern-residential-complex.png",
      featured: true,
      stats: { xonalar: "120", qavatlar: "12", maydon: "15k m²" },
      images: [
        "/modern-business-center-glass-facade.jpg",
        "/city-park-landscape-design-green-spaces.jpg",
        "/luxury-villa-interior-design-modern-classic.jpg",
        "/modern-residential-complex.png"
      ]
    },
    {
      title: "Biznes Markaz Loyihasi",
      description: "Zamonaviy ofis binosi va savdo majmuasi. Shisha fasad va barqaror dizayn yondashuv.",
      category: "Tijorat Arxitekturasi",
      area: "8,500 m²",
      year: "2023",
      client: "Business Plaza LLC",
      tech: ["Revit", "Rhino", "V-Ray", "Photoshop"],
      image: "/modern-business-center-glass-facade.jpg",
      featured: true,
      stats: { ofislar: "50+", dokonlar: "25", parking: "200" },
      images: [
        "/modern-business-center-glass-facade.jpg",
        "/city-park-landscape-design-green-spaces.jpg",
        "/luxury-villa-interior-design-modern-classic.jpg",
        "/modern-residential-complex.png"
      ]
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
      image: "/luxury-villa-interior-design-modern-classic.jpg",
      featured: false,
      stats: { xonalar: "8", hammomlar: "4", uslub: "Zamonaviy" },
      images: [
        "/modern-business-center-glass-facade.jpg",
        "/city-park-landscape-design-green-spaces.jpg",
        "/luxury-villa-interior-design-modern-classic.jpg",
        "/modern-residential-complex.png"
      ]
    },
    {
      title: "Shahar Parki Loyihasi",
      description: "10 gektar maydondagi shahar parki. Yashil zonalar, sport maydonlari va dam olish hududlari.",
      category: "Peyzaj Arxitekturasi",
      area: "10 gektar",
      year: "2022",
      client: "Toshkent Hokimligi",
      tech: ["SketchUp", "Lumion", "AutoCAD", "GIS"],
      image: "/city-park-landscape-design-green-spaces.jpg",
      featured: false,
      stats: { daraxtlar: "500+", yolaklar: "2km", hududlar: "15" },
      images: [
        "/modern-business-center-glass-facade.jpg",
        "/city-park-landscape-design-green-spaces.jpg",
        "/luxury-villa-interior-design-modern-classic.jpg",
        "/modern-residential-complex.png"
      ]
    },
  ]

  type Project = {
    title: string;
    description: string;
    category: string;
    area: string;
    year: string;
    client: string;
    tech: string[];
    image: string;
    featured: boolean;
    stats: Record<string, string | undefined>;
    images: string[];
  };




  const experience = [
    {
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
    },
    {
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
    },
    {
      title: "Yosh Arxitektor",
      company: "Creative Arch",
      period: "2019 - 2020",
      description: "Boshlang'ich darajada loyihalash va katta arxitektorlarga yordam berish.",
      achievements: [
        "CAD dasturlarini mukammal o'zlashtirish",
        "Loyiha hujjatlarini tayyorlash",
        "Qurilish maydonlarida tajriba",
      ],
    },
  ]

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }


  const bgImages = [
    "/city-park-landscape-design-green-spaces.jpg",
    "/modern-business-center-glass-facade.jpg",
    "/luxury-villa-interior-design-modern-classic.jpg",
    "/modern-residential-complex.jpg",
  ]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % bgImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])


  const vantaRef = useRef(null);

  useEffect(() => {
    let vantaEffect: any;
    if (vantaRef.current) {
      vantaEffect = NET({
        el: vantaRef.current,
        THREE,
        color: 0xffffff, // Chiziqlar rangi
        backgroundColor: 0x000000, // Fon rangi
          points: 18,             // nuqtalar soni optimal
        maxDistance: 22,        // chiziqlar uzunligi
        spacing: 15,            // nuqtalar orasidagi masofa
        showDots: true,           
      });
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);
  return (
    <div className="  min-h-screen relative  text-white pt-20">
      <div ref={vantaRef} className="absolute inset-0 -z-10 w-full h-full" />

        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={` backdrop-blur-sm fixed top-0 w-full z-50 transition-all duration-300 ${
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
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br rounded-xl flex items-center justify-center shadow-lg">
                  <img
                    src="/logo.png"
                    alt="Logo"
                    className="w-6 h-6 md:w-10 md:h-10 object-contain rounded-3xl"
                  />
                </div>
                <div>
                  <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r text-white bg-clip-text">
                    Arkouz
                  </h1>
                  <p className="text-xs text-white hidden sm:block">
                    Professional Arxitektor
                  </p>
                </div>
              </motion.div>

              {/* Desktop navigation */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="hidden lg:flex items-center gap-6 xl:gap-8"
              >
                {["about", "services", "experience", "projects", "contact"].map(
                  (item, index) => (
                    <motion.button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className={`capitalize transition-all duration-300 hover:text-white relative py-2 text-sm xl:text-base ${activeSection === item
                        ? "text-white font-medium"
                        : "text-stone-400"
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
                  )
                )}
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
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="lg:hidden absolute top-full left-0 w-full bg-stone-900/95 backdrop-blur-xl border-t border-stone-700 mt-2 rounded-b-2xl shadow-lg"
                >
                  <div className="flex flex-col space-y-1 px-6 py-6">
                    {["about", "services", "experience", "projects", "contact"].map(
                      (item) => (
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
                      )
                    )}
                  </div>
                </motion.div>
              )}
            </nav>
          </div>
        </motion.header>

        <section
          id="about"
          className="relative container mx-auto h-screen w-full overflow-hidden"
        >
          {/* Orqa fon carusel */}
          <div className="absolute inset-0 w-full h-full">
            <AnimatePresence mode="wait">
              <motion.img
                key={bgImages[index]}
                src={bgImages[index]}
                alt="background"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
            
          </div>

          {/* Kontent qismi */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Professional{" "}
              <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                Arko jamoasi
              </span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              5+ yillik tajriba bilan zamonaviy va funksional arxitektura
              yechimlarini yarataman. Turar-joy, tijorat va sanoat binolarini
              loyihalash, ichki dizayn va 3D vizualizatsiya xizmatlarini taqdim
              etaman.
            </p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12 px-4">
              <Badge className="bg-black text-white border border-white/30 px-3 md:px-4 py-1 md:py-2 text-sm md:text-base rounded-lg hover:bg-white hover:text-black transition-colors duration-300">
                <Building2 className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" /> Litsenziyali Arxitektor </Badge>  <Badge className="bg-black text-white border border-white/30 px-3 md:px-4 py-1 md:py-2 text-sm md:text-base rounded-lg hover:bg-white hover:text-black transition-colors duration-300"> <Star className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" /> 5+ Yil Tajriba </Badge>
            </div>
          </div>
        </section>

        <section id="services" className="py-16 md:py-20 lg:py-24 ">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
                Professional Xizmatlarim
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Arxitektura va dizayn sohasida to'liq spektr xizmatlarni taqdim etaman.
                Loyihaning boshlanishidan yakunlanishiga qadar professional yordam.
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
                320: { slidesPerView: 1 },  // telefon
                640: { slidesPerView: 2 },  // planshet
                1024: { slidesPerView: 3 }, // katta ekran
              }}
              className="max-w-7xl mx-auto"
            >
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <SwiperSlide key={index}>
                    <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-gray-700 bg-gray-900 relative overflow-hidden">
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

        {/* Enhanced Experience Section */}
        <section id="experience" className="py-16 md:py-20 lg:py-24 ">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
                Professional Tajribam
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                5 yillik professional faoliyat davomida turli xil loyihalarda ishladim
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-white via-gray-400 to-white rounded-full"></div>

                <div className="space-y-12 md:space-y-16">
                  {experience.map((exp, index) => (
                    <div key={index} className="relative flex items-center">
                      {/* Timeline dot */}
                      <div className="absolute left-4 md:left-1/2 w-4 h-4 md:w-6 md:h-6 bg-white rounded-full border-2 md:border-4 border-black shadow-xl transform -translate-x-1/2 z-10"></div>

                      <Card
                        className={`ml-16 md:ml-0 ${index % 2 === 0
                          ? "md:mr-auto md:w-5/12"
                          : "md:ml-auto md:w-5/12"
                          } hover:shadow-xl transition-all duration-300 border-gray-800 bg-gray-900`}
                      >
                        <CardHeader className="pb-4">
                          <div className="flex flex-col gap-2">
                            <CardTitle className="text-lg md:text-xl text-white">
                              {exp.title}
                            </CardTitle>
                            <Badge className="bg-white text-black font-medium w-fit text-xs md:text-sm">
                              {exp.period}
                            </Badge>
                          </div>
                          <CardDescription className="text-gray-400 font-medium text-sm md:text-base">
                            {exp.company}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-300 mb-4 leading-relaxed text-sm md:text-base">
                            {exp.description}
                          </p>
                          <div className="space-y-2">
                            <h4 className="font-semibold text-white text-sm md:text-base">
                              Asosiy yutuqlar:
                            </h4>
                            <ul className="space-y-1">
                              {exp.achievements.map((achievement, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start text-xs md:text-sm text-gray-400"
                                >
                                  <div className="w-1.5 h-1.5 bg-white rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Projects Section */}
        <section id="projects" className="py-16 md:py-20 lg:py-24 ">


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
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                >
                  <div className="w-full lg:w-1/2">
                    <div className="relative group">
                      <div className="absolute -inset-1 md:-inset-2  rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
                      <div className="relative cursor-pointer p-1 md:p-2 rounded-2xl shadow-xl">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-xl shadow-lg group-hover:scale-[1.02] transition-transform duration-500"
                          onClick={() => {
                            setSelectedProject(project);
                            setSelectedImage(project.image);
                            setIsOpen(true);
                          }}
                        />
                        {isOpen && selectedProject && (
                          <div
                            className="fixed inset-0 flex items-center justify-center z-50"
                            style={{
                              backgroundImage: `url(${selectedImage})`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                            }}
                          >
                            <div className="absolute inset-0 bg-black/70"></div>

                            <div className="relative  p-6 rounded-xl max-w-4xl w-full z-10">
                              <img
                                src={selectedImage}
                                alt={selectedProject.title}
                                className="w-full h-[400px] object-cover rounded-lg mb-4"
                              />

                              <div className="flex gap-2 overflow-x-auto">
                                {[selectedProject.image, ...(selectedProject.images || [])].map((img, i) => (
                                  <img
                                    key={i}
                                    src={img}
                                    onClick={() => setSelectedImage(img)}
                                    className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 transition 
              ${selectedImage === img ? "border-white" : "border-transparent"}`}
                                  />
                                ))}
                              </div>

                              <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                              >
                                ✕
                              </button>
                            </div>
                          </div>
                        )}

                        <div className="flex gap-2 mt-4 overflow-x-auto">

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
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* Enhanced Contact Section */}
        <section
          id="contact"
          className="py-16 md:py-20 lg:py-24  text-white relative overflow-hidden"
        >


          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                Loyihangizni Muhokama Qilamiz
              </h2>
              <p className="text-lg md:text-xl opacity-80 max-w-4xl mx-auto leading-relaxed px-4">
                Arxitektura va dizayn loyihalaringiz uchun professional maslahat va to‘liq xizmat.
                G‘oyalaringizni hayotga tatbiq etishda yordam beraman. Bepul konsultatsiya olish uchun bog‘laning.
              </p>
            </div>

            <div className="text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 px-4">
                {/* Telegram */}
                <Button
                  size="lg"
                  className="group relative overflow-hidden bg-white text-black hover:bg-gray-200 hover:scale-105 hover:-translate-y-1 transition-all duration-500 shadow-xl px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-bold rounded-xl border-0 w-full sm:w-auto"
                  asChild
                >
                  <a href="https://t.me/arko_uz" target="_blank" rel="noopener noreferrer">
                    <span className="relative z-10">Telegram</span>
                  </a>
                </Button>

                {/* Instagram */}
                <Button
                  size="lg"
                  className="group relative overflow-hidden bg-white text-black hover:bg-gray-200 hover:scale-105 hover:-translate-y-1 transition-all duration-500 shadow-xl px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-bold rounded-xl border-0 w-full sm:w-auto"
                  asChild
                >
                  <a
                    href="https://www.instagram.com/arko.uz?igsh=NzRrcWpnMHhndnU0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="relative z-10">Instagram</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 md:py-16 ">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">

              {/* Logo + Text */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10  rounded-xl flex items-center justify-center overflow-hidden">
                  <img
                    src="/logo.png"
                    alt="ArchDesign Logo"
                    className="w-10 h-10 object-contain rounded-4xl rounded-b-4xl"
                  />
                </div>

                <div>
                  <span className="text-lg md:text-xl font-bold tracking-wide">Arko.uz</span>
                  <p className="text-xs md:text-sm text-stone-400">Professional Arxitektor</p>
                </div>
              </div>

              {/* Right Text */}
              <div className="text-center md:text-right">
                <p className="text-stone-300 text-base md:text-lg">
                  © 2024 Professional Arxitektor Portfolio
                </p>
                <p className="text-stone-500 text-xs md:text-sm mt-1">
                  5+ yillik tajriba bilan professional arxitektura xizmatlari
                </p>
              </div>
            </div>
          </div>
        </footer>


        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="group fixed bottom-4 md:bottom-8 right-4 md:right-8 
             w-12 h-12 md:w-16 md:h-16 
             bg-black text-white 
             rounded-2xl shadow-2xl 
             hover:bg-white hover:text-black 
             transition-all duration-500 
             hover:scale-110 hover:-translate-y-2 
             z-50 border border-white/20"
          >
            <ArrowUp className="w-6 h-6 md:w-8 md:h-8 mx-auto group-hover:scale-110 transition-transform duration-300" />
          </button>

        )}
    </div >
  )
}
