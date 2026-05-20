"use client"

import { useRef, useState, useEffect } from "react"

const items = [
  { title: "ハイクオリティな映像", desc: "同価格帯と比較して差は歴然" },
  { title: '短尺でも"物語性"', desc: "ジャンルを問わない幅広い表現" },
  { title: "コストパフォーマンス高", desc: "コストが1/2になるケースも" },
]

const TITLE_LINES = ["現役映画監督が", "撮影から編集まで監修"]

export default function StrengthsBand() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.12 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const charsLine0 = TITLE_LINES[0].length

  return (
    <div
      ref={ref}
      className="max-w-5xl mx-auto px-4 my-6"
      style={{
        // 親はopacityだけ短く(0.4s)先に終わらせる → 子アニメーションが0.45s以降に開始
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.4s ease, transform 0.4s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      {/* Top accent line */}
      <div
        className="h-px mb-0 origin-left"
        style={{
          background: "linear-gradient(to right, #c84058, rgba(200,64,88,0.15), transparent)",
          transform: visible ? "scaleX(1)" : "scaleX(0)",
          transition: "transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.45s",
        }}
      />

      <div
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(110deg, #1c1416 0%, #271620 55%, #1d1416 100%)",
        }}
      >
        {/* Film-grain texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, rgba(255,255,255,0.009) 0px, rgba(255,255,255,0.009) 1px, transparent 1px, transparent 18px)",
          }}
        />

        <div className="relative flex flex-col md:flex-row items-stretch">

          {/* Left — THE REASON */}
          <div
            className="md:w-56 shrink-0 px-7 py-6 flex flex-col justify-center border-b border-white/[0.08] md:border-b-0 md:border-r md:border-white/[0.08]"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-14px)",
              // 親が0.4sで終わるので0.45s以降に開始
              transition: "opacity 0.5s ease 0.45s, transform 0.5s cubic-bezier(0.16,1,0.3,1) 0.45s",
            }}
          >
            {/* THE REASON label */}
            <div className="flex items-center gap-2 mb-3">
              <div
                className="h-px bg-[#c84058] origin-left"
                style={{
                  width: "14px",
                  transform: visible ? "scaleX(1)" : "scaleX(0)",
                  transition: "transform 0.4s ease 0.75s",
                }}
              />
              <p className="text-[11px] tracking-[0.5em] text-[#d45060] font-medium uppercase">
                The Reason
              </p>
            </div>

            {/* Character-by-character title animation — starts at 0.55s */}
            <p className="text-white text-[18px] font-bold tracking-wider leading-snug">
              {TITLE_LINES.map((line, li) => (
                <span key={li} className="block">
                  {line.split("").map((char, ci) => {
                    const delay = 0.55 + (li * charsLine0 + ci) * 0.05
                    return (
                      <span
                        key={ci}
                        className="inline-block"
                        style={{
                          opacity: visible ? 1 : 0,
                          transform: visible ? "translateY(0)" : "translateY(6px)",
                          transition: `opacity 0.35s ease ${delay}s, transform 0.35s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
                        }}
                      >
                        {char}
                      </span>
                    )
                  })}
                </span>
              ))}
            </p>

            <div
              className="w-8 h-px bg-[#7a1a24]/50 mt-3 origin-left"
              style={{
                transform: visible ? "scaleX(1)" : "scaleX(0)",
                transition: "transform 0.5s ease 1.2s",
              }}
            />
          </div>

          {/* Right — 3 strengths */}
          <div className="flex-1 flex flex-col md:flex-row divide-y divide-white/[0.08] md:divide-y-0 md:divide-x md:divide-white/[0.08]">
            {items.map((item, i) => (
              <div
                key={i}
                className="flex-1 flex items-center gap-3.5 px-6 py-5"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateX(0)" : "translateX(12px)",
                  transition: `opacity 0.5s ease ${0.5 + i * 0.15}s, transform 0.5s cubic-bezier(0.16,1,0.3,1) ${0.5 + i * 0.15}s`,
                }}
              >
                <span className="text-[#d45060] text-[13px] shrink-0 leading-none">▸</span>
                <div>
                  <p className="text-white text-[13px] font-bold tracking-wider leading-snug">
                    {item.title}
                  </p>
                  <p className="text-gray-400 text-[11px] mt-0.5 tracking-wide leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className="h-px origin-right"
        style={{
          background: "linear-gradient(to left, rgba(200,64,88,0.45), rgba(200,64,88,0.08), transparent)",
          transform: visible ? "scaleX(1)" : "scaleX(0)",
          transition: "transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.5s",
        }}
      />
    </div>
  )
}
