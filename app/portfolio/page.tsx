"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Play, X } from "lucide-react"
import { RedThreadBackground } from "@/components/red-thread-background"

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
    title: "『絶対零度のオアシス』",
    category: "違法薬物撲滅ドラマ",
    role: "監督",
    year: "2023年",
    videoId: "fhbUDHyBVW8",
    thumbnail: `https://img.youtube.com/vi/fhbUDHyBVW8/maxresdefault.jpg`,
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
  {
    id: 9,
    title: "劇薬",
    category: "映画",
    role: "監督・脚本・撮影・編集",
    year: "2024年",
    videoId: "CtSvHCdXivk",
    thumbnail: `https://img.youtube.com/vi/CtSvHCdXivk/maxresdefault.jpg`,
  },
  {
    id: 10,
    title: "福井県 観光地PR動画",
    category: "観光地PR",
    role: "監督・脚本",
    year: "2024年",
    videoId: "OuF0gG07TKk",
    thumbnail: `https://img.youtube.com/vi/OuF0gG07TKk/maxresdefault.jpg`,
  },
  {
    id: 11,
    title: "夏恋バケーション/花いろは",
    category: "MV",
    role: "監督・編集",
    year: "2024年",
    videoId: "MCGkxEmxJWQ",
    thumbnail: `https://img.youtube.com/vi/MCGkxEmxJWQ/maxresdefault.jpg`,
  },
  {
    id: 12,
    title: "桃色ジュテーム/花いろは",
    category: "MV",
    role: "監督",
    year: "2024年",
    videoId: "8DLmTeGNtlE",
    thumbnail: `https://img.youtube.com/vi/8DLmTeGNtlE/maxresdefault.jpg`,
  },
  {
    id: 13,
    title: "BIRTHDAY feat.掌幻/TONEMANIA",
    category: "MV",
    role: "監督",
    year: "2024年",
    videoId: "fIwdf8M9X0M",
    thumbnail: `https://img.youtube.com/vi/fIwdf8M9X0M/maxresdefault.jpg`,
  },
  {
    id: 14,
    title: "さわげ！うたげーしょん！/UtaGe!",
    category: "MV",
    role: "監督",
    year: "2024年",
    videoId: "81eV5XW62Ww",
    thumbnail: `https://img.youtube.com/vi/81eV5XW62Ww/maxresdefault.jpg`,
  },
  {
    id: 15,
    title: "「夏 Embrace」/花いろは",
    category: "MV",
    role: "監督・脚本・編集",
    year: "2025年",
    videoId: "vlBvWlyZ75I",
    thumbnail: `https://img.youtube.com/vi/vlBvWlyZ75I/maxresdefault.jpg`,
  },
  {
    id: 16,
    title: "「君が笑うから」/iRiNE",
    category: "MV",
    role: "監督・脚本・編集",
    year: "2025年",
    videoId: "TF-l_F6VXg0",
    thumbnail: `https://img.youtube.com/vi/TF-l_F6VXg0/maxresdefault.jpg`,
  },
  {
    id: 17,
    title: "株式会社en-ry　PV（long ver.）",
    category: "企業PR",
    role: "監督・編集",
    year: "2025年",
    videoId: "Wi0mrLzSN5o",
    thumbnail: `https://img.youtube.com/vi/Wi0mrLzSN5o/maxresdefault.jpg`,
  },
]

export default function PortfolioPage() {
  const [selectedVideo, setSelectedVideo] = useState<(typeof portfolioItems)[0] | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>("すべて")

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const categories = ["すべて", ...Array.from(new Set(portfolioItems.map((item) => item.category)))]

  const filteredItems =
    selectedCategory === "すべて" ? portfolioItems : portfolioItems.filter((item) => item.category === selectedCategory)

  const openVideoModal = (item: (typeof portfolioItems)[0]) => {
    setSelectedVideo(item)
  }

  const closeVideoModal = () => {
    setSelectedVideo(null)
  }

  return (
    <div className="min-h-screen flex flex-col bg-lightgray relative">
      <RedThreadBackground />

      <header className="sticky top-0 z-40 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo-final.png" alt="en-ry logo" width={32} height={32} className="object-contain" />
            <h1 className="text-2xl font-bold">en-ry</h1>
          </Link>

          <Link href="/#works" className="inline-flex items-center text-gray-600 hover:text-black transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            ホームに戻る
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">制作実績一覧</h1>
            <p className="text-lg text-gray-600">これまでに制作した映像作品をご覧いただけます</p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all ${
                  selectedCategory === category
                    ? "bg-charcoal-light text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => openVideoModal(item)}
              >
                <div className="h-64 bg-gray-100 relative">
                  <Image src={item.thumbnail || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white/90 rounded-full p-4">
                      <Play className="w-8 h-8 text-charcoal-light" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-charcoal-light text-white text-xs px-3 py-1 rounded-full">{item.category}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2 line-clamp-2">{item.title}</h3>
                  <p className="text-gray-600 mb-1">{item.year}</p>
                  <p className="text-sm text-gray-500">{item.role}</p>
                  {item.description && <p className="text-sm text-gray-500 mt-2">{item.description}</p>}
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">該当する作品がありません</p>
            </div>
          )}
        </div>
      </main>

      {/* Video Modal */}
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
              <h3 className="text-2xl font-bold mb-2">{selectedVideo.title}</h3>
              <p className="text-gray-300">
                {selectedVideo.category} / {selectedVideo.role} / {selectedVideo.year}
              </p>
              {selectedVideo.description && <p className="text-gray-300 mt-2">{selectedVideo.description}</p>}
            </div>
          </div>
        </div>
      )}

      <footer className="bg-charcoal-light text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex items-center">
                <Image
                  src="/logo-final.png"
                  alt="en-ry logo"
                  width={28}
                  height={28}
                  className="object-contain invert"
                />
              </div>
              <Link href="/" className="text-2xl font-bold">
                en-ry
              </Link>
            </div>
            <p className="text-gray-300 mb-4">幸せな今を縁"en"が導く─未来の記憶"memory"に</p>
            <p>&copy; 2025 en-ry All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
