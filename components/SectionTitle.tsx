type Props = {
  title: string
}

export function SectionTitle({ title }: Props) {
  return (
    <div className="relative flex items-center pb-4">
      <span className="section-title mr-4 flex-shrink text-sm font-bold uppercase">{title}</span>
      <div className="flex-grow border-t border-slate-600"></div>
    </div>
  )
}
