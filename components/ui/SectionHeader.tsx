type Props = {
  text: string
  id?: string
  className?: string
}

export function SectionHeader({ text, id, className }: Props) {
  return (
    <div className={`relative flex items-center py-6 ${className}`}>
      <h2 id={id} className="subtitle mr-4 font-bold text-slate-300">
        {text}
      </h2>
      <div className="border-accent-800 flex-grow border-t"></div>
    </div>
  )
}
