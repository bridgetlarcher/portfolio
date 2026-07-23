'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, hash: string) {
  const target = document.querySelector(hash)
  if (!target) return
  e.preventDefault()
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  target.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' })
  history.pushState(null, '', hash)
}

export function scrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
