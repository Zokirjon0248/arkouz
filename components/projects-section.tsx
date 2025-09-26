"use client"
import React, { useMemo } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import { OptimizedImage } from "./optimized-image"

interface Project {
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

interface ProjectsSectionProps {
  openGallery: (images: string[], index: number) => void
}

export const ProjectsSection = React.memo(({ openGallery }: ProjectsSectionProps) => {
  const projects: Project[] = useMemo(
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
    ],
    [],
  )

  return (
    <section id="projects" className="py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">Eng Yaxshi Loyihalarim</h2>
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
  )
})

ProjectsSection.displayName = "ProjectsSection"
