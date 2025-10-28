import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import ScrollToTop from "@/components/scroll-to-top"

const services = [
  {
    title: "広告・プロモーション・企業観光PR動画",
    slug: "promotion-pr",
    description:
      "企業のブランド価値を最大化する戦略的な映像制作。商品・サービスの魅力を効果的に伝え、観光地の魅力をダイナミックに表現します。マーケティング効果を重視した企画から撮影、編集まで一貫してサポートいたします。",
    image: "/fukui-pr-thumbnail.jpg",
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
        description: "仮完成動画\nのご確認",
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
        description: "仮完成動画\nのご確認",
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
        description: "仮完成動画\nのご確認",
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
        description: "仮完成動画\nのご確認",
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

  const serviceCategories = [
    {
      title: "広告・プロモーション・企業観光PR動画",
      slug: "promotion-pr",
      description: "企業のブランド価値を最大化する戦略的な映像制作",
    },
    {
      title: "メモリアルmovie制作",
      slug: "memorial-movie",
      description: "人生の大切な瞬間を美しく記録する感動的な映像",
    },
    {
      title: "MV制作・アーティスト映像",
      slug: "music-video",
      description: "アーティストの世界観を映像で表現するMV制作",
    },
    {
      title: "映画・ドラマ制作",
      slug: "film-drama",
      description: "本格的な映像作品の企画・制作をサポート",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">サービス一覧</h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              企業PR、メモリアル、MV、映画・ドラマなど、幅広い映像制作サービスをご提供しています。お客様のニーズに合わせた最適な映像をご提案いたします。
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Scattered Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Top Left - 企業PR Box */}
              <Link
                href="/services/promotion-pr"
                className="relative overflow-hidden bg-gradient-to-br from-charcoal-light to-charcoal text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 flex flex-col justify-between min-h-[250px] order-1"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-20"
                  style={{
                    backgroundImage: "url('/fukui-pr-thumbnail.jpg')",
                  }}
                />
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-3">広告・プロモーション・企業観光PR動画</h3>
                  <p className="text-white/90 mb-4">{serviceCategories[0].description}</p>
                </div>
              </Link>

              {/* Top Right - Text Content */}
              <div className="space-y-4 flex flex-col justify-center order-2">
                <p className="text-gray-700 leading-relaxed text-lg">
                  企業のブランディングから商品プロモーション、観光地のPR動画まで、マーケティング効果を重視した戦略的な映像制作を行います。SNS向けショート動画から本格的な企業紹介映像まで、幅広く対応いたします。
                </p>
              </div>

              {/* Middle Right - メモリアル Box */}
              <Link
                href="/services/memorial-movie"
                className="relative overflow-hidden bg-gradient-to-br from-charcoal-light to-charcoal text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 flex flex-col justify-between min-h-[250px] order-3 md:order-4"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-20"
                  style={{
                    backgroundImage: "url('/japanese-wedding-family-celebration-memories.jpg')",
                  }}
                />
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-3">メモリアルmovie制作</h3>
                  <p className="text-white/90 mb-4">{serviceCategories[1].description}</p>
                </div>
              </Link>

              {/* Middle Left - Text Content */}
              <div className="space-y-4 flex flex-col justify-center order-4 md:order-3">
                <p className="text-gray-700 leading-relaxed text-lg">
                  冠婚葬祭用ムービーから故人を偲ぶメモリアルムービーまで、人生の大切な瞬間を美しく記録します。記念日、誕生日、卒業・入学など、様々なライフイベントの映像制作を心を込めてサポートいたします。
                </p>
              </div>

              {/* Bottom Left - MV Box */}
              <Link
                href="/services/music-video"
                className="relative overflow-hidden bg-gradient-to-br from-charcoal-light to-charcoal text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 flex flex-col justify-between min-h-[250px] order-5"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-20"
                  style={{
                    backgroundImage: "url('/japanese-music-artist-performance-stage.jpg')",
                  }}
                />
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-3">MV制作・アーティスト映像</h3>
                  <p className="text-white/90 mb-4">{serviceCategories[2].description}</p>
                </div>
              </Link>

              {/* Bottom Middle - Text Content */}
              <div className="space-y-4 flex flex-col justify-center order-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  ミュージシャン、アイドル、俳優など、アーティストの個性を活かしたミュージックビデオを制作します。楽曲の魅力を引き出す演出と創造性豊かな映像表現で、ライブ映像やプロフィール映像も承ります。
                </p>
              </div>

              {/* Bottom Right - 映画・ドラマ Box */}
              <Link
                href="/services/film-drama"
                className="relative overflow-hidden bg-gradient-to-br from-charcoal-light to-charcoal text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 flex flex-col justify-between min-h-[250px] order-7 md:order-8"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-20"
                  style={{
                    backgroundImage: "url('/film-director-rear-view-no-face.jpg')",
                  }}
                />
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-3">映画・ドラマ制作</h3>
                  <p className="text-white/90 mb-4">{serviceCategories[3].description}</p>
                </div>
              </Link>

              {/* Extra Text Content */}
              <div className="space-y-4 flex flex-col justify-center order-8 md:order-7">
                <p className="text-gray-700 leading-relaxed text-lg">
                  短編・長編映画、ドラマシリーズ、ドキュメンタリーなど、本格的な映像作品の企画・制作をサポートします。制作会社や映画監督と連携し、プロフェッショナルチームによる高品質な作品作りを実現します。
                </p>
              </div>
            </div>

            {/* Process */}
            <div className="mb-16 -mx-4 md:-mx-8 lg:-mx-16">
              <h2 className="text-3xl font-bold mb-12 text-center text-charcoal-light px-4">制作の流れ</h2>

              {/* Desktop View */}
              <div className="hidden lg:block px-4 md:px-8">
                <div className="max-w-full mx-auto">
                  <div className="flex gap-6 items-center justify-center">
                    <div className="flex flex-col gap-[140px] flex-shrink-0">
                      <div className="bg-charcoal-light text-white px-4 py-3 rounded-lg font-bold text-base text-center whitespace-nowrap">
                        お客様
                      </div>
                      <div className="bg-charcoal-light text-white px-4 py-3 rounded-lg font-bold text-base text-center whitespace-nowrap">
                        en-ry
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {service.process.length > 0 ? (
                        service.process.map((step, index) => (
                          <div key={index} className="flex items-center">
                            {/* Step with indicators */}
                            <div className="flex flex-col items-center">
                              {/* Top indicator (Customer) */}
                              <div className="h-8 flex items-center justify-center mb-3">
                                {step.actor === "client" || step.actor === "both" ? (
                                  <div className="w-5 h-5 rounded-full border-2 border-charcoal-light bg-white"></div>
                                ) : (
                                  <div className="text-lg text-charcoal-light/40 font-bold">×</div>
                                )}
                              </div>

                              <div className="w-[130px] h-[130px] rounded-lg border-2 border-charcoal-light bg-white flex flex-col items-center justify-center p-3 shadow-sm hover:shadow-md transition-shadow">
                                <span className="text-3xl font-bold text-charcoal-light">{step.number}</span>
                                <span className="text-xs text-center leading-tight text-gray-600 mt-2 whitespace-pre-line">
                                  {step.number === "05" ? "仮完成動画\nのご確認" : step.title}
                                </span>
                              </div>

                              {/* Bottom indicator (en-ry) */}
                              <div className="h-8 flex items-center justify-center mt-3">
                                {step.actor === "company" || step.actor === "both" || step.number === "01" ? (
                                  <div className="w-5 h-5 rounded-full border-2 border-charcoal-light bg-white"></div>
                                ) : (
                                  <div className="text-lg text-charcoal-light/40 font-bold">×</div>
                                )}
                              </div>
                            </div>

                            {/* Connecting lines */}
                            {index < service.process.length - 1 && (
                              <div className="flex flex-col gap-[122px] mx-1">
                                <div className="w-6 h-0.5 bg-charcoal-light"></div>
                                <div className="w-6 h-0.5 bg-charcoal-light"></div>
                              </div>
                            )}
                          </div>
                        ))
                      ) : (
                        <p className="text-gray-500">制作の流れは個別にご相談ください</p>
                      )}
                    </div>
                  </div>

                  {/* Step descriptions below */}
                  {service.process.length > 0 && (
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
                  )}
                </div>
              </div>

              {/* Tablet View */}
              <div className="hidden md:block lg:hidden">
                <div className="space-y-8">
                  {service.process.length > 0 ? (
                    service.process.map((step, index) => {
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
                    })
                  ) : (
                    <p className="text-center text-gray-500">制作の流れは個別にご相談ください</p>
                  )}
                </div>
              </div>

              {/* Mobile View */}
              <div className="md:hidden space-y-6">
                {service.process.length > 0 ? (
                  service.process.map((step, index) => {
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
                  })
                ) : (
                  <p className="text-center text-gray-500">制作の流れは個別にご相談ください</p>
                )}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-lightgray p-12 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-charcoal-light">お見積り・ご相談はお気軽に</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                お見積りは無料です。お客様のご要望に合わせた最適なプランをご提案させていただきます。
              </p>
              <div className="flex justify-center">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdf35MRg59aC8PLeeNP3F7HCldqZF6YkM4cQi8J5jbMedF8EQ/viewform?usp=dialog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-charcoal-light text-white px-8 py-3 rounded hover:bg-charcoal transition-colors"
                >
                  お問い合わせ
                  <ArrowLeft className="ml-2 w-4 h-4" />
                </a>
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
