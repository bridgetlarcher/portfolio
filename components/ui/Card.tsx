type Props = {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className }: Props) {
  return (
    <div
      className={`border-accent-300/20 bg-accent-300/5 flex flex-col gap-1 rounded-xl border px-6 py-5${
        className ? ` ${className}` : ''
      }`}
    >
      {children}
    </div>
  )
}
