"use client"

import { useRef, useState, useEffect } from "react"

const TITLE_LINES = ["映画監督が", "撮影から編集まで監修"]

const items = [
  {
    title: "ハイクオリティな映像",
    desc: "最新のトレンドや機材、編集技術を駆使し、ターゲットのエンゲージメントを最大化する「魅せる映像」",
  },
  {
    title: '短尺でも"物語性"',
    desc: "多彩なジャンルや緻密な構成力で深いストーリーを構築し記憶に残る映像へ",
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
    <div ref={ref} className="max-w-5xl mx-auto px-4 my-6">

      {/* Top accent line */}
      <div
        className="h-px mb-0"
        style={{
          background: "linear-gradient(to right, #7a1a24, rgba(122,26,36,0.12), transparent)",
          ...lineAnim(0.0, visible, "left"),
        }}
      />

      {/* Main panel — 淡いクリーム系 */}
      <div
        className="relative overflow-hidden border border-[#e0d8ce]"
        style={{
          background: "linear-gradient(110deg, #fdf9f6 0%, #fefcf9 55%, #fdf9f6 100%)",
          borderLeft: "2.5px solid rgba(122,26,36,0.35)",
        }}
      >
        {/* Subtle warm-diagonal texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, rgba(122,26,36,0.018) 0px, rgba(122,26,36,0.018) 1px, transparent 1px, transparent 22px)",
          }}
        />

        <div className="relative flex flex-col md:flex-row items-stretch">

          {/* ── Left: THE REASON ── */}
          <div
            className="md:w-56 shrink-0 px-7 py-6 flex flex-col justify-center border-b border-[#e0d8ce] md:border-b-0 md:border-r md:border-[#e0d8ce]"
            style={enterAnim("sb-right", "0.5s", 0.05, visible)}
          >
            <div className="flex items-center gap-2 mb-3">
              <div
                className="h-px bg-[#7a1a24]"
                style={{ width: "14px", ...lineAnim(0.35, visible, "left") }}
              />
              <p className="text-[10px] tracking-[0.55em] text-[#7a1a24] font-medium uppercase">
                The Reason
              </p>
            </div>

            {/* Typewriter title */}
            <p className="text-[#1a1a1a] text-[16px] font-bold tracking-wide leading-snug">
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
              className="w-8 h-px bg-[#7a1a24]/30 mt-3"
              style={lineAnim(0.9, visible, "left")}
            />
          </div>

          {/* ── Right: 3 strengths ── */}
          <div className="flex-1 flex flex-col md:flex-row divide-y divide-[#e0d8ce] md:divide-y-0 md:divide-x md:divide-[#e0d8ce]">
            {items.map((item, i) => (
              <div
                key={i}
                className="flex-1 flex items-start gap-3 px-6 py-5"
                style={enterAnim("sb-left", "0.45s", 0.08 + i * 0.13, visible)}
              >
                <span className="text-[#7a1a24] text-[12px] shrink-0 leading-none mt-0.5">▸</span>
                <div>
                  <p className="text-[#1a1a1a] text-[12px] font-bold tracking-wider leading-snug mb-1">
                    {item.title}
                  </p>
                  <p className="text-[#666] text-[11px] leading-relaxed tracking-wide">
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
        className="h-px"
        style={{
          background: "linear-gradient(to left, rgba(122,26,36,0.3), rgba(122,26,36,0.06), transparent)",
          ...lineAnim(0.05, visible, "right"),
        }}
      />

    </div>
  )
}
