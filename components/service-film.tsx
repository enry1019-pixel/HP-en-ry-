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

function FilmClapper({ clap }: { clap: boolean }) {
  return (
    <svg viewBox="0 0 130 100" className="w-20 h-auto drop-shadow-xl" style={{ filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.35))" }}>
      <defs>
        <linearGradient id="boardGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#0d0d0d" />
        </linearGradient>
        <linearGradient id="panelGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f0ece4" />
          <stop offset="100%" stopColor="#e8e3d8" />
        </linearGradient>
        <clipPath id="armClip">
          <rect x="4" y="10" width="122" height="18" rx="3" />
        </clipPath>
      </defs>

      {/* Body shadow */}
      <rect x="7" y="32" width="122" height="65" rx="5" fill="rgba(0,0,0,0.5)" />

      {/* Board body */}
      <rect x="4" y="28" width="122" height="65" rx="4" fill="url(#boardGrad)" />
      <rect x="4" y="28" width="122" height="65" rx="4" fill="none" stroke="#444" strokeWidth="1" />

      {/* White text panel */}
      <rect x="10" y="34" width="110" height="54" rx="2" fill="url(#panelGrad)" />

      {/* Grid lines */}
      <line x1="10" y1="47" x2="120" y2="47" stroke="#c8c2b6" strokeWidth="0.7" />
      <line x1="10" y1="60" x2="120" y2="60" stroke="#c8c2b6" strokeWidth="0.7" />
      <line x1="10" y1="74" x2="120" y2="74" stroke="#c8c2b6" strokeWidth="0.7" />
      <line x1="67" y1="34" x2="67" y2="88" stroke="#c8c2b6" strokeWidth="0.7" />

      {/* Labels */}
      <text x="13" y="42" fill="#999" fontSize="4" fontFamily="Arial,sans-serif" letterSpacing="0.8">PRODUCTION</text>
      <text x="70" y="42" fill="#999" fontSize="4" fontFamily="Arial,sans-serif" letterSpacing="0.8">DIRECTOR</text>
      <text x="13" y="55" fill="#999" fontSize="4" fontFamily="Arial,sans-serif" letterSpacing="0.8">SCENE</text>
      <text x="70" y="55" fill="#999" fontSize="4" fontFamily="Arial,sans-serif" letterSpacing="0.8">TAKE</text>
      <text x="13" y="69" fill="#999" fontSize="4" fontFamily="Arial,sans-serif" letterSpacing="0.8">CAMERA</text>
      <text x="70" y="69" fill="#999" fontSize="4" fontFamily="Arial,sans-serif" letterSpacing="0.8">DATE</text>

      {/* Values */}
      <text x="13" y="44" dy="8" fill="#1a1a1a" fontSize="6" fontFamily="Arial,sans-serif" fontWeight="bold">en-ry</text>
      <text x="70" y="44" dy="8" fill="#1a1a1a" fontSize="5.5" fontFamily="Arial,sans-serif" fontWeight="bold">田中慎太郎</text>
      <text x="13" y="57" dy="8" fill="#1a1a1a" fontSize="7" fontFamily="Arial,sans-serif" fontWeight="bold">—</text>
      <text x="70" y="57" dy="8" fill="#1a1a1a" fontSize="7" fontFamily="Arial,sans-serif" fontWeight="bold">—</text>
      <text x="13" y="71" dy="8" fill="#1a1a1a" fontSize="5.5" fontFamily="Arial,sans-serif" fontWeight="bold">A</text>
      <text x="70" y="71" dy="8" fill="#1a1a1a" fontSize="5.5" fontFamily="Arial,sans-serif" fontWeight="bold">2026</text>

      {/* Hinge posts */}
      <rect x="4" y="26" width="122" height="4" rx="1" fill="#555" />
      <circle cx="16" cy="28" r="5" fill="#3a3a3a" stroke="#555" strokeWidth="1" />
      <circle cx="16" cy="28" r="2.5" fill="#222" />
      <circle cx="114" cy="28" r="5" fill="#3a3a3a" stroke="#555" strokeWidth="1" />
      <circle cx="114" cy="28" r="2.5" fill="#222" />

      {/* Clapper arm - animates on clap */}
      <g
        style={{
          transformOrigin: "16px 28px",
          transform: clap ? "rotate(0deg)" : "rotate(-18deg)",
          transition: clap ? "transform 0.12s cubic-bezier(0.4, 0, 0.2, 1) 0.05s" : "none",
        }}
      >
        {/* Arm shadow */}
        <rect x="6" y="12" width="120" height="18" rx="3" fill="rgba(0,0,0,0.35)" />
        {/* Arm body */}
        <rect x="4" y="10" width="122" height="18" rx="3" fill="#111" />
        {/* Diagonal stripes */}
        <g clipPath="url(#armClip)">
          {Array.from({ length: 14 }).map((_, i) => (
            <rect
              key={i}
              x={-5 + i * 10}
              y="10"
              width="10"
              height="18"
              fill={i % 2 === 0 ? "#ffffff" : "#111111"}
              transform={`skewX(-18)`}
              style={{ transformOrigin: "0 10px" }}
            />
          ))}
        </g>
        {/* Arm border */}
        <rect x="4" y="10" width="122" height="18" rx="3" fill="none" stroke="#555" strokeWidth="1" />
        {/* Arm label */}
        <text x="65" y="22" textAnchor="middle" fill="rgba(0,0,0,0.5)" fontSize="5" fontFamily="Arial,sans-serif" fontWeight="bold" letterSpacing="2">CLAPPER</text>
      </g>
    </svg>
  )
}

export default function ServiceFilm() {
  const [cameraVisible, setCameraVisible] = useState(false)
  const [clapDone, setClapDone] = useState(false)
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
          setTimeout(() => setClapDone(true), 900)
          setTimeout(() => setFramesDrawing(true), 1100)
          setTimeout(() => setPhotosVisible(true), 1700)
          setTimeout(() => setContentVisible(true), 2500)
        } else if (!aboveViewport) {
          setCameraVisible(false)
          setClapDone(false)
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
        <FilmClapper clap={clapDone} />
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
              className="absolute inset-0"
              style={{
                opacity: photosVisible ? 1 : 0,
                transform: photosVisible ? "scale(1)" : "scale(1.05)",
                transitionDelay: `${index * 0.18}s`,
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
                transition: `opacity 1s ease ${index * 0.18}s`,
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
                style={{ transition: `stroke-dashoffset 1.2s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.25}s` }}
              />
              <rect
                x={20} y={20}
                width={VW - 40} height={VH - 40}
                rx={1} fill="none"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth={0.8}
                strokeDasharray={PERIMETER - 120}
                strokeDashoffset={framesDrawing ? 0 : PERIMETER - 120}
                style={{ transition: `stroke-dashoffset 1.4s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.25 + 0.2}s` }}
              />
              {Array.from({ length: SPROCKET_COUNT }).map((_, i) => {
                const spacing = (VW - 60) / (SPROCKET_COUNT - 1)
                return (
                  <g key={i} opacity={framesDrawing ? 1 : 0} style={{ transition: `opacity 0.25s ease ${index * 0.25 + 1.0 + i * 0.04}s` }}>
                    <rect x={30 + i * spacing - 8} y={6} width={16} height={9} rx={2} fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth={1} />
                    <rect x={30 + i * spacing - 8} y={VH - 15} width={16} height={9} rx={2} fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth={1} />
                  </g>
                )
              })}
              {[[28, 28], [VW - 28, 28], [28, VH - 28], [VW - 28, VH - 28]].map(([cx, cy], i) => (
                <g key={`c${i}`} opacity={framesDrawing ? 0.6 : 0} style={{ transition: `opacity 0.4s ease ${index * 0.25 + 1.3}s` }}>
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
