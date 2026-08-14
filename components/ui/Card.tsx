type Props = {
  children: React.ReactNode
  className?: string
  /**
   * `divide-y` applies to direct children, so lists and
   * definition lists have to be the Card itself rather than a wrapper inside it.
   */
  as?: 'div' | 'ul' | 'dl'
  'aria-label'?: string
}

export function Card({ children, className, as: El = 'div', 'aria-label': ariaLabel }: Props) {
  return (
    <El
      aria-label={ariaLabel}
      className={`flex flex-col gap-1 rounded-xl border border-hairline bg-surface-card px-6 py-5${
        className ? ` ${className}` : ''
      }`}
    >
      {children}
    </El>
  )
}
