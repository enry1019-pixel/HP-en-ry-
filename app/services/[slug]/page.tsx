import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const services = [
  {
    slug: "corporate-pr",
    title: "企業PR映像制作",
    description: "企業のブランド価値を高める、印象的なPR映像を制作します",
    image: "/corporate-pr.jpg",
    detailedDescription:
      "企業のビジョン、ミッション、製品やサービスを効果的に伝えるプロフェッショナルなPR映像を制作します。ブランドイメージの向上と顧客エンゲージメントの強化を実現します。",
    features: [
      "企業理念・ビジョンの可視化",
      "製品・サービスの魅力的な紹介",
      "社内文化・チームの紹介",
      "採用活動のサポート",
      "投資家向けプレゼンテーション",
    ],
    process: [
      { step: "01", title: "ヒアリング・打ち合わせ", description: "ご要望・詳細・ご要望を伺い、企画コンセプトを設計" },
      {
        step: "02",
        title: "撮影準備",
        description: "企画・脚本・絵コンテ・ロケハン・キャスティング・スケジュール調整",
      },
      { step: "03", title: "撮影・収録", description: "映像・音声の収録" },
      { step: "04", title: "編集・加工", description: "映像編集、BGM・ナレーション・テロップ追加" },
      {
        step: "05",
        title: "仮完成動画のご確認",
        description: "完成した動画をご確認いただきます",
      },
      { step: "06", title: "修正対応", description: "ご要望に合わせてブラッシュアップ" },
      {
        step: "07",
        title: "完成・納品",
        description: "データ納品／DVD／クラウド共有など",
      },
    ],
    duration: "4〜8週間",
    deliverables: ["MP4形式の動画ファイル", "DVD", "各種SNS用フォーマット", "サムネイル画像"],
  },
  {
    slug: "product-promotion",
    title: "商品プロモーション映像",
    description: "商品の魅力を最大限に引き出す、売上向上につながる映像制作",
    image: "/product-promotion.jpg",
    detailedDescription:
      "製品の特徴や利点を視覚的に訴求し、消費者の購買意欲を高めるプロモーション映像を制作します。eコマース、展示会、店頭ディスプレイなど、様々な場面で活用できる映像をお届けします。",
    features: [
      "製品の特徴・機能の詳細説明",
      "使用シーンの実演",
      "ビフォー・アフター比較",
      "顧客の声・レビュー紹介",
      "限定オファー・キャンペーン告知",
    ],
    process: [
      { step: "01", title: "ヒアリング・打ち合わせ", description: "ご要望・詳細・ご要望を伺い、企画コンセプトを設計" },
      {
        step: "02",
        title: "撮影準備",
        description: "企画・脚本・絵コンテ・ロケハン・キャスティング・スケジュール調整",
      },
      { step: "03", title: "撮影・収録", description: "映像・音声の収録" },
      { step: "04", title: "編集・加工", description: "映像編集、BGM・ナレーション・テロップ追加" },
      {
        step: "05",
        title: "仮完成動画のご確認",
        description: "完成した動画をご確認いただきます",
      },
      { step: "06", title: "修正対応", description: "ご要望に合わせてブラッシュアップ" },
      {
        step: "07",
        title: "完成・納品",
        description: "データ納品／DVD／クラウド共有など",
      },
    ],
    duration: "3〜6週間",
    deliverables: ["MP4形式の動画ファイル", "各種SNS用フォーマット", "縦型動画（ストーリーズ用）", "サムネイル画像"],
  },
  {
    slug: "memorial-movie",
    title: "メモリアルmovie制作",
    description: "大切な思い出を美しい映像作品として永遠に残します",
    image: "/wedding-memorial.jpg",
    detailedDescription:
      "結婚式、誕生日、記念日など、人生の特別な瞬間を感動的な映像作品として残します。プロの技術で撮影・編集し、何度見返しても心温まる作品をお届けします。",
    features: [
      "結婚式・披露宴の記録",
      "誕生日・記念日のお祝い映像",
      "家族の歴史・思い出の編集",
      "感動的なBGM・ナレーション",
      "写真スライドショー制作",
    ],
    process: [
      { step: "01", title: "ヒアリング・打ち合わせ", description: "ご要望・詳細・ご要望を伺い、企画コンセプトを設計" },
      {
        step: "02",
        title: "撮影準備",
        description: "企画・脚本・絵コンテ・ロケハン・キャスティング・スケジュール調整",
      },
      { step: "03", title: "撮影・収録", description: "映像・音声の収録" },
      { step: "04", title: "編集・加工", description: "映像編集、BGM・ナレーション・テロップ追加" },
      {
        step: "05",
        title: "仮完成動画のご確認",
        description: "完成した動画をご確認いただきます",
      },
      { step: "06", title: "修正対応", description: "ご要望に合わせてブラッシュアップ" },
      {
        step: "07",
        title: "完成・納品",
        description: "データ納品／DVD／クラウド共有など",
      },
    ],
    duration: "2〜4週間",
    deliverables: ["MP4形式の動画ファイル", "DVD（専用ケース付き）", "ブルーレイディスク", "オンライン共有リンク"],
  },
  {
    slug: "music-video",
    title: "MV（ミュージックビデオ）制作",
    description: "アーティストの世界観を表現する、印象的なMVを制作します",
    image: "/music-video.jpg",
    detailedDescription:
      "楽曲の持つメッセージや感情を視覚的に表現し、アーティストの個性と魅力を最大限に引き出すミュージックビデオを制作します。ストーリー性のある作品からコンセプチュアルな映像まで、幅広いスタイルに対応します。",
    features: [
      "楽曲に合わせたコンセプト設計",
      "ストーリー性のある演出",
      "アーティストの個性を引き出す撮影",
      "視覚効果・カラーグレーディング",
      "YouTube・各種配信サービス対応",
    ],
    process: [
      { step: "01", title: "ヒアリング・打ち合わせ", description: "ご要望・詳細・ご要望を伺い、企画コンセプトを設計" },
      {
        step: "02",
        title: "撮影準備",
        description: "企画・脚本・絵コンテ・ロケハン・キャスティング・スケジュール調整",
      },
      { step: "03", title: "撮影・収録", description: "映像・音声の収録" },
      { step: "04", title: "編集・加工", description: "映像編集、BGM・ナレーション・テロップ追加" },
      {
        step: "05",
        title: "仮完成動画のご確認",
        description: "完成した動画をご確認いただきます",
      },
      { step: "06", title: "修正対応", description: "ご要望に合わせてブラッシュアップ" },
      {
        step: "07",
        title: "完成・納品",
        description: "データ納品／DVD／クラウド共有など",
      },
    ],
    duration: "6〜12週間",
    deliverables: [
      "4K/HD MP4形式の動画ファイル",
      "YouTube用最適化ファイル",
      "各種SNS用フォーマット",
      "メイキング映像（オプション）",
    ],
  },
  {
    slug: "film-drama-production",
    title: "映画・ドラマ制作",
    description: "本格的な映画・ドラマ作品の企画から制作まで、トータルサポート",
    image: "/film-production.jpg",
    detailedDescription:
      "短編映画から長編作品、Webドラマまで、ストーリーテリングの力で観る人の心を動かす作品を制作します。脚本開発からキャスティング、撮影、ポストプロダクションまで、一貫してサポートします。",
    features: [
      "オリジナル脚本の開発",
      "プロフェッショナルなキャスティング",
      "ロケーション撮影・スタジオ撮影",
      "高品質な映像・音響制作",
      "映画祭への出品サポート",
    ],
    process: [
      { step: "01", title: "ヒアリング・打ち合わせ", description: "ご要望・詳細・ご要望を伺い、企画コンセプトを設計" },
      {
        step: "02",
        title: "撮影準備",
        description: "企画・脚本・絵コンテ・ロケハン・キャスティング・スケジュール調整",
      },
      { step: "03", title: "撮影・収録", description: "映像・音声の収録" },
      { step: "04", title: "編集・加工", description: "映像編集、BGM・ナレーション・テロップ追加" },
      {
        step: "05",
        title: "仮完成動画のご確認",
        description: "完成した動画をご確認いただきます",
      },
      { step: "06", title: "修正対応", description: "ご要望に合わせてブラッシュアップ" },
      {
        step: "07",
        title: "完成・納品",
        description: "データ納品／DVD／クラウド共有など",
      },
    ],
    duration: "3〜12ヶ月",
    deliverables: [
      "4K/2K DCP（デジタルシネマパッケージ）",
      "MP4形式の配信用ファイル",
      "ブルーレイマスター",
      "プレスキット（ポスター、予告編等）",
    ],
  },
]

export default function ServiceDetail({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug)

  if (!service) {
    notFound()
  }

  const isMemorialService = service.slug === "memorial-movie"

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-black">
            <ArrowLeft className="w-5 h-5 mr-2" />
            ホームに戻る
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
            <p className="text-xl md:text-2xl">{service.description}</p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">サービス概要</h2>
            <p className="text-lg text-gray-600 leading-relaxed">{service.detailedDescription}</p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">主な特徴</h2>
            <ul className="space-y-4">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-charcoal-light rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span className="text-lg text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 制作の流れ - メモリアル以外のサービスのみ表示 */}
          {!isMemorialService && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-12 text-center">制作の流れ</h2>

              {/* Desktop and Tablet View - Horizontal Flow */}
              <div className="hidden md:block">
                <div className="relative flex items-start justify-center gap-0.5" style={{ minHeight: "300px" }}>
                  {/* Labels */}
                  <div className="flex flex-col justify-between w-24 mr-4" style={{ height: "300px" }}>
                    <div
                      className="bg-charcoal-light text-white px-4 py-3 font-bold text-center text-sm"
                      style={{
                        position: "absolute",
                        top: "20px",
                        left: "0",
                        writingMode: "horizontal-tb",
                      }}
                    >
                      お客様
                    </div>
                    <div
                      className="bg-charcoal-light text-white px-4 py-3 font-bold text-center text-sm"
                      style={{
                        position: "absolute",
                        bottom: "20px",
                        left: "0",
                        writingMode: "horizontal-tb",
                      }}
                    >
                      弊社
                    </div>
                  </div>

                  {/* Flow Steps */}
                  <div className="flex-1 flex items-center justify-center">
                    <div className="flex items-start justify-center gap-0.5">
                      {/* Client Side Steps (Odd numbers) */}
                      <div className="flex gap-0.5">
                        {service.process
                          .filter((_, index) => index % 2 === 0)
                          .map((step, index) => (
                            <div key={step.step} className="relative">
                              <div className="bg-white border-2 border-charcoal-light p-3 w-40 h-32 flex flex-col">
                                <div className="flex items-center gap-2 mb-2">
                                  <div className="bg-charcoal-light text-white w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                                    {step.step}
                                  </div>
                                  <h3 className="font-bold text-xs leading-tight">{step.title}</h3>
                                </div>
                                <p className="text-[11px] text-gray-600 leading-tight">{step.description}</p>
                              </div>
                              {/* Horizontal line on the right */}
                              {index < service.process.filter((_, i) => i % 2 === 0).length - 1 && (
                                <div
                                  className="absolute top-1/2 h-px bg-charcoal-light"
                                  style={{
                                    left: "calc(10rem + 0.125rem)",
                                    width: "0.125rem",
                                    transform: "translateY(-50%)",
                                  }}
                                />
                              )}
                            </div>
                          ))}
                      </div>

                      {/* Company Side Steps (Even numbers) */}
                      <div className="flex gap-0.5" style={{ marginTop: "140px" }}>
                        {service.process
                          .filter((_, index) => index % 2 === 1)
                          .map((step, index) => (
                            <div key={step.step} className="relative">
                              <div className="bg-white border-2 border-charcoal-light p-3 w-32 h-32 flex flex-col">
                                <div className="flex items-center gap-2 mb-2">
                                  <div className="bg-charcoal-light text-white w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                                    {step.step}
                                  </div>
                                  <h3 className="font-bold text-xs leading-tight">{step.title}</h3>
                                </div>
                                <p className="text-[11px] text-gray-600 leading-tight">{step.description}</p>
                              </div>
                              {/* Horizontal line */}
                              {index === 0 && (
                                <div
                                  className="absolute top-1/2 h-px bg-charcoal-light"
                                  style={{
                                    right: "calc(8rem + 0.125rem)",
                                    left: "calc(10rem + 0.125rem)",
                                    transform: "translateY(-50%)",
                                  }}
                                />
                              )}
                              {index > 0 && index < service.process.filter((_, i) => i % 2 === 1).length - 1 && (
                                <div
                                  className="absolute top-1/2 h-px bg-charcoal-light"
                                  style={{
                                    left: "calc(8rem + 0.125rem)",
                                    width: "0.125rem",
                                    transform: "translateY(-50%)",
                                  }}
                                />
                              )}
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile View - Vertical Flow */}
              <div className="md:hidden space-y-6">
                {service.process.map((step) => (
                  <div key={step.step} className="bg-white border-2 border-charcoal-light p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-charcoal-light text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-sm mb-1">{step.title}</h3>
                        <p className="text-xs text-charcoal-light">
                          {Number.parseInt(step.step) % 2 === 1 ? "お客様" : "弊社"}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">納品物</h2>
              <ul className="space-y-2">
                {service.deliverables.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-charcoal-light rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-lightgray">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">お見積り・ご相談はこちら</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            プロジェクトの詳細をお聞かせいただければ、最適なプランをご提案いたします。
            <br />
            お気軽にお問い合わせください。
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdf35MRg59aC8PLeeNP3F7HCldqZF6YkM4cQi8J5jbMedF8EQ/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-charcoal-light text-white px-8 py-4 text-lg hover:bg-charcoal transition-colors"
          >
            お問い合わせ
          </a>
        </div>
      </section>
    </div>
  )
}
