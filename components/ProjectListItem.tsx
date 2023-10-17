import Image from 'next/image'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { ProjectItem } from '@/app/projects'
import { Pill } from './Pill'

type Props = {
  item: ProjectItem
}

export function ProjectListItem({ item }: Props) {
  return (
    <div className="flex flex-col gap-4 px-2 py-4 md:flex-row xl:w-[675px] xl:gap-6">
      <div className="relative h-[125px] md:w-[125px] xl:w-[175px] xl:justify-center">
        <Image
          src={item.img}
          alt={`Preview for ${item.title}`}
          fill
          className="rounded-md object-cover"
        />
      </div>
      <div className="flex flex-col flex-wrap gap-2 px-2 md:w-[300px] md:px-0 xl:w-[300px] xl:flex-grow">
        {item.link ? (
          <div>
            <a href={item.link} target="_blank">
              <h3 className="mr-2 inline text-lg">{item.title}</h3>
              <OpenInNewIcon fontSize="inherit" className="text-sm" />
            </a>
          </div>
        ) : (
          <h3 className="text-lg font-semibold text-slate-200">{item.title}</h3>
        )}
        <span>{item.description}</span>
        <div className="mt-2 flex flex-row flex-wrap gap-2">
          {item.pills.map((pill) => (
            <Pill key={pill} text={pill} />
          ))}
        </div>
      </div>
    </div>
  )
}
