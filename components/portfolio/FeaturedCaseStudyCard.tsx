import Image from 'next/image'
import { ArrowForward, PlayArrow } from '@mui/icons-material'
import { CalloutCard } from '@/components/ui/CalloutCard'
import { Card } from '@/components/ui/Card'
import { TextLink } from '@/components/ui/TextLink'
import { ProjectItem } from '@/types/projects'

type Props = {
  item: ProjectItem
}

const mediaFrame =
  'relative block overflow-hidden rounded-xl border border-hairline bg-secondary-950'

export function FeaturedCaseStudyCard({ item }: Props) {
  const poster = (
    <Image
      src={item.img.src}
      alt={item.img.alt}
      width={640}
      height={300}
      priority
      sizes="(min-width: 768px) 50vw, 100vw"
      className="h-[300px] w-full object-cover opacity-[.85]"
    />
  )

  return (
    <Card className="flex flex-col gap-6 p-6 md:flex-row md:gap-8 md:p-11 lg:justify-between lg:gap-12">
      <div className="flex min-w-0 flex-1 flex-col gap-4">
        <span className="eyebrow">{item.eyebrow}</span>
        <h3 className="text-2xl font-black text-slate-200 lg:text-4xl">{item.title}</h3>
        <p>{item.description}</p>
        {item.stats && item.stats.length > 0 && (
          <div className="flex flex-row gap-4">
            {item.stats.map((stat) => (
              <CalloutCard
                key={stat.label}
                size="sm"
                className="flex-1 border-primary-300/30 shadow-glow"
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
            <span className="sr-only">— {item.title}</span>
          </TextLink>
        </div>
      </div>
      <figure className="flex flex-col justify-center gap-3 md:w-1/2 md:shrink-0">
        {item.video ? (
          <a
            href={item.video.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.video.label}
            className={`group ${mediaFrame} transition duration-300 ease-in-out hover:bg-primary-900`}
          >
            {poster}
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="inline-flex items-center gap-3 rounded-full border border-primary-300/40 bg-primary-950/85 px-5 py-3 text-sm font-bold text-primary-300">
                <PlayArrow fontSize="small" aria-hidden="true" />
                Play walkthrough
              </span>
            </span>
          </a>
        ) : (
          <div className={mediaFrame}>{poster}</div>
        )}
        {item.caption && (
          <figcaption className="text-xs italic text-slate-500">{item.caption}</figcaption>
        )}
      </figure>
    </Card>
  )
}
