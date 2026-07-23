import { ProjectItem } from '@/types/projects'
import { Star } from '@mui/icons-material'
import { Card } from '../ui/Card'

type Props = {
  tldr: ProjectItem['tldr']
}

export function TldrSection({ tldr }: Props) {
  return (
    <Card className="shadow-glow flex-col gap-4 md:flex">
      <div
        role="group"
        aria-label="TL;DR"
        className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:mt-0 md:grid-cols-3 md:gap-6"
      >
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
            <div key={outcome} className="flex flex-col gap-2">
              <span className="text-primary-300 flex gap-2 text-sm font-bold">
                <Star fontSize="inherit" aria-hidden="true" className="mt-1" />
                {outcome}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}
