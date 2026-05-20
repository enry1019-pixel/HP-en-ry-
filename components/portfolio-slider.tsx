"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, Play } from "lucide-react"

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
    title: "株式会社en-ry PV（long ver.）",
    category: "企業PR",
    role: "監督・編集",
    year: "2025年",
    videoId: "Wi0mrLzSN5o",
    thumbnail: "https://img.youtube.com/vi/Wi0mrLzSN5o/maxresdefault.jpg",
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

function VideoCard({ item, size = "sm" }: { item: Item; size?: "sm" | "md" }) {
  const [open, setOpen] = useState(false)
  const h = size === "md" ? "h-40" : "h-28"

  return (
    <>
      <div
        className="group relative overflow-hidden cursor-pointer bg-gray-900"
        onClick={() => setOpen(true)}
      >
        <div className={`${h} relative overflow-hidden`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-9 h-9 rounded-full bg-white/25 border border-white/50 flex items-center justify-center">
              <Play className="w-4 h-4 text-white fill-white ml-0.5" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-2.5 pb-2 pt-6">
            <p className="text-[9px] text-white/60 tracking-[0.3em] uppercase mb-0.5">{item.category}</p>
            <p className="text-white text-[11px] font-bold leading-tight line-clamp-2">{item.title}</p>
          </div>
        </div>
        <div className="px-2.5 py-2 bg-white border-t border-[#e8e0d6]">
          <p className="text-[10px] text-gray-500 leading-relaxed">{item.role}</p>
          <p className="text-[10px] text-gray-400">{item.year}</p>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1`}
                title={item.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="mt-4 text-white text-center">
              <h3 className="text-xl font-bold mb-1">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.category} / {item.role} / {item.year}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function SectionLabel({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-4 pb-3 border-b border-[#e8e0d6]">
      <p className="text-[9px] tracking-[0.55em] text-[#7a1a24] font-bold uppercase mb-0.5">{children}</p>
      {sub && <p className="text-[11px] text-gray-400 tracking-wider">{sub}</p>}
    </div>
  )
}

export default function PortfolioSlider() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  if (isMobile) {
    return (
      <div className="space-y-10">
        {/* en-ry実績 */}
        <div>
          <SectionLabel sub="en-ry 実績">EN-RY</SectionLabel>
          <div className="grid grid-cols-2 gap-3">
            {enryItems.map((item) => (
              <VideoCard key={item.id} item={item} size="md" />
            ))}
          </div>
        </div>
        {/* 田中監督実績 */}
        <div>
          <SectionLabel sub="田中慎太郎監督 実績">DIRECTOR</SectionLabel>
          <div className="grid grid-cols-2 gap-3">
            {directorItems.map((item) => (
              <VideoCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex gap-6 items-start">
      {/* Left: en-ry実績 */}
      <div className="w-[36%] shrink-0">
        <SectionLabel sub="en-ry 実績">EN-RY</SectionLabel>
        <div className="grid grid-cols-2 gap-3">
          {enryItems.map((item) => (
            <VideoCard key={item.id} item={item} size="md" />
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="w-px self-stretch bg-[#e8e0d6] shrink-0" />

      {/* Right: 田中監督実績 */}
      <div className="flex-1">
        <SectionLabel sub="田中慎太郎監督 実績">DIRECTOR</SectionLabel>
        <div className="grid grid-cols-4 gap-3">
          {directorItems.map((item) => (
            <VideoCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}
