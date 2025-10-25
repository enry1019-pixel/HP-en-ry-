"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Menu, X, Volume2, VolumeX } from "lucide-react"
import ServiceSlider from "@/components/service-slider"
import ProcessSection from "@/components/process-section"
import PortfolioSlider from "@/components/portfolio-slider"
import ApparelSlider from "@/components/apparel-slider"
import { HandwrittenText } from "@/components/ui/handwritten-text"

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)
  const handwrittenTextRef = useRef<HTMLDivElement>(null)
  const [isHandwrittenVisible, setIsHandwrittenVisible] = useState(false)

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
        }
      })
    }, observerOptions)

    if (handwrittenTextRef.current) {
      observer.observe(handwrittenTextRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-end gap-2">
            <h1 className="text-2xl font-bold">en-ry</h1>
            <div className="flex items-center">
              <Image src="/logo-final.png" alt="en-ry logo" width={32} height={32} className="object-contain" />
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-gray-700 hover:text-black font-bold">
              SERVICES
            </Link>
            <Link href="#process" className="text-gray-700 hover:text-black font-bold">
              PROCESS
            </Link>
            <Link href="#works" className="text-gray-700 hover:text-black font-bold">
              PORTFOLIO
            </Link>
            <Link href="#apparel" className="text-gray-700 hover:text-black font-bold">
              APPAREL
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
                  href="#process"
                  className="text-gray-700 hover:text-black font-bold py-3 border-b border-gray-100"
                  onClick={closeMobileMenu}
                >
                  <div className="flex flex-col">
                    <span className="text-base">PROCESS</span>
                    <span className="text-sm text-gray-500 font-normal">制作の流れ</span>
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
                <Link
                  href="#apparel"
                  className="text-gray-700 hover:text-black font-bold py-3 border-b border-gray-100"
                  onClick={closeMobileMenu}
                >
                  <div className="flex flex-col">
                    <span className="text-base">APPAREL</span>
                    <span className="text-sm text-gray-500 font-normal">アパレル</span>
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
      <section className="relative h-screen bg-lightgray overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            src="https://res.cloudinary.com/djypwraed/video/upload/v1761027158/Hero_pis3ql.mp4"
            autoPlay
            loop
            playsInline
            muted={isMuted}
            className="w-full h-full object-cover"
          />
        </div>

        <button
          onClick={toggleMute}
          className="absolute bottom-8 right-8 z-10 bg-black/30 backdrop-blur-sm hover:bg-black/50 text-white p-4 rounded-full transition-all duration-300 hover:scale-110"
          aria-label={isMuted ? "音声をオンにする" : "音声をオフにする"}
        >
          {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
        </button>
      </section>

      {/* New Section - 手書き風テキスト */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div
            ref={handwrittenTextRef}
            className={`flex flex-col items-center justify-center min-h-[400px] transition-all duration-1000 ${
              isHandwrittenVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-center mb-8">
              <HandwrittenText
                text={`幸せな今を\n縁"en"が導く━未来の記憶"memory"に`}
                className="text-charcoal-light"
                size="desktop-small"
              />
            </div>

            <div className="text-center max-w-3xl px-4 mt-12">
              <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-8">
                株式会社en-ryは、「縁(en)」と「memory(メモリー)」を掛け合わせた社名のもと、
                <br className="hidden md:block" />
                人と人の出会いや大切な瞬間を、永遠に残る物語として映像に刻み、未来へと紡いでいくことを使命としています。
              </p>

              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
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

      {/* Services Section with Auto-scrolling Images */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
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
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* Portfolio Section */}
      <section id="works" className="py-20 bg-lightgray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-2">PORTFOLIO</h2>
            <p className="text-lg text-gray-500 mb-4">制作実績(監督：田中慎太郎 作品)</p>
            <p className="text-gray-600 max-w-2xl mx-auto">
              これまでに制作した映像作品の一部をご紹介します。 様々な業界のクライアント様と協力して制作した作品です。
            </p>
          </div>

          <PortfolioSlider />
        </div>
      </section>

      {/* Apparel Section */}
      <section id="apparel" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-2">APPAREL</h2>
            <p className="text-lg text-gray-500 mb-4">アパレル</p>
            <p className="text-gray-600 max-w-2xl mx-auto">
              en-ryオリジナルアパレル商品をお楽しみください。 高品質な素材とデザインにこだわった商品を取り揃えています。
            </p>
          </div>

          <ApparelSlider />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal-light text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-end gap-2 mb-4">
                <h3 className="text-xl font-bold">en-ry</h3>
                <div className="flex items-center">
                  <Image
                    src="/logo-final.png"
                    alt="en-ry logo"
                    width={28}
                    height={28}
                    className="object-contain invert"
                  />
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <p className="font-semibold">会社概要</p>
                <p>設立: 2025.10.16</p>
                <p>代表: 田中 慎太郎</p>
                <p>取締役: 小楠 啓展</p>
                <p>事業内容: 映像関連総合事業</p>
                <p>従業員数: 2名</p>
                <p className="pt-2">
                  住所: 〒160-0022
                  <br />
                  東京都新宿区新宿2丁目12番13号
                  <br />
                  新宿アントレサロンビル2階
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">SERVICES</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#services" className="hover:underline">
                    企業PR映像
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:underline">
                    商品プロモーション
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:underline">
                    メモリアル映像
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:underline">
                    MV制作
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:underline">
                    映画・ドラマ制作
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">PROCESS</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#process" className="hover:underline">
                    企画・ヒアリング
                  </Link>
                </li>
                <li>
                  <Link href="#process" className="hover:underline">
                    撮影・収録
                  </Link>
                </li>
                <li>
                  <Link href="#process" className="hover:underline">
                    編集・制作
                  </Link>
                </li>
                <li>
                  <Link href="#process" className="hover:underline">
                    納品・アフターサポート
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">PORTFOLIO</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#works" className="hover:underline">
                    企業PR映像
                  </Link>
                </li>
                <li>
                  <Link href="#works" className="hover:underline">
                    商品プロモーション
                  </Link>
                </li>
                <li>
                  <Link href="#works" className="hover:underline">
                    イベント記録
                  </Link>
                </li>
                <li>
                  <Link href="#works" className="hover:underline">
                    MV制作
                  </Link>
                </li>
                <li>
                  <Link href="#works" className="hover:underline">
                    ドラマ制作
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">APPAREL</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#apparel" className="hover:underline">
                    Tシャツ
                  </Link>
                </li>
                <li>
                  <Link href="#apparel" className="hover:underline">
                    キャップ
                  </Link>
                </li>
                <li>
                  <Link href="#apparel" className="hover:underline">
                    ハンドバッグ
                  </Link>
                </li>
                <li>
                  <Link href="#apparel" className="hover:underline">
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
            <div className="flex items-end justify-center gap-2 mb-4">
              <Link href="/" className="text-2xl font-bold">
                en-ry
              </Link>
              <div className="flex items-center">
                <Image
                  src="/logo-final.png"
                  alt="en-ry logo"
                  width={28}
                  height={28}
                  className="object-contain invert"
                />
              </div>
            </div>
            <p className="text-gray-300 mb-4">映像を通して「縁」と思い出を紡いでいく</p>
            <p>&copy; 2025 en-ry All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
