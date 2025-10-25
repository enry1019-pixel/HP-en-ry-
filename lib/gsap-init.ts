"use client"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react"

export function useGSAPInit() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
  }, [])
}
