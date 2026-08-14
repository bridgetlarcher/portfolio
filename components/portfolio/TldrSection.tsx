import { ProjectItem } from '@/types/projects'
import { Star } from '@mui/icons-material'
import { Card } from '../ui/Card'

type Props = {
  tldr: ProjectItem['tldr']
}

export function TldrSection({ tldr }: Props) {
  return (
    <Card className="flex-col gap-4 shadow-glow md:flex">
      <dl
        aria-label="Summary"
        className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:mt-0 md:grid-cols-3 md:gap-6"
      >
        <div className="flex flex-col gap-2">
          <dt className="subtitle">Role</dt>
          <dd className="text-sm text-slate-300">{tldr.role}</dd>
        </div>
        <div className="flex flex-col gap-2">
          <dt className="subtitle">{tldr.secondaryLabel}</dt>
          <dd className="text-sm text-slate-300">{tldr.secondaryValue}</dd>
        </div>
        <div className="flex flex-col gap-2">
          <dt className="subtitle">Outcome</dt>
          {tldr.outcomes.map((outcome) => (
            <dd key={outcome} className="flex gap-2 text-sm font-bold text-primary-300">
              <Star fontSize="inherit" aria-hidden="true" className="mt-1" />
              {outcome}
            </dd>
          ))}
        </div>
      </dl>
    </Card>
  )
}
