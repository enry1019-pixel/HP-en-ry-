"use client"

import { useRef, useState, useEffect } from "react"

const items = [
  { title: "ハイクオリティな映像", desc: "同価格帯と比較して差は歴然" },
  { title: '短尺でも"物語性"', desc: "ジャンルを問わない幅広い表現" },
  { title: "コストパフォーマンス高", desc: "コストが1/2になるケースも" },
]

export default function StrengthsBand() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="max-w-5xl mx-auto px-4 my-6"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(18px)",
        transition: "opacity 0.65s ease, transform 0.65s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      {/* Top accent line */}
      <div
        className="h-px mb-0 origin-left"
        style={{
          background: "linear-gradient(to right, #7a1a24, rgba(122,26,36,0.15), transparent)",
          transform: visible ? "scaleX(1)" : "scaleX(0)",
          transition: "transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s",
        }}
      />

      <div
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(110deg, #100c0d 0%, #1a0e11 55%, #120b0e 100%)",
        }}
      >
        {/* Film-grain texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, rgba(255,255,255,0.007) 0px, rgba(255,255,255,0.007) 1px, transparent 1px, transparent 18px)",
          }}
        />

        <div className="relative flex flex-col md:flex-row items-stretch">

          {/* Left — THE REASON */}
          <div
            className="md:w-56 shrink-0 px-7 py-6 flex flex-col justify-center border-b border-white/[0.07] md:border-b-0 md:border-r md:border-white/[0.07]"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-14px)",
              transition: "opacity 0.6s ease 0.15s, transform 0.6s cubic-bezier(0.16,1,0.3,1) 0.15s",
            }}
          >
            <p className="text-[8px] tracking-[0.65em] text-[#7a1a24] mb-2.5 font-light uppercase">
              The Reason
            </p>
            <p className="text-white text-[15px] font-bold tracking-wider leading-snug">
              現役映画監督が<br />
              撮影から編集まで監修
            </p>
            <div
              className="w-8 h-px bg-[#7a1a24]/50 mt-3 origin-left"
              style={{
                transform: visible ? "scaleX(1)" : "scaleX(0)",
                transition: "transform 0.5s ease 0.55s",
              }}
            />
          </div>

          {/* Right — 3 strengths */}
          <div className="flex-1 flex flex-col md:flex-row divide-y divide-white/[0.07] md:divide-y-0 md:divide-x md:divide-white/[0.07]">
            {items.map((item, i) => (
              <div
                key={i}
                className="flex-1 flex items-center gap-3.5 px-6 py-5"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateX(0)" : "translateX(12px)",
                  transition: `opacity 0.55s ease ${0.25 + i * 0.13}s, transform 0.55s cubic-bezier(0.16,1,0.3,1) ${0.25 + i * 0.13}s`,
                }}
              >
                <span className="text-[#7a1a24] text-[13px] shrink-0 leading-none">▸</span>
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
          background: "linear-gradient(to left, rgba(122,26,36,0.35), rgba(122,26,36,0.05), transparent)",
          transform: visible ? "scaleX(1)" : "scaleX(0)",
          transition: "transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.35s",
        }}
      />
    </div>
  )
}
