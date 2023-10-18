import Image from 'next/image'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { ProjectItem } from '@/types/projects'
import { Pill } from './Pill'

type Props = {
  item: ProjectItem
}

export function ProjectListItem({ item }: Props) {
  return (
    <div className="flex flex-col gap-4 px-2 py-4 md:flex-row xl:w-[675px] xl:gap-6">
      <div className="relative h-[125px] cursor-pointer md:w-[125px] xl:w-[175px] xl:justify-center">
        <a href={item.link} target="_blank">
          <Image
            src={item.img}
            alt={`Preview for ${item.title}`}
            fill
            className="rounded-md object-cover"
          />
        </a>
      </div>
      <div className="flex flex-col flex-wrap gap-2 px-2 md:w-[300px] md:px-0 xl:w-[300px] xl:flex-grow">
        <div>
          <a href={item.link} target="_blank">
            <h3 className="mr-2 inline text-lg">{item.title}</h3>
            <OpenInNewIcon fontSize="inherit" className="text-sm" />
          </a>
        </div>
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
