"use client"
import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"

interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  image: string
  category: string
  colors: string[]
  sizes: string[]
  badge?: string
}

const products: Product[] = [
  {
    id: 1,
    name: "en-ry オリジナルTシャツ",
    price: 2980,
    originalPrice: 3980,
    image: "/placeholder.svg?height=300&width=300&text=Tシャツ",
    category: "tshirt",
    colors: ["ブラック", "ホワイト", "グレー"],
    sizes: ["S", "M", "L", "XL"],
    badge: "人気商品",
  },
  {
    id: 2,
    name: "ロゴ刺繍キャップ",
    price: 3500,
    image: "/placeholder.svg?height=300&width=300&text=キャップ",
    category: "cap",
    colors: ["ブラック", "ネイビー", "ベージュ"],
    sizes: ["フリーサイズ"],
  },
  {
    id: 3,
    name: "レザーハンドバッグ",
    price: 12800,
    originalPrice: 15800,
    image: "/placeholder.svg?height=300&width=300&text=ハンドバッグ",
    category: "handbag",
    colors: ["ブラック", "ブラウン"],
    sizes: ["ワンサイズ"],
    badge: "限定品",
  },
  {
    id: 4,
    name: "カジュアルショルダーバッグ",
    price: 8900,
    image: "/placeholder.svg?height=300&width=300&text=ショルダーバッグ",
    category: "shoulderbag",
    colors: ["ブラック", "グレー", "カーキ"],
    sizes: ["ワンサイズ"],
  },
  {
    id: 5,
    name: "プレミアムTシャツ",
    price: 4200,
    image: "/placeholder.svg?height=300&width=300&text=プレミアムT",
    category: "tshirt",
    colors: ["ホワイト", "ブラック", "ネイビー"],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: 6,
    name: "スナップバックキャップ",
    price: 4500,
    image: "/placeholder.svg?height=300&width=300&text=スナップバック",
    category: "cap",
    colors: ["ブラック", "ホワイト", "レッド"],
    sizes: ["フリーサイズ"],
  },
]

export default function ApparelSection() {
  return (
    <section id="apparel" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">APPAREL</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            en-ryオリジナルアパレル商品をお楽しみください。 高品質な素材とデザインにこだわった商品を取り揃えています。
          </p>
        </div>

        {/* 商品一覧 */}
        <div className="w-full">
          <div className="mb-6">
            <p className="text-gray-600">{products.length}件の商品が見つかりました</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="relative">
                  {product.badge && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded z-10">
                      {product.badge}
                    </span>
                  )}
                  <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
                  </button>
                  <div className="h-64 bg-gray-100 relative">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-medium mb-3 line-clamp-2">{product.name}</h3>

                  <div className="flex items-center mb-3">
                    <span className="text-xl font-bold text-charcoal-light">¥{product.price.toLocaleString()}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through ml-2">
                        ¥{product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-1">カラー:</p>
                    <div className="flex gap-1">
                      {product.colors.slice(0, 3).map((color, index) => (
                        <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded">
                          {color}
                        </span>
                      ))}
                      {product.colors.length > 3 && (
                        <span className="text-xs text-gray-500">+{product.colors.length - 3}</span>
                      )}
                    </div>
                  </div>

                  <div>
                    <Link
                      href={`#product-${product.id}`}
                      className="w-full border border-charcoal-light text-charcoal-light py-2 px-4 rounded hover:bg-charcoal-light hover:text-white transition-colors text-center block"
                    >
                      詳細を見る
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ページネーション */}
          <div className="mt-12 flex justify-center">
            <div className="flex items-center space-x-2">
              <button className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-50">前へ</button>
              <button className="px-3 py-2 bg-charcoal-light text-white rounded">1</button>
              <button className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-50">2</button>
              <button className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-50">3</button>
              <button className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-50">次へ</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
