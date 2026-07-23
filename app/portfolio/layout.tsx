'use client'

import { projects } from '../../types/projects'
import { usePathname } from 'next/navigation'
import { Pill } from '@/components/ui/Pill'
import { TldrSection } from '@/components/portfolio/TldrSection'
import { scrollToTop } from '@/lib/scrollHelper'

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname()
  const project = projects.find((project) => project.link === path)
  return (
    <main id="main-content" className="container-page flex !max-w-[1100px] flex-col gap-8 py-10">
      <div className="flex flex-col gap-4">
        <span className="eyebrow">{project?.eyebrow}</span>
        <h1 className="text-4xl font-bold text-slate-200">{project?.title}</h1>
        <span className="text-base text-slate-300">{project?.description}</span>
        <div className="flex flex-row flex-wrap gap-2">
          {project?.pills.map((pill) => <Pill key={pill} text={pill} />)}
        </div>
      </div>
      {project?.tldr && <TldrSection tldr={project.tldr} />}
      {children}
      {scrollToTop()}
    </main>
  )
}
