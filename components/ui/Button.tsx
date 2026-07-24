type ButtonVariant = 'solid' | 'ghost'
type ButtonSize = 'icon' | 'sm' | 'lg'

const base =
  'inline-flex items-center justify-center rounded-lg font-bold no-underline transition duration-300 ease-in-out'

const variants: Record<ButtonVariant, string> = {
  solid: 'bg-primary-300 text-primary-950 hover:bg-primary-300/70',
  ghost:
    'border-slate-400/30 hover:border-primary-300/40 hover:text-primary-300 border text-slate-300',
}

const sizes: Record<ButtonSize, string> = {
  icon: 'p-3',
  sm: 'gap-2 px-4 py-2 text-sm',
  lg: 'gap-3 px-6 py-3 text-[15px]',
}

type Props = {
  href?: string
  children: React.ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  external?: boolean
  ariaLabel?: string
  className?: string
}

export function Button({
  href,
  children,
  variant = 'ghost',
  size = 'sm',
  external,
  ariaLabel,
  className,
}: Props) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`${base} ${variants[variant]} ${sizes[size]}${className ? ` ${className}` : ''}`}
    >
      {children}
    </a>
  )
}
