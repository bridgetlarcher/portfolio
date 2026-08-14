import Image from 'next/image'
import Link from 'next/link'
import { ArrowForward } from '@mui/icons-material'
import { ProjectItem } from '@/types/projects'
import { Pill } from '@/components/ui/Pill'

type Props = {
  item: ProjectItem
}

export function CaseStudyCard({ item }: Props) {
  return (
    <Link
      href={item.link}
      className="group flex flex-col overflow-hidden rounded-xl border border-hairline bg-surface-card font-normal text-slate-400 no-underline transition duration-300 ease-in-out hover:-translate-y-[3px] hover:border-primary-300/40 hover:shadow-lift"
    >
      <div className="relative h-[210px] w-full">
        <Image
          src={item.img.src}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      </div>
      <div className="flex flex-col gap-2 p-6">
        <span className="eyebrow">{item.eyebrow}</span>
        <h3 className="text-xl font-bold leading-tight text-slate-200">{item.title}</h3>
        <span aria-hidden="true" className="text-[13px] text-slate-400">
          {item.description}
        </span>
        <ul aria-hidden="true" className="mt-1 flex flex-row flex-wrap gap-2">
          {item.pills.map((pill) => (
            <Pill key={pill} text={pill} />
          ))}
        </ul>
        <span className="mt-2 inline-flex items-center gap-2 text-[13px] font-bold text-slate-300 transition duration-300 ease-in-out group-hover:text-primary-300">
          Case study <ArrowForward fontSize="inherit" aria-hidden="true" />
        </span>
      </div>
    </Link>
  )
}
