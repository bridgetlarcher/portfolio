type Props = {
  text: string
}

export function SectionHeader({ text }: Props) {
  return (
    <div className="relative flex items-center py-4 xl:mr-4">
      <h2 className="mr-4 flex-shrink text-sm font-bold uppercase">{text}</h2>
      <div className="flex-grow border-t border-slate-600"></div>
    </div>
  )
}
