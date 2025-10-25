"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { gsap } from "gsap"

const portfolioItems = [
  {
    id: 1,
    title: "クライアント名 1",
    slug: "client-1",
    category: "企業PR映像",
    year: "2023年",
    image: "/placeholder.svg?height=300&width=400&text=クライアント1",
  },
  {
    id: 2,
    title: "クライアント名 2",
    slug: "client-2",
    category: "商品プロモーション",
    year: "2023年",
    image: "/placeholder.svg?height=300&width=400&text=クライアント2",
  },
  {
    id: 3,
    title: "クライアント名 3",
    slug: "client-3",
    category: "イベント記録",
    year: "2023年",
    image: "/placeholder.svg?height=300&width=400&text=クライアント3",
  },
  {
    id: 4,
    title: "クライアント名 4",
    slug: "client-4",
    category: "企業PR映像",
    year: "2023年",
    image: "/placeholder.svg?height=300&width=400&text=クライアント4",
  },
  {
    id: 5,
    title: "クライアント名 5",
    slug: "client-5",
    category: "MV制作",
    year: "2023年",
    image: "/placeholder.svg?height=300&width=400&text=クライアント5",
  },
  {
    id: 6,
    title: "クライアント名 6",
    slug: "client-6",
    category: "ドラマ制作",
    year: "2023年",
    image: "/placeholder.svg?height=300&width=400&text=クライアント6",
  },
]

export default function PortfolioSlider() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const sliderWrapperRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // 無限ループのために配列を3倍に拡張（前後に複製を追加）
  const extendedPortfolioItems = [...portfolioItems, ...portfolioItems, ...portfolioItems]

  // 画面サイズの検出
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

  // 初期表示時に中央のセット（portfolioItems.length番目）から開始
  useEffect(() => {
    const initialIndex = portfolioItems.length
    setCurrentIndex(initialIndex)
    scrollToIndex(initialIndex, false)
  }, [isMobile])

  const scrollToIndex = (index: number, animate = true) => {
    const slider = sliderRef.current
    const wrapper = sliderWrapperRef.current

    if (slider && wrapper && isMobile) {
      // 基本的なアイテムサイズ - より小さく調整
      const baseItemWidth = wrapper.clientWidth * 0.8
      const gap = 16
      const wrapperWidth = wrapper.clientWidth

      // 中央に配置するための計算
      const centerOffset = wrapperWidth / 2 - baseItemWidth / 2
      const scrollPosition = index * (baseItemWidth + gap) - centerOffset

      if (animate) {
        setIsTransitioning(true)
        gsap.to(slider, {
          x: -scrollPosition,
          duration: 0.8,
          ease: "power2.inOut",
          onComplete: () => {
            setIsTransitioning(false)
            // 無限ループの処理
            handleInfiniteLoop(index)
          },
        })
      } else {
        gsap.set(slider, { x: -scrollPosition })
        setIsTransitioning(false)
      }
    }
  }

  const handleInfiniteLoop = (index: number) => {
    // 最初のセット（0 ~ portfolioItems.length-1）にいる場合、中央のセットに移動
    if (index < portfolioItems.length) {
      const newIndex = index + portfolioItems.length
      setCurrentIndex(newIndex)
      scrollToIndex(newIndex, false)
    }
    // 最後のセット（portfolioItems.length*2 ~ portfolioItems.length*3-1）にいる場合、中央のセットに移動
    else if (index >= portfolioItems.length * 2) {
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

  // デスクトップ表示（グリッド）
  if (!isMobile) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioItems.map((item) => (
          <div key={item.id} className="group relative overflow-hidden">
            <div className="h-64 bg-gray-100 relative flex items-center justify-center">
              <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
            </div>
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="text-center text-white p-4">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="mb-4">
                  {item.category} / {item.year}
                </p>
                <Link
                  href={`/portfolio/${item.slug}`}
                  className="inline-flex items-center text-white border border-white px-4 py-2 hover:bg-white hover:text-black transition-colors"
                >
                  詳細を見る
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  // モバイル表示（スライダー）
  const actualIndex = currentIndex % portfolioItems.length

  return (
    <div className="relative" ref={sliderWrapperRef}>
      {/* 左矢印ボタン */}
      <button
        onClick={handlePrev}
        disabled={isTransitioning}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="前へ"
      >
        <ChevronLeft className="w-5 h-5 text-charcoal-light" />
      </button>

      {/* スライダー */}
      <div className="overflow-hidden py-4">
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
                className={`bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md transition-all duration-700 ease-out ${
                  isCenter
                    ? "ring-2 ring-charcoal-light ring-opacity-30 shadow-xl transform scale-105 z-10"
                    : "opacity-75 transform scale-95 hover:opacity-90"
                }`}
                style={{
                  minWidth: "80%",
                  width: "80%",
                  flexShrink: 0,
                  transformOrigin: "center",
                  backfaceVisibility: "hidden",
                }}
              >
                <div className="h-48 bg-gray-100 relative">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {item.category} / {item.year}
                  </p>
                  <Link
                    href={`/portfolio/${item.slug}`}
                    className="inline-flex items-center text-charcoal-light hover:text-charcoal transition-colors"
                  >
                    詳細を見る
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* 右矢印ボタン */}
      <button
        onClick={handleNext}
        disabled={isTransitioning}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="次へ"
      >
        <ChevronRight className="w-5 h-5 text-charcoal-light" />
      </button>

      {/* インジケーター */}
      <div className="flex justify-center mt-6 gap-2">
        {portfolioItems.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (isTransitioning) return
              const newIndex = portfolioItems.length + index // 中央のセットのインデックス
              setCurrentIndex(newIndex)
              scrollToIndex(newIndex)
            }}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              actualIndex === index
                ? "bg-charcoal-light scale-125 shadow-md"
                : "bg-gray-300 hover:bg-gray-400 scale-100"
            }`}
            aria-label={`スライド ${index + 1} に移動`}
          />
        ))}
      </div>
    </div>
  )
}
