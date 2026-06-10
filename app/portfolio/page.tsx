"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Play, X, ExternalLink } from "lucide-react"
import { RedThreadBackground } from "@/components/red-thread-background"

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
    videoId: "",
    thumbnail: "https://v-mps.crazymaplestudios.com/images/96129880-541a-11f1-b0e9-f1e04973cf14.png",
    externalUrl: "https://www.reelshort.com/ja/movie/パパはトップスター-%EF%B8%8E-未婚シンママの秘密-6a179da4de9211208c080f90",
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
    description: "U-NEXTにて配信中",
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
    title: "『絶対零度のオアシス』",
    category: "ドラマ",
    role: "監督",
    year: "2023年",
    videoId: "fhbUDHyBVW8",
    thumbnail: "https://img.youtube.com/vi/fhbUDHyBVW8/hqdefault.jpg",
  },
  {
    id: 6,
    title: "近くて遠い親子",
    category: "映画",
    role: "監督・脚本・編集",
    year: "2023年",
    videoId: "SPX7k8DsnIk",
    thumbnail: "https://img.youtube.com/vi/SPX7k8DsnIk/hqdefault.jpg",
  },
  {
    id: 7,
    title: "いつか黄昏の空で/gusou十色",
    category: "MV",
    role: "監督・脚本・撮影・編集",
    year: "2022年",
    videoId: "Wt7nqe5ACIA",
    thumbnail: "https://img.youtube.com/vi/Wt7nqe5ACIA/hqdefault.jpg",
  },
  {
    id: 8,
    title: "『アッパレビバディ』/Appare!",
    category: "MV",
    role: "監督",
    year: "2022年",
    videoId: "6C7P_0Qv3pc",
    thumbnail: "https://img.youtube.com/vi/6C7P_0Qv3pc/hqdefault.jpg",
  },
  {
    id: 9,
    title: "劇薬",
    category: "映画",
    role: "監督・脚本・撮影・編集",
    year: "2022年",
    videoId: "CtSvHCdXivk",
    thumbnail: "https://img.youtube.com/vi/CtSvHCdXivk/hqdefault.jpg",
  },
  {
    id: 10,
    title: "福井県 観光地PR動画",
    category: "CM",
    role: "監督・脚本",
    year: "2021年",
    videoId: "OuF0gG07TKk",
    thumbnail: "https://img.youtube.com/vi/OuF0gG07TKk/hqdefault.jpg",
  },
  {
    id: 11,
    title: "夏恋バケーション/花いろは",
    category: "MV",
    role: "監督・編集",
    year: "2022年",
    videoId: "MCGkxEmxJWQ",
    thumbnail: "https://img.youtube.com/vi/MCGkxEmxJWQ/hqdefault.jpg",
  },
  {
    id: 12,
    title: "桃色ジュテーム/花いろは",
    category: "MV",
    role: "監督",
    year: "2025年",
    videoId: "8DLmTeGNtlE",
    thumbnail: "https://img.youtube.com/vi/8DLmTeGNtlE/hqdefault.jpg",
  },
  {
    id: 13,
    title: "BIRTHDAY feat.掌幻/TONEMANIA",
    category: "MV",
    role: "監督",
    year: "2023年",
    videoId: "fIwdf8M9X0M",
    thumbnail: "https://img.youtube.com/vi/fIwdf8M9X0M/hqdefault.jpg",
  },
  {
    id: 14,
    title: "さわげ！うたげーしょん！/UtaGe!",
    category: "MV",
    role: "監督",
    year: "2024年",
    videoId: "81eV5XW62Ww",
    thumbnail: "https://img.youtube.com/vi/81eV5XW62Ww/hqdefault.jpg",
  },
  {
    id: 15,
    title: "「夏 Embrace」/花いろは",
    category: "MV",
    role: "監督・脚本・編集",
    year: "2025年",
    videoId: "vlBvWlyZ75I",
    thumbnail: "https://img.youtube.com/vi/vlBvWlyZ75I/hqdefault.jpg",
  },
  {
    id: 16,
    title: "「君が笑うから」/iRiNE",
    category: "MV",
    role: "監督・脚本・編集",
    year: "2025年",
    videoId: "TF-l_F6VXg0",
    thumbnail: "https://img.youtube.com/vi/TF-l_F6VXg0/hqdefault.jpg",
  },
  {
    id: 17,
    title: "てぃだ いつか太陽の下を歩きたい",
    category: "映画",
    role: "録音",
    year: "2022/09/02",
    videoId: "e1G5dv1ALZc",
    thumbnail: "https://img.youtube.com/vi/e1G5dv1ALZc/hqdefault.jpg",
  },
  {
    id: 18,
    title: "ひとつの空",
    category: "映画",
    role: "ラインプロデューサー・録音",
    year: "2024/06/22",
    videoId: "MHbk8iscA3w",
    thumbnail: "https://img.youtube.com/vi/MHbk8iscA3w/hqdefault.jpg",
  },
  {
    id: 19,
    title: "消防士の元夫、悔恨の炎に焼かれて",
    category: "ショートドラマ",
    role: "撮影監督",
    year: "2025/07/26",
    videoId: "",
    thumbnail: "https://v-mps.crazymaplestudios.com/images/211d3420-d721-11f0-84ad-6b5693b490dc.png",
    externalUrl: "https://www.reelshort.com/ja/movie/消防士の元夫-悔恨の炎に焼かれて-6861f8128c13fda27006234b",
  },
  {
    id: 20,
    title: "華麗なる変身後、クールな夫がデレデレに！",
    category: "ショートドラマ",
    role: "撮影監督",
    year: "2025/10/03",
    videoId: "rhom5WJuY4c",
    thumbnail: "https://img.youtube.com/vi/rhom5WJuY4c/hqdefault.jpg",
  },
  {
    id: 21,
    title: "長全寺",
    category: "映画",
    role: "監督補佐・編集",
    year: "2022/12/24",
    videoId: "eMj2Q3ISNyg",
    thumbnail: "https://img.youtube.com/vi/eMj2Q3ISNyg/hqdefault.jpg",
  },
  {
    id: 22,
    title: "くそったれ、クリスマス",
    category: "映画",
    role: "監督・脚本・編集",
    year: "2022/09/18",
    videoId: "",
    thumbnail: "https://japancomedy-filmfes.com/wp-content/uploads/2022/09/%E3%81%8F%E3%81%9D%E3%81%A3%E3%81%9F%E3%82%8C%E3%80%81%E3%82%AF%E3%83%AA%E3%82%B9%E3%83%9E%E3%82%B91-1024x576.png",
    externalUrl: "https://japancomedy-filmfes.com/crazy-christmas/",
  },
  {
    id: 23,
    title: "漆黒の神威",
    category: "映画",
    role: "撮影監督・編集",
    year: "2022/01/14",
    videoId: "JlukvfjO6gU",
    thumbnail: "https://img.youtube.com/vi/JlukvfjO6gU/hqdefault.jpg",
  },
  {
    id: 24,
    title: "親子未満",
    category: "映画",
    role: "監督・脚本・編集",
    year: "2020年",
    videoId: "pm_l7bGAMUc",
    thumbnail: "https://img.youtube.com/vi/pm_l7bGAMUc/hqdefault.jpg",
  },
  {
    id: 25,
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

function PortfolioCard({ item, onOpen }: { item: Item; onOpen: (item: Item) => void }) {
  const handleClick = () => {
    if (!item.videoId && item.externalUrl) {
      window.open(item.externalUrl, "_blank", "noopener,noreferrer")
    } else {
      onOpen(item)
    }
  }

  return (
    <div
      className="bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group border border-[#e8e0d6]"
      onClick={handleClick}
    >
      <div className="h-48 bg-gray-900 relative overflow-hidden">
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
        <div className="absolute inset-0 bg-black/25 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-11 h-11 rounded-full bg-white/20 border border-white/50 flex items-center justify-center">
            {item.videoId ? (
              <Play className="w-5 h-5 text-white fill-white ml-0.5" />
            ) : (
              <ExternalLink className="w-5 h-5 text-white" />
            )}
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

const TABS = ["すべて", "映画", "ドラマ", "ショートドラマ", "CM", "企業PR", "MV", "その他"] as const
type Tab = typeof TABS[number]

export default function PortfolioPage() {
  const [selectedVideo, setSelectedVideo] = useState<Item | null>(null)
  const [tab, setTab] = useState<Tab>("すべて")

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const filterItems = (items: Item[]) =>
    tab === "すべて" ? items : items.filter((i) => i.category === tab)

  const filteredEnry = filterItems(enryItems)
  const filteredDirector = filterItems(directorItems)

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
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-3 tracking-widest">制作実績一覧</h1>
            <p className="text-gray-500">これまでに制作した映像作品をご覧いただけます</p>
          </div>

          {/* ジャンルタブ */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {TABS.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-5 py-2 text-sm tracking-wider transition-all ${
                  tab === t
                    ? "bg-[#7a1a24] text-white"
                    : "bg-white text-gray-600 border border-[#d9cfc4] hover:border-[#7a1a24] hover:text-[#7a1a24]"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* 会社実績 */}
          {filteredEnry.length > 0 && (
            <section className="mb-16">
              <SectionHeading label="Company Works" title="会社実績" />
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredEnry.map((item) => (
                  <PortfolioCard key={item.id} item={item} onOpen={setSelectedVideo} />
                ))}
              </div>
            </section>
          )}

          {/* 田中慎太郎監督 実績 */}
          {filteredDirector.length > 0 && (
            <section>
              <SectionHeading label="Director Works" title="田中慎太郎監督 実績" />
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredDirector.map((item) => (
                  <PortfolioCard key={item.id} item={item} onOpen={setSelectedVideo} />
                ))}
              </div>
            </section>
          )}

          {filteredEnry.length === 0 && filteredDirector.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 tracking-wider">該当する作品がありません</p>
            </div>
          )}
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
            <div className="mt-3 bg-white/8 border border-white/10 px-5 py-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5">
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl font-bold text-white leading-snug break-words">{selectedVideo.title}</h3>
                  {selectedVideo.description && (
                    <p className="text-[#e8a0a8] text-xs mt-1">{selectedVideo.description}</p>
                  )}
                </div>
                <div className="flex items-center gap-3 flex-wrap shrink-0">
                  <span className="bg-[#7a1a24]/80 text-white text-[10px] px-2.5 py-1 tracking-widest uppercase font-bold">{selectedVideo.category}</span>
                  <span className="text-white/80 text-sm">{selectedVideo.role}</span>
                  <span className="text-white/45 text-sm">{selectedVideo.year}</span>
                </div>
              </div>
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
