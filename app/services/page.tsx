import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Clock, Users, Award, CheckCircle } from "lucide-react"

const services = [
  {
    title: "広告・プロモーション・企業観光PR動画",
    slug: "promotion-pr",
    description:
      "企業のブランド価値を最大化する戦略的な映像制作。商品・サービスの魅力を効果的に伝え、観光地の魅力をダイナミックに表現します。マーケティング効果を重視した企画から撮影、編集まで一貫してサポートいたします。",
    image: "/placeholder.svg?height=400&width=600&text=プロモーション",
    price: "300,000円〜",
    duration: "2-4週間",
    features: [
      "企業ブランディング映像",
      "商品・サービスプロモーション",
      "観光地PR動画",
      "イベント告知映像",
      "SNS向けショート動画",
    ],
    category: "企業向け",
    popular: true,
  },
  {
    title: "メモリアルmovie制作",
    slug: "memorial-movie",
    description:
      "人生の大切な瞬間を美しく記録する感動的な映像制作。冠婚葬祭用ムービーから、故人を偲ぶメモリアルムービーまで、心に残る作品を丁寧に制作します。ご家族の想いを大切にした温かみのある映像をお届けします。",
    image: "/placeholder.svg?height=400&width=600&text=メモリアル",
    price: "150,000円〜",
    duration: "1-2週間",
    features: [
      "冠婚葬祭用ムービー",
      "メモリアルムービー",
      "家族の記録映像",
      "記念日・誕生日映像",
      "卒業・入学記念映像",
    ],
    category: "個人向け",
    popular: false,
  },
  {
    title: "MV制作・アーティスト映像",
    slug: "music-video",
    description:
      "ミュージシャン、アイドル、俳優、モデル、お笑い芸人など、様々なアーティストの世界観を映像で表現。楽曲の魅力を最大限に引き出す演出と、アーティストの個性を活かした創造性豊かなミュージックビデオを制作します。",
    image: "/placeholder.svg?height=400&width=600&text=MV制作",
    price: "500,000円〜",
    duration: "3-6週間",
    features: ["ミュージックビデオ制作", "アーティストPV", "ライブ映像制作", "プロフィール映像", "コンセプト映像"],
    category: "エンターテイメント",
    popular: true,
  },
  {
    title: "映画・ドラマ制作",
    slug: "film-drama",
    description:
      "制作会社や映画監督と連携した本格的な映像作品の企画・制作。脚本開発から撮影、ポストプロダクションまで、プロフェッショナルチームによる高品質な作品作りをサポート。監督の創造的ビジョンを忠実に映像化します。",
    image: "/placeholder.svg?height=400&width=600&text=映画制作",
    price: "1,000,000円〜",
    duration: "2-6ヶ月",
    features: [
      "短編・長編映画制作",
      "ドラマ・シリーズ制作",
      "ドキュメンタリー制作",
      "企業ドラマ制作",
      "教育・研修映像",
    ],
    category: "エンターテイメント",
    popular: false,
  },
  {
    title: "ドローン撮影サービス",
    slug: "drone-shooting",
    description:
      "国土交通省認定のドローン操縦士による空撮サービス。建設現場の記録、不動産物件の紹介、イベントの俯瞰撮影など、地上からでは撮影できない迫力ある映像を提供します。安全管理を徹底し、法令遵守の撮影を行います。",
    image: "/placeholder.svg?height=400&width=600&text=ドローン撮影",
    price: "80,000円〜",
    duration: "1-2日",
    features: ["建設現場記録", "不動産物件撮影", "イベント空撮", "観光地撮影", "点検・調査撮影"],
    category: "専門技術",
    popular: false,
  },
  {
    title: "ライブ配信・収録サービス",
    slug: "live-streaming",
    description:
      "企業セミナー、イベント、コンサートなどのライブ配信・収録を行います。複数カメラでの撮影、リアルタイム配信、同時録画に対応。高品質な映像と音声で、オンラインでも臨場感のある体験を提供します。",
    image: "/placeholder.svg?height=400&width=600&text=ライブ配信",
    price: "200,000円〜",
    duration: "1-3日",
    features: ["マルチカメラ撮影", "リアルタイム配信", "同時録画", "音響設備", "配信プラットフォーム対応"],
    category: "企業向け",
    popular: true,
  },
]

const categories = ["すべて", "企業向け", "個人向け", "エンターテイメント", "専門技術"]

export default function ServicesPage() {
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

                    <h3 className="text-xl font-bold mb-3 text-charcoal-light line-clamp-2 hidden md:block">
                      {service.title}
                    </h3>

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

                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 md:hidden">
                      {service.description}
                    </p>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 hidden md:block">
                      {service.description}
                    </p>

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
            <Link href="/" className="text-2xl font-bold mb-4 inline-block">
              en-ry
            </Link>
            <p className="text-gray-300 mb-4">映像を通して「縁」と思い出を紡いでいく</p>
            <p>&copy; 2023 en-ry All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
