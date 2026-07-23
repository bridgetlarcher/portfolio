type Props = {
  header: string
  description?: string | React.ReactNode
  type?: 'bar' | 'list'
  listNumber?: string
}

export function EmphasizeText({ header, description, type = 'bar', listNumber }: Props) {
  return (
    <div className="flex flex-row gap-5">
      <div className="flex flex-col">
        {type === 'bar' && <div className="h-full w-1 bg-accent" />}
        {type === 'list' && listNumber && (
          <p className="mt-[6px] text-xs font-black text-accent">{listNumber}</p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-lg font-bold text-slate-200">{header}</p>
        {description && description}
      </div>
    </div>
  )
}
