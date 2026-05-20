const items = [
  { title: "ハイクオリティな映像", desc: "同価格帯と比較して差は歴然" },
  { title: '短尺でも"物語性"', desc: "ジャンルを問わない幅広い表現" },
  { title: "コストパフォーマンス高", desc: "コストが1/2になるケースも" },
]

export default function StrengthsBand() {
  return (
    <div className="max-w-5xl mx-auto px-4 my-8">
      <div
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(to right, #0e0c0c, #180a0d)",
          backgroundImage:
            "repeating-linear-gradient(-45deg, rgba(255,255,255,0.012) 0px, rgba(255,255,255,0.012) 1px, transparent 1px, transparent 20px)",
        }}
      >
        <div className="flex flex-col md:flex-row items-stretch">
          {/* Left — THE REASON */}
          <div
            className="md:w-52 shrink-0 px-6 py-5 flex flex-col justify-center border-b border-white/[0.07] md:border-b-0 md:border-r md:border-white/[0.07]"
          >
            <p className="text-[9px] tracking-[0.6em] text-gray-600 mb-1.5 font-light uppercase">
              The Reason
            </p>
            <p className="text-white text-[13px] font-bold tracking-wider leading-snug">
              現役映画監督が<br />
              撮影から編集まで監修
            </p>
          </div>

          {/* Right — 3 strengths */}
          <div className="flex-1 flex flex-col md:flex-row divide-y divide-white/[0.07] md:divide-y-0 md:divide-x md:divide-white/[0.07]">
            {items.map((item, i) => (
              <div key={i} className="flex-1 flex items-center gap-3 px-6 py-5">
                <span className="text-[#7a1a24]/55 text-sm shrink-0">▸</span>
                <div>
                  <p className="text-white text-xs font-bold tracking-wider leading-snug">
                    {item.title}
                  </p>
                  <p className="text-gray-500 text-[11px] mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
