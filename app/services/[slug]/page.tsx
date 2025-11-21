import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import ScrollToTop from "@/components/scroll-to-top"

const services = [
  {
    title: "広告プロモーション・企業・商品・観光PR",
    slug: "promotion-pr",
    description:
      "■ 制作内容\n・企業PR動画　→採用募集、インナーブランディング、サービス紹介、アニバーサリーなど\n・商品PR・サービス紹介\n・観光地PR・自治体プロモーション\n・SNS向けショート動画（Instagram／TikTok／YouTube）\n・Web広告用動画\n\n■ 年間サブスク動画（定額制サービス）\n単発ではなく 年間で動画を定期制作できる新サービス\n・選べる４プラン\n・年10本の継続制作\n・好きなタイミングで動画制作\n・品質の安定化\n・コスト最適化\n・SNS・採用・広報・HP更新に最適\n\n■ 特徴\n・映画監督が企画・演出を監修\n・SNS対応も可能\n・多彩なジャンル表現",
    image: "/fukui-pr-thumbnail.jpg",
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
    process: [
      {
        number: "01",
        title: "ヒアリング・打ち合わせ",
        description: "ご予算・納期・ご要望を伺い、企画コンセプトを設計",
        actor: "client",
        details: ["目的・ターゲットの明確化", "予算・スケジュールの調整", "企画書・絵コンテの作成"],
      },
      {
        number: "02",
        title: "撮影準備",
        description: "企画・脚本・絵コンテ・ロケハン・キャスティング・スケジュール調整",
        actor: "company",
        details: ["ロケーション撮影", "スタジオ撮影", "インタビュー収録", "ドローン撮影"],
      },
      {
        number: "03",
        title: "撮影・収録",
        description: "映像・音声の収録",
        actor: "both",
        details: ["映像編集", "音響調整", "カラーグレーディング", "エフェクト処理"],
      },
      {
        number: "04",
        title: "編集・加工",
        description: "映像・音声の編集、テロップ・BGM・効果音の挿入",
        actor: "company",
        details: ["各種フォーマット対応", "配信プラットフォーム最適化", "修正対応", "運用サポート"],
      },
      {
        number: "05",
        title: "仮完成動画のご確認",
        description: "仮完成動画\nのご確認",
        actor: "client",
      },
      {
        number: "06",
        title: "修正対応",
        description: "ご要望に合わせてブラッシュアップ",
        actor: "company",
      },
      {
        number: "07",
        title: "完成・納品",
        description: "データ納品／DVD／クラウド共有など",
        actor: "both",
      },
    ],
  },
  {
    title: "メモリアルムービー ＋ 電子卒業アルバム",
    slug: "memorial-movie",
    description:
      "■ 制作内容\n・冠婚葬祭ムービー（結婚式・お別れ会）\n・家族・赤ちゃん記念ムービー\n・ペットメモリアル\n・個人ヒストリー映像\n・学校・地域行事の記録映像\n・卒園・卒業ムービー\n\n■ 電子卒業アルバム\n写真・動画・メッセージを融合した デジタル卒アル\n・完全電子卒業アルバム\n・行事動画・メッセージ動画なども収録\n・紙の卒アルに QRコードで動画を追加するハイブリッド対応も可\n・長期保存・スマホ閲覧が可能\n・学校PRにも活用できる映像制作とセット提案可能\n・既存の紙媒体よりもコスト減小\n\n■ 特徴\n・想いを丁寧に描くストーリームービー\n・記録＋作品として未来に残せる形",
    image: "/japanese-wedding-family-celebration-memories.jpg",
    features: [
      "冠婚葬祭ムービー（結婚式・お別れ会）",
      "家族・赤ちゃん記念ムービー",
      "ペットメモリアル",
      "個人ヒストリー映像",
      "学校・地域行事の記録映像",
      "卒園・卒業ムービー",
      "電子卒業アルバム（完全電子卒業アルバム、行事動画・メッセージ動画収録、QRコードで動画追加可）",
    ],
    process: [
      {
        number: "01",
        title: "ヒアリング・打ち合わせ",
        description: "ご予算・納期・ご要望を伺い、企画コンセプトを設計",
        actor: "client",
        details: ["目的・ターゲットの明確化", "予算・スケジュールの調整", "企画書・絵コンテの作成"],
      },
      {
        number: "02",
        title: "撮影準備",
        description: "企画・脚本・絵コンテ・ロケハン・キャスティング・スケジュール調整",
        actor: "company",
        details: ["ロケーション撮影", "スタジオ撮影", "インタビュー収録", "ドローン撮影"],
      },
      {
        number: "03",
        title: "撮影・収録",
        description: "映像・音声の収録",
        actor: "both",
        details: ["映像編集", "音響調整", "カラーグレーディング", "エフェクト処理"],
      },
      {
        number: "04",
        title: "編集・加工",
        description: "映像・音声の編集、テロップ・BGM・効果音の挿入",
        actor: "company",
        details: ["各種フォーマット対応", "配信プラットフォーム最適化", "修正対応", "運用サポート"],
      },
      {
        number: "05",
        title: "仮完成動画のご確認",
        description: "仮完成動画\nのご確認",
        actor: "client",
      },
      {
        number: "06",
        title: "修正対応",
        description: "ご要望に合わせてブラッシュアップ",
        actor: "company",
      },
      {
        number: "07",
        title: "完成・納品",
        description: "データ納品／DVD／クラウド共有など",
        actor: "both",
      },
    ],
    price: "150,000円〜",
    duration: "1-2週間",
  },
  {
    title: "MV・PR映像（アーティスト・ダンサー・パフォーマー）",
    slug: "music-video",
    description:
      "■ 制作内容\n・ミュージックビデオ（MV）\n・ダンサー・アーティストPRムービー\n・パフォーマンス撮影\n・SNS用ショートMV（縦型対応）\n・楽曲ストーリーに合わせた映画的企画\n■ 特徴\n・映画のような構図\n・照明\n・演出\n・世界観\n・物語性重視の映像表現",
    image: "/mv-production-female-artist-filming.jpg",
    features: [
      "ミュージックビデオ（MV）",
      "ダンサー・アーティストPRムービー",
      "パフォーマンス撮影",
      "SNS用ショートMV（縦型対応）",
      "楽曲ストーリーに合わせた映画的企画",
    ],
    process: [
      {
        number: "01",
        title: "ヒアリング・打ち合わせ",
        description: "ご予算・納期・ご要望を伺い、企画コンセプトを設計",
        actor: "client",
        details: ["目的・ターゲットの明確化", "予算・スケジュールの調整", "企画書・絵コンテの作成"],
      },
      {
        number: "02",
        title: "撮影準備",
        description: "企画・脚本・絵コンテ・ロケハン・キャスティング・スケジュール調整",
        actor: "company",
        details: ["ロケーション撮影", "スタジオ撮影", "インタビュー収録", "ドローン撮影"],
      },
      {
        number: "03",
        title: "撮影・収録",
        description: "映像・音声の収録",
        actor: "both",
        details: ["映像編集", "音響調整", "カラーグレーディング", "エフェクト処理"],
      },
      {
        number: "04",
        title: "編集・加工",
        description: "映像・音声の編集、テロップ・BGM・効果音の挿入",
        actor: "company",
        details: ["各種フォーマット対応", "配信プラットフォーム最適化", "修正対応", "運用サポート"],
      },
      {
        number: "05",
        title: "仮完成動画のご確認",
        description: "仮完成動画\nのご確認",
        actor: "client",
      },
      {
        number: "06",
        title: "修正対応",
        description: "ご要望に合わせてブラッシュアップ",
        actor: "company",
      },
      {
        number: "07",
        title: "完成・納品",
        description: "データ納品／DVD／クラウド共有など",
        actor: "both",
      },
    ],
    price: "500,000円〜",
    duration: "3-6週間",
  },
  {
    title: "ドラマ・映画制作",
    slug: "film-drama",
    description:
      "■ 制作内容\n・ショートドラマ制作\n・オリジナル映画作品\n・企業×ドラマのタイアップ企画\n・PRドラマ映像\n・シナリオ・キャスティング・演出・編集まで一貫制作\n\n■ 特徴\n・映画監督による本格演出\n・物語性を重視した高い制作品質\n・企業・地域とのコラボ作品制作も可能",
    image: "/film-director-rear-view-no-face.jpg",
    features: [
      "ショートドラマ制作",
      "オリジナル映画作品",
      "企業×ドラマのタイアップ企画",
      "PRドラマ映像",
      "シナリオ・キャスティング・演出・編集まで一貫制作",
    ],
    process: [
      {
        number: "01",
        title: "ヒアリング・打ち合わせ",
        description: "ご予算・納期・ご要望を伺い、企画コンセプトを設計",
        actor: "client",
        details: ["目的・ターゲットの明確化", "予算・スケジュールの調整", "企画書・絵コンテの作成"],
      },
      {
        number: "02",
        title: "撮影準備",
        description: "企画・脚本・絵コンテ・ロケハン・キャスティング・スケジュール調整",
        actor: "company",
        details: ["ロケーション撮影", "スタジオ撮影", "インタビュー収録", "ドローン撮影"],
      },
      {
        number: "03",
        title: "撮影・収録",
        description: "映像・音声の収録",
        actor: "both",
        details: ["映像編集", "音響調整", "カラーグレーディング", "エフェクト処理"],
      },
      {
        number: "04",
        title: "編集・加工",
        description: "映像・音声の編集、テロップ・BGM・効果音の挿入",
        actor: "company",
        details: ["各種フォーマット対応", "配信プラットフォーム最適化", "修正対応", "運用サポート"],
      },
      {
        number: "05",
        title: "仮完成動画のご確認",
        description: "仮完成動画\nのご確認",
        actor: "client",
      },
      {
        number: "06",
        title: "修正対応",
        description: "ご要望に合わせてブラッシュアップ",
        actor: "company",
      },
      {
        number: "07",
        title: "完成・納品",
        description: "データ納品／DVD／クラウド共有など",
        actor: "both",
      },
    ],
    price: "1,000,000円〜",
    duration: "2-6ヶ月",
  },
]

interface ServicePageProps {
  params: {
    slug: string
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find((s) => s.slug === params.slug)

  if (!service) {
    notFound()
  }

  const serviceCategories = [
    {
      title: "広告プロモーション・企業・商品・観光PR",
      slug: "promotion-pr",
      description:
        '企業・行政・商品・観光地の魅力を最大化するプロモーション映像を、"映画クオリティ"で制作。さらに 年間サブスク動画（定額制） で、企業の動画発信を仕組み化します。',
    },
    {
      title: "メモリアルムービー ＋ 電子卒業アルバム",
      slug: "memorial-movie",
      description:
        '"縁を記憶に、未来へ。"人生の節目や家族の大切な瞬間を映像で残すサービス。さらに学校向けには 電子卒業アルバム による新しい形の思い出保存も提供します。',
    },
    {
      title: "MV・PR映像（アーティスト・ダンサー・パフォーマー）",
      slug: "music-video",
      description: "音楽・表現者の世界観を映像で最大化し、作品性の高いMVやPR動画を制作します。",
    },
    {
      title: "ドラマ・映画制作",
      slug: "film-drama",
      description: "en-ryの核となる「映画制作」の技術を活かし、短編ドラマから映画作品まで幅広く対応。",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />

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
            サービス一覧に戻る
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-charcoal-light to-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">サービス一覧</h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              企業PR、メモリアル、MV、映画・ドラマなど、幅広い映像制作サービスをご提供しています。お客様のニーズに合わせた最適な映像をご提案いたします。
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Scattered Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Top Left - 企業PR Box */}
              <Link
                href="/services/promotion-pr"
                className="relative overflow-hidden bg-gradient-to-br from-charcoal-light to-charcoal text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 flex flex-col justify-between min-h-[250px] order-1"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-20"
                  style={{
                    backgroundImage: "url('/fukui-pr-thumbnail.jpg')",
                  }}
                />
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-3">広告プロモーション・企業・商品・観光PR</h3>
                  <p className="text-white/90 mb-4">{serviceCategories[0].description}</p>
                </div>
              </Link>

              {/* Top Right - Text Content */}
              <div className="space-y-4 flex flex-col justify-center order-2">
                <div className="text-gray-700 leading-relaxed text-lg whitespace-pre-wrap">
                  {services.find((s) => s.slug === "promotion-pr")?.description}
                </div>
              </div>

              {/* Middle Right - メモリアル Box */}
              <Link
                href="/services/memorial-movie"
                className="relative overflow-hidden bg-gradient-to-br from-charcoal-light to-charcoal text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 flex flex-col justify-between min-h-[250px] order-3 md:order-4"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-20"
                  style={{
                    backgroundImage: "url('/japanese-wedding-family-celebration-memories.jpg')",
                  }}
                />
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-3">メモリアルムービー ＋ 電子卒業アルバム</h3>
                  <p className="text-white/90 mb-4">{serviceCategories[1].description}</p>
                </div>
              </Link>

              {/* Middle Left - Text Content */}
              <div className="space-y-4 flex flex-col justify-center order-4 md:order-3">
                <div className="text-gray-700 leading-relaxed text-lg whitespace-pre-wrap">
                  {services.find((s) => s.slug === "memorial-movie")?.description}
                </div>
              </div>

              {/* Bottom Left - MV Box */}
              <Link
                href="/services/music-video"
                className="relative overflow-hidden bg-gradient-to-br from-charcoal-light to-charcoal text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 flex flex-col justify-between min-h-[250px] order-5"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-20"
                  style={{
                    backgroundImage: "url('/mv-production-female-artist-filming.jpg')",
                  }}
                />
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-3">MV・PR映像（アーティスト・ダンサー・パフォーマー）</h3>
                  <p className="text-white/90 mb-4">{serviceCategories[2].description}</p>
                </div>
              </Link>

              {/* Bottom Middle - Text Content */}
              <div className="space-y-4 flex flex-col justify-center order-6">
                <div className="text-gray-700 leading-relaxed text-lg whitespace-pre-wrap">
                  {services.find((s) => s.slug === "music-video")?.description}
                </div>
              </div>

              {/* Bottom Right - 映画・ドラマ Box */}
              <Link
                href="/services/film-drama"
                className="relative overflow-hidden bg-gradient-to-br from-charcoal-light to-charcoal text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 flex flex-col justify-between min-h-[250px] order-7 md:order-8"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-20"
                  style={{
                    backgroundImage: "url('/film-director-rear-view-no-face.jpg')",
                  }}
                />
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-3">ドラマ・映画制作</h3>
                  <p className="text-white/90 mb-4">{serviceCategories[3].description}</p>
                </div>
              </Link>

              {/* Extra Text Content */}
              <div className="space-y-4 flex flex-col justify-center order-8 md:order-7">
                <div className="text-gray-700 leading-relaxed text-lg whitespace-pre-wrap">
                  {services.find((s) => s.slug === "film-drama")?.description}
                </div>
              </div>
            </div>

            {/* Process */}
            <div className="mb-16 -mx-4 md:-mx-8 lg:-mx-16">
              <h2 className="text-3xl font-bold mb-12 text-center text-charcoal-light px-4">制作の流れ</h2>

              {/* Desktop View */}
              <div className="hidden lg:block px-4 md:px-8">
                <div className="max-w-full mx-auto">
                  <div className="flex gap-6 items-center justify-center">
                    <div className="flex flex-col gap-[140px] flex-shrink-0">
                      <div className="bg-charcoal-light text-white px-4 py-3 rounded-lg font-bold text-base text-center whitespace-nowrap">
                        お客様
                      </div>
                      <div className="bg-charcoal-light text-white px-4 py-3 rounded-lg font-bold text-base text-center whitespace-nowrap">
                        en-ry
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {service.process.length > 0 ? (
                        service.process.map((step, index) => (
                          <div key={index} className="flex items-center">
                            {/* Step with indicators */}
                            <div className="flex flex-col items-center">
                              {/* Top indicator (Customer) */}
                              <div className="h-8 flex items-center justify-center mb-3">
                                {step.actor === "client" || step.actor === "both" ? (
                                  <div className="w-5 h-5 rounded-full border-2 border-charcoal-light bg-white"></div>
                                ) : (
                                  <div className="text-lg text-charcoal-light/40 font-bold">×</div>
                                )}
                              </div>

                              <div className="w-[130px] h-[130px] rounded-lg border-2 border-charcoal-light bg-white flex flex-col items-center justify-center p-3 shadow-sm hover:shadow-md transition-shadow">
                                <span className="text-3xl font-bold text-charcoal-light">{step.number}</span>
                                <span className="text-xs text-center leading-tight text-gray-600 mt-2 whitespace-pre-line">
                                  {step.number === "05" ? "仮完成動画\nのご確認" : step.title}
                                </span>
                              </div>

                              {/* Bottom indicator (en-ry) */}
                              <div className="h-8 flex items-center justify-center mt-3">
                                {step.actor === "company" || step.actor === "both" || step.number === "01" ? (
                                  <div className="w-5 h-5 rounded-full border-2 border-charcoal-light bg-white"></div>
                                ) : (
                                  <div className="text-lg text-charcoal-light/40 font-bold">×</div>
                                )}
                              </div>
                            </div>

                            {/* Connecting lines */}
                            {index < service.process.length - 1 && (
                              <div className="flex flex-col gap-[122px] mx-1">
                                <div className="w-6 h-0.5 bg-charcoal-light"></div>
                                <div className="w-6 h-0.5 bg-charcoal-light"></div>
                              </div>
                            )}
                          </div>
                        ))
                      ) : (
                        <p className="text-gray-500">制作の流れは個別にご相談ください</p>
                      )}
                    </div>
                  </div>

                  {/* Step descriptions below */}
                  {service.process.length > 0 && (
                    <div className="mt-12 grid grid-cols-2 gap-4 max-w-6xl mx-auto">
                      {service.process.map((step, index) => (
                        <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                          <div className="flex items-center mb-2">
                            <span className="w-7 h-7 rounded-full bg-charcoal-light text-white flex items-center justify-center font-bold text-xs mr-2">
                              {step.number}
                            </span>
                            <h4 className="font-bold text-sm text-charcoal-light">{step.title}</h4>
                          </div>
                          <p className="text-xs text-gray-600 ml-9 mb-3">{step.description}</p>
                          {step.details && step.details.length > 0 && (
                            <div className="ml-9">
                              <h5 className="font-semibold text-xs text-charcoal-light mb-2">主な作業内容</h5>
                              <ul className="space-y-1">
                                {step.details.map((detail, detailIndex) => (
                                  <li key={detailIndex} className="flex items-start text-xs text-gray-600">
                                    <span className="mr-2">・</span>
                                    <span>{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Tablet View */}
              <div className="hidden md:block lg:hidden">
                <div className="space-y-8">
                  {service.process.length > 0 ? (
                    service.process.map((step, index) => {
                      const isLastStep = index === service.process.length - 1

                      return (
                        <div key={index} className="relative">
                          <div className="flex items-center gap-4">
                            <div className="flex-1 rounded-lg p-4 shadow-lg bg-gray-50 border-2 border-charcoal-light">
                              <div className="flex items-center mb-3 relative z-10">
                                <span className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mr-3 bg-charcoal-light">
                                  {step.number}
                                </span>
                                <div>
                                  <h4 className="font-bold">{step.title}</h4>
                                  <span className="text-xs text-gray-500">
                                    {step.actor === "client"
                                      ? "お客様"
                                      : step.actor === "company"
                                        ? "弊社"
                                        : "お客様・弊社"}
                                  </span>
                                </div>
                              </div>
                              <p className="text-sm text-gray-600 leading-relaxed relative z-10 mb-3">
                                {step.description}
                              </p>
                              {step.details && step.details.length > 0 && (
                                <div className="relative z-10">
                                  <h5 className="font-semibold text-sm text-charcoal-light mb-2">主な作業内容</h5>
                                  <ul className="space-y-1">
                                    {step.details.map((detail, detailIndex) => (
                                      <li key={detailIndex} className="flex items-start text-sm text-gray-600">
                                        <span className="mr-2">・</span>
                                        <span>{detail}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          </div>
                          {!isLastStep && (
                            <div className="flex justify-center my-4">
                              <ArrowLeft className={`w-6 h-6 transform rotate-90 text-charcoal-light`} />
                            </div>
                          )}
                        </div>
                      )
                    })
                  ) : (
                    <p className="text-center text-gray-500">制作の流れは個別にご相談ください</p>
                  )}
                </div>
              </div>

              {/* Mobile View */}
              <div className="md:hidden space-y-6">
                {service.process.length > 0 ? (
                  service.process.map((step, index) => {
                    const isLastStep = index === service.process.length - 1

                    return (
                      <div key={index} className="relative">
                        <div className="px-4">
                          <div className="p-6 rounded-lg shadow-lg bg-gray-50 border-2 border-charcoal-light">
                            <div className="flex items-center mb-3 relative z-10">
                              <span className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mr-3 bg-charcoal-light">
                                {step.number}
                              </span>
                              <div>
                                <h4 className="font-bold">{step.title}</h4>
                                <span className="text-xs text-gray-500">
                                  {step.actor === "client"
                                    ? "お客様"
                                    : step.actor === "company"
                                      ? "弊社"
                                      : "お客様・弊社"}
                                </span>
                              </div>
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed relative z-10 mb-3">
                              {step.description}
                            </p>
                            {step.details && step.details.length > 0 && (
                              <div className="relative z-10">
                                <h5 className="font-semibold text-sm text-charcoal-light mb-2">主な作業内容</h5>
                                <ul className="space-y-1">
                                  {step.details.map((detail, detailIndex) => (
                                    <li key={detailIndex} className="flex items-start text-sm text-gray-600">
                                      <span className="mr-2">・</span>
                                      <span>{detail}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>
                        {!isLastStep && (
                          <div className="flex justify-center my-4">
                            <ArrowLeft className={`w-6 h-6 transform rotate-[-90deg] text-charcoal-light`} />
                          </div>
                        )}
                      </div>
                    )
                  })
                ) : (
                  <p className="text-center text-gray-500">制作の流れは個別にご相談ください</p>
                )}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-lightgray p-12 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-charcoal-light">お見積り・ご相談はお気軽に</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                お見積りは無料です。お客様のご要望に合わせた最適なプランをご提案させていただきます。
              </p>
              <div className="flex justify-center">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdf35MRg59aC8PLeeNP3F7HCldqZF6YkM4cQi8J5jbMedF8EQ/viewform?usp=dialog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-charcoal-light text-white px-8 py-3 rounded hover:bg-charcoal transition-colors"
                >
                  お問い合わせ
                  <ArrowLeft className="ml-2 w-4 h-4" />
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
            <div className="flex items-center justify-center gap-2 mb-4">
              <Image
                src="/logo-final.png"
                alt="株式会社en-ry（エンリー）"
                width={32}
                height={32}
                className="object-contain invert"
              />
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
