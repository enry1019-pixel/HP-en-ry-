"use client"

import { useRef, useState, useEffect } from "react"
import { Lightbulb, Camera, Edit, Truck } from "lucide-react"

const processSteps = [
  {
    number: "01",
    title: "ヒアリング・打ち合わせ",
    subtitle: "お客様",
    description: "ご予算・納期・ご要望を伺い、企画コンセプトを設計",
    icon: <Lightbulb className="w-8 h-8" />,
    details: ["目的・ターゲットの明確化", "予算・スケジュールの調整", "企画書・絵コンテの作成"],
  },
  {
    number: "02",
    title: "撮影準備",
    subtitle: "弊社",
    description: "企画・脚本・絵コンテ・ロケハン・キャスティング・スケジュール調整",
    icon: <Camera className="w-8 h-8" />,
    details: ["ロケーション撮影", "スタジオ撮影", "インタビュー収録", "ドローン撮影"],
  },
  {
    number: "03",
    title: "撮影・収録",
    subtitle: "お客様・弊社",
    description: "映像・音声の収録",
    icon: <Edit className="w-8 h-8" />,
    details: ["映像編集", "音響調整", "カラーグレーディング", "エフェクト処理"],
  },
  {
    number: "04",
    title: "編集・加工",
    subtitle: "弊社",
    description: "映像・音声の編集、テロップ・BGM・効果音の挿入",
    icon: <Truck className="w-8 h-8" />,
    details: ["各種フォーマット対応", "配信プラットフォーム最適化", "修正対応", "運用サポート"],
  },
]

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const processItemsRef = useRef<(HTMLDivElement | null)[]>([])
  const [visibleItems, setVisibleItems] = useState<boolean[]>([false, false, false, false])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = processItemsRef.current.findIndex((ref) => ref === entry.target)
          if (index !== -1) {
            setVisibleItems((prev) => {
              const newVisible = [...prev]
              newVisible[index] = true
              return newVisible
            })
          }
        }
      })
    }, observerOptions)

    processItemsRef.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section ref={sectionRef} id="process" className="py-20 bg-gradient-to-b from-white to-lightgray overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="process-title text-3xl font-bold mb-2">PROCESS</h2>
          <p className="text-lg text-gray-500 mb-4">制作の流れ</p>
          <p className="process-description text-gray-600 max-w-2xl mx-auto">
            お客様のご要望から完成まで、4つのステップで高品質な映像制作を行います。
            経験豊富なスタッフが、企画から納品まで一貫してサポートいたします。
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* 中央の線 - デスクトップのみ */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform -translate-x-1/2"></div>

          <div className="space-y-16 md:space-y-24">
            {processSteps.map((step, index) => (
              <div key={index} ref={(el) => (processItemsRef.current[index] = el)} className="relative">
                {/* 矢印 - モバイルのみ */}
                {index === 3 && (
                  <div className="flex justify-center my-8 md:hidden">
                    <svg className="w-8 h-8 text-charcoal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                )}

                {/* コンテンツ - 左右交互に配置（デスクトップ）、中央配置（モバイル） */}
                <div
                  className={`bg-white p-6 md:p-8 rounded-lg shadow-lg relative z-10 transition-all duration-700 hover:shadow-xl hover:-translate-y-1 ${
                    index % 2 === 0 ? "md:ml-auto md:mr-[5%] md:w-[45%]" : "md:mr-auto md:ml-[5%] md:w-[45%]"
                  } ${
                    visibleItems[index]
                      ? "opacity-100 translate-y-0"
                      : `opacity-0 ${index % 2 === 0 ? "translate-x-10" : "-translate-x-10"}`
                  }`}
                >
                  {/* 数字アイコン - モバイルは左上、デスクトップは左右交互 */}
                  <div
                    className={`absolute z-20 -top-3 ${index % 2 === 0 ? "-left-3" : "-left-3 md:left-auto md:-right-3"}`}
                  >
                    <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-charcoal-light text-white text-lg md:text-xl font-bold shadow-lg transform transition-transform duration-300 hover:scale-110">
                      {step.number}
                    </div>
                  </div>

                  {/* アイコン - 右上に配置 */}
                  <div
                    className={`absolute top-6 text-charcoal-light ${
                      index % 2 === 0 ? "right-6" : "right-6 md:left-6 md:right-auto"
                    }`}
                  >
                    {step.icon}
                  </div>

                  {/* タイトルとサブタイトル */}
                  <h3 className={`text-xl font-bold mb-2 pt-2 ${index % 2 === 0 ? "pr-12" : "pr-12 md:pl-12 md:pr-0"}`}>
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">{step.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed mb-6">{step.description}</p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-charcoal-light mb-3">主な作業内容</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-charcoal-light rounded-full mr-3 flex-shrink-0"></div>
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 矢印 - モバイルのみ */}
                {index < 3 && (
                  <div className="flex justify-center my-8 md:hidden">
                    <svg className="w-8 h-8 text-charcoal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4 text-charcoal-light">制作の流れについてご質問がございましたら</h3>
            <p className="text-gray-600 mb-6">
              詳しい制作プロセスや、お客様のプロジェクトに最適なプランについて、お気軽にご相談ください。お見積りは無料です。お客様のご要望に合わせた最適なプランをご提案させていただきます。
            </p>
            <div className="flex justify-center">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdf35MRg59aC8PLeeNP3F7HCldqZF6YkM4cQi8J5jbMedF8EQ/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-charcoal-light text-white px-6 py-3 rounded hover:bg-charcoal transition-colors"
              >
                お問い合わせ
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
