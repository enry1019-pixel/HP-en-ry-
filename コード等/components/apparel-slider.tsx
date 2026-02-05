"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"

interface Product {
  id: number
  name: string
  slug: string
  category: string
  year: string
  image: string
}

const products: Product[] = [
  {
    id: 1,
    name: "en-ry オリジナルTシャツ",
    slug: "original-tshirt",
    category: "Tシャツ",
    year: "2023年",
    image: "/placeholder.svg?height=300&width=300&text=Tシャツ",
  },
  {
    id: 2,
    name: "ロゴ刺繍キャップ",
    slug: "logo-cap",
    category: "キャップ",
    year: "2023年",
    image: "/placeholder.svg?height=300&width=300&text=キャップ",
  },
  {
    id: 3,
    name: "レザーハンドバッグ",
    slug: "leather-handbag",
    category: "ハンドバッグ",
    year: "2023年",
    image: "/placeholder.svg?height=300&width=300&text=ハンドバッグ",
  },
  {
    id: 4,
    name: "カジュアルショルダーバッグ",
    slug: "casual-shoulder-bag",
    category: "ショルダーバッグ",
    year: "2023年",
    image: "/placeholder.svg?height=300&width=300&text=ショルダーバッグ",
  },
  {
    id: 5,
    name: "プレミアムTシャツ",
    slug: "premium-tshirt",
    category: "Tシャツ",
    year: "2023年",
    image: "/placeholder.svg?height=300&width=300&text=プレミアムT",
  },
  {
    id: 6,
    name: "スナップバックキャップ",
    slug: "snapback-cap",
    category: "キャップ",
    year: "2023年",
    image: "/placeholder.svg?height=300&width=300&text=スナップバック",
  },
]

export default function ApparelSlider() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const sliderWrapperRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // 無限ループのために配列を3倍に拡張（前後に複製を追加）
  const extendedProducts = [...products, ...products, ...products]

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

  // 初期表示時に中央のセット（products.length番目）から開始
  useEffect(() => {
    const initialIndex = products.length
    setCurrentIndex(initialIndex)
    scrollToIndex(initialIndex, false)
  }, [isMobile])

  const scrollToIndex = (index: number, animate = true) => {
    const slider = sliderRef.current
    const wrapper = sliderWrapperRef.current

    if (slider && wrapper && isMobile) {
      // 基本的なアイテムサイズ - より小さく調整
      const baseItemWidth = wrapper.clientWidth * 0.75
      const gap = 16
      const wrapperWidth = wrapper.clientWidth

      // 中央に配置するための計算
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
    // 最初のセット（0 ~ products.length-1）にいる場合、中央のセットに移動
    if (index < products.length) {
      const newIndex = index + products.length
      setCurrentIndex(newIndex)
      scrollToIndex(newIndex, false)
    }
    // 最後のセット（products.length*2 ~ products.length*3-1）にいる場合、中央のセットに移動
    else if (index >= products.length * 2) {
      const newIndex = index - products.length
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
        {products.map((product) => (
          <div key={product.id} className="group relative overflow-hidden">
            <div className="h-64 bg-gray-100 relative flex items-center justify-center">
              <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
            </div>
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="text-center text-white p-4">
                <h3 className="text-3xl font-bold mb-6">Coming Soon</h3>
                <Link
                  href={`/apparel/${product.slug}`}
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
  const actualIndex = currentIndex % products.length

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
          {extendedProducts.map((product, index) => {
            const isCenter = index === currentIndex
            return (
              <div
                key={`${product.name}-${index}`}
                className={`bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md transition-all duration-700 ease-out ${
                  isCenter
                    ? "ring-2 ring-charcoal-light ring-opacity-30 shadow-xl transform scale-105 z-10"
                    : "opacity-75 transform scale-95 hover:opacity-90"
                }`}
                style={{
                  minWidth: "75%",
                  width: "75%",
                  flexShrink: 0,
                  transformOrigin: "center",
                  backfaceVisibility: "hidden",
                }}
              >
                <div className="h-48 bg-gray-100 relative">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                </div>
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-2xl font-bold mb-4">Coming Soon</p>
                    <Link
                      href={`/apparel/${product.slug}`}
                      className="inline-flex items-center text-white border border-white px-4 py-2 hover:bg-white hover:text-black transition-colors"
                    >
                      詳細を見る
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
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
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (isTransitioning) return
              const newIndex = products.length + index // 中央のセットのインデックス
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
