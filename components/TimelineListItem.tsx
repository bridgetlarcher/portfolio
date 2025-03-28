import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { Pill } from './Pill'
import { TimelineItem } from '@/types/timeline'

type Props = {
  item: TimelineItem
}

export function TimelineListItem({ item }: Props) {
  return (
    <li className="mb-10 ml-4 last:mb-0">
      <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-slate-900 bg-gray-700"></div>
      <time className="mb-1 text-sm font-normal leading-none">{item.dates}</time>
      {item.link ? (
        <div>
          <a href={item.link} target="_blank">
            <h3 className="mr-2 inline text-lg">
              {item.title} @ {item.employer}
            </h3>
            <OpenInNewIcon fontSize="inherit" className="text-sm" />
          </a>
        </div>
      ) : (
        <h3 className="text-lg font-semibold text-slate-200">{item.title}</h3>
      )}
      <p className="text-slate-400">{item.description}</p>
      <div className="mt-2 flex flex-row flex-wrap gap-2">
        {item.responsibilities.map((pill) => (
          <Pill key={pill} text={pill} />
        ))}
      </div>
    </li>
  )
}
