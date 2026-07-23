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

// Homepage section: anchored with a scroll offset for the in-page nav.
// A titled section is named for assistive tech via its visible heading
// (aria-labelledby), so the label stays in sync with what's on screen.
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
      {title && <SectionHeader text={title} id={headingId} />}
      {children}
    </section>
  )
}
