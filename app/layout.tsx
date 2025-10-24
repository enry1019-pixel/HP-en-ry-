import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "en-ry - 映像制作代行サービス",
  description: "企業PR、商品プロモーション、イベント記録など、あらゆる映像制作を代行します。",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
