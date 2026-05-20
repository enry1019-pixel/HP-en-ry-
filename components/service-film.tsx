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

function ServiceCard({
  service,
  index,
  framesDrawing,
  photosVisible,
  contentVisible,
  frameDelay,
  drawDuration,
}: {
  service: typeof services[0]
  index: number
  framesDrawing: boolean
  photosVisible: boolean
  contentVisible: boolean
  frameDelay: number
  drawDuration: number
}) {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Photo */}
      <div
        className="absolute inset-0"
        style={{
          opacity: photosVisible ? 1 : 0,
          transform: photosVisible ? "scale(1)" : "scale(1.05)",
          transitionDelay: `${index * frameDelay}s`,
          transitionDuration: "1000ms",
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
          transition: `opacity 1s ease ${index * frameDelay}s`,
        }}
      />

      {/* Letterbox bars */}
      <div className="absolute top-0 left-0 right-0 h-5 bg-black/70 z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-5 bg-black/70 z-10" />

      {/* SVG Film Frame */}
      <svg
        className="absolute inset-0 w-full h-full z-20"
        viewBox={`0 0 ${VW} ${VH}`}
        preserveAspectRatio="none"
      >
        <rect
          x={1.5} y={1.5}
          width={VW - 3} height={VH - 3}
          rx={2} fill="none"
          stroke="rgba(255,255,255,0.55)"
          strokeWidth={1.5}
          strokeDasharray={PERIMETER}
          strokeDashoffset={framesDrawing ? 0 : PERIMETER}
          style={{ transition: `stroke-dashoffset ${drawDuration}s cubic-bezier(0.4, 0, 0.2, 1) ${index * frameDelay}s` }}
        />
        <rect
          x={20} y={20}
          width={VW - 40} height={VH - 40}
          rx={1} fill="none"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth={0.8}
          strokeDasharray={PERIMETER - 120}
          strokeDashoffset={framesDrawing ? 0 : PERIMETER - 120}
          style={{ transition: `stroke-dashoffset ${drawDuration + 0.2}s cubic-bezier(0.4, 0, 0.2, 1) ${index * frameDelay + 0.1}s` }}
        />
        {Array.from({ length: SPROCKET_COUNT }).map((_, i) => {
          const spacing = (VW - 60) / (SPROCKET_COUNT - 1)
          return (
            <g key={i} opacity={framesDrawing ? 1 : 0} style={{ transition: `opacity 0.2s ease ${index * frameDelay + drawDuration * 0.7 + i * 0.03}s` }}>
              <rect x={30 + i * spacing - 8} y={6} width={16} height={9} rx={2} fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth={1} />
              <rect x={30 + i * spacing - 8} y={VH - 15} width={16} height={9} rx={2} fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth={1} />
            </g>
          )
        })}
        {[[28, 28], [VW - 28, 28], [28, VH - 28], [VW - 28, VH - 28]].map(([cx, cy], i) => (
          <g key={`c${i}`} opacity={framesDrawing ? 0.6 : 0} style={{ transition: `opacity 0.4s ease ${index * frameDelay + drawDuration * 0.85}s` }}>
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
  )
}

export default function ServiceFilm() {
  const [framesDrawing, setFramesDrawing] = useState(false)
  const [photosVisible, setPhotosVisible] = useState(false)
  const [contentVisible, setContentVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const FRAME_DELAY = 0.4
  const DRAW_DURATION = 0.85

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        const aboveViewport = entry.boundingClientRect.top < 0
        if (entry.isIntersecting) {
          setTimeout(() => { setFramesDrawing(true); setPhotosVisible(true) }, 150)
          setTimeout(() => setContentVisible(true), 1600)
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

  const cardProps = { framesDrawing, photosVisible, contentVisible, frameDelay: FRAME_DELAY, drawDuration: DRAW_DURATION }

  return (
    <div ref={sectionRef}>
      {/* Desktop: asymmetric layout — Row1: 01(wide) + 02, Row2: 03 + 04(wide) */}
      <div className="hidden md:block max-w-5xl mx-auto px-4">
        <div className="flex gap-3 mb-3" style={{ height: "300px" }}>
          <div style={{ flex: 3 }}>
            <ServiceCard service={services[0]} index={0} {...cardProps} />
          </div>
          <div style={{ flex: 2 }}>
            <ServiceCard service={services[1]} index={1} {...cardProps} />
          </div>
        </div>
        <div className="flex gap-3" style={{ height: "300px" }}>
          <div style={{ flex: 2 }}>
            <ServiceCard service={services[2]} index={2} {...cardProps} />
          </div>
          <div style={{ flex: 3 }}>
            <ServiceCard service={services[3]} index={3} {...cardProps} />
          </div>
        </div>
      </div>

      {/* Mobile: single column 16/9 */}
      <div className="md:hidden grid grid-cols-1 gap-3 max-w-5xl mx-auto px-4">
        {services.map((service, index) => (
          <div
            key={service.id}
            className="relative overflow-hidden"
            style={{ aspectRatio: "16/9" }}
          >
            <ServiceCard service={service} index={index} {...cardProps} />
          </div>
        ))}
      </div>
    </div>
  )
}
