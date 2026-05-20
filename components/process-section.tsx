"use client"

import { useRef, useState, useEffect } from "react"

const processSteps = [
  {
    number: "01",
    title: "ヒアリング・打ち合わせ",
    description: "ご予算・納期・ご要望を伺い、企画コンセプトを設計",
    details: ["目的・ターゲットの明確化", "予算の確認", "スケジュール調整"],
  },
  {
    number: "02",
    title: "撮影準備",
    description: "企画・脚本・絵コンテ・ロケハン・キャスティング",
    details: ["企画書・絵コンテの作成", "ロケーション選定", "スタジオ手配", "キャスティング・機材調達"],
  },
  {
    number: "03",
    title: "撮影・収録",
    description: "映像・音声の収録",
    details: ["ロケーション撮影", "スタジオ撮影"],
  },
  {
    number: "04",
    title: "編集・修正・納品",
    description: "映像・音声の編集、テロップ・BGM・効果音の挿入、修正対応の上納品",
    details: ["映像編集・カラーグレーディング", "テロップ・BGM・効果音挿入", "修正対応", "各種フォーマット納品"],
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
      className="py-20 relative overflow-hidden"
      style={{
        background: "var(--background)" ,
        opacity: sectionVisible ? 1 : 0,
        transform: sectionVisible ? "none" : "translateY(24px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
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
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#7a1a24]/55" />
              <div className="w-1.5 h-1.5 rotate-45 bg-[#7a1a24]/55 shrink-0" />
            </div>
            <h2 className="text-3xl font-bold tracking-widest text-[#1a1a1a]">PROCESS</h2>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rotate-45 bg-[#7a1a24]/55 shrink-0" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#7a1a24]/55" />
            </div>
          </div>
          <p
            className="text-lg text-gray-500 mb-4"
            style={{ opacity: sectionVisible ? 1 : 0, transition: "opacity 0.5s ease 0.25s" }}
          >
            制作の流れ
          </p>
          <p
            className="text-gray-500 max-w-2xl mx-auto text-sm"
            style={{ opacity: sectionVisible ? 1 : 0, transition: "opacity 0.5s ease 0.35s" }}
          >
            ヒアリングから納品まで、4つのステップで高品質な映像制作を行います。
          </p>
        </div>

        {/* Desktop: horizontal 4-column */}
        <div className="hidden md:grid md:grid-cols-4 max-w-5xl mx-auto relative">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="relative px-6 pt-8 pb-8"
              style={{
                borderLeft: index === 0 ? "none" : "1px solid #e8e0d6",
                opacity: visibleItems[index] ? 1 : 0,
                transform: visibleItems[index] ? "translateY(0)" : "translateY(18px)",
                transition: "opacity 0.65s ease, transform 0.65s cubic-bezier(0.16,1,0.3,1)",
              }}
            >
              {/* Large outlined number */}
              <div
                className="text-[68px] font-bold leading-none mb-5 select-none"
                style={{
                  color: "transparent",
                  WebkitTextStroke: "1.5px rgba(122,26,36,0.25)",
                } as React.CSSProperties}
              >
                {step.number}
              </div>

              {/* Arrow connector — between numbers */}
              {index < 3 && (
                <div
                  className="absolute right-0 top-[56px] z-10 flex items-center"
                  style={{
                    transform: "translateX(50%)",
                    opacity: visibleItems[index] ? 1 : 0,
                    transition: "opacity 0.5s ease 0.4s",
                  }}
                >
                  <div className="w-5 h-px bg-[#7a1a24]/40" />
                  <div
                    style={{
                      width: 0,
                      height: 0,
                      borderTop: "5px solid transparent",
                      borderBottom: "5px solid transparent",
                      borderLeft: "8px solid rgba(122,26,36,0.5)",
                    }}
                  />
                </div>
              )}

              <h3 className="text-[#1a1a1a] font-bold text-sm tracking-wider leading-snug mb-3">
                {step.title}
              </h3>

              <div className="w-8 h-px bg-[#d9cfc4] mb-4" />

              <p className="text-gray-600 text-xs leading-relaxed mb-5">
                {step.description}
              </p>

              <ul className="space-y-2">
                {step.details.map((detail, di) => (
                  <li key={di} className="flex items-start gap-2 text-gray-500 text-[11px] leading-relaxed">
                    <span className="mt-0.5 shrink-0 leading-none text-[#7a1a24]/50">▸</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile: vertical */}
        <div className="md:hidden max-w-sm mx-auto">
          {processSteps.map((step, index) => (
            <div key={index}>
              <div
                className="flex gap-5 py-7"
                style={{
                  opacity: visibleItems[index] ? 1 : 0,
                  transform: visibleItems[index] ? "translateX(0)" : "translateX(-14px)",
                  transition: "opacity 0.65s ease, transform 0.65s cubic-bezier(0.16,1,0.3,1)",
                }}
              >
                <div
                  className="text-5xl font-bold leading-none shrink-0 w-14 pt-0.5 select-none"
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "1.5px rgba(122,26,36,0.25)",
                  } as React.CSSProperties}
                >
                  {step.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-[#1a1a1a] font-bold text-sm tracking-wider leading-snug mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed mb-3">
                    {step.description}
                  </p>
                  <ul className="space-y-1.5">
                    {step.details.map((detail, di) => (
                      <li key={di} className="flex items-start gap-2 text-gray-500 text-[11px]">
                        <span className="mt-0.5 shrink-0 leading-none text-[#7a1a24]/50">▸</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* Downward arrow between mobile steps */}
              {index < 3 && (
                <div
                  className="flex justify-center py-1"
                  style={{
                    opacity: visibleItems[index] ? 1 : 0,
                    transition: "opacity 0.4s ease 0.4s",
                  }}
                >
                  <div className="flex flex-col items-center gap-0.5">
                    <div className="w-px h-4 bg-[#7a1a24]/35" />
                    <div
                      style={{
                        width: 0, height: 0,
                        borderLeft: "5px solid transparent",
                        borderRight: "5px solid transparent",
                        borderTop: "7px solid rgba(122,26,36,0.45)",
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="text-center mt-16"
          style={{ opacity: sectionVisible ? 1 : 0, transition: "opacity 0.6s ease 1s" }}
        >
          <div className="bg-white p-8 border border-[#e0d8ce] shadow-sm max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4 text-[#1a1a1a]">制作の流れについてご質問がございましたら</h3>
            <p className="text-gray-600 mb-6 text-sm">
              詳しい制作プロセスや、最適なプランについて、お気軽にご相談ください。お見積りは無料です。
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdf35MRg59aC8PLeeNP3F7HCldqZF6YkM4cQi8J5jbMedF8EQ/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#7a1a24] text-white px-6 py-3 hover:bg-[#5a1219] transition-colors"
            >
              お問い合わせ
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
