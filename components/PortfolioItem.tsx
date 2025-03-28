'use client'
import { projects } from '../types/projects'
import { usePathname } from 'next/navigation'
import { Pill } from './Pill'

type Props = {
  children: React.ReactNode
}

export function PortfolioItem({ children }: Props) {
  const path = usePathname()
  const project = projects.find((project) => project.link === path)
  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-black">{project?.title}</h1>
        <div className="flex flex-row flex-wrap gap-2">
          {project?.pills.map((pill) => <Pill key={pill} text={pill} />)}
        </div>
      </div>
      <h2>
        <blockquote className="border-l-2 border-slate-500 px-4 py-2 italic">
          {project?.description}
        </blockquote>
      </h2>
      {children}
    </>
  )
}
