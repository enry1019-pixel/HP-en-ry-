"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Clapperboard } from "lucide-react"

const services = [
  {
    id: "01",
    title: "映画・ドラマ",
    description: "現役映画監督が手がける本格的な映像表現。あなたの物語を銀幕に刻みます。",
    image: "/film-director-back-view-cinema-camera.jpg",
  },
  {
    id: "02",
    title: "CM",
    description: "ブランドの核心を一瞬に凝縮。視聴者の記憶に刻まれるコマーシャルを制作します。",
    image: "/corporate-business-presentation-office-professiona.jpg",
  },
  {
    id: "03",
    title: "企業PR",
    description: "企業の想いと実績を力強く伝える、戦略的なプロモーション映像をお届けします。",
    image: "/fukui-pr-thumbnail.jpg",
  },
  {
    id: "04",
    title: "MV",
    description: "アーティストの世界観を最大限に引き出す、唯一無二のミュージックビデオを。",
    image: "/mv-production-female-artist-filming.jpg",
  },
]

const VW = 640
const VH = 360
const PERIMETER = 2 * (VW + VH)
const SPROCKET_COUNT = 10

export default function ServiceFilm() {
  const [cameraVisible, setCameraVisible] = useState(false)
  const [framesDrawing, setFramesDrawing] = useState(false)
  const [photosVisible, setPhotosVisible] = useState(false)
  const [contentVisible, setContentVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        const aboveViewport = entry.boundingClientRect.top < 0
        if (entry.isIntersecting) {
          setCameraVisible(true)
          setTimeout(() => setFramesDrawing(true), 700)
          setTimeout(() => setPhotosVisible(true), 1300)
          setTimeout(() => setContentVisible(true), 2100)
        } else if (!aboveViewport) {
          setCameraVisible(false)
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
      {/* Clapperboard icon */}
      <div
        className="flex justify-center mb-14 transition-all duration-700"
        style={{
          opacity: cameraVisible ? 1 : 0,
          transform: cameraVisible ? "translateY(0) scale(1)" : "translateY(-12px) scale(0.75)",
        }}
      >
        <Clapperboard className="w-11 h-11 text-[#7a1a24]" strokeWidth={1.2} />
      </div>

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
              className="absolute inset-0 transition-all duration-1200"
              style={{
                opacity: photosVisible ? 1 : 0,
                transform: photosVisible ? "scale(1)" : "scale(1.05)",
                transitionDelay: `${index * 0.18}s`,
                transitionDuration: "1200ms",
              }}
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                style={{
                  filter: "contrast(1.15) brightness(0.7) saturate(0.8)",
                }}
              />
            </div>

            {/* Cinematic gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.45) 45%, rgba(0,0,0,0.15) 100%)",
                opacity: photosVisible ? 1 : 0,
                transition: `opacity 1s ease ${index * 0.18}s`,
              }}
            />

            {/* Letterbox bars */}
            <div className="absolute top-0 left-0 right-0 h-5 bg-black/70 z-10" />
            <div className="absolute bottom-0 left-0 right-0 h-5 bg-black/70 z-10" />

            {/* SVG Film Frame */}
            <svg
              className="absolute inset-0 w-full h-full z-20"
              viewBox={`0 0 ${VW} ${VH}`}
            >
              {/* Main border */}
              <rect
                x={1.5} y={1.5}
                width={VW - 3} height={VH - 3}
                rx={2}
                fill="none"
                stroke="rgba(255,255,255,0.55)"
                strokeWidth={1.5}
                strokeDasharray={PERIMETER}
                strokeDashoffset={framesDrawing ? 0 : PERIMETER}
                style={{
                  transition: `stroke-dashoffset 1.2s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.25}s`,
                }}
              />
              {/* Inner border accent */}
              <rect
                x={20} y={20}
                width={VW - 40} height={VH - 40}
                rx={1}
                fill="none"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth={0.8}
                strokeDasharray={PERIMETER - 120}
                strokeDashoffset={framesDrawing ? 0 : PERIMETER - 120}
                style={{
                  transition: `stroke-dashoffset 1.4s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.25 + 0.2}s`,
                }}
              />
              {/* Top sprocket holes */}
              {Array.from({ length: SPROCKET_COUNT }).map((_, i) => {
                const spacing = (VW - 60) / (SPROCKET_COUNT - 1)
                return (
                  <rect
                    key={`t${i}`}
                    x={30 + i * spacing - 8} y={6}
                    width={16} height={9} rx={2}
                    fill="none"
                    stroke="rgba(255,255,255,0.45)"
                    strokeWidth={1}
                    opacity={framesDrawing ? 1 : 0}
                    style={{
                      transition: `opacity 0.25s ease ${index * 0.25 + 1.0 + i * 0.04}s`,
                    }}
                  />
                )
              })}
              {/* Bottom sprocket holes */}
              {Array.from({ length: SPROCKET_COUNT }).map((_, i) => {
                const spacing = (VW - 60) / (SPROCKET_COUNT - 1)
                return (
                  <rect
                    key={`b${i}`}
                    x={30 + i * spacing - 8} y={VH - 15}
                    width={16} height={9} rx={2}
                    fill="none"
                    stroke="rgba(255,255,255,0.45)"
                    strokeWidth={1}
                    opacity={framesDrawing ? 1 : 0}
                    style={{
                      transition: `opacity 0.25s ease ${index * 0.25 + 1.0 + i * 0.04}s`,
                    }}
                  />
                )
              })}
              {/* Corner accent marks */}
              {[
                [28, 28], [VW - 28, 28], [28, VH - 28], [VW - 28, VH - 28]
              ].map(([cx, cy], i) => (
                <g key={`c${i}`} opacity={framesDrawing ? 0.6 : 0}
                  style={{ transition: `opacity 0.4s ease ${index * 0.25 + 1.3}s` }}>
                  <line x1={cx - 10} y1={cy} x2={cx + 10} y2={cy} stroke="rgba(255,255,255,0.6)" strokeWidth={1} />
                  <line x1={cx} y1={cy - 10} x2={cx} y2={cy + 10} stroke="rgba(255,255,255,0.6)" strokeWidth={1} />
                </g>
              ))}
            </svg>

            {/* Text content */}
            <div className="absolute inset-x-0 bottom-7 px-7 z-30">
              {/* Number + line */}
              <div
                className="flex items-center gap-3 mb-2 transition-all duration-600"
                style={{
                  opacity: contentVisible ? 1 : 0,
                  transitionDelay: `${index * 0.15}s`,
                }}
              >
                <span className="text-[11px] text-white/50 tracking-[0.6em] font-light">{service.id}</span>
                <div className="flex-1 h-px bg-white/25 max-w-[48px]" />
              </div>
              {/* Title */}
              <h3
                className="text-2xl md:text-3xl font-bold text-white tracking-widest mb-2 transition-all duration-700"
                style={{
                  opacity: contentVisible ? 1 : 0,
                  transform: contentVisible ? "translateY(0)" : "translateY(14px)",
                  transitionDelay: `${index * 0.15 + 0.08}s`,
                }}
              >
                {service.title}
              </h3>
              {/* Description */}
              <p
                className="text-[11px] text-gray-300/80 leading-relaxed tracking-wider transition-all duration-700"
                style={{
                  opacity: contentVisible ? 1 : 0,
                  transform: contentVisible ? "translateY(0)" : "translateY(10px)",
                  transitionDelay: `${index * 0.15 + 0.18}s`,
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
