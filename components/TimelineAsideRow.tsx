import { TimelineItem } from '@/types/timeline'

type Props = {
  dates: string
  items: TimelineItem[]
}

export function TimelineAsideRow({ dates, items }: Props) {
  return (
    <div className="grid grid-cols-1 gap-2 py-6 md:grid-cols-[170px_1fr] md:gap-4">
      <time className="subtitle">{dates}</time>
      <p className="text-[15px] text-slate-200 hover:text-slate-100">
        {items.map((item, index) => (
          <span key={item.employer}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.title} · {item.employer}
            </a>
            {index < items.length - 1 && <span className="mx-2 font-bold text-slate-500">-</span>}
          </span>
        ))}{' '}
      </p>
    </div>
  )
}
