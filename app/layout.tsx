import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ErrorHandler } from "@/components/error-handler"

const inter = Inter({ subsets: ["latin"] })

const baseUrl = "https://en-ry.vercel.app"
const isProduction = process.env.VERCEL_ENV === "production" || process.env.NODE_ENV === "production"

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "en-ry(エンリー)映像関連総合事業",
    template: "%s | en-ry(エンリー)",
  },
  description: "企業PR、商品プロモーション、イベント記録など、あらゆる映像制作を代行します。",
  keywords: ["映像制作", "動画制作", "企業PR", "プロモーション", "MV制作", "メモリアルムービー", "en-ry", "エンリー"],
  authors: [{ name: "株式会社en-ry" }],
  creator: "株式会社en-ry",
  publisher: "株式会社en-ry",
  robots: isProduction
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      }
    : {
        index: false,
        follow: false,
        noarchive: true,
        nosnippet: true,
        noimageindex: true,
      },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: baseUrl,
    title: "en-ry(エンリー)映像関連総合事業",
    description: "企業PR、商品プロモーション、イベント記録など、あらゆる映像制作を代行します。",
    siteName: "en-ry(エンリー)",
  },
  twitter: {
    card: "summary_large_image",
    title: "en-ry(エンリー)映像関連総合事業",
    description: "企業PR、商品プロモーション、イベント記録など、あらゆる映像制作を代行します。",
  },
  verification: {
    google: ["f4J5Vj8wWl-d_0T90g0XvqGjTaYTMnULAMnJ7kvWmx8", "4sWHGzqhPEj_X9bIfkmEsJUtIxfMz5mHtAdDXWksym0"],
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "株式会社en-ry",
    alternateName: ["en-ry", "エンリー", "えんりー"],
    url: "https://en-ry.vercel.app/",
    logo: "https://en-ry.vercel.app/logo.png",
    description: "企業PR、商品プロモーション、イベント記録など、あらゆる映像制作を代行します。",
  }

  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      </head>
      <body className={inter.className}>
        <ErrorHandler />
        {children}
      </body>
    </html>
  )
}
