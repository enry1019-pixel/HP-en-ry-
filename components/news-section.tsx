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
    id: 9,
    date: "2026.06.06",
    category: "WORKS",
    title: "ReelShort独占配信ドラマ『パパはトップスター⁉︎』に参加しました！",
    description: "ReelShort配信のショートドラマ『パパはトップスター⁉︎〜未婚シンママの秘密〜』に制作協力・演出助手として参加いたしました。",
    detailUrl: "https://www.reelshort.com/ja/movie/%E3%83%91%E3%83%91%E3%81%AF%E3%83%88%E3%83%83%E3%83%97%E3%82%B9%E3%82%BF%E3%83%BC-%EF%B8%8E-%E6%9C%AA%E5%A9%9A%E3%82%B7%E3%83%B3%E3%83%9E%E3%83%9E%E3%81%AE%E7%A7%98%E5%AF%86-6a179da4de9211208c080f90",
    detailUrlText: "作品はこちら",
  },
  {
    id: 8,
    date: "2026.05.20",
    category: "WORKS",
    title: "UtaGe!最新MV『すーぱーUtaGe!砲』の制作に携わりました",
    description: "UtaGe!『すーぱーUtaGe!砲』のミュージックビデオに制作協力・ラインプロデューサーとして参加いたしました。",
    detailUrl: "https://www.youtube.com/watch?v=WQnmozAtck4",
    detailUrlText: "MVはこちら",
  },
  {
    id: 7,
    date: "2026.05.02",
    category: "お知らせ",
    title: "ノミネート！田中監督「近くて遠い親子」が中之島映画祭へ",
    description: "田中慎太郎監督作映画「近くて遠い親子」が第24回中之島映画祭にノミネートされました。",
    detailUrl: "https://www.youtube.com/watch?v=SPX7k8DsnIk",
    detailUrlText: "予告編はこちら",
  },
  {
    id: 6,
    date: "2026.03.29",
    category: "WORKS",
    title: "Ma'Scar'Piece MV『Showtime Ignition』を制作いたしました",
    description: "ツインプラネット所属Ma'Scar'Piece 12th Single『Showtime Ignition』のミュージックビデオを弊社にて制作いたしました。",
    detailUrl: "https://www.youtube.com/watch?v=8AO0rZnAdqw",
    detailUrlText: "MVはこちら",
  },
  {
    id: 5,
    date: "2026.01.04",
    category: "お知らせ",
    title: "俳優の映像名刺、作ります。新サービス「EN-REEL」スタート！",
    description: "映像名刺必須の時代にあなただけのプロフィール動画を制作いたします。",
    pdfUrl: "/en-reel-service.pdf",
  },
  {
    id: 4,
    date: "2025.11.10",
    category: "お知らせ",
    title: "U-NEXTで公開中！短編映画「兄が仕事をやめた」",
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

function isThisMonth(dateStr: string) {
  const [year, month] = dateStr.split(".").map(Number)
  const now = new Date()
  return year === now.getFullYear() && month === (now.getMonth() + 1)
}

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
          <p className="text-lg text-gray-500 sec-subtitle">話題の最新作・お知らせ</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-3 sec-body">
          {newsItems.slice(0, 5).map((item) => (
            <div
              key={item.id}
              className="relative z-20 bg-white px-5 py-3 rounded-lg border border-[#e0d8ce] hover:border-[#c9a96e] hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-8">
                <div className="flex items-center gap-3 shrink-0 md:w-52">
                  <time className="text-xs text-gray-500 font-medium whitespace-nowrap">{item.date}</time>
                  <span className={`inline-block text-white text-xs px-2 py-0.5 rounded-full whitespace-nowrap ${item.category === "WORKS" ? "bg-[#7a1a24]" : "bg-gray-800"}`}>
                    {item.category}
                  </span>
                  {isThisMonth(item.date) && (
                    <span className="inline-block text-[10px] font-bold text-[#7a1a24] border border-[#7a1a24] px-1.5 py-0.5 rounded tracking-widest">
                      NEW
                    </span>
                  )}
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
