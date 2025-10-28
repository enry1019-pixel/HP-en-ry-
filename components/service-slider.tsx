"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

const services = [
  {
    title: "広告・プロモーション・企業観光PR動画",
    slug: "promotion-pr",
    description:
      "企業のブランド価値を最大化する戦略的な映像制作。商品・サービスの魅力を効果的に伝え、観光地の魅力をダイナミックに表現します。マーケティング効果を重視した企画から撮影、編集まで一貫してサポートいたします。",
    image: "/fukui-pr-thumbnail.jpg", // Updated to use the Fukui PR thumbnail image
  },
  {
    title: "メモリアルmovie制作",
    slug: "memorial-movie",
    description:
      "人生の大切な瞬間を美しく記録する感動的な映像制作。冠婚葬祭用ムービーから、故人を偲ぶメモリアルムービーまで、心に残る作品を丁寧に制作します。ご家族の想いを大切にした温かみのある映像をお届けします。",
    image: "/japanese-wedding-family-celebration-memories.jpg",
  },
  {
    title: "MV制作・アーティスト映像",
    slug: "music-video",
    description:
      "ミュージシャン、アイドル、俳優、モデル、お笑い芸人など、様々なアーティストの世界観を映像で表現。楽曲の魅力を最大限に引き出す演出と、アーティストの個性を活かした創造性豊かなミュージックビデオを制作します。",
    image: "/japanese-music-artist-performance-stage.jpg",
  },
  {
    title: "映画・ドラマ制作",
    slug: "film-drama",
    description:
      "制作会社や映画監督と連携した本格的な映像作品の企画・制作。脚本開発から撮影、ポストプロダクションまで、プロフェッショナルチームによる高品質な作品作りをサポート。監督の創造的ビジョンを忠実に映像化します。",
    image: "/film-director-rear-view-no-face.jpg",
  },
]

export default function ServiceSlider() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const sliderWrapperRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // 無限ループのために配列を3倍に拡張（前後に複製を追加）
  const extendedServices = [...services, ...services, ...services]

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

  // 初期表示時に中央のセット（services.length番目）から開始
  useEffect(() => {
    const initialIndex = services.length
    setCurrentIndex(initialIndex)
    scrollToIndex(initialIndex, false)
  }, [isMobile])

  const scrollToIndex = (index: number, animate = true) => {
    const slider = sliderRef.current
    const wrapper = sliderWrapperRef.current

    if (slider && wrapper) {
      // 基本的なアイテムサイズ - より小さく調整
      const baseItemWidth = isMobile ? wrapper.clientWidth * 0.8 : 260
      const gap = 20
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
    // 最初のセット（0 ~ services.length-1）にいる場合、中央のセットに移動
    if (index < services.length) {
      const newIndex = index + services.length
      setCurrentIndex(newIndex)
      scrollToIndex(newIndex, false)
    }
    // 最後のセット（services.length*2 ~ services.length*3-1）にいる場合、中央のセットに移動
    else if (index >= services.length * 2) {
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

  // インジケーター用の実際のインデックス（0-3の範囲）
  const actualIndex = currentIndex % services.length

  const handleCardClick = (index: number) => {
    if (isTransitioning) return
    if (index === currentIndex) return // Already centered

    setCurrentIndex(index)
    scrollToIndex(index)
  }

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
                className={`bg-white border border-gray-200 p-5 hover:shadow-xl transition-all duration-700 ease-out rounded-lg cursor-pointer ${
                  isCenter
                    ? "ring-2 ring-charcoal-light ring-opacity-30 shadow-xl transform scale-105 z-10"
                    : "opacity-75 transform scale-95 hover:opacity-90"
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
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (isTransitioning) return
              const newIndex = services.length + index // 中央のセットのインデックス
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
