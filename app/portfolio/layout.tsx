'use client'

import { projects } from '../../types/projects'
import { usePathname } from 'next/navigation'
import { Pill } from '@/components/ui/Pill'
import { TldrSection } from '@/components/portfolio/TldrSection'

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname()
  const project = projects.find((project) => project.link === path)
  return (
    <main
      id="main-content"
      className="flex grow flex-col gap-8 px-12 pb-24 pt-6 lg:px-40 xl:px-80 2xl:px-[30rem]"
    >
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
    </main>
  )
}
