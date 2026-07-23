'use client'

import { usePathname } from 'next/navigation'

const linkClass =
  'hover:text-accent-300 hidden text-xs font-medium uppercase text-slate-400 no-underline transition duration-300 ease-in-out sm:inline'

// In-page section links only make sense on the home page. Hide them on
// /portfolio/* case studies, leaving the TopNav with just the Resume button.
export function NavLinks() {
  const pathname = usePathname()
  if (pathname?.startsWith('/portfolio')) return null
  return (
    <>
      <a href="#about" className={linkClass}>
        About
      </a>
      <a href="#contact" className={linkClass}>
        Contact
      </a>
    </>
  )
}
