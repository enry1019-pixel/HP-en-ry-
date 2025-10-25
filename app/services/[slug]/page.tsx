import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import MemorialFlowSection from "@/components/memorial-flow-section"

const services = [
  {
    title: "広告・プロモーション・企業観光PR動画",
    slug: "promotion-pr",
    description:
      "企業のブランド価値を最大化する戦略的な映像制作。商品・サービスの魅力を効果的に伝え、観光地の魅力をダイナミックに表現します。マーケティング効果を重視した企画から撮影、編集まで一貫してサポートいたします。",
    image: "/placeholder.svg?height=600&width=800&text=プロモーション",
    features: [
      "企業ブランディング映像",
      "商品・サービスプロモーション",
      "観光地PR動画",
      "イベント告知映像",
      "SNS向けショート動画",
    ],
    process: [
      {
        number: "01",
        title: "ヒアリング・打ち合わせ",
        description: "ご予算・納期・ご要望を伺い、企画コンセプトを設計",
        actor: "client",
      },
      {
        number: "02",
        title: "撮影準備",
        description: "企画・脚本・絵コンテ・ロケハン・キャスティング・スケジュール調整",
        actor: "company",
      },
      {
        number: "03",
        title: "撮影・収録",
        description: "映像・音声の収録",
        actor: "both",
      },
      {
        number: "04",
        title: "編集・加工",
        description: "映像編集、BGM・ナレーション・テロップ追加",
        actor: "company",
      },
      {
        number: "05",
        title: "仮完成動画のご確認",
        description: "完成した動画をご確認いただきます",
        actor: "client",
      },
      {
        number: "06",
        title: "修正対応",
        description: "ご要望に合わせてブラッシュアップ",
        actor: "company",
      },
      {
        number: "07",
        title: "完成・納品",
        description: "データ納品／DVD／クラウド共有など",
        actor: "both",
      },
    ],
    price: "300,000円〜",
    duration: "2-4週間",
  },
  {
    title: "メモリアルmovie制作",
    slug: "memorial-movie",
    description:
      "人生の大切な瞬間を美しく記録する感動的な映像制作。冠婚葬祭用ムービーから、故人を偲ぶメモリアルムービーまで、心に残る作品を丁寧に制作します。ご家族の想いを大切にした温かみのある映像をお届けします。",
    image: "/placeholder.svg?height=600&width=800&text=メモリアル",
    features: [
      "冠婚葬祭用ムービー",
      "メモリアルムービー",
      "家族の記録映像",
      "記念日・誕生日映像",
      "卒業・入学記念映像",
    ],
    process: [],
    price: "150,000円〜",
    duration: "1-2週間",
  },
  {
    title: "MV制作・アーティスト映像",
    slug: "music-video",
    description:
      "ミュージシャン、アイドル、俳優、モデル、お笑い芸人など、様々なアーティストの世界観を映像で表現。楽曲の魅力を最大限に引き出す演出と、アーティストの個性を活かした創造性豊かなミュージックビデオを制作します。",
    image: "/placeholder.svg?height=600&width=800&text=MV制作",
    features: ["ミュージックビデオ制作", "アーティストPV", "ライブ映像制作", "プロフィール映像", "コンセプト映像"],
    process: [
      {
        number: "01",
        title: "ヒアリング・打ち合わせ",
        description: "ご予算・納期・ご要望を伺い、企画コンセプトを設計",
        actor: "client",
      },
      {
        number: "02",
        title: "撮影準備",
        description: "企画・脚本・絵コンテ・ロケハン・キャスティング・スケジュール調整",
        actor: "company",
      },
      {
        number: "03",
        title: "撮影・収録",
        description: "映像・音声の収録",
        actor: "both",
      },
      {
        number: "04",
        title: "編集・加工",
        description: "映像編集、BGM・ナレーション・テロップ追加",
        actor: "company",
      },
      {
        number: "05",
        title: "仮完成動画のご確認",
        description: "完成した動画をご確認いただきます",
        actor: "client",
      },
      {
        number: "06",
        title: "修正対応",
        description: "ご要望に合わせてブラッシュアップ",
        actor: "company",
      },
      {
        number: "07",
        title: "完成・納品",
        description: "データ納品／DVD／クラウド共有など",
        actor: "both",
      },
    ],
    price: "500,000円〜",
    duration: "3-6週間",
  },
  {
    title: "映画・ドラマ制作",
    slug: "film-drama",
    description:
      "制作会社や映画監督と連携した本格的な映像作品の企画・制作。脚本開発から撮影、ポストプロダクションまで、プロフェッショナルチームによる高品質な作品作りをサポート。監督の創造的ビジョンを忠実に映像化します。",
    image: "/placeholder.svg?height=600&width=800&text=映画制作",
    features: [
      "短編・長編映画制作",
      "ドラマ・シリーズ制作",
      "ドキュメンタリー制作",
      "企業ドラマ制作",
      "教育・研修映像",
    ],
    process: [
      {
        number: "01",
        title: "ヒアリング・打ち合わせ",
        description: "ご予算・納期・ご要望を伺い、企画コンセプトを設計",
        actor: "client",
      },
      {
        number: "02",
        title: "撮影準備",
        description: "企画・脚本・絵コンテ・ロケハン・キャスティング・スケジュール調整",
        actor: "company",
      },
      {
        number: "03",
        title: "撮影・収録",
        description: "映像・音声の収録",
        actor: "both",
      },
      {
        number: "04",
        title: "編集・加工",
        description: "映像編集、BGM・ナレーション・テロップ追加",
        actor: "company",
      },
      {
        number: "05",
        title: "仮完成動画のご確認",
        description: "完成した動画をご確認いただきます",
        actor: "client",
      },
      {
        number: "06",
        title: "修正対応",
        description: "ご要望に合わせてブラッシュアップ",
        actor: "company",
      },
      {
        number: "07",
        title: "完成・納品",
        description: "データ納品／DVD／クラウド共有など",
        actor: "both",
      },
    ],
    price: "1,000,000円〜",
    duration: "2-6ヶ月",
  },
]

interface ServicePageProps {
  params: {
    slug: string
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find((s) => s.slug === params.slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl font-bold">en-ry</h1>
          </Link>

          <Link href="/#services" className="inline-flex items-center text-gray-600 hover:text-black transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            サービス一覧に戻る
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-charcoal-light to-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">{service.description}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Image */}
              <div className="h-96 bg-gray-100 relative rounded-lg overflow-hidden">
                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
              </div>

              {/* Service Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-charcoal-light">サービス概要</h2>
                  <div className="bg-lightgray p-4 rounded-lg inline-block">
                    <h3 className="font-bold mb-2">制作期間</h3>
                    <p className="text-charcoal-light font-semibold">{service.duration}</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 text-charcoal-light">主な制作内容</h2>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-charcoal-light rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Process */}
            {service.slug === "memorial-movie" ? (
              <MemorialFlowSection />
            ) : (
              <div className="mb-16 -mx-4 md:-mx-8 lg:-mx-16">
                <h2 className="text-3xl font-bold mb-12 text-center text-charcoal-light px-4">制作の流れ</h2>

                {/* Desktop View */}
                <div className="hidden lg:block px-4 md:px-8">
                  <div className="max-w-full mx-auto">
                    <div className="flex gap-4 items-center justify-center">
                      <div className="flex flex-col gap-[100px] flex-shrink-0">
                        <div className="bg-charcoal-light text-white px-3 py-2 rounded-lg font-bold text-xs text-center whitespace-nowrap">
                          お客様
                        </div>
                        <div className="bg-charcoal-light text-white px-3 py-2 rounded-lg font-bold text-xs text-center whitespace-nowrap">
                          en-ry
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5">
                        {service.process.map((step, index) => (
                          <div key={index} className="flex items-center">
                            {/* Step with indicators */}
                            <div className="flex flex-col items-center">
                              {/* Top indicator (Customer) */}
                              <div className="h-6 flex items-center justify-center mb-2">
                                {step.actor === "client" || step.actor === "both" ? (
                                  <div className="w-3 h-3 rounded-full border-2 border-charcoal-light bg-white"></div>
                                ) : (
                                  <div className="text-sm text-charcoal-light/40">×</div>
                                )}
                              </div>

                              <div className="w-[100px] h-[100px] rounded-lg border-2 border-charcoal-light bg-white flex flex-col items-center justify-center p-2 shadow-sm hover:shadow-md transition-shadow">
                                <span className="text-xl font-bold text-charcoal-light">{step.number}</span>
                                <span className="text-[10px] text-center leading-tight text-gray-600 mt-1">
                                  {step.title}
                                </span>
                              </div>

                              {/* Bottom indicator (en-ry) */}
                              <div className="h-6 flex items-center justify-center mt-2">
                                {step.actor === "company" || step.actor === "both" || step.number === "01" ? (
                                  <div className="w-3 h-3 rounded-full border-2 border-charcoal-light bg-white"></div>
                                ) : (
                                  <div className="text-sm text-charcoal-light/40">×</div>
                                )}
                              </div>
                            </div>

                            {/* Connecting lines */}
                            {index < service.process.length - 1 && (
                              <div className="flex flex-col gap-[88px] mx-0.5">
                                <div className="w-4 h-0.5 bg-charcoal-light"></div>
                                <div className="w-4 h-0.5 bg-charcoal-light"></div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Step descriptions below */}
                    <div className="mt-12 grid grid-cols-2 gap-4 max-w-6xl mx-auto">
                      {service.process.map((step, index) => (
                        <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                          <div className="flex items-center mb-2">
                            <span className="w-7 h-7 rounded-full bg-charcoal-light text-white flex items-center justify-center font-bold text-xs mr-2">
                              {step.number}
                            </span>
                            <h4 className="font-bold text-sm text-charcoal-light">{step.title}</h4>
                          </div>
                          <p className="text-xs text-gray-600 ml-9">{step.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tablet View */}
                <div className="hidden md:block lg:hidden">
                  <div className="space-y-8">
                    {service.process.map((step, index) => {
                      const isLastStep = index === service.process.length - 1

                      return (
                        <div key={index} className="relative">
                          <div className="flex items-center gap-4">
                            <div className="flex-1 rounded-lg p-4 shadow-lg bg-gray-50 border-2 border-charcoal-light">
                              <div className="flex items-center mb-3 relative z-10">
                                <span className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mr-3 bg-charcoal-light">
                                  {step.number}
                                </span>
                                <div>
                                  <h4 className="font-bold">{step.title}</h4>
                                  <span className="text-xs text-gray-500">
                                    {step.actor === "client"
                                      ? "お客様"
                                      : step.actor === "company"
                                        ? "弊社"
                                        : "お客様・弊社"}
                                  </span>
                                </div>
                              </div>
                              <p className="text-sm text-gray-600 leading-relaxed relative z-10">{step.description}</p>
                            </div>
                          </div>
                          {!isLastStep && (
                            <div className="flex justify-center my-4">
                              <ArrowLeft className={`w-6 h-6 transform rotate-90 text-charcoal-light`} />
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Mobile View */}
                <div className="md:hidden space-y-6">
                  {service.process.map((step, index) => {
                    const isLastStep = index === service.process.length - 1

                    return (
                      <div key={index} className="relative">
                        <div className="p-6 rounded-lg shadow-lg bg-gray-50 border-2 border-charcoal-light">
                          <div className="flex items-center mb-3 relative z-10">
                            <span className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mr-3 bg-charcoal-light">
                              {step.number}
                            </span>
                            <div>
                              <h4 className="font-bold">{step.title}</h4>
                              <span className="text-xs text-gray-500">
                                {step.actor === "client"
                                  ? "お客様"
                                  : step.actor === "company"
                                    ? "弊社"
                                    : "お客様・弊社"}
                              </span>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 leading-relaxed relative z-10">{step.description}</p>
                        </div>
                        {!isLastStep && (
                          <div className="flex justify-center my-4">
                            <ArrowLeft className={`w-6 h-6 transform rotate-90 text-charcoal-light`} />
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="text-center bg-lightgray p-12 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-charcoal-light">お見積り・ご相談はお気軽に</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                プロジェクトの詳細をお聞かせください。お客様のご要望に合わせた最適なプランをご提案いたします。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdf35MRg59aC8PLeeNP3F7HCldqZF6YkM4cQi8J5jbMedF8EQ/viewform?usp=dialog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-charcoal-light text-white px-8 py-3 rounded hover:bg-charcoal transition-colors"
                >
                  お問い合わせ
                  <ArrowLeft className="ml-2 w-4 h-4" />
                </a>
                <Link
                  href="/#services"
                  className="inline-flex items-center border border-charcoal-light text-charcoal-light px-8 py-3 rounded hover:bg-charcoal-light hover:text-white transition-colors"
                >
                  他のサービスを見る
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal-light text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Link href="/" className="text-2xl font-bold mb-4 inline-block">
              en-ry
            </Link>
            <p className="text-gray-300 mb-4">映像を通して「縁」と思い出を紡いでいく</p>
            <p>&copy; 2025 en-ry All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
