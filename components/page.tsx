"use client"
import { useState, useEffect, useCallback } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ExperienceSection } from "@/components/experience-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "./contact-secton"
import { Footer } from "@/components/footer"
import { GalleryModal } from "@/components/gallery-modal"
import { ScrollToTop } from "./scrol-to-top"
import { BackgroundVideo } from "./backgrount-video"

export default function OptimizedArchitecturePortfolio() {
  const [scrollY, setScrollY] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [activeSection, setActiveSection] = useState("about")

  const [currentImages, setCurrentImages] = useState<string[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)

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

  const scrollToSection = useCallback((sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }, [])

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const openGallery = useCallback((images: string[], index: number) => {
    setCurrentImages(images)
    setCurrentIndex(index)
    setIsGalleryOpen(true)
    document.body.style.overflow = "hidden"
  }, [])

  const closeGallery = useCallback(() => {
    setIsGalleryOpen(false)
    document.body.style.overflow = "unset"
  }, [])

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % currentImages.length)
  }, [currentImages.length])

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length)
  }, [currentImages.length])

  return (
    <div className="min-h-screen text-white overflow-x-hidden relative">
      <BackgroundVideo />

      <Header scrollToSection={scrollToSection} />

      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ExperienceSection />
      <PortfolioSection openGallery={openGallery} />
      <ProjectsSection openGallery={openGallery} />
      <ContactSection />
      <Footer />

      <ScrollToTop show={showScrollTop} onClick={scrollToTop} />

      <GalleryModal
        isOpen={isGalleryOpen}
        images={currentImages}
        currentIndex={currentIndex}
        onClose={closeGallery}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </div>
  )
}
