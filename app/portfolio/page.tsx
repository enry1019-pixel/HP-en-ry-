"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Play, X } from "lucide-react"
import { RedThreadBackground } from "@/components/red-thread-background"

const enryItems = [
  {
    id: 1,
    title: "Ma'Scar'Piece 12th Single「Showtime Ignition」",
    category: "MV",
    role: "企画構成・監督・撮影・編集",
    year: "2026/03/29",
    videoId: "8AO0rZnAdqw",
    thumbnail: "https://img.youtube.com/vi/8AO0rZnAdqw/maxresdefault.jpg",
  },
]

const directorItems = [
  {
    id: 1,
    title: "私たちの東京ストーリー",
    category: "TVドラマ",
    role: "現場執行監督",
    year: "2025年",
    videoId: "mUIHsU9DUAY",
    thumbnail: "https://img.youtube.com/vi/mUIHsU9DUAY/hqdefault.jpg",
  },
  {
    id: 2,
    title: "おっさんの夏休み",
    category: "短編映画",
    role: "監督・脚本・撮影・編集",
    year: "2025年",
    description: "U-NEXTにて配信中",
    videoId: "Xk6PZaU43JE",
    thumbnail: "https://img.youtube.com/vi/Xk6PZaU43JE/maxresdefault.jpg",
  },
  {
    id: 3,
    title: "苺キャンディ",
    category: "MV",
    role: "監督・脚本・編集",
    year: "2025年",
    videoId: "vnwuWPM-JVw",
    thumbnail: "https://img.youtube.com/vi/vnwuWPM-JVw/maxresdefault.jpg",
  },
  {
    id: 4,
    title: "震災ドキュメンタリー番組",
    category: "ドキュメンタリー",
    role: "構成・演出・編集",
    year: "2021年",
    videoId: "EADBDIOrMX0",
    thumbnail: "https://img.youtube.com/vi/EADBDIOrMX0/hqdefault.jpg",
  },
  {
    id: 5,
    title: "『絶対零度のオアシス』",
    category: "違法薬物撲滅ドラマ",
    role: "監督",
    year: "2023年",
    videoId: "fhbUDHyBVW8",
    thumbnail: "https://img.youtube.com/vi/fhbUDHyBVW8/maxresdefault.jpg",
  },
  {
    id: 6,
    title: "近くて遠い親子",
    category: "映画",
    role: "監督・脚本・編集",
    year: "2023年",
    videoId: "SPX7k8DsnIk",
    thumbnail: "https://img.youtube.com/vi/SPX7k8DsnIk/maxresdefault.jpg",
  },
  {
    id: 7,
    title: "いつか黄昏の空で/gusou十色",
    category: "MV",
    role: "監督・脚本・撮影・編集",
    year: "2022年",
    videoId: "Wt7nqe5ACIA",
    thumbnail: "https://img.youtube.com/vi/Wt7nqe5ACIA/maxresdefault.jpg",
  },
  {
    id: 8,
    title: "『アッパレビバディ』/Appare!",
    category: "MV",
    role: "監督",
    year: "2022年",
    videoId: "6C7P_0Qv3pc",
    thumbnail: "https://img.youtube.com/vi/6C7P_0Qv3pc/maxresdefault.jpg",
  },
  {
    id: 9,
    title: "劇薬",
    category: "映画",
    role: "監督・脚本・撮影・編集",
    year: "2022年",
    videoId: "CtSvHCdXivk",
    thumbnail: "https://img.youtube.com/vi/CtSvHCdXivk/maxresdefault.jpg",
  },
  {
    id: 10,
    title: "福井県 観光地PR動画",
    category: "観光地PR",
    role: "監督・脚本",
    year: "2024年",
    videoId: "OuF0gG07TKk",
    thumbnail: "https://img.youtube.com/vi/OuF0gG07TKk/maxresdefault.jpg",
  },
  {
    id: 11,
    title: "夏恋バケーション/花いろは",
    category: "MV",
    role: "監督・編集",
    year: "2022年",
    videoId: "MCGkxEmxJWQ",
    thumbnail: "https://img.youtube.com/vi/MCGkxEmxJWQ/maxresdefault.jpg",
  },
  {
    id: 12,
    title: "桃色ジュテーム/花いろは",
    category: "MV",
    role: "監督",
    year: "2025年",
    videoId: "8DLmTeGNtlE",
    thumbnail: "https://img.youtube.com/vi/8DLmTeGNtlE/maxresdefault.jpg",
  },
  {
    id: 13,
    title: "BIRTHDAY feat.掌幻/TONEMANIA",
    category: "MV",
    role: "監督",
    year: "2023年",
    videoId: "fIwdf8M9X0M",
    thumbnail: "https://img.youtube.com/vi/fIwdf8M9X0M/maxresdefault.jpg",
  },
  {
    id: 14,
    title: "さわげ！うたげーしょん！/UtaGe!",
    category: "MV",
    role: "監督",
    year: "2024年",
    videoId: "81eV5XW62Ww",
    thumbnail: "https://img.youtube.com/vi/81eV5XW62Ww/maxresdefault.jpg",
  },
  {
    id: 15,
    title: "「夏 Embrace」/花いろは",
    category: "MV",
    role: "監督・脚本・編集",
    year: "2025年",
    videoId: "vlBvWlyZ75I",
    thumbnail: "https://img.youtube.com/vi/vlBvWlyZ75I/maxresdefault.jpg",
  },
  {
    id: 16,
    title: "「君が笑うから」/iRiNE",
    category: "MV",
    role: "監督・脚本・編集",
    year: "2025年",
    videoId: "TF-l_F6VXg0",
    thumbnail: "https://img.youtube.com/vi/TF-l_F6VXg0/maxresdefault.jpg",
  },
  {
    id: 17,
    title: "株式会社en-ry PV（long ver.）",
    category: "企業PR",
    role: "監督・編集",
    year: "2025年",
    videoId: "Wi0mrLzSN5o",
    thumbnail: "https://img.youtube.com/vi/Wi0mrLzSN5o/maxresdefault.jpg",
  },
]

type Item = {
  id: number
  title: string
  category: string
  role: string
  year: string
  videoId: string
  thumbnail: string
  description?: string
}

function PortfolioCard({ item, onOpen }: { item: Item; onOpen: (item: Item) => void }) {
  return (
    <div
      className="bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group border border-[#e8e0d6]"
      onClick={() => onOpen(item)}
    >
      <div className="h-48 bg-gray-900 relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/25 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-11 h-11 rounded-full bg-white/20 border border-white/50 flex items-center justify-center">
            <Play className="w-5 h-5 text-white fill-white ml-0.5" />
          </div>
        </div>
        <div className="absolute top-2.5 left-2.5">
          <span className="bg-[#7a1a24]/85 text-white text-[10px] px-2.5 py-1 tracking-wider">{item.category}</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-sm mb-1.5 leading-snug line-clamp-2 text-[#1a1a1a]">{item.title}</h3>
        <p className="text-[11px] text-gray-500 mb-0.5">{item.year}</p>
        <p className="text-[11px] text-gray-400">{item.role}</p>
        {item.description && <p className="text-[11px] text-[#7a1a24] mt-1">{item.description}</p>}
      </div>
    </div>
  )
}

function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="flex items-center gap-2">
        <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#7a1a24]/55" />
        <div className="w-1.5 h-1.5 rotate-45 bg-[#7a1a24]/55 shrink-0" />
      </div>
      <div>
        <p className="text-[10px] tracking-[0.5em] text-[#7a1a24] font-bold uppercase mb-0.5">{label}</p>
        <h2 className="text-xl font-bold tracking-widest text-[#1a1a1a]">{title}</h2>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-1.5 h-1.5 rotate-45 bg-[#7a1a24]/55 shrink-0" />
        <div className="h-px bg-gradient-to-l from-transparent to-[#7a1a24]/55 flex-1 w-12" />
      </div>
    </div>
  )
}

export default function PortfolioPage() {
  const [selectedVideo, setSelectedVideo] = useState<Item | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => { document.body.style.overflow = "unset" }
  }, [selectedVideo])

  return (
    <div className="min-h-screen flex flex-col bg-[#faf7f2] relative">
      <RedThreadBackground />

      <header className="sticky top-0 z-40 bg-[#faf7f2]/95 backdrop-blur-sm border-b border-[#d9cfc4]">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo-final.png" alt="株式会社en-ry（エンリー）" width={32} height={32} className="object-contain" />
            <h1 className="text-2xl font-bold">en-ry</h1>
          </Link>
          <Link href="/#works" className="inline-flex items-center text-gray-600 hover:text-[#7a1a24] transition-colors text-sm">
            <ArrowLeft className="w-4 h-4 mr-1.5" />
            ホームに戻る
          </Link>
        </div>
      </header>

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h1 className="text-4xl font-bold mb-3 tracking-widest">制作実績一覧</h1>
            <p className="text-gray-500">これまでに制作した映像作品をご覧いただけます</p>
          </div>

          {/* 会社実績 */}
          <section className="mb-16">
            <SectionHeading label="Company Works" title="会社実績" />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {enryItems.map((item) => (
                <PortfolioCard key={item.id} item={item} onOpen={setSelectedVideo} />
              ))}
            </div>
          </section>

          {/* 田中慎太郎監督 実績 */}
          <section>
            <SectionHeading label="Director Works" title="田中慎太郎監督 実績" />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {directorItems.map((item) => (
                <PortfolioCard key={item.id} item={item} onOpen={setSelectedVideo} />
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/92 z-50 flex items-center justify-center p-4" onClick={() => setSelectedVideo(null)}>
          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
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
              <h3 className="text-2xl font-bold mb-1">{selectedVideo.title}</h3>
              <p className="text-gray-400 text-sm">{selectedVideo.category} / {selectedVideo.role} / {selectedVideo.year}</p>
              {selectedVideo.description && <p className="text-[#d45060] text-sm mt-1">{selectedVideo.description}</p>}
            </div>
          </div>
        </div>
      )}

      <footer className="bg-[#3d0a10] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Image src="/logo-final.png" alt="株式会社en-ry" width={24} height={24} className="object-contain invert" />
            <Link href="/" className="text-xl font-bold">en-ry</Link>
          </div>
          <p className="text-gray-400 text-sm mb-2">幸せな今を縁"en"が導く─未来の記憶"memory"に</p>
          <p className="text-gray-500 text-xs">&copy; 2025 en-ry All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}
