"use client"

import { useEffect, useRef, useState } from "react"

interface HandwrittenTextProps {
  text: string
  className?: string
  size?: "default" | "desktop-small"
}

export function HandwrittenText({ text, className = "", size = "default" }: HandwrittenTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [isVisible])

  useEffect(() => {
    const textElement = textRef.current
    if (!textElement) return

    const lines = text.split("\n")
    textElement.innerHTML = ""

    lines.forEach((line, lineIndex) => {
      const lineDiv = document.createElement("div")
      lineDiv.className = "handwritten-line"
      lineDiv.style.marginBottom = lineIndex < lines.length - 1 ? "0.2em" : "0"

      const chars = line.split("")
      chars.forEach((char, charIndex) => {
        const span = document.createElement("span")
        span.textContent = char === " " ? "\u00A0" : char
        span.style.display = "inline-block"
        span.style.fontFamily = "'Klee One', cursive"
        span.style.opacity = "0"
        if (isVisible) {
          span.style.animation = `fadeInChar 0.8s ease-out forwards ${(lineIndex * chars.length + charIndex) * 0.06}s`
        }
        lineDiv.appendChild(span)
      })

      textElement.appendChild(lineDiv)
    })
  }, [text, isVisible])

  const getSizeClasses = () => {
    if (size === "desktop-small") {
      return "text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight"
    }
    return "text-2xl md:text-3xl lg:text-4xl font-bold leading-tight"
  }

  return (
    <div ref={containerRef} className={`handwritten-container ${className}`}>
      <div
        ref={textRef}
        className={`handwritten-text ${getSizeClasses()}`}
        style={{
          fontFamily: "'Klee One', 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, sans-serif",
          textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
          filter: "drop-shadow(1px 1px 2px rgba(0,0,0,0.2))",
          lineHeight: "1.3",
        }}
      />

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Klee+One:wght@400;600&display=swap');
        
        @keyframes fadeInChar {
          from {
            opacity: 0;
            transform: translateX(-20px) rotate(-5deg) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateX(0) rotate(0) scale(1);
          }
        }
        
        .handwritten-line {
          display: block;
        }
      `}</style>
    </div>
  )
}
