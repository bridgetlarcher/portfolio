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
  const headingId = title ? `${id ?? slugify(title)}-heading` : undefined
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`${type === 'home' ? 'scroll-mt-24' : 'flex flex-col gap-6 md:mx-16'}${
        className ? ` ${className}` : ''
      }`}
    >
      {title && (
        <SectionHeader
          text={title}
          id={headingId}
          className={type === 'portfolio' ? 'md:-mx-20' : ''}
        />
      )}
      {children}
    </section>
  )
}
