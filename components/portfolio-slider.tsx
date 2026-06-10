"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, Play } from "lucide-react"

const enryItems = [
  {
    id: 1,
    title: "Ma'Scar'Piece 12th Single「Showtime Ignition」",
    category: "MV",
    role: "監督・構成・撮影・編集",
    year: "2026/03/29",
    videoId: "8AO0rZnAdqw",
    thumbnail: "https://img.youtube.com/vi/8AO0rZnAdqw/hqdefault.jpg",
  },
  {
    id: 2,
    title: "すーぱーUtaGe!砲/UtaGe!",
    category: "MV",
    role: "制作協力・ラインプロデューサー",
    year: "2026/05/20",
    videoId: "WQnmozAtck4",
    thumbnail: "https://img.youtube.com/vi/WQnmozAtck4/hqdefault.jpg",
  },
  {
    id: 3,
    title: "パパはトップスター⁉︎〜未婚シンママの秘密〜",
    category: "ショートドラマ",
    role: "制作協力・演出助手",
    year: "2026/06/06",
    videoId: "_p1F3gT2Quw",
    thumbnail: "https://img.youtube.com/vi/_p1F3gT2Quw/hqdefault.jpg",
    externalUrl: "https://www.reelshort.com/ja/movie/%E3%83%91%E3%83%91%E3%81%AF%E3%83%88%E3%83%83%E3%83%97%E3%82%B9%E3%82%BF%E3%83%BC-%EF%B8%8E-%E6%9C%AA%E5%A9%9A%E3%82%B7%E3%83%B3%E3%83%9E%E3%83%9E%E3%81%AE%E7%A7%98%E5%AF%86-6a179da4de9211208c080f90",
  },
  {
    id: 4,
    title: "株式会社en-ry PV（long ver.）",
    category: "企業PR",
    role: "監督・編集",
    year: "2025年",
    videoId: "Wi0mrLzSN5o",
    thumbnail: "https://img.youtube.com/vi/Wi0mrLzSN5o/hqdefault.jpg",
  },
]

const directorItems = [
  {
    id: 1,
    title: "私たちの東京ストーリー",
    category: "ドラマ",
    role: "現場執行監督",
    year: "2025年",
    videoId: "mUIHsU9DUAY",
    thumbnail: "https://img.youtube.com/vi/mUIHsU9DUAY/hqdefault.jpg",
  },
  {
    id: 2,
    title: "おっさんの夏休み",
    category: "映画",
    role: "監督・脚本・撮影・編集",
    year: "2025年",
    videoId: "Xk6PZaU43JE",
    thumbnail: "https://img.youtube.com/vi/Xk6PZaU43JE/hqdefault.jpg",
  },
  {
    id: 3,
    title: "苺キャンディ",
    category: "MV",
    role: "監督・脚本・編集",
    year: "2025年",
    videoId: "vnwuWPM-JVw",
    thumbnail: "https://img.youtube.com/vi/vnwuWPM-JVw/hqdefault.jpg",
  },
  {
    id: 4,
    title: "震災ドキュメンタリー番組",
    category: "その他",
    role: "構成・演出・編集",
    year: "2021年",
    videoId: "EADBDIOrMX0",
    thumbnail: "https://img.youtube.com/vi/EADBDIOrMX0/hqdefault.jpg",
  },
  {
    id: 5,
    title: "近くて遠い親子",
    category: "映画",
    role: "監督・脚本・編集",
    year: "2023年",
    videoId: "SPX7k8DsnIk",
    thumbnail: "https://img.youtube.com/vi/SPX7k8DsnIk/hqdefault.jpg",
  },
  {
    id: 6,
    title: "いつか黄昏の空で/gusou十色",
    category: "MV",
    role: "監督・脚本・撮影・編集",
    year: "2022年",
    videoId: "Wt7nqe5ACIA",
    thumbnail: "https://img.youtube.com/vi/Wt7nqe5ACIA/hqdefault.jpg",
  },
  {
    id: 7,
    title: "『アッパレビバディ』/Appare!",
    category: "MV",
    role: "監督",
    year: "2022年",
    videoId: "6C7P_0Qv3pc",
    thumbnail: "https://img.youtube.com/vi/6C7P_0Qv3pc/hqdefault.jpg",
  },
  {
    id: 8,
    title: "てぃだ いつか太陽の下を歩きたい",
    category: "映画",
    role: "録音",
    year: "2022/09/02",
    videoId: "e1G5dv1ALZc",
    thumbnail: "https://img.youtube.com/vi/e1G5dv1ALZc/hqdefault.jpg",
  },
  {
    id: 9,
    title: "ひとつの空",
    category: "映画",
    role: "ラインプロデューサー・録音",
    year: "2024/06/22",
    videoId: "MHbk8iscA3w",
    thumbnail: "https://img.youtube.com/vi/MHbk8iscA3w/hqdefault.jpg",
  },
  {
    id: 10,
    title: "消防士の元夫、悔恨の炎に焼かれて",
    category: "ショートドラマ",
    role: "撮影監督",
    year: "2025/07/26",
    videoId: "",
    thumbnail: "",
    externalUrl: "https://www.reelshort.com/ja/movie/%E6%B6%88%E9%98%B2%E5%A3%AB%E3%81%AE%E5%85%83%E5%A4%AB-%E6%82%94%E6%81%A8%E3%81%AE%E7%82%8E%E3%81%AB%E7%84%BC%E3%81%8B%E3%82%8C%E3%81%A6-6861f8128c13fda27006234b",
  },
  {
    id: 11,
    title: "華麗なる変身後、クールな夫がデレデレに！",
    category: "ショートドラマ",
    role: "撮影監督",
    year: "2025/10/03",
    videoId: "rhom5WJuY4c",
    thumbnail: "https://img.youtube.com/vi/rhom5WJuY4c/hqdefault.jpg",
  },
  {
    id: 12,
    title: "長全寺",
    category: "映画",
    role: "監督補佐・編集",
    year: "2022/12/24",
    videoId: "eMj2Q3ISNyg",
    thumbnail: "https://img.youtube.com/vi/eMj2Q3ISNyg/hqdefault.jpg",
  },
  {
    id: 13,
    title: "くそったれ、クリスマス",
    category: "映画",
    role: "監督・脚本・編集",
    year: "2022/09/18",
    videoId: "",
    thumbnail: "https://japancomedy-filmfes.com/wp-content/uploads/2022/09/%E3%81%8F%E3%81%9D%E3%81%A3%E3%81%9F%E3%82%8C%E3%80%81%E3%82%AF%E3%83%AA%E3%82%B9%E3%83%9E%E3%82%B91-1024x576.png",
    externalUrl: "https://japancomedy-filmfes.com/crazy-christmas/",
  },
  {
    id: 14,
    title: "漆黒の神威",
    category: "映画",
    role: "撮影監督・編集",
    year: "2022/01/14",
    videoId: "JlukvfjO6gU",
    thumbnail: "https://img.youtube.com/vi/JlukvfjO6gU/hqdefault.jpg",
  },
  {
    id: 15,
    title: "親子未満",
    category: "映画",
    role: "監督・脚本・編集",
    year: "2020年",
    videoId: "pm_l7bGAMUc",
    thumbnail: "https://img.youtube.com/vi/pm_l7bGAMUc/hqdefault.jpg",
  },
  {
    id: 16,
    title: "地下室に元カレが棲みはじめました",
    category: "ショートドラマ",
    role: "撮影",
    year: "2025/11/17",
    videoId: "AUwIPx3Q19Q",
    thumbnail: "https://img.youtube.com/vi/AUwIPx3Q19Q/hqdefault.jpg",
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
  externalUrl?: string
}

function VideoCard({ item, size = "sm" }: { item: Item; size?: "sm" | "md" }) {
  const [open, setOpen] = useState(false)
  const h = size === "md" ? "h-40" : "h-28"
  const hasVideo = !!item.videoId

  const handleClick = () => {
    if (hasVideo) {
      setOpen(true)
    } else if (item.externalUrl) {
      window.open(item.externalUrl, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <>
      <div
        className="group relative overflow-hidden cursor-pointer bg-gray-900"
        onClick={handleClick}
      >
        <div className={`${h} relative overflow-hidden`}>
          {item.thumbnail ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900" />
          )}
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

      {open && hasVideo && (
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
            <div className="mt-3 bg-white/8 border border-white/10 px-4 py-3">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <h3 className="text-base font-bold text-white leading-snug flex-1">{item.title}</h3>
                <div className="flex items-center gap-2.5 flex-wrap shrink-0">
                  <span className="bg-[#7a1a24]/80 text-white text-[9px] px-2 py-0.5 tracking-widest uppercase font-bold">{item.category}</span>
                  <span className="text-white/80 text-xs">{item.role}</span>
                  <span className="text-white/45 text-xs">{item.year}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function SectionLabel({ main, sub }: { main: string; sub: string }) {
  return (
    <div className="mb-4 pb-3 border-b border-[#e8e0d6] text-center">
      <p className="text-[13px] text-[#7a1a24] tracking-wider font-bold mb-0.5">{main}</p>
      <p className="text-[10px] text-gray-400 tracking-[0.4em] uppercase">{sub}</p>
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
          <SectionLabel main="en-ry 実績" sub="company works" />
          <div className="grid grid-cols-3 gap-2">
            {enryItems.slice(0, 9).map((item) => (
              <VideoCard key={item.id} item={item} />
            ))}
          </div>
        </div>
        {/* 田中監督実績 */}
        <div>
          <SectionLabel main="田中慎太郎監督 実績" sub="director works" />
          <div className="grid grid-cols-3 gap-2">
            {directorItems.slice(0, 9).map((item) => (
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
      <div className="w-1/2">
        <SectionLabel main="en-ry 実績" sub="company works" />
        <div className="grid grid-cols-3 gap-3">
          {enryItems.slice(0, 9).map((item) => (
            <VideoCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="w-px self-stretch bg-[#e8e0d6] shrink-0" />

      {/* Right: 田中監督実績 */}
      <div className="w-1/2">
        <SectionLabel main="田中慎太郎監督 実績" sub="director works" />
        <div className="grid grid-cols-3 gap-3">
          {directorItems.slice(0, 9).map((item) => (
            <VideoCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}
