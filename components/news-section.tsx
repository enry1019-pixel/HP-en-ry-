"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface NewsItem {
  id: number
  date: string
  category: string
  title: string
  description: string
  detailUrl?: string
  detailUrlText?: string
  pdfUrl?: string
}

const newsItems: NewsItem[] = [
  {
    id: 7,
    date: "2026.05.02",
    category: "お知らせ",
    title: "田中慎太郎監督作映画「近くて遠い親子」が第24回中之島映画祭にノミネート。",
    description: "田中慎太郎監督作映画「近くて遠い親子」が第24回中之島映画祭にノミネートされました。",
    detailUrl: "https://www.youtube.com/watch?v=SPX7k8DsnIk",
    detailUrlText: "予告編はこちら",
  },
  {
    id: 6,
    date: "2026.03.29",
    category: "お知らせ",
    title: "Ma'Scar'Piece 12th Single『Showtime Ignition』ミュージックビデオを制作。",
    description: "ツインプラネット所属Ma'Scar'Piece 12th Single『Showtime Ignition』のミュージックビデオを弊社にて制作いたしました。",
    detailUrl: "https://www.youtube.com/watch?v=8AO0rZnAdqw",
    detailUrlText: "MVはこちら",
  },
  {
    id: 5,
    date: "2026.01.04",
    category: "お知らせ",
    title: "俳優ショーリール動画サービス「EN-REEL」制作開始",
    description: "映像名刺必須の時代にあなただけのプロフィール動画を制作いたします。",
    pdfUrl: "/en-reel-service.pdf",
  },
  {
    id: 4,
    date: "2025.11.10",
    category: "お知らせ",
    title: "田中監督作品・短編映画「兄が仕事をやめた」がU-NEXTにて公開。",
    description: "田中監督作品・短編映画「兄が仕事をやめた」がU-NEXTにて公開されました。",
    detailUrl: "https://www.youtube.com/watch?v=uIzrZ83JMjc",
  },
  {
    id: 1,
    date: "2025.10.24",
    category: "お知らせ",
    title: "株式会社en-ry　PV公開",
    description: "弊社紹介動画をYoutubeにて公開いたしました。",
    detailUrl: "https://youtu.be/Wi0mrLzSN5o?si=iL-DR__-pVE0k8fN",
  },
]

export default function NewsSection() {
  return (
    <section id="news" className="py-20 bg-lightgray relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">NEWS</h2>
          <p className="text-lg text-gray-500 mb-4">ニュース</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="relative z-20 bg-white p-6 rounded-lg border border-[#e0d8ce] hover:border-[#c9a96e] hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex items-center gap-4 md:w-1/3">
                  <time className="text-sm text-gray-500 font-medium whitespace-nowrap">{item.date}</time>
                  <span className="inline-block bg-charcoal-light text-white text-xs px-3 py-1 rounded-full whitespace-nowrap">
                    {item.category}
                  </span>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-lg font-bold text-charcoal-light mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                  {item.detailUrl && (
                    <a
                      href={item.detailUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 hover:underline transition-colors mr-4"
                    >
                      {item.detailUrlText || "Youtube動画はこちら"}
                    </a>
                  )}
                  {item.pdfUrl && (
                    <a
                      href={item.pdfUrl}
                      download
                      className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                    >
                      PDFダウンロードはこちら
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/news"
            className="inline-flex items-center bg-charcoal-light text-white px-6 py-3 hover:bg-charcoal transition-colors"
          >
            すべてのニュースを見る
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
