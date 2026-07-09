import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { Pill } from './Pill'
import { TimelineItem } from '@/types/timeline'

type Props = {
  item: TimelineItem
}

export function TimelineListItem({ item }: Props) {
  return (
    <div className="grid grid-cols-1 gap-2 border-b border-slate-700/40 py-6 md:grid-cols-[170px_1fr] md:gap-4">
      <time className="subtitle">{item.dates}</time>
      <div className="flex flex-col gap-2">
        {item.link ? (
          <div>
            <h3 className="text-lg font-bold text-slate-200">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <span>
                  {item.title} · {item.employer}
                </span>
                <OpenInNewIcon fontSize="inherit" className="ml-1 text-sm" aria-hidden="true" />
              </a>
            </h3>
          </div>
        ) : (
          <h3 className="text-lg font-bold text-slate-200">{item.title}</h3>
        )}
        {item.promotedFrom && (
          <span className="text-sm italic text-slate-400">Previously {item.promotedFrom}</span>
        )}
        {item.description && <p className="text-[15px] text-slate-400">{item.description}</p>}
        <div className="mt-1 flex flex-row flex-wrap gap-2">
          {item.responsibilities &&
            item.responsibilities.map((pill) => <Pill key={pill} text={pill} />)}
        </div>
      </div>
    </div>
  )
}
