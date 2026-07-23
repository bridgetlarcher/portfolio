type Props = {
  text: string
  id?: string
}

export function SectionHeader({ text, id }: Props) {
  return (
    <div className="relative flex items-center pb-4 xl:mr-4">
      <h2 id={id} className="mr-4 flex-shrink text-sm font-bold uppercase text-slate-300">
        {text}
      </h2>
      <div className="border-accent-800 flex-grow border-t"></div>
    </div>
  )
}
