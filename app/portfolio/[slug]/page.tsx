import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Calendar, Tag, User, Play } from "lucide-react"

const portfolioItems = [
  {
    id: 1,
    title: "株式会社ABC 企業PR映像",
    slug: "client-1",
    category: "企業PR映像",
    year: "2023年",
    client: "株式会社ABC",
    duration: "3分30秒",
    description:
      "創業50周年を迎えた老舗製造業の企業PR映像を制作。伝統と革新を融合させた映像表現で、企業の歴史と未来への展望を描きました。工場での製造工程から、社員インタビュー、経営陣のメッセージまで、多角的に企業の魅力を伝える作品に仕上げました。",
    images: [
      "/placeholder.svg?height=400&width=600&text=メイン映像",
      "/placeholder.svg?height=300&width=400&text=工場撮影",
      "/placeholder.svg?height=300&width=400&text=インタビュー",
      "/placeholder.svg?height=300&width=400&text=製品紹介",
    ],
    tags: ["企業PR", "ドローン撮影", "インタビュー", "製造業"],
  },
  {
    id: 2,
    title: "新商品ローンチ プロモーション映像",
    slug: "client-2",
    category: "商品プロモーション",
    year: "2023年",
    client: "株式会社XYZ",
    duration: "2分15秒",
    description:
      "革新的なスマートウォッチの新商品ローンチに向けたプロモーション映像を制作。商品の機能性とライフスタイルへの溶け込み方を、ストーリー性のある映像で表現しました。",
    images: [
      "/placeholder.svg?height=400&width=600&text=商品プロモ",
      "/placeholder.svg?height=300&width=400&text=ライフスタイル",
      "/placeholder.svg?height=300&width=400&text=機能紹介",
      "/placeholder.svg?height=300&width=400&text=使用シーン",
    ],
    tags: ["商品プロモーション", "ライフスタイル", "スマートデバイス"],
  },
  {
    id: 3,
    title: "創立記念イベント ドキュメンタリー",
    slug: "client-3",
    category: "イベント記録",
    year: "2023年",
    client: "一般社団法人DEF",
    duration: "15分00秒",
    description:
      "創立10周年記念イベントの全記録を、感動的なドキュメンタリー映像として制作。関係者のインタビューと当日の様子を織り交ぜ、組織の歩みと未来への想いを描きました。",
    images: [
      "/placeholder.svg?height=400&width=600&text=イベント記録",
      "/placeholder.svg?height=300&width=400&text=式典",
      "/placeholder.svg?height=300&width=400&text=インタビュー",
      "/placeholder.svg?height=300&width=400&text=懇親会",
    ],
    tags: ["イベント記録", "ドキュメンタリー", "インタビュー"],
  },
  {
    id: 4,
    title: "地域活性化 観光PR映像",
    slug: "client-4",
    category: "企業PR映像",
    year: "2023年",
    client: "○○市観光協会",
    duration: "4分45秒",
    description:
      "地方都市の観光PR映像を制作。四季折々の美しい風景と地域の文化、グルメを紹介し、観光客誘致を目的とした魅力的な映像作品に仕上げました。",
    images: [
      "/placeholder.svg?height=400&width=600&text=観光PR",
      "/placeholder.svg?height=300&width=400&text=風景",
      "/placeholder.svg?height=300&width=400&text=グルメ",
      "/placeholder.svg?height=300&width=400&text=文化",
    ],
    tags: ["観光PR", "地域活性化", "ドローン撮影"],
  },
  {
    id: 5,
    title: "アーティスト ミュージックビデオ",
    slug: "client-5",
    category: "MV制作",
    year: "2023年",
    client: "シンガーソングライター GHI",
    duration: "3分45秒",
    description:
      "新進気鋭のシンガーソングライターのデビューシングルMVを制作。楽曲の世界観を映像で表現し、アーティストの個性と魅力を最大限に引き出しました。",
    images: [
      "/placeholder.svg?height=400&width=600&text=MV制作",
      "/placeholder.svg?height=300&width=400&text=パフォーマンス",
      "/placeholder.svg?height=300&width=400&text=ロケーション",
      "/placeholder.svg?height=300&width=400&text=クローズアップ",
    ],
    tags: ["MV制作", "音楽", "アーティスト"],
  },
  {
    id: 6,
    title: "短編ドラマ「絆」",
    slug: "client-6",
    category: "ドラマ制作",
    year: "2023年",
    client: "独立系制作会社 JKL",
    duration: "25分00秒",
    description:
      "家族の絆をテーマにした短編ドラマを制作。脚本から撮影、編集まで一貫して手がけ、感動的な作品に仕上げました。地域の映画祭でも上映され、高い評価を受けています。",
    images: [
      "/placeholder.svg?height=400&width=600&text=ドラマ制作",
      "/placeholder.svg?height=300&width=400&text=演技シーン",
      "/placeholder.svg?height=300&width=400&text=撮影風景",
      "/placeholder.svg?height=300&width=400&text=家族シーン",
    ],
    tags: ["ドラマ制作", "家族", "感動"],
  },
]

interface PortfolioPageProps {
  params: {
    slug: string
  }
}

export default function PortfolioPage({ params }: PortfolioPageProps) {
  const item = portfolioItems.find((p) => p.slug === params.slug)

  if (!item) {
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

          <Link href="/#works" className="inline-flex items-center text-gray-600 hover:text-black transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            ポートフォリオ一覧に戻る
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-charcoal-light to-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">{item.category}</span>
              <span className="text-white/80">{item.year}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{item.title}</h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">{item.description}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Project Info */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
              <div className="lg:col-span-2">
                <div className="aspect-video bg-gray-100 relative rounded-lg overflow-hidden mb-8">
                  <Image src={item.images[0] || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <button className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                      <Play className="w-8 h-8 text-charcoal-light ml-1" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-lightgray p-6 rounded-lg">
                  <h3 className="font-bold mb-4 text-charcoal-light">プロジェクト詳細</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <User className="w-5 h-5 text-charcoal-light mr-3" />
                      <div>
                        <p className="text-sm text-gray-600">クライアント</p>
                        <p className="font-medium">{item.client}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Tag className="w-5 h-5 text-charcoal-light mr-3" />
                      <div>
                        <p className="text-sm text-gray-600">カテゴリ</p>
                        <p className="font-medium">{item.category}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 text-charcoal-light mr-3" />
                      <div>
                        <p className="text-sm text-gray-600">制作年</p>
                        <p className="font-medium">{item.year}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Play className="w-5 h-5 text-charcoal-light mr-3" />
                      <div>
                        <p className="text-sm text-gray-600">再生時間</p>
                        <p className="font-medium">{item.duration}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-lightgray p-6 rounded-lg">
                  <h3 className="font-bold mb-4 text-charcoal-light">タグ</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, index) => (
                      <span key={index} className="bg-white px-3 py-1 rounded-full text-sm text-charcoal-light">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-charcoal-light">制作風景・カット</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {item.images.slice(1).map((image, index) => (
                    <div key={index} className="aspect-video bg-gray-100 relative rounded-lg overflow-hidden">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${item.title} - ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 text-center bg-lightgray p-12 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-charcoal-light">類似プロジェクトのご相談</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                このような映像制作をご希望でしたら、お気軽にお問い合わせください。お客様のご要望に合わせた最適なプランをご提案いたします。
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
                  href="/#works"
                  className="inline-flex items-center border border-charcoal-light text-charcoal-light px-8 py-3 rounded hover:bg-charcoal-light hover:text-white transition-colors"
                >
                  他の実績を見る
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
            <p>&copy; 2023 en-ry All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
