type Props = {
  stat: string
  label: string
}

export function StatCard({ stat, label }: Props) {
  return (
    <div className="flex flex-col gap-1 rounded-xl border border-accent/20 bg-accent/[.06] p-6">
      <span className="text-4xl font-black leading-tight text-accent">{stat}</span>
      <span className="text-[13px] uppercase tracking-[.1em]">{label}</span>
    </div>
  )
}
