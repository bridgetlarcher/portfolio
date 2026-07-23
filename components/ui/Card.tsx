type Props = {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className }: Props) {
  return (
    <div
      className={`border-hairline bg-surface-card flex flex-col gap-1 rounded-xl border px-6 py-5${
        className ? ` ${className}` : ''
      }`}
    >
      {children}
    </div>
  )
}
