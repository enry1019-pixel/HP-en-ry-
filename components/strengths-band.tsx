"use client"

import { useRef, useState, useEffect } from "react"

const TITLE_LINES = ["映画監督が", "撮影から編集まで監修"]

const items = [
  {
    title: "ハイクオリティな映像",
    desc: "最新のトレンドや機材、編集技術を駆使し、ターゲットのエンゲージメントを最大化する「魅せる映像」",
  },
  {
    title: "ストーリー性",
    desc: "多彩なジャンルや緻密な構成力で深いストーリーを構築し、記憶に残る映像へ",
  },
  {
    title: "コストパフォーマンス高",
    desc: "制作プロセスの効率化と柔軟なチーム編成により、無駄なコストを徹底的にカットし、価格以上の価値をお届けします",
  },
]

function enterAnim(
  name: string,
  duration: string,
  delay: number,
  visible: boolean
): React.CSSProperties {
  if (!visible) return { opacity: 0 }
  return { animation: `${name} ${duration} cubic-bezier(0.16,1,0.3,1) ${delay.toFixed(3)}s both` }
}

function lineAnim(delay: number, visible: boolean, origin: "left" | "right"): React.CSSProperties {
  if (!visible) return { transform: "scaleX(0)", transformOrigin: origin }
  return {
    animation: `sb-line 0.65s cubic-bezier(0.16,1,0.3,1) ${delay.toFixed(2)}s both`,
    transformOrigin: origin,
  }
}

export default function StrengthsBand() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !visible) setVisible(true) },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [visible])

  const n0 = TITLE_LINES[0].length

  return (
    <div ref={ref} className="w-full my-8">
      <div
        className="relative overflow-hidden py-12 md:py-16"
        style={{
          background: "linear-gradient(135deg, #0d0a0b 0%, #1a0d11 50%, #0d0a0b 100%)",
        }}
      >
        {/* ── 背景：でかでかと THE REASON ── */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 0.8s ease 0.1s" }}
        >
          <span
            className="font-black tracking-[0.25em] whitespace-nowrap"
            style={{
              fontSize: "clamp(72px, 14vw, 160px)",
              color: "rgba(255,255,255,0.055)",
              textShadow: "0 4px 0 rgba(0,0,0,0.5), 0 8px 32px rgba(0,0,0,0.25)",
            } as React.CSSProperties}
          >
            THE REASON
          </span>
        </div>

        {/* ── フィルムグレイン ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, rgba(255,255,255,0.008) 0px, rgba(255,255,255,0.008) 1px, transparent 1px, transparent 20px)",
          }}
        />

        {/* ── コンテンツ ── */}
        <div className="relative z-10 max-w-5xl mx-auto px-8 md:px-12 flex flex-col md:flex-row gap-10 md:gap-14 items-start">

          {/* Left: label + typewriter title */}
          <div
            className="md:w-52 shrink-0"
            style={enterAnim("sb-right", "0.55s", 0.1, visible)}
          >
            <p className="text-[9px] tracking-[0.65em] text-[#d45060] font-bold uppercase mb-3">
              The Reason
            </p>
            <div
              className="w-6 h-px bg-[#d45060]/50 mb-5"
              style={lineAnim(0.3, visible, "left")}
            />
            <p className="text-white text-[20px] font-bold tracking-wide leading-snug">
              {TITLE_LINES.map((line, li) => (
                <span key={li} className="block whitespace-nowrap">
                  {line.split("").map((char, ci) => (
                    <span
                      key={ci}
                      className="inline-block"
                      style={enterAnim("sb-char", "0.35s", 0.15 + (li * n0 + ci) * 0.05, visible)}
                    >
                      {char}
                    </span>
                  ))}
                </span>
              ))}
            </p>
          </div>

          {/* Right: 3 items */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-8">
            {items.map((item, i) => (
              <div
                key={i}
                style={enterAnim("sb-left", "0.5s", 0.15 + i * 0.14, visible)}
              >
                {/* 区切りライン */}
                <div
                  className="h-px bg-white/15 mb-5 origin-left"
                  style={lineAnim(0.2 + i * 0.14, visible, "left")}
                />
                <h4 className="text-white text-[13px] font-bold tracking-wider leading-snug mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-[11px] leading-relaxed tracking-wide">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* ── 上下アクセントライン ── */}
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, #7a1a24 30%, #7a1a24 70%, transparent)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, #7a1a24 30%, #7a1a24 70%, transparent)" }} />
      </div>
    </div>
  )
}
