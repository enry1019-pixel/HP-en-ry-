"use client"

import { useRef, useState, useEffect } from "react"

const TITLE_LINES = ["映画監督が", "撮影から編集まで監修"]

const items = [
  {
    title: "ハイクオリティな映像",
    desc: "最新のトレンドや機材、編集技術を駆使し、ターゲットのエンゲージメントを最大化する「魅せる映像」",
  },
  {
    title: "短尺でもストーリー性",
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

  const n0 = TITLE_LINES[0].length // 5 chars

  return (
    <div ref={ref} className="max-w-5xl mx-auto px-4 my-8">

      {/* Main panel — 淡いクリーム系 + shadow */}
      <div
        className="relative overflow-hidden border border-[#d9cfc4]"
        style={{
          background: "linear-gradient(110deg, #f8f0e8 0%, #fdf7f2 55%, #f8f0e8 100%)",
          borderLeft: "3px solid #7a1a24",
          boxShadow: "0 4px 28px rgba(0,0,0,0.09), 0 1px 4px rgba(0,0,0,0.05)",
        }}
      >
        {/* Warm diagonal texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, rgba(122,26,36,0.022) 0px, rgba(122,26,36,0.022) 1px, transparent 1px, transparent 24px)",
          }}
        />

        <div className="relative flex flex-col md:flex-row items-stretch">

          {/* ── Left: THE REASON ── */}
          <div
            className="md:w-60 shrink-0 px-8 py-7 flex flex-col justify-center border-b border-[#d9cfc4] md:border-b-0 md:border-r md:border-[#d9cfc4]"
            style={enterAnim("sb-right", "0.5s", 0.05, visible)}
          >
            <div className="flex items-center gap-2 mb-3">
              <div
                className="h-px bg-[#7a1a24]"
                style={{ width: "16px", ...lineAnim(0.35, visible, "left") }}
              />
              <p className="text-[10px] tracking-[0.55em] text-[#7a1a24] font-bold uppercase">
                The Reason
              </p>
            </div>

            {/* Typewriter title */}
            <p className="text-[#1a1a1a] text-[18px] font-bold tracking-wide leading-snug">
              {TITLE_LINES.map((line, li) => (
                <span key={li} className="block whitespace-nowrap">
                  {line.split("").map((char, ci) => (
                    <span
                      key={ci}
                      className="inline-block"
                      style={enterAnim("sb-char", "0.38s", 0.12 + (li * n0 + ci) * 0.05, visible)}
                    >
                      {char}
                    </span>
                  ))}
                </span>
              ))}
            </p>

            <div
              className="w-10 h-px bg-[#7a1a24]/40 mt-4"
              style={lineAnim(0.9, visible, "left")}
            />
          </div>

          {/* ── Right: 3 strengths ── */}
          <div className="flex-1 flex flex-col md:flex-row divide-y divide-[#d9cfc4] md:divide-y-0 md:divide-x md:divide-[#d9cfc4]">
            {items.map((item, i) => (
              <div
                key={i}
                className="flex-1 flex items-start gap-3 px-6 py-6"
                style={enterAnim("sb-left", "0.45s", 0.08 + i * 0.13, visible)}
              >
                <span className="text-[#7a1a24] text-[13px] shrink-0 leading-none mt-0.5">▸</span>
                <div>
                  <p className="text-[#1a1a1a] text-[13px] font-bold tracking-wider leading-snug mb-1.5">
                    {item.title}
                  </p>
                  <p className="text-[#5a5a5a] text-[11px] leading-relaxed tracking-wide">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  )
}
