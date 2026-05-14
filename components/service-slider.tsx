"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

const services = [
  {
    title: "広告・プロモーション・企業観光PR動画",
    slug: "promotion-pr",
    description: "企業のブランド価値を最大化する戦略的な映像制作をご提供致します。",
    image: "/fukui-pr-thumbnail.jpg",
  },
  {
    title: "メモリアルmovie制作",
    slug: "memorial-movie",
    description: "冠婚葬祭など人生の大切な瞬間を美しく記録する感動的な映像制作をご提供致します。",
    image: "/japanese-wedding-family-celebration-memories.jpg",
  },
  {
    title: "MV制作・アーティスト映像",
    slug: "music-video",
    description: "アーティスト自身や楽曲の魅力をMV映像で最大限引き出します。",
    image: "/mv-production-female-artist-filming.jpg",
  },
  {
    title: "映画・ドラマ制作",
    slug: "film-drama",
    description: "制作会社や映画監督と連携した本格的な映画やドラマ作品の企画・制作をご提供致します。",
    image: "/film-director-rear-view-no-face.jpg",
  },
]

export default function ServiceSlider() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const sliderWrapperRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  const extendedServices = [...services, ...services, ...services]

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  useEffect(() => {
    const initialIndex = services.length
    setCurrentIndex(initialIndex)
    scrollToIndex(initialIndex, false)
  }, [isMobile])

  const scrollToIndex = (index: number, animate = true) => {
    const slider = sliderRef.current
    const wrapper = sliderWrapperRef.current

    if (slider && wrapper) {
      const baseItemWidth = isMobile ? wrapper.clientWidth * 0.8 : 260
      const gap = 20
      const wrapperWidth = wrapper.clientWidth

      const centerOffset = wrapperWidth / 2 - baseItemWidth / 2
      const scrollPosition = index * (baseItemWidth + gap) - centerOffset

      if (animate) {
        setIsTransitioning(true)
        slider.style.transition = "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
        slider.style.transform = `translateX(-${scrollPosition}px)`

        setTimeout(() => {
          setIsTransitioning(false)
          handleInfiniteLoop(index)
        }, 800)
      } else {
        slider.style.transition = "none"
        slider.style.transform = `translateX(-${scrollPosition}px)`
        setIsTransitioning(false)
      }
    }
  }

  const handleInfiniteLoop = (index: number) => {
    if (index < services.length) {
      const newIndex = index + services.length
      setCurrentIndex(newIndex)
      scrollToIndex(newIndex, false)
    } else if (index >= services.length * 2) {
      const newIndex = index - services.length
      setCurrentIndex(newIndex)
      scrollToIndex(newIndex, false)
    }
  }

  const handlePrev = () => {
    if (isTransitioning) return
    const newIndex = currentIndex - 1
    setCurrentIndex(newIndex)
    scrollToIndex(newIndex)
  }

  const handleNext = () => {
    if (isTransitioning) return
    const newIndex = currentIndex + 1
    setCurrentIndex(newIndex)
    scrollToIndex(newIndex)
  }

  const actualIndex = currentIndex % services.length

  const handleCardClick = (index: number) => {
    if (isTransitioning) return
    if (index === currentIndex) return

    setCurrentIndex(index)
    scrollToIndex(index)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isMobile) return
    setTouchStart(e.targetTouches[0].clientX)
    setTouchEnd(e.targetTouches[0].clientX)
    setIsDragging(true)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isMobile || !isDragging) return
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!isMobile || !isDragging) return
    setIsDragging(false)

    const swipeDistance = touchStart - touchEnd
    const minSwipeDistance = 50

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        handleNext()
      } else {
        handlePrev()
      }
    }
  }

  return (
    <div className="relative" ref={sliderWrapperRef}>
      <button
        onClick={handlePrev}
        disabled={isTransitioning}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-[#faf7f2] rounded-full p-2 border border-[#d9cfc4] shadow-sm transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="前へ"
      >
        <ChevronLeft className="w-5 h-5 text-charcoal-light" />
      </button>

      <div
        className="overflow-hidden py-4"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          ref={sliderRef}
          className="flex gap-5 items-center"
          style={{
            willChange: "transform",
            backfaceVisibility: "hidden",
            perspective: "1000px",
          }}
        >
          {extendedServices.map((service, index) => {
            const isCenter = index === currentIndex
            return (
              <div
                key={`${service.title}-${index}`}
                onClick={() => handleCardClick(index)}
                className={`bg-white border p-5 transition-all duration-700 ease-out rounded-lg cursor-pointer ${
                  isCenter
                    ? "border-[#7a1a24]/30 shadow-xl transform scale-105 z-10"
                    : "border-[#e0d8ce] opacity-75 transform scale-95 hover:opacity-90"
                }`}
                style={{
                  minWidth: isMobile ? "80%" : "260px",
                  width: isMobile ? "80%" : "260px",
                  flexShrink: 0,
                  transformOrigin: "center",
                  backfaceVisibility: "hidden",
                }}
              >
                <div
                  className={`bg-gray-100 mb-4 relative transition-all duration-700 ease-out rounded overflow-hidden ${isCenter ? "h-44" : "h-36"}`}
                >
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                </div>
                <h3
                  className={`font-bold mb-3 transition-all duration-700 ease-out leading-tight ${isCenter ? "text-lg" : "text-base"}`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-gray-600 mb-4 transition-all duration-700 ease-out leading-relaxed line-clamp-4 ${isCenter ? "text-sm" : "text-xs"}`}
                >
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  onClick={(e) => e.stopPropagation()}
                  className={`text-charcoal-light inline-flex items-center transition-all duration-700 ease-out hover:text-charcoal group ${
                    isCenter ? "font-semibold text-sm" : "text-xs"
                  }`}
                >
                  詳細を見る
                  <ArrowRight className="ml-1 w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            )
          })}
        </div>
      </div>

      <button
        onClick={handleNext}
        disabled={isTransitioning}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-[#faf7f2] rounded-full p-2 border border-[#d9cfc4] shadow-sm transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="次へ"
      >
        <ChevronRight className="w-5 h-5 text-charcoal-light" />
      </button>

      <div className="flex justify-center mt-6 gap-2">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (isTransitioning) return
              const newIndex = services.length + index
              setCurrentIndex(newIndex)
              scrollToIndex(newIndex)
            }}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              actualIndex === index
                ? "bg-charcoal-light scale-125"
                : "bg-[#d9cfc4] hover:bg-[#c9b8aa] scale-100"
            }`}
            aria-label={`スライド ${index + 1} に移動`}
          />
        ))}
      </div>
    </div>
  )
}
