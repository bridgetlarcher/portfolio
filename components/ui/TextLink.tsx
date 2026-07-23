import Link from 'next/link'

type Props = {
  href: string
  children: React.ReactNode
  external?: boolean
  variant?: 'inline' | 'action'
  className?: string
}

const variants = {
  inline: 'link-underline hover:text-accent-300',
  action:
    'link-underline hover:text-accent-300 inline-flex items-center gap-2 text-sm font-bold text-slate-300',
}

export function TextLink({ href, children, external, variant = 'inline', className }: Props) {
  return (
    <Link
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`${variants[variant]}${className ? ` ${className}` : ''}`}
    >
      {children}
    </Link>
  )
}
