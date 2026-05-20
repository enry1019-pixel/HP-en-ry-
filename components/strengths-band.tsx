"use client"

import { useRef, useState, useEffect } from "react"

const TITLE_LINES = ["映画監督が", "撮影から編集まで監修"]

const items = [
  {
    title: "ハイクオリティな映像",
    desc: "最新のトレンドや機材、編集技術を駆使し、\nターゲットのエンゲージメントを最大化する\n「魅せる映像」",
  },
  {
    title: '短尺でも"物語性"',
    desc: "多彩なジャンルや緻密な構成力で\n深いストーリーを構築し\n記憶に残る映像へ",
  },
  {
    title: "コストパフォーマンス高",
    desc: "制作プロセスの効率化と柔軟なチーム編成により、\n無駄なコストを徹底的にカットし、\n価格以上の価値をお届けします",
  },
]

// ─── アニメーションヘルパー ───────────────────────────────────────────
// visible=false → opacity:0 (静止)
// visible=true  → keyframe animation with fill:both
//   fill:both = delay中はfromを維持, 終了後はtoを維持
//   → Reactのstyle変更でも確実に動く（transitionと違いfrom状態を自前で持つ）
function enterAnim(
  name: string,
  duration: string,
  delay: number,
  visible: boolean,
  extra?: React.CSSProperties
): React.CSSProperties {
  if (!visible) return { opacity: 0, ...extra }
  return {
    animation: `${name} ${duration} cubic-bezier(0.16,1,0.3,1) ${delay.toFixed(3)}s both`,
    ...extra,
  }
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
      ([entry]) => {
        if (entry.isIntersecting && !visible) setVisible(true)
      },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [visible])

  const n0 = TITLE_LINES[0].length // 5 (映画監督が)

  return (
    <div ref={ref} className="max-w-5xl mx-auto px-4 my-6">

      {/* Top accent line */}
      <div
        className="h-px mb-0"
        style={{
          background: "linear-gradient(to right, #c84058, rgba(200,64,88,0.15), transparent)",
          ...lineAnim(0.0, visible, "left"),
        }}
      />

      {/* Main dark panel — コンテナ自体はopacity変化なし（sec-bodyに任せる） */}
      <div
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(110deg, #1c1416 0%, #271620 55%, #1d1416 100%)",
        }}
      >
        {/* Film-grain */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, rgba(255,255,255,0.009) 0px, rgba(255,255,255,0.009) 1px, transparent 1px, transparent 18px)",
          }}
        />

        <div className="relative flex flex-col md:flex-row items-stretch">

          {/* ── Left: THE REASON ── */}
          <div
            className="md:w-56 shrink-0 px-7 py-6 flex flex-col justify-center border-b border-white/[0.08] md:border-b-0 md:border-r md:border-white/[0.08]"
            style={enterAnim("sb-right", "0.55s", 0.05, visible)}
          >
            {/* Label */}
            <div className="flex items-center gap-2 mb-3">
              <div
                className="h-px bg-[#c84058]"
                style={{ width: "14px", ...lineAnim(0.4, visible, "left") }}
              />
              <p className="text-[11px] tracking-[0.5em] text-[#d45060] font-medium uppercase">
                The Reason
              </p>
            </div>

            {/* Typewriter title — per-character sb-char animation */}
            <p className="text-white text-[16px] font-bold tracking-wide leading-snug">
              {TITLE_LINES.map((line, li) => (
                <span key={li} className="block whitespace-nowrap">
                  {line.split("").map((char, ci) => (
                    <span
                      key={ci}
                      className="inline-block"
                      style={enterAnim("sb-char", "0.4s", 0.15 + (li * n0 + ci) * 0.055, visible)}
                    >
                      {char}
                    </span>
                  ))}
                </span>
              ))}
            </p>

            <div
              className="w-8 h-px bg-[#7a1a24]/50 mt-3"
              style={lineAnim(1.05, visible, "left")}
            />
          </div>

          {/* ── Right: 3 strengths ── */}
          <div className="flex-1 flex flex-col md:flex-row divide-y divide-white/[0.08] md:divide-y-0 md:divide-x md:divide-white/[0.08]">
            {items.map((item, i) => (
              <div
                key={i}
                className="flex-1 flex items-start gap-3.5 px-6 py-5"
                style={enterAnim("sb-left", "0.5s", 0.1 + i * 0.15, visible)}
              >
                <span className="text-[#d45060] text-[13px] shrink-0 leading-none mt-0.5">▸</span>
                <div>
                  <p className="text-white text-[13px] font-bold tracking-wider leading-snug">
                    {item.title}
                  </p>
                  <p className="text-gray-400 text-[11px] mt-1 tracking-wide leading-relaxed whitespace-pre-line">
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
          background: "linear-gradient(to left, rgba(200,64,88,0.45), rgba(200,64,88,0.08), transparent)",
          ...lineAnim(0.05, visible, "right"),
        }}
      />

    </div>
  )
}
