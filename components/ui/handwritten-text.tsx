"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

interface HandwrittenTextProps {
  text: string
  className?: string
  size?: "default" | "desktop-small"
}

export function HandwrittenText({ text, className = "", size = "default" }: HandwrittenTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const textElement = textRef.current

    if (!container || !textElement) return

    // テキストを改行で分割
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
        span.style.opacity = "0"
        span.style.transform = "translateX(-20px) rotate(-5deg)"
        span.style.display = "inline-block"
        span.style.fontFamily = "'Klee One', cursive"
        span.dataset.line = lineIndex.toString()
        span.dataset.char = charIndex.toString()
        lineDiv.appendChild(span)
      })

      textElement.appendChild(lineDiv)
    })

    // アニメーションの実行
    const spans = textElement.querySelectorAll("span")

    gsap.fromTo(
      spans,
      {
        opacity: 0,
        x: -30,
        rotation: -8,
        scale: 0.8,
      },
      {
        opacity: 1,
        x: 0,
        rotation: 0,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: {
          amount: 2.5,
          from: "start",
        },
        delay: 1,
      },
    )

    // 風に揺れるような効果を追加
    gsap.to(spans, {
      rotation: "random(-2, 2)",
      y: "random(-3, 3)",
      duration: 3,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      stagger: {
        amount: 1,
        repeat: -1,
      },
      delay: 4,
    })
  }, [text])

  // サイズに応じたクラス名を決定
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
        
        .handwritten-text {
          position: relative;
        }
        
        .handwritten-container {
          position: relative;
        }
        
        .handwritten-line {
          display: block;
        }
      `}</style>
    </div>
  )
}
