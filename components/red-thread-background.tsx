"use client"

import { useEffect, useState } from "react"

export function RedThreadBackground() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const taglineSection = document.getElementById("tagline-section")
      const footer = document.getElementById("footer")
      const scrollPosition = window.scrollY

      if (taglineSection && footer) {
        const taglineTop = taglineSection.offsetTop
        const footerTop = footer.offsetTop

        const shouldBeVisible = scrollPosition >= taglineTop - 100 && scrollPosition < footerTop - window.innerHeight
        setIsVisible(shouldBeVisible)
      } else if (taglineSection) {
        // Fallback if footer not found
        const taglineTop = taglineSection.offsetTop
        setIsVisible(scrollPosition >= taglineTop - 100)
      }
    }

    handleScroll() // Check initial position
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Center logo watermark - enlarged */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-[0.08]">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_black_RGB2-0mU5qpDnivvNHcP78jBFuDCtGvU9st.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  )
}
