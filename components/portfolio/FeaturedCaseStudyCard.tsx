import Image from 'next/image'
import { ArrowForward, PlayArrow } from '@mui/icons-material'
import { CalloutCard } from '@/components/ui/CalloutCard'
import { Card } from '@/components/ui/Card'
import { TextLink } from '@/components/ui/TextLink'
import { ProjectItem } from '@/types/projects'

type Props = {
  item: ProjectItem
}

export function FeaturedCaseStudyCard({ item }: Props) {
  const poster = (
    <Image
      src={item.img.src}
      alt={item.img.alt}
      width={640}
      height={300}
      className="h-[300px] w-full object-cover opacity-[.85]"
    />
  )

  return (
    <Card className="flex flex-col gap-6 p-6 md:flex-row md:gap-8 md:p-11 lg:justify-between lg:gap-12">
      <div className="flex flex-col gap-4">
        <span className="eyebrow">{item.eyebrow}</span>
        <h3 className="text-2xl font-black text-slate-200 lg:text-4xl">{item.title}</h3>
        <p>{item.description}</p>
        {item.stats && item.stats.length > 0 && (
          <div className="flex flex-row gap-4">
            {item.stats.map((stat) => (
              <CalloutCard
                key={stat.label}
                size="sm"
                className="shadow-glow border-accent-300/30 flex-1"
                stat={stat.stat}
                label={stat.label}
              />
            ))}
          </div>
        )}
        {item.footnote && <span className="text-sm">{item.footnote}</span>}
        <div className="flex flex-wrap items-center gap-7">
          {item.additionalActions}
          <TextLink href={item.link} variant="action">
            Read the case study <ArrowForward fontSize="inherit" aria-hidden="true" />
          </TextLink>
        </div>
      </div>
      <figure className="flex flex-col gap-3 lg:w-[1000px]">
        {item.video ? (
          <a
            href={item.video.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.video.label}
            className="hover:bg-accent-900 group relative block overflow-hidden rounded-xl border transition duration-300 ease-in-out"
          >
            {poster}
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="border-accent-300/40 bg-accent-950/85 text-accent-300 inline-flex items-center gap-3 rounded-full border px-5 py-3 text-sm font-bold">
                <PlayArrow fontSize="small" aria-hidden="true" />
                Play walkthrough
              </span>
            </span>
          </a>
        ) : (
          <div className="border-hairline bg-primary-950 relative overflow-hidden rounded-xl border">
            {poster}
          </div>
        )}
        {item.caption && (
          <figcaption className="text-xs italic text-slate-500">{item.caption}</figcaption>
        )}
      </figure>
    </Card>
  )
}
