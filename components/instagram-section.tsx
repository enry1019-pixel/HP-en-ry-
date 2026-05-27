"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Instagram, ExternalLink, Film, MapPin } from "lucide-react"

interface BeholdPost {
  id: string
  caption?: string
  mediaUrl: string
  thumbnailUrl?: string
  permalink: string
  mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM"
  isReel?: boolean
  sizes?: {
    medium?: { mediaUrl?: string | null }
    large?: { mediaUrl?: string | null }
  }
}

interface BeholdFeed {
  posts?: BeholdPost[]
  followersCount?: number
}

function getPostImageUrl(post: BeholdPost): string {
  if (post.mediaType === "VIDEO") {
    return post.thumbnailUrl || post.sizes?.medium?.mediaUrl || post.mediaUrl
  }
  return post.sizes?.medium?.mediaUrl || post.mediaUrl
}

function useCountUp(target: number, isVisible: boolean, duration = 1800) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!isVisible) return
    const startTime = performance.now()
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [isVisible, target, duration])
  return count
}

const CONTACT_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdf35MRg59aC8PLeeNP3F7HCldqZF6YkM4cQi8J5jbMedF8EQ/viewform?usp=dialog"

const rightItems = [
  {
    Icon: Film,
    en: "CAST",
    ja: "出演案件",
    copy: "en-ryの映像作品に\n出演しませんか",
    sub: "ドラマ・MV・SNS動画など、様々なジャンルで制作しています。プロ・未経験問わず、興味のある方はお気軽にご相談ください。",
    cta: "出演について問い合わせる",
  },
  {
    Icon: MapPin,
    en: "LOCATION",
    ja: "ロケーション案件",
    copy: "御社の施設・ロケーションを\n映像でPRしませんか",
    sub: "店舗・施設・自然景観など、魅力的なロケーションをお持ちの企業様。撮影地としてご提供いただける場合はご連絡ください。",
    cta: "ロケーションについて問い合わせる",
  },
]

export default function InstagramSection() {
  const [posts, setPosts] = useState<BeholdPost[]>([])
  const [followerCount, setFollowerCount] = useState(3000)
  const [loading, setLoading] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const count = useCountUp(followerCount, isVisible)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.12 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    fetch("/api/instagram")
      .then((r) => r.json())
      .then((d: BeholdFeed) => {
        if (d.posts) setPosts(d.posts.slice(0, 6))
        if (d.followersCount) setFollowerCount(d.followersCount)
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`py-20 relative overflow-hidden section-reveal ${isVisible ? "visible" : ""}`}
    >
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="flex items-center gap-2 sec-line-l">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#7a1a24]/55" />
              <div className="w-1.5 h-1.5 rotate-45 bg-[#7a1a24]/55 shrink-0" />
            </div>
            <h2 className="text-3xl font-bold tracking-widest sec-title">FOLLOW US</h2>
            <div className="flex items-center gap-2 sec-line-r">
              <div className="w-1.5 h-1.5 rotate-45 bg-[#7a1a24]/55 shrink-0" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#7a1a24]/55" />
            </div>
          </div>
          <p className="text-lg text-gray-500 sec-subtitle">最新投稿</p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-5xl mx-auto">

          {/* ── Left: Instagram Card ── */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "none" : "translateX(-28px)",
              transition: "opacity 0.8s ease 0.1s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s",
            }}
          >
            <div className="bg-white border border-[#e0d8ce] rounded-2xl shadow-lg overflow-hidden">
              {/* Profile header */}
              <div className="px-4 py-3 border-b border-[#e0d8ce] flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 flex items-center justify-center shrink-0">
                  <Instagram className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm leading-none">en_ry1023</p>
                  <p className="text-[11px] text-gray-400 mt-0.5 truncate">
                    映像制作会社 en-ry（エンリー）
                  </p>
                </div>
                <a
                  href="https://www.instagram.com/en_ry1023/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-xs text-white bg-gradient-to-r from-[#7a1a24] to-[#c0392b] px-3 py-1.5 rounded-full font-semibold hover:opacity-85 transition-opacity"
                >
                  フォロー
                </a>
              </div>

              {/* Post grid */}
              {loading ? (
                <div className="grid grid-cols-3 gap-px bg-[#e0d8ce]">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="aspect-square bg-gray-100 animate-pulse" />
                  ))}
                </div>
              ) : posts.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 gap-3 text-gray-300">
                  <Instagram className="w-10 h-10" />
                  <a
                    href="https://www.instagram.com/en_ry1023/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#7a1a24] hover:underline"
                  >
                    @en_ry1023 を見る
                  </a>
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-px bg-[#e0d8ce]">
                  {posts.map((post) => (
                    <a
                      key={post.id}
                      href={post.permalink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative aspect-square bg-gray-100 overflow-hidden group"
                    >
                      <Image
                        src={getPostImageUrl(post)}
                        alt={post.caption?.slice(0, 40) || "Instagram post"}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-all duration-300 flex items-center justify-center">
                        <ExternalLink className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </a>
                  ))}
                </div>
              )}

              {/* Card footer */}
              <div className="px-4 py-2.5 flex items-center justify-between border-t border-[#e0d8ce]">
                <p className="text-[11px] text-gray-400">最新の投稿をチェック</p>
                <a
                  href="https://www.instagram.com/en_ry1023/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[11px] text-[#7a1a24] font-semibold hover:underline"
                >
                  <Instagram className="w-3 h-3" />
                  @en_ry1023
                </a>
              </div>
            </div>
          </div>

          {/* ── Right: Stats + CTAs ── */}
          <div className="flex flex-col gap-8">
            {/* Follower count */}
            <div
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "none" : "translateX(28px)",
                transition: "opacity 0.8s ease 0.2s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s",
              }}
            >
              <div className="flex items-end gap-1 leading-none mb-2">
                <span className="text-[80px] font-bold text-[#1a1a1a] tracking-tighter tabular-nums leading-none">
                  {count.toLocaleString()}
                </span>
                <span className="text-4xl font-bold text-[#7a1a24] mb-2">+</span>
              </div>
              <p className="text-lg font-semibold text-[#1a1a1a] tracking-widest mb-1">フォロワー突破</p>
              <p className="text-sm text-gray-400 tracking-wide">SNS向け映像・動画のご相談も承っています</p>
            </div>

            {/* Divider */}
            <div
              className="h-px bg-gradient-to-r from-[#7a1a24]/40 via-[#7a1a24]/10 to-transparent origin-left"
              style={{
                transform: isVisible ? "scaleX(1)" : "scaleX(0)",
                transition: "transform 1s cubic-bezier(0.16,1,0.3,1) 0.5s",
              }}
            />

            {/* Recruit items */}
            {rightItems.map((item, i) => (
              <div
                key={item.en}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "none" : "translateX(28px)",
                  transition: `opacity 0.7s ease ${0.65 + i * 0.18}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${0.65 + i * 0.18}s`,
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <item.Icon className="w-3.5 h-3.5 text-[#7a1a24]" />
                  <span className="text-[10px] tracking-[0.4em] text-[#7a1a24]/80 uppercase font-semibold">
                    {item.en}
                  </span>
                  <span className="text-[10px] text-gray-400">/ {item.ja}</span>
                </div>
                <p className="text-xl font-bold text-[#1a1a1a] leading-snug mb-2 whitespace-pre-line">
                  {item.copy}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed mb-3">{item.sub}</p>
                <a
                  href={CONTACT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-[#7a1a24] font-semibold border-b border-[#7a1a24]/40 hover:border-[#7a1a24] transition-colors pb-0.5 group"
                >
                  {item.cta}
                  <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
