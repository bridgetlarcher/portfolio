type Props = {
  header: string
  children?: React.ReactNode
  type?: 'bar' | 'list'
  listNumber?: string
}

export function Callout({ header, children, type = 'bar', listNumber }: Props) {
  return (
    <div className="flex flex-row gap-5">
      <div className="flex flex-col">
        {type === 'bar' && <div className="h-full w-1 bg-primary-300" />}
        {type === 'list' && listNumber && (
          <p className="mt-[6px] text-xs font-black text-primary-300">{listNumber}</p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-lg font-bold text-slate-200">{header}</p>
        {children}
      </div>
    </div>
  )
}
