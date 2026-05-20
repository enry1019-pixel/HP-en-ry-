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
const SLIDE_DURATION = 4800

export default function ServiceFilm() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [framesDrawing, setFramesDrawing] = useState(false)
  const [photosVisible, setPhotosVisible] = useState(false)
  const [contentVisible, setContentVisible] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [progressKey, setProgressKey] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((p) => (p + 1) % services.length)
        setProgressKey((k) => k + 1)
      }, SLIDE_DURATION)
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [isPaused, progressKey])

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        const above = entry.boundingClientRect.top < 0
        if (entry.isIntersecting) {
          setTimeout(() => { setFramesDrawing(true); setPhotosVisible(true) }, 150)
          setTimeout(() => setContentVisible(true), 1600)
        } else if (!above) {
          setFramesDrawing(false)
          setPhotosVisible(false)
          setContentVisible(false)
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index)
    setProgressKey((k) => k + 1)
  }

  const corners: [number, number][] = [
    [28, 28], [VW - 28, 28], [28, VH - 28], [VW - 28, VH - 28],
  ]

  return (
    <div
      ref={sectionRef}
      className="max-w-5xl mx-auto px-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/*
        Mobile:  featured panel (full width) → thumbnails below as 4-column grid
        Desktop: featured panel (flex-1)     + thumbnails strip on the right (vertical)
      */}
      <div className="flex flex-col md:flex-row gap-2">

        {/* ── Featured panel ── */}
        <div
          className="relative overflow-hidden w-full md:flex-1"
          style={{ aspectRatio: "16/9" }}
        >
          {/* Per-service photos */}
          {services.map((service, i) => (
            <div
              key={service.id}
              className="absolute inset-0"
              style={{ opacity: i === activeIndex ? 1 : 0, transition: "opacity 0.85s ease" }}
            >
              <div
                className="absolute inset-0"
                style={{
                  opacity: photosVisible ? 1 : 0,
                  transform: photosVisible ? "scale(1)" : "scale(1.04)",
                  transition: "opacity 1000ms ease, transform 1000ms ease",
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
            </div>
          ))}

          {/* Gradient */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.4) 45%, rgba(0,0,0,0.1) 100%)",
              opacity: photosVisible ? 1 : 0,
              transition: "opacity 1s ease",
            }}
          />

          {/* Letterbox bars */}
          <div className="absolute top-0 left-0 right-0 h-5 bg-black/70 z-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-5 bg-black/70 z-20 pointer-events-none" />

          {/* SVG Film Frame */}
          <svg
            className="absolute inset-0 w-full h-full z-30 pointer-events-none"
            viewBox={`0 0 ${VW} ${VH}`}
          >
            <rect
              x={1.5} y={1.5} width={VW - 3} height={VH - 3}
              rx={2} fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth={1.5}
              strokeDasharray={PERIMETER}
              strokeDashoffset={framesDrawing ? 0 : PERIMETER}
              style={{ transition: "stroke-dashoffset 1.2s cubic-bezier(0.4,0,0.2,1) 0s" }}
            />
            <rect
              x={20} y={20} width={VW - 40} height={VH - 40}
              rx={1} fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth={0.8}
              strokeDasharray={PERIMETER - 120}
              strokeDashoffset={framesDrawing ? 0 : PERIMETER - 120}
              style={{ transition: "stroke-dashoffset 1.4s cubic-bezier(0.4,0,0.2,1) 0.1s" }}
            />
            {Array.from({ length: SPROCKET_COUNT }).map((_, i) => {
              const sp = (VW - 60) / (SPROCKET_COUNT - 1)
              return (
                <g key={i} opacity={framesDrawing ? 1 : 0} style={{ transition: `opacity 0.2s ease ${0.9 + i * 0.03}s` }}>
                  <rect x={30 + i * sp - 8} y={6} width={16} height={9} rx={2} fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth={1} />
                  <rect x={30 + i * sp - 8} y={VH - 15} width={16} height={9} rx={2} fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth={1} />
                </g>
              )
            })}
            {corners.map(([cx, cy], i) => (
              <g key={`c${i}`} opacity={framesDrawing ? 0.6 : 0} style={{ transition: "opacity 0.4s ease 1.05s" }}>
                <line x1={cx - 10} y1={cy} x2={cx + 10} y2={cy} stroke="rgba(255,255,255,0.6)" strokeWidth={1} />
                <line x1={cx} y1={cy - 10} x2={cx} y2={cy + 10} stroke="rgba(255,255,255,0.6)" strokeWidth={1} />
              </g>
            ))}
          </svg>

          {/* Per-service text */}
          {services.map((service, i) => (
            <div
              key={service.id}
              className="absolute inset-x-0 bottom-7 px-8 z-40 pointer-events-none"
              style={{
                opacity: i === activeIndex && contentVisible ? 1 : 0,
                transform: i === activeIndex ? "translateY(0)" : "translateY(8px)",
                transition: "opacity 0.55s ease, transform 0.55s ease",
              }}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[12px] text-white/50 tracking-[0.6em] font-light">{service.id}</span>
                <div className="h-px bg-white/25 w-12" />
              </div>
              <h3 className="text-[32px] font-bold text-white tracking-widest mb-2 leading-tight">
                {service.title}
              </h3>
              <p className="text-[12px] text-gray-300/80 leading-relaxed tracking-wider whitespace-pre-line max-w-md">
                {service.description}
              </p>
            </div>
          ))}

          {/* Progress bar */}
          <div className="absolute bottom-[19px] left-0 right-0 h-px z-40 overflow-hidden pointer-events-none">
            <div
              key={progressKey}
              className="h-full bg-white/45"
              style={{
                animation: `progress-fill ${SLIDE_DURATION}ms linear forwards`,
                animationPlayState: isPaused ? "paused" : "running",
              }}
            />
          </div>
        </div>

        {/* ── Thumbnails strip ──
              Mobile:  4-column grid (aspect-video each)
              Desktop: vertical flex, each fills equal height
        */}
        <div className="grid grid-cols-4 gap-1.5 md:flex md:flex-col md:gap-1.5 md:w-32 lg:w-36 md:shrink-0">
          {services.map((service, i) => (
            <button
              key={service.id}
              onClick={() => handleThumbnailClick(i)}
              className="relative overflow-hidden cursor-pointer [aspect-ratio:16/9] md:[aspect-ratio:auto] md:flex-1"
              style={{
                opacity: i === activeIndex ? 1 : 0.42,
                outline: i === activeIndex ? "1px solid rgba(255,255,255,0.45)" : "none",
                outlineOffset: "-1px",
                transition: "opacity 0.3s ease",
              }}
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                style={{ filter: service.grade }}
              />
              <div className="absolute inset-0 bg-black/45" />
              {/* Mini letterbox */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-black/70 z-10" />
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-black/70 z-10" />
              {/* Label */}
              <div className="absolute inset-x-0 bottom-1.5 px-1.5 z-20">
                <span className="hidden sm:block text-[8px] text-white/40 tracking-[0.4em] font-light leading-none mb-0.5">
                  {service.id}
                </span>
                <span className="block text-white text-[10px] sm:text-[11px] font-bold tracking-wider leading-tight">
                  {service.title}
                </span>
              </div>
              {/* Active underline */}
              {i === activeIndex && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/65 z-30" />
              )}
            </button>
          ))}
        </div>

      </div>
    </div>
  )
}
