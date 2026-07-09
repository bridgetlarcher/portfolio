import Image from 'next/image'
import Link from 'next/link'
import { ProjectItem } from '@/types/projects'
import { Pill } from './Pill'

type Props = {
  item: ProjectItem
}

export function PortfolioListItem({ item }: Props) {
  return (
    <Link
      href={item.link}
      className="group flex flex-col overflow-hidden rounded-xl border border-white/[.08] bg-white/[.04] font-normal text-slate-400 no-underline transition duration-300 ease-in-out hover:border-accent/40"
    >
      <div className="relative h-[190px] w-full">
        <Image src={item.img} alt="" fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-2 p-5">
        <span className="text-lg font-bold leading-tight text-slate-200">{item.title}</span>
        <span className="text-xs font-normal text-slate-400">{item.description}</span>
        <div className="mt-1 flex flex-row flex-wrap gap-2">
          {item.pills.map((pill) => (
            <Pill key={pill} text={pill} />
          ))}
        </div>
      </div>
    </Link>
  )
}
