import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ErrorHandler } from "@/components/error-handler"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "en-ry(エンリー)映像関連総合事業",
  description: "企業PR、商品プロモーション、イベント記録など、あらゆる映像制作を代行します。",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={inter.className}>
        <ErrorHandler />
        {children}
      </body>
    </html>
  )
}
