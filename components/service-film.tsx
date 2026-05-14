"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const services = [
  {
    id: "01",
    title: "映画・ドラマ",
    description: "企画・脚本から編集まで制作。\n映画、テレビドラマ、企業タイアップやPRドラマなど",
    image: "/service-film-drama.jpg",
    grade: "brightness(0.78)",
  },
  {
    id: "02",
    title: "CM",
    description: "ブランドの真髄を凝縮する。テレビCMからWeb動画広告まで対応。\nテレビCM・Web広告、ブランデッドムービーなど",
    image: "/service-cm.jpg",
    grade: "contrast(1.15) brightness(0.68) saturate(1.1) sepia(0.25)",
  },
  {
    id: "03",
    title: "企業PR",
    description: "ブランドの想いを届けるプロモーションから採用・Web広告まで幅広く対応。年間サブスク制プランも。\n採用募集、インナーブランディング、サービス紹介、SNSショート動画など",
    image: "/service-pr.jpg",
    grade: "brightness(0.72)",
  },
  {
    id: "04",
    title: "MV",
    description: "楽曲の世界観を最大限に表現。\nアーティスト、アイドル、パフォーマンス撮影、SNS縦型動画など",
    image: "/service-mv.jpg",
    grade: "contrast(1.1) brightness(0.75) saturate(1.35) sepia(0.15)",
  },
]

const VW = 640
const VH = 360
const PERIMETER = 2 * (VW + VH)
const SPROCKET_COUNT = 10

export default function ServiceFilm() {
  const [framesDrawing, setFramesDrawing] = useState(false)
  const [photosVisible, setPhotosVisible] = useState(false)
  const [contentVisible, setContentVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  // 1枠ずつ順番に描画: frame0=200ms, frame1=1000ms, frame2=1800ms, frame3=2600ms
  const FRAME_DELAY = 0.8  // 枠ごとの開始オフセット(秒)
  const DRAW_DURATION = 1.4 // 1枠の描画時間(秒)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        const aboveViewport = entry.boundingClientRect.top < 0
        if (entry.isIntersecting) {
          setTimeout(() => setFramesDrawing(true), 200)
          setTimeout(() => setPhotosVisible(true), 300)
          // 最後の枠が描き終わる頃にテキスト表示: 200ms + 3*800ms + 1400ms = 4000ms
          setTimeout(() => setContentVisible(true), 3200)
        } else if (!aboveViewport) {
          setFramesDrawing(false)
          setPhotosVisible(false)
          setContentVisible(false)
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={sectionRef}>
      {/* 2×2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-5xl mx-auto px-4">
        {services.map((service, index) => (
          <div
            key={service.id}
            className="relative overflow-hidden"
            style={{ aspectRatio: "16/9" }}
          >
            {/* Photo */}
            <div
              className="absolute inset-0"
              style={{
                opacity: photosVisible ? 1 : 0,
                transform: photosVisible ? "scale(1)" : "scale(1.05)",
                transitionDelay: `${index * FRAME_DELAY}s`,
                transitionDuration: "1200ms",
                transitionProperty: "opacity, transform",
                transitionTimingFunction: "ease",
              }}
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                style={{ filter: service.grade }}
              />
            </div>

            {/* Cinematic gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.45) 45%, rgba(0,0,0,0.15) 100%)",
                opacity: photosVisible ? 1 : 0,
                transition: `opacity 1s ease ${index * FRAME_DELAY}s`,
              }}
            />

            {/* Letterbox bars */}
            <div className="absolute top-0 left-0 right-0 h-5 bg-black/70 z-10" />
            <div className="absolute bottom-0 left-0 right-0 h-5 bg-black/70 z-10" />

            {/* SVG Film Frame */}
            <svg className="absolute inset-0 w-full h-full z-20" viewBox={`0 0 ${VW} ${VH}`}>
              <rect
                x={1.5} y={1.5}
                width={VW - 3} height={VH - 3}
                rx={2} fill="none"
                stroke="rgba(255,255,255,0.55)"
                strokeWidth={1.5}
                strokeDasharray={PERIMETER}
                strokeDashoffset={framesDrawing ? 0 : PERIMETER}
                style={{ transition: `stroke-dashoffset ${DRAW_DURATION}s cubic-bezier(0.4, 0, 0.2, 1) ${index * FRAME_DELAY}s` }}
              />
              <rect
                x={20} y={20}
                width={VW - 40} height={VH - 40}
                rx={1} fill="none"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth={0.8}
                strokeDasharray={PERIMETER - 120}
                strokeDashoffset={framesDrawing ? 0 : PERIMETER - 120}
                style={{ transition: `stroke-dashoffset ${DRAW_DURATION + 0.2}s cubic-bezier(0.4, 0, 0.2, 1) ${index * FRAME_DELAY + 0.1}s` }}
              />
              {Array.from({ length: SPROCKET_COUNT }).map((_, i) => {
                const spacing = (VW - 60) / (SPROCKET_COUNT - 1)
                return (
                  <g key={i} opacity={framesDrawing ? 1 : 0} style={{ transition: `opacity 0.2s ease ${index * FRAME_DELAY + DRAW_DURATION * 0.7 + i * 0.03}s` }}>
                    <rect x={30 + i * spacing - 8} y={6} width={16} height={9} rx={2} fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth={1} />
                    <rect x={30 + i * spacing - 8} y={VH - 15} width={16} height={9} rx={2} fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth={1} />
                  </g>
                )
              })}
              {[[28, 28], [VW - 28, 28], [28, VH - 28], [VW - 28, VH - 28]].map(([cx, cy], i) => (
                <g key={`c${i}`} opacity={framesDrawing ? 0.6 : 0} style={{ transition: `opacity 0.4s ease ${index * FRAME_DELAY + DRAW_DURATION * 0.85}s` }}>
                  <line x1={cx - 10} y1={cy} x2={cx + 10} y2={cy} stroke="rgba(255,255,255,0.6)" strokeWidth={1} />
                  <line x1={cx} y1={cy - 10} x2={cx} y2={cy + 10} stroke="rgba(255,255,255,0.6)" strokeWidth={1} />
                </g>
              ))}
            </svg>

            {/* Text content */}
            <div className="absolute inset-x-0 bottom-7 px-7 z-30">
              <div
                className="flex items-center gap-3 mb-2"
                style={{ opacity: contentVisible ? 1 : 0, transition: `opacity 0.6s ease ${index * 0.15}s` }}
              >
                <span className="text-[11px] text-white/50 tracking-[0.6em] font-light">{service.id}</span>
                <div className="h-px bg-white/25 w-12" />
              </div>
              <h3
                className="text-2xl md:text-3xl font-bold text-white tracking-widest mb-2"
                style={{
                  opacity: contentVisible ? 1 : 0,
                  transform: contentVisible ? "translateY(0)" : "translateY(14px)",
                  transition: `opacity 0.7s ease ${index * 0.15 + 0.08}s, transform 0.7s ease ${index * 0.15 + 0.08}s`,
                }}
              >
                {service.title}
              </h3>
              <p
                className="text-[11px] text-gray-300/80 leading-relaxed tracking-wider whitespace-pre-line"
                style={{
                  opacity: contentVisible ? 1 : 0,
                  transform: contentVisible ? "translateY(0)" : "translateY(10px)",
                  transition: `opacity 0.7s ease ${index * 0.15 + 0.18}s, transform 0.7s ease ${index * 0.15 + 0.18}s`,
                }}
              >
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
