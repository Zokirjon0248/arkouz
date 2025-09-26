"use client"
import React, { useMemo, useState, useEffect } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
export const ExperienceSection = React.memo(() => {
  const prefersReducedMotion = useReducedMotion()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: "50px" },
    )

    const section = document.getElementById("experience")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

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
        solidColor: "bg-blue-500",
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
        solidColor: "bg-purple-500",
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
        solidColor: "bg-green-500",
      },
    ],
    [],
  )

  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: prefersReducedMotion ? 0 : 0.15,
          delayChildren: 0.1,
        },
      },
    }),
    [prefersReducedMotion],
  )

  const itemVariants = useMemo(
    () => ({
      hidden: {
        opacity: 0,
        y: prefersReducedMotion ? 0 : 20,
        scale: prefersReducedMotion ? 1 : 0.95,
      },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: prefersReducedMotion ? 0.1 : 0.4,
          ease: "easeOut" as const
        }, 
      },
    }),
    [prefersReducedMotion],
  )

 const cardVariants = useMemo(
  () => ({
    hidden: { opacity: 0, y: 20 }, // 🔥 pastdan boshlanadi
    visible: {
      opacity: 1,
      y: 0, // 🔥 asl joyiga chiqadi
      transition: {
        duration: prefersReducedMotion ? 0.1 : 0.5,
        ease: "easeOut" as const,
      },
    },
  }),
  [prefersReducedMotion],
)


  return (
    <section id="experience" className="py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16 md:mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6"
          >
            Professional Tajribam
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            5 yillik professional faoliyat davomida turli xil loyihalarda ishladim
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-white/20 via-white/40 to-white/20 will-change-transform"></div>

            <motion.div
              className="space-y-12 md:space-y-16"
              variants={containerVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            >
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={cardVariants}
                  className="relative flex items-center will-change-transform"
                  style={{
                    transform: "translate3d(0, 0, 0)", // Force GPU acceleration
                  }}
                >
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 md:w-6 md:h-6 bg-white rounded-full border-2 md:border-4 border-gray-900 shadow-lg transform -translate-x-1/2 z-10 will-change-transform">
                    <div className={`absolute inset-1 rounded-full ${exp.solidColor} opacity-80`}></div>
                  </div>

                  <div
                    className={`ml-16 md:ml-0 ${
                      index % 2 === 0 ? "md:mr-auto md:w-5/12" : "md:ml-auto md:w-5/12"
                    } group`}
                  >
                    <Card className="border-0 bg-white/8 hover:bg-white/12 transition-colors duration-200 shadow-lg hover:shadow-xl will-change-transform">
                      <CardHeader className="pb-4">
                        <div className="flex flex-col gap-2">
                          <CardTitle className="text-lg md:text-xl text-white font-bold">{exp.title}</CardTitle>
                          <Badge
                            className={`${exp.solidColor} text-white font-medium w-fit text-xs md:text-sm border-0 shadow-sm`}
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
                              <div
                                key={idx}
                                className="flex items-start text-xs md:text-sm text-white/90 bg-white/5 rounded-lg p-3 hover:bg-white/8 transition-colors duration-150"
                              >
                                <div
                                  className={`w-2 h-2 ${exp.solidColor} rounded-full mr-3 mt-1.5 flex-shrink-0 opacity-80`}
                                ></div>
                                <span className="leading-relaxed">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
})

ExperienceSection.displayName = "ExperienceSection"
