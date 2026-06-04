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
  description: "映像制作はエンリーへ。映画・ドラマ、CM、企業PR、MVなど映画監督監修による映像。ご相談、お見積り無料！",
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
    description: "映像制作はエンリーへ。映画・ドラマ、CM、企業PR、MVなど映画監督監修による映像。ご相談、お見積り無料！",
    siteName: "en-ry(エンリー)",
  },
  twitter: {
    card: "summary_large_image",
    title: "en-ry(エンリー)映像関連総合事業",
    description: "映像制作はエンリーへ。映画・ドラマ、CM、企業PR、MVなど映画監督監修による映像。ご相談、お見積り無料！",
  },
  verification: {
    google: "da1yVZzPPO_dR6kuzPj4NI5q7ExR9AYEhRkvUw_egjg",
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
    description: "映像制作はエンリーへ。映画・ドラマ、CM、企業PR、MVなど映画監督監修による映像。ご相談、お見積り無料！",
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
