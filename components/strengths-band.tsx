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
      <div className="relative overflow-hidden py-12 md:py-16">
        {/* ── 背景：でかでかと THE REASON ── */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 0.8s ease 0.1s" }}
        >
          <span
            className="font-black tracking-[0.1em] whitespace-nowrap"
            style={{
              fontSize: "clamp(80px, 16vw, 180px)",
              color: "rgba(122,26,36,0.08)",
              textShadow: "0 4px 0 rgba(122,26,36,0.04)",
            } as React.CSSProperties}
          >
            THE REASON
          </span>
        </div>

        {/* ── コンテンツ ── */}
        <div className="relative z-10 max-w-5xl mx-auto px-8 md:px-12 flex flex-col gap-10 md:gap-12">

          {/* Top: label + emphasized title */}
          <div style={enterAnim("sb-right", "0.55s", 0.1, visible)}>
            <div className="flex items-center gap-4 mb-5">
              <p className="text-[13px] tracking-[0.5em] text-[#7a1a24] font-bold uppercase shrink-0">
                The Reason
              </p>
              <div
                className="h-px bg-[#7a1a24]/40 w-16"
                style={lineAnim(0.3, visible, "left")}
              />
            </div>
            <p
              className="text-[#1c1614] font-black tracking-wide leading-tight"
              style={{
                fontSize: "clamp(32px, 5vw, 56px)",
                textShadow:
                  "0 2px 0 rgba(255,255,255,0.9), 2px 4px 0 rgba(0,0,0,0.15), 3px 6px 14px rgba(0,0,0,0.09)",
              }}
            >
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

          {/* Bottom: 3 items */}
          <div className="relative">
            {/* スクラッチテクスチャ */}
            <div
              className="absolute -inset-4 pointer-events-none"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(-68deg, transparent 0px, transparent 12px, rgba(0,0,0,0.045) 12px, rgba(0,0,0,0.045) 13px),
                  repeating-linear-gradient(-71deg, transparent 0px, transparent 21px, rgba(0,0,0,0.03)  21px, rgba(0,0,0,0.03)  22px),
                  repeating-linear-gradient(-65deg, transparent 0px, transparent 7px,  rgba(0,0,0,0.025) 7px,  rgba(0,0,0,0.025) 8px)
                `,
                opacity: visible ? 1 : 0,
                transition: "opacity 0.6s ease 0.5s",
              }}
            />
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-10">
            {items.map((item, i) => (
              <div
                key={i}
                style={enterAnim("sb-left", "0.5s", 0.3 + i * 0.14, visible)}
              >
                <div
                  className="h-px bg-[#7a1a24]/30 mb-5 origin-left"
                  style={lineAnim(0.4 + i * 0.14, visible, "left")}
                />
                <h4
                  className="text-[#1c1614] text-[17px] font-black tracking-wider leading-snug mb-4"
                  style={{
                    textShadow:
                      "0 1px 0 rgba(255,255,255,0.85), 1px 2px 0 rgba(0,0,0,0.12), 2px 3px 6px rgba(0,0,0,0.08)",
                  }}
                >
                  {item.title}
                </h4>
                <p className="text-[#1a1a1a] text-[13px] leading-relaxed tracking-wide">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          </div>

        </div>

        {/* ── 上下アクセントライン ── */}
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(122,26,36,0.25) 30%, rgba(122,26,36,0.25) 70%, transparent)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(122,26,36,0.25) 30%, rgba(122,26,36,0.25) 70%, transparent)" }} />
      </div>
    </div>
  )
}
