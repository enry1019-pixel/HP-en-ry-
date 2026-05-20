"use client"

import { useRef, useState, useEffect } from "react"

const processSteps = [
  {
    number: "01",
    title: "ヒアリング・打ち合わせ",
    participant: "お客様",
    description: "ご予算・納期・ご要望を伺い、企画コンセプトを設計",
    details: ["目的・ターゲットの明確化", "予算・スケジュールの調整", "企画書・絵コンテの作成"],
  },
  {
    number: "02",
    title: "撮影準備",
    participant: "弊社",
    description: "企画・脚本・絵コンテ・ロケハン・キャスティング・スケジュール調整",
    details: ["ロケーション選定", "スタジオ手配", "キャスティング", "機材調達"],
  },
  {
    number: "03",
    title: "撮影・収録",
    participant: "お客様・弊社",
    description: "映像・音声の収録",
    details: ["ロケーション撮影", "スタジオ撮影", "インタビュー収録", "ドローン撮影"],
  },
  {
    number: "04",
    title: "編集・納品",
    participant: "弊社",
    description: "映像・音声の編集、テロップ・BGM・効果音の挿入",
    details: ["映像編集・カラグレ", "音響・BGM調整", "テロップ挿入", "各種フォーマット納品"],
  },
]

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [sectionVisible, setSectionVisible] = useState(false)
  const [visibleItems, setVisibleItems] = useState([false, false, false, false])

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !sectionVisible) {
          setSectionVisible(true)
          ;[0, 1, 2, 3].forEach((i) => {
            setTimeout(() => {
              setVisibleItems((prev) => {
                const next = [...prev]
                next[i] = true
                return next
              })
            }, 300 + i * 180)
          })
        }
      },
      { threshold: 0.08 }
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [sectionVisible])

  return (
    <section
      ref={sectionRef}
      id="process"
      className="py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #0e0c0c 0%, #1a0a0d 100%)",
        opacity: sectionVisible ? 1 : 0,
        transform: sectionVisible ? "none" : "translateY(24px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      {/* Subtle diagonal film-grain texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, rgba(255,255,255,0.012) 0px, rgba(255,255,255,0.012) 1px, transparent 1px, transparent 20px)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="flex items-center justify-center gap-4 mb-3"
            style={{
              opacity: sectionVisible ? 1 : 0,
              transform: sectionVisible ? "none" : "translateY(8px)",
              transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
            }}
          >
            <div className="flex items-center gap-2">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-white/20" />
              <div className="w-1.5 h-1.5 rotate-45 bg-white/20" />
            </div>
            <h2 className="text-3xl font-bold tracking-widest text-white">PROCESS</h2>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rotate-45 bg-white/20" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-white/20" />
            </div>
          </div>
          <p
            className="text-sm text-gray-500 tracking-[0.45em]"
            style={{
              opacity: sectionVisible ? 1 : 0,
              transition: "opacity 0.5s ease 0.25s",
            }}
          >
            制作の流れ
          </p>
        </div>

        {/* Desktop: horizontal 4-column timeline */}
        <div className="hidden md:grid md:grid-cols-4 gap-px max-w-5xl mx-auto relative">
          {/* Connecting line behind cards */}
          <div
            className="absolute top-[52px] left-[12.5%] right-[12.5%] h-px"
            style={{
              background: "linear-gradient(to right, transparent, rgba(122,26,36,0.3) 10%, rgba(122,26,36,0.3) 90%, transparent)",
              opacity: sectionVisible ? 1 : 0,
              transition: "opacity 0.8s ease 0.6s",
            }}
          />

          {processSteps.map((step, index) => (
            <div
              key={index}
              className="relative px-5 pt-10 pb-8"
              style={{
                borderLeft: index === 0 ? "none" : "1px solid rgba(255,255,255,0.04)",
                opacity: visibleItems[index] ? 1 : 0,
                transform: visibleItems[index] ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.65s ease, transform 0.65s cubic-bezier(0.16,1,0.3,1)`,
              }}
            >
              {/* Step number — outlined */}
              <div
                className="text-[72px] font-bold leading-none mb-5 select-none"
                style={{
                  color: "transparent",
                  WebkitTextStroke: "1px rgba(122,26,36,0.55)",
                } as React.CSSProperties}
              >
                {step.number}
              </div>

              {/* Arrow connector (right side, except last) */}
              {index < 3 && (
                <div
                  className="absolute right-0 top-[52px] translate-x-1/2 z-10 flex items-center"
                  style={{
                    opacity: visibleItems[index] ? 1 : 0,
                    transition: `opacity 0.4s ease 0.3s`,
                  }}
                >
                  <div
                    className="w-0 h-0"
                    style={{
                      borderTop: "5px solid transparent",
                      borderBottom: "5px solid transparent",
                      borderLeft: "7px solid rgba(122,26,36,0.45)",
                    }}
                  />
                </div>
              )}

              {/* Title */}
              <h3 className="text-white font-bold text-sm tracking-wider leading-snug mb-1">
                {step.title}
              </h3>

              {/* Participant */}
              <p
                className="text-xs tracking-[0.25em] mb-4 font-light"
                style={{ color: "rgba(180,60,75,0.8)" }}
              >
                {step.participant}
              </p>

              {/* Divider */}
              <div className="w-8 h-px mb-4" style={{ background: "rgba(255,255,255,0.12)" }} />

              {/* Description */}
              <p className="text-gray-400 text-xs leading-relaxed mb-5">
                {step.description}
              </p>

              {/* Details */}
              <ul className="space-y-2">
                {step.details.map((detail, di) => (
                  <li key={di} className="flex items-start gap-2 text-gray-500 text-[11px] leading-relaxed">
                    <span className="mt-0.5 shrink-0 leading-none" style={{ color: "rgba(122,26,36,0.6)" }}>
                      ▸
                    </span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden max-w-sm mx-auto space-y-0">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="flex gap-5 py-8"
              style={{
                borderBottom: index < 3 ? "1px solid rgba(255,255,255,0.05)" : "none",
                opacity: visibleItems[index] ? 1 : 0,
                transform: visibleItems[index] ? "translateX(0)" : "translateX(-16px)",
                transition: `opacity 0.65s ease, transform 0.65s cubic-bezier(0.16,1,0.3,1)`,
              }}
            >
              {/* Number */}
              <div
                className="text-5xl font-bold leading-none shrink-0 w-14 pt-0.5 select-none"
                style={{
                  color: "transparent",
                  WebkitTextStroke: "1px rgba(122,26,36,0.55)",
                } as React.CSSProperties}
              >
                {step.number}
              </div>

              <div className="flex-1">
                <h3 className="text-white font-bold text-sm tracking-wider leading-snug mb-0.5">
                  {step.title}
                </h3>
                <p
                  className="text-xs tracking-[0.2em] mb-3 font-light"
                  style={{ color: "rgba(180,60,75,0.8)" }}
                >
                  {step.participant}
                </p>
                <p className="text-gray-400 text-xs leading-relaxed mb-3">
                  {step.description}
                </p>
                <ul className="space-y-1.5">
                  {step.details.map((detail, di) => (
                    <li key={di} className="flex items-start gap-2 text-gray-500 text-[11px]">
                      <span className="mt-0.5 shrink-0 leading-none" style={{ color: "rgba(122,26,36,0.6)" }}>
                        ▸
                      </span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="text-center mt-16"
          style={{
            opacity: sectionVisible ? 1 : 0,
            transition: "opacity 0.6s ease 1s",
          }}
        >
          <p className="text-gray-600 text-xs mb-6 tracking-[0.3em] uppercase">
            詳しい流れはお気軽にご相談ください
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdf35MRg59aC8PLeeNP3F7HCldqZF6YkM4cQi8J5jbMedF8EQ/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-white/15 text-white/70 px-8 py-3 text-xs tracking-[0.4em] hover:bg-white/5 hover:text-white transition-colors"
          >
            お問い合わせ
          </a>
        </div>
      </div>
    </section>
  )
}
