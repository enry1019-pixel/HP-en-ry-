import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Palette, Ruler, Package, Truck } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Original T-Shirt",
    slug: "original-tshirt",
    category: "T-Shirts",
    year: "2023",
    price: 2980,
    originalPrice: 3980,
    description: "A stylish and comfortable original t-shirt.",
    features: [
      "High-quality fabric",
      "Available in multiple colors",
      "Versatile design",
      "Soft touch",
      "Perfect for everyday wear",
    ],
    colors: ["ブラック", "ホワイト", "グレー", "ネイビー"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "100% Cotton",
    care: "Machine washable",
    images: [
      "/images/original-tshirt-1.jpg",
      "/images/original-tshirt-2.jpg",
      "/images/original-tshirt-3.jpg",
      "/images/original-tshirt-4.jpg",
      "/images/original-tshirt-5.jpg",
    ],
  },
  {
    id: 2,
    name: "Logo Cap",
    slug: "logo-cap",
    category: "Caps",
    year: "2023",
    price: 3500,
    description: "A fashionable logo cap for any occasion.",
    features: [
      "Stylish design",
      "Available in multiple colors",
      "Comfortable fit",
      "Perfect for outdoor activities",
      "Easy to wear",
    ],
    colors: ["ブラック", "ネイビー", "ベージュ"],
    sizes: ["フリーサイズ（54-60cm）"],
    material: "100% Cotton",
    care: "Machine washable",
    images: [
      "/images/logo-cap-1.jpg",
      "/images/logo-cap-2.jpg",
      "/images/logo-cap-3.jpg",
      "/images/logo-cap-4.jpg",
      "/images/logo-cap-5.jpg",
    ],
  },
  {
    id: 3,
    name: "Leather Handbag",
    slug: "leather-handbag",
    category: "Handbags",
    year: "2023",
    price: 12800,
    originalPrice: 15800,
    description: "A luxurious leather handbag for all your essentials.",
    features: [
      "High-quality leather",
      "Multiple compartments",
      "Stylish design",
      "Comfortable to carry",
      "Perfect for urban outings",
    ],
    colors: ["ブラック", "ブラウン"],
    sizes: ["ワンサイズ（W35×H25×D12cm）"],
    material: "Leather",
    care: "Spot clean",
    images: [
      "/images/leather-handbag-1.jpg",
      "/images/leather-handbag-2.jpg",
      "/images/leather-handbag-3.jpg",
      "/images/leather-handbag-4.jpg",
      "/images/leather-handbag-5.jpg",
    ],
  },
  {
    id: 4,
    name: "Casual Shoulder Bag",
    slug: "casual-shoulder-bag",
    category: "Bags",
    year: "2023",
    price: 8900,
    description: "A casual shoulder bag for everyday use.",
    features: [
      "Comfortable shoulder straps",
      "Multiple pockets",
      "Stylish design",
      "Easy to carry",
      "Perfect for shopping",
    ],
    colors: ["ブラック", "グレー", "カーキ"],
    sizes: ["ワンサイズ（W30×H22×D10cm）"],
    material: "Canvas",
    care: "Machine washable",
    images: [
      "/images/casual-shoulder-bag-1.jpg",
      "/images/casual-shoulder-bag-2.jpg",
      "/images/casual-shoulder-bag-3.jpg",
      "/images/casual-shoulder-bag-4.jpg",
      "/images/casual-shoulder-bag-5.jpg",
    ],
  },
  {
    id: 5,
    name: "Premium T-Shirt",
    slug: "premium-tshirt",
    category: "T-Shirts",
    year: "2023",
    price: 4200,
    description: "A premium quality t-shirt with a unique design.",
    features: [
      "Premium fabric",
      "Available in multiple colors",
      "Unique design",
      "Soft touch",
      "Perfect for special occasions",
    ],
    colors: ["ホワイト", "ブラック", "ネイビー"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Blend of Cotton and Polyester",
    care: "Machine washable",
    images: [
      "/images/premium-tshirt-1.jpg",
      "/images/premium-tshirt-2.jpg",
      "/images/premium-tshirt-3.jpg",
      "/images/premium-tshirt-4.jpg",
      "/images/premium-tshirt-5.jpg",
    ],
  },
  {
    id: 6,
    name: "Snapback Cap",
    slug: "snapback-cap",
    category: "Caps",
    year: "2023",
    price: 4500,
    description: "A trendy snapback cap for any season.",
    features: [
      "Trendy design",
      "Available in multiple colors",
      "Comfortable fit",
      "Perfect for casual wear",
      "Easy to wear",
    ],
    colors: ["ブラック", "ホワイト", "レッド"],
    sizes: ["フリーサイズ"],
    material: "100% Cotton",
    care: "Machine washable",
    images: [
      "/images/snapback-cap-1.jpg",
      "/images/snapback-cap-2.jpg",
      "/images/snapback-cap-3.jpg",
      "/images/snapback-cap-4.jpg",
      "/images/snapback-cap-5.jpg",
    ],
  },
]

interface ApparelPageProps {
  params: {
    slug: string
  }
}

export default function ApparelPage({ params }: ApparelPageProps) {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
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

          <Link href="/#apparel" className="inline-flex items-center text-gray-600 hover:text-black transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            アパレル一覧に戻る
          </Link>
        </div>
      </header>

      {/* Coming Soon Hero */}
      <section className="py-20 bg-gradient-to-r from-charcoal-light to-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Coming Soon</h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              近日公開予定
              <br />
              アパレル商品の詳細は準備中です
            </p>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Product Images */}
              <div>
                <div className="aspect-square bg-gray-100 relative rounded-lg overflow-hidden mb-6">
                  <Image
                    src={product.images[0] || "/placeholder.svg"}
                    alt="Coming Soon"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="text-white text-4xl font-bold">Coming Soon</span>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {product.images.slice(1, 5).map((image, index) => (
                    <div key={index} className="aspect-square bg-gray-100 relative rounded-lg overflow-hidden">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Coming Soon - ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-8">
                <div>
                  <h1 className="text-3xl font-bold mb-4 text-charcoal-light">{product.name}</h1>
                  <div className="flex items-center mb-6">
                    <span className="text-3xl font-bold text-charcoal-light">Coming Soon</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg">{product.description}</p>
                </div>

                {/* Product Details */}
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold mb-3 flex items-center">
                      <Palette className="w-5 h-5 mr-2 text-charcoal-light" />
                      カラー
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {product.colors.map((color, index) => (
                        <span key={index} className="bg-lightgray px-3 py-1 rounded text-sm">
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold mb-3 flex items-center">
                      <Ruler className="w-5 h-5 mr-2 text-charcoal-light" />
                      サイズ
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((size, index) => (
                        <span key={index} className="bg-lightgray px-3 py-1 rounded text-sm">
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold mb-3 flex items-center">
                      <Package className="w-5 h-5 mr-2 text-charcoal-light" />
                      素材・お手入れ
                    </h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>
                        <strong>素材:</strong> {product.material}
                      </p>
                      <p>
                        <strong>お手入れ:</strong> {product.care}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Purchase Button */}
                <div className="space-y-4">
                  <button
                    disabled
                    className="w-full bg-gray-400 text-white py-4 px-8 rounded-lg font-bold cursor-not-allowed opacity-60"
                  >
                    Coming Soon
                  </button>
                  <div className="flex items-center text-sm text-gray-600">
                    <Truck className="w-4 h-4 mr-2" />
                    近日販売開始予定
                  </div>
                </div>
              </div>
            </div>

            {/* Product Features */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 text-charcoal-light">商品の特徴</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {product.features.map((feature, index) => (
                  <div key={index} className="bg-lightgray p-6 rounded-lg">
                    <div className="w-8 h-8 bg-charcoal-light rounded-full flex items-center justify-center text-white font-bold text-sm mb-4">
                      {index + 1}
                    </div>
                    <p className="text-gray-600">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Products */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 text-charcoal-light">関連商品</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products
                  .filter((p) => p.id !== product.id)
                  .slice(0, 3)
                  .map((relatedProduct) => (
                    <Link key={relatedProduct.id} href={`/apparel/${relatedProduct.slug}`} className="group">
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="aspect-square bg-gray-100 relative">
                          <Image
                            src={relatedProduct.images[0] || "/placeholder.svg"}
                            alt="Coming Soon"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-white text-xl font-bold">Coming Soon</span>
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-medium mb-2 line-clamp-2">{relatedProduct.name}</h3>
                          <div className="flex items-center">
                            <span className="text-lg font-bold text-charcoal-light">Coming Soon</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-lightgray p-12 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-charcoal-light">Coming Soon</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                en-ryオリジナルアパレルの販売開始まで、もうしばらくお待ちください。
                高品質な素材とデザインにこだわった商品を準備中です。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#apparel"
                  className="inline-flex items-center bg-charcoal-light text-white px-8 py-3 rounded hover:bg-charcoal transition-colors"
                >
                  アパレル一覧に戻る
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdf35MRg59aC8PLeeNP3F7HCldqZF6YkM4cQi8J5jbMedF8EQ/viewform?usp=dialog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center border border-charcoal-light text-charcoal-light px-8 py-3 rounded hover:bg-charcoal-light hover:text-white transition-colors"
                >
                  お問い合わせ
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
            <p>&copy; 2023 en-ry All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
