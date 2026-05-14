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
    title: "田中監督作「近くて遠い親子」が第24回中之島映画祭にノミネート",
    description: "田中慎太郎監督作映画「近くて遠い親子」が第24回中之島映画祭にノミネートされました。",
    detailUrl: "https://www.youtube.com/watch?v=SPX7k8DsnIk",
    detailUrlText: "予告編はこちら",
  },
  {
    id: 6,
    date: "2026.03.29",
    category: "WORKS",
    title: "Ma'Scar'Piece『Showtime Ignition』MVを制作",
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
    title: "田中監督作品・短編映画「兄が仕事をやめた」がU-NEXTにて公開",
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
    <section id="news" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="flex items-center gap-2 sec-line-l">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#7a1a24]/55" />
              <div className="w-1.5 h-1.5 rotate-45 bg-[#7a1a24]/55 shrink-0" />
            </div>
            <h2 className="text-3xl font-bold tracking-widest sec-title">NEWS</h2>
            <div className="flex items-center gap-2 sec-line-r">
              <div className="w-1.5 h-1.5 rotate-45 bg-[#7a1a24]/55 shrink-0" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#7a1a24]/55" />
            </div>
          </div>
          <p className="text-lg text-gray-500 sec-subtitle">ニュース</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-3 sec-body">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="relative z-20 bg-white px-5 py-3 rounded-lg border border-[#e0d8ce] hover:border-[#c9a96e] hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-3">
                <div className="flex items-center gap-3 shrink-0">
                  <time className="text-xs text-gray-500 font-medium whitespace-nowrap">{item.date}</time>
                  <span className={`inline-block text-white text-xs px-2 py-0.5 rounded-full whitespace-nowrap ${item.category === "WORKS" ? "bg-[#7a1a24]" : "bg-gray-800"}`}>
                    {item.category}
                  </span>
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-gray-900 truncate">{item.title}</h3>
                  <p className="text-gray-500 text-xs truncate">{item.description}</p>
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

        <div className="mt-12 text-center sec-body">
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
