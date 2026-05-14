import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Clock, Users, Award, CheckCircle } from "lucide-react"
import { RedThreadBackground } from "@/components/red-thread-background"

const services = [
  {
    title: "広告プロモーション・企業・商品・観光PR",
    slug: "promotion-pr",
    description:
      "ブランドの想いを届けるプロモーションから採用・Web広告まで幅広く対応。年間サブスク制プランも。\n採用募集、インナーブランディング、サービス紹介、SNS向けショート動画など",
    image: "/service-pr.jpg",
    price: "300,000円〜",
    duration: "2-4週間",
    features: [
      "企業PR動画（採用募集、インナーブランディング、サービス紹介、アニバーサリーなど）",
      "商品PR・サービス紹介",
      "観光地PR・自治体プロモーション",
      "SNS向けショート動画（Instagram／TikTok／YouTube）",
      "Web広告用動画",
      "年間サブスク動画（年10本の継続制作、好きなタイミングで動画制作、コスト最適化）",
      "映画監督が企画・演出を監修",
      "多彩なジャンル表現",
    ],
    category: "企業向け",
    popular: true,
  },
  {
    title: “CM制作”,
    slug: “commercial”,
    description:
      “15秒にブランドの真髄を凝縮。テレビCMからWeb動画広告まで対応。映画制作で培った演出力で、商品の魅力やサービスの核心を記憶に残る体験として描き出します。”,
    image: “/service-cm.jpg”,
    price: “500,000円〜”,
    duration: “3-6週間”,
    features: [
      “テレビCM・Web動画広告”,
      “ブランデッドムービー”,
      “戦略的演出・映画監督による企画提案”,
    ],
    category: “企業向け”,
    popular: false,
  },
  {
    title: "MV・PR映像（アーティスト・ダンサー・パフォーマー）",
    slug: "music-video",
    description: "楽曲・アーティストの世界観を映画的演出で最大限に表現。\nMV、ダンサーPR、パフォーマンス撮影、SNS縦型動画など",
    image: "/mv-production-female-artist-filming.jpg",
    price: "500,000円〜",
    duration: "3-6週間",
    features: [
      "ミュージックビデオ（MV）",
      "ダンサー・アーティストPRムービー",
      "パフォーマンス撮影",
      "SNS用ショートMV（縦型対応）",
      "楽曲ストーリーに合わせた映画的企画",
    ],
    category: "エンターテイメント",
    popular: true,
  },
  {
    title: "ドラマ・映画制作",
    slug: "film-drama",
    description: "映画監督による本格演出でショートドラマから長編映画まで一貫制作。\n企業タイアップ、PRドラマ、オリジナル作品など",
    image: "/service-film-drama.jpg",
    price: "1,000,000円〜",
    duration: "2-6ヶ月",
    features: [
      "ショートドラマ制作",
      "オリジナル映画作品",
      "企業×ドラマのタイアップ企画",
      "PRドラマ映像",
      "シナリオ・キャスティング・演出・編集まで一貫制作",
    ],
    category: "エンターテイメント",
    popular: false,
  },
]

const categories = ["すべて", "企業向け", "エンターテイメント"]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white relative">
      <RedThreadBackground />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo-final.png"
              alt="株式会社en-ry（エンリー）"
              width={32}
              height={32}
              className="object-contain"
            />
            <h1 className="text-2xl font-bold">en-ry</h1>
          </Link>

          <Link href="/#services" className="inline-flex items-center text-gray-600 hover:text-black transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            ホームに戻る
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-charcoal-light to-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">SERVICES</h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              お客様のニーズに合わせた幅広い映像制作サービスをご提供します。
              <br />
              企画から撮影、編集、納品まで一貫してサポートいたします。
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-charcoal-light">私たちができること</h2>
            <p className="text-gray-600 leading-relaxed mb-12">
              15年以上の経験を持つプロフェッショナルチームが、お客様の想いを映像で表現します。
              企業PR映像から個人のメモリアル映像まで、幅広いジャンルに対応しています。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-charcoal-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-charcoal-light">経験豊富なチーム</h3>
                <p className="text-gray-600 text-sm">各分野のスペシャリストが連携して制作</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-charcoal-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-charcoal-light">高品質な仕上がり</h3>
                <p className="text-gray-600 text-sm">妥協のない品質で期待を超える映像を制作</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-charcoal-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-charcoal-light">柔軟な対応</h3>
                <p className="text-gray-600 text-sm">お客様のスケジュールに合わせた制作進行</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-lightgray">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-charcoal-light">サービス一覧</h2>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full border border-charcoal-light text-charcoal-light hover:bg-charcoal-light hover:text-white transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service) => (
                <div
                  key={service.slug}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow relative"
                >
                  {service.popular && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">人気</span>
                    </div>
                  )}

                  <div className="h-48 bg-gray-100 relative hidden md:block">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <div className="mb-4">
                      <span className="bg-charcoal-light text-white text-xs px-2 py-1 rounded">{service.category}</span>
                    </div>

                    <div className="md:hidden mb-4">
                      <div className="h-48 bg-gray-100 relative rounded-lg overflow-hidden">
                        <Image
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4">
                          <h3 className="text-xl font-bold text-white text-center">{service.title}</h3>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-charcoal-light line-clamp-2 hidden md:block">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 whitespace-pre-line">{service.description}</p>

                    <div className="mb-4">
                      <h4 className="font-bold text-sm mb-2 text-charcoal-light">主な制作内容</h4>
                      <div className="space-y-1">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <p className="text-xs text-gray-500 ml-5">他{service.features.length - 3}項目</p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {service.duration}
                      </div>
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center bg-charcoal-light text-white px-4 py-2 rounded hover:bg-charcoal transition-colors text-sm"
                      >
                        詳細を見る
                        <ArrowRight className="ml-2 w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-lightgray p-12 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-charcoal-light">お見積り・ご相談はお気軽に</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              どのサービスが最適かわからない場合でも、お気軽にご相談ください。
              お客様のご要望をお聞きして、最適なプランをご提案いたします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdf35MRg59aC8PLeeNP3F7HCldqZF6YkM4cQi8J5jbMedF8EQ/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-charcoal-light text-white px-8 py-3 rounded hover:bg-charcoal transition-colors"
              >
                お問い合わせ
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <Link
                href="/portfolio"
                className="inline-flex items-center border border-charcoal-light text-charcoal-light px-8 py-3 rounded hover:bg-charcoal-light hover:text-white transition-colors"
              >
                制作実績を見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal-light text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex items-center">
                <Image
                  src="/logo-final.png"
                  alt="株式会社en-ry（エンリー）"
                  width={28}
                  height={28}
                  className="object-contain invert"
                />
              </div>
              <Link href="/" className="text-2xl font-bold">
                en-ry
              </Link>
            </div>
            <p className="text-gray-300 mb-4">幸せな今を縁\"en\"が導く─未来の記憶\"memory\"に</p>
            <p>&copy; 2025 en-ry All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
