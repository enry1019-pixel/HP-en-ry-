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
    animation: `sb-line 0.7s cubic-bezier(0.16,1,0.3,1) ${delay.toFixed(2)}s both`,
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
    <div ref={ref} className="max-w-5xl mx-auto px-4 my-10">

      {/* Top hairline */}
      <div
        className="h-px mb-10"
        style={{
          background: "linear-gradient(to right, #7a1a24, rgba(122,26,36,0.25), transparent)",
          ...lineAnim(0.0, visible, "left"),
        }}
      />

      <div className="flex flex-col md:flex-row gap-10 md:gap-14">

        {/* ── Left: THE REASON ── */}
        <div
          className="md:w-44 shrink-0"
          style={enterAnim("sb-right", "0.5s", 0.05, visible)}
        >
          <p className="text-[9px] tracking-[0.65em] text-[#7a1a24] font-bold uppercase mb-3">
            The Reason
          </p>
          <div
            className="w-6 h-px bg-[#7a1a24]/60 mb-5"
            style={lineAnim(0.25, visible, "left")}
          />
          {/* Typewriter title */}
          <p className="text-[#1a1a1a] text-[18px] font-bold tracking-wide leading-snug">
            {TITLE_LINES.map((line, li) => (
              <span key={li} className="block whitespace-nowrap">
                {line.split("").map((char, ci) => (
                  <span
                    key={ci}
                    className="inline-block"
                    style={enterAnim("sb-char", "0.35s", 0.1 + (li * n0 + ci) * 0.05, visible)}
                  >
                    {char}
                  </span>
                ))}
              </span>
            ))}
          </p>
        </div>

        {/* ── Right: 3 items ── */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              style={enterAnim("sb-left", "0.45s", 0.1 + i * 0.14, visible)}
            >
              {/* Number + line header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] text-[#7a1a24]/55 tracking-[0.35em] font-light tabular-nums">
                  0{i + 1}
                </span>
                <div
                  className="flex-1 h-px bg-[#d9cfc4] origin-left"
                  style={lineAnim(0.15 + i * 0.14, visible, "left")}
                />
              </div>
              <h4 className="text-[13px] font-bold text-[#1a1a1a] tracking-wider leading-snug mb-3">
                {item.title}
              </h4>
              <p className="text-[11px] text-[#666] leading-relaxed tracking-wide">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom hairline */}
      <div
        className="h-px mt-10"
        style={{
          background: "linear-gradient(to right, transparent, rgba(122,26,36,0.18), transparent)",
          ...lineAnim(0.05, visible, "left"),
        }}
      />

    </div>
  )
}
