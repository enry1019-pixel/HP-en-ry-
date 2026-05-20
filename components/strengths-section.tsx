"use client"

import { useRef, useState, useEffect } from "react"

const strengths = [
  {
    number: "01",
    title: "ハイクオリティな映像",
    description:
      "同価格帯の映像と比較すると「差」は歴然。現役映画監督の演出力と表現力が、他社との圧倒的な差を生み出します。",
  },
  {
    number: "02",
    title: '短尺でも"物語性"',
    description:
      "感情系からコメディまで、ジャンルを問わず幅広い表現に対応。数十秒の映像にも、観る人の心を動かすストーリーを宿します。",
  },
  {
    number: "03",
    title: "コストパフォーマンス高",
    description:
      "監督が企画・撮影・編集を一貫して担うことで中間コストを削減。実際にコストが1/2になるケースも。",
  },
]

export default function StrengthsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [cardsVisible, setCardsVisible] = useState([false, false, false])

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !visible) {
          setVisible(true)
          ;[0, 1, 2].forEach((i) => {
            setTimeout(() => {
              setCardsVisible((prev) => {
                const next = [...prev]
                next[i] = true
                return next
              })
            }, 300 + i * 150)
          })
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [visible])

  return (
    <section
      ref={sectionRef}
      id="strengths"
      className="py-20 bg-[#faf7f2] relative overflow-hidden"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(24px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      <div className="container mx-auto px-4">

        {/* Section header */}
        <div className="text-center mb-16">
          <div
            className="flex items-center justify-center gap-4 mb-3"
            style={{ opacity: visible ? 1 : 0, transition: "opacity 0.6s ease 0.1s" }}
          >
            <div className="flex items-center gap-2">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#7a1a24]/55" />
              <div className="w-1.5 h-1.5 rotate-45 bg-[#7a1a24]/55 shrink-0" />
            </div>
            <h2 className="text-3xl font-bold tracking-widest text-[#1a1a1a]">WHY EN-RY</h2>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rotate-45 bg-[#7a1a24]/55 shrink-0" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#7a1a24]/55" />
            </div>
          </div>
          <p
            className="text-lg text-gray-500"
            style={{ opacity: visible ? 1 : 0, transition: "opacity 0.5s ease 0.2s" }}
          >
            選ばれる理由
          </p>
        </div>

        {/* Central statement */}
        <div
          className="text-center max-w-2xl mx-auto mb-16"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 0.7s ease 0.25s" }}
        >
          <p className="text-xs tracking-[0.55em] text-[#7a1a24] mb-5 font-light">THE REASON</p>
          <h3 className="text-2xl md:text-3xl font-bold leading-relaxed text-[#1a1a1a]">
            現役映画監督が、<br />
            撮影から編集まで監修。
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed mt-5 max-w-lg mx-auto">
            だから、同価格帯とは"差"が歴然としています。<br />
            企画・脚本・演出・編集まで一貫して担うことで、<br className="hidden md:block" />
            高品質な映像をコスト最適な形でご提供します。
          </p>
          <div className="w-12 h-px bg-[#7a1a24]/30 mx-auto mt-8" />
        </div>

        {/* 3 strength cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {strengths.map((item, index) => (
            <div
              key={item.number}
              className="bg-white border border-[#e0d8ce] p-8 hover:shadow-md transition-shadow duration-300"
              style={{
                opacity: cardsVisible[index] ? 1 : 0,
                transform: cardsVisible[index] ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 0.65s ease, transform 0.65s cubic-bezier(0.16,1,0.3,1)",
              }}
            >
              {/* Outlined number */}
              <div
                className="text-[64px] font-bold leading-none mb-5 select-none"
                style={{
                  color: "transparent",
                  WebkitTextStroke: "1.5px rgba(122,26,36,0.22)",
                } as React.CSSProperties}
              >
                {item.number}
              </div>

              <h4 className="text-base font-bold mb-3 text-[#1a1a1a] tracking-wide">
                {item.title}
              </h4>

              <div className="w-8 h-px bg-[#d9cfc4] mb-4" />

              <p className="text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
