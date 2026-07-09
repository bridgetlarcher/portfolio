import { ProjectItem } from '@/types/projects'
import { Star } from '@mui/icons-material'

type Props = {
  tldr: ProjectItem['tldr']
  description?: ProjectItem['description']
}

export function TldrSection({ tldr, description }: Props) {
  return (
    <div
      className="flex-col gap-4 rounded-xl border border-white/[.1] bg-white/[.04] p-6 md:flex lg:p-8"
      role="group"
      aria-label="TL;DR"
    >
      <blockquote className="border-l-2 border-slate-500 px-4 py-2 italic">
        <p className="text-slate-300">{description}</p>
      </blockquote>
      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 md:mt-0 md:grid-cols-3 md:gap-6">
        <div className="flex flex-col gap-2">
          <span className="subtitle">Role</span>
          <span className="text-sm text-slate-300">{tldr.role}</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="subtitle">{tldr.secondaryLabel}</span>
          <span className="text-sm text-slate-300">{tldr.secondaryValue}</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="subtitle">Outcome</span>
          {tldr.outcomes.map((outcome) => (
            <div key={outcome} className="flex flex-col gap-1.5">
              <span className="flex gap-2 text-sm font-bold text-accent">
                <Star fontSize="inherit" aria-hidden="true" className="mt-1" />
                {outcome}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
