"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface NewsItem {
  id: number
  date: string
  category: string
  title: string
  description: string
  link?: string
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    date: "2025.10.24",
    category: "お知らせ",
    title: "株式会社en-ry　PV公開",
    description: "弊社紹介動画をYoutubeにて公開いたしました。",
  },
  {
    id: 2,
    date: "2025.10.23",
    category: "お知らせ",
    title: "株式会社en-ry 設立",
    description: "株式会社en-ryを設立いたしました。",
  },
  {
    id: 3,
    date: "2025.10.17",
    category: "お知らせ",
    title: "弊社代表取締役・田中監督作品「おっさんの夏休み」ノミネート。",
    description:
      "田中監督作品「おっさんの夏休み」ゆうばり国際ファンタスティック映画祭2025短編部門にノミネートされました。",
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
              className="relative z-20 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200"
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
                  <p className="text-gray-600 text-sm">{item.description}</p>
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
