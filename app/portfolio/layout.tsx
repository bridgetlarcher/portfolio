import '../globals.css'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowBack } from '@mui/icons-material'

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <nav className="sticky top-0 z-10 flex w-full items-center justify-between px-4 py-3 backdrop-blur-sm lg:px-24 lg:backdrop-blur-none" aria-label="Site navigation">
        <Link href="/#section-projects" aria-label="Back to projects">
          <ArrowBack fontSize="large" aria-hidden="true" />
        </Link>
        <Link href="/" aria-label="Home">
          <Image
            src="/favicon.png"
            alt="Logo. A backwards 'B' and an 'L' side by side."
            width={60}
            height={60}
          />
        </Link>
      </nav>
      <main id="main-content" className="2xl:px-[30rem] flex flex-col gap-8 px-12 pb-24 pt-6 lg:px-40 xl:px-80">
        {children}
      </main>
      <footer className="flex flex-col gap-2 p-8 text-center">
        <span>
          Designed in Figma. Developed in Next.js and TailwindCSS. Deployed with Vercel.
        </span>
        <span>
          All with love by{' '}
          <a href="https://www.linkedin.com/in/bridgetlarcher/" rel="noopener noreferrer">Bridget Larcher</a>.
        </span>
      </footer>
    </div>
  )
}
