type Props = {
  header: string
  description?: string | React.ReactNode
  type?: 'bar' | 'list'
  listNumber?: string
}

export function Callout({ header, description, type = 'bar', listNumber }: Props) {
  return (
    <div className="flex flex-row gap-5">
      <div className="flex flex-col">
        {type === 'bar' && <div className="h-full w-1 bg-accent-300" />}
        {type === 'list' && listNumber && (
          <p className="text-accent-300 mt-[6px] text-xs font-black">{listNumber}</p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-lg font-bold text-slate-200">{header}</p>
        {description}
      </div>
    </div>
  )
}
