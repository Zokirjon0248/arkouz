"use client"
import React, { useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { OptimizedImage } from "./optimized-image"

interface GalleryModalProps {
  isOpen: boolean
  images: string[]
  currentIndex: number
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

export const GalleryModal = React.memo(
  ({ isOpen, images, currentIndex, onClose, onNext, onPrev }: GalleryModalProps) => {
    const handleKeyDown = useCallback(
      (e: KeyboardEvent) => {
        if (!isOpen) return

        switch (e.key) {
          case "Escape":
            onClose()
            break
          case "ArrowLeft":
            onPrev()
            break
          case "ArrowRight":
            onNext()
            break
        }
      },
      [isOpen, onClose, onNext, onPrev],
    )

    useEffect(() => {
      document.addEventListener("keydown", handleKeyDown)
      return () => document.removeEventListener("keydown", handleKeyDown)
    }, [handleKeyDown])

    useEffect(() => {
      if (isOpen && images.length > 1) {
        const preloadImage = (src: string) => {
          const img = new Image()
          img.src = src
        }

        // Preload next and previous images
        const nextIndex = (currentIndex + 1) % images.length
        const prevIndex = (currentIndex - 1 + images.length) % images.length

        preloadImage(images[nextIndex])
        preloadImage(images[prevIndex])
      }
    }, [isOpen, images, currentIndex])

    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
            onClick={onClose}
          >
            <div className="relative w-full h-full flex items-center justify-center p-4">
              {/* Close button */}
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
                onClick={onClose}
              >
                <X className="w-6 h-6" />
              </Button>

              {/* Navigation buttons */}
              {images.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
                    onClick={(e) => {
                      e.stopPropagation()
                      onPrev()
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
                      onNext()
                    }}
                  >
                    <ChevronRight className="w-8 h-8" />
                  </Button>
                </>
              )}

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
                  src={images[currentIndex]}
                  alt={`Gallery image ${currentIndex + 1}`}
                  className="max-w-full max-h-[90vh] object-contain rounded-lg"
                  priority={true}
                  quality={90}
                  sizes="90vw"
                />
              </motion.div>

              {/* Image counter */}
              {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-lg backdrop-blur-sm">
                  {currentIndex + 1} / {images.length}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    )
  },
)

GalleryModal.displayName = "GalleryModal"
