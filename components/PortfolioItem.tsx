import { ReactNode } from 'react'
import Image from 'next/image'
import { ArrowBack } from '@mui/icons-material'

type Props = {
  title: string
  summary: string
  children: ReactNode
}

export function PortfolioItem({ title, summary, children }: Props) {
  return (
    <main className="relative flex min-h-screen flex-col">
      <nav className="sticky top-0 flex w-full items-center justify-between px-4 py-3 backdrop-blur-md lg:px-24">
        <a href="/#section-projects">
          <ArrowBack fontSize="large" />
        </a>
        <a href="/">
          <Image
            src="/favicon.png"
            alt="Logo. A backwards 'B' and an 'L' side by side."
            width={60}
            height={60}
          />
        </a>
      </nav>
      <section className="flex flex-col gap-8 px-12 pb-24 pt-6 lg:px-48 xl:px-72">
        <h1 className="text-4xl font-black">{title}</h1>
        <h2>
          <blockquote className="border-l-2 border-slate-500 px-4 py-2 italic">
            {summary}
          </blockquote>
        </h2>
        {children}
      </section>
    </main>
  )
}
