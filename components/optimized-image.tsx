"use client"
import React, { useState, useEffect, useRef, useCallback } from "react"

interface OptimizedImageProps {
  src: string
  alt: string
  className: string
  onClick?: (e: React.MouseEvent) => void
  priority?: boolean
  sizes?: string
  quality?: number
}

export const OptimizedImage = React.memo(
  ({ src, alt, className, onClick, priority = false, sizes = "100vw", quality = 75 }: OptimizedImageProps) => {
    const [imageLoaded, setImageLoaded] = useState(false)
    const [imageError, setImageError] = useState(false)
    const [isInView, setIsInView] = useState(priority)
    const [retryCount, setRetryCount] = useState(0)
    const imgRef = useRef<HTMLImageElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      if (priority) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsInView(true)
              observer.disconnect()
            }
          })
        },
        {
          rootMargin: "50px", // Start loading 50px before image comes into view
          threshold: 0.1,
        },
      )

      if (containerRef.current) {
        observer.observe(containerRef.current)
      }

      return () => observer.disconnect()
    }, [priority])

    useEffect(() => {
      if (priority && src) {
        const img = new Image()
        img.src = src
        img.onload = () => setImageLoaded(true)
        img.onerror = () => setImageError(true)
      }
    }, [priority, src])

    const handleImageError = useCallback(() => {
      if (retryCount < 2) {
        setRetryCount((prev) => prev + 1)
        // Force reload by adding timestamp
        if (imgRef.current) {
          const separator = src.includes("?") ? "&" : "?"
          imgRef.current.src = `${src}${separator}retry=${retryCount + 1}`
        }
      } else {
        setImageError(true)
      }
    }, [src, retryCount])

    const handleImageLoad = useCallback(() => {
      setImageLoaded(true)
      setImageError(false)
    }, [])

    const getOptimizedSrc = useCallback(
      (originalSrc: string) => {
        if (originalSrc.includes("placeholder.svg")) return originalSrc

        // For external images or if already optimized, return as is
        if (originalSrc.startsWith("http") || originalSrc.includes("?")) {
          return originalSrc
        }

        // Add optimization parameters for local images
        const separator = originalSrc.includes("?") ? "&" : "?"
        return `${originalSrc}${separator}q=${quality}&f=webp`
      },
      [quality],
    )

    const optimizedSrc = getOptimizedSrc(src)

    return (
      <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-pulse">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            </div>
          </div>
        )}

        {imageError && (
          <div className="absolute inset-0 bg-gray-800 flex flex-col items-center justify-center text-white">
            <div className="text-sm mb-2">Rasim yuklanmadi</div>
            <button
              onClick={() => {
                setImageError(false)
                setRetryCount(0)
                setImageLoaded(false)
              }}
              className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-xs transition-colors"
            >
              Qayta urinish
            </button>
          </div>
        )}

        {(isInView || priority) && (
          <img
            ref={imgRef}
            src={imageError ? "/placeholder.svg?height=400&width=600&query=architecture placeholder" : optimizedSrc}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            decoding={priority ? "sync" : "async"}
            sizes={sizes}
            className={`w-full h-full object-cover transition-all duration-700 ${
              imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
            onLoad={handleImageLoad}
            onError={handleImageError}
            onClick={onClick}
            style={{
              willChange: imageLoaded ? "auto" : "opacity, transform",
            }}
          />
        )}
      </div>
    )
  },
)

OptimizedImage.displayName = "OptimizedImage"
