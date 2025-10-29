"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Tag, Instagram, Youtube } from "lucide-react"
import { RedThreadBackground } from "@/components/red-thread-background"

interface NewsItem {
  id: string
  date: string
  category: string
  title: string
  description: string
  image?: string
}

const newsItems: NewsItem[] = [
  {
    id: "1",
    date: "2025.01.15",
    category: "お知らせ",
    title: "新オフィス移転のお知らせ",
    description: "2025年2月より、新宿の新オフィスに移転いたします。",
    image: "/modern-office-building-tokyo.jpg",
  },
  {
    id: "2",
    date: "2025.01.10",
    category: "制作実績",
    title: "福井県観光PR動画を制作しました",
    description: "福井県の魅力を伝える観光PR動画の制作を担当させていただきました。",
    image: "/fukui-pr-thumbnail.jpg",
  },
  {
    id: "3",
    date: "2025.01.05",
    category: "イベント",
    title: "映像制作セミナーを開催します",
    description: "初心者向けの映像制作セミナーを2月に開催いたします。",
    image: "/video-production-seminar-workshop.jpg",
  },
  {
    id: "4",
    date: "2024.12.20",
    category: "お知らせ",
    title: "年末年始休業のお知らせ",
    description: "2024年12月28日〜2025年1月5日まで年末年始休業とさせていただきます。",
    image: "/new-year-celebration-japan.jpg",
  },
  {
    id: "5",
    date: "2024.12.15",
    category: "制作実績",
    title: "アーティストMV制作を担当しました",
    description: "人気アーティストの新曲MVの制作を担当させていただきました。",
    image: "/music-video-production-artist-performance.jpg",
  },
  {
    id: "6",
    date: "2024.12.01",
    category: "お知らせ",
    title: "新サービス「ドローン撮影プラン」開始",
    description: "ドローンを活用した空撮サービスを本格的に開始いたします。",
    image: "/drone-aerial-photography-cinematography.jpg",
  },
  {
    id: "7",
    date: "2024.11.20",
    category: "イベント",
    title: "映画祭にて作品が上映されました",
    description: "当社制作の短編映画が東京国際映画祭で上映されました。",
    image: "/film-festival-cinema-screening.jpg",
  },
  {
    id: "8",
    date: "2024.11.10",
    category: "制作実績",
    title: "企業研修動画を制作しました",
    description: "大手企業様の社内研修用動画を制作させていただきました。",
    image: "/corporate-training-video-business.jpg",
  },
]

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("すべて")

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const categories = ["すべて", ...Array.from(new Set(newsItems.map((item) => item.category)))]

  const filteredItems =
    selectedCategory === "すべて" ? newsItems : newsItems.filter((item) => item.category === selectedCategory)

  return (
    <div className="min-h-screen flex flex-col bg-lightgray relative">
      <RedThreadBackground />

      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl font-bold">en-ry</h1>
          </Link>

          <Link href="/#news" className="inline-flex items-center text-gray-600 hover:text-black transition-colors">
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
            <h1 className="text-4xl font-bold mb-4">ニュース一覧</h1>
            <p className="text-lg text-gray-600">株式会社en-ryの最新情報やお知らせをご覧いただけます</p>
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

          {/* News List */}
          <div className="max-w-4xl mx-auto space-y-6">
            {filteredItems.map((item) => (
              <Link
                key={item.id}
                href={`/news/${item.id}`}
                className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      <time>{item.date}</time>
                    </div>
                    <div className="flex items-center">
                      <Tag className="w-4 h-4 mr-1 text-charcoal-light" />
                      <span className="inline-block bg-charcoal-light text-white text-xs px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-charcoal-light mb-3 group-hover:text-charcoal transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  <div className="mt-4 text-charcoal-light font-medium text-sm group-hover:translate-x-2 transition-transform inline-block">
                    続きを読む →
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">該当するニュースがありません</p>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-charcoal-light text-white py-12 mt-auto relative z-10">
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
            <div className="flex items-center justify-center gap-4 mb-4">
              <a
                href="https://www.instagram.com/en_ry1023/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram className="w-8 h-8" />
              </a>
              <a
                href="https://www.youtube.com/@en-ry1023"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="YouTube"
              >
                <Youtube className="w-8 h-8" />
              </a>
            </div>
            <p className="text-gray-300 mb-4">幸せな今を縁"en"が導く─未来の記憶"memory"に</p>
            <p>&copy; 2023 en-ry All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
