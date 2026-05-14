"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Menu, X, Volume2, VolumeX, Instagram, Youtube } from "lucide-react"
import ServiceSlider from "@/components/service-slider"
import PortfolioSlider from "@/components/portfolio-slider"
import NewsSection from "@/components/news-section"

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [phase1Fading, setPhase1Fading] = useState(false)
  const [phase2Visible, setPhase2Visible] = useState(false)
  const [bandShrunk, setBandShrunk] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const handwrittenTextRef = useRef<HTMLDivElement>(null)
  const taglineSectionRef = useRef<HTMLDivElement>(null)
  const [isHandwrittenVisible, setIsHandwrittenVisible] = useState(false)
  const [isTaglineVisible, setIsTaglineVisible] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  useEffect(() => {
    const p1Fade = setTimeout(() => setPhase1Fading(true), 6400)
    const p2Show = setTimeout(() => setPhase2Visible(true), 7400)
    const shrink = setTimeout(() => setBandShrunk(true), 11600)
    return () => {
      clearTimeout(p1Fade)
      clearTimeout(p2Show)
      clearTimeout(shrink)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const heroSection = videoRef.current.closest("section")
        if (heroSection) {
          const rect = heroSection.getBoundingClientRect()
          if (rect.bottom < 0 || rect.top > window.innerHeight) {
            videoRef.current.pause()
          } else {
            videoRef.current.play()
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -100px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === handwrittenTextRef.current) {
            setIsHandwrittenVisible(true)
          }
          if (entry.target === taglineSectionRef.current) {
            setIsTaglineVisible(true)
          }
        }
      })
    }, observerOptions)

    if (handwrittenTextRef.current) {
      observer.observe(handwrittenTextRef.current)
    }
    if (taglineSectionRef.current) {
      observer.observe(taglineSectionRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center">
              <Image
                src="/logo-final.png"
                alt="株式会社en-ry（エンリー）"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <h1 className="text-2xl font-bold">en-ry</h1>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="#news" className="text-gray-700 hover:text-black font-bold">
              NEWS
            </Link>
            <Link href="#services" className="text-gray-700 hover:text-black font-bold">
              SERVICES
            </Link>
            <Link href="#works" className="text-gray-700 hover:text-black font-bold">
              PORTFOLIO
            </Link>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdf35MRg59aC8PLeeNP3F7HCldqZF6YkM4cQi8J5jbMedF8EQ/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black font-bold"
            >
              CONTACT
            </a>
          </div>

          <button className="md:hidden z-50 relative" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                <Link
                  href="#news"
                  className="text-gray-700 hover:text-black font-bold py-3 border-b border-gray-100"
                  onClick={closeMobileMenu}
                >
                  <div className="flex flex-col">
                    <span className="text-base">NEWS</span>
                    <span className="text-sm text-gray-500 font-normal">ニュース</span>
                  </div>
                </Link>
                <Link
                  href="#services"
                  className="text-gray-700 hover:text-black font-bold py-3 border-b border-gray-100"
                  onClick={closeMobileMenu}
                >
                  <div className="flex flex-col">
                    <span className="text-base">SERVICES</span>
                    <span className="text-sm text-gray-500 font-normal">サービス</span>
                  </div>
                </Link>
                <Link
                  href="#works"
                  className="text-gray-700 hover:text-black font-bold py-3 border-b border-gray-100"
                  onClick={closeMobileMenu}
                >
                  <div className="flex flex-col">
                    <span className="text-base">PORTFOLIO</span>
                    <span className="text-sm text-gray-500 font-normal">制作実績</span>
                  </div>
                </Link>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdf35MRg59aC8PLeeNP3F7HCldqZF6YkM4cQi8J5jbMedF8EQ/viewform?usp=dialog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black font-bold py-3"
                  onClick={closeMobileMenu}
                >
                  <div className="flex flex-col">
                    <span className="text-base">CONTACT</span>
                    <span className="text-sm text-gray-500 font-normal">お問い合わせ</span>
                  </div>
                </a>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden h-auto md:h-screen">
        <div className="relative w-full aspect-[16/9] md:aspect-auto md:absolute md:inset-0 z-0">
          <video
            ref={videoRef}
            src="https://res.cloudinary.com/djypwraed/video/upload/v1761027158/Hero_pis3ql.mp4"
            autoPlay
            loop
            playsInline
            muted={isMuted}
            className="w-full h-full object-contain md:object-cover"
          />
        </div>

        {/* オーバーレイ全体 */}
        <div className="hidden md:block absolute inset-0 z-10 pointer-events-none">
          {/* ボトムバンド */}
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{ animation: "band-slide-up 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both" }}
          >
            <div
              className="relative border-t border-white/20 transition-all duration-1000"
              style={{
                paddingTop: bandShrunk ? "12px" : "36px",
                paddingBottom: bandShrunk ? "12px" : "36px",
                paddingLeft: "56px",
                paddingRight: "56px",
                backgroundColor: "rgba(0,0,0,0.75)",
                backgroundImage: `
                  repeating-linear-gradient(-45deg, rgba(255,255,255,0.012) 0px, rgba(255,255,255,0.012) 1px, transparent 1px, transparent 22px),
                  repeating-linear-gradient(45deg, rgba(255,255,255,0.012) 0px, rgba(255,255,255,0.012) 1px, transparent 1px, transparent 22px)
                `,
              }}
            >
              {/* コンテンツ領域（高さがトランジション） */}
              <div
                className="relative overflow-hidden transition-all duration-1000"
                style={{ height: bandShrunk ? "32px" : "210px" }}
              >
                {/* ── Phase 1: メインコピー ── */}
                <div
                  className="absolute top-0 left-0 right-0 transition-opacity duration-700"
                  style={{ opacity: !phase1Fading && !bandShrunk ? 1 : 0 }}
                >
                  <h2
                    className="text-6xl font-bold text-white tracking-[0.15em] mb-3"
                    style={{ animation: "slide-in-left 1s cubic-bezier(0.16, 1, 0.3, 1) 1.8s both" }}
                  >
                    映像制作はエンリーへ
                  </h2>
                  <p
                    className="text-xl font-light text-gray-300 tracking-[0.45em] mb-5"
                    style={{ animation: "slide-in-left 1s cubic-bezier(0.16, 1, 0.3, 1) 2.3s both" }}
                  >
                    想いを映像に。
                  </p>
                  <div
                    className="w-full h-px bg-white/25 origin-left mb-5"
                    style={{ animation: "hero-line-expand 0.8s ease-out 3.0s both" }}
                  />
                  <div
                    className="flex items-center gap-5"
                    style={{ animation: "slide-in-left 0.9s cubic-bezier(0.16, 1, 0.3, 1) 3.5s both" }}
                  >
                    <div className="w-1 h-10 bg-white/50" />
                    <div className="flex flex-col">
                      <span className="text-lg text-white tracking-[0.1em] font-light mb-1">企画構成から編集まで。</span>
                      <span className="text-sm text-gray-300 tracking-[0.08em] font-light">ご希望に寄り添った提案をします。</span>
                    </div>
                  </div>
                </div>

                {/* ── Phase 2: サービス + お見積もり ── */}
                <div
                  className="absolute top-0 left-0 right-0 transition-opacity duration-700"
                  style={{ opacity: phase2Visible && !bandShrunk ? 1 : 0 }}
                >
                  {phase2Visible && (
                    <>
                      <h2
                        className="text-5xl font-bold text-white tracking-[0.12em] mb-8"
                        style={{ animation: "slide-in-left 1s cubic-bezier(0.16, 1, 0.3, 1) 0s both" }}
                      >
                        映画・ドラマ&nbsp;&nbsp;/&nbsp;&nbsp;MV&nbsp;&nbsp;/&nbsp;&nbsp;CM&nbsp;&nbsp;/&nbsp;&nbsp;企業PR
                      </h2>
                      <div
                        className="w-full h-px bg-white/25 mb-8 origin-left"
                        style={{ animation: "hero-line-expand 0.8s ease-out 1.4s both" }}
                      />
                      <div
                        className="flex items-center gap-5"
                        style={{ animation: "slide-in-left 0.9s cubic-bezier(0.16, 1, 0.3, 1) 1.8s both" }}
                      >
                        <div className="w-1 h-10 bg-white/50" />
                        <div className="flex flex-col">
                          <span className="text-[11px] tracking-[0.5em] text-gray-400 font-light mb-1 uppercase">Estimate</span>
                          <span className="text-2xl text-white tracking-[0.25em] font-light">
                            お見積もり&nbsp;<span className="font-bold">無料</span>
                          </span>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* ── Phase 3: コンパクトバー ── */}
                <div
                  className="absolute bottom-0 left-0 right-0 flex items-center justify-between transition-opacity duration-700"
                  style={{ opacity: bandShrunk ? 1 : 0 }}
                >
                  <span className="text-sm font-bold text-white tracking-[0.12em]">
                    映像制作はエンリーへ&nbsp;&nbsp;|&nbsp;&nbsp;映画・ドラマ&nbsp;/&nbsp;MV&nbsp;/&nbsp;CM&nbsp;/&nbsp;企業PR
                  </span>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdf35MRg59aC8PLeeNP3F7HCldqZF6YkM4cQi8J5jbMedF8EQ/viewform?usp=dialog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/70 tracking-[0.2em] hover:text-white transition-colors pointer-events-auto underline-offset-4 hover:underline cursor-pointer"
                  >
                    お見積もり&nbsp;<span className="font-bold text-white">無料</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={toggleMute}
          className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-30 bg-black/30 backdrop-blur-sm hover:bg-black/50 text-white p-2 md:p-4 rounded-full transition-all duration-300 hover:scale-110"
          aria-label={isMuted ? "音声をオンにする" : "音声をオフにする"}
        >
          {isMuted ? <VolumeX className="w-4 h-4 md:w-6 md:h-6" /> : <Volume2 className="w-4 h-4 md:w-6 md:h-6" />}
        </button>
      </section>

      {/* New Section - Tagline with Logo */}
      <section id="tagline-section" ref={taglineSectionRef} className="py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative w-full h-full max-w-4xl mx-auto">
            <Image
              src="/logo-final.png"
              alt="株式会社en-ry（エンリー） background logo"
              fill
              className="object-contain opacity-5"
              priority
            />
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center min-h-[400px] md:min-h-[500px] relative">
            <div className="text-center max-w-4xl mx-auto relative z-10">
              <div className="text-2xl md:text-4xl lg:text-5xl font-serif tracking-wide leading-relaxed">
                <div className="mb-4">
                  {isTaglineVisible &&
                    '幸せな今を縁"en"が導く'.split("").map((char, index) => (
                      <span
                        key={index}
                        className="inline-block opacity-0 animate-fade-in"
                        style={{
                          animationDelay: `${index * 0.08}s`,
                          animationFillMode: "forwards",
                        }}
                      >
                        {char}
                      </span>
                    ))}
                </div>
                <div>
                  {isTaglineVisible &&
                    '―未来の記憶"memory"に'.split("").map((char, index) => (
                      <span
                        key={index}
                        className="inline-block opacity-0 animate-fade-in"
                        style={{
                          animationDelay: `${(index + 17) * 0.08}s`,
                          animationFillMode: "forwards",
                        }}
                      >
                        {char}
                      </span>
                    ))}
                </div>
              </div>
            </div>

            <div className="text-center max-w-3xl px-4 mt-16 md:mt-20 relative z-10">
              <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-8">
                株式会社en-ryは、「縁(en)」と「memory(メモリー)」を掛け合わせた社名のもと、
                <br className="hidden md:block" />
                人と人の出会いや大切な瞬間を、永遠に残る物語として映像に刻み、未来へと紡いでいくことを使命としています。
              </p>

              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                映像は単なる記録ではなく、心を動かし、人をつなぐ力を持っています。
                <br className="hidden md:block" />
                現役映画監督による確かな表現力と幅広い経験を活かし、
                <br className="hidden md:block" />
                映画・ドラマからメモリアル動画、企業PRやMVまで、
                <br className="hidden md:block" />
                ジャンルを超えて"想いを映像として"提供します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <NewsSection />

      {/* Services Section with Auto-scrolling Images */}
      <section id="services" className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-2">SERVICES</h2>
            <p className="text-lg text-gray-500 mb-4">サービス</p>
            <p className="text-gray-600 max-w-2xl mx-auto">
              私たちは、映像制作のプロフェッショナルとして、様々なサービスを提供しています。
              お客様のニーズに合わせた最適な映像制作をご提案します。
            </p>
          </div>

          <ServiceSlider />

          <div className="mt-12 text-center">
            <Link
              href="/services/promotion-pr"
              className="inline-flex items-center bg-charcoal-light text-white px-6 py-3 hover:bg-charcoal transition-colors"
            >
              すべてのサービスを見る
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="text-center mt-16">
            <div className="bg-lightgray p-8 rounded-lg shadow-md max-w-2xl mx-auto">
              <h3 className="text-xl font-bold mb-4 text-charcoal-light">サービス内容についてご質問がございましたら</h3>
              <p className="text-gray-600 mb-6">
                詳しい制作プロセスや、お客様のプロジェクトに最適なプランについて、お気軽にご相談ください。お見積りは無料です。お客様のご要望に合わせた最適なプランをご提案させていただきます。
              </p>
              <div className="flex justify-center">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdf35MRg59aC8PLeeNP3F7HCldqZF6YkM4cQi8J5jbMedF8EQ/viewform?usp=dialog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-charcoal-light text-white px-6 py-3 rounded hover:bg-charcoal transition-colors"
                >
                  お問い合わせ
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="works" className="py-20 bg-lightgray relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-2">PORTFOLIO</h2>
            <p className="text-lg text-gray-500 mb-4">制作実績（田中慎太郎監督作品）</p>
            <p className="text-gray-600 max-w-2xl mx-auto">
              これまでに制作した映像作品の一部をご紹介します。 様々な業界のクライアント様と協力して制作した作品です。
            </p>
          </div>

          <PortfolioSlider />

          <div className="mt-12 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center bg-charcoal-light text-white px-6 py-3 hover:bg-charcoal transition-colors"
            >
              制作実績一覧
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-charcoal-light text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-10">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  <Image
                    src="/logo-final.png"
                    alt="株式会社en-ry（エンリー） logo"
                    width={28}
                    height={28}
                    className="object-contain invert"
                  />
                </div>
                <h3 className="text-xl font-bold">en-ry</h3>
              </div>
              <div className="space-y-2 text-sm">
                <p className="font-semibold">会社概要</p>
                <p>会社名: 株式会社 en-ry</p>
                <p>設立: 2025.10.23</p>
                <p>代表取締役: 田中 慎太郎</p>
                <p>取締役: 小楠 啓展</p>
                <p>事業内容: 映像関連総合事業</p>
                <p>従業員数: 2名</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex flex-col gap-4">
              <a
                href="https://www.instagram.com/en_ry1023/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram className="w-8 h-8" />
                <span className="text-sm font-medium">Instagram</span>
              </a>
              <a
                href="https://www.youtube.com/@en-ry1023"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                aria-label="YouTube"
              >
                <Youtube className="w-8 h-8" />
                <span className="text-sm font-medium">Youtube</span>
              </a>
            </div>

            {/* Services Section */}
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

            {/* Portfolio Section */}
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

            {/* Apparel Section */}
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
              <div className="flex items-center">
                <Image
                  src="/logo-final.png"
                  alt="株式会社en-ry（エンリー） logo"
                  width={28}
                  height={28}
                  className="object-contain invert"
                />
              </div>
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
