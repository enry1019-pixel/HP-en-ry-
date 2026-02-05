"use client"

import { useEffect } from "react"

export function ErrorHandler() {
  useEffect(() => {
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      const errorString = String(event.reason || "")
      const errorMessage = event.reason?.message || ""
      const errorStack = event.reason?.stack || ""

      // Check for MetaMask/browser extension errors
      if (
        errorString.toLowerCase().includes("metamask") ||
        errorString.toLowerCase().includes("ethereum") ||
        errorString.toLowerCase().includes("failed to connect") ||
        errorMessage.toLowerCase().includes("metamask") ||
        errorMessage.toLowerCase().includes("ethereum") ||
        errorStack.toLowerCase().includes("metamask") ||
        // Check for the "i:" prefix that appears in minified code
        errorString.match(/^i:\s*failed/i) ||
        // Check for common browser extension patterns
        errorString.includes("chrome-extension://") ||
        errorString.includes("moz-extension://")
      ) {
        // Silently suppress browser extension errors
        event.preventDefault()
        event.stopPropagation()
        if (event.stopImmediatePropagation) {
          event.stopImmediatePropagation()
        }
        return false
      }
    }

    const handleError = (event: ErrorEvent) => {
      const errorString = String(event.error || event.message || "")

      if (
        errorString.toLowerCase().includes("metamask") ||
        errorString.toLowerCase().includes("ethereum") ||
        errorString.toLowerCase().includes("failed to connect") ||
        errorString.includes("chrome-extension://") ||
        errorString.includes("moz-extension://")
      ) {
        event.preventDefault()
        event.stopPropagation()
        if (event.stopImmediatePropagation) {
          event.stopImmediatePropagation()
        }
        return false
      }
    }

    // Register handlers with capture phase for earlier interception
    window.addEventListener("unhandledrejection", handleUnhandledRejection, { capture: true })
    window.addEventListener("error", handleError, { capture: true })

    // Also override console.error temporarily to suppress the error display
    const originalConsoleError = console.error
    console.error = (...args: any[]) => {
      const errorString = args.join(" ").toLowerCase()
      if (
        errorString.includes("metamask") ||
        errorString.includes("ethereum") ||
        errorString.includes("failed to connect") ||
        errorString.includes("unhandled promise rejection: i:")
      ) {
        // Suppress MetaMask errors from console
        return
      }
      originalConsoleError.apply(console, args)
    }

    return () => {
      window.removeEventListener("unhandledrejection", handleUnhandledRejection, { capture: true })
      window.removeEventListener("error", handleError, { capture: true })
      console.error = originalConsoleError
    }
  }, [])

  return null
}
