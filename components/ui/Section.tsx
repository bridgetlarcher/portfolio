import { SectionHeader } from '@/components/ui/SectionHeader'

type Props = {
  type: 'home' | 'portfolio'
  title?: string
  id?: string
  className?: string
  children: React.ReactNode
}

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

export function Section({ type, title, id, className, children }: Props) {
  const classes = `${type === 'home' ? 'scroll-mt-24' : 'flex flex-col gap-6 md:mx-16'}${
    className ? ` ${className}` : ''
  }`

  if (!title) {
    return (
      <div id={id} className={classes}>
        {children}
      </div>
    )
  }

  const headingId = `${id ?? slugify(title)}-heading`
  return (
    <section id={id} aria-labelledby={headingId} className={classes}>
      <SectionHeader
        text={title}
        id={headingId}
        className={type === 'portfolio' ? 'md:-mx-20' : ''}
      />
      {children}
    </section>
  )
}
