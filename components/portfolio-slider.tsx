"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X, Play } from "lucide-react"

const portfolioItems = [
  {
    id: 1,
    title: "私たちの東京ストーリー",
    category: "TVドラマ",
    role: "現場執行監督",
    year: "2025年",
    videoId: "mUIHsU9DUAY",
    thumbnail: `https://img.youtube.com/vi/mUIHsU9DUAY/hqdefault.jpg`,
  },
  {
    id: 2,
    title: "おっさんの夏休み",
    category: "短編映画",
    role: "監督・脚本・撮影・編集",
    year: "2025年",
    description: "U-NEXTにて配信中",
    videoId: "Xk6PZaU43JE",
    thumbnail: `https://img.youtube.com/vi/Xk6PZaU43JE/maxresdefault.jpg`,
  },
  {
    id: 3,
    title: "苺キャンディ",
    category: "MV",
    role: "監督・脚本・編集",
    year: "2025年",
    videoId: "vnwuWPM-JVw",
    thumbnail: `https://img.youtube.com/vi/vnwuWPM-JVw/maxresdefault.jpg`,
  },
  {
    id: 4,
    title: "震災ドキュメンタリー番組",
    category: "ドキュメンタリー",
    role: "構成・演出・編集",
    year: "2021年",
    videoId: "EADBDIOrMX0",
    thumbnail: `https://img.youtube.com/vi/EADBDIOrMX0/hqdefault.jpg`,
  },
  {
    id: 5,
    title: "株式会社en-ry　PV（long ver.）",
    category: "企業PR",
    role: "監督・編集",
    year: "2025年",
    videoId: "Wi0mrLzSN5o",
    thumbnail: `https://img.youtube.com/vi/Wi0mrLzSN5o/maxresdefault.jpg`,
  },
  {
    id: 6,
    title: "近くて遠い親子",
    category: "映画",
    role: "監督・脚本・編集",
    year: "2023年",
    videoId: "SPX7k8DsnIk",
    thumbnail: `https://img.youtube.com/vi/SPX7k8DsnIk/maxresdefault.jpg`,
  },
  {
    id: 7,
    title: "いつか黄昏の空で/gusou十色",
    category: "MV",
    role: "監督・脚本・撮影・編集",
    year: "2022年",
    videoId: "Wt7nqe5ACIA",
    thumbnail: `https://img.youtube.com/vi/Wt7nqe5ACIA/maxresdefault.jpg`,
  },
  {
    id: 8,
    title: "『アッパレビバディ』/Appare!",
    category: "MV",
    role: "監督",
    year: "2022年",
    videoId: "6C7P_0Qv3pc",
    thumbnail: `https://img.youtube.com/vi/6C7P_0Qv3pc/maxresdefault.jpg`,
  },
]

export default function PortfolioSlider() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const sliderWrapperRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState<(typeof portfolioItems)[0] | null>(null)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  const extendedPortfolioItems = [...portfolioItems, ...portfolioItems, ...portfolioItems]

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
    const initialIndex = portfolioItems.length
    setCurrentIndex(initialIndex)
    scrollToIndex(initialIndex, false)
  }, [isMobile])

  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [selectedVideo])

  const scrollToIndex = (index: number, animate = true) => {
    const slider = sliderRef.current
    const wrapper = sliderWrapperRef.current

    if (slider && wrapper && isMobile) {
      const baseItemWidth = wrapper.clientWidth * 0.8
      const gap = 16
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
    if (index < portfolioItems.length) {
      const newIndex = index + portfolioItems.length
      setCurrentIndex(newIndex)
      scrollToIndex(newIndex, false)
    } else if (index >= portfolioItems.length * 2) {
      const newIndex = index - portfolioItems.length
      setCurrentIndex(newIndex)
      scrollToIndex(newIndex, false)
    }
  }

  const handlePrev = () => {
    if (isTransitioning || !isMobile) return
    const newIndex = currentIndex - 1
    setCurrentIndex(newIndex)
    scrollToIndex(newIndex)
  }

  const handleNext = () => {
    if (isTransitioning || !isMobile) return
    const newIndex = currentIndex + 1
    setCurrentIndex(newIndex)
    scrollToIndex(newIndex)
  }

  const openVideoModal = (item: (typeof portfolioItems)[0]) => {
    setSelectedVideo(item)
  }

  const closeVideoModal = () => {
    setSelectedVideo(null)
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
    const minSwipeDistance = 50 // Minimum distance to trigger swipe

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        // Swiped left - go to next
        handleNext()
      } else {
        // Swiped right - go to previous
        handlePrev()
      }
    }
  }

  if (!isMobile) {
    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden cursor-pointer"
              onClick={() => openVideoModal(item)}
            >
              <div className="h-64 bg-gray-900 relative flex items-center justify-center overflow-hidden">
                {/* Solid background layer */}
                <div className="absolute inset-0 bg-gray-900 z-0" />
                <Image
                  src={item.thumbnail || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover relative z-10"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                  <div className="bg-white/90 rounded-full p-4">
                    <Play className="w-8 h-8 text-charcoal-light" fill="currentColor" />
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-30">
                <div className="text-center text-white p-4">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="mb-2">
                    {item.category} / {item.year}
                  </p>
                  {item.description && <p className="text-sm mb-1">{item.description}</p>}
                  <p className="text-sm">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedVideo && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeVideoModal}
          >
            <button
              onClick={closeVideoModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
              aria-label="閉じる"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="mt-4 text-white text-center">
                <h3 className="text-2xl font-bold mb-2">{selectedVideo.title}</h3>
                <p className="text-gray-300">
                  {selectedVideo.category} / {selectedVideo.role} / {selectedVideo.year}
                </p>
              </div>
            </div>
          </div>
        )}
      </>
    )
  }

  const actualIndex = currentIndex % portfolioItems.length

  return (
    <>
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
            className="flex gap-4"
            style={{
              willChange: "transform",
              backfaceVisibility: "hidden",
            }}
          >
            {extendedPortfolioItems.map((item, index) => {
              const isCenter = index === currentIndex
              return (
                <div
                  key={`${item.title}-${index}`}
                  className={`bg-white border rounded-lg overflow-hidden transition-all duration-700 ease-out cursor-pointer ${
                    isCenter
                      ? "border-[#7a1a24]/30 shadow-xl transform scale-105 z-10"
                      : "border-[#e0d8ce] opacity-75 transform scale-95 hover:opacity-90"
                  }`}
                  style={{
                    minWidth: "80%",
                    width: "80%",
                    flexShrink: 0,
                    transformOrigin: "center",
                    backfaceVisibility: "hidden",
                  }}
                  onClick={() => openVideoModal(item)}
                >
                  <div className="h-48 bg-gray-900 relative overflow-hidden">
                    {/* Solid background layer */}
                    <div className="absolute inset-0 bg-gray-900 z-0" />
                    <Image
                      src={item.thumbnail || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover relative z-10"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center z-20">
                      <div className="bg-white/90 rounded-full p-3">
                        <Play className="w-6 h-6 text-charcoal-light" fill="currentColor" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-1">
                      {item.category} / {item.year}
                    </p>
                    {item.description && <p className="text-xs text-gray-500 mb-1">{item.description}</p>}
                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>
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
          {portfolioItems.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (isTransitioning) return
                const newIndex = portfolioItems.length + index
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

      {selectedVideo && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4" onClick={closeVideoModal}>
          <button
            onClick={closeVideoModal}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="閉じる"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="mt-4 text-white text-center">
              <h3 className="text-xl font-bold mb-2">{selectedVideo.title}</h3>
              <p className="text-gray-300 text-sm">
                {selectedVideo.category} / {selectedVideo.role} / {selectedVideo.year}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
