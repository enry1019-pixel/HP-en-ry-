import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Calendar, Play, Filter } from "lucide-react"

const portfolioItems = [
  {
    id: 1,
    title: "株式会社ABC 企業PR映像",
    slug: "client-1",
    category: "企業PR映像",
    year: "2023年",
    client: "株式会社ABC",
    duration: "3分30秒",
    description: "創業50周年を迎えた老舗製造業の企業PR映像。伝統と革新を融合させた映像表現で企業の魅力を伝える。",
    image: "/placeholder.svg?height=300&width=400&text=クライアント1",
    tags: ["企業PR", "ドローン撮影", "インタビュー"],
    featured: true,
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
      "革新的なスマートウォッチの新商品ローンチに向けたプロモーション映像。商品の機能性とライフスタイルを表現。",
    image: "/placeholder.svg?height=300&width=400&text=クライアント2",
    tags: ["商品プロモーション", "ライフスタイル", "スマートデバイス"],
    featured: false,
  },
  {
    id: 3,
    title: "創立記念イベント ドキュメンタリー",
    slug: "client-3",
    category: "イベント記録",
    year: "2023年",
    client: "一般社団法人DEF",
    duration: "15分00秒",
    description: "創立10周年記念イベントの全記録を感動的なドキュメンタリー映像として制作。",
    image: "/placeholder.svg?height=300&width=400&text=クライアント3",
    tags: ["イベント記録", "ドキュメンタリー", "インタビュー"],
    featured: true,
  },
  {
    id: 4,
    title: "地域活性化 観光PR映像",
    slug: "client-4",
    category: "企業PR映像",
    year: "2023年",
    client: "○○市観光協会",
    duration: "4分45秒",
    description: "地方都市の観光PR映像。四季折々の美しい風景と地域の文化、グルメを紹介。",
    image: "/placeholder.svg?height=300&width=400&text=クライアント4",
    tags: ["観光PR", "地域活性化", "ドローン撮影"],
    featured: false,
  },
  {
    id: 5,
    title: "アーティスト ミュージックビデオ",
    slug: "client-5",
    category: "MV制作",
    year: "2023年",
    client: "シンガーソングライター GHI",
    duration: "3分45秒",
    description: "新進気鋭のシンガーソングライターのデビューシングルMV。楽曲の世界観を映像で表現。",
    image: "/placeholder.svg?height=300&width=400&text=クライアント5",
    tags: ["MV制作", "音楽", "アーティスト"],
    featured: true,
  },
  {
    id: 6,
    title: "短編ドラマ「絆」",
    slug: "client-6",
    category: "ドラマ制作",
    year: "2023年",
    client: "独立系制作会社 JKL",
    duration: "25分00秒",
    description: "家族の絆をテーマにした短編ドラマ。脚本から撮影、編集まで一貫して制作。",
    image: "/placeholder.svg?height=300&width=400&text=クライアント6",
    tags: ["ドラマ制作", "家族", "感動"],
    featured: false,
  },
  {
    id: 7,
    title: "建設会社 安全教育映像",
    slug: "client-7",
    category: "企業PR映像",
    year: "2022年",
    client: "株式会社建設MNO",
    duration: "8分30秒",
    description: "建設現場での安全教育を目的とした映像。実際の現場での事例を交えて制作。",
    image: "/placeholder.svg?height=300&width=400&text=クライアント7",
    tags: ["教育映像", "安全管理", "建設業"],
    featured: false,
  },
  {
    id: 8,
    title: "結婚式 ハイライト映像",
    slug: "client-8",
    category: "メモリアル映像",
    year: "2023年",
    client: "田中様・佐藤様",
    duration: "5分20秒",
    description: "人生の大切な瞬間を美しく記録した結婚式のハイライト映像。感動的な一日を映像で表現。",
    image: "/placeholder.svg?height=300&width=400&text=クライアント8",
    tags: ["結婚式", "メモリアル", "感動"],
    featured: false,
  },
  {
    id: 9,
    title: "IT企業 採用動画",
    slug: "client-9",
    category: "企業PR映像",
    year: "2023年",
    client: "株式会社テックPQR",
    duration: "4分10秒",
    description: "IT企業の採用活動を支援する映像。社員インタビューと職場環境を紹介。",
    image: "/placeholder.svg?height=300&width=400&text=クライアント9",
    tags: ["採用動画", "IT企業", "インタビュー"],
    featured: true,
  },
]

const categories = [
  "すべて",
  "企業PR映像",
  "商品プロモーション",
  "イベント記録",
  "MV制作",
  "ドラマ制作",
  "メモリアル映像",
]
const years = ["すべて", "2023年", "2022年", "2021年"]

export default function PortfolioPage() {
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
            ホームに戻る
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-charcoal-light to-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">PORTFOLIO</h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              これまでに制作した映像作品をご紹介します。
              <br />
              様々な業界のクライアント様と協力して制作した作品の数々をご覧ください。
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-charcoal-light mb-2">150+</div>
                <p className="text-gray-600">制作実績</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-charcoal-light mb-2">8年</div>
                <p className="text-gray-600">平均経験年数</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-charcoal-light mb-2">98%</div>
                <p className="text-gray-600">顧客満足度</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-charcoal-light mb-2">15</div>
                <p className="text-gray-600">受賞歴</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="py-20 bg-lightgray">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-charcoal-light">注目の作品</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {portfolioItems
                .filter((item) => item.featured)
                .slice(0, 3)
                .map((item) => (
                  <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-lg">
                    <div className="aspect-video bg-gray-100 relative">
                      <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                      <div className="absolute top-4 left-4">
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">注目</span>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="text-center text-white p-6">
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-sm mb-4">{item.description}</p>
                        <Link
                          href={`/portfolio/${item.slug}`}
                          className="inline-flex items-center text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors"
                        >
                          <Play className="w-4 h-4 mr-2" />
                          詳細を見る
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-charcoal-light">全ての作品</h2>
              <div className="flex items-center gap-4">
                <Filter className="w-5 h-5 text-gray-500" />
                <span className="text-gray-500 text-sm">フィルター</span>
              </div>
            </div>

            {/* Filters */}
            <div className="mb-8 space-y-4">
              <div>
                <h3 className="font-bold mb-2 text-charcoal-light">カテゴリ</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className="px-3 py-1 text-sm rounded-full border border-charcoal-light text-charcoal-light hover:bg-charcoal-light hover:text-white transition-colors"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-2 text-charcoal-light">制作年</h3>
                <div className="flex flex-wrap gap-2">
                  {years.map((year) => (
                    <button
                      key={year}
                      className="px-3 py-1 text-sm rounded-full border border-charcoal-light text-charcoal-light hover:bg-charcoal-light hover:text-white transition-colors"
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Works Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-video bg-gray-100 relative">
                    <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 hover:opacity-100">
                      <Play className="w-12 h-12 text-white" />
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-charcoal-light text-white text-xs px-2 py-1 rounded">{item.category}</span>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {item.year}
                      </div>
                    </div>

                    <h3 className="text-lg font-bold mb-2 text-charcoal-light line-clamp-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>

                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-500">{item.client}</span>
                      <span className="text-sm text-gray-500">{item.duration}</span>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {item.tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className="bg-lightgray text-xs px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                      {item.tags.length > 2 && <span className="text-xs text-gray-500">+{item.tags.length - 2}</span>}
                    </div>

                    <Link
                      href={`/portfolio/${item.slug}`}
                      className="inline-flex items-center text-charcoal-light hover:text-charcoal transition-colors w-full justify-center border border-charcoal-light py-2 rounded hover:bg-charcoal-light hover:text-white"
                    >
                      詳細を見る
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <div className="flex items-center space-x-2">
                <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50">
                  前へ
                </button>
                <button className="px-4 py-2 bg-charcoal-light text-white rounded">1</button>
                <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">2</button>
                <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">3</button>
                <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">次へ</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-lightgray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4 text-charcoal-light">あなたのプロジェクトを始めませんか？</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              これらの作品のような映像制作をご希望でしたら、お気軽にお問い合わせください。
              お客様のご要望に合わせた最適なプランをご提案いたします。
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
                href="/services"
                className="inline-flex items-center border border-charcoal-light text-charcoal-light px-8 py-3 rounded hover:bg-charcoal-light hover:text-white transition-colors"
              >
                サービスを見る
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
