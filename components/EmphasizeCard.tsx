type Props = {
  stat?: string
  header?: string
  label: string | React.ReactNode
}

export function EmphasizeCard({ stat, header, label }: Props) {
  return (
    <div className="flex flex-col gap-1 rounded-xl border border-accent/20 bg-accent/[.06] p-6">
      {stat && <span className="text-4xl font-black leading-tight text-accent">{stat}</span>}
      {header && <span className="text-lg font-bold text-accent">{header}</span>}
      {label}
    </div>
  )
}
