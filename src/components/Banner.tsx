'use client'

import { useState, useEffect, useRef } from 'react'

interface BannerProps {
  message: string
  id?: string // Unique ID for localStorage dismissal tracking
  dismissible?: boolean
}

export default function Banner({ message, id = 'site-banner', dismissible = true }: BannerProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [bannerHeight, setBannerHeight] = useState(0)
  const bannerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Check if banner was previously dismissed
    const isDismissed = localStorage.getItem(`banner-dismissed-${id}`)
    if (!isDismissed) {
      setIsVisible(true)
    }
  }, [id])

  useEffect(() => {
    if (bannerRef.current && isVisible) {
      const height = bannerRef.current.offsetHeight
      setBannerHeight(height)
      document.documentElement.style.setProperty('--banner-height', `${height}px`)
    } else {
      document.documentElement.style.setProperty('--banner-height', '0px')
    }

    return () => {
      document.documentElement.style.setProperty('--banner-height', '0px')
    }
  }, [isVisible])

  const handleDismiss = () => {
    setIsVisible(false)
    localStorage.setItem(`banner-dismissed-${id}`, 'true')
  }

  if (!isVisible) return null

  return (
    <>
      {/* Fixed banner at top */}
      <div
        ref={bannerRef}
        className="fixed top-0 left-0 right-0 bg-primary text-white py-4 px-4 z-60"
      >
        <div className="max-w-4xl mx-auto flex items-center justify-center">
          <p className="font-serif text-sm md:text-base tracking-wide text-center pr-8">
            {message}
          </p>
          {dismissible && (
            <button
              onClick={handleDismiss}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors duration-200"
              aria-label="Dismiss banner"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
      {/* Spacer to prevent content from being hidden behind fixed banner */}
      <div style={{ height: bannerHeight }} />
    </>
  )
}
