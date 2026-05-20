"use client"

import { FileText, Play } from "lucide-react"

const otherServices = [
  {
    id: "EN-REEL",
    brand: "EN-REEL",
    brandReading: "エンリール",
    tagline: "唯一無二の映像名刺を。",
    subtitle: "俳優のためのショーリール",
    description:
      "映像名刺必須の時代に、あなただけのプロフィール動画を制作いたします。",
    youtubeId: "5qP8O-gpfdw",
    youtubeUrl: "https://youtu.be/5qP8O-gpfdw",
    pdfUrl: "/en-reel-service.pdf",
  },
]

export default function OtherServicesSection() {
  return (
    <div className="mt-16 max-w-5xl mx-auto px-4">
      {/* Sub-header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="h-px flex-1 bg-gradient-to-r from-[#7a1a24]/20 to-transparent" />
        <span className="text-xs tracking-[0.5em] text-gray-400 font-light shrink-0">OTHER SERVICES</span>
        <div className="h-px flex-1 bg-gradient-to-l from-[#7a1a24]/20 to-transparent" />
      </div>

      <div className="space-y-4">
        {otherServices.map((service) => (
          <div
            key={service.id}
            className="bg-white border border-[#e0d8ce] overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex flex-col md:flex-row">
              {/* Thumbnail */}
              <a
                href={service.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block shrink-0 md:w-40 lg:w-48 overflow-hidden group"
                style={{ aspectRatio: "16/9" }}
              >
                {/* YouTube thumbnail via img tag (external URL) */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://img.youtube.com/vi/${service.youtubeId}/maxresdefault.jpg`}
                  alt={service.brand}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
                {/* Mini letterbox */}
                <div className="absolute top-0 left-0 right-0 h-3 bg-black/60" />
                <div className="absolute bottom-0 left-0 right-0 h-3 bg-black/60" />
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                    <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                  </div>
                </div>
              </a>

              {/* Content */}
              <div className="flex-1 p-3 md:p-4 flex flex-col justify-between">
                <div>
                  {/* Brand name */}
                  <div className="flex items-baseline gap-2.5 mb-1">
                    <h3 className="text-lg font-bold tracking-[0.2em] text-[#1a1a1a]">
                      {service.brand}
                    </h3>
                    <span className="text-[10px] text-gray-400 tracking-[0.3em] font-light">
                      {service.brandReading}
                    </span>
                  </div>

                  {/* Tagline */}
                  <p className="text-[#7a1a24] text-xs tracking-[0.15em] mb-0.5 font-medium">
                    {service.tagline}
                  </p>

                  {/* Subtitle */}
                  <p className="text-[10px] text-gray-500 tracking-[0.3em] mb-2.5 font-light">
                    {service.subtitle}
                  </p>

                  {/* Divider */}
                  <div className="w-8 h-px bg-[#d9cfc4] mb-2" />

                  {/* Description */}
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-2 mt-3">
                  <a
                    href={service.pdfUrl}
                    download
                    className="inline-flex items-center gap-2 border border-[#d9cfc4] text-gray-600 px-4 py-2 text-xs tracking-wider hover:border-[#7a1a24] hover:text-[#7a1a24] transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    サービス資料（PDF）
                  </a>
                  <a
                    href={service.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white px-4 py-2 text-xs tracking-wider hover:bg-[#7a1a24] transition-colors"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    サンプル動画を見る
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
