"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Tag } from "lucide-react"
import { RedThreadBackground } from "@/components/red-thread-background"

interface NewsItem {
  id: string
  date: string
  category: string
  title: string
  description: string
  image?: string
  detailUrl?: string
  detailUrlText?: string
  pdfUrl?: string
}

const newsItems: NewsItem[] = [
  {
    id: "7",
    date: "2026.05.02",
    category: "お知らせ",
    title: "田中慎太郎監督作映画「近くて遠い親子」が第24回中之島映画祭にノミネート。",
    description: "田中慎太郎監督作映画「近くて遠い親子」が第24回中之島映画祭にノミネートされました。",
    detailUrl: "https://www.youtube.com/watch?v=SPX7k8DsnIk",
    detailUrlText: "予告編はこちら",
  },
  {
    id: "6",
    date: "2026.03.29",
    category: "お知らせ",
    title: "Ma'Scar'Piece 12th Single『Showtime Ignition』ミュージックビデオを制作。",
    description: "ツインプラネット所属Ma'Scar'Piece 12th Single『Showtime Ignition』のミュージックビデオを弊社にて制作いたしました。",
    detailUrl: "https://www.youtube.com/watch?v=8AO0rZnAdqw",
    detailUrlText: "MVはこちら",
  },
  {
    id: "5",
    date: "2026.01.04",
    category: "お知らせ",
    title: "俳優ショーリール動画サービス「EN-REEL」制作開始",
    description: "映像名刺必須の時代にあなただけのプロフィール動画を制作いたします。",
    pdfUrl: "/en-reel-service.pdf",
  },
  {
    id: "4",
    date: "2025.11.10",
    category: "お知らせ",
    title: "田中監督作品・短編映画「兄が仕事をやめた」がU-NEXTにて公開",
    description: "田中監督作品・短編映画「兄が仕事をやめた」がU-NEXTにて公開されました。",
    image: "/film-screening-announcement.jpg",
    detailUrl: "https://www.youtube.com/watch?v=uIzrZ83JMjc",
  },
  {
    id: "1",
    date: "2025.10.24",
    category: "お知らせ",
    title: "株式会社en-ry　PV公開",
    description: "弊社紹介動画をYoutubeにて公開いたしました。",
    image: "/company-promotional-video-youtube.jpg",
    detailUrl: "https://youtu.be/Wi0mrLzSN5o?si=iL-DR__-pVE0k8fN",
  },
  {
    id: "2",
    date: "2025.10.23",
    category: "お知らせ",
    title: "株式会社en-ry 設立",
    description: "株式会社en-ryを設立いたしました。",
    image: "/company-establishment-celebration.jpg",
  },
  {
    id: "3",
    date: "2025.10.17",
    category: "お知らせ",
    title: "田中監督作品「おっさんの夏休み」ノミネート。",
    description:
      "田中監督作品「おっさんの夏休み」ゆうばり国際ファンタスティック映画祭2025短編部門にノミネートされました。",
    image: "/film-festival-nomination-award.jpg",
    detailUrl: "https://youtu.be/Xk6PZaU43JE?si=tx9cbqaagUaj88Ip",
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
    <div className="min-h-screen flex flex-col bg-background relative">

      <header className="sticky top-0 z-50 bg-[#faf7f2]/95 backdrop-blur-sm border-b border-[#d9cfc4]">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo-final.png"
              alt="株式会社en-ry（エンリー）"
              width={32}
              height={32}
              className="object-contain"
            />
            <h1 className="text-2xl font-bold text-[#1a1a1a]">en-ry</h1>
          </Link>

          <Link href="/#news" className="inline-flex items-center text-gray-600 hover:text-[#7a1a24] transition-colors">
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
            <p className="text-lg text-gray-400">株式会社en-ryの最新情報やお知らせをご覧いただけます</p>
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
              <div
                key={item.id}
                className="block bg-white rounded-lg border border-[#e0d8ce] hover:border-[#7a1a24]/40 hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      <time>{item.date}</time>
                    </div>
                    <div className="flex items-center">
                      <Tag className="w-4 h-4 mr-1 text-charcoal-light" />
                      <span className="inline-block bg-gray-800 text-white text-xs px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-[#1a1a1a] mb-3">{item.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-3">{item.description}</p>
                  {item.detailUrl && (
                    <div className="mt-4">
                      <a
                        href={item.detailUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                      >
                        {item.detailUrlText || "Youtube動画はこちら"}
                      </a>
                    </div>
                  )}
                  {item.pdfUrl && (
                    <div className="mt-4">
                      <a
                        href={item.pdfUrl}
                        download
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                      >
                        PDFダウンロードはこちら
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">該当するニュースがありません</p>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-[#3d0a10] text-white py-12 mt-auto relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex items-center">
                <Image
                  src="/logo-final.png"
                  alt="株式会社en-ry（エンリー）"
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
