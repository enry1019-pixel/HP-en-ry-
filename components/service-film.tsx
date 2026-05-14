"use client"

import { useEffect, useRef, useState } from "react"
import { Clapperboard } from "lucide-react"

const services = [
  { id: "01", title: "企業PR" },
  { id: "02", title: "CM" },
  { id: "03", title: "MV" },
  { id: "04", title: "映画・ドラマ" },
]

const FRAME_W = 300
const FRAME_H = 200
const PERIMETER = 2 * (FRAME_W + FRAME_H)
const SPROCKET_COUNT = 7

export default function ServiceFilm() {
  const [cameraVisible, setCameraVisible] = useState(false)
  const [framesDrawing, setFramesDrawing] = useState(false)
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
          setTimeout(() => setContentVisible(true), 1900)
        } else if (!aboveViewport) {
          setCameraVisible(false)
          setFramesDrawing(false)
          setContentVisible(false)
        }
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={sectionRef}>
      {/* Video camera icon */}
      <div
        className="flex justify-center mb-10 transition-all duration-700"
        style={{
          opacity: cameraVisible ? 1 : 0,
          transform: cameraVisible ? "translateY(0)" : "translateY(16px)",
        }}
      >
        <Clapperboard className="w-10 h-10 text-[#7a1a24]" strokeWidth={1.5} />
      </div>

      {/* 2×2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto px-4">
        {services.map((service, index) => (
          <div key={service.id} className="relative flex items-center justify-center">
            <svg
              width="100%"
              viewBox={`0 0 ${FRAME_W} ${FRAME_H}`}
              style={{ maxWidth: FRAME_W }}
            >
              {/* Main border */}
              <rect
                x={2} y={2}
                width={FRAME_W - 4} height={FRAME_H - 4}
                rx={3}
                fill="rgba(250,247,242,0.6)"
                stroke="#7a1a24"
                strokeWidth={1.5}
                strokeDasharray={PERIMETER}
                strokeDashoffset={framesDrawing ? 0 : PERIMETER}
                style={{
                  transition: `stroke-dashoffset 1.1s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.25}s`,
                }}
              />
              {/* Top sprocket line */}
              <line
                x1={2} y1={24} x2={FRAME_W - 2} y2={24}
                stroke="#7a1a24" strokeWidth={0.8}
                opacity={framesDrawing ? 0.35 : 0}
                style={{ transition: `opacity 0.3s ease ${index * 0.25 + 0.9}s` }}
              />
              {/* Bottom sprocket line */}
              <line
                x1={2} y1={FRAME_H - 24} x2={FRAME_W - 2} y2={FRAME_H - 24}
                stroke="#7a1a24" strokeWidth={0.8}
                opacity={framesDrawing ? 0.35 : 0}
                style={{ transition: `opacity 0.3s ease ${index * 0.25 + 0.9}s` }}
              />
              {/* Top sprocket holes */}
              {Array.from({ length: SPROCKET_COUNT }).map((_, i) => {
                const spacing = (FRAME_W - 40) / (SPROCKET_COUNT - 1)
                return (
                  <rect
                    key={`t${i}`}
                    x={20 + i * spacing - 6} y={7}
                    width={12} height={10} rx={2}
                    fill="none" stroke="#7a1a24" strokeWidth={1}
                    opacity={framesDrawing ? 0.45 : 0}
                    style={{ transition: `opacity 0.2s ease ${index * 0.25 + 1.0 + i * 0.04}s` }}
                  />
                )
              })}
              {/* Bottom sprocket holes */}
              {Array.from({ length: SPROCKET_COUNT }).map((_, i) => {
                const spacing = (FRAME_W - 40) / (SPROCKET_COUNT - 1)
                return (
                  <rect
                    key={`b${i}`}
                    x={20 + i * spacing - 6} y={FRAME_H - 17}
                    width={12} height={10} rx={2}
                    fill="none" stroke="#7a1a24" strokeWidth={1}
                    opacity={framesDrawing ? 0.45 : 0}
                    style={{ transition: `opacity 0.2s ease ${index * 0.25 + 1.0 + i * 0.04}s` }}
                  />
                )
              })}
            </svg>

            {/* Content overlay */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
              style={{
                opacity: contentVisible ? 1 : 0,
                transition: `opacity 0.8s ease ${index * 0.2}s`,
              }}
            >
              <span className="text-xs text-[#7a1a24]/40 tracking-[0.5em] font-light mb-3">
                {service.id}
              </span>
              <h3 className="text-2xl font-bold text-gray-900 tracking-widest">
                {service.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
