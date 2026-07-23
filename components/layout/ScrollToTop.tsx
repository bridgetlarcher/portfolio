'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// Next's own scroll-to-top-on-navigate logic (layout-router.js) skips resetting
// scroll if it thinks the new page's root is already in the viewport. On a long
// page (e.g. deep-scrolled home) navigating to a short page, the browser clamps
// scrollTop to the new document's max before that check runs, so it looks
// "already in view" and Next never resets it.
export function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
