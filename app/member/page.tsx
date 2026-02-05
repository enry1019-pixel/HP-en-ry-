"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Mail, Twitter, Instagram, Linkedin } from "lucide-react"

const members = [
  {
    id: 1,
    name: "山田 太郎",
    position: "代表取締役・ディレクター",
    description:
      "映像制作業界で15年の経験を持つ。大手広告代理店での勤務を経て、2015年にen-ryを設立。企業PR映像から映画制作まで幅広いジャンルを手がけ、数々の賞を受賞。クライアントの想いを映像で表現することを信条としている。",
    specialties: ["企業PR映像", "ブランディング", "ディレクション", "企画・構成"],
    experience: "15年",
    awards: ["映像制作協会賞 2022", "広告映像大賞 2021", "クリエイティブ賞 2020"],
    image: "/placeholder.svg?height=400&width=400&text=山田太郎",
    email: "yamada@en-ry.com",
    social: {
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 2,
    name: "佐藤 花子",
    position: "チーフディレクター",
    description:
      "美術大学で映像制作を学び、卒業後は制作会社でキャリアを積む。2018年にen-ryに参加。特にメモリアル映像や感動的なストーリーテリングを得意とし、多くのクライアントから信頼を得ている。",
    specialties: ["メモリアル映像", "ストーリーテリング", "編集", "カラーグレーディング"],
    experience: "10年",
    awards: ["感動映像賞 2023", "編集技術賞 2022"],
    image: "/placeholder.svg?height=400&width=400&text=佐藤花子",
    email: "sato@en-ry.com",
    social: {
      twitter: "#",
      instagram: "#",
    },
  },
  {
    id: 3,
    name: "田中 一郎",
    position: "シニアカメラマン",
    description:
      "報道カメラマンとしてキャリアをスタートし、その後商業映像の世界へ。ドキュメンタリータッチの撮影を得意とし、自然な表情や瞬間を捉える技術に定評がある。ドローン操縦士の資格も保有。",
    specialties: ["ドキュメンタリー撮影", "ドローン撮影", "インタビュー撮影", "ライティング"],
    experience: "12年",
    awards: ["撮影技術賞 2023", "ドローン映像賞 2022"],
    image: "/placeholder.svg?height=400&width=400&text=田中一郎",
    email: "tanaka@en-ry.com",
    social: {
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 4,
    name: "鈴木 美咲",
    position: "クリエイティブディレクター",
    description:
      "グラフィックデザイナーから映像業界に転身。アートディレクションとモーショングラフィックスを専門とし、視覚的に美しい映像制作を手がける。特にMV制作での評価が高い。",
    specialties: ["アートディレクション", "モーショングラフィックス", "MV制作", "ビジュアルエフェクト"],
    experience: "8年",
    awards: ["デザイン賞 2023", "MV制作賞 2022"],
    image: "/placeholder.svg?height=400&width=400&text=鈴木美咲",
    email: "suzuki@en-ry.com",
    social: {
      twitter: "#",
      instagram: "#",
    },
  },
  {
    id: 5,
    name: "高橋 健太",
    position: "サウンドエンジニア",
    description:
      "音楽制作会社での経験を活かし、映像に最適な音響設計を行う。録音から音響効果、音楽制作まで幅広く対応。映像と音の調和を重視した作品作りを心がけている。",
    specialties: ["音響設計", "録音", "音響効果", "音楽制作"],
    experience: "9年",
    awards: ["音響技術賞 2022"],
    image: "/placeholder.svg?height=400&width=400&text=高橋健太",
    email: "takahashi@en-ry.com",
    social: {
      linkedin: "#",
    },
  },
  {
    id: 6,
    name: "伊藤 麻衣",
    position: "プロデューサー",
    description:
      "制作進行管理のスペシャリスト。複数のプロジェクトを同時に管理し、品質とスケジュールの両立を実現。クライアントとの窓口役も務め、円滑なコミュニケーションを心がけている。",
    specialties: ["プロジェクト管理", "クライアント対応", "予算管理", "スケジュール調整"],
    experience: "7年",
    awards: ["プロジェクト管理賞 2023"],
    image: "/placeholder.svg?height=400&width=400&text=伊藤麻衣",
    email: "ito@en-ry.com",
    social: {
      linkedin: "#",
    },
  },
]

export default function MemberPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl font-bold">en-ry</h1>
          </Link>

          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-black transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            ホームに戻る
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-charcoal-light to-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">MEMBER</h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              映像制作のプロフェッショナルチームをご紹介します。
              <br />
              それぞれの専門分野で培った経験と技術で、最高品質の映像をお届けします。
            </p>
          </div>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-charcoal-light">私たちのチーム</h2>
            <p className="text-gray-600 leading-relaxed">
              en-ryは、映像制作の各分野で豊富な経験を持つプロフェッショナルが集まったチームです。
              ディレクション、撮影、編集、音響、プロデュースまで、すべての工程を社内で完結できる体制を整えています。
              お客様の想いを形にするため、チーム一丸となって最高の作品作りに取り組んでいます。
            </p>
          </div>

          {/* Members Grid */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {members.map((member) => (
                <div
                  key={member.id}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="aspect-square bg-gray-100 relative">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>

                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold mb-1 text-charcoal-light">{member.name}</h3>
                      <p className="text-charcoal-light font-medium">{member.position}</p>
                      <p className="text-sm text-gray-500">経験年数: {member.experience}</p>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-4">{member.description}</p>

                    <div className="mb-4">
                      <h4 className="font-bold text-sm mb-2 text-charcoal-light">専門分野</h4>
                      <div className="flex flex-wrap gap-1">
                        {member.specialties.slice(0, 3).map((specialty, index) => (
                          <span key={index} className="bg-lightgray text-xs px-2 py-1 rounded">
                            {specialty}
                          </span>
                        ))}
                        {member.specialties.length > 3 && (
                          <span className="text-xs text-gray-500">+{member.specialties.length - 3}</span>
                        )}
                      </div>
                    </div>

                    {member.awards.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-bold text-sm mb-2 text-charcoal-light">受賞歴</h4>
                        <div className="text-xs text-gray-600">
                          {member.awards.slice(0, 2).map((award, index) => (
                            <div key={index}>{award}</div>
                          ))}
                          {member.awards.length > 2 && (
                            <div className="text-gray-500">他{member.awards.length - 2}件</div>
                          )}
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {member.social.twitter && (
                          <a
                            href={member.social.twitter}
                            className="text-gray-400 hover:text-blue-500 transition-colors"
                          >
                            <Twitter className="w-4 h-4" />
                          </a>
                        )}
                        {member.social.instagram && (
                          <a
                            href={member.social.instagram}
                            className="text-gray-400 hover:text-pink-500 transition-colors"
                          >
                            <Instagram className="w-4 h-4" />
                          </a>
                        )}
                        {member.social.linkedin && (
                          <a
                            href={member.social.linkedin}
                            className="text-gray-400 hover:text-blue-600 transition-colors"
                          >
                            <Linkedin className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                      <a
                        href={`mailto:${member.email}`}
                        className="text-charcoal-light hover:text-charcoal transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-lightgray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-charcoal-light">私たちの想い</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-charcoal-light">品質へのこだわり</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  妥協のない品質を追求し、お客様の期待を超える映像制作を心がけています。
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-charcoal-light">チームワーク</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  各分野のスペシャリストが連携し、一つの作品に向かって力を合わせています。
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-charcoal-light">継続的な成長</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  常に新しい技術や表現方法を学び、進化し続けるチームを目指しています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-lightgray p-12 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-charcoal-light">一緒に働きませんか？</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              en-ryでは、映像制作に情熱を持つ仲間を募集しています。
              私たちと一緒に、お客様の想いを映像で表現してみませんか？
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdf35MRg59aC8PLeeNP3F7HCldqZF6YkM4cQi8J5jbMedF8EQ/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-charcoal-light text-white px-8 py-3 rounded hover:bg-charcoal transition-colors"
              >
                採用に関するお問い合わせ
                <Mail className="ml-2 w-4 h-4" />
              </a>
              <Link
                href="/#services"
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
