"use client"

import { useEffect, useRef } from "react"
import { Camera, Edit, Film, Monitor, Upload } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAPInit } from "@/lib/gsap-init"

export default function MemorialFlowSection() {
  useGSAPInit()

  const sectionRef = useRef<HTMLElement>(null)
  const flowItemsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const section = sectionRef.current
    if (section) {
      // タイトルのアニメーション
      gsap.from(".memorial-flow-title", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
      })

      // 説明文のアニメーション
      gsap.from(".memorial-flow-description", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
      })

      // 各フローアイテムのアニメーション - モバイルとデスクトップで異なる設定
      flowItemsRef.current.forEach((item, index) => {
        if (item) {
          // モバイル表示の場合はより早いタイミングでトリガー
          const isMobile = window.innerWidth < 768
          const startPosition = isMobile ? "top 90%" : "top 85%"

          gsap.from(item, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: 0.2 + index * 0.1,
            scrollTrigger: {
              trigger: item,
              start: startPosition,
              // モバイルでは各アイテムごとに個別にトリガー
              toggleActions: "play none none reverse",
            },
          })
        }
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      ScrollTrigger.refresh()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  const flowItems = [
    {
      number: "01",
      title: "お写真とコメントシートのご準備",
      description:
        "メモリアルムービー準備キットをご葬家様にお渡しし、お写真やコメントシートを準備していただきます。大切な思い出のお写真を丁寧にお預かりいたします。故人様との思い出が詰まったお写真をご用意ください。",
      icon: <Upload className="w-8 h-8" />,
    },
    {
      number: "02",
      title: "お写真のスキャン・データ化",
      description:
        "ご葬家様からお預かりしたお写真を高品質でスキャン（データ化）いたします。古いお写真も美しくデジタル化し、映像制作に最適な状態に調整します。色褪せや傷なども可能な限り修復いたします。",
      icon: <Camera className="w-8 h-8" />,
    },
    {
      number: "03",
      title: "構成・演出の打ち合わせ",
      description:
        "ムービー商品の種類とBGMを選択し、お写真やテキストを案内に沿って入力していただきます。故人様の人柄や思い出に合わせた構成をご提案いたします。ご家族の想いを大切にした温かみのある演出を心がけます。",
      icon: <Edit className="w-8 h-8" />,
    },
    {
      number: "04",
      title: "映像の制作・編集",
      description:
        "「映像作成」ボタンを押してから最短15分で映像が完成し、ダウンロードできるようになります。完成した映像は何度でも無料で修正が可能です。故人様への想いを込めた美しい映像を丁寧に制作いたします。",
      icon: <Film className="w-8 h-8" />,
    },
    {
      number: "05",
      title: "上映・納品",
      description:
        "ダウンロードした映像は、告別式や通夜式で自由に上映することができます。ご葬家様に納品を行う場合は、葬儀社様がDVDやBlu-rayディスクに書き込みを行う方法と当社がディスクに書き込みを行い、後日斎場へお届けする方法がございます。（告別式の翌日から5営業日以内に発送いたします）",
      icon: <Monitor className="w-8 h-8" />,
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-lightgray overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 md:mb-16 mb-24">
          <h2 className="memorial-flow-title text-3xl font-bold mb-4 tracking-tight text-charcoal-light">制作の流れ</h2>
          <p className="memorial-flow-description text-gray-600 max-w-3xl mx-auto">
            Memorial movie Lifeでは、パソコンはもちろんのこと、スマートフォンやタブレット一つで
            誰でも簡単にメモリアルムービーの作成・ダウンロード・上映を行うことができます。
            写真やテキストを入力してから最短15分で映像が仕上がりますので、
            急な作成依頼にも迅速に対応することができます。
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* 中央の線 */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-charcoal-light to-lightgray-dark"></div>

          <div className="space-y-24 md:space-y-24 relative">
            {flowItems.map((item, index) => (
              <div key={index} ref={(el) => (flowItemsRef.current[index] = el)} className="relative">
                {/* 中央の数字 - モバイル表示時は上に配置 */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-20 md:-translate-y-1/2 -translate-y-[calc(100%+1rem)] top-0">
                  <div className="memorial-flow-number flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-charcoal-light text-white text-2xl md:text-3xl font-bold shadow-lg transform transition-transform duration-300 hover:scale-110">
                    {item.number}
                  </div>
                </div>

                {/* コンテンツ - 左右交互に配置 */}
                <div
                  className={`memorial-flow-content bg-white p-6 md:p-8 rounded-lg shadow-lg relative z-10 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ml-0 mr-0 mt-16 md:mt-0 ${
                    index % 2 === 0 ? "md:ml-auto md:mr-[5%] md:w-[45%]" : "md:mr-auto md:ml-[5%] md:w-[45%]"
                  }`}
                >
                  <div className="absolute top-6 right-6 text-charcoal-light">{item.icon}</div>
                  <h4 className="text-xl font-bold mb-4 pr-10">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
