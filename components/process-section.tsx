"use client"

import { useEffect, useRef } from "react"
import { Lightbulb, Camera, Edit, Truck } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAPInit } from "@/lib/gsap-init"

const processSteps = [
  {
    number: "01",
    title: "企画・ヒアリング",
    description: "お客様のご要望を詳しくお聞きし、最適な映像制作プランをご提案いたします。",
    icon: <Lightbulb className="w-8 h-8" />,
    details: ["目的・ターゲットの明確化", "予算・スケジュールの調整", "企画書・絵コンテの作成"],
  },
  {
    number: "02",
    title: "撮影・収録",
    description: "プロフェッショナルな機材と技術で、高品質な映像素材を撮影いたします。",
    icon: <Camera className="w-8 h-8" />,
    details: ["ロケーション撮影", "スタジオ撮影", "インタビュー収録", "ドローン撮影"],
  },
  {
    number: "03",
    title: "編集・制作",
    description: "撮影した素材を丁寧に編集し、お客様のイメージに合った映像作品に仕上げます。",
    icon: <Edit className="w-8 h-8" />,
    details: ["映像編集", "音響調整", "カラーグレーディング", "エフェクト処理"],
  },
  {
    number: "04",
    title: "納品・アフターサポート",
    description: "完成した映像を各種フォーマットで納品し、必要に応じてアフターサポートを行います。",
    icon: <Truck className="w-8 h-8" />,
    details: ["各種フォーマット対応", "配信プラットフォーム最適化", "修正対応", "運用サポート"],
  },
]

export default function ProcessSection() {
  useGSAPInit()

  const sectionRef = useRef<HTMLElement>(null)
  const processItemsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const section = sectionRef.current
    if (section) {
      // タイトルのアニメーション
      gsap.from(".process-title", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
      })

      // 説明文のアニメーション
      gsap.from(".process-description", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
      })

      // 各プロセスアイテムのアニメーション
      processItemsRef.current.forEach((item, index) => {
        if (item) {
          gsap.from(item, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: 0.2 + index * 0.2,
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          })
        }
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
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
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-charcoal-light to-lightgray-dark transform -translate-x-1/2"></div>

          <div className="space-y-16 md:space-y-24">
            {processSteps.map((step, index) => (
              <div key={index} ref={(el) => (processItemsRef.current[index] = el)} className="relative">
                {/* コンテンツ - 左右交互に配置（デスクトップ）、中央配置（モバイル） */}
                <div
                  className={`bg-white p-6 md:p-8 rounded-lg shadow-lg relative z-10 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                    index % 2 === 0 ? "md:ml-auto md:mr-[5%] md:w-[45%]" : "md:mr-auto md:ml-[5%] md:w-[45%]"
                  }`}
                >
                  {/* 数字アイコン - モバイルは左上、デスクトップは左右交互 */}
                  <div
                    className={`absolute z-20 -top-3 ${
                      // モバイル: 常に左上
                      // デスクトップ: 偶数（0,2）は左上、奇数（1,3）は右上
                      index % 2 === 0 ? "-left-3" : "-left-3 md:-right-3 md:-left-auto"
                    }`}
                  >
                    <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-charcoal-light text-white text-lg md:text-xl font-bold shadow-lg transform transition-transform duration-300 hover:scale-110">
                      {step.number}
                    </div>
                  </div>

                  {/* アイコン - 右上に配置 */}
                  <div className="absolute top-6 right-6 text-charcoal-light">{step.icon}</div>

                  <h3 className="text-xl font-bold mb-4 pr-12 pt-2">{step.title}</h3>
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
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4 text-charcoal-light">制作の流れについてご質問がございましたら</h3>
            <p className="text-gray-600 mb-6">
              詳しい制作プロセスや、お客様のプロジェクトに最適なプランについて、お気軽にご相談ください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdf35MRg59aC8PLeeNP3F7HCldqZF6YkM4cQi8J5jbMedF8EQ/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-charcoal-light text-white px-6 py-3 rounded hover:bg-charcoal transition-colors"
              >
                お問い合わせ
              </a>
              <a
                href="/services"
                className="inline-flex items-center border border-charcoal-light text-charcoal-light px-6 py-3 rounded hover:bg-charcoal-light hover:text-white transition-colors"
              >
                サービス詳細
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
