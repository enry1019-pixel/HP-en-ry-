import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Tag } from "lucide-react"
import ScrollToTop from "@/components/scroll-to-top"

const newsArticles = [
  {
    id: "1",
    date: "2025.01.15",
    category: "お知らせ",
    title: "新オフィス移転のお知らせ",
    description: "2025年2月より、新宿の新オフィスに移転いたします。",
    content: `
      <p>平素より格別のご高配を賜り、厚く御礼申し上げます。</p>
      
      <p>この度、株式会社en-ryは事業拡大に伴い、2025年2月1日より下記住所に移転することとなりましたのでお知らせいたします。</p>
      
      <h3>新住所</h3>
      <p>〒160-0022<br>
      東京都新宿区新宿2丁目12番13号<br>
      新宿アントレサロンビル3階</p>
      
      <p>新オフィスでは、より充実した制作環境を整え、お客様により良いサービスをご提供できるよう努めてまいります。</p>
      
      <p>今後とも変わらぬご愛顧を賜りますよう、よろしくお願い申し上げます。</p>
    `,
    image: "/modern-office-building-tokyo.jpg",
  },
  {
    id: "2",
    date: "2025.01.10",
    category: "制作実績",
    title: "福井県観光PR動画を制作しました",
    description: "福井県の魅力を伝える観光PR動画の制作を担当させていただきました。",
    content: `
      <p>この度、福井県観光連盟様より依頼を受け、福井県の観光PR動画を制作させていただきました。</p>
      
      <h3>プロジェクト概要</h3>
      <p>福井県の豊かな自然、歴史的建造物、伝統工芸、そして美味しい食文化を、4K映像で美しく表現しました。ドローン撮影を活用し、東尋坊や永平寺などの名所を空撮で捉え、迫力ある映像に仕上げています。</p>
      
      <h3>制作のポイント</h3>
      <ul>
        <li>4K高画質撮影による美しい映像表現</li>
        <li>ドローン空撮で福井の絶景を捉える</li>
        <li>地元の方々へのインタビューで温かみのある内容に</li>
        <li>四季折々の魅力を凝縮した3分間の映像</li>
      </ul>
      
      <p>本動画は福井県の公式YouTubeチャンネルおよび観光サイトで公開されています。ぜひご覧ください。</p>
    `,
    image: "/fukui-pr-thumbnail.jpg",
  },
  {
    id: "3",
    date: "2025.01.05",
    category: "イベント",
    title: "映像制作セミナーを開催します",
    description: "初心者向けの映像制作セミナーを2月に開催いたします。",
    content: `
      <p>株式会社en-ryでは、映像制作に興味をお持ちの方を対象とした初心者向けセミナーを開催いたします。</p>
      
      <h3>セミナー概要</h3>
      <p><strong>日時：</strong>2025年2月15日（土）14:00-17:00<br>
      <strong>場所：</strong>en-ry新オフィス（新宿）<br>
      <strong>定員：</strong>20名（先着順）<br>
      <strong>参加費：</strong>無料</p>
      
      <h3>セミナー内容</h3>
      <ul>
        <li>映像制作の基礎知識</li>
        <li>企画・構成の立て方</li>
        <li>撮影機材の選び方</li>
        <li>編集ソフトの使い方（実演）</li>
        <li>プロの現場見学</li>
      </ul>
      
      <h3>こんな方におすすめ</h3>
      <ul>
        <li>映像制作に興味がある方</li>
        <li>YouTubeやSNSで動画を発信したい方</li>
        <li>企業の広報担当者</li>
        <li>映像業界への就職を考えている学生</li>
      </ul>
      
      <p>お申し込みは当社ウェブサイトのお問い合わせフォームよりお願いいたします。皆様のご参加をお待ちしております。</p>
    `,
    image: "/video-production-seminar-workshop.jpg",
  },
  {
    id: "4",
    date: "2024.12.20",
    category: "お知らせ",
    title: "年末年始休業のお知らせ",
    description: "2024年12月28日〜2025年1月5日まで年末年始休業とさせていただきます。",
    content: `
      <p>平素は格別のご高配を賜り、厚く御礼申し上げます。</p>
      
      <p>誠に勝手ながら、下記の期間を年末年始休業とさせていただきます。</p>
      
      <h3>休業期間</h3>
      <p><strong>2024年12月28日（土）〜 2025年1月5日（日）</strong></p>
      
      <p>※2025年1月6日（月）より通常営業いたします。</p>
      
      <p>休業期間中にいただいたお問い合わせにつきましては、1月6日以降、順次対応させていただきます。</p>
      
      <p>ご不便をおかけいたしますが、何卒ご理解賜りますようお願い申し上げます。</p>
    `,
    image: "/new-year-celebration-japan.jpg",
  },
  {
    id: "5",
    date: "2024.12.15",
    category: "制作実績",
    title: "アーティストMV制作を担当しました",
    description: "人気アーティストの新曲MVの制作を担当させていただきました。",
    content: `
      <p>この度、人気アーティストの新曲「未来への扉」のミュージックビデオ制作を担当させていただきました。</p>
      
      <h3>制作コンセプト</h3>
      <p>楽曲のテーマである「希望」と「挑戦」を視覚的に表現するため、都会の夜景と自然の風景を対比させた映像構成としました。アーティストの力強いパフォーマンスと、繊細な表情の変化を捉えることに注力しています。</p>
      
      <h3>撮影について</h3>
      <ul>
        <li>東京都内の夜景スポットでのロケーション撮影</li>
        <li>スタジオでのパフォーマンス撮影</li>
        <li>ドローンによる空撮シーン</li>
        <li>4K高画質での撮影</li>
      </ul>
      
      <h3>技術的なポイント</h3>
      <p>カラーグレーディングにこだわり、楽曲の世界観を色彩で表現しました。また、スローモーションとタイムラプスを効果的に使用し、時間の流れを視覚化しています。</p>
      
      <p>本MVは各種音楽配信サービスおよびYouTubeで公開中です。</p>
    `,
    image: "/music-video-production-artist-performance.jpg",
  },
  {
    id: "6",
    date: "2024.12.01",
    category: "お知らせ",
    title: "新サービス「ドローン撮影プラン」開始",
    description: "ドローンを活用した空撮サービスを本格的に開始いたします。",
    content: `
      <p>株式会社en-ryでは、この度ドローンを活用した空撮サービス「ドローン撮影プラン」を本格的に開始いたします。</p>
      
      <h3>サービス内容</h3>
      <p>最新のドローン機材を使用し、4K高画質での空撮を提供いたします。観光PR、不動産紹介、イベント記録、企業PR動画など、様々な用途にご利用いただけます。</p>
      
      <h3>ドローン撮影の特徴</h3>
      <ul>
        <li>4K/60fps高画質撮影</li>
        <li>安定した映像を実現するジンバル搭載</li>
        <li>国土交通省認定の操縦士が対応</li>
        <li>各種許可申請サポート</li>
      </ul>
      
      <h3>料金プラン</h3>
      <p><strong>基本プラン：</strong>80,000円〜（撮影時間2時間まで）<br>
      <strong>1日プラン：</strong>150,000円〜（撮影時間8時間まで）</p>
      
      <p>※編集費用は別途お見積りいたします。<br>
      ※撮影場所によっては別途許可申請費用が必要となる場合があります。</p>
      
      <p>詳細はお問い合わせフォームよりお気軽にご相談ください。</p>
    `,
    image: "/drone-aerial-photography-cinematography.jpg",
  },
  {
    id: "7",
    date: "2024.11.20",
    category: "イベント",
    title: "映画祭にて作品が上映されました",
    description: "当社制作の短編映画が東京国際映画祭で上映されました。",
    content: `
      <p>当社が制作に携わった短編映画「記憶の糸」が、第37回東京国際映画祭のショートフィルム部門にて上映されました。</p>
      
      <h3>作品について</h3>
      <p>「記憶の糸」は、認知症の祖母と孫の絆を描いた15分の短編映画です。当社は撮影・編集・音響を担当し、監督の繊細な演出意図を映像で表現することに注力しました。</p>
      
      <h3>制作の裏側</h3>
      <p>撮影は東京近郊の古民家で行われ、自然光を活かした温かみのある映像表現を心がけました。また、音響面では環境音を丁寧に収録し、静寂の中に流れる時間を表現しています。</p>
      
      <h3>上映後の反響</h3>
      <p>上映後、多くの観客の方々から感動の声をいただきました。特に、映像の美しさと音響のバランスについて高い評価をいただいております。</p>
      
      <p>今後も質の高い映像作品の制作に取り組んでまいります。</p>
    `,
    image: "/film-festival-cinema-screening.jpg",
  },
  {
    id: "8",
    date: "2024.11.10",
    category: "制作実績",
    title: "企業研修動画を制作しました",
    description: "大手企業様の社内研修用動画を制作させていただきました。",
    content: `
      <p>この度、大手企業様より依頼を受け、新入社員向けの研修動画を制作させていただきました。</p>
      
      <h3>プロジェクト概要</h3>
      <p>企業理念、業務フロー、コンプライアンスなど、新入社員が知っておくべき内容を、わかりやすく魅力的な映像で表現しました。全5本のシリーズ動画として制作し、各動画は10-15分の長さとなっています。</p>
      
      <h3>制作のポイント</h3>
      <ul>
        <li>アニメーションとインタビューを組み合わせた構成</li>
        <li>視聴者の集中力を保つテンポの良い編集</li>
        <li>重要なポイントをテロップで強調</li>
        <li>社員インタビューで実際の業務をリアルに紹介</li>
      </ul>
      
      <h3>クライアントの声</h3>
      <p>「わかりやすく、見やすい動画に仕上げていただきました。新入社員からの評判も良く、研修の効果が向上しました」とのお言葉をいただいております。</p>
      
      <p>企業研修動画、マニュアル動画の制作もお任せください。</p>
    `,
    image: "/corporate-training-video-business.jpg",
  },
]

interface NewsPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function NewsDetailPage({ params }: NewsPageProps) {
  const { id } = await params
  const article = newsArticles.find((a) => a.id === id)

  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo-final.png" alt="en-ry logo" width={32} height={32} className="object-contain" />
            <h1 className="text-2xl font-bold">en-ry</h1>
          </Link>

          <Link href="/news" className="inline-flex items-center text-gray-600 hover:text-black transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            ニュース一覧に戻る
          </Link>
        </div>
      </header>

      {/* Article Content */}
      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Article Header */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <time>{article.date}</time>
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  <span className="px-3 py-1 bg-charcoal-light text-white rounded-full text-xs">
                    {article.category}
                  </span>
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-charcoal-light mb-4">{article.title}</h1>
              <p className="text-lg text-gray-600">{article.description}</p>
            </div>

            {/* Article Body */}
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
              style={{
                lineHeight: "1.8",
              }}
            />

            {/* Back to List Button */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link
                href="/news"
                className="inline-flex items-center text-charcoal-light hover:text-charcoal transition-colors font-medium"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                ニュース一覧に戻る
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-charcoal-light text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Image src="/logo-final.png" alt="en-ry logo" width={32} height={32} className="object-contain invert" />
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
