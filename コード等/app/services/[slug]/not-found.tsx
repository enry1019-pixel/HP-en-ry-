import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-charcoal-light mb-4">サービスが見つかりません</h2>
        <p className="text-gray-600 mb-8">お探しのサービスページは存在しないか、移動された可能性があります。</p>
        <Link
          href="/#services"
          className="inline-flex items-center bg-charcoal-light text-white px-6 py-3 rounded hover:bg-charcoal transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          サービス一覧に戻る
        </Link>
      </div>
    </div>
  )
}
