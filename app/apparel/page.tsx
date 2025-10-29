"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowLeft, Instagram, Youtube } from "lucide-react"
import { useSearchParams } from "next/navigation"

interface Product {
  id: number
  name: string
  slug: string
  category: string
  year: string
  image: string
}

const products: Product[] = [
  {
    id: 1,
    name: "en-ry オリジナルTシャツ",
    slug: "original-tshirt",
    category: "tshirt",
    year: "2023年",
    image: "/placeholder.svg?height=300&width=300&text=Tシャツ",
  },
  {
    id: 2,
    name: "ロゴ刺繍キャップ",
    slug: "logo-cap",
    category: "cap",
    year: "2023年",
    image: "/placeholder.svg?height=300&width=300&text=キャップ",
  },
  {
    id: 3,
    name: "レザーハンドバッグ",
    slug: "leather-handbag",
    category: "handbag",
    year: "2023年",
    image: "/placeholder.svg?height=300&width=300&text=ハンドバッグ",
  },
  {
    id: 4,
    name: "カジュアルショルダーバッグ",
    slug: "casual-shoulder-bag",
    category: "shoulder-bag",
    year: "2023年",
    image: "/placeholder.svg?height=300&width=300&text=ショルダーバッグ",
  },
  {
    id: 5,
    name: "プレミアムTシャツ",
    slug: "premium-tshirt",
    category: "tshirt",
    year: "2023年",
    image: "/placeholder.svg?height=300&width=300&text=プレミアムT",
  },
  {
    id: 6,
    name: "スナップバックキャップ",
    slug: "snapback-cap",
    category: "cap",
    year: "2023年",
    image: "/placeholder.svg?height=300&width=300&text=スナップバック",
  },
  {
    id: 7,
    name: "ベーシックTシャツ",
    slug: "basic-tshirt",
    category: "tshirt",
    year: "2024年",
    image: "/placeholder.svg?height=300&width=300&text=ベーシックT",
  },
  {
    id: 8,
    name: "デザイナーズキャップ",
    slug: "designer-cap",
    category: "cap",
    year: "2024年",
    image: "/placeholder.svg?height=300&width=300&text=デザイナーズ",
  },
  {
    id: 9,
    name: "トートハンドバッグ",
    slug: "tote-handbag",
    category: "handbag",
    year: "2024年",
    image: "/placeholder.svg?height=300&width=300&text=トート",
  },
  {
    id: 10,
    name: "スポーツショルダーバッグ",
    slug: "sports-shoulder-bag",
    category: "shoulder-bag",
    year: "2024年",
    image: "/placeholder.svg?height=300&width=300&text=スポーツ",
  },
  {
    id: 11,
    name: "ヴィンテージハンドバッグ",
    slug: "vintage-handbag",
    category: "handbag",
    year: "2024年",
    image: "/placeholder.svg?height=300&width=300&text=ヴィンテージ",
  },
  {
    id: 12,
    name: "コンパクトショルダーバッグ",
    slug: "compact-shoulder-bag",
    category: "shoulder-bag",
    year: "2024年",
    image: "/placeholder.svg?height=300&width=300&text=コンパクト",
  },
]

const categoryNames: Record<string, string> = {
  tshirt: "Tシャツ",
  cap: "キャップ",
  handbag: "ハンドバッグ",
  "shoulder-bag": "ショルダーバッグ",
}

export default function ApparelPage() {
  const searchParams = useSearchParams()
  const category = searchParams.get("category")
  const contentRef = useRef<HTMLDivElement>(null)

  const filteredProducts = category ? products.filter((p) => p.category === category) : products

  const pageTitle = category ? categoryNames[category] || "アパレル" : "アパレル"

  useEffect(() => {
    if (category && contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [category])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo-final.png" alt="en-ry logo" width={32} height={32} className="object-contain" />
            <h1 className="text-2xl font-bold">en-ry</h1>
          </Link>

          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-black transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            ホームに戻る
          </Link>
        </div>
      </header>

      {/* Apparel Section */}
      <section ref={contentRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-2">APPAREL</h2>
            <p className="text-lg text-gray-500 mb-4">{pageTitle}</p>
            <p className="text-gray-600 max-w-2xl mx-auto">
              en-ryオリジナルアパレル商品をお楽しみください。 高品質な素材とデザインにこだわった商品を取り揃えています。
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link
              href="/apparel"
              className={`px-6 py-2 rounded-full transition-colors ${
                !category ? "bg-charcoal-light text-white" : "bg-lightgray text-gray-700 hover:bg-gray-300"
              }`}
            >
              すべて
            </Link>
            <Link
              href="/apparel?category=tshirt"
              className={`px-6 py-2 rounded-full transition-colors ${
                category === "tshirt" ? "bg-charcoal-light text-white" : "bg-lightgray text-gray-700 hover:bg-gray-300"
              }`}
            >
              Tシャツ
            </Link>
            <Link
              href="/apparel?category=cap"
              className={`px-6 py-2 rounded-full transition-colors ${
                category === "cap" ? "bg-charcoal-light text-white" : "bg-lightgray text-gray-700 hover:bg-gray-300"
              }`}
            >
              キャップ
            </Link>
            <Link
              href="/apparel?category=handbag"
              className={`px-6 py-2 rounded-full transition-colors ${
                category === "handbag" ? "bg-charcoal-light text-white" : "bg-lightgray text-gray-700 hover:bg-gray-300"
              }`}
            >
              ハンドバッグ
            </Link>
            <Link
              href="/apparel?category=shoulder-bag"
              className={`px-6 py-2 rounded-full transition-colors ${
                category === "shoulder-bag"
                  ? "bg-charcoal-light text-white"
                  : "bg-lightgray text-gray-700 hover:bg-gray-300"
              }`}
            >
              ショルダーバッグ
            </Link>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group relative overflow-hidden">
                <div className="h-64 bg-gray-100 relative flex items-center justify-center">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                </div>
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <h3 className="text-3xl font-bold mb-6">Coming Soon</h3>
                    <Link
                      href={`/apparel/${product.slug}`}
                      className="inline-flex items-center text-white border border-white px-4 py-2 hover:bg-white hover:text-black transition-colors"
                    >
                      詳細を見る
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal-light text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/logo-final.png"
                  alt="en-ry logo"
                  width={28}
                  height={28}
                  className="object-contain invert"
                />
                <h3 className="text-xl font-bold">en-ry</h3>
              </div>
              <div className="space-y-2 text-sm">
                <p className="font-semibold">会社概要</p>
                <p>会社名: 株式会社 en-ry</p>
                <p>設立: 2025.10.16</p>
                <p>代表: 田中 慎太郎</p>
                <p>取締役: 小楠 啓展</p>
                <p>事業内容: 映像関連総合事業</p>
                <p>従業員数: 2名</p>
              </div>
            </div>

            <div className="flex md:flex-col items-center md:items-start justify-center md:justify-start gap-4 md:gap-6">
              <a
                href="https://www.instagram.com/en_ry1023/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram className="w-10 h-10" />
              </a>
              <a
                href="https://www.youtube.com/@en-ry1023"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="YouTube"
              >
                <Youtube className="w-10 h-10" />
              </a>
            </div>

            <div>
              <h4 className="font-bold mb-4">SERVICES</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/services/promotion-pr" className="hover:underline">
                    企業PR映像
                  </Link>
                </li>
                <li>
                  <Link href="/services/promotion-pr" className="hover:underline">
                    商品プロモーション
                  </Link>
                </li>
                <li>
                  <Link href="/services/memorial-movie" className="hover:underline">
                    メモリアル映像
                  </Link>
                </li>
                <li>
                  <Link href="/services/music-video" className="hover:underline">
                    MV制作
                  </Link>
                </li>
                <li>
                  <Link href="/services/film-drama" className="hover:underline">
                    映画・ドラマ制作
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">PORTFOLIO</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/portfolio" className="hover:underline">
                    企業PR映像
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="hover:underline">
                    商品プロモーション
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="hover:underline">
                    イベント記録
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="hover:underline">
                    MV制作
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="hover:underline">
                    ドラマ制作
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">APPAREL</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/apparel?category=tshirt" className="hover:underline">
                    Tシャツ
                  </Link>
                </li>
                <li>
                  <Link href="/apparel?category=cap" className="hover:underline">
                    キャップ
                  </Link>
                </li>
                <li>
                  <Link href="/apparel?category=handbag" className="hover:underline">
                    ハンドバッグ
                  </Link>
                </li>
                <li>
                  <Link href="/apparel?category=shoulder-bag" className="hover:underline">
                    ショルダーバッグ
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-charcoal mt-12 pt-8 text-center">
            <div className="mb-4">
              <h4 className="font-bold mb-2">CONTACT</h4>
              <p className="text-sm mb-4">
                映像制作に関するご相談やお見積りのご依頼など、お気軽にお問い合わせください。
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdf35MRg59aC8PLeeNP3F7HCldqZF6YkM4cQi8J5jbMedF8EQ/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border border-white px-4 py-2 hover:bg-white hover:text-black transition-colors"
              >
                お問い合わせ
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Image src="/logo-final.png" alt="en-ry logo" width={28} height={28} className="object-contain invert" />
              <Link href="/" className="text-2xl font-bold">
                en-ry
              </Link>
            </div>
            <p className="text-gray-300 mb-4">幸せな今を縁"en"が導く─未来の記憶"memory"に</p>
            <p>&copy; 2025 en-ry All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
